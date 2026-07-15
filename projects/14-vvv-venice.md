---
status: active
watchlist: crypto-projects
last_updated: 2026-07-15T05:24:32Z
---

# VVV / Venice AI

## Overview
Venice is a private/unrestricted AI product and API associated with Erik Voorhees. The token setup is not just a governance wrapper: VVV is positioned around staking for access to Venice inference capacity, emissions/yield, and a revenue-linked buyback/burn path. The project matters if Venice can turn real AI usage into recurring token demand and burns while preserving the privacy/unrestricted-AI brand.

The watchlist focus is model/API releases, staking/capacity mechanics, emissions cuts, burns, contract/security concerns, major distribution integrations, and any change to how VVV captures product revenue or compute demand.

## Thesis

### Investor / market theses

| Source | Who/affiliation | TLDR of the case | Relevance |
|---|---|---|---|
| https://www.galaxy.com/insights/research/inference-capital-markets-ai-compute-gpu-futures-onchain-crypto | Lucas Tcheyan / Galaxy Research | Galaxy frames Venice as the furthest-along attempt to make inference access ownable: VVV is the capital asset, staked VVV mints transferable DIEM compute claims, and revenue/subscriptions feed VVV buy-and-burn. It also notes DIEM is mostly speculative, less than half of available inference was used weekly, and every outstanding DIEM is a perpetual Venice liability. | Strong independent bull/bear framing for the VVV/DIEM loop; the thesis improves only if paid usage, DIEM utilization and burns outgrow emissions and the long-duration compute liability. |
| https://x.com/AskVenice/status/1978927853149237600 | Venice official tokenomics / VVV framing | Official materials frame VVV around staking for AI capacity, emissions, and a roadmap toward buyback/burn-driven scarcity. | Core token utility and value-capture source; should be checked against current docs and onchain burn data. |
| https://x.com/AskVenice/status/2037231269449523276 | Venice official emissions/burn update | Official account described emission cuts and burn mechanics as a path toward lower inflation and eventually net deflation if revenue/burns scale. | The most important token catalyst is whether real usage makes burns outrun emissions. |
| https://x.com/AskVenice/status/2064158076303790131 | Venice official burn update | Official burn posts give discrete, source-proximate evidence of revenue-linked VVV repurchases/burns. | Useful measurable signal; repeat cadence and size matter more than one-off posts. |
| https://x.com/i/status/2065637276588159328 | Erik Voorhees / founder-level narrative via official clip | Voorhees frames unrestricted AI as a civilization-level institution that should not be controlled by a handful of government-compliant companies. | Explains why Venice has crypto-native mindshare; narrative strength can matter for adoption and token demand. |
| https://x.com/adamshurwitz/status/2066626292309430744 | Third-party user/operator commentary | User case: staking VVV as a way to get API/inference access can be economically attractive for heavy users versus paying per use. | Useful outside-the-team thesis, but should be validated with actual pricing/capacity/staking rules. |

### Hermes take

> VVV has one of the cleaner crypto-AI token stories if the numbers hold: stake for capacity, product revenue buys/burns supply, and a real consumer/API app gives the token something to attach to. The danger is that “private AI” mindshare outruns hard usage economics, or contract/security doubts poison the scarcity story. Watch burns, emissions, staked share, API/model adoption, and any changes to mint/admin controls.

## Catalysts

