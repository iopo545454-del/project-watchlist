---
status: active
watchlist: crypto-projects
last_updated: 2026-07-23T07:05:58Z
---

# Compute Horde — Bittensor Subnet 12

## Overview
- Bittensor Subnet 12 / SN12.
- Decentralized compute substrate historically associated with broad GPU/CPU resource contribution.
- Current neo-cloud relevance is lower-confidence than Chutes, Targon, or Lium because current revenue and active high-end GPU utilization are not cleanly visible.
- Alpha token: SN12 within Bittensor dTAO economy.

## Latest scan notes
- 2026-07-23 — Dedicated verification located the **public machine-readable Organic Jobs dashboard** and closed the stale dashboard/activity check as confirmed. The canonical Grafana JSON and query endpoint reported **2,214 submitted jobs** from July 16 06:00 through July 23 06:00 UTC, with 2,055 succeeded, 158 failed and 211,940 accepted booked compute-seconds (~58.87 hours). Context is crucial: **1,931 jobs / 87.22% were the dashboard's `health probe` submitter** and all succeeded; the only other active submitter label, `GS`, sent 283 jobs, of which 124 succeeded and 158 failed. `sn17`, `KK` and `AC` showed no jobs. The live metagraph surface showed 16 emission-bearing neurons—eight miners and eight validators—but neither dashboard exposes billing, direct payment/revenue, GPU inventory, utilization or customer identity, and Compute Horde's own economics post says current “revenue” is not direct payment. The machine-readable activity claim is confirmed; treating it as paid customer revenue is disproven. Do not carry the broad check; reopen economics only for an official paid-job/revenue ledger and inventory/utilization only for a public capacity API. Sources: https://grafana.bittensor.church/d/cell4lui0osu8f/organic-jobs, https://grafana.bittensor.church/d/subnet/metagraph-subnet?var-subnet=12, https://x.com/ComputeHorde/status/1974114821575729428 and https://github.com/backend-developers-ltd/ComputeHorde
- 2026-07-15 — Mandatory stale-project review found the official ComputeHorde GitHub README and its named network-health surfaces: a Grafana **Subnet 12 health monitor**, Taostats and TaoMarketCap. The README says **A6000 is the currently supported hardware class** with **A100 coming next**, and describes organic jobs, collateral/slashing and facilitator routing; however, the main repo's newest commit returned by GitHub is dated 2026-04-16, the latest release is from 2025-08-13, and no public paid-job count, revenue, utilization or machine-readable organic-jobs API was exposed. This narrows the dashboard question to a canonical health surface but does not validate demand. Sources: https://github.com/backend-developers-ltd/ComputeHorde and https://grafana.bactensor.io/d/subnet/metagraph-subnet?var-subnet=12
- 2026-06-22 — Added Compute Horde to the watchlist as the low-value/optional neo-cloud comp. Taostats snapshot put SN12 alpha market cap around `24,497 TAO` / `~$5.6M` and liquidity around `27,879 TAO` / `~$6.4M` using TAO around `$229`. Source: https://taostats.io/subnets/12
- 2026-06-22 — Revenue remains unavailable from a clean public source. The investment bar is low because of the small subnet value: at `$5.6M`, Compute Horde would need only about `$0.56M/yr` / `$1.5k/day` to screen at 10x revenue, but current proof is weak.

## Thesis
- Compute Horde is cheap optionality rather than a proven inference neo-cloud. It could re-rate if it shows real external jobs, active GPU utilization, or a clear route into Bittensor's AI compute demand.
- Until then, it ranks behind Chutes/Targon/Lium/Akash on product evidence and revenue quality.

## Investment numbers / neo-cloud comps
| Metric | Current read | Source / caveat |
|---|---:|---|
| Subnet | SN12 | Bittensor dTAO alpha |
| Alpha market cap / subnet value | ~`$5.6M` — stale; manual refresh needed | Taostats, converted from TAO; as of 2026-06-22 |
| Liquidity / pool value | ~`$6.4M` — stale; manual refresh needed | Taostats, converted from TAO; as of 2026-06-22 |
| Revenue | Not available | No clean public revenue API found |
| Revenue needed at 10x | ~`$0.56M/yr`, ~`$1.5k/day` — stale derived hurdle | Based on stale 2026-06-22 subnet value; unproven |
| Revenue needed at 20x | ~`$0.28M/yr`, ~`$770/day` — stale derived hurdle | Based on stale 2026-06-22 subnet value; unproven |

