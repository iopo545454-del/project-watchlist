# Project Watchlist Agent Framework

This repository is a source-of-truth research dashboard for monitored crypto/project dossiers. Agents and human contributors should follow this framework when updating the repo or running recurring monitoring.

## Canonical files

- `projects/*.md` are the canonical project dossiers.
- `index.json` and `index.csv` are machine-readable root indexes.
- `docs/` is the GitHub Pages presentation layer.
- `docs/data/index.json` powers the dashboard project list.
- `docs/data/project-changelog.json` powers the dashboard changelog and scan history.
- `docs/data/scan-debug.json` powers `docs/scan-debug.html`, the operator/debug page for scan runs, status, evidence summaries, materiality decisions, and next checks.
- Generated HTML in `docs/projects/*.html` should reflect the Markdown dossiers, not replace them as the source of truth.
- Project detail pages should use a large, scrollable **Latest** panel in the hero area instead of compact ticker/last-updated metadata cards. Do **not** show the old compact `Ticker` / `Last updated` card in generated HTML.
- The **Latest** panel is the rawest/highest-signal analysis feed for the project. Add entries whenever a scan surfaces relevant information: a useful tweet/thread, DefiLlama/onchain/dashboard change, official blog/docs update, governance item, token/buyback/unlock change, product release, partner/investor signal, or credible weak signal. This is the bread-and-butter scan record; it can be rougher and more source-proximate than polished dossier sections, but every item should include source/context and why it matters.

## Source priority

Use this order when researching or monitoring a project:

1. Official project announcements, website, docs, blog, changelog, governance, forum, and GitHub.
2. Founder, team, core contributor, foundation, or protocol X/Twitter accounts.
3. Official token, contract, migration, bridge, staking, dashboard, or explorer pages.
4. High-signal integrations, listing venues, ecosystem partners, or data dashboards.
5. Third-party research only when the source is clear and useful; label it as third-party context.

Do not treat price chatter, generic community replies, unsourced claims, reposts, or engagement bait as durable project information.

## Materiality threshold

Only update durable project context or alert Discord for material information, including:

- Official announcements or product releases.
- Roadmap, launch, protocol, validator/miner, incentive, or economic-parameter changes.
- Token, contract, migration, unlock, staking, buyback, treasury, or governance changes.
- Governance proposals, votes, or results.
- New listings, market/infrastructure integrations, partnerships, or major ecosystem support.
- Funding, team, founder, foundation, or important contributor changes.
- Security incidents, outages, exploit disclosures, pauses, or incident postmortems.
- Newly discovered official/high-signal sources worth tracking.
- Corrections to existing dossier facts.

Ignore or keep out of the changelog unless explicitly requested:

- Routine price movement with no project-specific cause.
- Generic bullish/bearish CT takes.
- Duplicate reposts or quote-tweet chains.
- Community engagement farming.
- Unverified rumors that are not tied to a plausible source, project-relevant account, terminal/news item, or concrete evidence.

## Rumor, speculation, and weak-signal tracking

The watchlist should not discard every unconfirmed item. It should track credible weak signals separately from confirmed project facts so they can be verified over time.

Use an **Unverified Watch Items** section in the relevant `projects/*.md` dossier when a claim is project-relevant but not confirmed enough to become durable context.

Track a weak signal if it meets at least one condition:

- Mentioned by an account plausibly related to the project, ecosystem, team, investors, market structure, listing venue, or integration partner.
- Comes from a credible news terminal, research feed, exchange/listing monitor, governance/forum post, GitHub issue/PR, or onchain/data anomaly.
- Is repeatedly mentioned by independent high-signal accounts with specific details.
- Contains verifiable handles, dates, contracts, transaction hashes, proposal IDs, screenshots, docs links, job posts, repository activity, or other evidence.
- Could become material if confirmed: listing, partnership, token unlock/buyback, acquisition, funding, security issue, migration, roadmap shift, legal/regulatory issue, or team change.

