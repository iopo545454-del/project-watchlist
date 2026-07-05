# Project Watchlist Research OS Hardening Implementation Plan

> **For Hermes:** Use subagent-driven-development skill to implement this plan task-by-task.

**Goal:** Turn the project-watchlist repo from a manually synchronized research dashboard into a validated, generated, drift-resistant research operating system.

**Architecture:** Keep `projects/*.md` as the human-readable source of truth, add a small Python generation/validation layer, then derive indexes, CSV, per-project JSON, README project list, and generated HTML from that source. CI should block drift and make missing metadata/coverage visible instead of silently treating missing fields as OK.

**Tech Stack:** Python 3 standard library first (`json`, `csv`, `re`, `html`, `pathlib`, `datetime`, `unittest`), GitHub Actions, static GitHub Pages HTML/CSS/JS. Avoid adding Node/build dependencies unless a later UI refactor truly needs them.

---

## Current Problem Summary

The repo has a strong analyst framework but weak machinery. The same project state currently appears in too many manually edited places:

- `projects/*.md`
- `index.json`
- `index.csv`
- `docs/data/index.json`
- `data/<slug>.json`
- `docs/projects/<slug>.html`
- `docs/data/project-changelog.json`
- `docs/data/scan-debug.json`
- README project list

This creates drift, false confidence, and maintenance risk. Fix priority:

1. Add a strict-but-narrow validator for boring invariants: slug parity, required fields, existing paths, valid enums, generated blocks/files current.
2. Run the validator locally and fix current repo drift until it passes.
3. Enable CI only after the current repo is clean, so `main` does not start red.
4. Add a generator so repeated artifacts are derived from one source.
5. Normalize source quality/confidence/freshness only after the basic machinery is stable.

---

## Target Repository Shape

```txt
projects/*.md                         canonical dossiers + YAML frontmatter
scripts/lib/project_parser.py          parse markdown/frontmatter/source tables
scripts/lib/project_model.py           normalized project/changelog/scan schemas
scripts/validate.py                    drift + schema + path + HTML checks
scripts/generate.py                    derives JSON/CSV/README/project HTML
scripts/audit_coverage.py              coverage/freshness summary for UI/debug
.github/workflows/validate.yml         CI validation
index.json                            generated
index.csv                             generated
data/<slug>.json                      generated or deprecated after migration
docs/data/index.json                  generated
docs/data/project-changelog.json      maintained by scans, schema-validated
docs/data/scan-debug.json             maintained by scans, schema-validated
docs/data/coverage.json               generated from scan-debug + index
docs/projects/*.html                  generated
docs/index.html/app.js/style.css      static UI consuming generated data
README.md                             generated project list between markers
```

---

## Implementation Tasks

### Task 1: Create a baseline audit snapshot

**Objective:** Capture the current drift and schema issues before fixing anything.

**Files:**
- Create: `docs/audits/2026-06-22-drift-audit.md`

**Steps:**
1. Run current checks:
   ```bash
   python3 -m json.tool index.json >/dev/null
   python3 -m json.tool docs/data/index.json >/dev/null
   python3 -m json.tool docs/data/project-changelog.json >/dev/null
   python3 -m json.tool docs/data/scan-debug.json >/dev/null
   git status --short
   ```
2. Manually inspect counts:
   ```bash
   python3 - <<'PY'
   import json, pathlib
   print('projects_md', len(list(pathlib.Path('projects').glob('*.md'))))
   print('data_json', len(list(pathlib.Path('data').glob('*.json'))))
   print('docs_pages', len(list(pathlib.Path('docs/projects').glob('*.html'))))
   for p in ['index.json','docs/data/index.json']:
       print(p, len(json.load(open(p))))
   PY
   ```
3. Write the audit with counts, known drift examples, and current validation gaps.
4. Commit:
   ```bash
   git add docs/audits/2026-06-22-drift-audit.md
   git commit -m "docs: add project watchlist drift audit"
   ```

**Verification:** Audit exists and includes current artifact counts plus specific drift examples.

---