| Catalyst | Status | Evidence / source | Timing | Direct impact | Second-order consequences | What to watch next |
|---|---|---|---|---|---|---|
| Venice Series A / GPU vertical-integration funding | Confirmed / completed funding | Founder thread: https://x.com/ErikVoorhees/status/2072336114950545755 | Announced 2026-07-01 | Adds $65M of equity capital at a $1B post-money valuation, with investor VVV grant/warrant alignment and proceeds for datacenter/GPU buildout, hiring, growth and acquisitions without selling treasury VVV. | Owning compute can improve margins and burn capacity if Venice demand scales; the VVV grant/warrant package creates future supply/overhang to model but is locked/vesting. | Verify definitive docs, actual GPU/datacenter deployment, exercised warrants, VVV vesting unlock timing, burns vs emissions, and whether revenue/gross margin improves. |
| New frontier/coding model launches in Venice | Confirmed | Official X said Kimi K2.7 Code is live on Venice with 1T total parameters, 32B active, 256K context, vision/function calling/structured output/web search: https://x.com/AskVenice/status/2066634900652879949 | Live as of 2026-06-15 | Improves product utility for developers and AI-agent workflows. | Better models can increase API demand, staking-for-capacity demand, and revenue/burn capacity if usage monetizes. | Track docs/model list, API pricing, user uptake, and whether new model launches correlate with burn/revenue growth. |
| Emissions reduction path | Confirmed / latest cut executed | Official Venice posts described reductions from prior annual emissions toward lower future emissions; on 2026-07-01 Venice said annual emissions were cut from 4M to 3M VVV: https://x.com/AskVenice/status/2037231269449523276, https://x.com/AskVenice/status/2061503966702162407, and https://x.com/AskVenice/status/2072408045007573141 | Latest cut announced 2026-07-01; ongoing scheduled path | Lowers inflation and makes burns easier to compare against issuance. | If burns exceed emissions, VVV gets a simple deflationary-capital-asset narrative. | Verify current annual emissions onchain/dashboard, staking yield changes, and whether July burns exceed the new 3M/year run-rate. |
| Revenue-linked buyback/burn program | Confirmed | Official burn update/dashboard references: https://x.com/AskVenice/status/2064158076303790131 | Monthly / recurring if revenue continues | Directly links Venice revenue to VVV supply reduction. | Larger repeated burns can shift VVV from “AI app token” to revenue-linked asset; failed/irregular burns weaken thesis. | Track burn size, txs, revenue source, burn/emission ratio, and whether dashboard data is machine-readable. |
| Staking for API/inference capacity | Confirmed / needs exact current terms | Official VVV landing page and Venice API docs describe token/API utility and developer usage; founder reported Venice reaching 100B daily tokens on 2026-06-25: https://venice.ai/lp/vvv, https://docs.venice.ai/, and https://x.com/ErikVoorhees/status/2070188683416715519 | Live, terms may evolve | Creates non-speculative demand from heavy users/devs/agents that need inference, with usage milestones indicating whether the product surface is actually scaling. | If AI agents require persistent private inference, capacity staking could become a real working-capital use case; if token throughput is mostly free/promotional, burn/capacity impact may lag usage. | Verify current staking rules, capacity quotas, unstaking constraints, daily-token methodology, revenue per token, and whether staked demand grows with API usage. |
| Contract/admin/security clarity | Speculative watch item | Onchain token-admin verification source to monitor: https://basescan.org/token/0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf | Unknown | Security clarity can affect institutional comfort and holder trust. | A verified timelock/multisig/admin-control change or exploit disclosure would be material. | Check token contract, audits, official responses, and any admin-role changes. |

## Token / contract notes
- Ticker: VVV.
- Base contract tracked in the dossier: `0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf`.
- Core utility to verify: VVV staking for Venice inference/API capacity; remaining emissions/yield; buyback/burn mechanics tied to Venice revenue.
- Contract/admin concerns should be handled as verifiable onchain/audit checks, not accepted from random X posts without evidence.

## Sources / Research Inputs

| Information source | Context about the source |
|---|---|
| https://x.com/AskVenice | Main official Venice account; product, model, burn, token and app announcements. |
| https://x.com/tryvenice | Related Venice/product-company account; lower priority than @AskVenice unless source-specific. |
| https://x.com/ErikVoorhees | Founder/philosophical/product narrative; may contain material comments on privacy, AI access, VVV and regulation. |
| https://x.com/ErikVoorhees/status/2072336114950545755 | Founder thread announcing Venice Series A, equity/VVV investor terms, profitability, compute-vertical-integration plan, and no treasury VVV sale. |
| https://venice.ai/ | Official app/site. |
| https://venice.ai/lp/vvv | Official VVV/token landing page and burn/token information source. |
| https://docs.venice.ai/ | Official API/docs; model list, API usage, developer integration and pricing/capacity details. |
| https://github.com/veniceai/skills | Official/public GitHub source previously surfaced; monitor for integrations/tooling. |
| `0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf` | Base VVV token contract; use for supply/holder/admin checks. |
| https://x.com/AskVenice/status/2066634900652879949 | Official Kimi K2.7 Code model launch; current product/update evidence from this scan. |
| https://www.galaxy.com/insights/research/inference-capital-markets-ai-compute-gpu-futures-onchain-crypto | Galaxy Research's 2026-07-13 independent VVV/DIEM thesis; includes tokenized-inference ownership, buy/burn, utilization, liability and disclosure context. |

## Open questions
- What are the exact current VVV staking rules: capacity allocation, unstaking delay, quota calculation, and whether API usage can saturate capacity?
- What is current annual emissions after the latest scheduled cut, and how does it compare with monthly burns?
- Is the buyback/burn dashboard machine-readable or only UI/social updates?
- What admin/mint controls exist on the VVV contract, and are they timelocked/multisig/audited?
- Which model/API launches actually drive revenue rather than engagement-only usage?

## Monitoring notes
- High-priority recurring checks: official burn/emissions posts, model/API launches, docs/model-list changes, staking/capacity rules, contract/admin changes, and Erik Voorhees comments that clarify VVV economics.
- Treat model releases as product catalysts only if they plausibly change usage/revenue; log routine “model available” posts when the model is major or developer-relevant.
- Separate philosophical uncensored-AI narrative from hard token economics; the tradeable signals are burns, emissions, staking demand, revenue, listings/liquidity, and security clarity.

---


## Latest scan notes

