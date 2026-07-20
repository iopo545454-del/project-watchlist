---
status: active
watchlist: crypto-projects
last_updated: 2026-07-20T17:10:56Z
---

# NEAR Protocol

## Overview
**Identity**
- Layer-1 blockchain now heavily positioned around chain abstraction, intents, user-owned AI and agent/commerce infrastructure.

**Official links**
- X: https://x.com/NEARProtocol
- Foundation: https://x.com/NEARFoundation
- DevHub: https://x.com/NEARDevHub
- Website: https://near.org/
- Docs: https://docs.near.org/
- Blog: https://near.org/blog
- GitHub: https://github.com/near
- Intents: https://intents.near.org/
- Data: https://defillama.com/chain/Near; explorer https://nearblocks.io/ and/or https://explorer.near.org/

**Team/key people**
- Illia Polosukhin — co-founder, https://x.com/ilblackdragon
- Alexander Skidanov — co-founder, https://x.com/AlexSkidanov
- Monitor Foundation leadership updates via `@NEARFoundation`.

**Investors/backers**
- Historical notable backers include a16z, Electric Capital, Tiger Global, Dragonfly, Pantera, Coinbase Ventures, Jump, Republic Capital, Hashed and others.
- Some historical backers (e.g., Alameda/3AC) are legacy/collapsed entities; track only for historical unlock/supply context if relevant.

**KOL/community accounts**
- `@ilblackdragon` for AI/intent/chain-abstraction strategy.
- `@NEARDevHub` for developer releases.
- Ecosystem-specific accounts for NEAR Intents, Chain Signatures and major DeFi apps should be added as they become relevant.

**Data/resources to monitor**
- DefiLlama NEAR chain TVL, stablecoins, app TVL and bridges.
- NEAR Intents volume/routes; Chain Signatures adoption and supported chains.
- GitHub `nearcore`, MPC/Chain Signatures repos; protocol upgrade governance.
- nearblocks/explorer validators, transactions, fees, staking.

**Alert triggers**
- Chain Signatures/intents production milestones, new chain support, latency/throughput upgrades.
- Major AI/privacy partnerships (e.g., Venice-style integrations), bridge or MPC security issues.
- Governance votes, validator/client upgrades, large ecosystem fund/grant changes.
- Significant TVL/stablecoin inflows/outflows.

**Notes/ambiguities**
- NEAR has many adjacent entities (`near.org`, `near.com`, Foundation, DevHub); use official X/docs to identify current canonical products.
- AI narrative is prominent but should be tracked separately from core L1 usage metrics.

## Latest scan notes

- 2026-07-20 — **Protocol v86 / nearcore 2.13 is live on mainnet.** Official NEAR says the upgrade makes FIPS-204 ML-DSA-65 a production transaction/access-key scheme and activates threshold-driven dynamic resharding. A direct mainnet RPC check at `2026-07-20T17:08:22Z` returned `protocol_version: 86` and node build `2.13.1`; the protocol config also exposes the `100 Ggas` ML-DSA verification charge. Canonical 2.13 release notes say automatic splits are evaluated at epoch boundaries, while the merged mainnet epoch config sets a `40,000,000,000` memory-usage threshold, `10,000,000,000` minimum child size, maximum `10` shards and two-epoch spacing. This closes the vote/activation question, but no first automatic mainnet split, broad wallet adoption or post-upgrade reliability history has been established yet. The RPC's legacy `dynamic_resharding: false` field mirrors the genesis flag in nearcore's `ProtocolConfigView`; it is not the v86 epoch-config feature gate. Sources: https://x.com/NEARProtocol/status/2079189515843821764, https://github.com/near/nearcore/releases/tag/2.13.1, https://github.com/near/nearcore/releases/tag/2.13.0, https://github.com/near/nearcore/pull/15823 and https://rpc.mainnet.near.org

- 2026-07-19 — The public NearStats API independently reproduces the ecosystem account's current NEAR Intents snapshot: **`$23.537B` all-time volume, `$52.452M` over 24 hours, `$525.422M` over 7 days, `$2.123B` over 30 days, and `$38.262M` in cumulative generated fees**, as of `2026-07-19T05:48:56Z`. The API identifies its underlying sources as the NEAR Intents Explorer, DefiLlama's NEAR Intents adapter and `revenue.near.org`; the fee figure is **gross generated fees**, not net protocol revenue or executed token buybacks. All-time volume is about `$477M` (`2.1%`) above the `$23.06B` dashboard read logged July 14. Sources: https://x.com/nearstatsorg/status/2078694898446868851 and https://nearstats.org/api/near/summary
- 2026-07-19 — Infinex launched **Infinex Confidential**, powered by NEAR Confidential Intents: deposits can enter from external wallets/exchanges or internal Infinex flows, balances and swaps use per-user confidential identities on a private NEAR shard, and withdrawals can exit to EVM, Solana or NEAR-Intents-native assets. Entry and exit transfers remain visible, the shard has no public RPC/explorer and is run by a permissioned validator set, so this is a meaningful live distribution integration rather than absolute end-to-end anonymity. No usage, TVL, fee or NEAR-value-routing figures were disclosed. Sources: https://x.com/infinex/status/2078348687449977312 and https://x.com/NEARProtocol/status/2078457697473622097
- 2026-07-15 — Official NEAR said **Corbits is live with NEAR AI today**, combining TEE-based private/verifiable inference with IronClaw's sandboxed agent orchestration and Corbits' tamper-evident logging of inference requests, tool calls and token costs. This adds a named live integration beyond the prior 17-project distribution count, but no users, requests, transactions, fees or NEAR value route were disclosed. Sources: https://x.com/NEARProtocol/status/2077466651763585154 and https://near.ai/blog/corbits-integrates-near-ai
- 2026-07-14 — Official NEAR restated **NEAR@3.33 as live** and clarified that the eligibility floor is a **sustained `$100+` confidential balance plus one confidential swap**, while activity/balance above the floor shapes allocation. The post does not define “sustained,” publish an allocation formula, say that the `$70M` confidential-TVL snapshot trigger has fired, or provide claim timing. This narrows the live incentive criteria but does not resolve snapshot, allocation, exclusion, conversion or claim mechanics. Sources: https://x.com/NEARProtocol/status/2077109187658535049 and https://www.near.org/blog/milestone-incentive-program

