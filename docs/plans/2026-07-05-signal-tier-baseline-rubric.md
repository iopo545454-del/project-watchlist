# Signal Tier: Baseline-Relative Rule for `high`

> **For Hermes:** Execute this plan task-by-task, in order. It is deliberately small — three tasks, one scan cycle of work. It amends the signal-tier rubric you shipped in `e2676c6`; it does not replace it, and it does not touch the JSON schema (`importance: high|medium|low` stays as-is). Where this plan and the current AGENTS.md rubric conflict, this plan wins.

**Date:** 2026-07-05
**Origin:** Operator feedback after the `e2676c6` retag. The retag fixed the volume problem (181 → 58 `high`), but the rubric is still *event-type-based* — it can't distinguish a launchpad launching a token (routine: that is the product working) from a project doing something it has never done before. The operator's framing: `high` should require **a step change in how the project operates**, or **large amounts of money at stake relative to the project**. This plan codifies that.

## Task 1: Amend the AGENTS.md signal-tier rubric

In AGENTS.md, in the signal-tier section (currently lines ~295–301), insert the following between the `low` bullet and the "Bias downward when uncertain" paragraph, verbatim:

> **Routine output of a project's core function is never `high` on its own.** For launchpads (Virtuals, Bankr), individual token launches are the product working as intended — tag them `medium` at most, even if the token is novel or the launch is large by launchpad standards. The same applies to any project's recurring milestones: another integration, another volume record, another agent going live.
>
> An event earns `high` only if at least one of these holds:
>
> - **Step change:** it changes how the project itself operates going forward — new fee or value-capture mechanics, tokenomics change, new market structure, expansion of the protocol itself to a new chain/venue — rather than another instance of mechanics that already exist. (Calibration: the Bankr cc0company launch-token *skill* with LP fee split is a new mechanic → `high`; a token *deployed using* that skill is an instance → `medium`/`low`.)
> - **Magnitude:** the capital at stake is large *relative to the project's own size* — roughly >5–10% of market cap, TVL, or typical flows. Cite a concrete number in the summary; **no number, no `high`.** Exception: security incidents and confirmed dated events (unlocks, snapshots, halvings) may be `high` before dollar impact is quantifiable.
>
> Litmus test: if essentially the same event will plausibly happen again within a few weeks, it is the baseline, not a signal. Ask: *does this change the thesis, or just add another example of it?*

The existing category list in the `high` bullet remains, but now names *candidate* categories — an item must also pass the step-change or magnitude test. Add one clause to the end of the `high` bullet to say exactly that.

Acceptance: AGENTS.md contains the text above; the `high` bullet references the two-test gate; no other rubric text removed.

## Task 2: Propagate to the tagger's other two homes

The rubric lives in three places and must not drift:

1. The 4h cron scanner prompt (updated in the `e2676c6` work via cronjob update) — add the baseline-relative rule and litmus test in condensed form.
2. The `research-watchlist-dashboard` skill — same condensed form.

Condensed form to use in both: *"Routine core-function output (e.g. launchpad token launches) is never `high`. `high` requires a step change in how the project operates, or money at stake large relative to the project (cite a number — no number, no high). Repeatable-within-weeks events are baseline, not signal."*

Acceptance: both locations contain the condensed rule; wording consistent with AGENTS.md.

## Task 3: Spot-retag only rule violations (not a mass retag)

Re-check current `high` entries against the new rule and demote only clear violations — expected candidates are launchpad launch instances and repeatable milestones. Also recheck two known edge cases against the *existing* rubric's literal text:

- GEODNET GIP-13 StableHex 6x multipliers (currently `medium`): confirmed incentive change with concrete mechanics — arguably `high` under both old and new rules.
- MetaDAO 0xSrMessi account compromise (currently `medium`): "security incident" in the rubric means protocol/funds; a team X-account compromise stays `medium`. If you agree, add a parenthetical to the `high` bullet scoping "security incidents" to protocol/funds so this doesn't recur.

Expected scale: ≤15 entries change. If you find yourself retagging more than ~25, stop and leave a note in the plan file instead — that means the rule is stricter than intended and the operator should recalibrate.

Acceptance: changelog JSON still validates; retag count noted in the commit message; dashboard renders with no console errors.
