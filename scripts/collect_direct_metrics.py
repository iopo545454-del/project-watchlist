#!/usr/bin/env python3
"""Collect direct project metrics into static JSON for GitHub Pages.

First implementation targets DRV / Derive only. It intentionally avoids private
API keys and ERC-20 checks for now; output is safe to commit under docs/data/.
"""

from __future__ import annotations

import argparse
import json
import sys
import time
import urllib.error
import urllib.request
from datetime import datetime, timezone
from pathlib import Path
from typing import Any, Dict, List, Optional

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


def fmt_usd(value: Optional[float]) -> str:
    if value is None:
        return "n/a"
    value = float(value)
    sign = "-" if value < 0 else ""
    value = abs(value)
    if value >= 1_000_000_000:
        return f"{sign}${value / 1_000_000_000:.2f}B"
    if value >= 1_000_000:
        return f"{sign}${value / 1_000_000:.1f}M"
    if value >= 1_000:
        return f"{sign}${value / 1_000:.1f}K"
    return f"{sign}${value:,.0f}"


def pct(value: Optional[float]) -> Optional[str]:
    if value is None:
        return None
    return f"{float(value):+.1f}%"


def metric(metric_id: str, group: str, label: str, value: Any, unit: str, source_id: str, source_url: str, *, display: Optional[str] = None, change: Optional[str] = None, interpretation: str = "", source_quality: str = "") -> dict:
    return {
        "id": metric_id,
        "group": group,
        "label": label,
        "value": value,
        "unit": unit,
        "display": display if display is not None else str(value),
        "change": change,
        "source_id": source_id,
        "source_url": source_url,
        "source_quality": source_quality,
        "interpretation": interpretation,
    }


