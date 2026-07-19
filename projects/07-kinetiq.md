---
status: active
watchlist: crypto-projects
last_updated: 2026-07-19T02:20:22Z
---

# Kinetiq

## Overview
**Identity**
- **Kinetiq** is a Hyperliquid-native liquid staking/infrastructure project.
- Core product: stake `$HYPE` and receive liquid-staked variants such as `kHYPE`.
- Broader ecosystem includes **Markets.xyz** and **Launch/kLaunch** style HIP-3 deployment/staking primitives.
- Token: `$KNTQ`.

**Official links**
- X: https://x.com/Kinetiq_xyz
- Foundation X: https://x.com/KinetiqFND
- Website: https://kinetiq.xyz/
- Blog example: https://kinetiq.xyz/blog/kip-3-launch-live
- Related app: https://x.com/Markets_xyz

**Team/key people**
- https://x.com/0xOmnia — most prominent public core contributor/voice.
- Broader team appears partly pseudonymous.
- Growth/community around Markets includes https://x.com/VikingoDigital_ in searched materials.

**Investors/backers**
- Reported $1.75M raise from Hyperliquid-native participants.
- Named backers include Maven11, Pier Two, Chorus One, IMC Trading, Infinite Field, Flowdesk, Susquehanna Crypto, plus ecosystem angels.
- Core contributors/investors reportedly have multi-year lockups; verify details via Foundation posts.

**KOL/community accounts**
- https://x.com/Kinetiq_xyz
- https://x.com/KinetiqFND
- https://x.com/Markets_xyz
- https://x.com/0xOmnia
- Hyperliquid ecosystem accounts/validators.

**Data/resources to monitor**
- Kinetiq app: staking TVL, kHYPE supply, validator allocation.
- Hyperliquid ecosystem dashboards for HYPE staking, CoreWriter/HIP-3 activity.
- KNTQ buyback dashboard: https://hl.eco/kinetiq
- Core-contributor-disclosed buyback wallet: https://hypurrscan.io/address/0xaa3b7392052d62928cc87701e3ca6fb6630bb6e2#txs
- sKNTQ reward-drip contract: https://hypurrscan.io/address/0x696238e0ca31c94e24ca4cbe7921754e172e4d0f#txs
- Markets.xyz volume/users/fees.
- Launch/kLaunch deployments and fee-sharing pools.
- `$KNTQ` token pages and onchain holder/lockup data.

**Alert triggers**
- Major changes in kHYPE/HYPE TVL or market share.
- New HIP-3 deployments via Launch.
- Fee accrual/token value-capture updates for `$KNTQ`.
- kPoints snapshot/distribution changes.
- Markets.xyz product launches, collateral migrations, or fee growth.
- Validator/security incidents or slashing-related disclosures.

**Notes/ambiguities**
- Kinetiq spans LST, perps-market app infrastructure, and launch/staking pools; monitor all three, not just kHYPE.



Target delivery channel for future alerts/recaps: `discord:1508537087992004778` with `@here`.

## Latest scan notes