Do **not** track weak signals that are only vague price calls, engagement bait, copy-pasted CT rumors, anonymous claims with no project-specific details, or claims already disproven.

Each unverified watch item should include:

- `date_seen`
- `claim`
- `source_url`
- `source_type` such as `related account`, `random X account`, `news terminal`, `governance`, `onchain`, `GitHub`, or `community`
- `credibility` as `low`, `medium`, or `high`
- `verification_status` as `unverified`, `partially supported`, `confirmed`, `stale`, or `disproven`
- `why_it_matters`
- `next_check` or what evidence would confirm/disprove it
- `carried_from` when a prior run's `next_check` could not be resolved and is intentionally carried forward

Example:

```md
## Unverified Watch Items

| Date seen | Claim | Source | Credibility | Status | Why it matters | Next check |
|---|---|---|---|---|---|---|
| 2026-06-14 | Rumor that PROJECT may announce an exchange listing | https://x.com/example/status/123 | Medium | Unverified | Would be material if confirmed by official account or exchange | Re-check official X/blog and exchange announcements next scan |
```

Escalation rules:

- If confirmed, move the information into the main dossier section and add a changelog entry as an `official update`, `listing`, `partnership`, etc.
- If partially supported, keep it in Unverified Watch Items and update the status/evidence.
- If stale or disproven, mark it as such; do not keep re-alerting on it.
- Discord alerts for weak signals should be rare and clearly labeled `UNVERIFIED`; use them only when the source/evidence is high-signal enough that the user would want to know before confirmation.

## Recurring scan workflow

Every autonomous monitoring run should:

1. Check open project-intake GitHub issues from the dashboard form.
2. Load tracked projects from `docs/data/index.json`.
3. Refresh direct metrics with `python3 scripts/collect_direct_metrics.py --write`; treat metric deltas that trip configured `materiality_rules` as scan findings, and commit refreshed metric JSON with the rest of the scan when values materially change.
4. Use each project's `primary_x`, `x_accounts`, source list, token address, and dossier links to define the scan scope.
5. Prioritize official sources, team/core-contributor X accounts, docs/blogs, GitHub/governance/forum, and relevant data dashboards.
6. Look back roughly to the prior scan timestamp; if missing, use the latest relevant changelog/index timestamp as the baseline.
7. Search for credible weak signals: latest mentions of the token/project by related accounts, credible news terminals/feeds, governance/forum/GitHub activity, onchain/data anomalies, and independent high-signal accounts.
8. Apply the materiality threshold before editing files or alerting Discord.
9. Add confirmed durable findings in the relevant `projects/*.md` dossier.
10. At run start, consume the previous run's `next_checks` plus each dossier's `## Unverified Watch Items` `next_check` fields. Each item must be either addressed with a decision-trail entry or explicitly carried forward with a reason and `carried_from` pointing to the originating run/date; do not silently drop checks.
11. Before writing a material Latest/changelog entry, check the project's catalyst table, open questions, Unverified Watch Items, and available direct-metrics history for the relevant metric. Populate the context block (`novelty`, `delta`, `relates_to`) from that repo history before committing the entry.
12. Add any relevant source-proximate observations to the project-page **Latest** feed/changelog: useful tweets, dashboard changes, docs/blog notes, onchain metrics, product updates, and why they matter. This feed should preserve raw scan signal even when the polished dossier section only gets a concise summary.
13. If a finding advances, completes, narrows, disproves, or materially changes a catalyst, open question, or watch item, update that row/item in the same run and link it via `relates_to`.
14. Add credible but unconfirmed findings to `## Unverified Watch Items` with credibility, status, why it matters, next-check criteria, and carry-forward state when applicable.
15. Update `docs/data/project-changelog.json` with scan timestamps, material changes, source-proximate Latest items, and rare high-signal unverified watch items when useful.
16. Update `docs/data/scan-debug.json` for every run with a compact operator trail: run_id, started_at/completed_at, status, scan_window, scope, projects_checked/logged_projects, counts, decision_trail entries (project, source, url, summary, decision), errors if any, and next_checks. Distinguish full scan coverage from projects that produced logged/material entries; if a project was checked and had no material change, record that explicitly only when useful. This is observable reasoning/evidence only; do not include hidden chain-of-thought.
17. Update indexes and generated project pages when metadata, links, or displayed content change.
18. Validate JSON and inspect the diff before committing.
19. Commit and push real changes to `main`.

