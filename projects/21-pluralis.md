---
status: active
watchlist: crypto-projects
last_updated: 2026-07-23T04:18:01Z
---

# Pluralis

## Overview

Pluralis is a decentralized AI research lab building **Protocol Learning**: collectively-owned foundation models trained and served by distributed contributors instead of a single closed lab. The live system to watch is **Agora**, a public decentralized pipeline-parallel training run for an 8B-parameter model using contributor GPUs over the public internet.

- **Token:** No official token or contract found. Intake says token not out; Pluralis currently talks about contributor scores/points, shared ownership, and protocol-owned models, not a launched crypto asset.
- **Core product / system:** Agora / Pluralis-8B decentralized pretraining run, docs, dashboard, and public research/code around asynchronous model-parallel training.
- **Team / public contributors:** `@Pluralis` official; `@AlexanderLong` appears to be a founder/primary spokesperson; `@hmdolatabadi`, `@ChaminHewa`, and `@tsnewnami_` are useful research/engineering accounts to monitor. `@jbrukh` is investor-side CoinFund commentary rather than team.
- **Positioning:** a credible DeAI research bet: if contributor-owned training can converge near centralized baselines and preserve model economics, it becomes a serious alternative to closed AI and simple open-weight releases.

## Latest scan notes

- 2026-07-23 — Verification found that Pluralis has now published the **Stoa source, full PaperSearchQA reproduction guide and July technical blog**, advancing the July 15 claim beyond an X thread. The repository fixes the LFM2.5-8B-A1B run path, Apple-Silicon MLX rollout workers, one CUDA `slime`/Megatron trainer and Cloudflare R2 exchange, while the guide supplies commands/configs and the blog reports the same 29%→63% pass@1 result. This makes the setup inspectable and reproducible in principle; no independent rerun, decentralized trainer, contributor-economics ledger or external compute proof was found. Sources: https://github.com/PluralisResearch/stoa, https://github.com/PluralisResearch/stoa/blob/main/runs/psqa-decoupled/REPRODUCE.md and https://pluralis.ai/blog/rl-post-training-on-macs/
- 2026-07-21 — CoinFund investor Jake Brukhman argued that Kimi K3 is evidence algorithmic, data and post-training efficiency can offset several-fold compute disadvantages, making decentralized training more viable; the attached graphic explicitly places **Agora + Stoa** against centralized compute scale. This sharpens the Pluralis investor thesis from generic open/ownable AI toward an efficiency-and-coordination mechanism, but it is investor advocacy—not a new Pluralis benchmark, token right, customer, or revenue result. Source: https://x.com/jbrukh/status/2079375574326538344
- 2026-07-15 — Official Pluralis published a concrete **Stoa distributed-RL post-training run**: 14 consumer Macs across four countries generated all rollouts over the public internet for an LFM2.5-8B-A1B model, while a B200 trainer used DPPO to discard roughly 0.3% of overly divergent tokens and PULSE to reduce weight transfers from 9 GB to 82 MB. On the full PaperSearchQA validation set, official results improved pass@1 from **29% to 63%**. This is a new technical proof beyond the completed Agora pretraining run, but Pluralis explicitly says each Mac still holds the whole model and the trainer remains in one cluster; independent reproduction, code/artifact inspection and contributor economics remain open. Source: https://x.com/Pluralis/status/2077419654578860539
- 2026-07-13 — Pluralis founding/research scientists said their workshop proposal, **“Open, Collaborative, and Decentralized Training of Foundation Models,”** was accepted for NeurIPS 2026 in Sydney, building on the ICML Protocol Learning workshop. The announcement lists Pluralis and a broader academic collaborator group and says a call for papers is coming. This advances the Protocol Learning research/community catalyst, but acceptance is currently team-reported: no official NeurIPS workshop page, date, speaker list, or CFP URL was linked. Sources: https://x.com/tha_ajanthan/status/2076532843942211805 and https://x.com/hmdolatabadi/status/2076555271216984313