- 2026-07-14 — Official NEAR said the **NEAR Foundation joined the x402 Foundation** alongside AWS, American Express, Mastercard, Stripe and Visa to work on open agent-economy infrastructure spanning universal payments and private inference. This is a foundation/standards partnership signal, but the announcement names no NEAR-specific implementation, repository, working group, deliverable or timeline, so token/usage effects remain unproven. Sources: https://x.com/NEARProtocol/status/2077018138986578269 and https://www.near.org/blog/near-foundation-joins-x402-foundation
- 2026-07-14 — Official NEAR reframed Intents growth around **fee capture and issuance offset**, not just volume: the thread says cumulative Intents volume exceeded `$22B`, capture rose from `11.8%` lifetime to `15.5%` over 30 days and `29.5%` over 7 days, and protocol revenue funds buybacks that offset issuance. A direct check of `revenue.near.org` at scan time corroborated `$23.06B` all-time volume, about `$2.42M` gross fees and `$375.7K` net revenue over 30 days, `6.3% + 5.2% + 4.0%` capture from front-end fees, quote improvement and B2B partners, and roughly `$4.49M` cumulative monthly net revenue. The dashboard still shows revenue well below emissions, so this is accelerating value capture rather than achieved net deflation; methodology, actual buyback execution and organic-vs-incentivized volume remain checks. Sources: https://x.com/NEARProtocol/status/2076842684254167178 and https://revenue.near.org/

- 2026-07-13 — NEAR DevHub said **nearcore 2.13.0 is released** and **Protocol v86 voting starts July 20**. Once activated, dynamic resharding can split shards at size thresholds without a new protocol upgrade for each layout. This advances the post-quantum/dynamic-resharding catalyst from testnet RC status to a release plus dated governance step; activation date, validator adoption, production behavior and fee/token effects remain unreported. Source: https://x.com/NEARDevHub/status/2076669210043052432
- 2026-07-13 — Official NEAR said the **first live deployment of Confidential Intents** is on Aurora's Intents Swap API, where existing clients can enable confidential swaps with one quote parameter. NEAR also launched confidential EURe on near.com for SEPA Instant deposits and confidential movement/swaps across 30+ chains. These advance distribution for the July 7 GA and the already-live EURe rail, but disclose no new usage, fee, TVL or NEAR-token impact. Sources: https://x.com/NEARProtocol/status/2076668923584364720 and https://x.com/NEARProtocol/status/2076699720089481265
- 2026-07-10 — Official NEAR said Internet Court is live as an open skill for agent-to-agent negotiation, escrow, and natural-language dispute resolution, with NEAR supplying wallet/transaction skills, cross-chain swaps through NEAR Intents, and verifiable private inference through NEAR AI Cloud. The launch adds a concrete agent-commerce integration surface, but launch posts disclosed no named paid deals, fees, volume, escrow contract, or NEAR token impact. Source: https://x.com/NEARProtocol/status/2075649426442392008; original launch: https://x.com/courtofinternet/status/2075565797007609898

- 2026-07-09 — Official NEAR said Hyperliquid perps liquidity is now accessible from near.com: users can bridge from 35+ chains, convert on deposit, and trade 50+ markets up to 40x with one account. This reinforces near.com/NEAR Intents as a cross-chain trading front end, but token/value impact still depends on routed volume, front-end fees, partner revenue share, and whether Hyperliquid flow appears in `revenue.near.org`. Source: https://x.com/NEARProtocol/status/2075327108688081403

- 2026-07-07 — NEAR DevHub said **Confidential Intents are live on mainnet for AI agents**, with wallet registration via a simple skill/markdown file, confidential swaps with pre-commit quotes, private agent-to-agent transfers, cross-chain deposits/withdrawals, gasless execution, TEE-held keys, spending limits, and whitelists. Official NEAR also re-highlighted NEAR@3.33 qualification: hold $100+ in confidential balance and make one confidential swap before Confidential Intents reaches $70M TVL. This is an agent-specific follow-up to the GA launch, not a fresh tokenomics or revenue-dashboard update; next checks are DevHub docs/templates, named agent integrations, TVL toward $70M, and fee/revenue movement. Sources: https://x.com/NEARDevHub/status/2074586616425816502 and https://x.com/NEARProtocol/status/2074582972204711969
- 2026-07-07 — Official NEAR announced **Confidential Intents general availability** for builders/dApps through the NEAR Intents 1Click Swap API: existing 1Click integrations can add a `confidential` parameter and new teams can enable privacy-preserving execution without extra infrastructure. The thread and blog cited >$1.5B in ZEC settled across NEAR Intents, 42% of near.com volume using Confidential Mode shortly after launch, and daily confidential TVL above $30M. This completes the earlier July 7 reveal watch item and strengthens the Intents/privacy catalyst, but token/value impact still depends on sustained fee capture, partner integration, and live `revenue.near.org` movement. Sources: https://x.com/NEARProtocol/status/2074515816670781812, https://www.near.org/blog/announcing-general-availability-of-confidential-intents, and https://www.near.org/blog/how-confidential-intents-works
- 2026-07-07 — P2P.me posted a live payments demo routing TRON USDT through NEAR Intents into Base USDC, then through P2P Protocol to pay a Brazil PIX merchant in under 60 seconds while preserving privacy. This is a partner/ecosystem proof point for NEAR Intents as a real-world cross-chain payment/fiat-exit rail, but it is not a NEAR-official revenue or tokenomics update; verify sustained payment volume, fees, and whether the flow appears in `revenue.near.org`. Source: https://x.com/i/status/2074346563129016366
- 2026-07-07 — NEAR House of Stake ratified **HSP-027**, phasing out the legacy 30% developer gas rebate so transaction execution fees move to 100% native protocol fee processing/burn after deployment. Illia Polosukhin framed it as protocol simplification, cleaner accounting, and a live test of explicit House of Stake economic-parameter governance; third-party/governance context says deployment targets nearcore Protocol Update v2.14 in August 2026 after testnet validation. This is a real tokenomics/governance update, but practical impact depends on actual fee volumes and app-builder incentive response. Sources: https://x.com/i/status/2074147778830401999, https://houseofstake.org/blog/house-of-stake-update-hsp-027-ratified, https://houseofstake.org/proposals/27, and https://x.com/ilblackdragon/status/2074266944488734840
- 2026-07-06 — Official NEAR said MiCA-compliant EURe is now live on near.com, letting European users move euros onchain and trade across 30+ major blockchains from their own wallet; the same window NEAR re-amplified Protocol Upgrade 2.13 testnet status for dynamic resharding and post-quantum access keys. This advances the NEAR Intents/near.com distribution and protocol-upgrade catalyst, but needs live revenue/volume and mainnet-upgrade follow-through before it becomes a stronger token/value-capture signal. Sources: https://x.com/NEARProtocol/status/2074178525616123984 and https://x.com/NEARProtocol/status/2074211063139066229
- 2026-07-03 — Official NEAR scheduled “The Big Reveal” livestream for July 7 at 11am ET with Illia Polosukhin and Alex Shevchenko/NEAR Intents, upgrading the prior 2026-07-07 tease into a dated reveal watch item. Source: https://x.com/NEARProtocol/status/2073105015225418084
- 2026-07-03 — Official NEAR said Fogo Chain has gone confidential on near.com, with swaps of 100+ tokens to/from FOGO hiding amounts, routes, and wallets. This extends the Fogo/NEAR Intents integration into private trading UX and should be tracked against Confidential TVL and routed volume. Source: https://x.com/NEARProtocol/status/2073068502160720193

