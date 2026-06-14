# Project Watchlist Agent Framework

This repository is a source-of-truth research dashboard for monitored crypto/project dossiers. Agents and human contributors should follow this framework when updating the repo or running recurring monitoring.

## Canonical files

- `projects/*.md` are the canonical project dossiers.
- `index.json` and `index.csv` are machine-readable root indexes.
- `docs/` is the GitHub Pages presentation layer.
- `docs/data/index.json` powers the dashboard project list.
- `docs/data/project-changelog.json` powers the dashboard changelog and scan history.
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
3. Use each project's `primary_x`, `x_accounts`, source list, token address, and dossier links to define the scan scope.
4. Prioritize official sources, team/core-contributor X accounts, docs/blogs, GitHub/governance/forum, and relevant data dashboards.
5. Look back roughly to the prior scan timestamp; if missing, use the latest relevant changelog/index timestamp as the baseline.
6. Search for credible weak signals: latest mentions of the token/project by related accounts, credible news terminals/feeds, governance/forum/GitHub activity, onchain/data anomalies, and independent high-signal accounts.
7. Apply the materiality threshold before editing files or alerting Discord.
8. Add confirmed durable findings in the relevant `projects/*.md` dossier.
9. Add any relevant source-proximate observations to the project-page **Latest** feed/changelog: useful tweets, dashboard changes, docs/blog notes, onchain metrics, product updates, and why they matter. This feed should preserve raw scan signal even when the polished dossier section only gets a concise summary.
10. Add credible but unconfirmed findings to `## Unverified Watch Items` with credibility, status, why it matters, and next-check criteria.
11. Update `docs/data/project-changelog.json` with scan timestamps, material changes, source-proximate Latest items, and rare high-signal unverified watch items when useful.
12. Update indexes and generated project pages when metadata, links, or displayed content change.
13. Validate JSON and inspect the diff before committing.
14. Commit and push real changes to `main`.

If no material change exists, the run should update scan state only when useful and otherwise stay quiet.

## Initial review workflow

For a new project or any project marked `initial_review_done: false`:

1. Deduplicate by project name, slug, token address, and primary X account.
2. Create or update a stable slug and project dossier under `projects/`.
3. Discover official website, docs, blog, GitHub, governance/forum, primary X, founder/team/core-contributor X accounts, token/contract pages, and useful dashboards.
4. Add sources using the standard two-column source table.
5. Fill concise sections for overview, thesis/narrative, catalysts, token/contract notes, open questions, and monitoring notes.
6. For `## Thesis`, collect linked investor/market theses from articles, memos, high-signal threads, podcasts/transcripts, or fund/operator posts; summarize each with a tight TLDR and source link, then add a separate `### Hermes take` that is short, direct, and not over-hedged.
7. For `## Catalysts`, track future catalysts with status (`confirmed`, `tentative`, `speculative`, `disproven/stale`), evidence/source, timing, direct impact, second-order consequences, and what to watch next.
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

Catalyst status should be one of:

- `confirmed` — official source, announced date/window, governance result, committed roadmap, or observable onchain/GitHub evidence.
- `tentative` — credible but not fully committed: soft roadmap, team hint, partner teaser, repeated founder comments, job posts, testnet activity.
- `speculative` — plausible inference from market structure, ecosystem incentives, related-account chatter, terminal/news item, or second-order read-through, but not directly confirmed.
- `disproven/stale` — previously tracked catalyst that missed, was denied, or no longer matters.

Every catalyst should capture:

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
  "last_scanned": "ISO-8601 UTC timestamp"
}
```

Avoid duplicate changelog entries for the same source/update. Keep summaries short enough to render cleanly on the dashboard.

## Discord update policy

- Send Discord updates only for material changes or explicit user requests.
- Prefer concise TLDRs with links to the dashboard, project page, source, or commit.
- Do not spam raw tables.
- Do not send routine "nothing happened" messages for autonomous scans.
- If a run only updates local/dashboard scan state, the changelog is enough.

## Validation and git workflow

Before committing:

```bash
python3 -m json.tool docs/data/index.json >/dev/null
python3 -m json.tool docs/data/project-changelog.json >/dev/null
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
