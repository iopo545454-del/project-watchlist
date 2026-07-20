---
status: active
watchlist: crypto-projects
last_updated: 2026-07-20T15:22:40Z
---

# Targon — Bittensor Subnet 4

## Overview
- Bittensor Subnet 4 / SN4.
- Secure/confidential decentralized compute cloud for AI workloads.
- Built by Manifold Labs.
- Focus: GPU/CPU marketplace, confidential inference/training, TEEs, Targon Virtual Machine, remote attestation.
- Alpha token: SN4 within Bittensor dTAO economy.

## Latest scan notes

- 2026-07-20 — Dedicated post-event verification **confirmed TargonOS as a real signed miner operating-system release, not an event-only demo**. Official docs expose TargonOS `0.1.0`, a 3.9 GB interactive ISO, unattended iPXE/netboot bundle, SHA-256 manifest and minisign artifacts at `releases.targon.com`; the release directory is timestamped July 17 and the ISO manifest hash is `a72b39dcdf0386b9300333e6a5ede965d965d56bf17f59e8be7437061382aacd`. The installer requires UEFI hardware with Intel TDX enabled, TPM 2.0, GPUs, DHCP/outbound HTTPS and a Bittensor miner hotkey; it wipes eligible disks, pins the signed payload and hardware-validation endpoints, then attests on every boot, unlocks encrypted storage and starts Targon services. TargonOS replaces the prior manual host-OS/TVM provisioning flow. The canonical `manifold-inc/targon` repository contains the installation/miner docs and SN4 CLI, but no GitHub release/tag for OS `0.1.0`; binaries are distributed from Targon's release server. Tower remains waitlist-only, and no post-release node count, reliability, paid utilization, customer-fee, audit or incremental SN4 buyback evidence was found. Sources: https://docs.targon.com/providers/miner/installing-targonos, https://releases.targon.com/0.1.0/, https://github.com/manifold-inc/targon/blob/cf22204235248e4b43605803230d82f1dc4155d6/docs/miner/installing-targonos.md and https://targon.com/tower
- 2026-07-14 — OpenTensor Foundation scheduled **Novelty Search E081 for July 16 at 21:00 UTC** with Bittensor co-founder Jacob Steeves and Manifold Labs CEO Rob Meyers, explicitly naming confidential compute, TEEs, Targon-At-Home and the **“launch of TargonOS.”** This is the first public TargonOS reference found, but the announcement does not define the artifact, release channel, availability, code, supported hardware, economics or whether “launch” means a demo versus a usable release. Source: https://x.com/opentensor/status/2077139332859904391
- 2026-06-29 — Official Targon said MinosVM 2.0 is live on targon.com powering Minos with secure confidential compute, stronger native-agent support, and a move from manual optimization toward autonomous improvement on SN107. Source: https://x.com/TargonCompute/status/2071644073241264403
- 2026-06-29 — Kraken’s public listings page includes Targon / SN4 on its roadmap, alongside other Bittensor subnet alpha tokens; treat as exchange-roadmap/listing catalyst pending actual trading enablement and official Targon/Kraken trading details. Source: https://www.kraken.com/listings#roadmap
- 2026-06-22 — Added neo-cloud investment numbers: Taostats snapshot put SN4 alpha market cap around `245,062 TAO` / `~$56.2M` and liquidity around `249,735 TAO` / `~$57.3M` using TAO around `$229`; this is subnet alpha/pool context, not a normal token FDV. Source: https://taostats.io/subnets/4
- 2026-06-22 — Revenue is not cleanly exposed through a public API, but the best current proxy is Targon/Manifold's cited `2,000 TAO` of revenue-backed buybacks over a month, about `$456k/month` or `$5.5M annualized` at TAO around `$228`. Treat as a buyback proxy until verified against wallet flows. Source: https://x.com/TargonCompute/status/2060387734120751126
- 2026-06-22 — Capacity scan found Targon as the strongest visible high-end GPU inventory among the compared decentralized neo-clouds: auction/inventory surfaces showed H200/B200/B300/H100 availability including multiple 8-GPU pod configurations. Source: https://targon.com/inventory

## Thesis
- Targon is the premium secure-compute bet in the decentralized neo-cloud basket: less pure OpenRouter-style inference API than Chutes, but better exposed to private/enterprise workloads that need high-end GPU pods plus attestation/confidential compute.
- The numbers look attractive if the buyback proxy is durable: `~$56.2M` subnet value versus `~$5.5M` annualized buyback proxy is roughly `10.3x`.
- If the buyback proxy grows 5x and the market pays 10x sales/buybacks, implied value is about `$274M` or `~4.9x` current subnet value; 10x growth at 15x implies about `$822M` or `~14.6x`.

