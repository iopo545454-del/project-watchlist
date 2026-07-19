---
status: active
watchlist: crypto-projects
last_updated: 2026-07-19T10:21:04Z
---

# Worldcoin / WLD / World Network

## Overview
**Identity**
- Rebranded to World / World Network: proof-of-humanity, World ID, World App, Orb hardware, WLD token and World Chain L2.
- Tools for Humanity is the main technology company behind the network.

**Official links**
- Main X: https://x.com/worldnetwork
- Tools for Humanity: https://x.com/tfh_technology
- Foundation/community: https://x.com/worldcoinfnd; legacy/related: https://x.com/worldcoin
- World Chain X: https://x.com/world_chain_
- Website: https://world.org/
- Docs: https://docs.world.org/
- Blog: https://world.org/blog
- GitHub: https://github.com/worldcoin
- Data: https://defillama.com/chain/world-chain; Dune: https://dune.com/world/world
- WLD Ethereum contract commonly cited: `0x163f8C2467924be0aE7B5347228CAbF260318753`

**Team/key people**
- Alex Blania — co-founder/CEO TFH, https://x.com/alexblania
- Sam Altman — co-founder, https://x.com/sama
- Track TFH and Foundation leadership announcements via `@tfh_technology` and `@worldcoinfnd`.

**Investors/backers**
- a16z / a16z crypto, Khosla Ventures, Blockchain Capital, Bain Capital Crypto are notable historical/current backers.
- World Foundation announced a $135M market-price WLD purchase by a16z and Bain Capital Crypto in 2025 per official X search result.

**KOL/community accounts**
- `@worldnetwork`, `@world_chain_`, `@tfh_technology`, `@worldcoinfnd`.
- `@alexblania` for strategy; `@sama` only when directly discussing World.
- `@a16zcrypto`, `@BainCapCrypto` for financing/governance context.

**Data/resources to monitor**
- World Chain TVL/activity on DefiLlama and Dune.
- World App users, verified humans, Orb rollout/geographies, Mini App developer metrics.
- WLD unlocks, circulating supply, Foundation/TFH wallets, CCIP/bridge flows.
- GitHub/worldcoin releases; docs for Mini Apps, World ID and World Chain.

**Alert triggers**
- Regulatory actions/pauses in major jurisdictions; Orb manufacturing/deployment milestones.
- WLD unlocks, token sales, market purchases by backers/foundation.
- Major World Chain/World App outages, bridge incidents, identity/privacy/security disclosures.
- Large Mini App adoption or new exchange/payment integrations.

**Notes/ambiguities**
- Brand naming can be confusing: Worldcoin, World Network, World Foundation, Tools for Humanity and World Chain are distinct but linked.
- Always distinguish equity funding in TFH from WLD token sales/purchases.

## Latest scan notes

