---
status: active
watchlist: crypto-projects
last_updated: 2026-07-23T07:05:58Z
---

# Ambient

## Overview

Ambient is an SVM-compatible Proof-of-Work L1 for **verified AI inference**. The project frames itself as “Machine Intelligence as Currency”: miners perform useful inference work, users receive OpenAI-compatible AI outputs plus cryptographic receipts, and the chain verifies that a specific model ran on a specific prompt/output at a specific time.

- **Token:** No official mainnet token contract or TGE found. Intake says token not out. Testnet references to AMB/credits should not be treated as a launched mainnet token.
- **Core product / system:** Ambient app/testnet, OpenAI-compatible model/API surface, Proof of Logits verified-inference mechanism, SVM-compatible onchain access, and eventual permissionless inference mining.
- **Team / public contributors:** `@ambient_xyz` official; `@IridiumEagle` is Travis Good, CEO/co-founder and useful primary technical/thesis account.
- **Positioning:** a crypto-AI infrastructure bet on useful PoW and inference provenance: Ambient matters if verified inference becomes a real buyer need for agents, enterprises, compliance, and onchain AI workflows.

## Latest scan notes

- 2026-07-23 — Dedicated verification **confirmed Ambient's live provider-usage and auction-code surfaces while closing the broad queue item**. OpenRouter's provider page exposes 90 daily rows from April 25 through July 23: June 14 carried **13.111B tokens** (9.568B Kimi K2.7) and July 3 peaked at **24.148B**, independently supporting the order of magnitude behind Ambient's `13.2B`-day claim; June 15 itself shows 11.619B, so the exact issuer number is approximate/date-bound rather than an exact daily match. Ambient's public API now lists 20 priced models, and the official mining page says curated-wave testnet providers receive `AMB` per verified request. Public `auction-api` / `auction-client` / `auction-listener` repositories implement a reverse auction, lamport escrow, clearing price, accepted-output-token accounting, verifier disputes and winner payout; their declared `Auction111…` program has no Solana mainnet/devnet account or signatures, so this is inspectable code—not proof of a public live settlement ledger. No final supply/allocation/TGE, public miner/revenue ledger, Proof-of-Logits implementation, independent security audit or measured PoL overhead was found; the miner benchmark tests ordinary TTFT/throughput and its reference numbers are not a PoL benchmark. Do not carry the omnibus check forward; reopen individual gaps only for a canonical deployed program, public revenue/miner API, final tokenomics or independent PoL artifact. Sources: https://openrouter.ai/provider/ambient, https://api.ambient.xyz/v1/models, https://ambient.xyz/mining/, https://github.com/ambient-xyz/auction-api, https://github.com/ambient-xyz/auction-listener and https://github.com/ambient-xyz/ambient-miner-benchmark
- 2026-07-20 — Official Ambient published a two-diagram **Proof of Logits** explainer that makes the claimed mechanism more concrete: each generated token produces a logit vector and progress-marker hash; the ordered hashes form a stream fingerprint, while a validator samples a random marker, re-runs one token and compares the derived hash at roughly `1/N` of the illustrated miner work. The diagrams help define the implementation claim but remain issuer educational material, not a proof or benchmark: they do not specify secure randomness/commitment, canonical logit encoding, attack bounds, code, validator decentralization, slashing or measured overhead. Sources: https://x.com/ambient_xyz/status/2079112248933659015 and https://x.com/ambient_xyz/status/2079114683727200751
- 2026-07-15 — Galaxy Research gave Ambient its first substantial independent market thesis in the dossier: user-paid inference jobs are auctioned to miners, protocol rewards can subsidize bids, and Proof of Logits is intended to verify model execution with very low overhead. Galaxy's conclusion is also the central unresolved risk: Ambient has not published final tokenomics or shown that inference buyers must create token demand, so miner emissions may still become sell pressure unless organic paid usage and native payment demand close the loop. This is third-party analysis, not an independent audit of the claimed roughly 0.1% verification overhead. Source: https://www.galaxy.com/insights/research/inference-capital-markets-ai-compute-gpu-futures-onchain-crypto
- 2026-07-13 — Official Ambient clarified that its live testnet validator proves **model execution**, not answer truth: it re-runs one selected output position and compares the resulting model fingerprint, while task quality and outcome correctness remain separate evaluation layers. This adds implementation-level context to Proof of Logits, but not independent security validation; sampling strategy, false-acceptance bounds, adversarial robustness, validator decentralization and overhead remain open. Sources: https://x.com/ambient_xyz/status/2076747190270410790 and https://x.com/ambient_xyz/status/2076757555573837931
- 2026-07-06 — Ambient CEO/co-founder Travis Good published a long-form thesis arguing frontier AI is getting cheaper/more reproducible, closed-lab scarcity narratives are fragile, and verified inference can become a credibly neutral trust layer for open agentic AI. Official Ambient amplified it as one of the most important articles of the past year; this is strong founder-market framing for Ambient’s Proof-of-Logits thesis, not a mainnet/tokenomics update. Sources: https://x.com/i/status/2074190855590859170 and https://x.com/ambient_xyz/status/2074191141566910530
- 2026-06-23 — Official Ambient promoted the desktop app with a planning-mode demo where the agent generates and iteratively improves a Tetris game, adding distribution/product evidence for the verified-inference desktop workflow. Source: https://x.com/ambient_xyz/status/2069419113378984222
- 2026-06-22 — CEO `@IridiumEagle` said Ambient's Kimi 2.7 Coder model is live and top of the charts on OpenRouter, and official `@ambient_xyz` posted a portability/open-model thread saying Ambient has open pinned weights and Proof-of-Logits receipts for every answer; useful product/usage signal, still not tokenomics or mainnet. Sources: https://x.com/IridiumEagle/status/2069102505913704537 and https://x.com/ambient_xyz/status/2069092414112116856
- 2026-06-22 — Official `@ambient_xyz` said Ambient Desktop updates are shipping non-stop and pointed users to the installation/getting-started guide; useful docs/product-distribution signal for the Desktop surface, but no mainnet/tokenomics update. Source: https://x.com/ambient_xyz/status/2068927797960245677
- 2026-06-21 — CEO `@IridiumEagle` highlighted Ambient Desktop at `desktop.ambient.xyz`, emphasizing Docker/Podman process isolation and secret management; useful product-security positioning for a local agent/inference surface, but not a formal mainnet/token update. Source: https://x.com/IridiumEagle/status/2068599053559165199
- 2026-06-21 — CEO `@IridiumEagle` showed Ambient Desktop running GLM 5.2 to train a small ML model end-to-end from a paper, plus replied that Ambient raised modest funds with long-term funder allocations; useful product-depth and token-distribution context, but still not a mainnet/tokenomics announcement. Source: https://x.com/IridiumEagle/status/2068543690164023415
- 2026-06-19 — Ambient official X explained its verified-inference economics: avoid rented-inference vendor lock-in with open/auditable onchain model weights, network competition to lower prices, and Proof-of-Logits receipts for verifiable work. Source: https://x.com/ambient_xyz/status/2067978526003974527
- 2026-06-16 — CEO promoted app.ambient.xyz signups as an alternative inference service and offered a free full-year, month-to-month plan, a go-to-market adoption push after the Desktop/testnet reveal. Source: https://x.com/IridiumEagle/status/2066768723516797340
- 2026-06-16 — CEO `@IridiumEagle` clarified Ambient testnet economics/security: staking is disabled, miners earn inflation and transaction rewards by performing verified inference, and contribution-weighted work drives transaction ordering/voting; this upgrades the useful-PoW/tokenomics watch item, but mainnet/token details remain unannounced. Source: https://x.com/IridiumEagle/status/2066709825183232207
- 2026-06-15 — Official/CEO thread launched Ambient Desktop for Mac/Windows/Linux, subscription plans and x402 support, while claiming a 13.2B-token daily inference record via OpenRouter; usage numbers still need independent verification. Source: https://x.com/i/status/2066565401593659724
- 2026-06-14 — Intake issue #2 added Ambient to the dashboard and initial review found official website/docs/litepaper, testnet/app, verified-inference pages, funding announcement, and CEO thesis/status posts. Source: https://github.com/iopo545454-del/project-watchlist/issues/2
- 2026-06-14 — CEO `@IridiumEagle` claimed Ambient testnet is serving billions of tokens per day and is available through the app/OpenRouter; logged as a project/CEO claim to verify externally, not a durable usage fact. Source: https://x.com/IridiumEagle/status/2065922292975288754