## Investment numbers / neo-cloud comps
| Metric | Current read | Source / caveat |
|---|---:|---|
| Subnet | SN4 | Bittensor dTAO alpha |
| Alpha market cap / subnet value | ~$56.2M | Taostats, converted from TAO |
| Liquidity / pool value | ~$57.3M | Taostats, converted from TAO |
| Revenue | Not directly public | No clean revenue API found |
| Buyback proxy | ~2,000 TAO/month, ~$456k/month | Official X / wallet verification still needed |
| Annualized proxy | ~$5.48M | Uses TAO ~$228 |
| Current value / proxy | ~10.3x | Proxy, not audited revenue |
| Revenue needed at 10x | ~$5.6M/yr, ~$15.4k/day | Targon roughly clears this on proxy |

## Team
- Manifold Labs — builder/operator.
- James Woodman / `@jameswoodmanv` — co-founder of Manifold Labs; former COO at Opentensor.
- `@0xcarro` — Manifold/Targon representative in public events.
- Broader Manifold engineering team focused on inference, secure compute, GPU orchestration.

## Investors
- Manifold Labs announced a $10.5M Series A.
- Publicly cited participants include OSS Capital, DCG, Tobias Lütke, Ram Shriram, Zachary Smith, Jacob Steeves, Ala Shaabana, Logan Kilpatrick, and others.
- Strong Bittensor-native alignment claimed: Targon/Manifold has publicly emphasized returning Targon revenue to SN4 alpha holders / buying SN4 with revenue.

## Twitter/X accounts
- `@TargonCompute`
- `@manifoldlabs`
- `@jameswoodmanv`
- `@opentensor`
- `@taostats`
- `@tao_market_cap`

## KOLs
- Bittensor subnet analysts tracking SN4 revenue, alpha price, buyback wallet, and emissions.

## Official links
- Website: https://targon.com/
- Inventory: https://targon.com/inventory
- X: https://x.com/TargonCompute
- Manifold Labs X: https://x.com/manifoldlabs
- Tower hardware: https://targon.com/tower
- TargonOS installation: https://docs.targon.com/providers/miner/installing-targonos
- Signed TargonOS releases: https://releases.targon.com/
- Canonical SN4 repository: https://github.com/manifold-inc/targon
- Intel whitepaper page: https://targon.com/releases/intel-whitepaper
- Supplier portal: https://supply.targon.com/
- Bittensor metrics: https://taostats.io/subnets/4 and https://taomarketcap.com/

## Onchain/data resources
- SN4 emissions, alpha price, staking, liquidity, burn/lock data.
- Buyback wallet and TAO/SN4 alpha accumulation over time.
- GPU inventory: H100/H200/B200/B300 availability, utilization, supplier onboarding.
- Confidential-compute adoption: Intel TDX, NVIDIA confidential computing, remote-attestation updates.
- Customer logos/contracts and repeat usage.
- Targon Tower hardware sales and earning-mode economics.

## Docs/blogs
- Targon website / releases: https://targon.com/releases/intel-whitepaper and https://releases.targon.com/
- TargonOS miner docs: https://docs.targon.com/providers/miner/installing-targonos
- Canonical SN4 source/docs: https://github.com/manifold-inc/targon
- Inventory: https://targon.com/inventory

## Risks
- Revenue and ARR claims should be treated as high-signal only if backed by dashboards, contracts, or third-party verification.
- Subnet value is alpha/pool context, not a clean corporate equity-style market cap.
- Confidential-compute positioning is differentiated but may be slower to monetize than simple inference APIs.

## Catalysts