- 2026-07-03 — Official NEAR pointed to `revenue.near.org` as the live dashboard view tying together Intents volume, Confidential TVL, and 30-day unique users who expressed an intent — framed as settlement, trust, and live demand in one funnel. The dashboard was reachable during this scan, but exact numbers were not logged from the static X graphic; query live dashboard/API before using current quantitative values. Sources: https://x.com/NEARProtocol/status/2073030607731384694 and https://revenue.near.org/

- 2026-07-02 — NEAR promoted live near.com confidential trading/perps functionality: confidential swaps/deposits/transfers/withdrawals, 50+ perps markets, up to 40x leverage, cross-chain deposits, and referral incentives. Sources: https://x.com/NEARProtocol/status/2072747500914544907, https://x.com/NEARProtocol/status/2072747620351582334, https://x.com/NEARProtocol/status/2072747731114701135, https://x.com/NEARProtocol/status/2072747737431339495
- 2026-07-02 — NEAR reframed AI agents as emerging economic actors and pointed to near_ai as user-owned data/agent/upside infrastructure; useful strategic catalyst signal, but monitor for concrete releases, users, and value capture. Source: https://x.com/NEARProtocol/status/2072794894901420250

- 2026-07-02 — Official NEAR said Fogo Chain is now integrated into NEAR Intents: users can swap `FOGO` with 100+ assets across 30+ chains without manual gas/wallet/bridge steps, and developers can access the flow via the NEAR Intents 1-Click Swap API. Same window, NEAR teased “for Business” on `2026-07-07`; watch whether it is a real product/revenue catalyst or just campaign packaging. Sources: https://x.com/NEARProtocol/status/2072704958261068277 and https://x.com/NEARProtocol/status/2072682038256128510

- 2026-07-02 — Official NEAR monthly recap said NEAR Intents crossed $22B+ all-time volume and 28M+ swaps, Confidential Intents TVL exceeded $28M, NEAR@3.33 kicked off, Movement/Hypercore plus Hinkal and wallet integrations went live, GLM-5.2 and NEAR AI Cloud integrations expanded, and SPICE was previewed. This mostly consolidates already-tracked catalysts but updates key KPI/integration numbers. Source: https://x.com/NEARProtocol/status/2072495510166925703
- 2026-07-02 — NEAR co-founder Illia highlighted EURe in a NEAR account via RHEA cross-chain trade powered by NEAR Intents and Monerium, framing confidential cross-chain FX/payments as a near.com neo-banking flow. This is an ecosystem/product integration signal; verify official RHEA/Monerium details, supported jurisdictions, fees, volume, and whether value routes into NEAR revenue/capture dashboards. Source: https://x.com/ilblackdragon/status/2072446177711177789

- 2026-07-01 — Official NEAR said Protocol Upgrade 2.13 is live on testnet with post-quantum safe access keys and dynamic resharding, moving the prior nearcore release/vote watch item into live testnet execution. Source: https://x.com/NEARProtocol/status/2072415778557632982
- 2026-07-01 — Official NEAR said NEAR perpetuals are live on Kalshi, framed as the first US-regulated perps on NEAR and another regulated-market/institutional distribution surface to monitor for volume and fee capture. Source: https://x.com/NEARProtocol/status/2072365539637301396

- 2026-06-29 — Official NEAR posted a thread that post-quantum signing, dynamic resharding, and SPICE separation of consensus/execution are coming to NEAR, targeting quantum-hardening, automatic scaling, and 200ms block times for agentic use cases. Source: https://x.com/NEARProtocol/status/2071631116633530739

- 2026-06-29 — NEAR House of Stake / NEAR Governance said HSP-027 to remove the NEAR Developer Gas Rebate reached the 30% voting-power threshold in fast-track and advances to the main vote, closing July 3. This is a governance/economic-parameter item to monitor because rebate removal can change developer incentives and protocol revenue/capture optics if passed. Sources: https://x.com/NEARGovernance/status/2071549766736257309 and https://x.com/NEARGovernance/status/2071549769265344622