## Thesis

### Investor / market theses

| Source | Who/affiliation | TLDR of the case | Relevance |
|---|---|---|---|
| https://www.galaxy.com/insights/research/inference-capital-markets-ai-compute-gpu-futures-onchain-crypto | Lucas Tcheyan / Galaxy Research | Galaxy argues Ambient's paid-job auction can direct emissions into cheaper verified inference instead of idle hashrate, while Proof of Logits samples a model fingerprint to verify execution cheaply. The report's bear case is that buyer demand for trust-minimized inference is still small and no published token design yet forces usage into token demand. | Strong independent statement of both the useful-PoW flywheel and its failure mode: organic paid jobs and token demand must eventually outrun miner emissions/sell pressure. |
| https://x.com/ambient_xyz/status/1912524000586264704 | Official funding announcement | Ambient announced a $7.3M round led by a16z crypto CSX, Delphi Ventures, and Amber Group, with other crypto/infra investors and Solana co-founder angels cited. | Funding roster gives early credibility and puts Ambient in the crypto-AI / verified-inference market map. |
| https://ambient.xyz/Ambient_Litepaper_V1.pdf | Official litepaper | Ambient argues zkML, optimistic verification, and TEEs are too costly/slow/trust-heavy for large-model inference; Proof of Logits is presented as a low-overhead alternative for verifying 600B+ model inference. | This is the core technical thesis to validate; if wrong, the project loses its differentiator. |
| https://x.com/IridiumEagle/status/2014399588766253517 | Travis Good / CEO-cofounder | CEO frames Ambient as “Uber for Inference” and useful Proof-of-Work: miners do commercially valuable AI inference rather than waste hash work. | Useful founder-market framing for why a tokenized PoW network could have real demand rather than pure emissions. |
| https://x.com/i/status/2074190855590859170 | Travis Good / Ambient CEO-cofounder long-form thesis | Argues open/cheap frontier models and fragile closed-lab scarcity narratives make verified inference/provenance a key trust layer for an open agentic economy. | Useful market-structure framing for why Ambient’s Proof-of-Logits receipts might matter if buyers demand tamper-proof, credibly neutral inference. |

