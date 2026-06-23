---
status: active
watchlist: crypto-projects
last_updated: 2026-06-23T18:22:47Z
---

# EIGEN / EigenCloud

## Overview
EigenCloud is the EigenLayer/Eigen Labs team's attempt to extend the original restaking/AVS thesis into a **verifiable cloud for autonomous agents**. The core pitch is that agents will need memory, identity, execution receipts, and economic accountability before they can safely hold money, operate businesses, or coordinate high-stakes workflows.

- **Token:** EIGEN. Candidate/canonical Ethereum contract in watchlist: `0xec53bf9167f50cdeb3ae105f56099aaab9061f83`; still verify against official EigenLayer/EigenCloud token pages before trading or dashboard use.
- **Core product / system:** EigenCloud, EigenCompute / verifiable compute, EigenDA, AgentKit, verifiable memory/agent coordination, and EIGEN-secured accountability / slashing rails.
- **Positioning:** verifiable cloud / agent trust infrastructure, not a pure high-end GPU rental network.

## Latest scan notes
- 2026-06-22 — Added neo-cloud comparison numbers: EIGEN market cap around `$200M`; DefiLlama shows EigenCloud/EigenLayer protocol revenue as `$0` but fees/rewards of about `$981` 24h, `$145k` 7d, `$756k` 30d, and `$160.7M` all-time. DefiLlama methodology says all rewards are supplier-side and protocol revenue is zero. Source: https://api.llama.fi/summary/fees/eigenlayer?dataType=dailyFees
- 2026-06-22 — Compute-capacity note: EigenCloud/Darkbloom is better framed as verifiable/agent compute and distributed inference than as a CoreWeave-style H100/H200/B200 neo-cloud; no public high-end GPU fleet count was found. Recent public signals referenced ~250 live Darkbloom providers peak and 600M+ tokens served, but not datacenter GPU inventory. Sources: https://x.com/eigenlabs/status/2066591846550343745 and https://x.com/eigencloud/status/2059315711139549229
- 2026-06-21 — GitHub intake issue #3 added EigenCloud / EigenLayer to the dashboard. Initial review found the current product narrative has shifted toward verifiable cloud/agent infrastructure, with recent official X emphasizing PostAGI, open agentic science, verifiable memory/identity/proofs, EigenCompute, and EIGEN value accrual via EigenCloud fees. Source: https://github.com/iopo545454-del/project-watchlist/issues/3

## Thesis
- EigenCloud is an adjacent but different bet from Chutes/Targon/Lium/Akash: it is an agent trust / verifiable execution / DA infrastructure thesis, not a clean GPU-capacity thesis.
- The investment case improves materially if ELIP-12 or similar mechanisms route real EigenCloud/EigenDA/EigenCompute fees to EIGEN buybacks/burns. Today, DefiLlama shows no protocol revenue, so token value capture remains the key open question.
- If supplier fees/rewards became token-accretive, EIGEN trades around `21.8x` annualized fees/rewards (`~$200M` mcap / `~$9.2M` annualized 30d fees). If protocol revenue stays `$0`, the valuation is primarily future-tokenomics and narrative.

## Investment numbers / neo-cloud comps
| Metric | Current read | Source / caveat |
|---|---:|---|
| Token market cap | ~$200M | CoinGecko simple price API |
| Price | ~$0.27 | CoinGecko simple price API |
| Protocol revenue | $0 24h / 7d / 30d / all-time | DefiLlama methodology |
| Fees/rewards | ~$981 24h; ~$145k 7d; ~$756k 30d | Supplier-side rewards, not protocol revenue |
| Annualized fees/rewards | ~$9.2M | 30d run-rate |
| Market cap / annualized fees | ~21.8x | Only meaningful if fees become token-accretive |
| Public GPU fleet | Not disclosed | No H100/H200/B200 inventory found |
| Darkbloom proxy | ~250 live providers peak; 600M+ tokens served | Public X claims; distributed/idle compute not datacenter fleet |