- 2026-07-15 — World Chain **merged WIP-1008** into the specification repository after five commits, adding a documentation-only standards proposal for WLD-staked subblock committees, BLS attestations, a two-thirds-stake certificate, slashing/rewards, `StakeManager`, `attested` RPC head and `flblk` v3 gossip. This confirms the design as a merged Core standards-track spec, but the PR explicitly says it is **documentation only / low risk**: no runtime implementation, contract deployment, audit, governance activation, minimum stake or reward amount shipped. Source: https://github.com/worldcoin/world-chain/pull/850
- 2026-07-14 — WIP-1008 is no longer a draft and received its first human approval. Reviewer Alessandro Mazza said the design generally looks good but questioned whether the implementation cost is justified because World Chain's batcher already moves blocks from unsafe to safe roughly every **3–4 minutes** and the work is time-sensitive. The PR remains open and unmerged, so this advances review confidence without confirming implementation, economics or activation. Source: https://github.com/worldcoin/world-chain/pull/850#pullrequestreview-4691755012
- 2026-07-13 — World Chain PR #850 opened draft WIP-1008 for **Staked Subblocks and Unsafe-Head BFT**. The proposal would add a WLD-staked validator overlay that contributes protocol-guaranteed subblocks, attests the unsafe chain at a two-thirds stake quorum, slashes equivocation/censorship faults, and pays subblock priority fees plus attestation rewards. This would be World Chain's first native WLD staking/value-utility mechanism and a decentralization/security step change, but it is only a draft open PR: minimum stake, reward amounts, governance path, audits, implementation and activation are all unresolved. Source: https://github.com/worldcoin/world-chain/pull/850
- 2026-07-13 — World Chain merged an SP1 validity-proof verifier into its multi-proof system, then removed an unused Nitro aggregation-signing path that accepted arbitrary boot information without checking the underlying range proofs and could have let the enclave sign unverified state transitions. The maintainer states the unsafe path was unused by the Nitro worker; no exploit or production exposure was disclosed. This is meaningful proof-system delivery and security hardening, with deployment/audit status still to verify. Sources: https://github.com/worldcoin/world-chain/pull/842 and https://github.com/worldcoin/world-chain/pull/845
- 2026-06-24 — Official World published a product/blog update on creating verified AI agents with AgentKit, framing World ID as infrastructure for AI agents acting on behalf of real humans. This extends the AgentKit catalyst from ticketing into general verified-agent workflows; watch real developer integrations beyond blog/demo language. Source: https://x.com/worldnetwork/status/2069822016803459395 and https://world.org/blog/product/how-to-create-verified-ai-agents-agentkit
- 2026-06-22 — TokenomicsCOM flagged a June 24 WLD unlock of roughly 149.9M WLD / $90.7M, about 1.5% of circulating supply and ~3.0% of market cap, with community/private-investor/insider/foundation buckets. Treat as third-party unlock-calendar context until cross-checked against official Foundation/TFH disclosures or an unlock dashboard. Source: https://x.com/TokenomicsCOM/status/2069044731200385426
- 2026-06-16 — Official X highlighted Agent Kit as humans-only ticketing infrastructure with Thirty Seconds to Mars and other partners, extending the World ID anti-bot integration story. Source: https://x.com/worldnetwork/status/2066919640589275644
- 2026-06-15 — World Network announced/boosted Thirty Seconds to Mars tour ticketing with World ID verification for humans-only tickets and verified-human perks. Source: https://x.com/worldnetwork/status/2066572868071342207

## Catalysts

