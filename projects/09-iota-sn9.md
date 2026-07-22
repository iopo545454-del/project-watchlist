---
status: active
watchlist: crypto-projects
last_updated: 2026-07-22T00:38:50Z
---

# IOTA — Macrocosmos Bittensor Subnet 9

## Overview

- **IOTA** here means Macrocosmos' **Incentivised Orchestrated Training Architecture**, Bittensor Subnet 9—not the separate IOTA L1/network.
- SN9 coordinates heterogeneous, permissionless machines into a data- and pipeline-parallel model-training system. An orchestrator assigns model layers, miners process activations and update weights, and validators spot-check contribution quality for proportional subnet rewards.
- The core investment question is whether open-internet, interruptible commodity hardware can approach centralized training quality and useful speed at a meaningfully lower cost—and whether those technical gains create durable demand for SN9 alpha rather than only emissions-driven supply.
- The primary live surfaces are the IOTA dashboard, the open-source `macrocosm-os/iota` repository, Train at Home, published technical work, and Project Orion / Orion-100B milestones.

## Latest scan notes

- **2026-07-22 — Versioned repository update / stale-project check.** The official repository advanced from `v4.6.1` to tags `v4.6.5` and **`v4.7.0`** on July 21. The four-commit comparison changes 14 files, primarily migrating wallet/keypair imports to `bittensor-wallet`, bumping Bittensor from `9.9.0` to `10.3.2`, updating `bittensor-cli` and async-substrate dependencies, and adapting renamed Bittensor classes. This is concrete maintenance/compatibility progress, not the teased Orion model release: it adds no checkpoint, benchmark, paid-run evidence, dashboard API, reward change or SN9 value-capture result. Sources: https://github.com/macrocosm-os/iota/tree/v4.7.0 and https://github.com/macrocosm-os/iota/compare/v4.6.1...v4.7.0
- **2026-07-15 — Project Orion next-stage signal.** Macrocosmos co-founder/CTO `@macrocrux` said Orion-100B runs at **65% of centralized-training speed** on cheaper commodity hardware, said internal convergence tests reach the same quality as centralized training under distributed/interruptible/open-internet conditions, and teased the next model release “very soon.” This is useful founder-reported technical/catalyst evidence, not an independently reproduced cost/quality result or a dated release. Source: https://x.com/macrocrux/status/2077493082388324483
- **2026-07-15 — Substantive stale-project check.** The official IOTA repository remains active and unarchived, with the newest code tag/commit at `v4.6.1` on 2026-06-26; the public site, dashboard, Train at Home docs and arXiv primer remain reachable. No newer tagged code, GitHub release, public cost breakdown, independently reproduced Orion benchmark, or stable machine-readable dashboard endpoint was found. Sources: https://github.com/macrocosm-os/iota, https://iota.macrocosmos.ai/dashboard/mainnet and https://arxiv.org/abs/2507.17766
- **2026-07-08 — Train at Home telemetry.** Official IOTA_SN9 showed live Train at Home runs with stable loss reduction on consumer-grade Apple hardware and cited 217 devices across 22 countries. This supports the heterogeneous-compute thesis, but still needs dashboard history, reward economics, retention and independent quality checks. Sources: https://x.com/IOTA_SN9/status/2074886501125787897 and https://x.com/IOTA_SN9/status/2074886481286697058
- **2026-06-22 — ResBM / research distribution.** Official IOTA_SN9 said AI Research Lead Dr. Alan Aboudib presented Residual Bottleneck Models at the Pluralis Protocol Learning Workshop, framing ResBM as the low-bandwidth pipeline-parallel backbone for Train at Home and Orion-100B. Sources: https://x.com/IOTA_SN9/status/2069097814873821657 and https://x.com/MacrocosmosAI/status/2069086571958067257

## Thesis

### Investor / market theses