- 2026-07-07 — Official Pluralis said the **Pluralis-8B** / Agora WAN training run completed: first pipeline-parallel training over WAN using the new Agora system, ~20% MFU on a dynamic pool of consumer GPUs over consumer-grade networking, 176 contributors across North America, 669 GPUs joined / 607 dropped, and throughput stayed around 170k tokens/s. This upgrades the live-run catalyst from in-progress to completed technical evidence; still no token/economic conversion is announced, so next checks are the promised ~70-page technical report, eval/convergence details, open-source artifacts, and contributor ownership mechanics. Sources: https://x.com/Pluralis/status/2074232225344995636, https://x.com/Pluralis/status/2074232226812969405, and https://x.com/hmdolatabadi/status/2074271143721390523

- 2026-07-06 — Official Pluralis amplified Chamin Hewa's ICML 2026 **Factored Gossip DiLoCo** thread and published the companion blog/ArXiv links. The paper targets low-bandwidth data-parallel training by factorizing communication into non-blocking parameter mixing and blocking gradient mixing, which is directly relevant to Pluralis' consumer-internet / heterogeneous-compute training thesis. This is a research-credibility update, not token/economics news; next checks are poster reception, code/results follow-up, and whether the method feeds back into Agora/run metrics. Sources: https://x.com/Pluralis/status/2074001099917500855, https://x.com/ChaminHewa/status/2073986231026032960, https://pluralis.ai/blog/factored-gossip-diloco/, and https://arxiv.org/abs/2606.22768

- 2026-07-02 — Pluralis researcher Hadi Molatabadi detailed the team’s ICML 2026 Seoul schedule: decentralized-AI alignment workshop on July 6, Chamin Hewa presenting the **Factored Gossip DiLoCo** main-conference paper on July 7, an official ICML decentralized-training social on July 9, and the Protocol Learning workshop on July 10. This upgrades the ICML catalyst with concrete paper/event timing and team presence; next checks are slides, recordings, paper reception, new contributors, and any economics/ownership follow-up. Source: https://x.com/hmdolatabadi/status/2072565140223086691

- 2026-06-28 — CoinFund investor Jake Brukhman sharpened the Pluralis investment case around decentralized-training output being ownable, said Erfan Miahi joining is bullish for decentralized-AI scaling, and noted that public training runs are open for participation. This is investor/market-thesis evidence, not an official token/economics announcement. Sources: https://x.com/jbrukh/status/2071277638904098983, https://x.com/jbrukh/status/2071279179681665299, and https://x.com/jbrukh/status/2071300396954386648

- 2026-06-28 — Pluralis founder Alexander Long posted a detailed decentralized-training thesis tying Pluralis-adjacent work such as DiLoCo variants, Subspace Networks, Agora, and SENTINEL verification into a broader response to closed-lab model centralization. It is not token news, but it strengthens the technical/research catalyst around protocol-owned decentralized model training. Source: https://x.com/AlexanderLong/status/2070970697300775125

- 2026-06-25 — Official Pluralis announced an ICML Protocol Learning workshop in Seoul on July 10, 2026, with talks/posters on decentralized collaborative learning, asynchronous pipeline parallelism, communication-efficient model-parallel training, and no ICML badge requirement for the workshop. This is a credible research/community catalyst for Pluralis' decentralized-training thesis rather than a token/economics update. Sources: https://x.com/Pluralis/status/2070042407278694795 and https://pluralis.ai/events/icml-protocol-learning-workshop/
- 2026-06-17 — Jake Brukhman posted a stronger Pluralis-adjacent investor thesis after a decentralized AI training catchup: crypto capital formation can fund commercially viable decentralized models because the bottleneck is now commodity-device capital, not high-end GPUs. Source: https://x.com/jbrukh/status/2067358047899427276
- 2026-06-17 — Jake Brukhman framed Chamin Hewa’s ICML 2026 Factored Gossip DiLoCo work as progress toward resilient decentralized training swarms and commercially viable models trained on decentralized networks. Source: https://x.com/jbrukh/status/2067216487719342307

- 2026-06-14 — Intake issue #1 added Pluralis to the dashboard and initial review found the official site, Agora docs/dashboard, GitHub org, USV/CoinFund seed thesis, and official X run updates. Source: https://github.com/iopo545454-del/project-watchlist/issues/1
- 2026-06-14 — Official X said the Pluralis-8B / Agora run was around 350B tokens in, tracking centralized-run convergence, with 133 external contributors, 104 nodes filled quickly, roughly 170k tokens/s, and no H100/B200s. Source: https://x.com/Pluralis/status/2065899910080115117