| Catalyst | Status | Evidence / source | Timing | Direct impact | Second-order consequences | What to watch next |
|---|---|---|---|---|---|---|
| WIP-1008 WLD-staked subblocks and unsafe-head BFT | Confirmed merged specification / watch implementation | World Chain merged the documentation-only Core standards-track proposal after review: https://github.com/worldcoin/world-chain/pull/850. The spec defines WLD-staked validators, subblock committees, two-thirds-stake BFT attestations, slashing, priority-fee/attestation rewards, `StakeManager`, an `attested` RPC head and `flblk` v3 gossip; the PR explicitly says no runtime/protocol implementation shipped. | Spec merged 2026-07-15; implementation, governance and activation schedule unknown | Advances native WLD staking and validator fee/reward design from open proposal to canonical merged specification without activating economics. | If implemented, WLD gains productive utility and World Chain reduces single-sequencer censorship/reorg risk; validator concentration, reward funding and slashing design add governance and market-structure risks. | Watch Foundation/World Chain endorsement, implementation PRs, minimum stake, active-set/reward/slashing parameters, contracts/sidecar code, audits, testnet, governance and activation. |
| World Chain mainnet opened to World users | Confirmed | Official World blog said World Chain is live and that all 15M World ID holders and World App users had either migrated or were in the process of migrating to World Chain. Source: https://world.org/blog/announcements/world-chain-now-open-every-human | Live since 2024-10-17 | Launches World’s own human-prioritized L2 as the settlement layer for World App, World ID, Mini Apps, and ecosystem activity. | Creates the base for gas sponsorship, native apps, stablecoins, and verified-human distribution as onchain infrastructure rather than only an identity app. | Track World Chain transactions, active verified users, Mini App usage, bridge/stablecoin liquidity, and developer adoption. |
| World Chain multi-proof validity verifier and Nitro hardening | Confirmed / ongoing implementation | Official GitHub merged an SP1 validity-proof verifier and removed an unused Nitro aggregation path that could sign without checking underlying range proofs: https://github.com/worldcoin/world-chain/pull/842 and https://github.com/worldcoin/world-chain/pull/845 | Merged 2026-07-13; production activation unknown | Adds another validity-proof verifier to the dispute/proof system and removes a security-sensitive dead path before broader use. | Multi-proof support can improve prover diversity/resilience, while the unsafe-path fix reduces future attack surface; the market read-through depends on audited production deployment. | Verify deployed contract/code versions, audit coverage, whether the removed path was ever callable in production, defender submission support, proof costs and live usage. |
| New Orb and World ID 3.0 unveiled | Confirmed | Official World launch posts unveiled the next-generation Orb and World ID 3.0 with new credentials, privacy/security/scalability upgrades, and deepfake-prevention features. Sources: https://world.org/blog/announcements/world-unveils-new-orb-new-ways-to-verify-scale-network-1-billion-humans and https://world.org/blog/announcements/introducing-world-id-3-new-credentials-more-privacy-deep-fake-prevention | Announced 2024-10-17 | Upgrades the core proof-of-human hardware/protocol stack and lays out scaling toward much larger verification coverage. | Better Orb throughput and stronger credentials/privacy can reduce verification bottlenecks and expand use cases beyond crypto. | Watch Orb deployment pace, country availability, privacy/regulatory reviews, and World ID upgrade adoption. |
| Mini Apps early scale and incubator launch | Confirmed | Official World blog said Mini Apps reached as many as 5.4M opens per day from more than 1M unique humans and announced new social/developer features plus an incubator. Source: https://world.org/blog/announcements/world-mini-apps-milestones-new-features-incubator-announced | Reported 2025-01-15 | Shows World App becoming a developer distribution surface rather than only an identity wallet. | Mini App scale gives builders a reason to integrate World ID / World Chain and can drive repeat World App usage. | Track Mini App DAU/retention, developer submissions, top apps, transaction volume, and grant/incubator outcomes. |
| World launches in the United States | Confirmed | Official World blog announced that World launched in the USA. Source: https://world.org/blog/announcements/world-launches-in-the-usa-at-last | Announced 2025-04-30 | Expands World into the most important AI/tech consumer market and a critical regulatory jurisdiction. | US availability can accelerate partners, developers, and mainstream proof-of-humanity use cases, but also increases regulatory/privacy scrutiny. | Track US Orb locations, adoption, state-level availability, regulatory reactions, and US partner integrations. |
| Native USDC and CCTP V2 live on World Chain | Confirmed | Official World blog said Circle USDC and CCTP V2 are live on World Chain and that existing bridged USDC was converted to native USDC. Source: https://world.org/blog/announcements/world-integrates-circles-usdc-and-cctp | Live 2025-05-01 | Adds core stablecoin and cross-chain transfer infrastructure to World Chain. | Native USDC improves payments, remittances, Mini App commerce, and developer viability inside World App / World Chain. | Track USDC liquidity, payment volume, bridge flows, Mini App integrations, and stablecoin UX in World App. |
| $135M WLD purchase by a16z and Bain Capital Crypto | Confirmed | Official World blog said World raised $135M from Andreessen Horowitz and Bain Capital Crypto through a WLD purchase to fund network expansion. Source: https://world.org/blog/announcements/world-raises-135m | Announced 2025-05-21 | Material funding and token-demand event to support Orb/network expansion. | Institutional support strengthens runway and expansion credibility, but market impact depends on token terms, unlocks, and treasury flows. | Watch use of proceeds, Orb deployment acceleration, investor/token lockups, wallet movements, and future financing. |
| Developer Rewards increased to $100K/week; ecosystem surpassed 500 Mini Apps | Confirmed | Official World blog said the Dev Rewards pilot increased to $100K per week as the ecosystem surpassed 500 Mini Apps, more than 2M daily opens, and over 100M WLD transacted in Mini Apps. Source: https://world.org/blog/announcements/dev-rewards-pilot-increases-to-100k-per-week-as-the-world-ecosystem-surpasses-500-mini-apps | Announced 2025-10-03 | Expands developer incentives while reporting meaningful ecosystem usage metrics. | Recurring rewards plus 500+ Mini Apps can compound World App utility if retention and monetization improve. | Track weekly rewards, top Mini App retention, WLD transaction quality, developer churn, and whether rewards continue or convert to organic growth. |
| Polymarket Mini App launched in World App | Confirmed | Official World blog said the Polymarket Mini App became accessible inside World App, with users able to participate using WLD or USDC. Source: https://world.org/blog/announcements/polymarket-meets-world-wallet-with-new-mini-app | Launched 2025-10-21 | Adds a high-profile consumer/financial Mini App and direct WLD/USDC utility inside World App. | Prediction-market integration can improve World App engagement and demonstrate distribution value for major apps. | Track Polymarket Mini App users, volume, regional availability, compliance constraints, and repeat financial-app integrations. |
| New World App with World Chat, payments, and expanded Mini Apps | Confirmed | Tools for Humanity official X announced the new World App with secure World Chat, global payments, and expanded Mini Apps inside the World ecosystem. Source: https://x.com/tfh_technology/status/2001413312647438755 | Announced 2025-12-17 | Turns World App from identity wallet into a consumer app surface for verified-human chat, payments, and mini-app usage. | More daily app utility can support verified-human distribution for builders and make World ID less dependent on one-off signup incentives. | Track World App MAU, Mini App retention, payments volume, verified-user activity, and whether chat/payments drive repeat usage. |
| World Build 3 grants / accelerator track | Confirmed | Official @world_chain_ post announced World Build 3 with up to $200K grants, distribution to 38M+ users, mentorship, funded Seoul/San Francisco trips, and support for founders building human-verified apps. Source: https://x.com/world_chain_/status/2031831214324437305 | Announced 2026-03-11 | Bootstraps the World Chain/Mini Apps developer funnel with grant capital and distribution. | A strong cohort can create proof that World's verified-human user base is useful to third-party builders, not only internal apps. | Track winners, shipped apps, grant disbursements, active users, retention, and whether apps use World ID/World Chain in a differentiated way. |
| AgentKit beta / Proof of Human for agentic automation | Confirmed beta | Official @worldnetwork post launched AgentKit beta as the human layer for agentic automation, and a later official blog showed how to create verified AI agents that prove they are controlled by a real human through World ID. Sources: https://x.com/worldnetwork/status/2033923684768092436 and https://world.org/blog/product/how-to-create-verified-ai-agents-agentkit | Beta launched 2026-03-17; verified-agent blog/update 2026-06-24 | Extends World ID from login/identity into AI-agent permissioning and bot-resistant automation. | If adopted by ticketing, commerce, SaaS, or agent platforms, World can become identity middleware for the agentic web rather than only a crypto app. | Watch AgentKit docs, integrations, developer usage, Okta/enterprise links, and real deployments beyond demos. |
| MiniKit 2.0 live for World developers | Confirmed | Official World blog said MiniKit 2.0 is live on World Chain, enabling builders to build once and deploy across web and World App with Flashblocks and gas sponsorship. Source: https://world.org/blog/announcements/build-once-deploy-anywhere-minikit-2.0-is-live-for-world-developers | Live 2026-03-31 | Improves developer UX for Mini Apps / World Chain deployments. | Lower build friction can increase developer throughput and make the World App distribution channel easier to target. | Track MiniKit adoption, new app launches, developer retention, gas sponsorship usage, and app quality. |
| World + Tinder humans-only / verified dating integration | Confirmed | Official @worldnetwork Lift Off / launch-day post said the World + Tinder integration went live in the US, with World ID verification used for humans-only experiences and perks. Source: https://x.com/worldnetwork/status/2045285211584467113 | Live 2026-04-17 | Shows World ID moving into a mainstream consumer app vertical where bot/fake-account resistance is a clear pain point. | High-profile consumer integrations can validate proof-of-humanity demand outside crypto and create follow-on partnership leverage. | Track geographic rollout, user uptake, Tinder/Match disclosures, privacy messaging, and additional dating/social app integrations. |
| Lift Off partner suite / new World ID integrations | Confirmed | Official Lift Off announcement described the most significant World ID protocol upgrade to date and partner integrations including Tinder, Concert Kit, Zoom, Docusign, Vercel, and Okta. Source: https://world.org/blog/announcements/the-new-world-id-and-the-partners-bringing-proof-of-human-to-the-internet | Announced 2026-04-17 | Moves World ID into consumer, enterprise, ticketing, and agentic-web workflows. | A broad partner suite validates proof-of-humanity demand beyond crypto, but needs real usage metrics and repeat deployments. | Track rollout status for each partner, usage metrics, enterprise adoption, privacy/regulatory feedback, and follow-on integrations. |
| 40M World App users / 18M Orb-verified humans milestone | Confirmed | Official @worldnetwork post reported 40M World App users and 18M Orb-verified humans across 160 countries by April 2026. Source: https://x.com/worldnetwork/status/2049525461735100864 | Reported 2026-04-29 | Confirms scale of the verified-human distribution base that World sells to builders and partners. | Large verified-user numbers make Mini Apps, AgentKit, ticketing, and consumer integrations more credible, but quality depends on activity/retention not only signups. | Track monthly verified-user growth, active World App users, Orb deployment geography, retention, Mini App usage, and regulatory pauses. |
| World ID / AgentKit for bot-resistant ticketing | Confirmed pilot/use case | World Network official posts announced/boosted Thirty Seconds to Mars tour ticketing with World ID verification for humans-only tickets and highlighted Agent Kit as anti-bot ticketing infrastructure. Source: https://x.com/worldnetwork/status/2066919640589275644 | Official updates 2026-06-15 to 2026-06-16 | Concrete real-world use case where World ID blocks bots and gives verified humans access/perks. | Ticketing is a high-signal vertical for proof-of-humanity; repeat artist/venue partnerships could turn World ID into anti-scalper infrastructure. | Watch redemption/attendance metrics, partner repeats, ticketing platform integrations, and whether World shares fraud-reduction data. |
| WLD unlock rate decreases by 43% starting July 2026 | Confirmed | World Foundation official X and blog said the WLD unlock rate will decrease by 43% in July 2026; funds continue supporting operations, R&D, Orb manufacturing, and ecosystem growth. Source: https://x.com/worldcoinfnd/status/2042630606593421751 | Starts July 2026 | Directly changes token supply-pressure schedule and is material to WLD market structure. | Lower unlock rate can reduce incremental sell pressure, but market response depends on circulating supply, actual wallets, demand, and whether OTC/treasury sales continue. | Watch July unlock execution, Foundation/TFH wallet flows, unlock dashboards, OTC sales, and circulating-supply updates. |

