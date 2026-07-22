---
status: reviewed
watchlist: crypto-projects
token_address: 0xBf8E8f0e8866a7052F948C16508644347c57aba3
chain: Base
last_updated: 2026-07-22T05:51:11Z
---

# AEON Framework / aeon

## Overview
**Identity**
- Correct target is **AEON Framework** / **aeon** at https://x.com/aeonframework, not AEON.XYZ and not legacy AeonCoin.
- X bio: “The most autonomous agent framework. No approval loops. No babysitting. Configure once, forget forever.”
- Website: https://www.aeon.fun/ describes AEON as an open-source, MIT-licensed autonomous agent framework with “197 skills” and “zero babysitting.”
- Token to track: **`$aeon` on Base** at `0xBf8E8f0e8866a7052F948C16508644347c57aba3`.

**Official links**
- X: https://x.com/aeonframework
- Website: https://www.aeon.fun/
- GitHub/source: https://github.com/aaronjmars/aeon
- Telegram: https://t.me/aeon_agent
- DexScreener: https://dexscreener.com/base/0xBf8E8f0e8866a7052F948C16508644347c57aba3
- BaseScan token: https://basescan.org/token/0xBf8E8f0e8866a7052F948C16508644347c57aba3

**Token / market context**
- Chain: **Base**.
- Contract: `0xBf8E8f0e8866a7052F948C16508644347c57aba3`.
- DexScreener identifies the token as `aeon` / `aeon` and links the official website, GitHub, X, and Telegram above.
- Latest sampled DexScreener snapshot showed roughly **$2.6M market cap**, **$2.9M FDV**, **$1.24M main-pair liquidity**, and **~$89k 24h volume**. Treat these as volatile scan-time values, not durable fundamentals.

**Product / recent positioning**
- Autonomous agent framework focused on long-running recurring tasks with minimal human approval loops.
- Website highlights categories such as research, monitoring, PR review/merge, repo scanning, token reports, narrative tracking, digesting, and social-writing workflows.
- GitHub repo `aaronjmars/aeon` description matches the X bio; repo is MIT licensed and recently active.
- Recent community narrative from X search points to **STRATEGY.MD** / markdown-configured long-term goals as a key feature to monitor.

**Team/key people**
- GitHub owner/source repo: https://github.com/aaronjmars/aeon.
- Need follow-up on the full team/contributor map and whether `aaronjmars` is the main founder/builder account to track.

**Data/resources to monitor**
- @aeonframework posts and profile changes.
- GitHub repo commits/releases/issues: https://github.com/aaronjmars/aeon.
- Website/blog/docs changes at https://www.aeon.fun/.
- Token contract / pair data on Base and DexScreener.
- Telegram announcements at https://t.me/aeon_agent.

**Alert triggers**
- New releases, docs, skills, or framework architecture changes.
- STRATEGY.MD / autonomous-goal feature updates.
- Token contract migration, liquidity changes, CEX/DEX listings, or official tokenomics/unlock details.
- New high-signal integrations, agents built on AEON, or ecosystem entrants using the framework.
- Security issues, exploit reports, repo archival, or maintainer changes.

**Sources / Research Inputs**

| Information source | Context about the source |
|---|---|
| https://x.com/aeonframework | Official X account; primary project announcements and narrative source. |
| https://x.com/aaronjmars | Founder/builder account tied to the official GitHub repo; primary source for framework release and attestation details. |
| https://www.aeon.fun/ | Official website; product positioning, skills/categories, docs/source links. |
| https://github.com/aaronjmars/aeon | Official source repo linked from website/DexScreener; MIT-licensed autonomous agent framework. |
| https://www.aeon.fun/blog/signed-by-the-agent | Official implementation article for GitHub OIDC + Sigstore/Rekor skill-output attestations and their trust boundary. |
| https://github.com/aeonfun/aeon/blob/main/docs/ADK.md | Canonical Aeon Developer Kit reference for GitHub-App authorization, skill control and product-linked skill packs. |
| https://api.llama.fi/summary/fees/aeon?dataType=dailyRevenue | DefiLlama onchain adapter for AEON token-pool fees and the 57% treasury share; explicitly separates treasury revenue from launch-platform beneficiaries and direct holder revenue. |
| https://api.llama.fi/summary/fees/miroshark-x402-api?dataType=dailyRevenue | DefiLlama onchain adapter for `$1` USDC MiroShark x402 simulation runs; separate from token-trading fees. |
| https://t.me/aeon_agent | Telegram linked by DexScreener/project socials. |
| `0xBf8E8f0e8866a7052F948C16508644347c57aba3` | Official `$aeon` token contract on Base to track. |
| https://dexscreener.com/base/0xBf8E8f0e8866a7052F948C16508644347c57aba3 | Token/pair/liquidity/market-data view. |
| https://basescan.org/token/0xBf8E8f0e8866a7052F948C16508644347c57aba3 | Base token explorer page; holders/transfers/contract verification checks. |