## Thesis

### Investor / market theses

| Source | Who/affiliation | TLDR of the case | Relevance |
|---|---|---|---|
| https://blog.usv.com/pluralis-towards-actually-open-ai-1 | USV / venture investor | USV says Pluralis is building collaborative, decentralized training where finished models stay inside the protocol and usage revenue can flow back to contributors, avoiding the economics problem of open-weight releases. | High-signal investment thesis from a lead investor; directly frames Pluralis as protocol-owned AI, not just distributed compute. |
| https://x.com/Pluralis/status/1902367132597252177 | Official funding announcement | Pluralis announced a $7.6M seed co-led by USV and CoinFund, with Variant, Topology, Bodhi, Eden Block, Fabric, ConsenSys Mesh and angels including Balaji/Clement Delangue cited. | Funding quality and investor roster are part of the early credibility signal. |
| https://x.com/jbrukh/status/2065839328312574137 | Jake Brukhman / CoinFund | Investor-side commentary frames Pluralis and Agora as a serious decentralized AI counterweight where contributors can help create and own model value. | Useful investor narrative; treat as investor advocacy, not neutral validation. |
| https://x.com/jbrukh/status/2067358047899427276 | Jake Brukhman / CoinFund | After a decentralized-AI-training catchup, Brukhman argued crypto capital formation can finally fund commercially viable decentralized models because high-end GPUs are no longer the key bottleneck; the constraint is enough capital coordinated toward commodity devices. | Stronger investor thesis for Pluralis/Agora-style training networks, but still investor advocacy rather than an official Pluralis milestone. |
| https://x.com/jbrukh/status/2071277638904098983 | Jake Brukhman / CoinFund | Brukhman framed Pluralis as differentiated because decentralized-training outputs can be **ownable**, then reinforced the thread with Erfan Miahi joining and public training runs open to participants. | Adds a sharper investor-side value-capture thesis: model ownership/contributor economics can matter more than generic decentralized compute if it becomes enforceable. |
| https://x.com/jbrukh/status/2079375574326538344 | Jake Brukhman / CoinFund | Brukhman argues Kimi K3 shows algorithmic, data and post-training efficiency can offset several-fold compute disadvantages, while blockchain coordination can close the remaining gap for decentralized training; his graphic explicitly highlights Agora + Stoa. | Sharpens the Pluralis case around efficiency plus coordination rather than matching hyperscalers GPU-for-GPU; still investor advocacy and not proof of Pluralis economics or independent benchmark parity. |

### Hermes take

> Pluralis is one of the cleaner DeAI setups because it attacks the hard part — training economics and ownership — instead of just reselling GPU access. The dashboard/run metrics matter more than token rumors: if Agora keeps converging on public, heterogeneous hardware and contributor points eventually map to real model economics, this gets interesting fast. If “shared ownership” never becomes enforceable economics, it is a strong research project with a weak crypto capture story.

## Catalysts

