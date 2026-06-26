---
status: active
watchlist: crypto-projects
last_updated: 2026-06-26T16:42:13Z
---

# AKT / Akash

## Overview
- Decentralized cloud compute marketplace.
- Native token: `AKT`.
- Built on Cosmos SDK; uses Kubernetes-oriented provider/deployment architecture.
- Focus areas: open cloud, GPU compute, AI workloads, permissionless compute supply.

## Latest scan notes

- 2026-06-26 — Official Akash said it is rethinking marketplace UX for the shifting GPU market, starting with Resource Reclamation for timed compute so providers and tenants get cleaner lease expiry/release mechanics. Greg Osuri followed with “finalizing details to announce soon,” so treat this as a concrete product-roadmap signal rather than a live launch. Source: https://x.com/akashnet/status/2070539636544266464 and https://x.com/gregosuri/status/2070541033486827554
- 2026-06-24 — Official Akash said Homenode beta is accepting RTX 3090s, 4090s, and 5090s for inference and distributed training, quoting Greg Osuri's $500/month 5090 Homenode economics. This upgrades the Homenode supply-expansion catalyst from roadmap context to live beta recruiting for high-end home GPUs. Source: https://x.com/akashnet/status/2069848542584201265
- 2026-06-24 — Akash founder Greg Osuri said Akash website estimates assume conservative 50% utilization, while current RTX 5090s are utilized 100%. This is a useful high-end GPU demand signal, but it needs dashboard/API confirmation and context on how many 5090s are actually online. Source: https://x.com/gregosuri/status/2069648170989277556
- 2026-06-22 — Added neo-cloud investment numbers from the official Akash Console API and CoinGecko: AKT market cap around `$210M`; official dashboard snapshot showed `699` active leases, `135` active GPUs, total marketplace spend about `$5.44M`, and 24h gross spend about `$7.37k` / `$2.69M annualized`. Source: https://console-api.akash.network/v1/dashboard-data
- 2026-06-22 — Relative valuation note: at ~$210M market cap versus ~$2.69M annualized gross spend, AKT screens around `78x` gross marketplace spend; to look like 10x-20x gross spend, daily spend needs to rise toward roughly `$29k-$58k/day`.
- 2026-06-18 — Akash proposal 329 is live: PIP Spot and Reservation Revenue Share would set 10% OCL / 90% community-pool spot revenue and 30% / 70% reservation revenue splits; voting ends June 25. Source: https://moon-runners.net/akash/mainnet/governance/329
- 2026-06-17 — Official X promoted Console Air as a permissionless wallet-only deployment path with no signups or email, using an AKT wallet as the deployment identity/payment surface. Source: https://x.com/akashnet/status/2067334557607592382
- 2026-06-15 — Official X said Kimi 2.7 is available on AkashML/OpenRouter for connected Claude Code users, extending the open compute / agentic coding model surface. Source: https://x.com/akashnet/status/2066593476322500908

## Thesis
- Akash is the broad, liquid, established decentralized cloud comp in the basket. It has real marketplace spend and clean official usage data, but it is less direct to managed inference than Chutes and less obviously high-end/confidential GPU focused than Targon.
- The investment case is strongest if active GPU leases and gross spend accelerate materially after Console Air, OpenRouter/AkashML integrations, and revenue-share governance clarifies token/economic routing.
- Current valuation already prices a meaningful usage ramp: AKT needs roughly 4x-8x higher daily spend to screen normally at 10x-20x gross marketplace spend.

## Investment numbers / neo-cloud comps
| Metric | Current read | Source / caveat |
|---|---:|---|
| Token market cap | ~$210M | CoinGecko simple price API |
| Price | ~$0.72 | CoinGecko simple price API |
| Active leases | 699 | Official Akash Console API snapshot |
| Active GPUs | 135 | Official Akash Console API snapshot |
| Total gross marketplace spend | ~$5.44M | Official Akash Console API |
| 24h gross spend | ~$7.37k | Gross spend, not protocol revenue |
| Annualized gross spend | ~$2.69M | 24h run-rate |
| Market cap / annualized gross spend | ~78x | Rich versus current usage |
| Daily spend needed at 20x | ~$28.8k/day | Implied hurdle |
| Daily spend needed at 10x | ~$57.5k/day | Implied hurdle |

## Team
- Overclock Labs — original/core builder of Akash.
- Greg Osuri / `@gregosuri` — founder.
- Adam Bozanich / `@abozanich` — co-founder / key early engineer.
- Akash community includes validators, providers, deployers, and governance participants.

## Investors
- Multicoin Capital is a known early institutional backer.
- Public founder commentary references relatively modest early equity/token funding to launch Akash.
- Full historical investor list is not always surfaced in current official channels; verify via older official announcements or company databases.

## Twitter/X accounts
- `@akashnet`
- `@ovrclk_`
- `@gregosuri`
- `@abozanich`
- `@multicoin`

## KOLs
- Cosmos/DePIN/GPU compute community validators and providers.