### Hermes take

> Ambient has a sharp pitch: make PoW useful by turning mining into verifiable inference supply. The important question is not whether “AI + SVM + PoW” sounds good — it is whether Proof of Logits is independently credible and whether buyers care enough about receipts to pay above centralized inference. Until mainnet/tokenomics are public, this is a strong watchlist candidate but not yet a token story.

## Catalysts

| Catalyst | Status | Evidence / source | Timing | Direct impact | Second-order consequences | What to watch next |
|---|---|---|---|---|---|---|
| Ambient testnet live | Confirmed | Official site/app and testnet thread: https://ambient.xyz and https://x.com/ambient_xyz/status/1999168669641789680 | Live | Gives users/builders a working app/API surface and receipts before mainnet. | Sustained testnet usage could build miner/user demand ahead of a token launch. | Watch app availability, API usage, receipt verification, OpenRouter availability, and public testnet stats. |
| Permissionless inference mining / useful-PoW consensus | Tentative | Testnet thread plus CEO technical replies: https://x.com/ambient_xyz/status/1999168669641789680 and https://x.com/IridiumEagle/status/2066709825183232207 | Live testnet / phased rollout | Opens supply side beyond controlled operators and tests useful-PoW economics; CEO says staking is disabled and miners earn rewards/ordering influence by verified inference work. | A credible miner program could attract GPU owners and DePIN/PoW capital; delays or weak verification would weaken the decentralization claim. | Watch official miner docs, hardware requirements, onboarding, rewards, public miner counts, and whether consumer GPUs actually participate. |
| Mainnet / tokenomics / TGE | Speculative | Official Ambient site/testnet source; no tokenomics contract published there yet: https://ambient.xyz | Unknown | Would convert the research/product story into a tradable asset and define value capture. | Token design will determine whether inference revenue, miner rewards, burns, or staking create demand/supply pressure. | Watch official X/docs for token ticker, contract, allocation, launch date, and fake-contract warnings. |
| Proof of Logits technical validation | Tentative / ongoing | Official verified-inference explainer/litepaper, testnet-validator clarification and sequential-hash/progress-marker diagrams: https://ambient.xyz/verified-inference, https://ambient.xyz/Ambient_Litepaper_V1.pdf, https://x.com/ambient_xyz/status/2076747190270410790, https://x.com/ambient_xyz/status/2076757555573837931, https://x.com/ambient_xyz/status/2079112248933659015 and https://x.com/ambient_xyz/status/2079114683727200751 | Live testnet mechanism; independent validation ongoing | Determines whether Ambient can prove a named model executed with low overhead, while explicitly not proving that its answer is true. The new diagrams claim ordered per-token logit/progress hashes and random one-marker re-derivation at approximately `1/N` of miner work. | Independent audits/benchmarks would materially upgrade credibility; predictable sampling, ambiguous encoding or weak adversarial assumptions could make receipts insufficient for high-value settlement. | Watch code, commitment/randomness design, canonical logit encoding, false-acceptance bounds, validator count/independence, slashing/challenge docs, measured overhead, audits and adversarial reviews. |
| Enterprise/agent API adoption | Confirmed live provider usage / revenue quality unresolved | OpenRouter's provider page exposes daily Ambient-routed token history and priced model routes; Ambient's API exposes 20 models and prices: https://openrouter.ai/provider/ambient and https://api.ambient.xyz/v1/models | Ongoing; verified 2026-07-23 | Confirms a large live inference surface: 13.111B tokens on June 14 and a 24.148B peak on July 3, with Kimi K2.7 dominant. | Large routed volume strengthens distribution evidence, but token counts and posted prices do not prove organic paid demand, Ambient net revenue, margin or AMB value capture. | Reopen economics only for request/revenue/customer cohorts, discounts/credits, provider payouts and AMB-linked settlement; continue tracking OpenRouter route volume. |

