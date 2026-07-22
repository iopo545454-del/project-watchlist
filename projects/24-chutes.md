---
status: active
watchlist: crypto-projects
last_updated: 2026-07-22T05:51:11Z
---

# Chutes — Bittensor Subnet 64

## Overview
- Bittensor Subnet 64 / SN64.
- Decentralized serverless AI compute and managed inference platform.
- Best direct watchlist comp for open-model inference demand because it already serves large open models, including GLM-5.2 in recent scans.
- Alpha token: SN64 within Bittensor dTAO economy.

## Latest scan notes

- 2026-07-22 — Dedicated verification closed the July 15 revenue-quality / TEE / Parallax check as **confirmed with bounds** using Chutes' public APIs and source repositories. For the seven complete days through July 21, `/daily_revenue_summary` reported `$96,179.17` total revenue—`79.85%` pay-as-you-go, `17.58%` new subscriptions, `2.58%` private instances and `0%` in the explicit `sponsored_inference` field—while `/invocations/stats/llm` reported `331.007B` input+output tokens; the directly reproducible ratio is about **`$290.6K` revenue per trillion tokens**. The 30-day ratio was about **`$275.8K/T`**. These support the published `$282K` 90-day order of magnitude but do not reproduce the July 20 `$340K` point, so chart window/denominator differences remain. The API exposes customer prices and miner/audit data but no provider expense ledger or retained gross margin. dstack's `private-ai-gateway` repository contains a Chutes verifier, provider reference and live E2E/rate probes, confirming the integration path, while no ChronoSeek-attributed request/volume series is public. The Parallax draft remains a project-authored point-estimate report with no public code/checkpoint, replicated equivalence test or measured wall-clock speedup, and does not independently substantiate the social graphic's `<$10/hour` / ~6-second-step claim. Close the composite check; reopen margin, partner volume or training economics only on a direct ledger, attributed metric, code/checkpoint or independent replication. Sources: https://api.chutes.ai/daily_revenue_summary, https://api.chutes.ai/invocations/stats/llm?start_date=2026-06-22&end_date=2026-07-21, https://api.chutes.ai/pricing, https://github.com/chutesai/chutes-api, https://github.com/Dstack-TEE/private-ai-gateway and https://storage.googleapis.com/chutes-random/parallax-draft-tech-report.pdf
- 2026-07-21 — Chutes' week-ten recap reported a record **`$340K` revenue per trillion LLM tokens** on July 20 versus a **`$282K` 90-day average** (about 20.6% higher), while the live DefiLlama adapter showed **`$15.7K` 24h / `$92.3K` 7d / `$345.6K` 30d revenue** and `$42.1M` TVL at the 19:49 UTC snapshot. The same recap says dstack's private-ai-gateway now routes to Chutes after GPU TEE attestation and that ChronoSeek uses new private-subnet support; reproducible confidential-VM measurements and registry access remain next-release roadmap items. This is a useful revenue-quality/integration signal, not a tokenomics step change: organic-versus-sponsored mix, gross margin, partner-attributed volume and SN64 routing remain undisclosed. Sources: https://x.com/chutes_ai/status/2079637219049189642 and https://api.llama.fi/summary/fees/chutes?dataType=dailyRevenue
- 2026-07-20 — Chutes published concrete Parallax pre-training details for a **20B sparse MoE** run on fragmented hardware: eight single-L40S VMs across two continents plus remote RTX 4090 workers, with the social post also citing a 5090, roughly **6 seconds/step** and **under `$10/hour`**. The linked 36-page draft report is more useful—and more cautious—than the graphic: it reports an eight-composer L40S/RTX 6000 Ada run with remote RTX 4090 workers reaching validation loss `3.2521` at `50k` baseline-equivalent steps and best exported median `3.2104`; its abstract explicitly says the point estimates are not replicated equivalence tests and it does **not** report measured wall-clock speedups. The report provides no public code/checkpoint, and the `<$10/hour` / 5090 / two-continent details are social-graphic claims rather than tables in the draft. This advances Parallax from a small recurrent-model milestone to a documented larger MoE workload, but paid customer jobs, reproducibility, training-market rollout and SN64 economics remain open. Sources: https://x.com/chutes_ai/status/2079197210651001326, https://x.com/chutes_ai/status/2079222447644225689 and https://storage.googleapis.com/chutes-random/parallax-draft-tech-report.pdf