## Official links
- Website: https://akash.network/
- Console: https://console.akash.network/
- Console API dashboard data: https://console-api.akash.network/v1/dashboard-data
- Docs: https://akash.network/docs/
- GitHub: https://github.com/akash-network
- X: https://x.com/akashnet
- Overclock Labs X: https://x.com/ovrclk_
- Founder X: https://x.com/gregosuri

## Onchain/data resources
- Network spend / active leases / provider count.
- GPU inventory and utilization.
- AKT staking ratio, inflation, validator set, governance proposals.
- Provider pricing vs centralized clouds.
- Akash Console usage, deployment success, uptime.
- AI inference/GPU-specific demand.
- Cosmos ecosystem liquidity and IBC flows.

## Docs/blogs
- Akash docs: https://akash.network/docs/
- Console/dashboard: https://console.akash.network/

## Risks
- Current valuation is high relative to marketplace spend.
- Gross spend is not the same as protocol revenue or AKT value capture.
- Provider-side quality and UX remain key adoption constraints.
- Watch real usage and network spend, not just AI narrative.

## Catalysts

| Catalyst | Status | Evidence / source | Timing | Direct impact | Second-order consequences | What to watch next |
|---|---|---|---|---|---|---|
| Burn Mint Equilibrium live on mainnet | Confirmed | Akash Q1 2026 report says BME went live Mar. 23, 2026 after Proposal 318; roadmap lists AEP-76 completed: https://akash.network/blog/akash-network-q1-2026-report/ and https://akash.network/roadmap/2026/ | Live since 2026-03-23 | Creates direct link between compute demand and AKT via burn/mint economics while preserving stable pricing UX. | If compute spend grows, AKT capture narrative improves versus USDC-only marketplace usage. | Watch compute spend, AKT burned/minted, USDC vs AKT payment mix, provider receipts, and governance parameter changes. |
| Akash crossed $5M all-time compute spend and Q1 usage milestones | Confirmed / KPI catalyst | Akash Q1 2026 report says first 90 days crossed an all-time high of $5M in compute spend: https://akash.network/blog/akash-network-q1-2026-report/ | Q1 2026 | Provides KPI evidence that marketplace demand is growing. | Higher spend improves credibility of BME and provider incentives. | Track quarterly compute spend, active leases, GPU utilization, customer retention, and revenue concentration. |
| Homenode consumer/prosumer GPU supply expansion | Confirmed / beta live | Q1 report says Homenode beta opened signups for RTX 4090, RTX 5090, and Quadro RTX 6000 Ada; official X later said beta is accepting RTX 3090s, 4090s, and 5090s for inference/distributed training: https://akash.network/blog/akash-network-q1-2026-report/ and https://x.com/akashnet/status/2069848542584201265 | Beta live / actively accepting GPUs as of 2026-06-24 | Adds a new supply category beyond datacenter providers, including high-end consumer GPUs. | If reliable, Akash can scale cheaper inference capacity and broaden provider participation; if $500/month 5090 economics are real and sustained, more home supply may join quickly. | Watch beta acceptance, supported GPUs, uptime/SLA, inference workloads, Homenode earnings, and whether new supply increases paid marketplace spend. |
| Resource Reclamation / timed GPU compute marketplace UX | Tentative / official roadmap signal | Official Akash post says marketplace UX is being rethought for the shifting GPU market, starting with Resource Reclamation for timed compute; founder said details are being finalized soon: https://x.com/akashnet/status/2070539636544266464 and https://x.com/gregosuri/status/2070541033486827554 | Announced 2026-06-26; implementation details pending | Enables fixed-duration GPU leases with cleaner resource release and billing mechanics for providers and tenants. | Better timed-compute UX could improve short-burst AI/HPC demand, provider utilization, and Akash competitiveness versus centralized GPU clouds. | Watch the full article/docs, AEP/specs, console rollout, provider support, billing/refund semantics, and whether timed leases raise gross spend. |
| Confidential computing and TEE roadmap | Confirmed / planned roadmap item | Akash 2026 roadmap lists AEP-83 Confidential Compute via Kata Containers estimated July 31, 2026: https://akash.network/roadmap/2026/ | Estimated 2026-07-31 | Adds CPU/GPU TEE workload support for enterprise and privacy-sensitive deployments. | Could unlock higher-value AI workloads that cannot use ordinary public decentralized compute. | Watch AEP-83 delivery, attestation UX, provider support, customer pilots, and security reviews. |

## Open questions
- How much of gross spend maps to durable AKT value capture after proposal 329 / revenue-share changes?
- What are current high-end GPU availability, utilization, and customer retention by provider?
- How much inference demand comes through AkashML/OpenRouter versus one-off deployments?

## Watch triggers
- Sustained increase in network spend or GPU utilization.
- Daily gross spend moving above ~$30k/day, then ~$60k/day.
- New major GPU provider or enterprise/user partnership.
- Governance proposal affecting inflation, take rate, provider incentives, or community pool.
- Chain halt, validator issue, or provider reliability incident.
- AKT unlock/staking/liquidity shock.
