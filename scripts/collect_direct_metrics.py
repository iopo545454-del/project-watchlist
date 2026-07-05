#!/usr/bin/env python3
"""Collect direct project metrics into static JSON for GitHub Pages.

Config-driven collector for public, frontend-safe project metrics. It avoids
private API keys by default; adapters that need env/RPC config must self-skip
instead of failing CI.
"""

from __future__ import annotations

import argparse
import copy
import json
import os
import sys
import urllib.error
import urllib.request
from datetime import datetime, timezone
from pathlib import Path
from typing import Any, Dict, Iterable, List, Optional, Tuple

ROOT = Path(__file__).resolve().parents[1]
CONFIG_PATH = ROOT / "data" / "direct-sources.json"
OUT_DIR = ROOT / "docs" / "data" / "direct-metrics"
HISTORY_DIR = OUT_DIR / "history"
LATEST_PATH = OUT_DIR / "latest.json"
FETCH_LOG_PATH = OUT_DIR / "fetch-log.json"


def now_iso() -> str:
    return datetime.now(timezone.utc).replace(microsecond=0).isoformat().replace("+00:00", "Z")


def http_json(url: str, *, method: str = "GET", body: Optional[dict] = None, timeout: int = 25) -> Any:
    data = None if body is None else json.dumps(body).encode("utf-8")
    req = urllib.request.Request(
        url,
        data=data,
        method=method,
        headers={
            "User-Agent": "Hermes project-watchlist direct-data collector",
            "Accept": "application/json",
            "Content-Type": "application/json",
        },
    )
    with urllib.request.urlopen(req, timeout=timeout) as resp:
        return json.load(resp)


def get_path(data: Any, path: str) -> Any:
    """Tiny JSONPath-ish extractor supporting dotted keys and [N] indexes."""
    cur = data
    if not path:
        return cur
    for raw_part in path.split("."):
        part = raw_part
        while part:
            if "[" in part:
                key, rest = part.split("[", 1)
                if key:
                    cur = cur[key] if isinstance(cur, dict) else None
                idx_s, part = rest.split("]", 1)
                idx = int(idx_s)
                cur = cur[idx] if isinstance(cur, list) and len(cur) > idx else None
                if part.startswith("."):
                    part = part[1:]
            else:
                cur = cur[part] if isinstance(cur, dict) else None
                part = ""
            if cur is None:
                return None
    return cur


def coerce_number(value: Any) -> Optional[float]:
    if value is None or value == "":
        return None
    try:
        return float(value)
    except (TypeError, ValueError):
        return None


def fmt_usd(value: Any) -> str:
    num = coerce_number(value)
    if num is None:
        return "n/a"
    sign = "-" if num < 0 else ""
    num = abs(num)
    if num >= 1_000_000_000:
        return f"{sign}${num / 1_000_000_000:.2f}B"
    if num >= 1_000_000:
        return f"{sign}${num / 1_000_000:.1f}M"
    if num >= 1_000:
        return f"{sign}${num / 1_000:.1f}K"
    if num >= 1:
        return f"{sign}${num:,.0f}"
    if num >= 0.01:
        return f"{sign}${num:.4f}".rstrip("0").rstrip(".")
    return f"{sign}${num:.6f}".rstrip("0").rstrip(".")


def fmt_number(value: Any) -> str:
    num = coerce_number(value)
    if num is None:
        return "n/a" if value is None else str(value)
    if num >= 1_000_000_000:
        return f"{num / 1_000_000_000:.2f}B"
    if num >= 1_000_000:
        return f"{num / 1_000_000:.1f}M"
    if num >= 1_000:
        return f"{num / 1_000:.1f}K"
    return f"{num:,.0f}"


def pct(value: Any) -> Optional[str]:
    num = coerce_number(value)
    if num is None:
        return None
    return f"{num:+.1f}%"


def display_value(value: Any, unit: str, display_format: Optional[str] = None) -> str:
    if display_format == "usd" or unit == "usd":
        return fmt_usd(value)
    if display_format == "percent":
        p = pct(value)
        return p if p is not None else "n/a"
    if display_format == "integer":
        return fmt_number(value)
    return "n/a" if value is None else str(value)