| Catalyst | Status | Evidence / source | Timing | Direct impact | Second-order consequences | What to watch next |
|---|---|---|---|---|---|---|
| Pluralis-8B / Agora public training run | Confirmed / completed technical run | Official completion thread: https://x.com/Pluralis/status/2074232225344995636 plus follow-up: https://x.com/Pluralis/status/2074232226812969405 and docs: https://pluralis.ai/docs/ | Completed run announced 2026-07-06; technical report pending | Demonstrated pipeline-parallel decentralized training over WAN with ~20% MFU, 176 contributors, 669 GPU joins / 607 drops, and stable ~170k tokens/s throughput. | Strong run metrics improve DeAI research credibility and could attract contributors/investors/model buyers; token/economics impact remains unproven until ownership/revenue mechanics are published. | Track promised ~70-page technical report, evals/convergence, open-source artifacts, reproducibility, and whether contributor scores map to enforceable economics. |
| ICML Protocol Learning workshop | Confirmed / completed event; outputs pending | Official X announcement: https://x.com/Pluralis/status/2070042407278694795 and official event page: https://pluralis.ai/events/icml-protocol-learning-workshop/; the NeurIPS proposal post refers back to the completed ICML workshop: https://x.com/tha_ajanthan/status/2076532843942211805 | Completed July 10, 2026, Seoul; social July 9 | Put Pluralis' Protocol Learning agenda in front of academic/industry AI researchers with talks and posters on decentralized collaborative training. | Can improve recruiting, research credibility, and ecosystem mindshare for decentralized model-parallel training; not a token-economics catalyst by itself. | Watch for workshop slides/videos, paper/poster releases, new contributors, partnerships, and any follow-up on contributor ownership/economics. |
| NeurIPS 2026 open/collaborative/decentralized foundation-model training workshop | Confirmed by organizing team / upcoming; official conference page pending | Pluralis founding scientist announcement: https://x.com/tha_ajanthan/status/2076532843942211805 and researcher confirmation: https://x.com/hmdolatabadi/status/2076555271216984313 | NeurIPS 2026, Sydney; exact date and CFP timing unknown | Extends the Protocol Learning agenda from the ICML workshop into another top research venue and can widen the collaborator/contributor funnel. | Better academic distribution can strengthen recruiting and technical legitimacy, but it does not establish product usage, model economics, or token rights. | Verify the official NeurIPS workshop page, organizers/speakers, CFP and dates; then watch submissions, recordings, collaborations, and research/code follow-through. |
| Contributor scores / points potentially tied to ownership | Tentative | Docs describe scores from raw PFLOPs and active time: https://pluralis.ai/docs/ | Live scoring; economics unknown | Gives contributors a measurable stake in the run, but no token/revenue-right conversion is confirmed. | If points become revenue share, credits, or token rights, Pluralis could gain a strong contributor acquisition loop. | Watch official docs/blog/X for token, revenue-share, ownership, or legal/economic model details. |
| Stoa distributed RL post-training on consumer Macs | Confirmed / completed technical run; source and reproduction guide published | Official thread, repository, run guide and blog: https://x.com/Pluralis/status/2077419654578860539, https://github.com/PluralisResearch/stoa, https://github.com/PluralisResearch/stoa/blob/main/runs/psqa-decoupled/REPRODUCE.md and https://pluralis.ai/blog/rl-post-training-on-macs/ | Completed run announced 2026-07-15; artifacts verified 2026-07-23 | Extends Pluralis from WAN pretraining into distributed agentic-RL rollouts, with DPPO handling off-policy drift and PULSE shrinking 9 GB updates to 82 MB. | An inspectable Stoa + Agora stack can broaden useful consumer-hardware participation beyond pretraining, but current single-Mac model fit and centralized-trainer limits remain. | Independently reproduce the PaperSearchQA result and cost/throughput; verify Mac contribution, trainer dependency, external compute and whether rollout contributors receive enforceable economics. |
| Protocol Learning research/code releases | Confirmed | Official site lists papers and GitHub, and the Stoa run supplies a new system/result thread: https://pluralis.ai/, https://github.com/PluralisResearch and https://x.com/Pluralis/status/2077419654578860539 | Ongoing | Builds technical credibility around asynchronous pipeline parallelism, distributed RL, low-bandwidth synchronization and unextractable protocol models. | Academic validation or reproducible code can make Pluralis harder to dismiss as DeAI marketing. | Track Stoa code/blog expansion, arXiv/NeurIPS updates, repo activity, third-party replication, and benchmark comparisons. |
| Seed-backed expansion of decentralized model ownership | Confirmed | USV post: https://blog.usv.com/pluralis-towards-actually-open-ai-1 | 2026+ | Gives Pluralis capital and investor support to keep developing Agora/model ownership infrastructure. | Could lead to partnerships with compute networks, open-source AI communities, or protocol/token design work. | Watch for partnerships, production inference revenue, model access pricing, and ownership structure announcements. |

## Token / contract notes

- No official token ticker, contract, airdrop, or TGE was found during the initial review.
- Official language around “shared ownership,” “points,” contributor scores, and protocol-owned/unextractable models should not be treated as a live token until Pluralis publishes canonical economics or contracts.
- Intake submitted “token not out.” Keep any third-party token/airdrop claims out of durable facts unless confirmed by `@Pluralis`, official docs/blog, or a canonical contract announcement.

## Sources / Research Inputs