- 2026-06-29 — Illia Polosukhin said the NEAR testnet release is out and being voted on, pointing to nearcore `2.13.0-rc.1`. The GitHub release is marked `CODE_YELLOW_TESTNET`, `PROTOCOL_UPGRADE: TRUE`, and `DATABASE_UPGRADE: TRUE`; protocol changes include stabilized FIPS 204 ML-DSA-65 post-quantum signatures as a third transaction/access-key scheme. This upgrades the post-quantum catalyst from “planned testnet rollout” to active testnet release/governance monitoring. Sources: https://x.com/ilblackdragon/status/2071414107971158142 and https://github.com/near/nearcore/releases/tag/2.13.0-rc.1
- 2026-06-28 — Official NEAR promoted confidential swaps on near.com as hiding amount, route, wallet addresses and token pair while settling across 35+ chains in seconds. This is a concise product-positioning update for the Confidential Intents / chain-abstraction funnel; next check is whether confidential swap TVL, route count, fees and revenue dashboard values move after the campaign. Source: https://x.com/NEARProtocol/status/2071332966660186499
- 2026-06-28 — Official NEAR posted an ICYMI roadmap/history thread tying Illia appearances into the user-owned AI / agent-economy roadmap: chain abstraction, confidential execution, private inference, confidential intents, post-quantum crypto, root-of-trust work, AI frontend plus blockchain backend, and NEAR as money for inference/compute/agent transactions. It is mostly roadmap synthesis, but useful because it links the canonical roadmap history page and repeats token/usage claims like fee switch, $20B+ Intents volume and rising Confidential Intents TVL. Source: https://x.com/i/status/2071231604551217395 and https://www.near.org/roadmap-history
- 2026-06-27 — Official NEAR again promoted Hyperliquid perpetuals inside near.com: users can fund with any asset and go long/short without leaving a near.com account, framed as one account / one balance UX. This reinforces near.com as a trading front end for NEAR Intents and account abstraction; next checks are perps volume, fees captured, supported collateral, and whether Hyperliquid flow appears in NEAR revenue dashboards. Source: https://x.com/NEARProtocol/status/2070892027034706276
- 2026-06-26 — Official NEAR said NEAR AI Cloud private/verifiable inference is now integrated across 17 open-source AI projects, including Goose, Eliza, and the Vercel AI SDK; this upgrades NEAR AI Cloud from standalone capability to a developer-distribution catalyst if usage follows. Source: https://x.com/NEARProtocol/status/2070644017323249882
- 2026-06-26 — Official NEAR broke out NEAR revenue capture into three usage-linked mechanisms: front-end fees (12.5% 30D capture), quote improvement/positive slippage retained by the protocol (11.4%), and B2B partner revenue share (6.6%), and pointed to the live revenue dashboard. This is a useful value-capture decomposition for Intents/near.com, but dashboard data should be checked directly for exact current values. Source: https://x.com/NEARProtocol/status/2070500258597986371 and https://x.com/NEARProtocol/status/2070500261479543099
- 2026-06-26 — Official NEAR said NEAR Intents now routes value across 30+ chains and 180+ assets, expanding from RWAs/perps into the NEAR Agent Market; this strengthens the agentic-finance settlement rail narrative if volumes and fees continue to show up in the revenue dashboard. Source: https://x.com/NEARProtocol/status/2070528852036600030
- 2026-06-24 — Official NEAR published a roadmap thread saying mainnet has run 5+ years with 100% uptime and highlighting three active upgrades for the agent-economy settlement layer: post-quantum signing via FIPS-204/rotatable keys, dynamic resharding that can add shards automatically as demand grows, and SPICE separating consensus from execution to target ~200ms blocks and parallel execution. This consolidates the security/throughput/finality catalyst stack beyond the earlier individual SPICE and post-quantum notes. Source: https://x.com/NEARProtocol/status/2069879673748591090
- 2026-06-24 — Official NEAR said institutional staking demand is growing because Fireblocks and Figment now let institutions earn NEAR staking rewards while keeping assets under qualified custody; `@svrn_ai` is the first live user. This is a custody/institutional-access integration to watch for staked supply and enterprise flows. Source: https://x.com/NEARProtocol/status/2069813867438375344
- 2026-06-24 — Official NEAR pointed to the live revenue dashboard and said NEAR's capture rate has risen steadily over the past 90 days as ecosystem activity grows. This is a source-proximate value-capture KPI update, but the dashboard should be queried directly before using exact numbers. Source: https://x.com/NEARProtocol/status/2069849709284323410 and https://revenue.near.org/
- 2026-06-23 — Official NEAR published its post-quantum safety plan: NEAR accounts use rotatable access keys, allowing an in-place upgrade to NIST-approved ML-DSA signatures without address migration; the post says testnet rollout is planned this quarter. Source: https://x.com/NEARProtocol/status/2069534500418130190
- 2026-06-23 — Official NEAR promoted Hyperliquid perps directly from near.com accounts, letting users go long/short or hedge with profit-and-loss guardrails; this extends near.com from intents/confidential swaps into higher-velocity trading UX. Source: https://x.com/NEARProtocol/status/2069433480115568725
- 2026-06-23 — Official NEAR said Confidential Intents participants can qualify for Drop 1 by holding at least $100 confidential balance and making one confidential swap; snapshot locks when confidential pools reach $70M TVL versus $30.86M shown in the post. Source: https://x.com/NEARProtocol/status/2069400493374189959
- 2026-06-23 — Official NEAR X announced SPICE, an in-development protocol upgrade that decouples consensus from execution, targets ~200ms block times, parallel execution, optimized CPU scheduling and atomic execution across shards. This is a roadmap/catalyst item for the AI-agent/intent stack, with timing framed as “coming months.” Source: https://x.com/NEARProtocol/status/2069180409414406177