| Source | Who/affiliation | TLDR of the case | Relevance |
|---|---|---|---|
| https://x.com/markjeffrey/status/2063127184173392219 | Mark Jeffrey / partner at Bittensor Fund, Stillcore Capital; Hash Rate host | A live Proof of Talk demo used 5 TAO to start a distributed pretraining run within minutes, which Jeffrey framed as liquid, fault-tolerant, on-demand training and an “Airbnb for hardware” moment. | High-signal Bittensor-investor validation of the demand/supply experience, but it is one demo and does not establish cost advantage, repeat buyers, model quality or SN9 returns. |
| https://taodaily.io/128-strangers-5-minutes-5-tao-one-model/ | Tao Daily / third-party Bittensor ecosystem coverage | The demo case is that a buyer can summon globally distributed training capacity quickly while contributors earn for otherwise idle hardware. | Useful product-distribution framing; validate every performance/economic claim with IOTA dashboard, code and buyer/reward data. |

### Hermes take

> **2026-07-15 —** SN9 is one of the few decentralized-training bets with a real technical surface: open code, a live dashboard, consumer participation and a concrete 100B-scale target. The setup matters if Orion can publish reproducible quality, speed and cost results while Train at Home retains contributors without overpaying emissions. Until then, “65% of centralized speed” is a strong demo claim—not a business. Watch paid training demand and cost per useful token; those decide whether SN9 is infrastructure or an elaborate subsidy loop.

## Team / contributors

- **Macrocosmos** — builder/operator across IOTA/SN9 and other Bittensor subnets.
- `@macrocrux` — Macrocosmos co-founder/CTO and a primary technical/roadmap voice.
- Dr. Alan Aboudib — publicly identified AI Research Lead around IOTA, Orion and ResBM.
- Felix Quinque, Szymon Fonau, Rodrigo Lopez Portillo Alcocer, Brian McCrindle and Steffen Cruz — named authors on the IOTA technical primer; verify current operating roles from official team material before treating all as current core contributors.

## Token / contract notes

- IOTA/SN9 exposure is the **Bittensor Subnet 9 alpha asset and pool**, not the unrelated IOTA L1 token and not an ERC-20/SPL contract.
- Track alpha price, market cap/pool depth, emissions, validator stake and miner rewards through canonical Bittensor data surfaces. Do not treat alpha pool value as equity value or normal fully diluted market cap.
- No separate IOTA project token or contract is documented in the official IOTA repository/site reviewed here.
- The economic gap is explicit: published training progress does not by itself prove external paid demand, reward sustainability, or value capture net of subnet emissions.

## Catalysts

| Catalyst | Status | Evidence / source | Timing | Direct impact | Second-order consequences | What to watch next |
|---|---|---|---|---|---|---|
| Project Orion next-stage model release | Tentative / watch | Macrocosmos co-founder/CTO says the next model release is coming “very soon” after Orion-100B work: https://x.com/macrocrux/status/2077493082388324483 | No firm date; first surfaced 2026-07-15 | Could provide a new checkpoint/report for testing distributed quality, speed and cost claims. | A reproducible result could attract buyers, miners and validator capital; another issuer-only benchmark would add narrative without resolving economics. | Watch official checkpoint/report/code, architecture, evals, cost, wall-clock speed, hardware mix and third-party reproduction. |
| Orion-100B distributed pretraining proof point | Confirmed project / ongoing technical program | Official Macrocosmos announcement and founder follow-up: https://x.com/MacrocosmosAI/status/2061493162582118695 and https://x.com/macrocrux/status/2077493082388324483 | Ongoing; next release date unknown | Tests whether SN9 can coordinate economically useful 100B-scale training over commodity hardware and the open internet. | Success could expand buyer demand and hardware supply; failure to publish cost/quality evidence would weaken the liquid-training thesis. | Reproduce the claimed 65%-of-centralized speed, equivalent convergence and “fraction of cost” with methodology and independent tests. |
| Train at Home public contributor app | Confirmed / ongoing | Official site/docs say macOS participation is open and rewards can be paid to a wallet: https://iota.macrocosmos.ai/ and https://docs.macrocosmos.ai/product-and-services/tah/faqs | Live on macOS; Linux described as following, Windows not on roadmap | Expands compute supply to consumer/prosumer hardware and lowers contributor friction. | A large retained fleet could improve fault tolerance and cost; unreliable hardware or uneconomic rewards could increase orchestration overhead and sell pressure. | Track active/retained devices, countries, tokens processed, uptime, reward distribution, minimum payout, Linux release and reward sustainability. |
| IOTA dashboard and open-source training stack | Confirmed / ongoing | Dashboard, repository, current tag and primer: https://iota.macrocosmos.ai/dashboard/mainnet, https://github.com/macrocosm-os/iota, https://github.com/macrocosm-os/iota/tree/v4.7.0 and https://arxiv.org/abs/2507.17766 | Live; latest code tag `v4.7.0` dated 2026-07-21 as of this review | Makes miner/validator mechanics and some training progress inspectable; v4.7.0 is chiefly a Bittensor wallet/API compatibility update. | Stable machine-readable history and reproducible releases could improve underwriting; maintenance tags without model/economic artifacts do not prove demand. | Discover a stable dashboard API, archive run history, monitor tags/commits and verify model checkpoints/evals. |
| P2P activation transfer and spot-check auditing | Confirmed / completed code release | Official GitHub release `v3.0.0`: https://github.com/macrocosm-os/iota/releases/tag/v3.0.0 | Released 2026-03-09; later tags exist | Moves intermediate activation traffic from S3 to miner-to-miner transfer with BLAKE3 integrity checks and default 1% cloud spot checks. | Lower latency/cloud cost can improve distributed-training economics, while limited sampling creates a security/false-acceptance question. | Inspect later-version behavior, adversarial tests, audit coverage, failure rates and measured cost/latency savings. |