- 2026-07-19 — Dedicated verification independently reproduced the old KNTQ buyback claim from Kinetiq's public backend and Hyperliquid data. `https://rpc.km.xyz/kinetiq/buyback-fills?interval=D` reports a complete cached history of 4,212 fills aggregated into 101 daily observations: through the July 1 core-contributor post, 85 daily rows total `2,107,173.17 KNTQ` and `$367,043.92` of purchase notional, only 0.56% above the stated “just over `$365K`.” The same feed reaches `2,629,990.48 KNTQ` / `$440,473.69` through July 17. Official docs route 100% of disposable Markets income, 100% of Kinetiq's Launch/validator share and 70% of KIP-2 revenue to buybacks; the current supply endpoint reports `767,385.784 KNTQ` burned, whose `$119,605` mark at the July 1 Hyperliquid close corroborates the separate “roughly `$120K` burned” figure, although the endpoint does not expose the historical July 1 burn quantity. kHYPE TVL was `$869.9M` as of July 19, +1.28% from the repository's July 18 snapshot, below materiality. The June 29 watch item is confirmed and closed; revenue-source attribution remains a recurring KPI rather than an unverified claim. Sources: https://rpc.km.xyz/kinetiq/buyback-fills?interval=D, https://kinetiq.xyz/api/kntq-data/supply-breakdown?chainId=999, https://kinetiq.xyz/docs/kntq, https://kinetiq.xyz/blog/kip-3-launch-live, https://api.hyperliquid.xyz/info, https://api.llama.fi/protocol/kinetiq-khype and https://x.com/0xOmnia/status/2072310841693655224
- 2026-07-01 (recovered in the 2026-07-15 stale-project check) — Core contributor `@0xOmnia` disclosed Kinetiq's buyback wallet and sKNTQ reward-drip contract and reported just over `$365K` of cumulative KNTQ purchases plus roughly `$120K` of KNTQ burned from HyperCore trading fees. This materially advances the prior related-account `$320K` claim and makes the flow directly monitorable, but the dashboard was access-blocked during the scan and the aggregate purchase/burn totals remain issuer-reported rather than independently reproduced. Source: https://x.com/0xOmnia/status/2072310841693655224
- 2026-06-29 — Related Markets/Kinetiq ecosystem account `@VikingoDigital_` claimed the Kinetiq buyback wallet has bought `$320K` of `$KNTQ` over two months and has been buying daily. This supports the Launch/KIP-3 buyback thesis if wallet data verifies, but it is not yet an official Kinetiq Foundation statement; next checks are buyback-wallet address, transactions, Foundation confirmation, and whether buybacks are revenue-funded versus discretionary. Source: https://x.com/VikingoDigital_/status/2071690233356198251
- 2026-06-23 — Markets.xyz said kPoints are now visible in-app and limit orders are live, with Import Wallet and Auto-Breakeven coming soon; related Kinetiq chatter again pointed to the Sep. 29 points window, strengthening the KNTQ airdrop/market-UX watch item. Source: https://x.com/Markets_xyz/status/2069467940529877281
- 2026-06-19 — Core contributor `@0xOmnia` showed the Markets.xyz BTC app updating around every 50ms, framed as roughly 10x faster than Hyperliquid now and potentially 100x faster if Hyperliquid slows to 5s updates; useful product/performance signal for Markets/Kinetiq infrastructure. Source: https://x.com/0xOmnia/status/2067983258487308736
- 2026-06-17 — Core contributor `@0xOmnia` said Markets.xyz generated $3.9B volume, 9,450 traders on listings, and became the 3rd-largest DEX by listings during the USDH phase, while framing the coming USDC migration as the next growth setup. Source: https://x.com/0xOmnia/status/2067371313128178119
- 2026-06-16 — Official X said several USDH markets were settled/delisted as the USDH-to-USDC collateral migration nears completion, with final markets due June 17 and USDC transition next week; thread warned users about phishing replies. Source: https://x.com/Kinetiq_xyz/status/2066935343253774355
- 2026-06-15 — Team account highlighted Markets.xyz/perps subdeployer mechanics: kmHYPE and sKNTQ earn 10% of deployer revenue, used to buy HYPE/KNTQ for stakers; also noted Pendle yield on kHYPE/vkHYPE. Source: https://x.com/0xOmnia/status/2066564897454825638
- 2026-06-14 — Related Markets.xyz growth/community account `@VikingoDigital_` posted an airdrop-farming thread saying Kinetiq Season 2 `$KNTQ` had a September 29 final snapshot and October 1 distribution. The 2026-07-15 review located the earlier official Foundation confirmation dated May 26, so the dates now live in the confirmed catalyst table; allocation, eligibility and anti-sybil mechanics remain next checks. Original lead: https://x.com/VikingoDigital_/status/2066215140152815998; official confirmation: https://x.com/KinetiqFND/status/2059275376270979523

## Thesis

### Investor / market theses