---

## Latest scan notes

- 2026-07-22 — Dedicated verification closed the July 15 revenue-routing/adoption check as **confirmed with bounds**. DefiLlama's Base adapter reads the WETH/AEON multicurve pool onchain and maps the 57% project share across the historical beneficiary `0x373509C3d065aE6049D6FF4e225B9936455d7A2b` and current deployer/treasury-routing wallet `0x67976cebb5266b50a08c0dcb676e03baf305e3a2`; the remaining 43% is classified as Bankr/Doppler/interface supply-side revenue. MiroShark's separate x402 adapter identifies `$1` USDC EIP-3009 settlements to `0x6cab485fc28ec70d3845113b704d4824e4d2b24f` and the early misconfigured receiver, totaling `$219` / 219 paid runs through the check. Builder shiplogs reported `93 runs / 21 buyers`, then `174 / 34`, `143 / 34` and `97 / 29`, confirming repeat paid cohorts at the aggregate level but not wallet-level retention or margin. The July 8 “first MiroShark buyback” remains an official execution claim with no published transaction hash, and it bought MiroShark—not AEON—so it does **not** verify AEON's promised 50% non-trading-revenue buyback. Close the composite check; reopen AEON buyback execution only for a named wallet/transaction or stable adapter. Sources: https://github.com/DefiLlama/dimension-adapters/blob/master/fees/aeon.ts, https://github.com/DefiLlama/dimension-adapters/blob/master/fees/miroshark-x402.ts, https://x.com/aaronjmars/status/2074916309348049107, https://x.com/aaronjmars/status/2068708591163355447, https://x.com/aaronjmars/status/2070577683621154854, https://x.com/aaronjmars/status/2075646695417749694 and https://x.com/aaronjmars/status/2078157556711825483
- 2026-07-21 — Builder Aaron Mars surfaced **live DefiLlama adapters for AEON token fees, MiroShark token fees and MiroShark x402 API revenue**, turning previously issuer-reported economics into queryable onchain series. At the 20:08 UTC check, AEON's adapter showed **`$261` 24h / `$2,613` 7d / `$12,479` 30d / `$244,372` all-time protocol revenue**; its methodology says 57% of the 1.2% steady-state WETH/AEON pool fee reaches the AEON treasury, 43% reaches launch-platform beneficiaries and none is distributed directly to holders. MiroShark x402 showed **`$13` over 7d, `$92` over 30d and `$219` all-time** at `$1` per run, while token-swap revenue is tracked separately. This materially improves revenue transparency, but beneficiary ownership, treasury transactions, organic-repeat usage and the promised 50% non-trading-revenue buybacks still need verification. Sources: https://x.com/aaronjmars/status/2079630251324297357, https://x.com/aaronjmars/status/2079630362003538090, https://api.llama.fi/summary/fees/aeon?dataType=dailyRevenue and https://api.llama.fi/summary/fees/miroshark-x402-api?dataType=dailyRevenue
- 2026-07-21 — AEON's official **Signed by the Agent** article and canonical docs make the v0.1 attestation claim reproducible: eligible runs sign an immutable output snapshot plus a manifest with skill/model/mode/trigger/commit/run ID/SHA-256 via GitHub Actions OIDC and `actions/attest-build-provenance@v4`, publish to Sigstore/Rekor, and can be checked with `gh attestation verify`. Attestation is off by default, can be enabled globally/per skill, and proves provenance/integrity—not correctness. This materially advances the existing v0.1 catalyst from a high-level signed-log claim to a documented trust boundary, but public attested-run volume, verifier adoption, downstream use and `$aeon` economics remain unmeasured. Sources: https://x.com/aeonframework/status/2079485814958948757, https://www.aeon.fun/blog/signed-by-the-agent and https://github.com/aeonfun/aeon/blob/main/docs/attestation.md
- 2026-07-21 — Official AEON published an ADK integration walkthrough after introducing the **Aeon Developer Kit** on July 17. Canonical `docs/ADK.md` defines a real GitHub-App pattern for revocable per-repository access, skill discovery/dispatch/scheduling, sealed Actions secrets and product-specific skill packs; the July 21 video is education/demo follow-through rather than a second launch. This expands the framework from fork-and-run software into an integration surface, but no external ADK deployment, users, fees or `$aeon` route are disclosed. Sources: https://x.com/aeonframework/status/2078150767836381517, https://github.com/aeonfun/aeon/blob/main/docs/ADK.md and https://x.com/aeonframework/status/2079521415791812821
- 2026-07-11 — Official AEON announced **aeon v0.1** as its first stable release after use by 70 partners. The release adds/rolls up Claude Code, Codex, Grok and OpenCode harnesses; automatic skills and MCP discovery; opt-in Langfuse observability; skill-run attestations that can prove onchain/offchain execution; Open Knowledge Format support; and channel/codebase improvements. Founder/builder Aaron Mars separately described each skill run as producing a GitHub-signed, publicly logged proof. This is a real product/release milestone and closes part of the “live features vs roadmap” question, but adoption, proof-verification docs, public attestation volume, and any `$aeon` value capture remain unmeasured. Sources: https://x.com/aeonframework/status/2075576813850403049, https://x.com/aeonframework/status/2075576816665018716, https://x.com/aaronjmars/status/2074516793800933663, https://github.com/aaronjmars/aeon/releases/tag/v0.1.0