- 2026-06-22 — Official NEAR X said GLM-5.2 is live on NEAR AI with frontier open-source performance, verifiable privacy, and hardware-signed attestation for code/private inference workloads. Source: https://x.com/NEARProtocol/status/2069146261479882953
- 2026-06-22 — Official NEAR X said monthly revenue/value capture after integration-partner payouts is climbing, with May the strongest month yet and all-time revenue now above $4.2M; this upgrades the NEAR Intents/revenue-capture watch item from narrative to source-proximate metric, but still needs dashboard/API verification. Source: https://x.com/NEARProtocol/status/2069108737466368417
- 2026-06-19 — NEAR said Confidential Intents TVL is up 43x in 90 days and framed private-settlement volume as a fee/revenue funnel; Illia also highlighted confidential deposits for near.com RWA/equity-style perps including NVIDIA, SpaceX, Tesla and S&P500 markets. Sources: https://x.com/NEARProtocol/status/2068012791819014471 and https://x.com/ilblackdragon/status/2068051111161012224
- 2026-06-18 — NEAR announced NEAR@3.33 for Confidential Intents users: eligible users receive NEAR@3.33 that converts 1:1 to NEAR after a $3.33 VWAP for three consecutive days once Confidential Intents TVL reaches $70M. This is a direct incentive/liquidity milestone for Confidential Intents. Source: https://x.com/NEARProtocol/status/2067735355835449509
- 2026-06-18 — NEAR published a user-owned AI stack map with current proof points: Intents $20B+ volume, Confidential Intents $30M+ TVL, NEAR AI Cloud/private inference, Agent Market, House of Stake, and live revenue/buybacks. Source: https://x.com/NEARProtocol/status/2067593396168876452
- 2026-06-17 — NEAR highlighted Hinkal integrating NEAR Intents for private cross-chain swaps from Solana and Tron, extending the privacy/intents stack with another routing integration. Source: https://x.com/NEARProtocol/status/2067240484490068270

- 2026-06-16 — Official X published an AI Money / agent-economy stack tying together NEAR Blockchain, House of Stake, Confidential Cloud, Intents, Agent Market, IronClaw, and near.com; Illia also amplified $30M+ confidentiality-progress context. Source: https://x.com/NEARProtocol/status/2066912426897842541
- 2026-06-15 — Official X highlighted verifiable/private inference coming to Venice, Abound, Bermuda, Brave and others, plus rising confidential TVL on NEAR Intents. Source: https://x.com/NEARProtocol/status/2066586545788756313

## Thesis

### Investor / market theses

| Source | Who/affiliation | TLDR of the case | Relevance |
|---|---|---|---|
| https://x.com/AustinBarack/status/2027111127700676898 | Austin Barack / Relayer Capital; former CoinFund partner | The investable case is no longer generic sharding: NEAR Intents and confidential execution are producing real fees, while the chain's AI/privacy stack gives autonomous agents a cross-chain settlement rail. The key mechanism is revenue-funded buybacks offsetting validator emissions; the check is whether net retained revenue, not gross routed volume, keeps compounding. | Strong outside token/fundamentals case because it links product usage to emissions offset and explicitly depends on measurable value capture. |
| https://x.com/DukeD_Defi/status/2065785121022914599 | DukeD / independent DeFi researcher | NEAR is better evaluated as open AI, privacy and chain-abstraction infrastructure than as a conventional L1 TVL trade. The same framework scores present revenue, product-market fit, adoption and token capture much lower than the narrative, making execution the central risk. | Useful balanced market thesis: it explains why the AI/agent setup matters without pretending the current network effects are already won. |
| https://x.com/MessariCrypto/status/1922656830095761835 | Messari research | Periodic protocol research frames NEAR's sharding, fast finality, Intents, chain abstraction and AI tooling as a coherent high-throughput application stack, evaluated against transactions, active addresses, stablecoins, DEX activity and developer progress. | Provides a fundamentals framework for checking whether product announcements translate into durable network usage. |

### Hermes take

> **2026-07-19 —** NEAR finally has a cleaner thesis than “fast L1 plus AI branding”: Intents is moving real cross-chain volume, the fee dashboard is measurable, and confidential integrations are landing in products people already use. The only number that matters now is **net retained revenue and executed buybacks versus emissions**. Gross volume and gross fees can look huge while token capture stays small; if the buyback path closes that gap, NEAR is interesting, otherwise it is excellent middleware with a weak token.

## Team
- Illia Polosukhin — co-founder; AI/agent, protocol and chain-abstraction strategy: https://x.com/ilblackdragon
- Alexander Skidanov — co-founder; protocol/technical context: https://x.com/AlexSkidanov
- NEAR Foundation — ecosystem and institutional entity: https://x.com/NEARFoundation
- NEAR DevHub — developer/release surface: https://x.com/NEARDevHub

## Investors
- Historical publicly reported backers include a16z, Electric Capital, Tiger Global, Dragonfly, Pantera, Coinbase Ventures, Jump, Republic Capital and Hashed. Treat these as financing history rather than proof of current support or holdings.
- Legacy names such as Alameda and Three Arrows are historical cap-table/unlock context, not current endorsement.

## Twitter/X accounts
- https://x.com/NEARProtocol — official protocol/product account.
- https://x.com/NEARFoundation — Foundation/ecosystem account.
- https://x.com/NEARDevHub — developer and release updates.
- https://x.com/near_intents — official NEAR Intents product account.
- https://x.com/ilblackdragon and https://x.com/AlexSkidanov — co-founders.

## KOLs
- Prioritize core and ecosystem operators who provide source links or quantitative methodology; do not treat generic AI-L1 promotion as evidence.
- `@AustinBarack` and Messari are useful outside thesis/fundamentals sources; NearStats is a useful third-party data surface whose source map must remain visible.

## Official links
- Website/blog: https://near.org/ and https://near.org/blog
- Technical docs and GitHub: https://docs.near.org/ and https://github.com/near
- NEAR Intents: https://intents.near.org/ and https://explorer.near-intents.org/
- Revenue dashboard: https://revenue.near.org/
- Governance: https://houseofstake.org/

## Onchain/data resources
- https://revenue.near.org/ — official product/protocol revenue, volume, capture and issuance-offset dashboard.
- https://nearstats.org/api/near/summary — third-party machine-readable aggregate that exposes its underlying Explorer/DefiLlama/revenue-dashboard sources.
- https://explorer.near-intents.org/ — primary Intents transaction explorer/API surface.
- https://nearblocks.io/ and https://rpc.mainnet.near.org — chain transactions, validators, blocks and RPC state.
- https://defillama.com/chain/Near — third-party TVL/stablecoin/application context; do not confuse bridge TVL with Intents economics.