- 2026-07-10 — Official Chutes said it is part of **Internet Court**, an open skill for agent-to-agent contracts, negotiation, payments, escrow, and dispute resolution, with Chutes providing decentralized inference for the agentic workflow. This is a live integration/product-surface signal for SN64 inference demand, but not yet a revenue/liquidity event until usage, paid volume, and fee attribution show up in Chutes/DefiLlama/Taostats data. Source: https://x.com/chutes_ai/status/2075581795232321649

- 2026-07-08 — Official Chutes announced **Parallax** achieved fully non-blocking decentralized training on a recurrent model within 0.6% of centralized quality and linked a technical write-up at https://chutes.ai/news/non-blocking-recurrent-training. This is a meaningful Parallax technical milestone because it claims decentralized training without sync blocking or meaningful quality loss on a hard recurrent-model test case; it is not yet a revenue/liquidity event until training jobs, miner requirements, incentives, customer demand, and SN64 economics are disclosed. Source: https://x.com/i/status/2074856074260128213

- 2026-07-05 — Refreshed Chutes direct metrics via DefiLlama: revenue `$10.7K` 24h / `$69.3K` 7d / `$359.8K` 30d, annualized 30d revenue about `$4.38M`, and DefiLlama TVL `$43.6M`. Taostats SN64 metrics remain keyed/manual in the collector. Source: https://api.llama.fi/summary/fees/chutes?dataType=dailyRevenue
- 2026-06-29 — Official Chutes said $SN64 is coming to Kraken and linked Kraken’s listings roadmap; this is a major liquidity/access catalyst for the SN64 subnet token pending actual trading enablement. Source: https://x.com/chutes_ai/status/2071662544574382437 and https://www.kraken.com/listings#roadmap
- 2026-06-26 — Official Chutes highlighted confidential compute via TEEs for its OpenAI-compatible API, saying GPU operators cannot read prompts/outputs and listing current high-context/open-model offerings such as GLM-5.2, Kimi K2.6, Gemma 4, Qwen3.6 and MiniMax M2.5 with example pricing. This reinforces the privacy + model-catalog moat, but needs follow-up on real usage, routing volume, and whether TEE-enabled inference earns higher-quality revenue. Source: https://x.com/chutes_ai/status/2070567809713606938
- 2026-06-25 — Official Chutes teased that pointing idle consumer/gaming GPU compute at training is part of the Parallax roadmap, framing millions of idle gaming machines as a future distributed-training supply base. This is a roadmap/catalyst signal rather than a live revenue item; verification requires Parallax docs, miner requirements, incentives, and whether training jobs produce paid demand. Source: https://x.com/chutes_ai/status/2070145081185534115
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
| Alpha market cap / subnet value | ~$77.8M | Stale — manual refresh needed; Taostats conversion snapshot from 2026-06-22 |
| Liquidity / pool value | ~$85.8M | Stale — manual refresh needed; Taostats conversion snapshot from 2026-06-22 |
| Revenue 24h | `$15.7K` | DefiLlama Chutes revenue, as of 2026-07-21 |
| Revenue 7d | `$92.3K` | DefiLlama Chutes revenue, as of 2026-07-21 |
| Revenue 30d | `$345.6K` | DefiLlama Chutes revenue, as of 2026-07-21 |
| Annualized 30d revenue | `$4.15M` | 30d run-rate, as of 2026-07-21 |
| Current value / revenue | stale — manual refresh needed | Subnet-value snapshot is too old for current multiple math |
| Revenue needed at 10x | stale — manual refresh needed | Depends on the 2026-06-22 subnet-value snapshot |
| Revenue needed at 20x | stale — manual refresh needed | Depends on the 2026-06-22 subnet-value snapshot |

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

## Direct Data / KPI Methodology

### KPI questions