## Thesis

### Investor / market theses

| Source | Who/affiliation | TLDR of the case | Relevance |
|---|---|---|---|
| https://x.com/Delphi_Digital/status/1952405033754239065 | Delphi Digital / Lucas research update | World can become a neutral proof-of-human and distribution layer for an AI-saturated internet; World App/Mini App usage and verification growth support the network case, while WLD emissions and Orb/regulatory constraints are the main token risks. | Best balanced outside thesis tying identity distribution to explicit supply and execution risks. |
| https://x.com/a16zcrypto/status/2018795993001755047 | a16z crypto | AI agents make portable, privacy-preserving proof of personhood a core internet primitive; crypto can make identity user-controlled and credibly neutral rather than platform-siloed. | Strong strategic case for World ID, though not a dedicated WLD value-capture memo. |
| https://x.com/gametheorizing/status/1685236776321830912 | Jordi Alexander / Selini Capital | Proof of personhood may be useful, but the currency/distribution design can create weak bid support, black markets and harmful incentives around biometric identity. | Important adversarial tokenomics and social-risk countercase. |

### Hermes take

> **2026-07-19 —** World has the best distribution in proof of personhood and the ugliest trust surface in the category. Tinder, ticketing, AgentKit and 40M World App users make the product hard to dismiss. WLD still needs a reason to be owned beyond funding the rollout. The bet works if World ID becomes neutral identity middleware and WLD supply pressure keeps falling; it fails if the Orbs, regulators and token emissions remain the story instead of repeat app usage.