| Source | Who/affiliation | TLDR of the case | Relevance |
|---|---|---|---|
| https://x.com/ponyo_fp/status/2011315838591381668 | Ponyo / Four Pillars researcher and Hyperliquid ecosystem contributor | Kinetiq is under-owned infrastructure rather than only an LST: the team shipped Markets and Launch with little promotional extraction, while staking, exchange and launch revenue buy back KNTQ for sKNTQ holders. | Best outside market thesis found; the case rises or falls on Markets/Launch revenue becoming durable rather than one-off Hyperliquid activity. |
| https://x.com/0xOmnia/status/2003513785139564990 | `@0xOmnia` / Kinetiq core contributor | Kinetiq's liquid staking, Markets, Launch and validator stack routes disposable income into KNTQ buybacks and sKNTQ distributions, making KNTQ the economic center of the suite. | Primary/operator thesis, not independent research; useful because it specifies the intended value-accrual mechanism and therefore what can be tested onchain. |
| https://x.com/Maven11Capital/status/1981035200583762425 | Maven 11 / lead seed investor | Maven 11 backed Kinetiq's only disclosed funding round because it viewed the founders as unusually product-focused and aligned. | Confirms investor conviction and alignment, but does not independently underwrite valuation or revenue quality. |

### Hermes take

> **2026-07-15:** Kinetiq is one of the cleaner token setups on Hyperliquid because the value route is explicit: multiple revenue streams buy KNTQ and feed sKNTQ, with wallets and dashboards that can be checked. The bet is not “TVL goes up”; it is that Markets/Launch/validator income stays real enough to make recurring buybacks large versus circulating value. If that flow is reproducible, KNTQ matters. If it remains mostly issuer screenshots and subsidized HIP-3 volume, it is just an LST wrapped in a better story.

## Unverified Watch Items

| Date seen | Claim | Source | Credibility | Status | Why it matters | Next check |
|---|---|---|---|---|---|---|
| 2026-06-29; advanced 2026-07-15; resolved 2026-07-19 | Related Markets/Kinetiq ecosystem account claimed the Kinetiq buyback wallet had bought `$320K` of `$KNTQ` over two months and was buying daily. | Original: https://x.com/VikingoDigital_/status/2071690233356198251; core contributor: https://x.com/0xOmnia/status/2072310841693655224; complete fill feed: https://rpc.km.xyz/kinetiq/buyback-fills?interval=D; burn/supply endpoint: https://kinetiq.xyz/api/kntq-data/supply-breakdown?chainId=999 | High | Confirmed / closed | The complete backend history reproduces `2,107,173.17 KNTQ` and `$367,043.92` of buyback notional through the July 1 post, versus its “just over `$365K`” claim. The current supply endpoint's `767,385.784 KNTQ` burned is worth about `$119,605` at the July 1 Hyperliquid close, corroborating the separate roughly `$120K` figure without establishing the exact historical burn quantity. The feed continued to `$440,473.69` through July 17. Official docs define the revenue-to-buyback policy, while source-by-source realized income remains a KPI attribution question. | Resolved 2026-07-19 (`carried_from: 2026-06-29`): close the historical amount/activity claim as confirmed. Continue routine collector monitoring for fill totals, burns, sKNTQ transfers and source-attributed disposable revenue; do not carry this weak-signal item again. |

## Team
- `@0xOmnia` is the clearest public core-contributor/product voice and is the source for detailed Markets, Launch and KNTQ value-accrual updates.
- The wider contributor group is partly pseudonymous; no complete official legal-entity/team roster was found in this review.
- Kinetiq Foundation communicates token, points, funding and ecosystem matters through `@KinetiqFND`.

## Investors
- Official Foundation funding thread: https://x.com/KinetiqFND/status/1981005145908392376
- Kinetiq reported a `$1.75M` seed round led by Maven 11, with Pier Two and Chorus One as validator operators; IMC Trading, Infinite Field, Flowdesk and Susquehanna Crypto as HFT/market participants; and ecosystem angels.
- Core contributors and investors were disclosed with a three-year schedule: one-year cliff followed by two years of monthly linear vesting. Verify unlock execution against the live supply dashboard rather than relying on the announcement alone.

## Twitter/X accounts
- https://x.com/Kinetiq_xyz — official protocol/product account.
- https://x.com/KinetiqFND — Foundation/token/points/funding account.
- https://x.com/Markets_xyz — official related trading product.
- https://x.com/0xOmnia — core contributor and primary product/economic voice.
- https://x.com/VikingoDigital_ — related Markets growth/community account; useful for leads but verify claims upstream.