| KPI | Why it matters | Best source | Programmatic status | Notes / limitations |
|---|---|---|---|---|
| Revenue and revenue per trillion tokens | Tests paid inference demand and unit economics | Chutes public revenue + LLM invocation-stat APIs, cross-checked with DefiLlama | tested_ok / definition caveat | Direct 7d and 30d ratios are reproducible, but the live API did not reproduce the chart's `$340K` July 20 point; preserve source window/denominator caveats. |
| TVL / supplier capital | Measures capital committed to SN64 | DefiLlama protocol adapter | tested_ok | TVL is not GPU utilization or gross margin. |
| Revenue mix, gross margin and provider payouts | Distinguishes valuable demand from subsidized throughput | Chutes `daily_revenue_summary`, pricing, miner/audit data and any future expense ledger | partial | Revenue mix is public and the explicit sponsored field was zero over the checked 7d/30d windows; provider expenses and retained gross margin are not disclosed. |
| SN64 alpha value, liquidity and emissions | Connects usage to token market structure | Taostats/API or chain data | partial | Public page is useful but current machine-readable collector access remains unresolved. |

### Fetch tests

| Source | Endpoint / method | Status | What it returns | Next step |
|---|---|---|---|---|
| DefiLlama revenue | `https://api.llama.fi/summary/fees/chutes?dataType=dailyRevenue` | tested_ok | 24h/7d/30d/all-time revenue series | Compare revenue-per-token claims with independently collected throughput. |
| Chutes revenue mix | `https://api.chutes.ai/daily_revenue_summary` | tested_ok | Daily subscription, paygo, private-instance, sponsored-inference and total revenue | Add collector coverage if the endpoint remains stable; alert only on material mix/margin changes. |
| Chutes LLM throughput | `https://api.chutes.ai/invocations/stats/llm` | tested_ok | Per-model/date requests, input/output tokens, TPS and TTFT | Recompute revenue-per-trillion with explicit windows; distinguish public/TEE/private routing where possible. |
| Chutes pricing | `https://api.chutes.ai/pricing` | tested_ok | Compute-unit and GPU price estimates | Customer/list prices are not provider expense or gross margin. |
| DefiLlama TVL | `https://api.llama.fi/protocol/chutes` | tested_ok | Current TVL and chain history | Treat as supplier-capital context, not utilization. |
| Taostats SN64 | `https://taostats.io/subnets/64` | partial | Alpha/liquidity/emission dashboard | Identify a stable public endpoint before automating market-structure history. |

## Catalysts