def metric_payload(metric_id: str, group: str, label: str, value: Any, unit: str, source: dict, *, display: Optional[str] = None, change: Optional[str] = None, interpretation: str = "") -> dict:
    return {
        "id": metric_id,
        "group": group,
        "label": label,
        "value": value,
        "unit": unit,
        "display": display if display is not None else display_value(value, unit),
        "change": change,
        "source_id": source["id"],
        "source_url": source.get("url"),
        "source_quality": source.get("source_quality", ""),
        "interpretation": interpretation,
    }


def extract_metric(source: dict, spec: dict, data: Any) -> dict:
    value = get_path(data, spec.get("path", ""))
    scale = spec.get("scale")
    numeric_value = coerce_number(value)
    if scale and numeric_value is not None:
        value = numeric_value / float(scale)
    unit = spec.get("unit", "count")
    change = None
    if spec.get("change_path"):
        change = pct(get_path(data, spec["change_path"]))
    return metric_payload(
        spec["id"],
        source.get("metric_group", spec.get("group", "general")),
        spec.get("label", spec["id"]),
        value,
        unit,
        source,
        display=display_value(value, unit, spec.get("display_format")),
        change=change,
        interpretation=spec.get("interpretation", source.get("interpretation", "")),
    )


def collect_json_api(source: dict) -> Tuple[List[dict], dict, List[str]]:
    method = source.get("method", "GET")
    body = source.get("body")
    data = http_json(source["url"], method=method, body=body, timeout=int(source.get("timeout", 25)))
    metrics = [extract_metric(source, spec, data) for spec in source.get("metrics", [])]
    extra: Dict[str, Any] = {}
    notes: List[str] = []
    for note_path in source.get("note_paths", []):
        value = get_path(data, note_path)
        if value is not None:
            notes.append(f"{note_path}: {value}")
    return metrics, extra, notes


def collect_defillama_protocol(source: dict) -> Tuple[List[dict], dict, List[str]]:
    data = http_json(source["url"], timeout=int(source.get("timeout", 25)))
    metrics: List[dict] = []
    tvl = None
    if data.get("tvl"):
        tvl = (data.get("tvl") or [{}])[-1].get("totalLiquidityUSD")
    if tvl is None:
        tvl = data.get("tvl") or data.get("currentChainTvls", {}).get("total")
    metrics.append(metric_payload("tvl_total", source.get("metric_group", "tvl"), "TVL", tvl, "usd", source, display=fmt_usd(tvl), interpretation=source.get("interpretation", "DefiLlama protocol TVL/context metric.")))
    extra: Dict[str, Any] = {}
    current = data.get("currentChainTvls") or {}
    if isinstance(current, dict):
        extra["chain_breakdown"] = [
            {"chain": chain, "value": value, "display": fmt_usd(value)}
            for chain, value in sorted(current.items(), key=lambda kv: float(kv[1] or 0), reverse=True)
            if value and coerce_number(value) and not chain.endswith("-staking") and chain != "staking"
        ]
    return metrics, extra, []


def collect_defillama_summary(source: dict) -> Tuple[List[dict], dict, List[str]]:
    data = http_json(source["url"], timeout=int(source.get("timeout", 25)))
    specs = source.get("metrics") or [
        {"id": "total24h", "label": "24h", "path": "total24h", "unit": "usd", "display_format": "usd", "change_path": "change_1d"},
        {"id": "total7d", "label": "7d", "path": "total7d", "unit": "usd", "display_format": "usd"},
        {"id": "total30d", "label": "30d", "path": "total30d", "unit": "usd", "display_format": "usd"},
    ]
    return [extract_metric(source, spec, data) for spec in specs], {}, []