def collect_drv(config: dict, generated_at: str) -> tuple[dict, dict, dict]:
    project_cfg = config["projects"]["drv-derive"]
    sources = {s["id"]: s for s in project_cfg["sources"]}
    metrics: List[dict] = []
    notes: List[str] = []
    errors: List[dict] = []
    chain_breakdown: List[dict] = []
    governance: List[dict] = []
    open_adapter_work: List[dict] = []
    sources_checked = 0
    sources_ok = 0
    sources_failed = 0

    # DefiLlama fees / revenue proxy
    fees_source = sources["defillama_derive_fees"]
    sources_checked += 1
    try:
        fees = http_json(fees_source["url"])
        sources_ok += 1
        metrics.extend([
            metric("fees_24h", "fees_revenue", "24h fees", fees.get("total24h"), "usd", fees_source["id"], fees_source["url"], display=fmt_usd(fees.get("total24h")), change=pct(fees.get("change_1d")), interpretation="Gross fee proxy from DefiLlama's Derive adapter; compare against buybacks and incentives.", source_quality=fees_source["source_quality"]),
            metric("fees_7d", "fees_revenue", "7d fees", fees.get("total7d"), "usd", fees_source["id"], fees_source["url"], display=fmt_usd(fees.get("total7d")), interpretation="Weekly protocol-fee proxy. Useful for DRV buyback capacity context.", source_quality=fees_source["source_quality"]),
            metric("fees_30d", "fees_revenue", "30d fees", fees.get("total30d"), "usd", fees_source["id"], fees_source["url"], display=fmt_usd(fees.get("total30d")), interpretation="Monthly protocol-fee proxy. Track trend before treating buybacks as sustainable.", source_quality=fees_source["source_quality"]),
            metric("fees_all_time", "fees_revenue", "All-time fees", fees.get("totalAllTime"), "usd", fees_source["id"], fees_source["url"], display=fmt_usd(fees.get("totalAllTime")), interpretation="Cumulative DefiLlama fee figure for Derive-linked adapters.", source_quality=fees_source["source_quality"]),
        ])
    except Exception as exc:  # noqa: BLE001
        sources_failed += 1
        errors.append({"source_id": fees_source["id"], "error": repr(exc)})

    # DefiLlama TVL / collateral by chain
    tvl_source = sources["defillama_derive_tvl"]
    sources_checked += 1
    try:
        tvl = http_json(tvl_source["url"])
        sources_ok += 1
        latest_tvl = (tvl.get("tvl") or [{}])[-1]
        total_tvl = latest_tvl.get("totalLiquidityUSD")
        metrics.append(metric("tvl_total", "tvl_collateral", "TVL / collateral", total_tvl, "usd", tvl_source["id"], tvl_source["url"], display=fmt_usd(total_tvl), interpretation="DefiLlama TVL/collateral context; not a substitute for OI, volume, or fee quality.", source_quality=tvl_source["source_quality"]))
        current = tvl.get("currentChainTvls") or {}
        chain_breakdown = [
            {"chain": chain, "value": value, "display": fmt_usd(value)}
            for chain, value in sorted(current.items(), key=lambda kv: float(kv[1] or 0), reverse=True)
            if value and float(value) > 0 and not chain.endswith("-staking") and chain != "staking"
        ]
    except Exception as exc:  # noqa: BLE001
        sources_failed += 1
        errors.append({"source_id": tvl_source["id"], "error": repr(exc)})

    # DefiLlama options volume proxy
    options_source = sources["defillama_derive_options_volume"]
    sources_checked += 1
    try:
        options = http_json(options_source["url"])
        protocols = options.get("protocols") or []
        derive_options = None
        for protocol in protocols:
            if protocol.get("name") == "Derive Options" or protocol.get("module") == "lyra-v2":
                derive_options = protocol
                break
        if not derive_options:
            raise RuntimeError("Derive Options protocol not found in DefiLlama options overview")
        sources_ok += 1
        metrics.extend([
            metric("options_volume_24h", "options_volume", "24h options volume", derive_options.get("total24h"), "usd", options_source["id"], options_source["url"], display=fmt_usd(derive_options.get("total24h")), change=pct(derive_options.get("change_1d")), interpretation="Aggregate Derive Options volume from DefiLlama; not per-underlying OI/volume yet.", source_quality=options_source["source_quality"]),
            metric("options_volume_7d", "options_volume", "7d options volume", derive_options.get("total7d"), "usd", options_source["id"], options_source["url"], display=fmt_usd(derive_options.get("total7d")), change=pct(derive_options.get("change_7d")), interpretation="Weekly options-flow proxy; needs official Derive market adapter for HYPE/BTC/ETH split.", source_quality=options_source["source_quality"]),
            metric("options_volume_30d", "options_volume", "30d options volume", derive_options.get("total30d"), "usd", options_source["id"], options_source["url"], display=fmt_usd(derive_options.get("total30d")), change=pct(derive_options.get("change_1m")), interpretation="Monthly options-flow proxy; useful for trend context until per-underlying adapter exists.", source_quality=options_source["source_quality"]),
        ])
    except Exception as exc:  # noqa: BLE001
        sources_failed += 1
        errors.append({"source_id": options_source["id"], "error": repr(exc)})

    # Snapshot governance
    gov_source = sources["snapshot_lyra_governance"]
    sources_checked += 1
    try:
        body = {
            "query": "query Proposals($space:String!){proposals(first:5, skip:0, where:{space_in:[$space]}, orderBy:\"created\", orderDirection:desc){id title state created end link scores_total}}",
            "variables": {"space": gov_source["space"]},
        }
        gov = http_json(gov_source["url"], method="POST", body=body)
        proposals = (((gov or {}).get("data") or {}).get("proposals") or [])
        sources_ok += 1
        governance = [
            {
                "id": p.get("id"),
                "title": p.get("title"),
                "state": p.get("state"),
                "created": datetime.fromtimestamp(p.get("created", 0), tz=timezone.utc).date().isoformat() if p.get("created") else None,
                "end": datetime.fromtimestamp(p.get("end", 0), tz=timezone.utc).date().isoformat() if p.get("end") else None,
                "link": p.get("link"),
                "scores_total": p.get("scores_total"),
            }
            for p in proposals
        ]
        notes.append("Snapshot lyra.eth fetch works, but current DRV-era canonical governance venue still needs confirmation.")
    except Exception as exc:  # noqa: BLE001
        sources_failed += 1
        errors.append({"source_id": gov_source["id"], "error": repr(exc)})

    open_adapter_work.extend([
        {
            "label": "OI / volume by underlying",
            "status": "not_implemented",
            "notes": "Should be onchain-derivable or available through Derive public market data, but the first iteration only used stable aggregate DefiLlama volume. Next adapter should test Derive public API/WebSocket or index Derive Chain events for BTC/ETH/HYPE OI and volume splits."
        },
        {
            "label": "DRV buyback wallet / onchain mapping",
            "status": "needs_source_mapping",
            "notes": "Official posts confirm weekly DAO buybacks, but the text does not publish a single canonical buyback wallet. Next adapter should extract txs/wallets from official buyback media or DAO/treasury docs, then verify swaps/transfers onchain before displaying."
        },
    ])

    status = "active" if sources_failed == 0 else "partial"
    if sources_ok == 0:
        status = "error"

    project_payload = {
        "display_name": project_cfg["display_name"],
        "ticker": project_cfg["ticker"],
        "status": status,
        "summary": "Fees, TVL, aggregate options volume, and Snapshot governance are fetchable. OI by underlying, buyback wallet mapping, collateral composition, and market-quality adapters remain open.",
        "methodology_file": project_cfg["methodology_file"],
        "last_refreshed": generated_at,
        "metrics": metrics,
        "chain_breakdown": chain_breakdown,
        "governance": governance,
        "open_adapter_work": open_adapter_work,
        "notes": notes,
        "errors": errors,
    }

    history_payload = {
        "slug": "drv-derive",
        "display_name": project_cfg["display_name"],
        "generated_at": generated_at,
        "series": {
            m["id"]: [{"t": generated_at, "v": m["value"], "source_id": m["source_id"]}]
            for m in metrics
            if isinstance(m.get("value"), (int, float))
        },
        "chain_breakdown": [{"t": generated_at, "values": chain_breakdown}],
        "governance": governance,
        "events": [],
    }

    run_payload = {
        "run_id": "direct-data-" + generated_at.replace("-", "").replace(":", "").replace("Z", "Z"),
        "started_at": generated_at,
        "completed_at": now_iso(),
        "status": status,
        "projects_checked": ["drv-derive"],
        "sources_checked": sources_checked,
        "sources_ok": sources_ok,
        "sources_failed": sources_failed,
        "errors": errors,
        "notes": notes,
    }
    return project_payload, history_payload, run_payload