## KOLs
- https://x.com/ponyo_fp — Four Pillars/Hyperliquid ecosystem researcher; published sourced KNTQ theses and disclosed that coverage was not paid.
- https://x.com/Maven11Capital — lead investor; useful for funding/alignment context, not an independent KPI source.

## Official links
- Website/app: https://kinetiq.xyz/
- KNTQ dashboard: https://kinetiq.xyz/kntq
- Documentation: https://kinetiq.xyz/docs
- KNTQ/tokenomics docs: https://kinetiq.xyz/docs/kntq
- Contracts and audits: https://kinetiq.xyz/docs/contracts-and-audits

## Onchain/data resources
- DefiLlama kHYPE TVL API: https://api.llama.fi/protocol/kinetiq-khype
- KNTQ buyback dashboard: https://hl.eco/kinetiq
- Buyback wallet: https://hypurrscan.io/address/0xaa3b7392052d62928cc87701e3ca6fb6630bb6e2#txs
- sKNTQ reward-drip contract: https://hypurrscan.io/address/0x696238e0ca31c94e24ca4cbe7921754e172e4d0f#txs
- Hyperliquid public info API: `https://api.hyperliquid.xyz/info`; useful for balances and fills, but the current fill history did not reproduce the full issuer-reported aggregate.

## Docs/blogs
- KIP-3 Launch economics: https://kinetiq.xyz/blog/kip-3-launch-live
- KNTQ Kraken listing: https://kinetiq.xyz/blog/kntq-listed-on-kraken
- Launch operator guide: https://kinetiq.xyz/docs/launch-deployer-and-operator-guide
- kPoints rules/docs: https://kinetiq.xyz/docs/kpoints

## Risks
- **Hyperliquid concentration:** Kinetiq depends on HYPE staking demand, HIP-3 market quality and Hyperliquid infrastructure/regulatory resilience.
- **Revenue-quality risk:** TVL and trading volume are not the same as protocol income; rebates, incentives, oracle/liquidity costs and discretionary definitions can reduce disposable revenue.
- **Economic-verification gap:** Wallets are disclosed, but cumulative purchase, burn and sKNTQ-distribution figures still need a reproducible accounting adapter.
- **Smart-contract/validator risk:** LST, validator, perps and staking contracts add slashing, oracle, bridge, upgrade and contract risk despite published audits.
- **Supply/unlock risk:** One billion max supply and multi-year contributor/investor vesting make circulating-supply and unlock monitoring essential.

## Catalysts

| Catalyst | Status | Evidence / source | Timing | Direct impact | Second-order consequences | What to watch next |
|---|---|---|---|---|---|---|
| KIP-3 Launch live / HIP-3 exchange-as-a-service buybacks | Confirmed / revenue-token catalyst | Official Kinetiq blog says Launch is live and 100% of Kinetiq’s 10% deployer-share revenue is used for KNTQ buybacks: https://kinetiq.xyz/blog/kip-3-launch-live. Core contributor `@0xOmnia` disclosed the buyback wallet and sKNTQ destination: https://x.com/0xOmnia/status/2072310841693655224. The complete public fill feed independently reproduces `$367,043.92` through that post and `$440,473.69` through 2026-07-17: https://rpc.km.xyz/kinetiq/buyback-fills?interval=D | Live; blog dated 2026-06-10; historical claim verified 2026-07-19 | Creates an explicit, monitorable KNTQ buyback-and-reward path from protocol revenue. | Successful deployer markets can compound staking demand, fees, and KNTQ value accrual; direct fill visibility makes revenue-to-token execution testable. | Attribute realized disposable revenue by Markets/Launch/KIP-2/validator source; monitor sKNTQ transfers, burns, HIP-3 deployments, Launch TVL/stake and market quality. |
| kPoints final snapshot / KNTQ distribution window | Confirmed / token-distribution catalyst | Official Kinetiq Foundation post says final kPoints snapshot is 2026-09-29 and distribution is 2026-10-01: https://x.com/KinetiqFND/status/2059275376270979523. Official docs disclose weekly Tuesday snapshots, Thursday distributions and 800,000 weekly kPoints but state that the formula is intentionally private: https://kinetiq.xyz/docs/kpoints | Snapshot 2026-09-29; distribution 2026-10-01 | Creates a dated participation/liquidity catalyst for KNTQ and Kinetiq ecosystem activity. | Can drive Markets.xyz trading, kHYPE/Pendle usage, and post-airdrop sell/lock dynamics; private weighting limits independent allocation forecasting. | Verify the dated snapshot/distribution execution, final recipient/allocation totals and post-distribution staking behavior; do not expect a public formula unless policy changes. |
| Markets.xyz in-app kPoints + limit orders live | Confirmed / product-UX catalyst | Official Markets post says weekly Kinetiq kPoints are visible in app, limit orders are live, and wallet import/auto-breakeven are coming soon: https://x.com/Markets_xyz/status/2069467940529877281 | Live 2026-06-23; more features “coming soon” | Improves trading UX and makes reward tracking visible. | Better UX can increase trading volume feeding Kinetiq/Markets value capture. | Watch active traders, volume, limit-order usage, wallet import launch, and kPoints-driven retention. |
| USDH → USDC market migration / HIP-3 collateral transition | Confirmed / infrastructure transition catalyst | Official Kinetiq post says final USDH markets were settling/delisting and USDC collateral transition was next: https://x.com/Kinetiq_xyz/status/2067253563210801496 | Mid/late June 2026 transition | Cleaner USDC collateral can broaden market usability and reduce friction. | Successful migration may unlock more volume; failed migration risks user loss/outages. | Watch final market redeployments, liquidity recovery, open interest, user complaints, and fee/share changes. |

