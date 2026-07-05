---
status: active
watchlist: crypto-projects
last_updated: 2026-07-05T00:22:42Z
---

# POD / Dolphin POD

## Overview
- **Corrected identity:** Dolphin / dphnAI / `$POD`, a Base ERC-20 tied to Dolphin's distributed GPU / data-generation network. This replaces the older Pacific Pods ambiguity in this dossier.
- **Token:** `POD` on Base, candidate/canonical contract `0xeD664536023d8E4b1640C394777D34aBAFF1dF8F`.
- **Current market data as of 2026-07-05:** Base Blockscout shows price `$0.4531`, circulating market cap `$20.4M`, 24h volume `$1.6M`, holders `3.2K`, total supply `500.0M POD`, implying about `$226.5M` FDV at that price.
- **Product focus:** distributed GPU network for AI data generation / inference-like workloads; economics are reported as user price minus node payout flowing to POD buybacks, but public revenue is not yet cleanly exposed.

## Latest scan notes
- 2026-07-05 — Refreshed POD direct metrics via Base Blockscout: price `$0.4531`, circulating market cap `$20.4M`, 24h volume `$1.6M`, holders `3.2K`, total supply `500.0M POD`, and FDV `$226.5M`. Revenue/utilization and buyback-wallet adapters remain unresolved. Source: https://base.blockscout.com/token/0xeD664536023d8E4b1640C394777D34aBAFF1dF8F
- 2026-06-22 — Corrected this watchlist entry from the older Pacific Pods/Pacifica ambiguity to Dolphin / dphnAI `$POD` on Base. Blockscout token data showed ~$15.0M circulating market cap, ~$168M FDV, ~$893k 24h volume, and 2,894 holders; revenue was still unavailable from a clean public API. Source: https://base.blockscout.com/token/0xeD664536023d8E4b1640C394777D34aBAFF1dF8F
- 2026-06-22 — Neo-cloud comparison added POD's investability frame: large claimed GPU fleet / low circulating market cap can be asymmetric, but the key missing proof is paid revenue and live utilization rather than raw cumulative GPU count.

## Thesis
- POD is a high-beta decentralized AI compute/data-generation option: if Dolphin proves real paid demand and automatic POD buybacks, the `$20.4M` circulating market cap screens low versus the scale of claimed GPU resources.
- On FDV, the bar is much higher: at `$226.5M` FDV, POD needs roughly `$22.7M` annualized revenue to screen at 10x sales, or about `$62.1k/day`.
- The core underwriting variable is not whether GPUs exist; it is whether live paid workloads create transparent, durable buybacks.

## Investment numbers / neo-cloud comps
| Metric | Current read | Source / caveat |
|---|---:|---|
| Price | `$0.4531` | Base Blockscout, as of 2026-07-05 |
| Circulating market cap | `$20.4M` | Base Blockscout, as of 2026-07-05; circulating supply not separately returned |
| FDV | `$226.5M` | 500M total supply × Blockscout price, as of 2026-07-05 |
| Revenue | Not available | No clean public revenue API found as of 2026-07-05 |
| Circ revenue needed at 10x sales | `$2.0M/yr`, `$5.6k/day` | Implied hurdle, as of 2026-07-05 |
| FDV revenue needed at 10x sales | `$22.7M/yr`, `$62.1k/day` | Implied hurdle, as of 2026-07-05 |

## Team
- Dolphin / dphnAI public team details still need verification from official docs or team accounts.

## Investors
- No high-confidence direct investor/backer list verified in this scan.

## Twitter/X accounts
- `@dphnAI` / Dolphin-related official account to monitor; verify exact current handle from official website/social links.

## KOLs
- Track only source-backed Dolphin/POD analysts that cite the dashboard, buyback wallet, or token contract; ignore generic POD ticker collisions.

## Official links
- Token / explorer: https://base.blockscout.com/token/0xeD664536023d8E4b1640C394777D34aBAFF1dF8F
- Data generation dashboard: https://datagen.dphn.ai

## Onchain/data resources
- Base token holders, transfer activity, liquidity pools, and buyback wallet if published.
- Dolphin datagen dashboard: live GPUs, tokens generated, completed vs active jobs, node payouts, user pricing, and buyback transactions.
- Exact revenue / spread calculation: user spend minus node payouts.

## Docs/blogs
- Official Dolphin/dphnAI docs or blog still need to be pinned once verified.

## Risks
- Prior dossier identity was ambiguous; continue avoiding unrelated Pacific Pods/Pacifica `$POD` sources unless explicitly connected by official Dolphin sources.
- Revenue is not currently cleanly public; claimed GPU count alone does not prove economic demand.
- FDV is much larger than circulating market cap, so unlock/supply schedule matters.

## Catalysts

| Catalyst | Status | Evidence / source | Timing | Direct impact | Second-order consequences | What to watch next |
|---|---|---|---|---|---|---|
| POD / Dolphin: public inference/subscription revenue → POD buybacks | Tentative / docs-backed | Official Dolphin tokenomics docs say subscriptions are “available soon,” API credits route requests to nodes, users can pay in POD/ETH/BTC/USDC/XMR/ZEC, and “100% of revenue buys back POD”: https://dphn.ai/docs/tokenomics | No fixed date; docs say subscriptions “soon” | Converts usage into direct token demand; makes paid inference/API traction the key KPI. | If revenue exceeds node emissions, POD can shift from emission-sell-pressure to net buy pressure. | Watch for public API/subscription launch, revenue dashboard, buyback wallet, and onchain buyback cadence. |
| POD / Dolphin: datagen dashboard / GPU-capacity KPIs | Confirmed / live KPI surface | Official datagen dashboard exposes progress metrics, GPU capacity, latest generations, and contribution leaderboard: https://datagen.dphn.ai | Live | Makes network usage / supply observable instead of narrative-only. | Rising jobs/tokens/GPU capacity can validate real demand before clean revenue disclosure. | Track active GPUs, vRAM mix, completed generations, leaderboard concentration, and any paid-job metric. |
| POD / Dolphin: node onboarding / high-vRAM worker expansion | Confirmed / capacity catalyst | Node quick-start links v2 app, wallet auth/API keys, worker script, and 60GB-vRAM hardware guidance: https://dphn.ai/docs/running-a-node | Live / ongoing onboarding | More qualified nodes increase inference/datagen capacity. | Capacity growth without demand worsens emissions; capacity plus usage supports buyback thesis. | Watch node count, required GPU specs, payout changes, uptime/verification rules, and V2 app updates. |

## Open questions
- What is the official Dolphin/dphnAI website and canonical X handle for token disclosures?
- What is current live GPU count, paid utilization, user spend, node payout, and POD buyback amount?
- What is the circulating supply methodology behind Blockscout's circulating market cap?
- Are buybacks public onchain and attributable to protocol revenue?

## Watch triggers
- Public revenue dashboard or API launch.
- Buyback wallet publication and sustained buyback growth.
- Material increase in live GPUs, high-end GPU mix, or paid jobs.
- Token unlock/supply disclosures or CEX/perp listings.
