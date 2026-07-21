---
status: active
watchlist: crypto-projects
last_updated: 2026-07-21T03:55:09Z
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
| June automatic private model routing powered by Venice | Confirmed / live partner integration | OpenSoftware launch and official Venice amplification: https://x.com/OpenSoftwareCo/status/2079285998383444145 and https://x.com/AskVenice/status/2079305139156865155 | Live 2026-07-20 | June's open-source macOS app now routes each request through Venice according to Low/Balanced/High cost-quality preferences while defaulting to private/zero-retention models. | A real consumer integration can route more recurring inference through Venice and strengthen private-AI distribution; no usage, paid volume, VVV staking demand or burn impact is disclosed. | Verify Venice request volume/revenue attributable to June, model-routing quality, user adoption, API pricing, staking-capacity use and any burn response. |
| Venice Series A / GPU vertical-integration funding | Confirmed / completed funding | Founder thread: https://x.com/ErikVoorhees/status/2072336114950545755 | Announced 2026-07-01 | Adds $65M of equity capital at a $1B post-money valuation, with investor VVV grant/warrant alignment and proceeds for datacenter/GPU buildout, hiring, growth and acquisitions without selling treasury VVV. | Owning compute can improve margins and burn capacity if Venice demand scales; the VVV grant/warrant package creates future supply/overhang to model but is locked/vesting. | Verify definitive docs, actual GPU/datacenter deployment, exercised warrants, VVV vesting unlock timing, burns vs emissions, and whether revenue/gross margin improves. |
| New frontier/coding model launches in Venice | Confirmed | Official X said Kimi K2.7 Code is live on Venice with 1T total parameters, 32B active, 256K context, vision/function calling/structured output/web search: https://x.com/AskVenice/status/2066634900652879949 | Live as of 2026-06-15 | Improves product utility for developers and AI-agent workflows. | Better models can increase API demand, staking-for-capacity demand, and revenue/burn capacity if usage monetizes. | Track docs/model list, API pricing, user uptake, and whether new model launches correlate with burn/revenue growth. |
| Emissions reduction path | Confirmed / latest cut executed | Official Venice posts described reductions from prior annual emissions toward lower future emissions; on 2026-07-01 Venice said annual emissions were cut from 4M to 3M VVV: https://x.com/AskVenice/status/2037231269449523276, https://x.com/AskVenice/status/2061503966702162407, and https://x.com/AskVenice/status/2072408045007573141 | Latest cut announced 2026-07-01; ongoing scheduled path | Lowers inflation and makes burns easier to compare against issuance. | If burns exceed emissions, VVV gets a simple deflationary-capital-asset narrative. | Verify current annual emissions onchain/dashboard, staking yield changes, and whether July burns exceed the new 3M/year run-rate. |
| Revenue-linked buyback/burn program | Confirmed | Official burn update/dashboard references: https://x.com/AskVenice/status/2064158076303790131 | Monthly / recurring if revenue continues | Directly links Venice revenue to VVV supply reduction. | Larger repeated burns can shift VVV from “AI app token” to revenue-linked asset; failed/irregular burns weaken thesis. | Track burn size, txs, revenue source, burn/emission ratio, and whether dashboard data is machine-readable. |
| Staking for API/inference capacity | Confirmed / public API-backed | Official docs define `1 DIEM = $1/day` of renewing compute and document DIEM minting from staked VVV: https://docs.venice.ai/overview/vvv-diem. Public APIs expose current and historical VVV/DIEM supply, staking and consumption: https://api.venice.ai/api/app/vvv/vvv_stats, https://api.venice.ai/api/app/vvv/diem_stats and https://api.venice.ai/api/app/vvv/diem_staking_history?timePeriod=1W | Live; direct-data verification 2026-07-21 | At verification, the API reported `32.994M` VVV staked, `37,093` DIEM supply, `29,222` DIEM staked and a `38,000` target. Six complete daily observations showed `12,753–15,321` DIEM consumed, or `43.1%–52.4%` of staked DIEM capacity. | Machine-readable utilization makes the perpetual compute liability measurable; roughly half-used capacity supports real demand but leaves material idle capacity, and it does not by itself disclose paid revenue or June-app attribution. | Track utilization, VVV/DIEM supply and staked share through the public API; reconcile API-credit purchases, subscriptions and June/app-specific requests with revenue-funded burns. |
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
| https://docs.venice.ai/overview/vvv-diem | Official VVV/DIEM mechanics; defines `$1/day` renewing compute per DIEM and DIEM creation from staked VVV. |
| https://api.venice.ai/api/app/vvv/vvv_stats | Official public VVV supply/staking/lock statistics endpoint. |
| https://api.venice.ai/api/app/vvv/diem_stats | Official public DIEM target/supply/staking and mint-rate endpoint. |
| https://api.venice.ai/api/app/vvv/diem_staking_history?timePeriod=1W | Official public daily DIEM capacity-consumption and staking history. |