## Open questions
- Can sKNTQ transfers/distributions and source-attributed buyback funding be reconciled as cleanly as the now-reproduced aggregate purchase and burn totals?
- What are gross and disposable revenue by source after rebates, oracle/liquidity costs and treasury retention?
- How concentrated are Markets/Launch volume and deployer revenue, and how much activity persists after points/incentives?
- What are the current circulating, staked, burned and unlocked amounts, with the next contributor/investor unlock dates?
- Does kHYPE maintain market share and safe validator performance through stressed withdrawals, depegs or slashing events?

## Watch triggers
- Buyback or burn step changes large relative to circulating market cap, or material divergence between issuer dashboard and wallet reconstruction.
- Final kPoints allocation/rules, 2026-09-29 snapshot and 2026-10-01 distribution execution.
- New Markets/Launch deployments that materially change recurring deployer revenue rather than add routine markets.
- Validator slashing, kHYPE depeg, withdrawal delays, audit findings or contract upgrades.
- Contributor/investor unlocks, staking-ratio changes and sKNTQ APY changes driven by real revenue rather than token incentives.

## Direct Data / KPI Methodology

### KPI questions

| KPI | Why it matters | Best source | Programmatic status | Notes / limitations |
|---|---|---|---|---|
| kHYPE TVL and validator allocation | Measures staking adoption and the capital base exposed to Kinetiq | DefiLlama plus official app/validator data | `tested_ok` for aggregate TVL | TVL is not revenue; validator concentration and organic net inflows still need an adapter. |
| Gross and disposable protocol revenue by source | Determines how much Markets, Launch, KIP-2 and validator activity can actually buy back KNTQ | Official accounting/dashboard plus onchain wallets | `partial` | Official docs define percentages, but gross revenue, costs, treasury retention and source attribution are not yet reproducible. |
| KNTQ purchases, burns and sKNTQ distributions | Direct tokenholder value-capture execution | Kinetiq public fill/supply endpoints, Hyperliquid API and disclosed wallet/contracts | `tested_ok` for aggregate buys/burn; `partial` for source attribution and sKNTQ transfers | Complete buyback fills reproduce historical/current aggregate notional; official supply endpoint reports burned KNTQ. Revenue-source attribution and reward-drip accounting still need adapters. |
| Markets/Launch volume, OI, fees and concentration | Tests whether HIP-3 revenue is durable and diversified | Hyperliquid/Markets APIs and official dashboards | `manual_only` | Separate routine launch count/volume from retained traders, fee-generating activity and Kinetiq's actual share. |
| KNTQ circulating/staked/burned/unlocked supply | Frames buyback magnitude and future sell pressure | Official KNTQ dashboard/docs plus Hyperliquid token/contract data | `partial` | Dashboard is live, but a stable historical supply/unlock collector is not configured. |

