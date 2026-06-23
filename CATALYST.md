# Catalyst Standard

This file defines what counts as a **catalyst** in the Project Watchlist and how catalysts should be written in each project dossier and calendar entry.

A catalyst is a project-relevant event, change, or credible upcoming development that could make the project matter more or less in the future. It should answer:

1. **What could happen or has just happened?**
2. **When might it happen / when did it happen?**
3. **How firm is the evidence?**
4. **What changes directly?**
5. **What second-order consequences could follow?**
6. **What should we watch next to confirm, upgrade, downgrade, or kill the catalyst?**

Catalysts are not generic bullish/bearish takes. **Every catalyst must have a source.** They also need a timing frame and a reason they matter.

---

## Non-negotiable source rule

Do not add a catalyst unless the row has a real source in `Evidence / source`.

Acceptable sources include:

- a URL to an official announcement, docs page, blog, governance/forum post, GitHub release/PR/issue, dashboard, explorer transaction/address, onchain query, partner post, exchange/listing notice, founder/team/core-contributor post, credible terminal/news/research item, or high-signal X post/thread;
- or, when the source came directly from the user, an explicit `user-provided context` note with date and enough detail to trace what was provided.

Not acceptable:

- blank `Evidence / source` cells;
- `TBD`, `needs source`, `no source`, or “heard somewhere”;
- unsupported internal inference without a linked post, dashboard, onchain object, GitHub artifact, or other observable basis.

If a catalyst idea has no source yet, put it in `Open questions`, `Unverified Watch Items`, or a research TODO instead of the catalyst table. Once a source is found, promote it into `## Catalysts`.

---

## What counts as a catalyst

Use the catalyst table for material items such as:

- Product launches, mainnet launches, testnet launches, major app releases, or roadmap milestones.
- Protocol upgrades, validator/miner/subnet changes, security model changes, and technical releases.
- Token events: unlocks, claims, airdrops, emissions changes, staking, buybacks, burns, migrations, treasury changes, token utility changes.
- Governance proposals, votes, parameter changes, and foundation/project policy changes.
- Revenue, KPI, TVL, usage, capacity, or direct-data milestones when they affect the project thesis.
- Major integrations, partnerships, exchange listings, market-structure changes, ecosystem programs, grants, incentives, or developer launches.
- Funding, team/founder/foundation changes, strategic investor activity, acquisitions, or entity/revenue-structure changes.
- Security incidents, outages, exploit disclosures, pauses, postmortems, or recovery milestones.
- Credible tentative/speculative items when clearly labeled and useful to watch.

---

## What does **not** count

Do not add these as catalysts unless the user explicitly asks:

- Routine price movement with no project-specific cause.
- Generic CT hype, engagement farming, reposts, or unsourced rumors.
- Vague sentiment like “people are bullish” without a concrete event.
- Duplicate mentions of an already-tracked catalyst unless there is new timing, evidence, or impact.
- Minor marketing posts with no product, token, governance, data, or adoption consequence.
- Speculation that cannot be tied to a plausible source, observable data, related account, official hint, terminal/news item, GitHub/onchain evidence, or repeated high-signal discussion.

---

## Catalyst status labels

Use **confidence/status** for evidence strength, and **event status** for calendar direction. Do not let these collapse into one field.

Evidence/confidence labels:

- `confirmed` — official source, partner source, announced date/window, governance result, committed roadmap, observable onchain data, or observable GitHub/product evidence.
- `tentative` — credible but not fully committed: soft roadmap, team hint, partner teaser, repeated founder comments, job posts, testnet activity, partial docs, or clear work-in-progress.
- `speculative` — plausible inference from market structure, ecosystem incentives, related-account chatter, terminal/news item, or second-order read-through, but not directly confirmed.
- `disproven/stale` — previously tracked catalyst that missed, was denied, became irrelevant, or no longer matters.

Calendar event-status labels:

- `upcoming` — an unresolved future event with a source-backed date/window/condition.
- `completed` — an event that has already happened: `live`, `launched`, `published`, `released`, `announced`, `available now`, `run it now`, `opened`, `completed`, etc.
- `ongoing` — a continuous KPI/dashboard/program/state with no discrete upcoming milestone.
- `watch` — tentative/speculative/no-date items that should be monitored but not treated as scheduled.

Keep confirmed, tentative, and speculative catalysts in the same table when useful, but label them clearly. Do not bury useful speculative catalysts; define what evidence would upgrade or downgrade them.

---

## Required dossier format

Each project dossier should use this table when enough information exists:

```md
## Catalysts

| Catalyst | Status | Evidence / source | Timing | Direct impact | Second-order consequences | What to watch next |
|---|---|---|---|---|---|---|
| Mainnet launch | Confirmed | https://example.com/roadmap | Q3 2026 / tentative | Enables product usage | Could trigger exchange integrations, incentive programs, new TVL/liquidity loops | Watch docs, GitHub releases, official launch posts |
```

### Column rules

- **Catalyst** — short, specific name. Prefer “WLD unlock rate decreases by 43% starting July 2026” over “tokenomics update.”
- **Status** — confirmed / tentative / speculative / disproven-stale.
- **Evidence / source** — source URL plus short evidence summary. Prefer official/project/partner/onchain/GitHub sources. This field is mandatory; do not add the catalyst if the source is missing or only says `TBD` / `needs source`.
- **Timing** — exact date, month, quarter, year, window, sequence, or `unknown / needs date check`.
- **Direct impact** — what changes immediately for product, token, users, supply/demand, liquidity, revenue, emissions, governance, or attention.
- **Second-order consequences** — what else could happen if it plays out: listings, integrations, incentives, unlock pressure, buybacks, ecosystem effects, narrative spillovers, competitor impacts.
- **What to watch next** — the next evidence that would confirm, accelerate, delay, downgrade, or kill the catalyst.

---

## Evidence quality

Prefer sources in this order:

1. Official project announcements, docs, blog, changelog, governance/forum, GitHub, app, or dashboard.
2. Founder/team/core-contributor/foundation X accounts.
3. Partner, integration, exchange, investor, or ecosystem announcements.
4. Onchain, explorer, API, dashboard, GitHub, or other observable data.
5. Credible third-party terminals/news/research with clear sourcing.
6. High-signal CT only as discovery unless it contains concrete evidence.

Label evidence quality implicitly in the row text: official, partner, onchain, GitHub, third-party, founder hint, speculative, etc.

---

## Timing and calendar rules

Treat date quality as first-class. Do not force vague catalysts into near-term calendar buckets.

Use:

- Exact date: `2026-07-07`
- Date window: `July 2026`, `Q3 2026`, `H2 2026`
- Relative sequence: `after mainnet`, `post-governance vote`, `following audit`
- Unknown: `date needs confirmation`, `no launch date announced`, `timing unclear`

Calendar bucket rules:

- **Alr happened** — completed events: launches, milestones, already-live products, published/announced updates, released models, completed votes/sales/buybacks, or other source text that says the thing is already available/happened. A fresh launch from the last 7 days still goes here unless there is a separate unresolved future action.
- **This week** — `event_status: upcoming` with a confirmed exact date within the next 7 days only.
- **This month** — `event_status: upcoming` with a confirmed exact date or month-specific window in the current/near month.
- **Unconfirmed / later** — `event_status: watch`, `ongoing`, tentative/speculative/unknown/TBD/no-set-date items, later-dated items, and continuous dashboards/programs without a discrete unresolved milestone.

Never place a no-set-date or needs-date-check item in **This week** or **This month**. Never place an already-live / launched / published / released / “run it now” item in **This week** or **This month** just because its source date is in the current month.

Keep the original timing wording visible even after normalizing date fields for the calendar.

---

## Handling speculative catalysts

Speculative catalysts are useful when they are plausible and monitorable. A speculative item should include:

- The source of the inference.
- Why it could matter if true.
- What evidence would confirm it.
- What evidence would disprove or stale it.

Good speculative catalyst:

> “Potential exchange listing after market-maker wallet funding” — speculative, sourced to onchain wallet movement and exchange deposit patterns, with watch-next criteria.

Bad speculative catalyst:

> “Big announcement soon” — no source, no timing, no impact, no watch criteria.

---

## Backfilling missed catalysts

When backfilling catalysts for a project:

1. Read the existing dossier and calendar entries first to avoid duplicates.
2. Search official sources before CT.
3. Include already-happened major events if they explain the project’s current state or belong on the “Alr happened” calendar lane.
4. Preserve source URLs and exact timing language.
5. Mark vague roadmap items as `tentative` or `speculative`; keep them in `Unconfirmed / later` until dates firm up.
6. Update the project dossier first, then `docs/data/catalysts.json`, then generated project pages/calendar as needed.
7. Validate JSON and check the calendar locally before committing.

---

## Quick decision test

Before adding a catalyst, ask:

- Is there a source URL?
- Is there a concrete event/change?
- Is the timing explicit or honestly labeled as unknown?
- Does it affect product, token, users, revenue, governance, liquidity, supply/demand, security, or narrative structure?
- Is there a clear next check?

If the answer is mostly “no,” it probably belongs in Latest scan notes, Open questions, or Unverified Watch Items instead of the catalyst table.