def write_json(path: Path, payload: Any) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(json.dumps(payload, indent=2, sort_keys=False) + "\n")


def main() -> int:
    parser = argparse.ArgumentParser(description="Collect direct metrics for project watchlist")
    parser.add_argument("--slug", default="drv-derive", help="Project slug to collect (currently drv-derive)")
    parser.add_argument("--write", action="store_true", help="Write docs/data/direct-metrics JSON outputs")
    parser.add_argument("--test-only", action="store_true", help="Fetch and print summary without writing")
    args = parser.parse_args()

    if args.slug != "drv-derive":
        parser.error("Only --slug drv-derive is implemented in the first iteration")

    config = json.loads(CONFIG_PATH.read_text())
    generated_at = now_iso()
    config["updated_at"] = generated_at
    project_payload, history_payload, run_payload = collect_drv(config, generated_at)

    latest_payload = {
        "version": 1,
        "generated_at": generated_at,
        "projects": {"drv-derive": project_payload},
    }
    fetch_log = {"version": 1, "latest_run": run_payload}

    if args.write:
        write_json(CONFIG_PATH, config)
        write_json(LATEST_PATH, latest_payload)
        write_json(HISTORY_DIR / "drv-derive.json", history_payload)
        write_json(FETCH_LOG_PATH, fetch_log)
    else:
        print(json.dumps({"latest": latest_payload, "fetch_log": fetch_log}, indent=2)[:12000])

    status = project_payload["status"]
    print(f"Collected {len(project_payload['metrics'])} metrics for drv-derive; status={status}; write={args.write}", file=sys.stderr)
    return 0 if status in {"active", "partial"} else 1


if __name__ == "__main__":
    raise SystemExit(main())