## Docs/blogs
- Official protocol/product blog: https://near.org/blog
- Developer docs: https://docs.near.org/
- NEAR AI blog: https://near.ai/blog
- nearcore releases: https://github.com/near/nearcore/releases

## Risks
- Gross Intents volume and generated fees are not the same as net protocol revenue, token buybacks or permanent NEAR removal; reconcile every value-capture claim against the dashboard and transactions.
- Confidential Intents depend on TEEs/private shards, relays and permissioned/trust-minimized operators; entry/exit edges can still leak amount, timing and asset information.
- The AI narrative can outrun paid inference usage, integrations and token capture.
- Protocol upgrades such as dynamic resharding, post-quantum keys and SPICE add validator/client execution risk.
- Cross-chain aggregation expands bridge, solver, quote, custody and routing dependencies.

## Catalysts

| Catalyst | Status | Evidence / source | Timing | Direct impact | Second-order consequences | What to watch next |
|---|---|---|---|---|---|---|
| NEAR Foundation participation in x402 Foundation | Confirmed / partnership; deliverables pending | Official announcement and blog say NEAR Foundation joined alongside AWS, American Express, Mastercard, Stripe and Visa to advance open agent infrastructure from universal payments to private inference: https://x.com/NEARProtocol/status/2077018138986578269 and https://www.near.org/blog/near-foundation-joins-x402-foundation | Announced 2026-07-14; implementation timeline unknown | Gives NEAR a seat in an industry standards effort around agent payments and private inference. | Concrete specs/integrations could distribute NEAR's stack into mainstream agent commerce; logo-only membership would have little economic effect. | Watch x402 governance/specs, NEAR-authored proposals/code, payment/private-inference integrations, named pilots, transaction volume, fees and NEAR value routing. |
| Post-quantum signing, dynamic resharding, and SPICE upgrades | Confirmed / v86 live on mainnet; SPICE pending | Official mainnet announcement: https://x.com/NEARProtocol/status/2079189515843821764. Canonical releases: https://github.com/near/nearcore/releases/tag/2.13.1 and https://github.com/near/nearcore/releases/tag/2.13.0. Direct mainnet RPC returned protocol `86`, node `2.13.1` and the ML-DSA verification charge at the scan; merged epoch config: https://github.com/near/nearcore/pull/15823 | Protocol v86 live 2026-07-20; SPICE timing still “coming months” | Makes FIPS-204 ML-DSA-65 a production transaction/access-key scheme and enables automatic epoch-boundary shard splitting from state-size thresholds without a fresh hard-coded layout upgrade. | Clean operation can strengthen NEAR's security/scaling narrative and reduce shard-layout governance overhead; a first automatic split would be the clearest production proof, while client/wallet failures would weaken it. | Watch first automatic mainnet split, shard count/layout, validator/client incidents, ML-DSA key adoption and wallet support, then SPICE releases/benchmarks. |
| HSP-027 Developer Gas Rebate removal | Confirmed / completed governance result; implementation pending | Ratified House of Stake update and proposal: https://houseofstake.org/blog/house-of-stake-update-hsp-027-ratified and https://houseofstake.org/proposals/27; Illia rationale: https://x.com/ilblackdragon/status/2074266944488734840 | Passed 2026-07-06; deployment targeted for nearcore Protocol Update v2.14 / August 2026 after testnet validation | Phases the 30% developer gas rebate to 0%, routing transaction execution fees to native protocol fee processing/burn. | Simplifies accounting and can make NEAR value-capture optics cleaner if fee volumes grow, but may remove a historical builder incentive; House of Stake now has a live precedent for economic-parameter changes. | Watch nearcore v2.14/testnet/mainnet activation, dashboard fee/burn effects, app-builder reaction, and any replacement incentive mechanism. |
| Post-quantum account/signature adoption | Confirmed protocol support / live on mainnet; client adoption partial | Official account-rotation design: https://www.near.org/blog/making-near-protocol-post-quantum-safe. Mainnet announcement and release: https://x.com/NEARProtocol/status/2079189515843821764 and https://github.com/near/nearcore/releases/tag/2.13.0 | Protocol support live 2026-07-20; CLI available, broader wallet rollout ongoing | Lets accounts add ML-DSA-65 keys without changing account name/address; release notes store a 32-byte SHA3-256 public-key hash and charge `100 Ggas` extra verification cost. | Real wallet/hardware support could improve long-horizon security credibility for institutions and autonomous accounts; protocol support alone does not migrate users away from classical keys. | Measure ML-DSA key/transaction adoption, CLI reliability, Ledger/software-wallet support, explorer/RPC compatibility and any signing or fee issues. |
| SPICE protocol upgrade for ~200ms blocks and atomic cross-shard execution | Tentative / official development | Official NEAR posts say SPICE separates consensus from execution for ~200ms blocks, parallel execution and atomic cross-shard execution, while the broader roadmap thread pairs it with dynamic resharding and post-quantum signing: https://x.com/NEARProtocol/status/2069180409414406177 and https://x.com/NEARProtocol/status/2069879673748591090 | “Coming months” as of 2026-06-22; roadmap reiterated 2026-06-24 | Improves latency, throughput scaling, and execution model for Intents, near.com, and agent payments. | Makes NEAR’s chain-abstraction and AI-agent thesis more credible if shipped without validator/client instability; dynamic resharding could reduce coordination friction as usage grows. | Watch nearcore releases, governance/client upgrade dates, benchmark results, dynamic resharding docs, and any Nightshade 3.0 follow-up. |
| Confidential Intents general availability, partner deployments, TVL milestone, and NEAR@3.33 incentive | Confirmed / product live + multiple partner deployments + live incentive; snapshot/claim unresolved | GA: https://x.com/NEARProtocol/status/2074515816670781812. Aurora deployment: https://x.com/NEARProtocol/status/2076668923584364720. Confidential EURe: https://x.com/NEARProtocol/status/2076699720089481265. Infinex Confidential launch/architecture: https://x.com/infinex/status/2078348687449977312 and official amplification https://x.com/NEARProtocol/status/2078457697473622097. Incentive floor: https://x.com/NEARProtocol/status/2077109187658535049 | GA 2026-07-07; Aurora/EURe 2026-07-13; Infinex 2026-07-18; incentive live, with snapshot trigger still stated as `$70M` confidential-pool TVL | Moves confidential execution from platform GA into live partner APIs, euro-stablecoin flow and an established multichain wallet/trading front end. | Wider distribution can feed Intents volume/revenue and strengthen private settlement; trust assumptions and incentive quality depend on operator transparency, allocation rules and retention. | Measure Infinex/Aurora/EURe usage, TVL and fees; document private-shard/relay operators and entry/exit leakage; define “sustained,” allocation/exclusion/claim mechanics and the `$70M` trigger. |
| Revenue dashboard, fee capture and buyback/issuance-offset path | Confirmed / live KPI; not yet net deflationary | Official dashboard and value-capture thread: https://revenue.near.org/ and https://x.com/NEARProtocol/status/2076842684254167178. Tested third-party API with explicit source map: https://nearstats.org/api/near/summary. | Live; latest API read `2026-07-19T05:48:56Z` | Current API shows `$23.537B` all-time Intents volume, `$52.452M` 24h volume and `$38.262M` cumulative **gross generated fees**; retained net revenue and executed buybacks are smaller, separate series. | If net capture and volume compound until buybacks exceed emissions, NEAR can move toward net deflation; gross figures can otherwise overstate token value capture. | Track 7D/30D/lifetime volume, gross-to-net reconciliation, revenue versus emissions, buyback-wallet transactions and token removal, partner payouts, organic flow and API methodology changes. |
| NEAR Intents as cross-chain / agent-market money rail | Confirmed / official product-growth signal | Official NEAR said Intents routes across 30+ chains and 180+ assets and is expanding from RWAs/perps into the NEAR Agent Market; Illia later highlighted EURe in NEAR accounts via RHEA/NEAR Intents and Monerium, and NEAR later said Fogo Chain confidential swaps are live on near.com: https://x.com/NEARProtocol/status/2070528852036600030, https://x.com/ilblackdragon/status/2072446177711177789, and https://x.com/NEARProtocol/status/2073068502160720193 | Ongoing/live; Fogo confidential UX noted 2026-07-03 | Broadens the settlement surface for swaps, RWAs/perps, FX/payments, Fogo flow, and agent transactions. | More chains/assets/agent-market/private-trading flows can feed the revenue dashboard and strengthen NEAR’s chain-abstraction/neo-banking thesis if usage is real. | Watch routed volume, Confidential TVL, monetizable cross-chain market share, Agent Market transaction examples, EURe/Monerium jurisdictions and fees, fee capture, and partner integrations. |
| Internet Court agent-commerce integration | Confirmed / product live | Official NEAR and Internet Court launch posts: https://x.com/NEARProtocol/status/2075649426442392008 and https://x.com/courtofinternet/status/2075565797007609898 | Live/available as of 2026-07-10 | Connects NEAR wallet/transaction skills, NEAR Intents swaps, and NEAR AI Cloud private inference into an open agent negotiation, escrow, and dispute workflow. | If agents actually use it, the integration can create incremental Intents/inference flow and establish NEAR inside agent-commerce standards; absent usage it remains launch-surface distribution. | Watch named agents/deals, onchain escrow contracts/transactions, paid volume, fees, integrations, dispute outcomes, and revenue.near.org movement. |
| “The Big Reveal” NEAR Intents/AI livestream | Confirmed / completed event | Official NEAR scheduled a July 7 livestream with Illia Polosukhin and Alex Shevchenko/NEAR Intents: https://x.com/NEARProtocol/status/2073105015225418084; subsequent official thread/blog announced Confidential Intents GA: https://x.com/NEARProtocol/status/2074515816670781812 and https://www.near.org/blog/announcing-general-availability-of-confidential-intents | Completed 2026-07-07 | Resolved the dated attention/reveal catalyst into Confidential Intents GA and API availability for builders. | If integrations follow, the reveal can expand NEAR’s private cross-chain settlement distribution beyond near.com; if not, it remains a campaign/product-marketing milestone. | Watch livestream recap, API docs, partner integrations, revenue-dashboard movement, and confidential TVL/Intents volume after GA. |
| Institutional staking through Fireblocks/Figment custody | Confirmed / integration live | Official NEAR said Fireblocks and Figment enable institutions to earn NEAR staking rewards under qualified custody, with `@svrn_ai` the first live user: https://x.com/NEARProtocol/status/2069813867438375344 | Live as of 2026-06-24 | Reduces custody friction for institutional staking access. | Could increase professionally custodied staked NEAR and make NEAR easier for funds/treasuries to hold, though token impact depends on net new demand. | Track Fireblocks/Figment announcements, institutional validator flows, staked-supply changes, and whether more named users appear. |
| NEAR AI private inference and developer integrations | Confirmed / product live | Official NEAR posts say GLM-5.2 is live, NEAR AI Cloud reached 17 open-source integrations, and Corbits is now live with NEAR AI plus IronClaw orchestration: https://x.com/NEARProtocol/status/2069146261479882953, https://x.com/NEARProtocol/status/2070644017323249882, https://x.com/NEARProtocol/status/2077466651763585154 and https://near.ai/blog/corbits-integrates-near-ai | Live; 17 integrations noted 2026-06-26; Corbits live 2026-07-15 | Adds private/verifiable inference and bounded multi-agent orchestration into developer and AI-operations workflows. | Named production integrations can strengthen the user-owned AI stack if they create real usage, fees or workflow lock-in rather than logos. | Watch Corbits users/requests, model pricing, attestations, tool-call logs, SDK examples, partner repos, fees and any NEAR value route. |

