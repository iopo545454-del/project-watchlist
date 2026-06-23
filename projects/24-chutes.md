---
status: active
watchlist: crypto-projects
last_updated: 2026-06-23T21:46:11Z
---

# Chutes — Bittensor Subnet 64

## Overview
- Bittensor Subnet 64 / SN64.
- Decentralized serverless AI compute and managed inference platform.
- Best direct watchlist comp for open-model inference demand because it already serves large open models, including GLM-5.2 in recent scans.
- Alpha token: SN64 within Bittensor dTAO economy.

## Latest scan notes
- 2026-06-22 — Added Chutes to the watchlist because it was missing from the neo-cloud basket despite being the cleanest direct inference-revenue comp. DefiLlama showed revenue of about `$11.1k` 24h, `$78.9k` 7d, `$407.2k` 30d, and `$2.74M` all-time. Source: https://api.llama.fi/summary/fees/chutes?dataType=dailyRevenue
- 2026-06-22 — Taostats snapshot put SN64 alpha market cap around `339,135 TAO` / `~$77.8M` and liquidity around `373,975 TAO` / `~$85.8M` using TAO around `$229`; this is subnet alpha/pool context, not normal token FDV. Source: https://taostats.io/subnets/64
- 2026-06-22 — Investment math: `$77.8M` subnet value versus `$4.95M` annualized 30d revenue is about `15.7x` revenue; 5x revenue growth at 10x sales implies about `$248M` value / `~3.2x`, while 10x growth at 15x implies about `$743M` / `~9.6x`.

## Thesis
- Chutes is the cleanest decentralized neo-cloud investment case because it combines direct inference demand, model-serving product-market fit, and public revenue data.
- It is closer to a decentralized OpenRouter/DeepInfra/Fireworks-style managed inference layer than a raw GPU rental marketplace.
- If open-source model usage compounds and routers need cheaper backend capacity, Chutes should be one of the first Bittensor subnets to show it in revenue.

## Investment numbers / neo-cloud comps
| Metric | Current read | Source / caveat |
|---|---:|---|
| Subnet | SN64 | Bittensor dTAO alpha |
| Alpha market cap / subnet value | ~$77.8M | Taostats, converted from TAO |
| Liquidity / pool value | ~$85.8M | Taostats, converted from TAO |
| Revenue 24h | ~$11.1k | DefiLlama Chutes revenue |
| Revenue 7d | ~$78.9k | DefiLlama Chutes revenue |
| Revenue 30d | ~$407.2k | DefiLlama Chutes revenue |
| Annualized 30d revenue | ~$4.95M | 30d run-rate |
| Current value / revenue | ~15.7x | Cleanest current comp in basket |
| Revenue needed at 10x | ~$7.8M/yr, ~$21.3k/day | Implied hurdle |
| Revenue needed at 20x | ~$3.9M/yr, ~$10.7k/day | Already near/above this on 30d run-rate |

## Team
- Chutes / `@chutes_ai` official team account; verify founder/core contributors from official docs and team posts.

## Investors
- No high-confidence direct investor/backer list verified in this scan.

## Twitter/X accounts
- `@chutes_ai`
- Bittensor ecosystem accounts and validators that track SN64 revenue, models, and emissions.

## KOLs
- Prioritize accounts citing DefiLlama revenue, Chutes dashboard data, model deployment screenshots, or Taostats metrics.

## Official links
- Website/app: https://chutes.ai/
- X: https://x.com/chutes_ai
- DefiLlama revenue: https://api.llama.fi/summary/fees/chutes?dataType=dailyRevenue
- Taostats: https://taostats.io/subnets/64

## Onchain/data resources
- DefiLlama Chutes revenue and fees.
- Taostats SN64 alpha market cap, emissions, liquidity, price, and registration metrics.
- Chutes model catalog, token throughput, API usage, latency/uptime, and model-specific deployments.
- GLM-5.2 / Qwen / DeepSeek / other open-model serving status.

## Docs/blogs
- Chutes website/app and official X posts.

## Risks
- Revenue quality and margin need monitoring; revenue can be boosted by sponsored inference or incentives.
- Managed inference is highly competitive with centralized providers and routers.
- Subnet alpha market cap is pool/alpha context, not normal equity-style valuation.

## Catalysts

| Catalyst | Status | Evidence / source | Timing | Direct impact | Second-order consequences | What to watch next |
|---|---|---|---|---|---|---|
| Chutes revenue visibility on DefiLlama | Confirmed / live KPI | DefiLlama Chutes revenue API and Taostats SN64 page: https://api.llama.fi/summary/fees/chutes?dataType=dailyRevenue and https://taostats.io/subnets/64 | Live daily revenue | Gives a public revenue series for underwriting SN64 against subnet value. | Makes Chutes one of the cleaner Bittensor subnets to value on usage rather than emissions alone. | Watch 30d revenue trend, revenue quality, paid vs subsidized traffic, and SN64 market cap/liquidity. |
| GLM-5.2 hosted with TEE and published pricing | Confirmed / completed live product | Official Chutes post says GLM-5.2 is live/run-now on Chutes with TEE and published pricing: https://x.com/chutes_ai/status/2067612094178963874 | Completed / live as of June 2026 | Adds a frontier open-source coding/agent model to Chutes’ inference catalog with explicit per-token pricing. | More high-demand open models can increase paid inference revenue and router integrations. | Watch GLM usage, latency, uptime, pricing changes, model removals, and OpenRouter or partner routing volume. |
| TEE plus GraVal GPU verification | Confirmed / technical moat | Official Chutes post: https://x.com/chutes_ai/status/2047314719707422754 | Live / rolling infrastructure upgrade | Improves trust that miners provide claimed hardware and that prompts/outputs stay private. | Security and verification can justify enterprise or privacy-sensitive inference demand versus cheaper centralized APIs. | Watch audits, Blackwell coverage, slashing/traffic-routing stats, and any TEE or miner-cheating incidents. |
| Revenue-quality pruning and pay-as-you-go growth | Confirmed / operating update | Official Chutes post: https://x.com/chutes_ai/status/2035102851479810097 | March 2026 operating update | Shows willingness to cut unprofitable/free-tier traffic and optimize revenue per GPU/token. | Supports a higher-quality revenue multiple if growth comes from paid demand rather than subsidized volume. | Watch revenue per token, revenue per GPU, gross margin, fleet size, and daily revenue after pruning. |

## Open questions
- What share of revenue is organic paid usage versus sponsored/incentivized inference?
- What is Chutes' gross margin after GPU/provider payments?
- Which integrations route meaningful recurring volume to Chutes?
- How stable is model quality/latency versus centralized inference providers?

## Watch triggers
- 30d revenue moving above ~$1M/month or dropping materially.
- GLM-5.2 or other frontier open-model deployments gaining/removing support.
- New router/inference integrations, enterprise customers, or API pricing changes.
- SN64 emissions/revenue/buyback policy changes.