### Task 2: Add normalized project metadata contract

**Objective:** Define exactly which fields every project must have and which may be nullable.

**Files:**
- Create: `docs/schema/project-metadata.md`
- Modify: `AGENTS.md`

**Required fields:**
```txt
slug
project
title
ticker
category
status
initial_review_done
primary_x
x_accounts
links_count
file
github_file
html_page
last_updated
open_questions
token_address
source_quality_summary
confidence
```

**Allowed enums:**
```txt
status: active | paused | archived | needs-review
initial_review_done: true | false
confidence: high | medium | low | unknown
source_quality_summary: official-heavy | mixed | third-party-heavy | weak-signal-heavy | unknown
```

**Steps:**
1. Document field meaning and nullable policy in `docs/schema/project-metadata.md`.
2. Patch `AGENTS.md` to say new projects must provide these fields or explicit `unknown`/empty values.
3. Commit:
   ```bash
   git add docs/schema/project-metadata.md AGENTS.md
   git commit -m "docs: define normalized project metadata contract"
   ```

**Verification:** A new agent can read the schema and know what to populate.

---

### Task 3: Build parser library for Markdown dossiers

**Objective:** Parse project Markdown into structured metadata without changing outputs yet.

**Files:**
- Create: `scripts/lib/project_parser.py`
- Create: `scripts/lib/__init__.py`
- Create: `tests/test_project_parser.py`

**Parser responsibilities:**
- Read YAML-ish frontmatter between `---` fences.
- Keep the supported frontmatter subset deliberately small and documented in `docs/schema/project-metadata.md`:
  - `key: string`
  - `key: true` / `key: false`
  - `key: ["array", "values"]`
  - no nested objects unless the value is encoded as JSON in a string field
  - no anchors, multiline scalars, implicit date coercion, or other YAML features
- Extract H1 title.
- Extract section headings.
- Extract `## Sources / Research Inputs` table rows.
- Count links from markdown URLs and raw `https://` URLs.
- Infer slug from filename if not present.

**Test cases:**
- Frontmatter is parsed.
- H1 is parsed.
- Source table rows are parsed.
- Link count is stable.
- Missing sections return empty structures, not crashes.

**Commands:**
```bash
python3 -m unittest tests/test_project_parser.py -v
```

**Commit:**
```bash
git add scripts/lib/project_parser.py scripts/lib/__init__.py tests/test_project_parser.py
git commit -m "feat: add project dossier parser"
```

**Verification:** Tests pass and no generated files change.

---

### Task 4: Add validator v1 for hard drift checks

**Objective:** Introduce `scripts/validate.py` that fails on obvious repo drift.

**Files:**
- Create: `scripts/validate.py`
- Create: `tests/test_validate.py`

**Validator checks:**

Keep Phase 1 boring: validator v1 must only catch mechanical drift, not research quality. Do not grade whether a thesis is strong, a source is high quality, or a project is important.

1. Every `projects/*.md` slug appears in `docs/data/index.json`.
2. Every `docs/data/index.json` row points to an existing `projects/*.md`.
3. Every active project row has a matching `docs/projects/<slug>.html`.
4. Every active project row has required fields from Task 2.
5. `html_page` paths exist.
6. `github_file` equals `file` unless intentionally overridden.
7. `docs/data/project-changelog.json` is valid JSON list and every entry has `date`, `project`, `type`, `summary`, `source`, `importance`.
8. `importance` is one of `high|medium|low`.
9. `docs/data/scan-debug.json` is valid JSON list and run IDs are unique when present.
10. README project list is either marked generated or flagged as unmanaged.

**CLI behavior:**
```bash
python3 scripts/validate.py
# prints PASS/FAIL lines and exits 0/1
```

**Commit:**
```bash
git add scripts/validate.py tests/test_validate.py
git commit -m "feat: add project watchlist validator"
```

**Verification:** Validator initially may fail. If it fails, commit the validator separately only if CI is not yet enabled; then fix data drift in later tasks before enabling CI.

---

### Task 5: Fix current metadata drift until validator passes