## Token / contract notes

- No official mainnet token contract, TGE, or tokenomics/allocation was found during the initial review.
- Testnet references to AMB/credits/drops are not a mainnet token confirmation.
- Treat any third-party contract, airdrop, or listing claim as unverified until posted by `@ambient_xyz`, official docs, or a canonical official contract page.

## Sources / Research Inputs

| Information source | Context about the source |
|---|---|
| https://ambient.xyz | Official website; describes Ambient as an SVM-compatible useful-PoW L1 for verified AI inference; links app/docs/litepaper/investors. |
| https://app.ambient.xyz | Official app/testnet surface to monitor for product availability and receipts. |
| https://docs.ambient.xyz | Official docs hub; monitor for miner, testnet, mainnet, token, and developer updates. |
| https://ambient.xyz/about | Official mission/about page for Solana SVM compatibility, PoW design, and long-term onchain AI model vision. |
| https://ambient.xyz/verified-inference | Official explainer defining verified inference and Proof of Logits; notes it proves execution provenance, not factual truth. |
| https://ambient.xyz/models | Official model page; lists OpenAI-compatible models/pricing and is useful for tracking product scope. |
| https://ambient.xyz/pricing | Official pricing page for web chat / credits / Ambient Desktop coding. |
| https://ambient.xyz/Ambient_Litepaper_V1.pdf | Official litepaper; SVM-compatible PoW L1, Proof of Logits, 600B+ model framing, and critique of zk/TEE/optimistic verification. |
| https://x.com/ambient_xyz | Official X; primary source for testnet, funding, token warnings, mining, and mainnet announcements. |
| https://x.com/ambient_xyz/status/1912524000586264704 | Official funding announcement for $7.3M led by a16z crypto CSX, Delphi Ventures, and Amber Group. |
| https://x.com/ambient_xyz/status/1999168669641789680 | Official testnet thread covering app/API, receipts, SVM-compatible contracts, and phased mining. |
| https://x.com/ambient_xyz/status/2063585763522949178 | Official technical post explaining Proof of Logits vs zkML and the low-overhead verification framing. |
| https://x.com/IridiumEagle | Travis Good / CEO-cofounder account to monitor for thesis, technical explainers, usage claims, and roadmap hints. |
| https://x.com/IridiumEagle/status/2014399588766253517 | CEO thesis post framing Ambient as decentralized/permissionless verified inference / “Uber for Inference.” |
| https://x.com/IridiumEagle/status/2065922292975288754 | CEO usage/status claim about testnet tokens per day and app/OpenRouter availability; needs external verification. |
| https://x.com/i/status/2074190855590859170 | CEO/co-founder long-form market thesis on open models, AI-capex fragility, and verified inference as a neutral trust layer; useful for tracking Ambient narrative, not a token launch source. |
| https://www.galaxy.com/insights/research/inference-capital-markets-ai-compute-gpu-futures-onchain-crypto | Galaxy Research's 2026-07-13 independent Ambient thesis; useful-PoW auction, Proof-of-Logits economics, demand limits and unresolved token-value loop. |
| https://openrouter.ai/provider/ambient | Independent machine-readable/rendered provider history; daily Ambient-routed tokens by model and current priced routes. |
| https://api.ambient.xyz/v1/models | Official unauthenticated model/pricing endpoint; returned 20 models at verification. |
| https://ambient.xyz/mining/ | Official miner onboarding/economics page; says testnet operators join in curated waves and receive AMB per verified request. |
| https://github.com/ambient-xyz/auction-api | Official public reverse-auction account/instruction definitions; inspectable settlement/verifier plumbing, not proof of public deployment. |
| https://github.com/ambient-xyz/ambient-miner-benchmark | Official capacity benchmark for TTFT, throughput and concurrency; does not measure Proof-of-Logits overhead/security. |