def collect_blockscout_token(source: dict) -> Tuple[List[dict], dict, List[str]]:
    data = http_json(source["url"], timeout=int(source.get("timeout", 25)))
    specs = source.get("metrics") or [
        {"id": "token_price", "label": "Token price", "path": "exchange_rate", "unit": "usd", "display_format": "usd"},
        {"id": "circulating_market_cap", "label": "Circulating market cap", "path": "circulating_market_cap", "unit": "usd", "display_format": "usd"},
        {"id": "volume_24h", "label": "24h volume", "path": "volume_24h", "unit": "usd", "display_format": "usd"},
        {"id": "holders_count", "label": "Holders", "path": "holders_count", "unit": "count", "display_format": "integer"},
        {"id": "total_supply", "label": "Total supply", "path": "total_supply", "unit": "tokens", "scale": 1_000_000_000_000_000_000, "display_format": "integer"},
    ]
    metrics = [extract_metric(source, spec, data) for spec in specs]
    price = coerce_number(data.get("exchange_rate"))
    supply_metric = next((m for m in metrics if m["id"] == "total_supply"), None)
    if price is not None and supply_metric and coerce_number(supply_metric.get("value")) is not None:
        fdv = price * float(supply_metric["value"])
        metrics.append(metric_payload("fdv", source.get("metric_group", "token_market"), "FDV", fdv, "usd", source, display=fmt_usd(fdv), interpretation="Explorer token price multiplied by total supply."))
    return metrics, {}, []


def collect_taostats(source: dict) -> Tuple[List[dict], dict, List[str]]:
    # Public Taostats API generally requires auth. Keep these entries explicit and
    # self-skipping so CI does not fail while the source remains documented.
    if not os.environ.get(source.get("env_var", "TAOSTATS_API_KEY")):
        raise SkipSource("skipped_no_env")
    return collect_json_api(source)


class SkipSource(Exception):
    pass


ADAPTERS = {
    "json_api": collect_json_api,
    "defillama_api": collect_defillama_summary,
    "defillama_protocol": collect_defillama_protocol,
    "blockscout_token": collect_blockscout_token,
    "taostats": collect_taostats,
    "manual_only": lambda source: (_ for _ in ()).throw(SkipSource("manual_only")),
}


def previous_history(slug: str) -> dict:
    path = HISTORY_DIR / f"{slug}.json"
    if not path.exists():
        return {"slug": slug, "series": {}, "events": []}
    try:
        return json.loads(path.read_text())
    except json.JSONDecodeError:
        return {"slug": slug, "series": {}, "events": [{"warning": "previous_history_json_invalid"}]}


def build_history(slug: str, project: dict, generated_at: str) -> dict:
    history = previous_history(slug)
    history.setdefault("slug", slug)
    history["display_name"] = project.get("display_name")
    history["generated_at"] = generated_at
    history.setdefault("series", {})
    for m in project.get("metrics", []):
        value = m.get("value")
        if isinstance(value, (int, float)) or coerce_number(value) is not None:
            history["series"].setdefault(m["id"], [])
            history["series"][m["id"]].append({"t": generated_at, "v": coerce_number(value), "source_id": m.get("source_id")})
            history["series"][m["id"]] = history["series"][m["id"]][-720:]
    if project.get("chain_breakdown"):
        history.setdefault("chain_breakdown", [])
        history["chain_breakdown"].append({"t": generated_at, "values": project["chain_breakdown"]})
        history["chain_breakdown"] = history["chain_breakdown"][-240:]
    history.setdefault("events", [])
    return history