- 2026-07-08 — Official AEON amplified Sparkleware as an ecosystem project: Sparkleware said it is live on Virtuals, tradeable on Robinhood, and positioned as a “holographic registry” for AEON skill packs with community token `0x1dAe71A215eE5C696cb644F030597AE4F32831C0`. Treat as an AEON ecosystem/distribution signal for Skill Packs rather than direct `$aeon` tokenomics; next checks are whether AEON documents Sparkleware in official docs, actual skill-pack usage, and whether any fees/revenue route to AEON. Sources: https://x.com/aeonframework/status/2074777247349645428 and https://x.com/sparklewarefun/status/2074758106644611200

- 2026-07-06 — Official AEON posted the latest community-call recording with roadmap/product items: MiroShark × x402/Base App integration, on-chain affiliation strategy, MiroShark benchmarks/self-evolution, transparency dashboard, BYOK/X subscription as an Aeon provider, skill consolidation, Bankr integration, Telegram upgrades, and metrics for OpenRouter tokens/x402 volume/security stars/autonomous runs. Useful official product/integration update; no new tokenomics or live revenue claims were disclosed. Source: https://x.com/aeonframework/status/2074052227799412882

- 2026-07-03 — Official AEON shared the Jun 25-Jul 2 MiroShark + Aeon shiplog: Aeon hardening PRs #546-554 shipped by default, Claude Sonnet 5 support landed same-day, Telegram slash commands/buttons/deep links went live, skills were consolidated from 187 to 102, Grok Build was in PR as harness #6, private-repo prefetch/self-repair/email skills shipped, and MiroShark x402 paid sims reached 174 paid runs / 34 buyers / $174 volume. This is a substantive product/developer-progress update rather than a direct tokenomics change. Sources: https://x.com/aeonframework/status/2072967389273080130 and https://github.com/aaronjmars/miroshark-aeon/blob/main/articles/shiplog-2026-07-02.md

- 2026-06-23 — Official Aeon said its B1 Token Transparency Filing scored 40/40 on Blockworks and highlighted a Bedrock Foundation structure, golden-share protection, native AEON trading-fee treasury capture, and 50% non-trading-fee revenue buybacks. Source: https://x.com/aeonframework/status/2069473683375005833
- 2026-06-23 — Official Aeon community-call recording covered the consumer distribution push, Packs publishing, DAG executor/security work, x402 endpoints/non-crypto login, partner integrations, and a 1M cumulative GitHub-star milestone. Source: https://x.com/aeonframework/status/2069384845235470828
- 2026-06-19 — AEON official X amplified a Litebeam video about integrating with aeonframework on Base and said the number/quality of projects building with Aeon is rising. Source: https://x.com/aeonframework/status/2068034567995289667
- 2026-06-16 — Official X published blog Entry №003 on agentic commerce: Aeon agents can pay APIs using x402, USDC, and Circle agent wallets; the account also highlighted vulnerability-scanner/security positioning. Source: https://x.com/aeonframework/status/2066911131231293733
- 2026-06-15 — Official X announced Robinhood MCP integration for agent trading/research/rebalancing and Skill Packs for one-click community skills / white-label agent packs. Sources: https://x.com/aeonframework/status/2066616325611405483 and https://x.com/aeonframework/status/2066618089236574670
- 2026-06-15 — Official AEON X shared Community Call #4: multi-provider support, 20 new skills, X402, MCP, Aeon Inc, next-week plans, and agent-project spotlights. Useful product/developer-progress signal, but no tokenomics, funding, or security change was announced. Source: https://x.com/aeonframework/status/2066486735630970954