**Objective:** Normalize current data before CI is enabled, so `main` does not start red.

**Files:**
- Modify: `projects/*.md` frontmatter where missing `status` / `last_updated`.
- Modify: `index.json`
- Modify: `index.csv`
- Modify: `docs/data/index.json`
- Modify: `data/*.json` if still retained.
- Modify: `README.md` if project list is stale.

**Steps:**
1. Run:
   ```bash
   python3 scripts/validate.py
   ```
2. Fix one class of error at a time: missing fields, missing pages, bad paths, stale README list.
3. Re-run validator after each class.
4. Commit:
   ```bash
   git add projects index.json index.csv docs/data/index.json data README.md
   git commit -m "fix: normalize project metadata for validation"
   ```

**Verification:** `python3 scripts/validate.py` exits 0.

---

### Task 6: Add GitHub Actions CI validation

**Objective:** Make validation automatic on every push/PR after the current repo is already passing locally.

**Files:**
- Create: `.github/workflows/validate.yml`

**Precondition:** `python3 scripts/validate.py` exits 0 on `main`. Do not enable CI before Task 5 is complete.

**Workflow:**
```yaml
name: Validate project watchlist

on:
  pull_request:
  push:
    branches: [main]

jobs:
  validate:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-python@v5
        with:
          python-version: '3.11'
      - name: Run unit tests
        run: python3 -m unittest discover -s tests -v
      - name: Validate repository artifacts
        run: python3 scripts/validate.py
```

**Commit:**
```bash
git add .github/workflows/validate.yml
git commit -m "ci: validate project watchlist artifacts"
```

**Verification:** CI runs on GitHub and passes for the same reasons as local validation.

---

### Task 7: Add generated-file markers and README project-list generation

**Objective:** Make drift detectable by marking generated blocks.

**Files:**
- Modify: `README.md`
- Create/modify: `scripts/generate.py`
- Create: `tests/test_generate_readme.py`

**README markers:**
```md
<!-- PROJECT-LIST:START -->
... generated list ...
<!-- PROJECT-LIST:END -->
```

**Generator behavior v1:**
- Read `docs/data/index.json`.
- Sort by slug.
- Replace only the marked project-list block.
- Leave the rest of README untouched.

**Commands:**
```bash
python3 scripts/generate.py --check
python3 scripts/generate.py
python3 scripts/validate.py
```

**Commit:**
```bash
git add scripts/generate.py tests/test_generate_readme.py README.md
git commit -m "feat: generate README project list"
```

**Verification:** `--check` exits nonzero if README generated block is stale.

---

### Task 8: Generate root indexes and dashboard index from canonical model

**Objective:** Stop hand-editing `index.json`, `index.csv`, and `docs/data/index.json`.

**Files:**
- Modify: `scripts/generate.py`
- Create: `scripts/lib/project_model.py`
- Create: `tests/test_generate_indexes.py`

**Canonical model source:**
- Start with `projects/*.md` frontmatter + parsed sections.
- Avoid `projects/_metadata.json` in v1. An override file is allowed only if a field truly cannot live cleanly in frontmatter; otherwise it becomes another drift source.
- Derive:
  - `file`
  - `github_file`
  - `html_page`
  - `links_count`
  - `x_accounts` from source table + explicit metadata
  - `last_updated` from frontmatter

**Generated outputs:**
- `index.json`
- `index.csv`
- `docs/data/index.json`

**Commands:**
```bash
python3 scripts/generate.py
python3 scripts/generate.py --check
python3 scripts/validate.py
```

**Commit:**
```bash
git add scripts/generate.py scripts/lib/project_model.py tests/test_generate_indexes.py index.json index.csv docs/data/index.json projects
git commit -m "feat: generate project indexes from dossiers"
```

**Verification:** Re-running generator produces no diff.

---

### Task 9: Generate per-project JSON or formally deprecate it

**Objective:** Remove ambiguity around `data/<slug>.json`.

**Decision:** Prefer generating `data/<slug>.json` for now because existing agents may reference it. Add a future deprecation note only after confirming it is unused.