## Open questions

- When is mainnet, and will there be a token launch/TGE? No official date found.
- What is the final token ticker, contract, emission schedule, allocation, and fee/value-capture design? CEO replies indicate testnet rewards are inflation/transaction based and staking is disabled, but final mainnet tokenomics are still unknown.
- How open is mining today, and when does it become permissionless for consumer GPUs?
- What exact security assumptions make Proof of Logits safe enough for enterprise/agent settlement use?
- How is the validator's selected output position chosen, what are the fingerprint/false-acceptance bounds, and can adversarial miners predict or game re-derivation sampling?
- Is the production strategy one canonical 600B+ model, multiple OpenAI-compatible models, or both?
- OpenRouter now independently verifies the magnitude of Ambient-routed token volume, but what share is organic/paid after credits or incentives, what net revenue/margin reaches Ambient/providers, and does any settlement create AMB demand? Reopen only for a public request/revenue/miner ledger or wallet/chain-mapped settlement.
- The public auction repositories define reverse-auction and verifier-dispute plumbing, but `Auction111…` is not deployed on Solana mainnet/devnet and no canonical Ambient-chain RPC/program address was found. Reopen deployment verification only for an official RPC, explorer/program ID, live auction accounts and settlement history.

## Monitoring notes

- Prioritize official X, docs, litepaper changes, app/testnet status, and CEO posts.
- Watch for mainnet/tokenomics, fake-contract warnings, miner onboarding, audits, and independent Proof-of-Logits reviews.
- Keep CEO usage numbers as project claims until backed by a dashboard, customer/integration post, or machine-readable metrics.
- Track model/pricing page changes because they reveal whether Ambient is becoming an inference API product, a chain, or both.