## Team
- Tools for Humanity — principal technology/product builder.
- Alex Blania — co-founder/CEO, tracked at https://x.com/alexblania.
- Sam Altman — co-founder, tracked for strategic context at https://x.com/sama.
- World Foundation — protocol/ecosystem/token entity: https://x.com/worldcoinfnd.

## Investors
- Historical publicly reported backers include a16z, Khosla Ventures, Blockchain Capital, Bain Capital Crypto and others; verify individual round/source details before cap-table use.
- Investor support for the identity thesis does not establish current WLD holdings or token-value routing.

## Twitter/X accounts
- https://x.com/worldnetwork — current primary official account.
- https://x.com/worldcoin and https://x.com/worldcoinfnd — legacy/Foundation/token context.
- https://x.com/world_chain_ and https://x.com/tfh_technology — chain and builder accounts.
- https://x.com/alexblania and https://x.com/sama — co-founders.

## KOLs
- Prioritize privacy/identity researchers, integration partners and regulatory sources over generic AI/biometric commentary.
- Delphi, a16z crypto and Jordi Alexander provide useful bull/bear thesis framing with different incentives.

## Official links
- Website/blog: https://world.org/ and https://world.org/blog
- Developer docs: https://docs.world.org/
- World Chain source: https://github.com/worldcoin/world-chain
- Official X: https://x.com/worldnetwork