**Files:**
- Modify: `scripts/generate.py`
- Create: `tests/test_generate_project_json.py`
- Modify: `AGENTS.md`

**Generated fields:** Same normalized project object as `docs/data/index.json`, plus parsed sections and source rows if useful.

**Commit:**
```bash
git add scripts/generate.py tests/test_generate_project_json.py data AGENTS.md
git commit -m "feat: generate per-project JSON artifacts"
```

**Verification:** Each active project has exactly one `data/<slug>.json` matching its dossier slug.

---

### Task 10: Generate project HTML pages from a shared template

**Objective:** Eliminate inconsistent project-page layout/class drift.

**Files:**
- Create: `templates/project.html`
- Modify: `scripts/generate.py`
- Create: `tests/test_generate_project_pages.py`
- Modify: `docs/projects/*.html`

**Template requirements:**
- Hero includes title, concise overview, ticker, last updated.
- Right-side **Latest** panel is generated from `docs/data/project-changelog.json` filtered by project.
- Sections render from Markdown in stable order.
- Hermes take renders with `.hermes-take`.
- Evidence/source badges render when present.
- No old compact metadata-only cards.

**Commands:**
```bash
python3 scripts/generate.py
python3 scripts/generate.py --check
python3 scripts/validate.py
```

**Commit:**
```bash
git add templates/project.html scripts/generate.py tests/test_generate_project_pages.py docs/projects
git commit -m "feat: generate project HTML pages from template"
```

**Verification:** Browser-load a sample page, check console, and confirm no class/layout drift.

---

### Task 11: Add source quality and confidence to changelog data

**Objective:** Make evidence quality visible instead of implied.

**Files:**
- Modify: `docs/data/project-changelog.json`
- Modify: `docs/schema/project-metadata.md`
- Modify: `scripts/validate.py`
- Modify: `AGENTS.md`

**New changelog fields:**
```json
{
  "source_quality": "official | team | investor | partner | onchain | dashboard | third-party | terminal | community | inference | unknown",
  "confidence": "confirmed | partially-supported | unverified | stale | disproven | unknown",
  "verification_status": "verified | needs-check | monitoring | stale | disproven"
}
```

**Migration rule:** Migrate every existing changelog entry in one pass. Backfill `source_quality`, `confidence`, and `verification_status` as `unknown` where evidence is unclear, then require the fields on every row. Avoid diff-aware “new rows only” validation in v1.

**Commit:**
```bash
git add docs/data/project-changelog.json docs/schema/project-metadata.md scripts/validate.py AGENTS.md
git commit -m "feat: add source quality fields to changelog"
```

**Verification:** Validator fails if a new changelog row lacks the fields.

---

### Task 12: Improve dashboard UI for confidence and evidence quality

**Objective:** Let a user immediately distinguish official facts from weak signals/speculation.

**Files:**
- Modify: `docs/app.js`
- Modify: `docs/style.css`
- Modify: `docs/index.html` if controls are needed.

**UI changes:**
- Add badges on changelog items:
  - `source_quality`
  - `confidence`
  - `verification_status`
- Add filters inside changelog panel:
  - Importance
  - Source quality
  - Confidence
- Keep global project search separate.

**Commit:**
```bash
git add docs/index.html docs/app.js docs/style.css
git commit -m "feat: show source quality and confidence on dashboard"
```

**Verification:** Serve locally and confirm filters work with no console errors:
```bash
cd docs && python3 -m http.server 8000
```

---

### Task 13: Tighten scan-debug schema for coverage vs findings

**Objective:** Make future scans record both coverage and material findings distinctly before any freshness data or UI depends on it.

**Files:**
- Modify: `docs/schema/project-metadata.md`
- Modify: `AGENTS.md`
- Modify: `scripts/validate.py`

