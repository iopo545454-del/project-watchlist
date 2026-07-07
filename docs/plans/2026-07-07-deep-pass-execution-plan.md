# Deep-Pass Execution: Make Scans Dig, Not Skim

> **For Hermes:** Execute this plan task-by-task, in order. It is deliberately small — four tasks, one to two scan cycles of work. It does not introduce new direction: Tasks 1 and 2 are the already-planned Tasks 2.1–2.3 from `2026-07-04-verification-loop-and-scan-quality-plan.md`, promoted to "execute now" with sharpened acceptance; Tasks 3 and 4 add two small rules and propagate them. Where wording here differs from the operative plan, this plan wins for these tasks; everything else in the operative plan stands.

**Date:** 2026-07-07
**Status:** not started
**Origin:** Operator wants scans to go deeper. The principle behind every task here: adverbs ("be thorough") don't produce depth — **required artifacts do**. A deep pass is only real if its decision trail proves the visits, including the ones that found nothing.

## Task 1: Ship deep-pass rotation (= operative plan Task 2.1), with trail-proof sharpening

Implement Task 2.1 exactly as specced in the operative plan: `last_deep_scan` per project in `docs/data/index.json`; each run deep-passes the 2–3 projects with the oldest `last_deep_scan`; 7-day floor for every project; conservative backfill so POD, IOTA-SN9, Compute Horde, and Lium rotate first; `pass_type: deep|light` per project in scan-debug.

**Sharpening (this is the part that makes it bite):** a deep pass must produce **one decision-trail line per non-X source class consulted, with a URL, including negative results** — "checked <governance forum URL>, nothing new since <date>" is a valid and required line. A deep pass whose decision trail contains zero non-X URLs is invalid: do not set `last_deep_scan` for that project, and note why in scan-debug errors.

Acceptance: first run after shipping shows 2–3 `pass_type: deep` projects in scan-debug, each with ≥2 non-X source-class trail lines carrying URLs (negative results count); `last_deep_scan` present for all projects in `docs/data/index.json`.

## Task 2: Ship source_class + open-questions burn-down (= operative plan Tasks 2.2 and 2.3)

Implement both as specced in the operative plan:

- **2.2:** `source_class` (`official_x | team_x | docs_blog | github | governance | onchain_data | third_party | community`) on every new changelog entry; deep passes consult ≥2 non-X classes; monthly source-class mix line in scan-debug summaries.
- **2.3:** every deep pass attempts at least one item from the project's `## Open questions` — outcome is answered (fold into dossier, delete question, `verification update` entry), narrowed (rewrite tighter), or blocked (dated annotation of what was tried). Priority starters: POD buyback wallet/revenue surface, POD circulating-supply methodology, Chutes organic vs. incentivized revenue share, DRV canonical governance venue.

Acceptance: as written in the operative plan (all new entries carry `source_class`; open-question counts on the four neglected dossiers fall or carry dated blocked-annotations within two rotation cycles).

## Task 3: Two new AGENTS.md rules (verbatim inserts)

Insert into the **Source priority** section:

> **Primary-source rule:** Never cite a tweet *about* a document as the source for a material entry. If a tweet points at an announcement, governance post, docs change, changelog, or report, open the underlying document and cite its URL as the source (keep the tweet as a secondary link if useful). Tweet-only sourcing is acceptable only when the tweet itself is the primary artifact (e.g. a founder statement made only on X).

Insert into the **Recurring scan workflow** section, as a rule attached to step 3 (direct-metrics refresh):

> **Unexplained-move rule:** If a metric delta trips a materiality rule and the cause is not already known, do not log it as unexplained until the project's governance/forum, GitHub activity, and official announcement channels have been checked in the same run — one decision-trail line each. Only after those checks may the entry say `unexplained after checks`, and it must carry a `next_check`.

Acceptance: both rules present verbatim in AGENTS.md in the named sections; no existing rule text removed.

## Task 4: Propagate the condensed deep-pass rule (same pattern as the signal-tier plan's Task 2)

The scan behavior lives in three places and must not drift: AGENTS.md, the 4h cron scanner prompt, and the `research-watchlist-dashboard` skill. Add this condensed form to the cron prompt and the skill:

> *"Each run, deep-pass the 2–3 projects with the oldest `last_deep_scan` (7-day floor, no exceptions). A deep pass consults ≥2 non-X source classes (docs/blog, GitHub, governance/forum, onchain data) and logs one decision-trail line per class with a URL — negative results ('checked, nothing new') required, not optional. Attempt one open question per deep pass. Never cite a tweet about a document — open and cite the primary source. A deep pass with no non-X URLs in its trail is invalid and does not update `last_deep_scan`."*

Acceptance: both locations carry the condensed rule; note verification with a dated line in this plan file's Status field (same convention as the signal-tier plan).

## Ordering and scope guard

Task 1 first (the rotation is the carrier for everything else), then 2, 3, 4 — 3 and 4 are small enough to ride along with any scan commit. Do not start Phase 3 (validator/CI) or anything else from the operative plan until Tasks 1–2 here have produced at least one compliant deep-pass run in scan-debug. If implementing Task 1 forces retagging or restructuring more than ~5 existing files beyond `index.json`, AGENTS.md, and scan-debug, stop and leave a note in this plan file instead — that means the spec is heavier than intended.
