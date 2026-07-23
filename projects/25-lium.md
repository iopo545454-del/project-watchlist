---
status: active
watchlist: crypto-projects
last_updated: 2026-07-23T13:35:31Z
---

# Lium — Bittensor Subnet 51

## Overview
- Bittensor Subnet 51 / SN51.
- Decentralized GPU marketplace / AI compute network.
- Current positioning is closer to a RunPod/Vast-style GPU rental marketplace than a fully managed inference API.
- Alpha token: SN51 within Bittensor dTAO economy.

## Latest scan notes

- 2026-07-23 — Lium merged a **production validator-capacity fix** after reproducing that standard UFW default-deny hosts could report `0/N` ports in the batch verifier and then cap placement at only `10` fallback-verified ports. PR #1159 adds a semi-batch Docker-published tier; staging on a 200-port UFW executor improved `verified_ports` from `10` to `50` and wall time from `55.2s` to `24.4s`, with 30 targeted tests passing. This removes an under-placement bottleneck but does not quantify affected production nodes, incremental paid rentals or revenue. The live utilization API later read `659 / 974` GPUs rented (`67.66%`), up `1.34` percentage points from the prior scan's `638 / 962`; that movement alone is below materiality. Sources: https://github.com/Datura-ai/lium-io/pull/1159 and https://lium.io/api/executors/stats
- 2026-07-21 — Dedicated verification closed the July 15 Kraken/utilization/economics check as **confirmed with bounds**. Kraken's official blog says SN51 funding/deposits and trading went live July 9, and the public `SN51/USD` pair was online; at the check it had only `64.24039 SN51` / about `$781` of current-session volume and a `0.49%` best spread, so market access is real but spot liquidity was thin. Lium's public API exposed `603 / 957` GPUs rented (`63.01%`), including A100 at `97.96%`, B200 at `51.02%`, B300 at `25.0%` and RTX PRO 6000 Blackwell Server at `74.75%`. Its validator-revenue endpoint returned monthly values of `367,464.20` for May, `284,191.33` for June and `384,158.28` for July-to-date; official docs make USD interpretation plausible because renter USD payments are split `95%` to providers / `5%` to Lium and paid in alpha, but the endpoint does not explicitly annotate units or schema. No new post-listing buyback/burn receipt was found after the June 22 `2,500 TAO` event, and a public Kraken withdrawal test was not possible. Sources: https://blog.kraken.com/product/asset-listings/sn51-is-available-for-trading, https://api.kraken.com/0/public/AssetPairs?pair=SN51USD, https://api.kraken.com/0/public/Ticker?pair=SN51USD, https://lium.io/api/executors/stats, https://lium.io/api/billing/revenue-for-validators and https://docs.lium.io/providers/rewards/rental-fees.md
- 2026-07-10 — Kraken listed SN51 for trading and official Lium amplified the listing after the earlier Kraken roadmap entry; this completes the CEX-access catalyst and moves the watch to live pairs/liquidity/deposit-withdrawal quality plus whether broader access changes buyback/burn or GPU-credit demand. Sources: https://x.com/krakenlistings/status/2075221836749738365 and https://x.com/lium_io/status/2075365366134456625
- 2026-06-29 — Kraken’s public listings page includes Lium / SN51 on its roadmap with other Bittensor subnet alpha tokens; no matching official Lium X announcement was found in-window, so track as exchange-roadmap evidence pending trading enablement and project confirmation. Source: https://www.kraken.com/listings#roadmap

- 2026-06-23 — Official Lium X said it completed a buyback and burn of `2500 TAO` into Subnet 51, with funds sourced from GPU credit-purchase revenue. This materially upgrades the burn proxy from a community/analytics estimate to an official revenue-funded buyback datapoint; next check is wallet/dashboard confirmation and whether this cadence repeats. Source: https://x.com/lium_io/status/2069199663530471602
- 2026-06-22 — Added Lium to the watchlist because it was missing from the neo-cloud basket. Taostats snapshot put SN51 alpha market cap around `187,071 TAO` / `~$42.9M` and liquidity around `215,771 TAO` / `~$49.5M` using TAO around `$229`. Source: https://taostats.io/subnets/51
- 2026-06-22 — Revenue is not cleanly exposed through a public official API. Best found proxy was a third-party/community-cited `$530k` verified external revenue over 90 days, about `$2.15M annualized`; separate burn/buyback proxy of about `50 TAO/day` implies about `$4.17M annualized` at TAO around `$228`. Treat both as proxies pending dashboard/API verification. Source: https://taoflute.com and community/analytics posts tracked via X.
- 2026-06-22 — Investment math: at `$42.9M` subnet value, Lium screens around `20x` the external-revenue proxy or `10.3x` the burn proxy. If the burn proxy is durable, 5x growth at 10x sales/burns implies about `$208M` value / `~4.9x`.