## Direct Data / KPI Methodology

### KPI questions

| KPI | Why it matters | Best source | Programmatic status | Notes / limitations |
|---|---|---|---|---|
| Intents all-time / 24h / 7d / 30d volume | Measures actual routing demand and growth | NEAR Intents Explorer + NearStats source-mapped API | tested_ok | Volume is not revenue; watch route concentration, self-routing, incentives and duplicate accounting. |
| Gross generated fees | Measures monetization before partner/frontend splits | `revenue.near.org` via NearStats API | tested_ok / attribution clear | `$38.262M` cumulative as of `2026-07-19T05:48:56Z`; do not label it net protocol revenue. |
| Net retained revenue and buybacks | Tests direct NEAR value capture versus emissions | Official revenue dashboard and buyback transactions | partial | Dashboard exposes net/capture series, but the collector still needs stable direct fields plus wallet-level execution/reconciliation. |
| Confidential TVL and active users | Tests whether private settlement is used beyond incentives | Official dashboard / NearStats / partner data | tested_ok for current aggregate; attribution partial | API showed `$33.46M` confidential TVL and `106,887` seven-day unique participants; privacy and Sybil methodology require care. |
| Protocol/client activation | Tracks v86, post-quantum keys, dynamic resharding and SPICE | nearcore releases, governance and mainnet RPC | tested_ok for live protocol/client version; production behavior manual | RPC directly confirms protocol `86` / node `2.13.1`; first automatic split, ML-DSA adoption and broad validator/client health still require history and event-level checks. |