## Onchain/data resources
- World Chain explorer/RPC and official World ID dashboards for chain usage, verified-human and app metrics.
- Etherscan/explorers for canonical WLD contracts, unlock wallets and bridge routes.
- DefiLlama for World Chain TVL/bridge context; this does not measure proof-of-human usage or WLD value capture.
- Official Foundation unlock/supply disclosures and onchain circulating-supply reconciliation.

## Docs/blogs
- https://world.org/blog — primary announcements, integration and Foundation/product context.
- https://docs.world.org/ — World ID, MiniKit, AgentKit and developer documentation.
- https://github.com/worldcoin/world-chain — protocol specs, releases, issues and implementation evidence.

## Risks
- Biometric collection, consent, custody, deletion and jurisdictional compliance can halt distribution or damage trust.
- Orb manufacturing/operator concentration and permissioning can undermine neutral proof-of-personhood claims.
- WLD unlocks/emissions can overwhelm product progress; lower unlock rate is helpful but not equivalent to value capture.
- World ID integration counts can overstate active repeat usage; track verification-to-app-retention funnels.
- Private/unsafe-head and proof-system upgrades introduce validator, client and cryptographic implementation risk.
- Identity markets can create coercion, resale/black-market and account-recovery harms.

## Direct Data / KPI Methodology

### KPI questions