## Thesis
- Lium is the smaller GPU-marketplace beta in the decentralized neo-cloud basket: lower value than Chutes/Targon, with official APIs now exposing high-end GPU utilization and validator-attributed rental revenue.
- The bull case is that Lium becomes a liquid Bittensor-native GPU spot market with real external customers and sustained alpha burns.
- The underwriting hinges on verifying whether external revenue and burn proxies are real, recurring, and net of emissions/incentives.

## Investment numbers / neo-cloud comps
| Metric | Current read | Source / caveat |
|---|---:|---|
| Subnet | SN51 | Bittensor dTAO alpha |
| Alpha market cap / subnet value | ~$42.9M — stale, manual refresh needed | Taostats conversion as of 2026-06-22; more than 14 days old |
| Liquidity / pool value | ~$49.5M — stale, manual refresh needed | Taostats conversion as of 2026-06-22; more than 14 days old |
| Official validator-attributed rental revenue | `$367,464.20` May; `$284,191.33` June; `$384,158.28` July-to-date | Lium public API as of 2026-07-21; docs define renter USD payments and a `95%` provider / `5%` Lium split, but the endpoint has no explicit response schema |
| Live GPU utilization | `659 / 974` rented (`67.66%`) | Lium public `/api/executors/stats` as of 2026-07-23; point-in-time and changed from `638 / 962` (`66.32%`) at the prior broad scan |
| Kraken SN51/USD current-session volume | `64.24039 SN51` / about `$781`; `0.49%` best spread | Kraken public ticker/order-book API as of 2026-07-21; live market-access snapshot, not durable liquidity |
| Verified burn event | `2,500 TAO` | Official Lium June 22 post; no later post-listing burn receipt found through 2026-07-21 |

## Team
- Lium / `@lium_io` official team account; verify core contributors from official docs and posts.

## Investors
- No high-confidence direct investor/backer list verified in this scan.

## Twitter/X accounts
- `@lium_io`
- Bittensor subnet analysts monitoring SN51 GPU inventory, revenue, burns, and emissions.

## KOLs
- Prioritize accounts that cite Taoflute/dashboard data, burn wallets, or actual GPU availability.

## Official links
- Website: https://lium.io/ if still canonical; verify current official site from `@lium_io`.
- Docs: https://docs.lium.io/
- Kraken listing/funding notice: https://blog.kraken.com/product/asset-listings/sn51-is-available-for-trading
- X: https://x.com/lium_io
- Dashboard / analytics: https://taoflute.com
- Taostats: https://taostats.io/subnets/51

## Onchain/data resources
- Taostats SN51 alpha market cap, liquidity, emissions, price, and registration metrics.
- Lium public API: `https://lium.io/api/executors/stats` for GPU utilization by class and `https://lium.io/api/billing/revenue-for-validators` for monthly validator-attributed revenue.
- GPU inventory by class: B200, H200, H100, B300, RTX Pro 6000 Blackwell.
- Wallets/contracts used for burns or alpha accumulation.

## Docs/blogs
- Official documentation: https://docs.lium.io/
- Rental-fee methodology: https://docs.lium.io/providers/rewards/rental-fees.md

## Direct Data / KPI Methodology

### KPI questions

| KPI | Why it matters | Best source | Programmatic status | Notes / limitations |
|---|---|---|---|---|
| GPU inventory and utilization by class | Distinguishes real rental demand from idle supply | Lium `/api/executors/stats` | tested_ok | Public endpoint returned `659 / 974` rented as of 2026-07-23; it is a point-in-time snapshot and does not identify customer concentration, paid hours or how much capacity PR #1159 unblocked |
| Validator-attributed rental revenue | Measures renter-funded economic activity | Lium `/api/billing/revenue-for-validators` plus rental-fee docs | tested_ok / interpretation caveat | Endpoint returns monthly values by validator; docs say renter USD fees are split 95% provider / 5% Lium, but the API response has no unit/schema annotation and does not expose net platform revenue or burn attribution |
| SN51 CEX liquidity | Tests whether the Kraken listing provides usable access | Kraken public `AssetPairs`, `Ticker`, `Depth` and `OHLC` APIs | tested_ok | Pair is online, but the 2026-07-21 snapshot was thin; public APIs do not prove a successful user withdrawal |
| Revenue-funded buyback/burn | Connects paid GPU demand to SN51 token value | Official receipts plus Bittensor wallet/extrinsic mapping | partial | June 22 `2,500 TAO` event is official; no canonical wallet/extrinsic mapping or post-listing repeat was established |

### Fetch tests

| Source | Endpoint / method | Status | What it returns | Next step |
|---|---|---|---|---|
| Lium GPU stats | `https://lium.io/api/executors/stats` | tested_ok | Rented and total GPU counts by model | Add stable collector history and material utilization thresholds |
| Lium validator revenue | `https://lium.io/api/billing/revenue-for-validators` | tested_ok | Monthly validator-keyed revenue values | Confirm units/schema with Lium and separate gross renter payments, provider payout, platform fee and burn funding |
| Kraken SN51 market | `https://api.kraken.com/0/public/AssetPairs?pair=SN51USD` plus ticker/depth/OHLC | tested_ok | Pair status, volume, spread, depth and candles | Track durable liquidity and regional/funding incidents; do not infer withdrawals from the public market API |