## Team
- Compute Horde official/core contributors still need current verification from official docs and X accounts.

## Investors
- No high-confidence direct investor/backer list verified in this scan.

## Twitter/X accounts
- `@ComputeHorde` if still canonical; verify from official links.

## KOLs
- Track Bittensor subnet analysts who cite actual job dashboards, active jobs, validator support, and alpha metrics.

## Official links
- X: https://x.com/ComputeHorde
- Official code/README: https://github.com/backend-developers-ltd/ComputeHorde
- Subnet 12 health monitor: https://grafana.bactensor.io/d/subnet/metagraph-subnet?var-subnet=12
- Organic Jobs dashboard: https://grafana.bittensor.church/d/cell4lui0osu8f/organic-jobs
- Taostats: https://taostats.io/subnets/12
- IntoTAO page: https://intotao.app/subnets/into-compute-horde?format=md

## Onchain/data resources
- Taostats SN12 alpha market cap, emissions, liquidity, and price.
- Compute Horde organic jobs dashboard if available.
- Active job count, paid external demand, GPU/CPU inventory, validator support, and miner count.

## Docs/blogs
- Official docs/blog need to be pinned once verified.

## Risks
- Revenue unavailable and current external demand unclear.
- Historical large compute claims may not reflect current active paid GPU inventory.
- Low subnet value can be attractive but also reflect weak demand/validator support.

## Catalysts

| Catalyst | Status | Evidence / source | Timing | Direct impact | Second-order consequences | What to watch next |
|---|---|---|---|---|---|---|
| Organic Jobs dashboard | Confirmed / live machine-readable KPI | Official announcement and live dashboard/API surface: https://x.com/ComputeHorde/status/1981391037789573546 and https://grafana.bittensor.church/d/cell4lui0osu8f/organic-jobs | Live; deeply verified 2026-07-23 | Exposes submitted jobs, outcomes, booked compute-seconds, submitter labels, trust routing and validator targets. The verified seven-day slice contained 2,214 jobs and 211,940 booked seconds. | Makes activity auditable but also shows why gross jobs are misleading: 87.22% were health probes, while the only other active label had 124 successes and 158 failures. | Broad verification closed. Reopen only for an official paid-job/revenue ledger, customer identity/retention or a public GPU inventory/utilization API. |
| On-chain configuration migration | Confirmed / decentralization-security upgrade | Official Compute Horde post: https://x.com/ComputeHorde/status/1954813966535868776 | Announced/implemented per official post | Moves config away from public GitHub JSON toward on-chain smart contracts, reducing centralized dependency. | Better resilience and governance may make SN12 more credible infrastructure for other subnets. | Watch contract addresses, upgrade controls, audits, validator adoption, and any config-related incidents. |
| SDK and subnet integration path | Confirmed / integration catalyst | Official Compute Horde post and GitHub PR: https://x.com/ComputeHorde/status/1943634415386546576 and https://github.com/deval-core/De-Val/pull/68 | Integration PRs live | Makes it easier for other Bittensor subnets to offload compute jobs to SN12. | More subnet integrations could create organic demand and reduce reliance on emissions. | Watch merged integrations, active consumers, job volume per subnet, and revenue/payment mechanics. |

## Open questions
- The public Organic Jobs Grafana/API is now mapped. Its July 16–23 slice was dominated by health probes, and the project says current revenue is not direct payment; what customer/integration is `GS`, are those jobs paid, and what are billings, validator economics and repeat demand?
- What is current live GPU inventory and utilization?
- Why should SN12 win versus newer inference/compute subnets?

## Watch triggers
- Public revenue or organic jobs dashboard update.
- Emission share or validator support inflection.
- New product/integration that routes paid AI workloads to SN12.
- Material changes in SN12 alpha price/liquidity versus revenue evidence.