| Catalyst | Status | Evidence / source | Timing | Direct impact | Second-order consequences | What to watch next |
|---|---|---|---|---|---|---|
| TargonOS `0.1.0` miner operating-system launch | Confirmed / completed live release | Event source: https://x.com/opentensor/status/2077139332859904391. Official installation docs and signed artifacts: https://docs.targon.com/providers/miner/installing-targonos and https://releases.targon.com/0.1.0/. Canonical source/docs: https://github.com/manifold-inc/targon | Event 2026-07-16; release artifacts timestamped 2026-07-17 | Ships a purpose-built signed OS with ISO/netboot installation, hardware validation, encrypted storage and boot-time network attestation; replaces manual host-OS/TVM provisioning for SN4 miners. | Lower-friction reproducible provisioning can expand verified supply and reduce node drift, but the destructive installer, strict Intel TDX/TPM/GPU requirements and centralized pinned release/validation endpoints create operational trust dependencies. | Verify minisign trust-root documentation, independent install/reproducibility, security audit, node adoption, update/rollback path, uptime, paid utilization and whether added supply changes emissions or revenue-backed buybacks. |
| Kraken listings-roadmap entry for Targon / SN4 | Confirmed / listing roadmap | Kraken listings page includes Targon and SN4 on the roadmap: https://www.kraken.com/listings#roadmap | Roadmap as of 2026-06-29; trading timing unknown | Would add centralized exchange access for SN4 alpha exposure. | Easier access could broaden Bittensor subnet-token liquidity, improve price discovery, and attract non-Bittensor-native buyers to Targon’s revenue/buyback thesis. | Watch Kraken trading-enable announcement, supported jurisdictions/pairs, deposits/withdrawals, liquidity, and whether Targon confirms details. |
| MinosVM 2.0 live on Targon | Confirmed / product integration | Official Targon post says MinosVM 2.0 is live on targon.com and uses secure confidential compute for native-agent/genomics infrastructure: https://x.com/TargonCompute/status/2071644073241264403 | Live as of 2026-06-29 | Demonstrates customer/application usage of Targon confidential compute. | More real workloads can support SN4 buyback/revenue claims and differentiate Targon from generic GPU rental markets. | Watch Minos usage, paid workload evidence, recurring revenue, and whether similar agent/genomics deployments follow. |
| Targon Rentals and Serverless compute products live | Confirmed | Official docs describe Rentals as persistent GPU/CPU containers with SSH and Serverless as autoscaling apps that scale from zero: https://docs.targon.com/guides/rentals and https://docs.targon.com/guides/serverless | Live | Converts SN4 from pure miner incentives into user-facing confidential GPU cloud products. | Real customer workloads can justify emissions and improve subnet quality if demand routes back to miners. | Watch utilization, paid customer announcements, uptime, pricing, and whether user demand affects miner emissions. |
| Public inventory API exposes available GPU resources and pricing | Confirmed | Targon API docs show unauthenticated inventory endpoint with specs, hourly cost, and availability: https://docs.targon.com/api/inventory | Live | Creates a measurable demand/supply surface for rentals and serverless capacity. | Transparent inventory can make SN4 easier to diligence versus opaque DePIN compute claims. | Poll inventory for H100/H200/B200 availability, utilization changes, price compression, and new resource tiers. |
| Miner emissions tied to public-demand auctions, unused emissions burned | Confirmed | Targon miner docs say emissions are split proportionally to public demand via auctions API and unallocated emissions are burned: https://docs.targon.com/providers/miner/ | Live | Aligns miner rewards with customer demand instead of purely synthetic benchmarks. | Burning unused emissions can reduce waste but may pressure miners if demand lags supply. | Watch auctions API, emitted vs burned share, max bids, minimum cluster sizes, and miner churn. |
| Confidential Blackwell GPU support path | Confirmed / docs-backed | Targon docs include Intel TDX plus NVIDIA B200 or RTX PRO 6000 Blackwell setup requirements: https://docs.targon.com/providers/miner/intel-blackwell-gpus | Live docs; hardware rollout dependent | Adds high-end confidential-compute GPU capacity to the supported miner set. | Blackwell support can differentiate Targon from generic GPU marketplaces if attestation and supply are credible. | Watch real B200/RTX6000B inventory, attestation flow, pricing, and customer workloads using confidential GPUs. |

## Open questions
- Can the `2,000 TAO/month` buyback proxy be fully reconstructed from wallet flows?
- What is paid utilization by GPU class and how much is repeat customer usage?
- Does Targon expose a public revenue, orders, or utilization API?
- How many miners have installed TargonOS `0.1.0`, can its signed image/build be independently audited or reproduced, how reliable are updates/rollback and the pinned release/validation services, and does adoption change paid utilization or SN4 economics?

## Watch triggers
- Verified customer revenue materially increasing or declining.
- Revenue-return/buyback policy changes or wallet-flow evidence.
- High-end GPU inventory changes, especially 8x H200/B200/B300 pods.
- SN4 emissions drop or major validator/staker exit.
- Confidential-compute vulnerability, attestation failure, or customer-data incident.