**Required scan-debug fields per run:**
```json
{
  "run_id": "...",
  "started_at": "...",
  "completed_at": "...",
  "status": "completed | partial | error",
  "scan_window": "...",
  "scope": "...",
  "projects_checked": [],
  "logged_projects": [],
  "source_checks": [],
  "decision_trail": [],
  "counts": {
    "projects_checked": 0,
    "projects_with_findings": 0,
    "sources_checked": 0,
    "sources_failed": 0,
    "material_entries": 0,
    "weak_signal_entries": 0
  },
  "errors": [],
  "next_checks": []
}
```

**Commit:**
```bash
git add docs/schema/project-metadata.md AGENTS.md scripts/validate.py
git commit -m "docs: define scan coverage schema"
```

**Verification:** Validator warns/fails according to migration mode, and scan-debug now has enough structure to support coverage/freshness generation without guessing.

---

### Task 14: Generate coverage/freshness data

**Objective:** Make coverage vs findings visible from normalized scan-debug history.

**Precondition:** Task 13 scan-debug schema normalization is implemented and real scan-debug data is reliable enough to derive freshness. `freshness_status` is derived data; do not store it in hand-authored project frontmatter.

**Files:**
- Create: `scripts/audit_coverage.py`
- Create: `docs/data/coverage.json`
- Create: `tests/test_audit_coverage.py`
- Modify: `scripts/generate.py` or call audit from generator.

**Coverage model:**
```json
{
  "slug": "23-eigencloud",
  "project": "EIGEN / EigenCloud",
  "last_scanned": "2026-06-22T02:41:54Z",
  "freshness_status": "fresh | aging | stale | unknown",
  "sources_checked_count": 4,
  "sources_failed_count": 0,
  "material_changes_30d": 3,
  "open_verification_items": 2,
  "next_checks": ["Verify ELIP-12 burn implementation"]
}
```

**Freshness thresholds:**
- `fresh`: scanned within 4h cadence + grace period, e.g. <= 8h.
- `aging`: <= 72h.
- `stale`: > 72h or never scanned.
- `unknown`: missing data.

**Commit:**
```bash
git add scripts/audit_coverage.py docs/data/coverage.json tests/test_audit_coverage.py scripts/generate.py
git commit -m "feat: generate project coverage and freshness data"
```

**Verification:** Every project in `docs/data/index.json` has a coverage row, and freshness is derived from scan history rather than copied from project metadata.

---

### Task 15: Add dashboard coverage/freshness view

**Objective:** Show scan health without forcing user into raw debug data.

**Precondition:** Task 14 coverage/freshness generation exists and real coverage data is reliable enough to drive UI. If not, keep this task blocked and do not ship a freshness UI that creates false confidence.

**Files:**
- Modify: `docs/index.html`
- Modify: `docs/app.js`
- Modify: `docs/style.css`

**UI changes:**
- Add small status strip or card group:
  - Fresh projects
  - Aging projects
  - Stale projects
  - Projects with failed sources
  - Projects with open verification items
- Add project card badge: `fresh`, `aging`, `stale`, `unknown`.
- Add filter: freshness.

**Commit:**
```bash
git add docs/index.html docs/app.js docs/style.css
git commit -m "feat: add coverage freshness view"
```

**Verification:** Browser console clean; project counts match `docs/data/coverage.json`.

---

### Task 16: Update recurring Hermes cron prompt to use generator/validator

**Objective:** Ensure autonomous scans cannot bypass the new machinery.

**Cron job:** `90a396671704` — `Project watchlist research scans — 4h`

**New required scan ending:**
```txt
After editing any dossier/changelog/scan-debug data:
1. Run `python3 scripts/generate.py`.
2. Run `python3 scripts/validate.py`.
3. Inspect `git diff --stat` and `git diff --check`.
4. Commit/push only if validation passes.
5. If validation fails, fix the repo or leave a clear error entry in scan-debug; do not push broken generated artifacts.
```

**Commit:** none unless cron prompt is mirrored into repo docs. Update scheduler through Hermes cron tooling.

**Verification:** `cronjob(action='list')` shows the job still points to `/root/project-watchlist-github`, and a manual `cronjob(action='run', job_id='90a396671704')` completes without validation errors after implementation is stable.

---

