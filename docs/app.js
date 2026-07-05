let rows = [];
let changes = [];
let catalysts = [];
let sortMode = 'recent';
const dataVersion = '20260705-context-blocks-1';

/* ---------- category color + label system ---------- */
const CATEGORY_MAP = {
  'Crypto AI / decentralized neo-cloud':              { color: '#45d4ff', label: 'neo-cloud' },
  'Crypto AI / verifiable cloud / restaking':         { color: '#b58cff', label: 'restaking' },
  'Crypto AI / verified inference / useful PoW':       { color: '#4dffd0', label: 'inference' },
  'Decentralized AI / collectively-owned model training': { color: '#ff9a4d', label: 'model training' },
  'Base AI agents / agent commerce':                  { color: '#ff7ac6', label: 'agent commerce' },
  'Base AI agents / autonomous agent framework':      { color: '#ff5cae', label: 'agent framework' },
  'DePIN':                                            { color: '#ffd54a', label: 'DePIN' },
};
const FALLBACK_HUES = ['#45d4ff', '#b58cff', '#4dffd0', '#ff9a4d', '#ff7ac6', '#ffd54a', '#7aa2ff'];
function categoryMeta(cat) {
  if (!cat) return { color: '#8b94a0', label: 'uncategorized' };
  if (CATEGORY_MAP[cat]) return CATEGORY_MAP[cat];
  let h = 0;
  for (let i = 0; i < cat.length; i++) h = (h * 31 + cat.charCodeAt(i)) >>> 0;
  const short = cat.split('/').pop().trim().toLowerCase();
  return { color: FALLBACK_HUES[h % FALLBACK_HUES.length], label: short };
}

const repoBase = () => {
  const h = location.hostname;
  const path = location.pathname.split('/').filter(Boolean);
  if (h.endsWith('github.io') && path[0]) {
    const user = h.replace('.github.io', '');
    return `https://github.com/${user}/${path[0]}`;
  }
  return '..';
};

const linkFor = r => r.html_page || `${repoBase()}/blob/main/${r.file}`;
const intakeIssueUrl = ({ project, token, x, notes }) => {
  const body = [
    '## Project intake', '',
    `Project name: ${project}`,
    `Token address: ${token}`,
    `Main X / Twitter: ${x}`,
    `Notes / context: ${notes || 'n/a'}`, '',
    'Hermes instructions:',
    '- Create a new project page if this project is not already tracked.',
    '- Track down official/project sources and relevant founder/core-contributor accounts.',
    '- Run the initial overall review and mark initial_review_done=true when complete.'
  ].join('\n');
  const params = new URLSearchParams({ title: `Project intake: ${project}`, body, labels: 'project-intake,hermes-review' });
  return `${repoBase()}/issues/new?${params.toString()}`;
};

const fmtDate = value => {
  if (!value) return '';
  const d = new Date(value);
  if (Number.isNaN(d.getTime())) return String(value).slice(0, 10);
  return d.toISOString().slice(0, 10);
};
const esc = value => String(value ?? '').replace(/[&<>'"]/g, c => ({
  '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;'
}[c]));
const IMP_RANK = { high: 3, medium: 2, low: 1 };
const SIGNAL_LABEL = { high: 'actionable', medium: 'watch', low: 'log' };
const REL_LABEL = { catalyst: 'catalyst', open_question: 'question', watch_item: 'watch', thesis: 'thesis', metric: 'metric' };

function renderContextBlock(item, { compact = false } = {}) {
  const bits = [];
  if (item.novelty) bits.push(`<span class="context-pill novelty-${esc(item.novelty)}">${esc(item.novelty)}</span>`);
  if (item.delta) bits.push(`<span class="context-delta">Δ ${esc(item.delta)}</span>`);
  const rels = Array.isArray(item.relates_to) ? item.relates_to : [];
  const rel = rels[0];
  if (rel?.type || rel?.ref) {
    bits.push(`<span class="context-rel">${esc(REL_LABEL[rel.type] || rel.type || 'ref')}: ${esc(rel.ref || '')}</span>`);
  }
  if (!bits.length) return '';
  return `<div class="context-block${compact ? ' compact' : ''}">${bits.join('')}</div>`;
}

const sortedChanges = () => [...changes].sort((a, b) => String(b.date || '').localeCompare(String(a.date || '')));
const latestChangeFor = projectName => sortedChanges().find(c => c.project === projectName) || null;

/* ---------- stats tape ---------- */
function renderStats() {
  const cutoff = Date.now() - 14 * 864e5;
  const highRecent = changes.filter(c => (c.importance === 'high') && new Date(c.date).getTime() >= cutoff).length;
  const cats = new Set(rows.map(r => r.category).filter(Boolean));
  const scans = changes.map(x => x.last_scanned || x.date).filter(Boolean).sort();
  const set = (id, v) => { const el = document.querySelector(id); if (el) el.innerHTML = v; };
  set('#stat-projects', rows.length);
  set('#stat-catalysts', catalysts.length || '0');
  set('#stat-high', highRecent || '0');
  set('#stat-cats', cats.size);
  set('#stat-scan', esc(scans.length ? fmtDate(scans[scans.length - 1]) : '—'));
}