| KPI | Why it matters | Best source | Programmatic status | Notes / limitations |
|---|---|---|---|---|
| Verified humans, active users and verification growth | Measures identity-network distribution | Official World dashboards/API | manual_only / stable public API needed | Registrations are not retained active users; geography/regulatory pauses matter. |
| Mini App/World App activity | Tests distribution monetization and developer demand | Official analytics + World Chain events | partial | Separate app opens, transactions, active users and subsidized activity. |
| WLD circulating supply/unlocks/staking | Measures market structure and dilution | Foundation disclosures + onchain contracts | partial | Reconcile published schedules with actual wallets and chain bridges. |
| World Chain fees/TVL/transactions | Measures chain activity | RPC/explorer/DefiLlama | partial / configured TVL context | Chain TVL is not proof-of-human adoption or tokenholder revenue. |
| World ID partner usage | Tests mainstream product-market fit | Partner disclosures + verification proofs | manual_only | Logo announcements need activation, geography and repeat-use evidence. |

### Fetch tests

| Source | Endpoint / method | Status | What it returns | Next step |
|---|---|---|---|---|
| DefiLlama World Chain/bridge adapter | Configured public API | partial | TVL/bridge context | Keep separate from identity and WLD economics. |
| World Chain GitHub | GitHub API | tested_ok | Specs, PRs, releases and implementation state | Track WIP-1008 runtime code, audits and activation. |
| Official user/verification dashboards | Public pages | manual_only | Issuer-reported World App and verified-human totals | Locate stable machine-readable endpoint and retention definitions. |

## Sources / Research Inputs

| Information source | Context about the source |
|---|---|
| https://x.com/worldnetwork | Primary official product/network account. |
| https://x.com/worldcoinfnd | Foundation, supply and token disclosures. |
| https://x.com/world_chain_ | World Chain-specific updates. |
| https://x.com/tfh_technology | Tools for Humanity builder context. |
| https://world.org/ and https://world.org/blog | Official website, product and announcement sources. |
| https://docs.world.org/ | Canonical developer/product documentation. |
| https://github.com/worldcoin/world-chain | World Chain implementation and specifications. |
| https://x.com/Delphi_Digital/status/1952405033754239065 | Independent market thesis/update. |
| https://x.com/a16zcrypto/status/2018795993001755047 | Investor identity/agent thesis. |
| https://x.com/gametheorizing/status/1685236776321830912 | Adversarial tokenomics/distribution thesis. |

## Open questions
- Verify whether World Chain's SP1 validity verifier is deployed/active, what audits cover the multi-proof system, and whether the removed Nitro aggregation-signing path was ever callable in production; maintainers describe it as unused and disclosed no exploit.
- WIP-1008 is merged as a documentation-only specification; verify official Foundation endorsement, implementation PRs, WLD minimum stake, validator cap/concentration, reward funding, fee routing, slashing conditions, contracts, audits, testnet and activation/governance path.

## Unverified Watch Items

| Date seen | Claim | Source | Source type | Credibility | Status | Why it matters | Next check |
|---|---|---|---|---|---|---|---|
| 2026-07-13; advanced 2026-07-15 | WIP-1008 may add a WLD-staked validator overlay, protocol-guaranteed subblocks, BFT attestations, slashing, and validator fee/reward flows to World Chain. | https://github.com/worldcoin/world-chain/pull/850 | Official GitHub specification PR | High | Partially supported — specification merged; implementation/activation unverified | The design is now canonical in the World Chain specification repository, a meaningful step toward WLD utility and validator economics. The merged PR is documentation-only and explicitly ships no runtime implementation. | `carried_from: scan-20260713T213409Z; advanced watchlist-scan-20260715T234645Z` — check implementation PRs, Foundation endorsement, parameters, contracts, audits, testnet, governance and activation. |

## Watch triggers
- WLD unlock, emissions, staking or Foundation/TFH wallet changes.
- New major World ID integration with activation/usage evidence.
- Regulatory actions, Orb pauses, biometric/privacy incidents or data-policy changes.
- World Chain/WIP-1008 implementation, audits, validator parameters and activation.
- Material verified-human, active-user, Mini App or World Chain usage changes.

---
