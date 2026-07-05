# Verification Loop & Scan Quality Implementation Plan

> **For Hermes:** Execute this plan task-by-task, in order. Each task has acceptance criteria; do not start a later phase until the earlier phase's criteria pass. Commit per task (or per coherent group of tasks) with descriptive messages, not the generic scan-state message.

**Date:** 2026-07-04 (revised 2026-07-05: purpose statement, Phase 1 status, Task 2.0 context blocks, follow-ups relocated from the old plan)
**Supersedes / narrows:** [`2026-06-22-research-os-hardening-plan.md`](2026-06-22-research-os-hardening-plan.md). That plan is architecturally sound but too large to have been executed (17 tasks, zero shipped). This plan pulls in only its minimal validation subset (old Tasks 4, 5, 6, 9 in reduced form) and defers the full generator layer. Where this plan and the old plan conflict, this plan wins. Do not implement old-plan tasks not referenced here without explicit user approval.

## Purpose (added 2026-07-05 — read first)

The operator's division of labor, stated explicitly: **the user does the price/chart judgment themselves.** The repo/Hermes exists to do two things only — (1) **acquire** new project-related information, from the widest credible source base, and (2) **contextualize** it: what does this new item mean given everything the repo already knows about the project?

Consequences for this plan:

- Phase 2 is not hygiene; it is the product core. Source diversification and deep-pass rotation are the "acquire" half; the new Task 2.0 (context blocks) is the "contextualize" half.
- **Retired directions — do not implement:** a cross-basket valuation/comps screen and a scored/mark-to-market prediction journal were both considered on 2026-07-05 and rejected as misaligned (they attempt the price-judgment half, which is the user's). The only surviving remnant is Task 2.4 (append-only Hermes takes), which serves context, not scoring.
- The discovery layer (Phase 5) serves the same purpose at project granularity and rises in priority once Phase 2 holds, still gated on Phases 1–3.

## Diagnosis (why these tasks, in this order)

A 2026-07-04 review of the repo graded it B/B+: the analyst framework (AGENTS.md) and per-dossier analysis quality are strong, operations are consistent (~6 scans/day, indexes aligned), but four gaps compound over time:

1. **The verification loop is dormant.** Scan notes constantly defer to "cross-check against fees/OI/buybacks," but `scripts/collect_direct_metrics.py` ran once (2026-06-23), for DRV only, and never again. Investment-math tables in dossiers (Chutes, POD) hold stale mid-June snapshots with no refresh mechanism. Claims flow in faster than they get verified.
2. **Evidence is Twitter-monoculture.** ~257 of 303 changelog entries cite x.com. The source-priority ladder in AGENTS.md (docs > GitHub > governance > onchain before third-party) is not reflected in practice, so the record inherits each project's own PR framing.
3. **Attention skew with no floor.** BANKR has 35 changelog entries, NEAR 34; Compute Horde has 1, IOTA-SN9 has 2, POD 3. Quiet projects have open questions that are checkable but never get checked. Nothing distinguishes a real per-scan check from a glance.
4. **Hygiene drift and unbounded growth.** README project list is missing 21–23 and has 24–26 appended into the wrong section; `data/21-pluralis.json` and `data/22-ambient.json` are missing; root `data/` is not in the AGENTS.md canonical-files list and has no known consumer; no validator or CI exists; dossier "Latest scan notes" and the flat changelog grow without pruning rules.

Priority: **fix the verification loop first** (it is the core value of the watchlist), then scan behavior, then hygiene, then growth control. A discovery layer (Phase 5) comes only after the rest holds, because discovery widens the intake funnel into a system that must first finish its follow-ups.

## Constraints

- Python 3 standard library only; no new runtime dependencies.
- No API keys or RPC URLs committed. Onchain adapters that need `BASE_HTTP_URL` or similar env vars must degrade gracefully (`skipped_no_env`) when the var is absent (e.g. in CI).
- Preserve the quiet-run rule: no-change runs still update scan state only when useful.
- `projects/*.md` remain the canonical source of truth; generated JSON under `docs/data/` is derived.
- All existing AGENTS.md rules (materiality threshold, source priority, changelog schema, catalyst standard) stay in force; this plan amends AGENTS.md where noted, it does not replace it.

---

## Phase 1 — Reactivate the verification loop

> **Status 2026-07-05:** Tasks 1.1–1.4 shipped in `866fe19` and hardened in `8590eb7` (workflow rebase-before-push, orphan history file removed). Task 1.3's "two consecutive scheduled runs" check is pending — note the churn guard means quiet cron runs leave no commit, so verify via the repo's **Actions run history** for `Direct metrics collector`, not the git log. Task 1.5 is **not started**. Task 1.1 has open backfill debt (see addendum).

### Task 1.1: Extend `data/direct-sources.json` beyond DRV

Add per-project source configs, following the existing DRV pilot schema (`id`, `label`, `metric_group`, `source_type`, `url`, `cadence`, `status`, `source_quality`, `materiality_rules`). Before adding any source, **test the fetch programmatically** and record `tested_ok` / `partial` / `failed` per the Direct Data / KPI methodology — do not add untested endpoints as `tested_ok`.

Start with projects whose dossiers already name working endpoints:

| Project | Candidate sources | Notes |
|---|---|---|
| Chutes (SN64) | `https://api.llama.fi/summary/fees/chutes?dataType=dailyRevenue`; Taostats SN64 | DefiLlama endpoint already cited in dossier; test Taostats for a JSON API before falling back to `manual_only` |
| Targon (SN4), Lium (SN51), Compute Horde (SN12), IOTA (SN9), TAO | Taostats subnet/root endpoints | One shared `taostats` adapter; if no clean public API, mark `manual_only` and record the limitation once, centrally |
| AKT / Akash | DefiLlama protocol + fees endpoints | Standard adapter reuse |
| VIRTUAL / Virtuals | DefiLlama + token supply via public explorer API if key-free | Skip holder analytics needing keys |
| GRASS, NEAR, WLD, BIO, VVV, Kinetiq, CHIP, GEOD, META, DRV (keep) | DefiLlama where listed; official stats APIs where dossiers name them | For each: 15 minutes of endpoint testing max; record failures in the config with `status: failed` + note, then move on |
| POD | Blockscout token endpoint (`base.blockscout.com` API) | Answers the standing "stale June 21 snapshot" problem |

Acceptance: `direct-sources.json` covers at least 10 projects with at least one `tested_ok` source each; every entry's status reflects an actual test run recorded in the fetch log.

> **Addendum (backfill debt, moved here from the old plan's items 15–16 on 2026-07-05):** candidate-table projects with no `direct-sources.json` entry at all (GEOD, META, CHIP, BANKR, TAO, Targon, and any other omissions) must get explicit entries — `tested_ok`, `failed`, `blocked`, or `manual_only` with a note — rather than being absent. Absence is indistinguishable from "never tried." Not a blocker (the ≥10 threshold is met); fold into a normal scan run.

### Task 1.2: Confirm `collect_direct_metrics.py` is fully config-driven and multi-project

The script was written DRV-first. Verify it iterates all configured projects, writes per-project history under `docs/data/direct-metrics/history/<slug>.json`, updates `latest.json` and `fetch-log.json`, and handles per-source failure without aborting the whole run. Add adapter types as needed for Task 1.1 (`taostats`, `blockscout`, generic `json_api` with a JSONPath-ish field map). Keep adapters dumb: fetch, extract named metrics, timestamp, append history.

Acceptance: one local run populates `latest.json` with all Task 1.1 projects; a deliberately broken URL in config produces a logged failure, not a crash.

### Task 1.3: Schedule the collector

Two layers, both required:

1. **Every Hermes scan run** starts by executing `python3 scripts/collect_direct_metrics.py` and committing refreshed metrics with the rest of the scan. Amend the AGENTS.md "Recurring scan workflow" — insert as new step 3 ("Refresh direct metrics via the collector; treat metric deltas that trip `materiality_rules` as scan findings").
2. **GitHub Actions fallback cron** (`.github/workflows/direct-metrics.yml`): runs the collector every 6h, commits only if `latest.json` changed materially (guard against timestamp-only churn — compare metrics, not `generated_at`). This keeps data fresh even if scans stall. Onchain adapters must self-skip in CI per the constraints above.

Acceptance: two consecutive scheduled runs visible in git history; `latest.json` `generated_at` never older than 12h afterward.

### Task 1.4: Kill stale numbers in dossiers

- Rule (add to AGENTS.md, "Direct data / KPI methodology"): any dossier table row containing market/revenue/TVL figures must carry an `as of YYYY-MM-DD` date.
- During each scan, for projects with collector coverage: if a dossier's investment-math figures are >7 days older than `latest.json`, refresh the figures and the derived math (multiples, hurdles) from collector data and note the refresh in the Latest feed only when the change is material.
- For projects without programmatic coverage: mark the table `stale — manual refresh needed` once figures exceed 14 days, so staleness is visible instead of silent.
- Immediate cleanup: refresh Chutes and POD tables now (both hold 2026-06-21/22 snapshots).

Acceptance: no dossier table shows an undated market figure; Chutes and POD show current, dated numbers.

### Task 1.5: Close the `next_check` loop

`scan-debug.json` runs record `next_checks`, but nothing consumes them. Amend the scan workflow: at run start, read the previous run's `next_checks` and the per-item `next_check` fields in Unverified Watch Items; each must be either **addressed** (with a decision_trail entry) or **explicitly carried forward** with a reason. Add a `carried_from` field on carried items so chronic carry-forwards become visible.

Acceptance: three consecutive scan-debug runs show previous `next_checks` consumed or carried with reasons; no silently dropped checks.

---

## Phase 2 — Scan behavior: context, rotation, source mix, open questions

> This phase is the product core (see Purpose). Task 2.0 is the top priority of the entire remaining plan.

### Task 2.0: Context blocks on every material entry

**Problem:** entries carry context as prose, not as links into what the repo already knows. Example: the DRV Weekly Buyback #73 entry reports the numbers, but the repo already held buyback #72's size (delta: +9.5%), the collector's fee series (flat 7d — buyback grew while fees didn't), a catalyst row this advances ("Protocol-fee buyback program"), and an open question it touches (organic vs. incentive-driven volume). None of it was connected. Connecting it is exactly the reasoning work the operator wants offloaded — they look at the chart; the entry must tell them what the news means.

**Schema:** add three fields to every new changelog entry (mirrored in dossier Latest items and included in Discord alerts):

- `novelty`: `new | update | recurring` — genuinely new thread / update to a known thread / routine recurrence of a tracked event. This is the operator's triage signal.
- `delta`: one short string describing change vs. prior state. **Quantitative and history-sourced wherever collector coverage exists** ("+9.5% vs buyback #72; 8-week trend rising; 7d fees flat at ~$114K"), qualitative otherwise ("first dated commitment for v3").
- `relates_to`: array (may be empty, must be present) of typed refs: `{"type": "catalyst | open_question | watch_item | thesis | metric", "ref": "<catalyst name / question snippet / watch-item claim / metric id>"}`.

**Scan-time rules (amend AGENTS.md with these, in the scan-workflow and changelog sections):**

1. Before writing an entry, check the project's catalyst table, open questions, Unverified Watch Items, and `docs/data/direct-metrics/history/<slug>.json` for the relevant metric; populate `relates_to` and `delta` from what is found.
2. If the item advances, completes, or kills a catalyst — update the catalyst row **in the same run/commit** and link it. Same for open questions (answer/narrow/annotate) and watch items (confirm/weaken → status change).
3. Recurring quantitative events (weekly buybacks, revenue milestones, TVL thresholds) must include comparison to the previous occurrence and the trend from collector history. A recurring event with no delta stated is an incomplete entry.
4. Discord alerts carry the context block: delta + novelty + the single most relevant `relates_to` line. An alert that only restates the source is below the bar.
5. Dashboard: render `novelty` and `delta` in the Signal feed and changelog views (`app.js` / `project.js`); degrade gracefully for pre-existing entries lacking the fields. No backfill of old entries.

Acceptance: the next 10 material changelog entries all carry the three fields; at least one recurring event (e.g. the next DRV weekly buyback) demonstrates a quantitative, history-sourced delta; catalyst/open-question/watch-item cross-updates land in the same commit as the entry that triggered them; dashboard renders new fields without breaking on old entries.

### Task 2.1: Deep-pass rotation with a staleness floor

- Add `last_deep_scan` (ISO timestamp) per project in `docs/data/index.json`.
- Each scan run selects the 2–3 projects with the oldest `last_deep_scan` for a **deep pass**: docs/blog, GitHub org activity, governance/forum, onchain/data dashboards — not just the X timeline. Everything else gets the normal light pass.
- Floor: every project receives a deep pass at least every 7 days. Backfill `last_deep_scan` conservatively (e.g. last material changelog entry date) so the rotation starts with the genuinely neglected projects — POD, IOTA-SN9, Compute Horde, Lium first.
- Record deep passes in scan-debug (`pass_type: deep|light` per project checked) so coverage claims are auditable.

Acceptance: after 10 days of runs, `min(last_deep_scan)` across all projects is <7 days old; scan-debug distinguishes deep from light passes.

### Task 2.2: Source diversification requirement

- Add `source_class` to every new changelog entry: `official_x | team_x | docs_blog | github | governance | onchain_data | third_party | community`.
- Rule: a deep pass must consult at least two non-X source classes and record what was found (or "no change") in the decision trail. Light passes stay X-centric — that is what they are for.
- Add a monthly self-audit line to scan-debug summaries: percentage of new changelog entries per source class. Target trend: X-only share falls; no hard quota (news flow is genuinely X-heavy in this sector), but the mix must be measured.

Acceptance: all new changelog entries carry `source_class`; deep-pass decision trails show non-X source checks.

### Task 2.3: Open-questions burn-down

During each deep pass, attempt at least one item from the project's `## Open questions`. Outcomes: answered (move the answer into the dossier body, delete the question, changelog `verification update`), partially answered (rewrite the question narrower), or blocked (annotate the question with what was tried and why it failed, dated). Priority starters, all checkable today: POD buyback wallet/revenue surface, POD circulating-supply methodology, Chutes organic vs. incentivized revenue share, DRV canonical governance venue.

Acceptance: open-question counts across the four most-neglected dossiers decrease (or every remaining question carries a dated blocked-annotation) within two rotation cycles.

### Task 2.4: Append-only Hermes takes (small)

AGENTS.md rule for the Thesis section: Hermes takes are dated and never silently rewritten. When a take changes, keep the prior take struck through (`~~...~~`) with a one-line "what changed / why" beneath it, and write the new dated take above. Prior views are context — a take that aged badly is information the operator should be able to see next to the chart. No scoring, no price-stamping, no benchmark math (explicitly rejected; see Purpose).

Acceptance: rule in AGENTS.md; the first subsequent take revision in any dossier follows the format.

---

## Phase 3 — Hygiene: validator, drift fix, CI

Reduced scope from old-plan Tasks 4/5/6/9. No generator layer yet; the validator checks invariants, humans/Hermes fix violations by hand.

### Task 3.1: `scripts/validate_repo.py`

Stdlib-only script, exit 0/1, human-readable failure list. Checks:

1. Slug parity: every `projects/NN-slug.md` has entries in `index.json`, `index.csv`, `docs/data/index.json`, and a `docs/projects/<slug>.html`; no orphans in any direction.
2. README project list contains every dossier exactly once, inside the `## Projects` section.
3. All JSON files under root and `docs/data/` parse; changelog entries have required fields (`date`, `project`, `type`, `summary`, `url`/`source`) and `type` values from the AGENTS.md enum; `source_class` required for entries dated after Task 2.2 ships.
4. Dossier frontmatter has `status`, `watchlist`, `last_updated` (valid ISO).
5. Catalyst table rows contain a URL in the evidence column (regex-level check; flags `TBD`/blank).
6. `docs/data/direct-metrics/latest.json` `generated_at` is <48h old (warning, not failure, when running locally without network).
7. Generated/history file parity (moved here from the old plan's item 15 on 2026-07-05): every file under `docs/data/direct-metrics/history/` corresponds to a slug present in `data/direct-sources.json` and `docs/data/index.json`; no orphans (the legacy `drv-derive.json` alongside canonical `18-drv-derive.json` is the motivating case).
8. New changelog entries (dated after Task 2.0 ships) carry `novelty`, `delta`, and a `relates_to` array.

### Task 3.2: Fix current drift until the validator passes

Known items: README missing 21-pluralis/22-ambient/23-eigencloud and 24–26 misplaced outside the `## Projects` section; root `data/` missing 21/22.

**Root `data/` decision:** grep the repo (`docs/*.js`, scripts, AGENTS.md) for consumers of root `data/<slug>.json`. If nothing reads it — expected — **deprecate it**: delete the per-project files, keep `data/direct-sources.json` (which is a real config, consumed by the collector), and add root `data/` purpose to the AGENTS.md canonical-files list. If something does read it, add the two missing files instead and note the consumer in AGENTS.md. Do not leave it ambiguous.

### Task 3.3: CI

`.github/workflows/validate.yml`: run the validator on push/PR to `main`. Enable only after Task 3.2 leaves the tree green, so `main` never starts red. Add "run `python3 scripts/validate_repo.py` before committing" as the AGENTS.md scan-workflow validation step (replacing the vague "Validate JSON").

Acceptance (whole phase): validator passes locally and in CI; README lists 26 projects in the right section; root `data/` is either deprecated or complete, and documented either way.

---

## Phase 4 — Growth control: pruning and archival

### Task 4.1: Latest-scan-notes cap in dossiers

Keep the newest **10 entries or 30 days** (whichever is more) inline in each dossier's Latest section. Older entries move to `projects/archive/<slug>-latest.md` (create on first overflow). The full history also lives in the changelog, so the archive is belt-and-braces, not a new canonical store. Add the rule to AGENTS.md.

### Task 4.2: Changelog rollup

When `docs/data/project-changelog.json` exceeds ~500 entries, move entries older than 60 days to `docs/data/changelog-archive/YYYY-MM.json` (grouped by entry month). Dashboard (`app.js` / `project.js`) loads the live file by default; only fetch archives if a "load older" affordance is added (optional, not required by this plan). Scan-debug: same policy at ~150 runs / 30 days into `docs/data/scan-debug-archive/`.

Acceptance: live JSON files bounded per above; dashboard renders unchanged; archives parse and are covered by the validator's JSON check.

---

## Phase 5 — Discovery layer (deferred; do not start until Phases 1–3 acceptance criteria pass)

Summary of the agreed design, recorded here so it isn't lost:

- `docs/data/discovery.json`: candidate pool with `name`, `slug_candidate`, `ticker`, `primary_x`, `token_address`, `discovery_channel` (`co-mention | investor portfolio | ecosystem registry | KOL | listing monitor | data screen`), `first_seen`, `times_seen`, `evidence[]`, `thematic_fit`, `score`, `status` (`candidate | shortlisted | promoted | dismissed`), `why_it_matters`, `related_tracked[]`. `dismissed` entries are retained as dedupe memory (dedupe by name/ticker/address/X handle).
- Cheapest channel first: **co-mention capture** — during normal scans, untracked projects repeatedly surfacing in tracked projects' sources get logged as candidates (`times_seen` accumulates). Cap: max 3 new candidates per run.
- Promotion is human-gated and reuses existing machinery: high-scoring candidates get a prefilled `project-intake,hermes-review` GitHub issue (+ `discovery` label). No auto-creation of dossiers — amend the AGENTS.md "do not invent projects" rule to permit candidates in `discovery.json` only.
- Dashboard "Radar" card rendered from `discovery.json` with approve (opens intake issue) / dismiss (opens a small labeled issue Hermes processes to `status: dismissed`).
- Later channels: investor-portfolio watch, ecosystem registries (new Bittensor subnets via Taostats, etc.), DefiLlama category screens, weekly thematic sweep.

---

## Execution order and sizing

| Order | Task | Size | Status / depends on |
|---|---|---|---|
| ✅ | 1.2 collector multi-project | S–M | shipped `866fe19` |
| ✅ | 1.1 extend sources config | M | shipped `866fe19`; backfill addendum open |
| ✅ | 1.3 scheduling (scan step + CI cron) | S | shipped `866fe19`/`8590eb7`; cron acceptance pending (check Actions history) |
| ✅ | 1.4 stale-number rule + Chutes/POD refresh | S | shipped `866fe19` |
| 1 | **2.0 context blocks** | M | — (top priority of remaining plan) |
| 2 | 1.5 next_check consumption | S | — |
| 3 | 2.1 deep-pass rotation | S–M | — |
| 4 | 2.2 source_class + diversification | S | 2.1 |
| 5 | 2.3 open-questions burn-down | ongoing | 2.1 |
| 6 | 2.4 append-only takes | XS | — |
| 7 | 1.1 addendum: sources backfill | S | fold into a scan run |
| 8 | 3.1 validator | M | — |
| 9 | 3.2 drift fix + data/ decision | S | 3.1 |
| 10 | 3.3 CI | S | 3.2 |
| 11 | 4.1 / 4.2 pruning + rollup | S | 3.1 (validator must cover archives) |
| 12 | Phase 5 discovery | M | Phases 1–3 green |

AGENTS.md amendments land with the task that introduces each rule (1.5, 2.0, 2.1, 2.2, 2.4, 3.3, 4.1, 5), not as one big rewrite.

## Global acceptance criteria

0. Every new material changelog entry, Latest item, and Discord alert carries a context block (`novelty`, `delta`, `relates_to`), with history-sourced quantitative deltas wherever collector coverage exists.
1. `docs/data/direct-metrics/latest.json` is never >12h stale; ≥10 projects covered with tested sources.
2. No dossier displays an undated or >7-day-stale figure where collector coverage exists.
3. Every project deep-passed at least every 7 days, auditable in scan-debug.
4. All new changelog entries carry `source_class`; deep passes demonstrably consult non-X sources.
5. `validate_repo.py` green locally and in CI; README/index/data drift eliminated and structurally prevented.
6. Live changelog/scan-debug/dossier-Latest sizes bounded by the pruning rules.
7. Only after 1–6: discovery pool live with co-mention capture and human-gated promotion.