### Task 17: Add contributor docs for humans and Discord users

**Objective:** Make “how to modify correctly” obvious.

**Files:**
- Create: `CONTRIBUTING.md`
- Modify: `README.md`
- Modify: `docs/reference.html`

**Content:**
- How to add a project.
- How to add a source.
- How to update a dossier.
- How to run generator/validator.
- Discord shorthand examples:
  - `page:eigencloud`
  - `file:projects/23-eigencloud.md`
  - `source:https://...`
- What not to edit by hand after generator lands.

**Commit:**
```bash
git add CONTRIBUTING.md README.md docs/reference.html
 git commit -m "docs: add contribution workflow for watchlist"
```

**Verification:** A new contributor can follow the docs without reading Discord history.

---

## Acceptance Criteria

The hardening project is done when:

1. `python3 scripts/validate.py` exits 0 locally.
2. GitHub Actions runs unit tests + validator on every push/PR.
3. `python3 scripts/generate.py --check` exits 0 on a clean repo.
4. Re-running `python3 scripts/generate.py` produces no diff after a clean generation.
5. README, root indexes, dashboard index, per-project JSON, and project HTML pages are generated from canonical project dossiers/metadata.
6. Dashboard changelog visibly labels source quality, confidence, and verification status.
7. Dashboard shows freshness/coverage separate from material findings.
8. Scan-debug records projects checked, logged findings, source failures, and next checks distinctly.
9. The 4h Hermes scan job is updated to run generator + validator before commit/push.
10. `git status --short` is clean after generation + validation.

---

## Phased Implementation Recommendation

Do not try to implement this roadmap in one push. Start by making drift visible and blocking regressions, then progressively convert manual artifacts into generated ones.

### Phase 1 — Drift visibility and regression blocking

1. Baseline audit.
2. Metadata contract.
3. Parser.
4. Strict-but-narrow validator.
5. Fix drift until validator passes locally.
6. Enable CI after local validation is green.

### Phase 2 — Generation machinery

7. README/index generator.
8. Per-project JSON generator or formal deprecation.
9. Shared-template HTML generator — treat this as the highest-leverage Phase 2 generator task because it eliminates page-layout drift such as `.project-content` vs `.project-grid`.

### Phase 3 — Evidence quality and coverage UX

10. Source-quality/confidence/verification schema, migrated across all existing changelog rows with `unknown` where needed.
11. Dashboard evidence-quality UI.
12. Normalize scan-debug coverage schema.
13. Coverage/freshness generator from normalized scan-debug data.
14. Dashboard coverage/freshness UI only after generated coverage data is reliable.
15. Extend validator parity checks to catch orphan generated/history files whose slug no longer appears in `data/direct-sources.json` / `docs/data/index.json` (for example, legacy `docs/data/direct-metrics/history/drv-derive.json` alongside canonical `18-drv-derive.json`).
16. Backfill `data/direct-sources.json` entries for remaining Task 1.1 candidate-table projects that were tested but omitted from config (for example GEOD, META, CHIP, BANKR, TAO, Targon). Record failed/blocked/manual-only candidates explicitly instead of leaving them absent; this is coverage debt, not a blocker while the ≥10 acceptance threshold is already met.

### Phase 4 — Automation and contributor workflow

17. Update the 4h cron prompt to run generator + validator before commit/push.
18. Contributor/reference docs for humans and Discord users.

This avoids building a generator on top of unknown drift and gives immediate protection against making the repo worse.

---

## Notes / Non-Goals

- Do not add a database. The repo itself is the database.
- Do not add frontend write tokens. GitHub Pages remains static.
- Do not overbuild a complex framework. Python stdlib scripts are enough.
- Do not try to make every historical changelog entry perfect on day one. Backfill source-quality/confidence fields as `unknown` across all rows, then enforce those fields everywhere.
- Do not put `freshness_status` in hand-authored project metadata; freshness is derived from scan history into `docs/data/coverage.json` / dashboard data.
- Do not remove `data/<slug>.json` until a search confirms no cron/job/tooling expects it.