- 2026-07-15 — Galaxy Research framed Venice as the most advanced attempt to make inference access ownable: VVV is the capital asset, staked VVV mints transferable DIEM compute claims, and product revenue/subscriptions feed buy-and-burn. The same report supplies the key bear case: DIEM is mostly held speculatively, less than 50% of available inference was being used weekly, and every DIEM is a perpetual dollar-denominated compute liability for Venice. Galaxy also disclosed financial interests in DIEM/VVV. This is strong independent thesis context, not a new token-mechanics change or independently verified live metric. Source: https://www.galaxy.com/insights/research/inference-capital-markets-ai-compute-gpu-futures-onchain-crypto
- 2026-07-14 — Official Venice shipped **Style References in Venice Studio**, letting users add reference images to steer image-prompt style, and linked the live Studio workflow plus a tutorial. This is a real consumer-product feature release, but the announcement disclosed no API support, pricing, usage, revenue, VVV staking demand or burn impact. Sources: https://x.com/AskVenice/status/2077143752288633326, https://x.com/AskVenice/status/2077143755019239927 and https://x.com/AskVenice/status/2077143757061783710
- 2026-07-09 — Official Venice announced the latest discretionary VVV burn: about $267k of VVV at burn time, described as its largest burn yet, with a burn dashboard and Base transaction linked in follow-ups. This is the strongest VVV token-economics signal in this scan because it directly tests the revenue-linked buyback/burn path against the current 3M VVV/year emissions run-rate; next check is dashboard/tx verification and burn-vs-emissions math. Sources: https://x.com/AskVenice/status/2075312526393249846 and https://x.com/AskVenice/status/2075312829893091793

- 2026-07-09 — Official Venice said the full GPT-5.6 family (Sol/Luna/Terra plus Pro variants) is available on Venice with anonymous access; Erik Voorhees also reiterated Venice model privacy routing/zero-retention or partner-contract handling and E2EE-labelled model guidance. This is a major model-surface update after Grok 4.5/Seedream, but no VVV burn, emissions, staking, pricing, or usage delta was disclosed. Sources: https://x.com/AskVenice/status/2075290416547590411 and https://x.com/ErikVoorhees/status/2075293875284095058
- 2026-07-08 — Official Venice said Grok 4.5 is available privately on Venice and Seedream 5.0 Pro by BytePlus is live with anonymous access. These are product-surface/model-availability updates that matter if they drive paid API usage, staking-for-capacity demand, or burn growth; by themselves they do not change VVV emissions or buyback mechanics. Sources: https://x.com/AskVenice/status/2074924384674783574 and https://x.com/AskVenice/status/2074980587979342155

- 2026-07-02 — Founder Erik Voorhees announced Venice raised a $65M Series A led by Dragonfly at a $1B post-money equity valuation; investors received equity plus a vesting 1.5M VVV grant and 5M VVV warrants, while Venice said it chose equity instead of selling treasury VVV, remains profitable, and will use proceeds for datacenter/GPU vertical integration, growth, hiring and acquisitions. Source: https://x.com/ErikVoorhees/status/2072336114950545755
- 2026-07-01 — Official Venice said VVV annual emissions have been reduced from 4M to 3M tokens/year, the third planned cut after May and June reductions, and reiterated the goal of net-deflationary VVV when burns exceed emissions; verify the onchain/emissions dashboard and next burn math. Source: https://x.com/AskVenice/status/2072408045007573141
- 2026-07-01 — Official Venice said Claude Fable 5 is back on Venice anonymously; useful model-availability/product-surface note, but less tradeable than the emissions cut unless API/staking demand follows. Source: https://x.com/AskVenice/status/2072409008908943615

- 2026-06-25 — Founder Erik Voorhees said Venice reached 100B daily tokens, a new source-proximate usage milestone versus the prior 85B/day note; still needs dashboard/API verification and burn/emission comparison. Source: https://x.com/ErikVoorhees/status/2070188683416715519
- 2026-06-23 — Venice publicly endorsed Osaurus Cloud, which launched a pay-as-you-go flow for privately running frontier open models through Venice with zero data retention on selected models and no API key requirement; useful distribution signal beyond the Base MCP integration. Source: https://x.com/i/status/2069488620650779104
- 2026-06-23 — Official Venice said Venice is now available through Base MCP, letting agents call Venice private/uncensored inference from Base's MCP server with x402; useful agent-commerce/private-inference distribution signal. Source: https://x.com/AskVenice/status/2069481225316905200
- 2026-06-22 — Official Venice X said Seedance 2.0 4K is live on Venice, adding native-4K anonymous video generation to the product surface; monitor whether model launches translate to paid API/staking demand or burns. Source: https://x.com/AskVenice/status/2069135635848294875
- 2026-06-17 — Venice launched Kling V3 Turbo for anonymous text-to-video and image-to-video use in Standard/Pro tiers, adding another video-generation model to the Venice product surface. Source: https://x.com/AskVenice/status/2067236016629432370