## Open questions
- What are the exact current VVV/DIEM cooldown and unlock constraints, and how often does consumed DIEM capacity approach or exceed the staked allowance?
- What is current annual emissions after the latest scheduled cut, and how does it compare with monthly burns?
- Which machine-readable endpoint/transactions reconcile API-credit purchases and subscriptions to each VVV buyback/burn?
- What admin/mint controls exist on the VVV contract, and are they timelocked/multisig/audited?
- Which model/API launches actually drive revenue rather than engagement-only usage?

## Direct Data / KPI Methodology

### KPI questions

| KPI | Why it matters | Best source | Programmatic status | Notes / limitations |
|---|---|---|---|---|
| VVV supply, staked and locked | Measures dilution and capital committed to inference access | Official Venice API plus Base contract | tested_ok | The API's `totalSupply` field differs from the ERC-20 `totalSupply()` view, so retain field labels and reconcile treasury/staking-account treatment before using ratios as circulating-market math. |
| DIEM supply, target and staked amount | Measures the outstanding perpetual daily-compute liability | Official Venice API and DIEM contract | tested_ok | One DIEM renews `$1/day` of compute; supply is not equivalent to current paid revenue. |
| DIEM consumed versus staked | Measures actual use of available tokenized inference capacity | Official Venice daily staking history | tested_ok | `totalDiemConsumed` is an issuer API metric; it does not identify user/app, paid/free mix, model/provider cost or gross margin. |
| Revenue-funded VVV burns | Tests value capture against emissions | Official burn page/transactions and Base explorer | partial | Burn posts/transactions exist, but this verification did not identify a stable endpoint that reconciles API-credit purchases/subscriptions to each buyback. |
| Integration-attributed requests/revenue | Tests whether June and other partners add economics rather than distribution logos | Partner/Venice reporting or API-key cohort export | manual_only | No June-specific request, revenue, staking or burn attribution is public. |

### Fetch tests

| Source | Endpoint / method | Status | What it returns | Next step |
|---|---|---|---|---|
| VVV stats | `https://api.venice.ai/api/app/vvv/vvv_stats` | tested_ok | Official circulating, total, staked and locked fields plus market metadata | Add a collector adapter after reconciling the API `totalSupply` field to ERC-20 supply. |
| DIEM stats | `https://api.venice.ai/api/app/vvv/diem_stats` | tested_ok | Supply target, current supply, staked/locked amount and mint rate | Collect supply and liability changes. |
| DIEM utilization history | `https://api.venice.ai/api/app/vvv/diem_staking_history?timePeriod=1W` | tested_ok | Daily DIEM consumed and staked | Collect utilization with explicit issuer-API labeling and complete-day filtering. |
| VVV/DIEM docs | `https://docs.venice.ai/overview/vvv-diem` | tested_ok | Current utility, credit-renewal and minting rules | Alert on mechanics changes. |

## Monitoring notes
- High-priority recurring checks: official burn/emissions posts, model/API launches, docs/model-list changes, staking/capacity rules, contract/admin changes, and Erik Voorhees comments that clarify VVV economics.
- Treat model releases as product catalysts only if they plausibly change usage/revenue; log routine “model available” posts when the model is major or developer-relevant.
- Separate philosophical uncensored-AI narrative from hard token economics; the tradeable signals are burns, emissions, staking demand, revenue, listings/liquidity, and security clarity.

---


## Latest scan notes

- 2026-07-21 — Dedicated verification found an **official machine-readable VVV/DIEM operating surface**. At 03:55 UTC, Venice's API reported `80.629M` VVV in its `totalSupply` field, `47.395M` circulating, `32.994M` staked and `8.615M` locked; DIEM showed `37,093` total, `29,222` staked and a `38,000` target. For the six complete days July 15–20, `12,753–15,321` DIEM was consumed daily, equal to **`43.1%–52.4%`** of staked DIEM capacity (`47.1%` aggregate). Official docs confirm each staked DIEM renews `$1/day` of compute and DIEM is minted from staked VVV. This confirms a live, measurable compute-liability/utilization loop; it does **not** disclose June-specific requests/revenue, and the June integration sources still provide no attributable economics. Sources: https://docs.venice.ai/overview/vvv-diem, https://api.venice.ai/api/app/vvv/vvv_stats, https://api.venice.ai/api/app/vvv/diem_stats and https://api.venice.ai/api/app/vvv/diem_staking_history?timePeriod=1W
- 2026-07-20 — OpenSoftware launched **automatic private model routing in June**, its open-source macOS AI app, powered by Venice. Users select Low, Balanced or High preferences and June chooses a model per request while defaulting to private/zero-data-retention routes; the app is live and MIT-licensed. Venice amplified it as “Built in Venice.” This is a real external product integration, but neither source disclosed Venice-attributed requests, paid volume, API revenue, VVV staking demand or burn impact. Sources: https://x.com/OpenSoftwareCo/status/2079285998383444145, https://x.com/AskVenice/status/2079305139156865155 and https://www.opensoftware.co/june
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