def collect_project(slug: str, cfg: dict, generated_at: str) -> Tuple[dict, dict, dict]:
    metrics: List[dict] = []
    notes: List[str] = []
    errors: List[dict] = []
    chain_breakdown: List[dict] = []
    sources_checked = sources_ok = sources_failed = sources_skipped = 0

    for source in cfg.get("sources", []):
        sources_checked += 1
        source_type = source.get("source_type", "json_api")
        adapter = ADAPTERS.get(source_type)
        if not adapter:
            sources_failed += 1
            errors.append({"source_id": source.get("id"), "status": "failed", "error": f"unknown_source_type:{source_type}"})
            continue
        try:
            source_metrics, extra, source_notes = adapter(source)
            metrics.extend(source_metrics)
            if extra.get("chain_breakdown") and not chain_breakdown:
                chain_breakdown = extra["chain_breakdown"]
            notes.extend(source_notes)
            sources_ok += 1
        except SkipSource as exc:
            sources_skipped += 1
            notes.append(f"{source.get('id')}: {exc}")
        except Exception as exc:  # noqa: BLE001
            sources_failed += 1
            errors.append({"source_id": source.get("id"), "status": "failed", "error": repr(exc)})

    if sources_ok > 0 and sources_failed == 0:
        status = "active"
    elif sources_ok > 0:
        status = "partial"
    elif sources_skipped > 0 and sources_failed == 0:
        status = "skipped"
    else:
        status = "error"

    project_payload = {
        "display_name": cfg.get("display_name", slug),
        "ticker": cfg.get("ticker"),
        "status": status,
        "summary": cfg.get("summary", "Direct metrics collected from configured public sources."),
        "methodology_file": cfg.get("methodology_file"),
        "last_refreshed": generated_at,
        "metrics": metrics,
        "chain_breakdown": chain_breakdown,
        "open_adapter_work": cfg.get("open_adapter_work", []),
        "notes": notes,
        "errors": errors,
    }
    run_piece = {
        "slug": slug,
        "status": status,
        "sources_checked": sources_checked,
        "sources_ok": sources_ok,
        "sources_failed": sources_failed,
        "sources_skipped": sources_skipped,
        "errors": errors,
    }
    return project_payload, build_history(slug, project_payload, generated_at), run_piece


def write_json(path: Path, payload: Any) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(json.dumps(payload, indent=2, sort_keys=False) + "\n")


def load_config() -> dict:
    return json.loads(CONFIG_PATH.read_text())


def main() -> int:
    parser = argparse.ArgumentParser(description="Collect direct metrics for project watchlist")
    parser.add_argument("--slug", action="append", help="Project slug to collect; can be repeated. Default: all configured projects")
    parser.add_argument("--write", action="store_true", help="Write docs/data/direct-metrics JSON outputs")
    parser.add_argument("--test-only", action="store_true", help="Fetch and print summary without writing")
    args = parser.parse_args()

    config = load_config()
    generated_at = now_iso()
    slugs = args.slug or list(config.get("projects", {}).keys())

    projects: Dict[str, dict] = {}
    histories: Dict[str, dict] = {}
    run_projects: List[dict] = []
    for slug in slugs:
        if slug not in config.get("projects", {}):
            print(f"Unknown slug in direct-sources config: {slug}", file=sys.stderr)
            return 2
        project_payload, history_payload, run_piece = collect_project(slug, config["projects"][slug], generated_at)
        projects[slug] = project_payload
        histories[slug] = history_payload
        run_projects.append(run_piece)

    totals = {
        "sources_checked": sum(p["sources_checked"] for p in run_projects),
        "sources_ok": sum(p["sources_ok"] for p in run_projects),
        "sources_failed": sum(p["sources_failed"] for p in run_projects),
        "sources_skipped": sum(p["sources_skipped"] for p in run_projects),
    }
    overall = "active" if totals["sources_ok"] and totals["sources_failed"] == 0 else "partial" if totals["sources_ok"] else "error"
    latest_payload = {"version": 1, "generated_at": generated_at, "projects": projects}
    fetch_log = {
        "version": 1,
        "latest_run": {
            "run_id": "direct-data-" + generated_at.replace("-", "").replace(":", ""),
            "started_at": generated_at,
            "completed_at": now_iso(),
            "status": overall,
            "projects_checked": slugs,
            **totals,
            "project_results": run_projects,
        },
    }

    if args.write:
        config["updated_at"] = generated_at
        write_json(CONFIG_PATH, config)
        write_json(LATEST_PATH, latest_payload)
        for slug, history in histories.items():
            write_json(HISTORY_DIR / f"{slug}.json", history)
        write_json(FETCH_LOG_PATH, fetch_log)
    else:
        print(json.dumps({"latest": latest_payload, "fetch_log": fetch_log}, indent=2)[:20000])

    print(
        f"Collected {sum(len(p['metrics']) for p in projects.values())} metrics for {len(projects)} projects; status={overall}; write={args.write}",
        file=sys.stderr,
    )
    return 0 if overall in {"active", "partial"} else 1


if __name__ == "__main__":
    raise SystemExit(main())