## Thesis
- AEON is a Base AI-agent/infrastructure token tied to an open-source autonomous agent framework.
- The core narrative is **autonomous agents that run configured recurring workflows without approval loops**, plus a low-cap Base AI token attached to that framework.

## Team
- Main source repo owner: https://github.com/aaronjmars.
- Need more mapping of public builder/core-contributor X accounts.

## Investors
- None confirmed from the sources checked; do not inherit AEON.XYZ / YZi Labs investor claims.

## Twitter/X accounts
- https://x.com/aeonframework
- https://x.com/aaronjmars — founder/builder account tied to the official source repo.

## KOLs
- Needs follow-up; X search showed third-party Base/AI-agent community mentions, but keep them secondary unless they surface material project info.

## Official links
- https://www.aeon.fun/
- https://x.com/aeonframework
- https://github.com/aaronjmars/aeon
- https://t.me/aeon_agent

## Onchain/data resources
- Base token contract: `0xBf8E8f0e8866a7052F948C16508644347c57aba3`
- DexScreener: https://dexscreener.com/base/0xBf8E8f0e8866a7052F948C16508644347c57aba3
- BaseScan: https://basescan.org/token/0xBf8E8f0e8866a7052F948C16508644347c57aba3
- DefiLlama AEON fee/revenue adapter: https://api.llama.fi/summary/fees/aeon?dataType=dailyRevenue
- DefiLlama MiroShark x402 adapter: https://api.llama.fi/summary/fees/miroshark-x402-api?dataType=dailyRevenue

## Docs/blogs
- https://www.aeon.fun/
- https://github.com/aaronjmars/aeon

## Direct Data / KPI Methodology

### KPI questions

| KPI | Why it matters | Best source | Programmatic status | Notes / limitations |
|---|---|---|---|---|
| AEON token-pool fees and treasury revenue | Tests the disclosed native trading-fee capture | DefiLlama AEON fees adapter plus Base transactions | tested_ok | Adapter reads the 57% project share across the historical and current AEON beneficiary wallets and classifies 43% to Bankr/Doppler/interface beneficiaries; wallet control is inferred from project/adapter attribution rather than a legal ownership registry. |
| MiroShark x402 paid runs/revenue | Measures external paid agent usage rather than token turnover | DefiLlama MiroShark x402 adapter plus builder shiplogs | tested_ok | `$1` USDC EIP-3009 settlements make revenue equal to paid runs; aggregate shiplogs confirm recurring buyer cohorts, but wallet-level retention, refunds and compute margin remain private. |
| Non-trading-revenue buybacks | Tests the B1 promise that 50% of non-trading revenue buys AEON | Treasury/buyback transactions and official filing | stale — no execution artifact | The July 8 MiroShark buyback is a separate token-specific claim without a transaction hash. Reopen AEON execution only for a named wallet/transaction or stable adapter. |

### Fetch tests

| Source | Endpoint / method | Status | What it returns | Next step |
|---|---|---|---|---|
| AEON fees | `https://api.llama.fi/summary/fees/aeon?dataType=dailyRevenue` plus `fees/aeon.ts` | tested_ok | Daily/weekly/monthly/all-time treasury-attributed protocol revenue, pool IDs, beneficiary wallets and explicit fee split | Add collector history if AEON becomes a core direct-metrics project; monitor beneficiary changes. |
| MiroShark x402 | `https://api.llama.fi/summary/fees/miroshark-x402-api?dataType=dailyRevenue` plus `fees/miroshark-x402.ts` | tested_ok | Onchain `$1` USDC EIP-3009 API settlements and receiver wallets | Track run/revenue trend; reopen buyer-retention detail only if wallet/cohort data becomes public. |

## Risks
- Name collision: AEON Framework / `$aeon` is separate from AEON.XYZ and legacy AeonCoin.
- Low-cap Base token; market-data metrics are volatile and should be rechecked per scan.
- Need deeper tokenomics / ownership / deployer review before relying on supply, unlock, or insider-allocation assumptions.

## Catalysts