## Catalysts
| Catalyst | Status | Evidence / source | Timing | Direct impact | Second-order consequences | What to watch next |
|---|---|---|---|---|---|---|
| EigenCloud / verifiable cloud rollout | Confirmed | Official site/docs/posts: https://www.eigencloud.xyz/ and https://x.com/eigencloud/status/2026360977881743846 | Live / ongoing | Moves EigenLayer from generic restaking infrastructure into developer-facing cloud for verifiable agent workloads. | Could re-rate EIGEN if it creates fee-paying usage rather than purely subsidized security demand. | Watch docs, product launches, developer cohorts, live apps, and machine-readable usage/fee metrics. |
| EIGEN value accrual from EigenCloud fees / ELIP-12 | Confirmed proposal / needs implementation verification | Official value-accrual post: https://x.com/eigencloud/status/2016386803062997049 | Proposal/implementation status needs current verification | Ties EigenCloud fees net of costs and part of subsidized-reward fees to EIGEN buyback/burn. | Real fee capture would make EigenCloud directly relevant to token demand/supply. | Verify ELIP status, fee dashboards, burn transactions, operating-cost treatment, and whether revenue is organic. |
| Darkbloom / distributed inference | Early / adjacent | Recent Eigen Labs/EigenCloud posts | 2026 / rolling | Adds an inference-adjacent angle, but currently not a high-end GPU fleet comp. | Could matter if Darkbloom routes real paid inference volume into EigenCloud economics. | Watch provider count, paid token volume, OpenRouter usage, supported models, and fees. |

## Token / contract notes
- Intake provided token address `0xec53bf9167f50cdeb3ae105f56099aaab9061f83`; treat it as the watchlist contract candidate pending official/explorer verification.
- EIGEN is the token tied to EigenLayer's programmable trust / staking / slashing layer.
- Official EigenCloud value-accrual posts describe a buyback/burn loop using EigenCloud fees net of operating costs plus part of subsidized-reward fees, but the scan still needs current ELIP implementation status, dashboards, and burn transaction evidence.
- Avoid treating restaking TVL alone as value capture; the important watch items are fees, burns, usage, security budgets, and emission quality.

## Sources / Research Inputs
| Information source | Context about the source |
|---|---|
| https://www.eigencloud.xyz/ | Official EigenCloud website; monitor for product positioning, app/docs links, and launch messaging. |
| https://docs.eigencloud.xyz/ | Official docs; monitor AgentKit, EigenCompute, builder onboarding, technical details, and product changes. |
| https://blog.eigencloud.xyz/ | Official blog; announcements, deep dives, AgentKit/product posts. |
| https://api.llama.fi/summary/fees/eigenlayer?dataType=dailyFees | DefiLlama fees/rewards source; supplier-side, not protocol revenue. |
| https://api.llama.fi/summary/fees/eigenlayer?dataType=dailyRevenue | DefiLlama revenue source; currently zero protocol revenue. |
| https://x.com/eigencloud | Main EigenCloud X account; primary current product/narrative source. |
| https://x.com/EigenLayer | EigenLayer protocol X; monitor token/protocol/governance/restaking announcements. |
| https://x.com/eigenlabs | Eigen Labs account; team/research/product context. |
| https://x.com/sreeramkannan | Founder account; high-signal thesis, ELIP, value accrual, and roadmap commentary. |

## Open questions
- What is the live implementation status of ELIP-12 and the EigenCloud fee buyback/burn mechanism?
- How much of EigenCloud usage is organic and fee-paying versus subsidized/builder-demo activity?
- Are there public dashboards for EigenCloud fees, burns, active apps, compute jobs, attestations, or developer activity?
- Does Darkbloom ever expose paid inference volume, provider quality, model mix, and token-level economics?

## Monitoring notes
- Prioritize `@eigencloud`, `@EigenLayer`, `@eigenlabs`, `@sreeramkannan`, docs/blog changes, ELIP/governance items, and fee/burn dashboards.
- Treat agent/post-AGI thought leadership as useful narrative context, but only log durable changes when tied to product, fees, token economics, integrations, or launches.
- Watch for credible weak signals around exchange/listing changes, restaking security incidents, AVS failures, token unlocks, fee routing, or buyback/burn proof.