### Fetch tests

| Source | Endpoint / method | Status | What it returns | Next step |
|---|---|---|---|---|
| DefiLlama kHYPE TVL | `https://api.llama.fi/protocol/kinetiq-khype` via `scripts/collect_direct_metrics.py` | `tested_ok` | Aggregate and chain-level kHYPE TVL history | Keep routine refreshes quiet; alert only on configured material deltas. |
| Kinetiq buyback fill backend | `https://rpc.km.xyz/kinetiq/buyback-fills?interval=D` | `tested_ok` | Complete cached fill count plus daily KNTQ buyback quantity, price and notional | Add aggregate buyback notional/quantity to the collector; alert only on material cadence or policy changes. |
| Kinetiq supply breakdown | `https://kinetiq.xyz/api/kntq-data/supply-breakdown?chainId=999` | `tested_ok` | Current KNTQ circulating, staked and burned amounts | Add supply/burn values to direct metrics and retain an as-of timestamp. |
| Hyperliquid public API | `POST https://api.hyperliquid.xyz/info` with `spotClearinghouseState`, `spotMeta`, `userFillsByTime` and `candleSnapshot` | `partial` | Wallet balances, market mapping, raw fills and historical prices | Use the Kinetiq complete-fill backend for aggregate history; retain Hyperliquid for independent spot checks and transfer/source attribution. |
| Official KNTQ dashboard | `https://kinetiq.xyz/kntq` | `tested_ok` for public page and underlying endpoints | Current supply, staking, buyback, burn and value-accrual presentation | Integrate the now-identified fill and supply endpoints into the collector. |
| Community buyback dashboard | `https://hl.eco/kinetiq` | `blocked` | Advertised real-time buyback view | Access was HTTP 403 from the scanner; do not make it the sole machine source. |

## Sources / Research Inputs

| Information source | Context about the source |
|---|---|
| https://kinetiq.xyz/ | Official app/site; staking and protocol product surface. |
| https://kinetiq.xyz/docs | Official protocol documentation. |
| https://kinetiq.xyz/docs/kntq | Official KNTQ supply, vesting, sKNTQ and value-accrual methodology. |
| https://kinetiq.xyz/docs/contracts-and-audits | Official contract and audit index. |
| https://kinetiq.xyz/blog/kip-3-launch-live | Official Launch/KIP-3 deployer-revenue and buyback announcement. |
| https://kinetiq.xyz/kntq | Official KNTQ supply/staking/buyback/burn dashboard. |
| https://x.com/Kinetiq_xyz | Official product/protocol X account. |
| https://x.com/KinetiqFND | Official Foundation/token/points/funding X account. |
| https://x.com/Markets_xyz | Official related Markets trading-product account. |
| https://x.com/0xOmnia | Core contributor; detailed product and value-accrual posts. |
| https://x.com/KinetiqFND/status/1981005145908392376 | Official `$1.75M` funding, investor and vesting disclosure. |
| https://x.com/Maven11Capital/status/1981035200583762425 | Lead-investor alignment thesis. |
| https://x.com/ponyo_fp/status/2011315838591381668 | Independent Hyperliquid ecosystem investment case. |
| https://api.llama.fi/protocol/kinetiq-khype | Programmatic third-party kHYPE TVL history. |
| https://hl.eco/kinetiq | Community buyback dashboard; useful lead but access-blocked in this scan. |
| https://rpc.km.xyz/kinetiq/buyback-fills?interval=D | Kinetiq public backend used by the official dashboard; complete cached KNTQ buyback fill history aggregated daily. |
| https://kinetiq.xyz/api/kntq-data/supply-breakdown?chainId=999 | Official dashboard endpoint for current circulating, staked and burned KNTQ amounts. |
| https://hypurrscan.io/address/0xaa3b7392052d62928cc87701e3ca6fb6630bb6e2#txs | Core-contributor-disclosed KNTQ buyback wallet. |
| https://hypurrscan.io/address/0x696238e0ca31c94e24ca4cbe7921754e172e4d0f#txs | Core-contributor-disclosed sKNTQ reward-drip contract. |

---