| Catalyst | Status | Evidence / source | Timing | Direct impact | Second-order consequences | What to watch next |
|---|---|---|---|---|---|---|
| Parallax decentralized training milestones | Confirmed project-authored technical run / economics verification closed stale | Recurrent-model result: https://x.com/i/status/2074856074260128213 and https://chutes.ai/news/non-blocking-recurrent-training. Larger 20B sparse-MoE run and draft report: https://x.com/chutes_ai/status/2079197210651001326 and https://storage.googleapis.com/chutes-random/parallax-draft-tech-report.pdf | Technical runs reported July 2026; production market timing unknown | Documents a 20B workload across non-colocated composers/workers. | No public code/checkpoint, replicated equivalence test, measured wall-clock speedup or paid customer ledger supports underwriting the `<$10/hour` / ~6-second social claim. | Closed as a recurring verification item. Reopen only for public code/checkpoint, independent replication, named paid job or training-revenue line. |
| Kraken listings-roadmap entry for Chutes / SN64 | Confirmed / listing roadmap | Official Chutes says $SN64 is coming to Kraken and links Kraken’s listings roadmap: https://x.com/chutes_ai/status/2071662544574382437 and https://www.kraken.com/listings#roadmap | Roadmap as of 2026-06-29; trading timing unknown | Adds a major centralized exchange path for SN64 alpha exposure. | Better access/liquidity can re-rate the subnet against revenue KPIs and draw broader attention to Bittensor subnet tokens. | Watch Kraken trading-enable date, pairs, deposit/withdrawal support, jurisdiction limits, order-book depth, and whether revenue multiples expand. |
| Parallax distributed training using fragmented gaming/datacenter GPUs | Confirmed technical run / paid rollout unverified; economics follow-up closed stale | Roadmap: https://x.com/chutes_ai/status/2070145081185534115. July 20 run details cite eight single-L40S VMs, remote 4090s, one 5090, two continents, ~6 seconds/step and `<$10/hour`: https://x.com/chutes_ai/status/2079197210651001326. Draft report: https://storage.googleapis.com/chutes-random/parallax-draft-tech-report.pdf | Technical run documented; permissionless/paid market timing unknown | Demonstrates a heterogeneous, non-colocated 20B MoE training setup instead of only promising future gaming-GPU support. | The report does not reproduce the social cost/step claims and no customer/reward loop is shown. | Do not carry as a recurring check. Reopen only for code/checkpoint, independent replication, paid jobs, reward parameters or a training-revenue line. |
| Chutes revenue visibility on DefiLlama | Confirmed / live KPI | DefiLlama Chutes revenue API and Taostats SN64 page: https://api.llama.fi/summary/fees/chutes?dataType=dailyRevenue and https://taostats.io/subnets/64 | Live daily revenue | Gives a public revenue series for underwriting SN64 against subnet value. | Makes Chutes one of the cleaner Bittensor subnets to value on usage rather than emissions alone. | Watch 30d revenue trend, revenue quality, paid vs subsidized traffic, and SN64 market cap/liquidity. |
| GLM-5.2 hosted with TEE and published pricing | Confirmed / completed live product | Official Chutes post says GLM-5.2 is live/run-now on Chutes with TEE and published pricing: https://x.com/chutes_ai/status/2067612094178963874 | Completed / live as of June 2026 | Adds a frontier open-source coding/agent model to Chutes’ inference catalog with explicit per-token pricing. | More high-demand open models can increase paid inference revenue and router integrations. | Watch GLM usage, latency, uptime, pricing changes, model removals, and OpenRouter or partner routing volume. |
| TEE plus GraVal GPU verification and confidential API positioning | Confirmed / technical moat | Official Chutes posts: https://x.com/chutes_ai/status/2047314719707422754 and https://x.com/chutes_ai/status/2070567809713606938 | Live / rolling infrastructure upgrade | Improves trust that miners provide claimed hardware and says TEE-backed serving keeps prompts/outputs private from GPU operators while supporting OpenAI-compatible access to current open models. | Security and verification can justify enterprise or privacy-sensitive inference demand versus cheaper centralized APIs, and a broader model catalog can route more paid traffic if UX/pricing hold. | Watch audits, Blackwell coverage, slashing/traffic-routing stats, model-catalog churn, TEE adoption by customers, and any TEE or miner-cheating incidents. |
| Revenue-quality pruning and pay-as-you-go growth | Confirmed / operating update | Official Chutes post: https://x.com/chutes_ai/status/2035102851479810097 | March 2026 operating update | Shows willingness to cut unprofitable/free-tier traffic and optimize revenue per GPU/token. | Supports a higher-quality revenue multiple if growth comes from paid demand rather than subsidized volume. | Watch revenue per token, revenue per GPU, gross margin, fleet size, and daily revenue after pruning. |

## Open questions
- The public 7d mix through 2026-07-21 was `79.85%` paygo, `17.58%` subscriptions, `2.58%` private instances and `0%` in the explicit sponsored field. What hidden discounts/free quotas or incentive costs sit outside that revenue table?
- What is Chutes' gross margin after GPU/provider payments? Public customer pricing, miner scores and audits do not expose provider expense or retained margin.
- Which integrations route meaningful recurring volume to Chutes? dstack's integration path is source-confirmed, but no dstack/ChronoSeek-attributed volume is public.
- How stable is model quality/latency versus centralized inference providers?
- Parallax economics were closed stale for lack of code/checkpoint, independent replication and a paid-job ledger. Reopen only when one of those artifacts appears.

## Watch triggers
- 30d revenue moving above ~$1M/month or dropping materially.
- GLM-5.2 or other frontier open-model deployments gaining/removing support.
- New router/inference integrations, enterprise customers, or API pricing changes.
- SN64 emissions/revenue/buyback policy changes.