| Catalyst | Status | Evidence / source | Timing | Direct impact | Second-order consequences | What to watch next |
|---|---|---|---|---|---|---|
| aeon v0.1 stable release and skill-run attestations | Confirmed / completed product release; implementation documented | Official AEON v0.1 announcement and feature thread: https://x.com/aeonframework/status/2075576813850403049 and https://x.com/aeonframework/status/2075576816665018716; founder/builder explanation: https://x.com/aaronjmars/status/2074516793800933663; GitHub release: https://github.com/aeonfun/aeon/releases/tag/v0.1.0; official implementation article/docs: https://www.aeon.fun/blog/signed-by-the-agent and https://github.com/aeonfun/aeon/blob/main/docs/attestation.md | Live as of 2026-07-10; implementation article published 2026-07-20 and surfaced 2026-07-21 | Establishes a first stable framework release and a reproducible Sigstore/Rekor provenance path for immutable output snapshots and manifests. | Verifiable agent runs can enable paid verified work, proof-gated onchain actions, and trust between autonomous fleets if developers actually adopt and verify the attestations; signatures prove provenance, not output correctness. | Reproduce `gh attestation verify`, inspect public Rekor/run volume and downstream verifier use, test private-repo plan/failure behavior, and measure active partners/users, fees and `$aeon` buybacks. |
| B1 transparency filing + tokenholder protections / buybacks | Confirmed policy and treasury fee route / AEON buyback execution unverified | Official AEON post says B1 filing scored 40/40 and highlights Bedrock Foundation structure, golden share, treasury fee capture, and 50% non-trading-fee revenue buybacks: https://x.com/aeonframework/status/2069473683375005833; onchain adapter: https://github.com/DefiLlama/dimension-adapters/blob/master/fees/aeon.ts | Published 2026-06-23; routing verified 2026-07-22 | Confirms the 57% token-pool fee route to project-attributed beneficiaries, but not direct holder revenue or execution of the separate non-trading-revenue buyback promise. | Measurable treasury revenue improves diligence; only wallet-mapped AEON purchases would establish tokenholder-directed execution. | Closed as a broad verification item. Reopen buyback execution only for a named wallet/transaction, stable adapter or formal treasury report; monitor beneficiary/contract-control changes routinely. |
| DAG executor, x402 endpoints, ADK, non-crypto login, Packs publishing, and provider/integration expansion | Confirmed / ongoing product-security catalyst | Community Call #5 covered DAG executor/security work and x402 endpoints: https://x.com/aeonframework/status/2069384845235470828; later call added MiroShark × x402/Base App, Bankr, provider and dashboard work: https://x.com/aeonframework/status/2074052227799412882; official ADK launch/docs define GitHub-App authorization, skill dispatch/scheduling, secret handling and product-linked skill packs: https://x.com/aeonframework/status/2078150767836381517 and https://github.com/aeonfun/aeon/blob/main/docs/ADK.md | Ongoing; ADK introduced 2026-07-17 and demoed 2026-07-21 | Expands agent monetization, provider options, safer execution, integrations, consumer onboarding and third-party product embedding. | A working ADK can turn self-owned Aeon forks into a backend for SaaS/vertical agent products; multi-tenant authorization mistakes also create a larger security boundary. | Verify external ADK deployments, tenant-isolation/security reviews, live users, skill dispatch/schedule reliability, endpoint/dashboard metrics, paid usage, incidents and `$aeon` value routing. |
| Robinhood MCP integration | Confirmed / integration catalyst | Official post announced Robinhood MCP support for agentic trading, research, and rebalancing: https://x.com/aeonframework/status/2066616325611405483 | Announced 2026-06-15 | Adds a recognizable financial workflow/integration for AEON agents. | Can attract users building trading/rebalancing agents and expose security/compliance constraints. | Watch live demos, user adoption, permissioning safeguards, API limits, and additional MCP integrations. |

## Open questions
- What are exact tokenomics, supply schedule, deployer/owner privileges, and holder concentration?
- Which features are live in repo versus marketing site claims?
- Who are the core builders and official secondary accounts?
- Are there real external users/agents built on AEON beyond community claims?
- Aggregate MiroShark x402 shiplogs confirm repeat paid cohorts, but what are wallet-level retention, compute margin and any direct AEON linkage? The 50% AEON buyback policy still lacks a named execution wallet/transaction; reopen only on a concrete artifact.

## Watch triggers
- Official launch/release notes and STRATEGY.MD updates.
- GitHub commits/releases and new skills/categories.
- Contract ownership/liquidity/holder concentration changes.
- Major third-party integrations or serious public security issues.

---