/* ---------- catalyst preview ---------- */
function renderCatalystPreview() {
  const el = document.querySelector('#catalystPreview');
  if (!el) return;
  const preview = [...catalysts]
    .filter(item => (item.event_status === 'upcoming' && item.date_confirmation_status === 'confirmed' && item.catalyst_date) || item.event_status === 'completed')
    .sort((a, b) => {
      if (a.event_status !== b.event_status) return a.event_status === 'upcoming' ? -1 : 1;
      if (a.event_status === 'completed') return String(b.catalyst_date || '').localeCompare(String(a.catalyst_date || '')) || String(a.project || '').localeCompare(String(b.project || ''));
      return String(a.catalyst_date || '9999').localeCompare(String(b.catalyst_date || '9999')) || String(a.project || '').localeCompare(String(b.project || ''));
    })
    .slice(0, 10);
  el.innerHTML = preview.map(item => `<a class="catalyst-chip confidence-${esc(item.confidence || 'unknown')}" href="${esc(item.project_page || 'calendar.html')}">
    <span class="catalyst-time">${esc(item.event_status || item.timing_bucket || 'unknown')} · ${esc(item.timing || 'unknown')}</span>
    <strong>${esc(item.project || '')}</strong>
    <span>${esc(item.catalyst || '')}</span>
  </a>`).join('') || '<p class="change-empty">No catalyst rows parsed yet.</p>';
}

/* ---------- changelog feed ---------- */
function renderChangelog() {
  const list = document.querySelector('#changelog');
  const count = document.querySelector('#changelog-count');
  const importance = document.querySelector('#importance')?.value || '';
  const latest = sortedChanges().filter(item => !importance || (item.importance || 'low') === importance).slice(0, 25);
  const scans = changes.map(x => x.last_scanned || x.date).filter(Boolean).sort();
  const mostRecentScan = scans.length ? fmtDate(scans[scans.length - 1]) : '';
  count.textContent = latest.length ? `${latest.length} latest · scan ${mostRecentScan || '—'}` : 'No scans yet';
  list.innerHTML = latest.map(item => {
    const href = item.url ? esc(item.url) : '#';
    const scan = item.last_scanned ? `<span>scanned ${esc(fmtDate(item.last_scanned))}</span>` : '';
    const imp = item.importance || 'low';
    const sig = SIGNAL_LABEL[imp] || imp;
    return `<a class="change-item importance-${esc(imp)}" href="${href}">
      <div class="change-meta">
        <span>${esc(fmtDate(item.date))}</span>
        <span>${esc(item.type || 'update')}</span>
        <span class="importance-pill importance-${esc(imp)}">${esc(sig)}</span>
        ${item.novelty ? `<span class="novelty-tag novelty-${esc(item.novelty)}">${esc(item.novelty)}</span>` : ''}
        ${scan}
      </div>
      <div class="change-project">${esc(item.project || 'Watchlist')}</div>
      <div class="change-summary">${esc(item.summary || '')}</div>
      ${renderContextBlock(item)}
      <div class="change-source">${esc(item.source || '')}</div>
    </a>`;
  }).join('') || '<p class="change-empty">No project scans yet.</p>';
}

/* ---------- project board ---------- */
function sortRows(data) {
  const recency = r => latestChangeFor(r.project)?.date || r.last_updated || '';
  const impOf = r => IMP_RANK[latestChangeFor(r.project)?.importance] || 0;
  if (sortMode === 'name') return data.sort((a, b) => String(a.project || '').localeCompare(String(b.project || '')));
  if (sortMode === 'importance') return data.sort((a, b) => (impOf(b) - impOf(a)) || String(recency(b)).localeCompare(String(recency(a))));
  return data.sort((a, b) => String(recency(b)).localeCompare(String(recency(a))) || String(a.project || '').localeCompare(String(b.project || '')));
}

