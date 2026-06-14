# Project Watchlist Agent Framework

This repository is a source-of-truth research dashboard for monitored crypto/project dossiers. Agents and human contributors should follow this framework when updating the repo or running recurring monitoring.

## Canonical files

- `projects/*.md` are the canonical project dossiers.
- `index.json` and `index.csv` are machine-readable root indexes.
- `docs/` is the GitHub Pages presentation layer.
- `docs/data/index.json` powers the dashboard project list.
- `docs/data/project-changelog.json` powers the dashboard changelog and scan history.
- Generated HTML in `docs/projects/*.html` should reflect the Markdown dossiers, not replace them as the source of truth.

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
- Unverified rumors, unless clearly marked as unverified and important enough to track as an open question.

## Recurring scan workflow

Every autonomous monitoring run should:

1. Check open project-intake GitHub issues from the dashboard form.
2. Load tracked projects from `docs/data/index.json`.
3. Use each project's `primary_x`, `x_accounts`, source list, token address, and dossier links to define the scan scope.
4. Prioritize official sources, team/core-contributor X accounts, docs/blogs, GitHub/governance/forum, and relevant data dashboards.
5. Look back roughly to the prior scan timestamp; if missing, use the latest relevant changelog/index timestamp as the baseline.
6. Apply the materiality threshold before editing files or alerting Discord.
7. Add or update durable findings in the relevant `projects/*.md` dossier.
8. Update `docs/data/project-changelog.json` with scan timestamps and material changes.
9. Update indexes and generated project pages when metadata, links, or displayed content change.
10. Validate JSON and inspect the diff before committing.
11. Commit and push real changes to `main`.

If no material change exists, the run should update scan state only when useful and otherwise stay quiet.

## Initial review workflow

For a new project or any project marked `initial_review_done: false`:

1. Deduplicate by project name, slug, token address, and primary X account.
2. Create or update a stable slug and project dossier under `projects/`.
3. Discover official website, docs, blog, GitHub, governance/forum, primary X, founder/team/core-contributor X accounts, token/contract pages, and useful dashboards.
4. Add sources using the standard two-column source table.
5. Fill concise sections for overview, thesis/narrative, catalysts, token/contract notes, open questions, and monitoring notes.
6. Update `docs/data/index.json` and root indexes with source counts, X accounts, token address, page path, and `initial_review_done: true` when complete.
7. Add a changelog entry of type `initial review`.
8. Regenerate the corresponding `docs/projects/<slug>.html` page.

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

## Changelog standard

`docs/data/project-changelog.json` entries should be concise and user-facing:

```json
{
  "date": "ISO-8601 UTC timestamp",
  "project": "Project display name",
  "type": "scan | intake | initial review | source added | official update | docs/blog update | contract/address update | thesis update",
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