If no material change exists, the run should update scan state only when useful and otherwise stay quiet.

## Initial review workflow

For a new project or any project marked `initial_review_done: false`:

1. Deduplicate by project name, slug, token address, and primary X account.
2. Create or update a stable slug and project dossier under `projects/`.
3. Discover official website, docs, blog, GitHub, governance/forum, primary X, founder/team/core-contributor X accounts, token/contract pages, and useful dashboards.
4. Add sources using the standard two-column source table.
5. Fill concise sections for overview, thesis/narrative, catalysts, token/contract notes, open questions, and monitoring notes.
6. For `## Thesis`, collect linked investor/market theses from articles, memos, high-signal threads, podcasts/transcripts, or fund/operator posts; summarize each with a tight TLDR and source link, then add a separate `### Hermes take` that is short, direct, and not over-hedged.
7. For `## Catalysts`, track future catalysts and recent completed material events with evidence/source, timing, direct impact, second-order consequences, and what to watch next. Separate evidence confidence (`confirmed`, `tentative`, `speculative`, `disproven/stale`) from calendar event status (`upcoming`, `completed`, `ongoing`, `watch`). Already-live/launched/published/released items belong in **Alr happened**, not **This week** or **This month**.
8. Update `docs/data/index.json` and root indexes with source counts, X accounts, token address, page path, and `initial_review_done: true` when complete.
9. Add a changelog entry of type `initial review`.
10. Regenerate the corresponding `docs/projects/<slug>.html` page.

## Catalyst section standard

The `## Catalysts` section is one of the most important parts of each project dossier. It should answer: what could make this project matter in the future, when might it happen, how firm is the evidence, and what second-order consequences could follow?

Use this structure when enough information is available:

```md
## Catalysts

| Catalyst | Status | Evidence / source | Timing | Direct impact | Second-order consequences | What to watch next |
|---|---|---|---|---|---|---|
| Mainnet launch | Confirmed | https://example.com/roadmap | Q3 2026 / tentative | Enables product usage | Could trigger exchange integrations, incentive programs, new TVL/liquidity loops | Watch docs, GitHub releases, official launch posts |
```

Catalyst status should separate evidence confidence from calendar direction:

Evidence confidence:

- `confirmed` — official source, announced date/window, governance result, committed roadmap, or observable onchain/GitHub evidence.
- `tentative` — credible but not fully committed: soft roadmap, team hint, partner teaser, repeated founder comments, job posts, testnet activity.
- `speculative` — plausible inference from market structure, ecosystem incentives, related-account chatter, terminal/news item, or second-order read-through, but not directly confirmed.
- `disproven/stale` — previously tracked catalyst that missed, was denied, or no longer matters.

Calendar event status:

- `upcoming` — unresolved future event with a source-backed exact date, date window, or condition.
- `completed` — already happened / already live / launched / published / released / announced / available now.
- `ongoing` — continuous KPI/dashboard/program with no discrete upcoming milestone.
- `watch` — tentative/speculative/no-date item that should be monitored but not scheduled.

The calendar must use event status before timing strings: completed items go to **Alr happened** even if their source date is this week/month; only `upcoming` items with confirmed dates can enter **This week** or **This month**.

Every catalyst should capture:

- **Evidence/source URL:** mandatory real source. Do not add catalyst rows with a blank source, `TBD`, `needs source`, or unsupported inference; keep those as Open questions / Unverified Watch Items until sourced.
- **Evidence quality:** official / partner / investor / terminal / onchain / GitHub / community / inference.
- **Timing:** firm date, tentative date/window, relative sequence, or `unknown`.
- **Direct impact:** what changes for product, token, users, supply/demand, liquidity, revenue, emissions, governance, or attention.
- **Second-order consequences:** what else could happen if it plays out — listings, integrations, incentives, unlock pressure, buybacks, subnet/emission rotation, ecosystem winners/losers, narrative spillovers, or competitor impacts.
- **Watch next:** what would confirm, accelerate, delay, or kill the catalyst.

Keep confirmed and speculative catalysts in the same table but clearly label status. Do not bury speculative catalysts if they are useful; mark them as speculative and define what evidence would upgrade/downgrade them.

## Thesis section standard

The `## Thesis` section should separate sourced outside investment cases from Hermes' own view.

Use this structure when enough information is available:

```md
## Thesis

### Investor / market theses

| Source | Who/affiliation | TLDR of the case | Relevance |
|---|---|---|---|
| https://example.com/thread | Example Fund / angel / operator | One-to-two sentence summary of their investment case. | Why this matters for the token/project |

### Hermes take

> Short, direct, opinionated take. No mealy-mouthed hedging. Say what matters, what has to go right, and what would make the project worth caring about.
```

Guidelines:

- Prefer articles, investor memos, long-form posts, podcasts/transcripts, and high-signal X threads by investors, angels, operators, funds, or respected ecosystem participants making an actual investment case.
- Link the original source. Do not summarize a thesis without a source URL unless it came from the user; label user-provided thesis as manual/user context.
- Keep each TLDR tight: what they believe, why the asset/project should matter, and what catalyst/mechanism drives upside.
- Separate sourced thesis from Hermes opinion. Never make Hermes' take look like an external investor quote.
- Hermes take should be quick, blunt, and useful: avoid generic caution paragraphs, avoid self-hedging, and do not end with a forced bull/bear call unless the user asks.
- These are speculative crypto assets; the take can assume high risk is obvious and focus on whether the setup is interesting, reflexive, crowded, under-owned, or dead.
- Hermes takes are append-only. Date each take. When a take changes, keep the prior take struck through (`~~prior take~~`) with one line explaining what changed/why, then write the new dated take above it. Do not silently rewrite old takes; do not add price-stamping, scoring, prediction-journal math, or comps screens unless explicitly requested.
- If there are no good investor theses yet, write `No strong sourced investor thesis found yet` and add what sources should be searched next.

For generated project HTML, render Hermes' take in a visually distinctive callout/card. Use a warm accent such as `.hermes-take` so it stands apart from sourced thesis material.

## Source table standard

Each dossier should include a source table in this shape:

```md
## Sources / Research Inputs

| Information source | Context about the source |
|---|---|
| https://x.com/example | Official account; posts roadmap/product updates |
| https://example.com/blog | Official blog; long-form announcements |
| 0x123...abcd | Token contract address; use for holder/distribution checks |
```

## Direct data / KPI methodology

Whenever scanning or onboarding a project, explicitly ask these questions before deciding what to track:

1. **What are the relevant KPIs for this project?** Do not force every project into generic DeFi metrics. Pick KPIs that map to the actual business/protocol loop: revenue/fees, TVL/collateral, OI/volume, active users, supply-side capacity, usage/demand, governance activity, buybacks, emissions, operators/validators/providers, markets listed, or project-specific adoption metrics.
2. **Can we get those KPIs onchain?** Prefer direct contract/event/RPC/indexer access when the metric is actually represented onchain. If yes, use the configured local env/API keys such as Alchemy, Basescan/Etherscan, Helius, QuickNode, or project-specific public endpoints. Never expose keys in committed files or GitHub Pages frontend JavaScript.
3. **If not onchain, what is the next-best reliable source?** Prefer official APIs/docs/dashboards first, then DefiLlama/Token Terminal/Dune/Flipside/Snapshot/Tally/Commonwealth/GitHub or other credible third-party data. Public page scraping is a last resort and should be labeled as brittle.
4. **Can we fetch it programmatically?** Test each candidate source with a repeatable command/script before integrating it into the dashboard. Record whether it is `tested_ok`, `partial`, `manual_only`, `blocked`, or `failed`, plus the tested endpoint and limitation.
5. **How should the metric be interpreted?** Define why the KPI matters, what direction is good/bad, what thresholds are material, and what could make the number misleading. Distinguish fees, revenue, protocol revenue, tokenholder value capture, buybacks, incentives, and organic vs subsidized activity.
6. **Where does the methodology live?** Put project-specific KPI logic in the relevant `projects/*.md` dossier under `## Direct Data / KPI Methodology`; put reusable machine-readable source config in `data/direct-sources.json`; put generated latest/history values under `docs/data/direct-metrics/` once the source is stable.
7. **How does it enter the UI/changelog?** Integrate only tested/stable metrics into the Direct Data panel. Add material direct-data deltas to `docs/data/project-changelog.json` and the project Latest feed; keep routine refreshes quiet unless the move is material.
8. **How fresh are displayed figures?** Any dossier table row containing market, revenue, TVL, volume, supply, holder, buyback, or other numeric investment-math figures must carry an `as of YYYY-MM-DD` date. If collector coverage exists and the displayed figure is more than 7 days older than `docs/data/direct-metrics/latest.json`, refresh it during the scan; if no programmatic coverage exists, mark the row `stale — manual refresh needed` once it is more than 14 days old.

Each project dossier's `## Direct Data / KPI Methodology` section should include:

```md
## Direct Data / KPI Methodology

### KPI questions

| KPI | Why it matters | Best source | Programmatic status | Notes / limitations |
|---|---|---|---|---|
| Revenue / fees | Measures economic activity | DefiLlama / official API / onchain | tested_ok | Distinguish gross fees from tokenholder revenue |

### Fetch tests

| Source | Endpoint / method | Status | What it returns | Next step |
|---|---|---|---|---|
| DefiLlama fees | `https://api.llama.fi/summary/fees/<slug>` | tested_ok | daily/weekly/monthly fees | Add to direct-data collector |
```

The DRV / Derive dossier is the worked example for this methodology. Use its lessons to generalize rules before rolling direct-data panels out to the full watchlist.

## Generated page styling contract (Signals Terminal)

The dashboard and dossiers share one design system in [`docs/style.css`](docs/style.css) ("Signals Terminal": ink-black canvas, phosphor-lime primary accent — **no purple**, IBM Plex Mono for data/labels/tickers, Hanken Grotesk for prose, per-category color-coding). When generating or regenerating `docs/projects/*.html`, follow this contract so pages inherit the system automatically:

- `<head>` must include the favicon and `<link rel="stylesheet" href="../style.css?v=20260621-terminal-2" />`. **Do not** add Google Fonts `<link>`/`preconnect` tags — `style.css` `@import`s the fonts. Bump the `?v=` query whenever shared CSS/JS changes so caches refresh.
- `<body class="project-page">` and, just before `</body>`, include `<script src="../project.js?v=20260621-terminal-2"></script>`. `project.js` auto-builds the sticky scrollspy **Dossier** table of contents from the `<h2>` of each `<section class="section-card">` and staggers their reveal — no per-page TOC markup needed.
- Keep the existing class contract: `.topbar`, `.project-hero` (with the **Latest** `.latest-card`), `<main class="project-content">` (or `.project-grid`) holding `<section class="section-card">` blocks, each led by a single `<h2>`. Special sections keep their accent classes: `.hermes-take` (warm amber), `.trigger-card` (lime), `.investor-theses` (cyan). Tables go in `.table-wrap`.
- Numeric figures (market caps, multiples, $ amounts, counts) should be wrapped in `<code>…</code>` so they render as highlighted mono tokens.

## Project page Latest panel standard

Generated `docs/projects/*.html` pages should show a right-side hero panel titled **Latest** instead of compact metadata like `Ticker`, `Links parsed`, or `Last updated`.

The Latest panel should be scrollable and contain the newest high-signal project observations from `docs/data/project-changelog.json`, especially:

- Relevant X/Twitter posts or threads and why they matter.
- DefiLlama, Dune, onchain, unlock, holder, revenue, buyback, or usage changes noticed during a scan.
- Official blog/docs/changelog/governance updates.
- Product, roadmap, partnership, listing, investor, funding, or team changes.
- Credible weak signals or rumors clearly labeled as unverified.

Prefer short source-proximate entries over polished prose here. This panel is the working analyst notebook: if an agent read something and thought it mattered, it should usually become a Latest entry with a source/context link. Keep polished synthesis in the dossier sections below.

## Changelog standard

`docs/data/project-changelog.json` entries should be concise and user-facing:

```json
{
  "date": "ISO-8601 UTC timestamp",
  "project": "Project display name",
  "type": "scan | intake | initial review | source added | official update | docs/blog update | contract/address update | catalyst added | catalyst update | thesis update | investor thesis added | hermes take update | unverified watch item | verification update | rumor disproven",
  "summary": "Concise summary of what changed or what was checked",
  "source": "X/Twitter / official blog / docs / GitHub issue / manual / etc.",
  "url": "projects/<slug>.html or direct source URL when useful",
  "last_scanned": "ISO-8601 UTC timestamp",
  "importance": "high | medium | low",
  "novelty": "new | update | recurring",
  "delta": "Short context vs prior state; quantitative/history-sourced when collector or prior entries support it",
  "relates_to": [
    {"type": "catalyst | open_question | watch_item | thesis | metric", "ref": "Catalyst/question/watch item/metric identifier"}
  ]
}
```

For every new material entry, `novelty`, `delta`, and `relates_to` are required. `relates_to` may be an empty array, but the field must be present. Use `novelty: recurring` for routine recurring events such as weekly buybacks, and include comparison to the previous occurrence plus direct-metrics trend where history exists. If collector coverage exists, `delta` should cite the relevant metric/history rather than only restating the source. If an entry links to a catalyst, open question, watch item, thesis, or metric, update that referenced dossier item in the same commit when the new evidence advances, completes, narrows, confirms, weakens, or kills it.

Avoid duplicate changelog entries for the same source/update. Keep summaries short enough to render cleanly on the dashboard. After each 4h scan, an independent tagger agent should label each new/changed changelog entry with `importance`, but treat it as a strict **signal tier**, not a generic priority score:

- `high` = **Actionable**: reserve for directly tradeable or market-structure/material items with near-term implications, such as tokenomics/value-capture changes, listings/liquidity/market-access changes, governance votes/results with token impact, protocol/funds security incidents/outages, funding/acquisition, confirmed incentives/snapshots/unlocks/buybacks/staking/rewards, or a major live product/mainnet launch with immediate distribution/usage/revenue implications. Unverified items should be `high` only when the source/evidence is unusually high-signal, time-sensitive, and would be materially tradeable if confirmed. These are candidate categories; an item must also pass the step-change or magnitude test below.
- `medium` = **Watch**: meaningful product, roadmap, ecosystem, source, thesis, partnership, or usage signal worth tracking, but not directly actionable yet or without explicit token/liquidity/revenue/market-structure impact.
- `low` = **Log**: routine scan/status, housekeeping, source additions, minor UX/content/marketing updates, weak context, or speculative items without concrete actionability.

**Routine output of a project's core function is never `high` on its own.** For launchpads (Virtuals, Bankr), individual token launches are the product working as intended — tag them `medium` at most, even if the token is novel or the launch is large by launchpad standards. The same applies to any project's recurring milestones: another integration, another volume record, another agent going live.

An event earns `high` only if at least one of these holds:

- **Step change:** it changes how the project itself operates going forward — new fee or value-capture mechanics, tokenomics change, new market structure, expansion of the protocol itself to a new chain/venue — rather than another instance of mechanics that already exist. (Calibration: the Bankr cc0company launch-token *skill* with LP fee split is a new mechanic → `high`; a token *deployed using* that skill is an instance → `medium`/`low`.)
- **Magnitude:** the capital at stake is large *relative to the project's own size* — roughly >5–10% of market cap, TVL, or typical flows. Cite a concrete number in the summary; **no number, no `high`.** Exception: security incidents and confirmed dated events (unlocks, snapshots, halvings) may be `high` before dollar impact is quantifiable.

Litmus test: if essentially the same event will plausibly happen again within a few weeks, it is the baseline, not a signal. Ask: *does this change the thesis, or just add another example of it?*

Bias downward when uncertain. The dashboard should have few `high` items; if too many entries feel high-priority, the tagger is probably labeling project relevance instead of trade/actionability.

## Discord update policy

- Send Discord updates only for material changes or explicit user requests.
- Prefer concise TLDRs with links to the dashboard, project page, source, or commit.
- Material alerts must carry the context block: `novelty`, the `delta`, and the single most relevant `relates_to` line. An alert that only restates the source is below the bar.
- Do not spam raw tables.
- Do not send routine "nothing happened" messages for autonomous scans.
- If a run only updates local/dashboard scan state, the changelog is enough.

## Discord command/reference conventions

When the user asks from Discord to reference or modify this GitHub project, accept compact repo-aware shorthand and resolve it against this repository before asking follow-up questions.

Recommended user shorthand:

- `repo:` or `project-watchlist` means this repository: `iopo545454-del/project-watchlist` / local workdir `/root/project-watchlist-github`.
- `page:<slug>` or a project name/ticker means the matching dossier in `projects/*.md`, its generated page in `docs/projects/*.html`, and corresponding rows in `index.json`, `docs/data/index.json`, and `docs/data/project-changelog.json`.
- `file:<path>` means an explicit repository path, for example `file:projects/23-eigencloud.md` or `file:docs/data/index.json`.
- `source:<url>` means user-provided evidence to add to a project source table, Latest/changelog entry, or scan-debug decision trail depending on context.
- `issue:` means create or inspect a GitHub issue when GitHub CLI/API access is available; intake issues should use labels `project-intake,hermes-review`.

Examples agents should understand:

- `@hermes-agent in project-watchlist add this source to EigenCloud: <url> — context...`
- `@hermes-agent update page:eigencloud thesis with this source: <url>`
- `@hermes-agent from the repo, summarize file:projects/23-eigencloud.md`
- `@hermes-agent compare page:eigencloud vs page:targon using source data from the repo`
- `@hermes-agent make a small PR/change to docs/app.js to improve filtering`

For edits, modify canonical Markdown/data first, regenerate presentation where needed, validate JSON/diffs, commit, push, and reply with the commit plus relevant Pages/GitHub links. For read-only requests, cite the exact repo file/path or live page used.

## Validation and git workflow

Before committing:

```bash
python3 -m json.tool docs/data/index.json >/dev/null
python3 -m json.tool docs/data/project-changelog.json >/dev/null
python3 -m json.tool docs/data/scan-debug.json >/dev/null
git diff --stat
git diff --check
```

For dashboard/UI changes, also serve `docs/` locally and check the browser console when practical.

Commit only the files related to the intended change. Do not accidentally stage unrelated in-progress dossier edits.

## Safety rules

- Never expose API tokens or GitHub credentials.
- Do not put write tokens in GitHub Pages frontend JavaScript.
- Do not invent projects outside `docs/data/index.json` or explicit project-intake issues.
- Preserve user-added source context unless it is clearly wrong and corrected with evidence.
- Mark uncertain claims as open questions instead of presenting them as facts.