function renderBoard() {
  const q = document.querySelector('#search').value.toLowerCase();
  const cat = document.querySelector('#category').value;
  const board = document.querySelector('#projectBoard');
  const count = document.querySelector('#project-count');

  const data = sortRows(rows.filter(r => {
    const latest = latestChangeFor(r.project);
    const blob = JSON.stringify({ ...r, latest }).toLowerCase();
    return (!q || blob.includes(q)) && (!cat || r.category === cat);
  }));

  count.textContent = `${data.length} / ${rows.length} tracked`;
  board.innerHTML = data.map((r, i) => {
    const latest = latestChangeFor(r.project);
    const latestDate = latest?.last_scanned || latest?.date || r.last_updated || '';
    const initialPending = r.initial_review_done === false;
    const imp = initialPending ? 'low' : (latest?.importance || 'low');
    const latestType = initialPending ? 'initial review pending' : (latest?.type || 'scan');
    const summary = initialPending ? 'Hermes will find official sources and run the first overview on the next scan.' : (latest?.summary || 'No project-info change logged yet.');
    const context = !initialPending && latest ? renderContextBlock(latest, { compact: true }) : '';
    const status = initialPending ? '<span class="status-pending">● Initial review pending</span>' : '';
    const meta = categoryMeta(r.category);
    const idx = (r.slug || '').split('-')[0] || String(i + 1).padStart(2, '0');
    const delay = Math.min(i * 32, 520);
    return `<a class="project-card" href="${esc(linkFor(r))}" style="--cat:${meta.color};animation-delay:${delay}ms">
      <div class="card-topline">
        <span class="ticker">${esc(r.ticker || r.slug || '')}</span>
        <span class="card-date"><span class="sig-dot importance-${esc(imp)}"></span>${esc(fmtDate(latestDate))}</span>
      </div>
      <h3>${esc(r.project)}</h3>
      <div class="card-meta-row">
        <span class="cat-chip">${esc(meta.label)}</span>
        <span>${esc(r.links_count || 0)} sources</span>
        <span>${esc((r.x_accounts || []).length)} X</span>
      </div>
      ${status}
      <p class="latest-label">Latest · ${esc(latestType)}</p>
      <p class="latest-summary">${esc(summary)}</p>
      ${context}
      <span class="card-idx">№${esc(idx)}</span>
    </a>`;
  }).join('') || '<p class="change-empty">No matching projects.</p>';
}

function renderAll() { renderStats(); renderCatalystPreview(); renderChangelog(); renderBoard(); }

/* ---------- skeleton loading ---------- */
function showSkeletons() {
  const projectBoard = document.querySelector('#projectBoard');
  const changelog = document.querySelector('#changelog');
  const catalystPreview = document.querySelector('#catalystPreview');
  if (projectBoard) projectBoard.innerHTML = Array.from({ length: 8 }, () => '<div class="skeleton"></div>').join('');
  if (changelog) changelog.innerHTML = Array.from({ length: 6 }, () => '<div class="skeleton sk-row"></div>').join('');
  if (catalystPreview) catalystPreview.innerHTML = Array.from({ length: 4 }, () => '<div class="skeleton sk-chip"></div>').join('');
}

showSkeletons();
Promise.all([
  fetch(`data/index.json?v=${dataVersion}`).then(r => r.json()),
  fetch(`data/project-changelog.json?v=${dataVersion}`).then(r => r.ok ? r.json() : []),
  fetch(`data/catalysts.json?v=${dataVersion}`).then(r => r.ok ? r.json() : [])
]).then(([projectRows, changeRows, catalystRows]) => {
  rows = projectRows;
  changes = changeRows;
  catalysts = catalystRows;
  document.querySelector('#repoLink').href = repoBase();
  const cats = [...new Set(rows.map(r => r.category).filter(Boolean))].sort();
  document.querySelector('#category').innerHTML += cats.map(c => `<option value="${esc(c)}">${esc(categoryMeta(c).label)}</option>`).join('');
  renderAll();
}).catch(err => {
  document.querySelector('#projectBoard').innerHTML = `<p class="change-empty">Failed to load dashboard data.</p>`;
  console.error(err);
});

document.querySelector('#search').addEventListener('input', renderBoard);
document.querySelector('#category').addEventListener('change', renderBoard);
document.querySelector('#importance')?.addEventListener('change', renderChangelog);

const sortSeg = document.querySelector('#sortSeg');
sortSeg?.addEventListener('click', e => {
  const btn = e.target.closest('button[data-sort]');
  if (!btn) return;
  sortMode = btn.dataset.sort;
  sortSeg.querySelectorAll('button').forEach(b => b.setAttribute('aria-pressed', String(b === btn)));
  renderBoard();
});

/* ---------- intake modal ---------- */
const intakeForm = document.querySelector('#projectIntakeForm');
const intakeModal = document.querySelector('#intakeModal');
const setIntakeOpen = open => {
  if (!intakeModal) return;
  intakeModal.classList.toggle('is-open', open);
  intakeModal.setAttribute('aria-hidden', open ? 'false' : 'true');
  document.body.classList.toggle('modal-open', open);
  if (open) document.querySelector('#intakeProject')?.focus();
};
document.querySelector('#openIntake')?.addEventListener('click', () => setIntakeOpen(true));
document.querySelector('#closeIntake')?.addEventListener('click', () => setIntakeOpen(false));
document.querySelectorAll('[data-close-intake]').forEach(el => el.addEventListener('click', () => setIntakeOpen(false)));
document.addEventListener('keydown', e => { if (e.key === 'Escape') setIntakeOpen(false); });
if (intakeForm) {
  intakeForm.addEventListener('submit', e => {
    e.preventDefault();
    const project = document.querySelector('#intakeProject').value.trim();
    const token = document.querySelector('#intakeToken').value.trim();
    const x = document.querySelector('#intakeX').value.trim();
    const notes = document.querySelector('#intakeNotes').value.trim();
    if (!project || !token || !x) return;
    window.open(intakeIssueUrl({ project, token, x, notes }), '_blank', 'noopener');
  });
}