## Risks
- Gross rental revenue is now API-visible, but net Lium economics and the revenue-to-burn wallet path remain under-verified.
- Point-in-time utilization can be concentrated by GPU class and does not reveal customer retention, paid hours or subsidies.
- Subnet alpha value is pool context, not normal equity-style valuation.

## Catalysts

| Catalyst | Status | Evidence / source | Timing | Direct impact | Second-order consequences | What to watch next |
|---|---|---|---|---|---|---|
| Kraken SN51 trading live | Confirmed / completed listing; liquidity thin at verification | Kraken listing/funding notice: https://blog.kraken.com/product/asset-listings/sn51-is-available-for-trading; public pair: https://api.kraken.com/0/public/AssetPairs?pair=SN51USD; official Lium follow-up: https://x.com/lium_io/status/2075365366134456625 | Live since 2026-07-09; verified 2026-07-21 | Adds centralized exchange access for SN51 alpha exposure; Kraken directs users to deposit through Funding. | Broader access can widen participation, but the verification snapshot showed only about `$781` current-session notional and a `0.49%` best spread. | Monitor durable volume/depth and funding incidents. A public withdrawal test was not possible; reopen only for a Kraken status/asset change or direct failed/successful withdrawal evidence. |
| SN51 revenue-funded buyback and burn of 2500 TAO | Confirmed / official tokenomics event | Official Lium post: https://x.com/lium_io/status/2069199663530471602 | 2026-06-22 | Directly links GPU credit purchases to SN51 buybacks and burns. | If recurring, SN51 gets a measurable value-accrual loop from compute demand rather than emissions alone. | Watch burn wallet, cadence, credit revenue, utilization, and whether burns continue in down markets. |
| Prior buybacks and owner-token burns | Confirmed / official cadence | Official Lium posts: https://x.com/lium_io/status/2051112124328374707 and https://x.com/lium_io/status/2049346952614007286 | April-May 2026 | Shows multiple burn events, including more than $150k buyback/burn and roughly $500k owner-controlled burn. | Establishes a tokenomics pattern investors can monitor, but needs dashboard/wallet verification. | Watch official burn receipts, owner allocation changes, SN51 supply, emissions to miners, and external-revenue reporting. |
| High-end GPU inventory and Blackwell availability | Confirmed / live API-backed utilization; validator placement fix merged | Official API: https://lium.io/api/executors/stats; validator-capacity fix: https://github.com/Datura-ai/lium-io/pull/1159; official July operating update: https://x.com/lium_io/status/2077877053496467804 | Utilization verified 2026-07-23; validator fix merged 2026-07-23 | Public data showed `659 / 974` GPUs rented (`67.66%`). PR #1159 removes a UFW-related port-verification path that could cap placement at 10 containers on affected executors. | Better placement can raise usable supply and paid capacity, but affected-node count, incremental rentals, concentration, retention and net margin remain unknown. | Add stable utilization/placement history, affected-node and incremental-rental counts, customer retention, failure rate and paid-hours context; reconcile revenue with provider payout and burns. |

## Open questions
- Lium now exposes monthly validator-attributed revenue and model-level utilization. Can the team document the endpoint's units/schema and reconcile gross renter payments, 95% provider payout, 5% platform fee, credits, refunds and net Lium revenue?
- What wallet(s)/extrinsics map GPU-credit revenue into the June 22 `2,500 TAO` buyback/burn, and does the cadence repeat after the Kraken listing?
- How concentrated and durable are the `659 / 974` rented GPUs by customer, paid hours and cohort, how many production executors were capacity-capped by the UFW verifier issue, and does PR #1159 create measurable incremental rentals/revenue without new failures?
- Does Lium plan managed inference or remain a raw GPU marketplace?

## Sources / Research Inputs

| Information source | Context about the source |
|---|---|
| https://lium.io/api/executors/stats | Official public GPU model inventory/utilization endpoint; tested 2026-07-21 |
| https://lium.io/api/billing/revenue-for-validators | Official public monthly validator-attributed revenue endpoint; tested 2026-07-21 |
| https://docs.lium.io/providers/rewards/rental-fees.md | Official renter-payment and 95% provider / 5% platform fee methodology |
| https://blog.kraken.com/product/asset-listings/sn51-is-available-for-trading | Official Kraken funding/deposit and trading-live notice |
| https://api.kraken.com/0/public/AssetPairs?pair=SN51USD | Official Kraken pair-status API; combine with ticker/depth/OHLC for liquidity checks |

## Watch triggers
- Verified external revenue or burn dashboard update.
- High-end GPU inventory growth or utilization inflection.
- New customer/integration announcement.
- Changes to SN51 emissions, burn policy, validator support, or alpha liquidity.