## Risks

- **Issuer-reported performance:** the 65%-of-centralized-speed, equal-convergence and lower-cost claims need full methodology and independent reproduction.
- **Orchestrator/validator concentration:** a distributed miner fleet can still depend on centralized scheduling, data, checkpoints, reward logic or validator control.
- **Economics before demand:** subnet emissions can recruit hardware without proving external buyers or positive unit economics.
- **Heterogeneous-network bottlenecks:** WAN latency, device churn, activation compression and stragglers can erase cheap-hardware savings at larger scales.
- **Security and attribution:** spot checks, contribution scoring and interdependent pipeline work must resist corrupted activations, collusion, gaming and false credit.
- **Asset confusion/liquidity:** SN9 alpha is not the IOTA L1 token; alpha pool structure and Bittensor mechanics can create material liquidity/reflexivity risk.

## Open questions

- Can Macrocosmos publish and third parties reproduce Orion-100B's claimed model quality, 65%-of-centralized speed and total cost per useful training token?
- Who is paying for training, how many runs are externally funded, and what are repeat demand, revenue and gross margin after contributor rewards and infrastructure costs?
- How many Train at Home devices are active and retained by cohort, what useful work do they contribute, and how concentrated are rewards?
- How decentralized are orchestration, data hosting, validator control, checkpoint custody and upgrade authority?
- What percentage of malicious/corrupt work can the sampling and scoring system detect, and what are measured false-acceptance/false-rejection rates?
- How do SN9 emissions, validator stake and alpha liquidity compare with delivered training work and external revenue?
- When will the next Orion model/checkpoint ship, and will it include code, evals, cost data and reproducible artifacts?

## Sources / Research Inputs

| Information source | Context about the source |
|---|---|
| https://x.com/IOTA_SN9 | Official IOTA/SN9 account; training runs, Train at Home and research updates. |
| https://x.com/MacrocosmosAI | Official Macrocosmos account; cross-product and Project Orion announcements. |
| https://x.com/macrocrux | Macrocosmos co-founder/CTO; technical and roadmap claims that require later artifact verification. |
| https://iota.macrocosmos.ai/ | Official IOTA site; Train at Home, dashboard, docs and whitepaper entry point. |
| https://iota.macrocosmos.ai/dashboard/mainnet | Official live dashboard; miner/layer/training/validator surface, but no stable public API was confirmed in this scan. |
| https://docs.macrocosmos.ai/product-and-services/tah | Official Train at Home product documentation. |
| https://docs.macrocosmos.ai/product-and-services/tah/faqs | Official participation, platform, wallet, reward and payout FAQ. |
| https://github.com/macrocosm-os/iota | Official open-source IOTA code, tags, commits, miner/validator setup and design docs. |
| https://github.com/macrocosm-os/iota/releases/tag/v3.0.0 | Official P2P activation-transfer/integrity/spot-check release details. |
| https://arxiv.org/abs/2507.17766 | IOTA technical primer; architecture, compression, contribution scoring and preliminary results. |
| https://macrocosmosai.substack.com/ | Official long-form Macrocosmos research/thesis publication surface. |
| https://taostats.io/subnets/9 | Third-party Bittensor subnet market, emissions, stake and participant data; verify methodology/API availability. |
| https://taomarketcap.com/ | Third-party Bittensor subnet market/pool context. |
| https://x.com/markjeffrey/status/2063127184173392219 | Bittensor Fund partner's firsthand market-thesis account of a paid on-demand training demo. |