| Information source | Context about the source |
|---|---|
| https://pluralis.ai/ | Official website; overview of collectively-owned AI, Protocol Learning, papers, GitHub, Agora, docs, and team context. |
| https://pluralis.ai/blog/a-third-path-protocol-learning/ | Official blog thesis for Protocol Learning as a third path between closed models and unsustainable open weights. |
| https://pluralis.ai/blog/factored-gossip-diloco/ | Official companion blog for the ICML 2026 Factored Gossip DiLoCo paper; useful for low-bandwidth decentralized-training methodology. |
| https://arxiv.org/abs/2606.22768 | ArXiv paper for Factored Gossip DiLoCo; technical source for the ICML 2026 research catalyst. |
| https://pluralis.ai/docs/ | Official docs for Pluralis-8B / Agora, hardware requirements, contributor scoring, and run mechanics. |
| https://agora.pluralis.ai/ | Live Agora dashboard for training metrics: tokens, nodes, contributors, TPS, overhead, and Pluralis/external compute split. |
| https://github.com/PluralisResearch | Official GitHub org; public repos include Agora, Node0, AsyncPP, and AsyncMesh. |
| https://github.com/PluralisResearch/stoa | Official Stoa source repository; includes the Apple-Silicon rollout/CUDA-trainer implementation, tests and full PaperSearchQA run artifacts. |
| https://pluralis.ai/blog/rl-post-training-on-macs/ | Official Stoa technical blog; methodology, limits and 29%→63% PaperSearchQA result. |
| https://x.com/Pluralis | Official X; primary source for run updates, announcements, and research/product threads. |
| https://x.com/Pluralis/status/2065899910080115117 | Official June 2026 run update with tokens processed, contributor/node counts, TPS, convergence, and hardware claims. |
| https://x.com/Pluralis/status/2057135726891000100 | Official Agora launch thread for the consumer-card-only 8B pretraining run. |
| https://x.com/Pluralis/status/2077419654578860539 | Official Stoa distributed-RL thread; 14-Mac rollout fleet, DPPO/PULSE methodology, PaperSearchQA result and stated limitations. |
| https://blog.usv.com/pluralis-towards-actually-open-ai-1 | USV investment post and thesis; confirms $7.6M seed co-led by USV/CoinFund. |
| https://x.com/AlexanderLong | Founder/primary spokesperson account to monitor for thesis, technical, and roadmap comments. |
| https://x.com/hmdolatabadi | Pluralis research/scientist account to monitor for decentralized training/security/privacy notes. |
| https://x.com/tha_ajanthan | Pluralis founding scientist; useful for workshop, research, and decentralized-training announcements. |
| https://x.com/ChaminHewa | Research/contributor account to monitor for papers, ecosystem events, and technical updates. |
| https://x.com/tsnewnami_ | Engineering/research account to monitor for pipeline-parallelism and implementation notes. |
| https://x.com/jbrukh | CoinFund investor account; useful investor-side commentary, not official team source. |
| https://x.com/jbrukh/status/2079375574326538344 | CoinFund investor thesis tying Kimi K3-style efficiency gains to Agora + Stoa and decentralized-training viability. |

## Open questions

- What exact legal/economic form will “shared ownership” take: token, revenue share, usage credits, non-transferable reputation, or something else?
- Will contributor points map to transferable rights, and if so under what rules?
- What is the canonical long-term model access / revenue model?
- How decentralized is the current run after accounting for Pluralis-operated compute and regional restrictions?
- How robust are unextractable/protocol-owned model claims under adversarial contributors or extraction attempts?
- Can third parties reproduce the convergence and cost/performance claims outside a Pluralis-operated run?
- Can third parties independently reproduce Stoa's 29%→63% PaperSearchQA result from the now-public guide, and what do measured cost/throughput, trainer dependence, external compute and Mac contribution accounting show?

## Monitoring notes

- Prioritize official X, official docs/blog, Agora dashboard, GitHub repos, and investor/team accounts.
- Track run health metrics every scan when possible: tokens processed, active nodes, contributor count, TPS, MFU, overhead, and external-vs-Pluralis compute share.
- Treat token/airdrop chatter as unverified until official sources publish a contract/economics page.
- Watch for partnerships with compute networks, model-access products, revenue distribution, or governance/token design announcements.