### Fetch tests

| Source | Endpoint / method | Status | What it returns | Next step |
|---|---|---|---|---|
| NearStats summary | `https://nearstats.org/api/near/summary` | tested_ok | Source map, live Intents volume windows, cumulative gross fees, confidential TVL, users and chain context | Collector added for volume/fees/TVL/users; monitor schema and compare with official dashboard. |
| NEAR mainnet RPC | `status` + `EXPERIMENTAL_protocol_config` at `https://rpc.mainnet.near.org` | tested_ok | Live protocol/client version, shard layout and runtime costs including ML-DSA verification | Add a lightweight protocol-version/history check; separately monitor shard-layout changes because the legacy genesis `dynamic_resharding` boolean is not the epoch feature gate. |
| Official NEAR revenue dashboard | `https://revenue.near.org/` server-rendered data | tested_ok / parsing not yet stabilized | Intents volume, gross/net revenue, capture, cumulative revenue, emissions and confidential TVL | Add direct official fields when a stable documented endpoint is available; retain NearStats as transparent third-party bridge. |
| NEAR Intents Explorer | `https://explorer.near-intents.org/api/v0/transactions` | tested_ok / aggregation external | Transaction-level Intents activity | Use for route-level reproduction and anomaly checks rather than rebuilding full history every scan. |
| DefiLlama `near` protocol adapter | `https://api.llama.fi/protocol/near` | partial / non-informative | Canonical bridge-style TVL context; current collector returned no useful TVL | Do not use as the primary NEAR economics KPI; replace if the adapter remains empty. |

## Sources / Research Inputs

| Information source | Context about the source |
|---|---|
| https://x.com/NEARProtocol | Official project/product announcements. |
| https://x.com/NEARFoundation | Foundation, institutional and ecosystem updates. |
| https://x.com/NEARDevHub | Developer releases and protocol-upgrade context. |
| https://x.com/near_intents | Official Intents product/integration account. |
| https://x.com/ilblackdragon | Co-founder strategy, governance and protocol commentary. |
| https://x.com/AlexSkidanov | Co-founder technical context. |
| https://near.org/ and https://near.org/blog | Official website, roadmap and announcements. |
| https://docs.near.org/ | Official developer/protocol documentation. |
| https://github.com/near/nearcore/releases | Canonical client releases and upgrade notes. |
| https://rpc.mainnet.near.org | Official mainnet JSON-RPC; direct protocol/client/shard-layout verification. |
| https://revenue.near.org/ | Official revenue/value-capture dashboard. |
| https://explorer.near-intents.org/ | Primary Intents transaction explorer/API. |
| https://nearstats.org/api/near/summary | Third-party machine-readable aggregate with explicit underlying source map and freshness. |
| https://houseofstake.org/ | Governance proposals, votes and results. |
| https://nearblocks.io/ | Chain/account/validator explorer context. |
| https://x.com/AustinBarack/status/2027111127700676898 | Investor thesis linking Intents revenue and emissions-offset economics. |
| https://x.com/DukeD_Defi/status/2065785121022914599 | Independent bull/bear framework for NEAR's AI infrastructure thesis. |

## Open questions
- Does live Protocol v86 / nearcore 2.13 remain healthy, when does the first automatic mainnet shard split occur, and how quickly do wallets/users adopt ML-DSA keys?
- Do Infinex, Aurora Confidential Intents and confidential EURe create measurable volume, fees, TVL and revenue, and what are the private-shard/relay trust assumptions and entry/exit leakage in practice?
- When does the NEAR@3.33 `$70M` TVL trigger occur, how is a “sustained” `$100+` balance measured, and what are the final allocation, exclusion, conversion and claim mechanics?
- Do the live dashboard's capture-rate, cumulative-revenue and emissions series reconcile to actual buyback-wallet execution and permanent token removal, and how much volume/revenue is organic versus incentive-driven?
- What concrete x402 Foundation specs, code, pilots or integrations will NEAR contribute, and do they route agent payments/private inference into measurable NEAR usage or fees?
- Does the live Corbits integration produce named users, verifiable inference requests, paid token usage, fees or measurable NEAR AI/chain activity?

## Watch triggers
- Protocol v86 post-activation health, first automatic shard split, ML-DSA wallet/key adoption, validator/client problems or security disclosures.
- Material changes in Intents gross volume, net retained revenue, capture rate, buyback execution or emissions coverage.
- NEAR@3.33 snapshot, allocation, claim or anti-Sybil rules.
- Confidential Intents partner usage, private-shard/TEE incidents, TVL changes and privacy-model changes.
- Major AI Cloud paid usage, integrations, model/security changes or explicit NEAR value routing.
- Governance/economic parameter changes, unlocks, staking/custody shifts and material bridge/solver incidents.

---