## Direct Data / KPI Methodology

### KPI questions

| KPI | Why it matters | Best source | Programmatic status | Notes / limitations |
|---|---|---|---|---|
| Externally paid training runs / revenue | Distinguishes buyer demand from emissions-funded compute supply | Official run ledger/API or auditable payment transactions | manual_only | No stable public revenue/run-payment endpoint was found; one 5-TAO demo does not establish recurring demand. |
| Training quality, speed and total cost | Direct test of the liquid-training thesis | Published checkpoint/evals plus reproducible run logs | partial | Official code/paper and founder claims exist; Orion-100B quality/speed/cost claims are not independently reproduced. |
| Active miners/devices, retention and hardware mix | Measures usable supply and decentralization | IOTA dashboard / Train at Home dashboard | partial | Live dashboard is public, but a stable machine-readable endpoint and historical cohort series were not confirmed. |
| Useful tokens/work processed and run progress | Connects fleet size to delivered model-training output | IOTA dashboard and run artifacts | partial | Screen-visible telemetry is useful; archiveable API/history and metric definitions are needed. |
| SN9 emissions, alpha market cap/liquidity and validator stake | Shows subsidy intensity, market access and security concentration | Bittensor chain/indexer; Taostats | manual_only | Public frontends exist, but no tested collector endpoint is configured in this repo. Alpha pool value is not normal FDV. |
| Reward distribution / concentration | Tests whether contributors are fairly rewarded and whether supply is sustainable | Bittensor chain data plus official reward logic | partial | Docs describe contribution factors and payouts; wallet-level distribution and concentration are not integrated. |
| Code/release cadence | Tracks implementation progress and whether announced work ships | GitHub API | tested_ok | Public commits/tags/releases are machine-readable; repository activity alone does not prove usage or model quality. |

### Fetch tests

| Source | Endpoint / method | Status | What it returns | Next step |
|---|---|---|---|---|
| GitHub repository | `https://api.github.com/repos/macrocosm-os/iota` plus `/commits`, `/tags`, `/releases` | tested_ok | Repository status, latest push, commits, tags and release notes | Add a lightweight release/commit freshness collector if this KPI is rolled into the dashboard. |
| Official dashboard | `https://iota.macrocosmos.ai/dashboard/mainnet` | partial | Live dashboard HTML/app shell is reachable | Identify underlying API/websocket and metric definitions; test stability before collector integration. |
| Train at Home docs | `https://docs.macrocosmos.ai/product-and-services/tah/faqs` | tested_ok | Participation/platform/reward methodology in public HTML | Use for methodology changes, not as a live KPI source. |
| IOTA paper | `https://arxiv.org/abs/2507.17766` | tested_ok | Paper metadata and technical abstract; PDF is public | Track revisions and independent citations/replications; do not treat preliminary results as live KPIs. |
| Taostats SN9 | `https://taostats.io/subnets/9` | manual_only | Public subnet market/validator/miner context | Find a documented public/indexer endpoint or use Bittensor RPC before integrating. |

## Monitoring notes

- Prioritize official IOTA/Macrocosmos X, `@macrocrux`, the IOTA repository/tags, official dashboard, Train at Home docs and model artifacts.
- Log Orion releases, checkpoint/eval publications, incentive/scoring changes, validator/miner changes, security findings and external paid-run evidence.
- Treat device counts, speed, quality, cost and revenue as issuer-reported until the dashboard/API or independent artifact supports them.
- Keep SN9/IOTA nomenclature explicit to avoid confusion with the separate IOTA L1 asset.
