let rows = [];
let changes = [];
const dataVersion = '20260614-scan-debug';

const repoBase = () => {
  const h = location.hostname;
  const path = location.pathname.split('/').filter(Boolean);
  if (h.endsWith('github.io') && path[0]) {
    const user = h.replace('.github.io', '');
    const repo = path[0];
    return `https://github.com/${user}/${repo}`;
  }
  return '..';
};

const linkFor = r => r.html_page || `${repoBase()}/blob/main/${r.file}`;
const intakeIssueUrl = ({ project, token, x, notes }) => {
  const title = `Project intake: ${project}`;
  const body = [
    '## Project intake',
    '',
    `Project name: ${project}`,
    `Token address: ${token}`,
    `Main X / Twitter: ${x}`,
    `Notes / context: ${notes || 'n/a'}`,
    '',
    'Hermes instructions:',
    '- Create a new project page if this project is not already tracked.',
    '- Track down official/project sources and relevant founder/core-contributor accounts.',
    '- Run the initial overall review and mark initial_review_done=true when complete.'
  ].join('\n');
  const params = new URLSearchParams({
    title,
    body,
    labels: 'project-intake,hermes-review'
  });
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

const sortedChanges = () => [...changes].sort((a, b) => String(b.date || '').localeCompare(String(a.date || '')));

function latestChangeFor(projectName) {
  return sortedChanges().find(c => c.project === projectName) || null;
}

function renderChangelog() {
  const list = document.querySelector('#changelog');
  const count = document.querySelector('#changelog-count');
  const latest = sortedChanges().slice(0, 20);
  const scans = changes.map(x => x.last_scanned || x.date).filter(Boolean).sort();
  const mostRecentScan = scans.length ? fmtDate(scans[scans.length - 1]) : '';
  count.textContent = latest.length ? `${latest.length} latest · scan ${mostRecentScan || '—'}` : 'No scans yet';
  list.innerHTML = latest.map(item => {
    const href = item.url ? esc(item.url) : '#';
    const scan = item.last_scanned ? `<span>scanned ${esc(fmtDate(item.last_scanned))}</span>` : '';
    return `<a class="change-item" href="${href}">
      <div class="change-meta">
        <span>${esc(fmtDate(item.date))}</span>
        <span>${esc(item.type || 'update')}</span>
        ${scan}
      </div>
      <div class="change-project">${esc(item.project || 'Watchlist')}</div>
      <div class="change-summary">${esc(item.summary || '')}</div>
      <div class="change-source">${esc(item.source || '')}</div>
    </a>`;
  }).join('') || '<p class="change-empty">No project scans yet.</p>';
}

function renderBoard() {
  const q = document.querySelector('#search').value.toLowerCase();
  const cat = document.querySelector('#category').value;
  const board = document.querySelector('#projectBoard');
  const count = document.querySelector('#project-count');

  const data = rows.filter(r => {
    const latest = latestChangeFor(r.project);
    const blob = JSON.stringify({ ...r, latest }).toLowerCase();
    return (!q || blob.includes(q)) && (!cat || r.category === cat);
  }).sort((a, b) => {
    const ca = latestChangeFor(a.project)?.date || a.last_updated || '';
    const cb = latestChangeFor(b.project)?.date || b.last_updated || '';
    return String(cb).localeCompare(String(ca)) || String(a.project || '').localeCompare(String(b.project || ''));
  });

  count.textContent = `${data.length}/${rows.length} projects`;
  board.innerHTML = data.map(r => {
    const latest = latestChangeFor(r.project);
    const latestDate = latest?.last_scanned || latest?.date || r.last_updated || '';
    const initialPending = r.initial_review_done === false;
    const latestType = initialPending ? 'initial review pending' : (latest?.type || 'scan');
    const summary = initialPending ? 'Hermes will find official sources and run the first overview on the next scan.' : (latest?.summary || 'No project-info change logged yet.');
    const accounts = (r.x_accounts || []).slice(0, 3).map(x => `<span class="pill">@${esc(x.split('/').pop())}</span>`).join('');
    const status = initialPending ? '<span class="status-pending">Initial review pending</span>' : '';
    return `<a class="project-card" href="${esc(linkFor(r))}">
      <div class="card-topline">
        <span class="ticker">${esc(r.ticker || r.slug || '')}</span>
        <span class="card-date">${esc(fmtDate(latestDate))}</span>
      </div>
      <h3>${esc(r.project)}</h3>
      ${status}
      <p class="latest-label">Latest change · ${esc(latestType)}</p>
      <p class="latest-summary">${esc(summary)}</p>
      <div class="card-footer">
        <span>${esc(r.links_count || 0)} sources</span>
        <span>${esc((r.x_accounts || []).length)} X accts</span>
      </div>
      <div class="card-pills">${accounts || '<span class="muted small">No X accounts</span>'}</div>
    </a>`;
  }).join('') || '<p class="change-empty">No matching projects.</p>';
}

function renderAll() {
  renderChangelog();
  renderBoard();
}

Promise.all([
  fetch(`data/index.json?v=${dataVersion}`).then(r => r.json()),
  fetch(`data/project-changelog.json?v=${dataVersion}`).then(r => r.ok ? r.json() : [])
]).then(([projectRows, changeRows]) => {
  rows = projectRows;
  changes = changeRows;
  document.querySelector('#repoLink').href = repoBase();
  const cats = [...new Set(rows.map(r => r.category).filter(Boolean))].sort();
  document.querySelector('#category').innerHTML += cats.map(c => `<option>${esc(c)}</option>`).join('');
  renderAll();
}).catch(err => {
  document.querySelector('#projectBoard').innerHTML = `<p class="change-empty">Failed to load dashboard data.</p>`;
  console.error(err);
});

document.querySelector('#search').addEventListener('input', renderBoard);
document.querySelector('#category').addEventListener('change', renderBoard);

const intakeForm = document.querySelector('#projectIntakeForm');
const intakeModal = document.querySelector('#intakeModal');
const openIntake = document.querySelector('#openIntake');
const closeIntake = document.querySelector('#closeIntake');
const setIntakeOpen = open => {
  if (!intakeModal) return;
  intakeModal.classList.toggle('is-open', open);
  intakeModal.setAttribute('aria-hidden', open ? 'false' : 'true');
  document.body.classList.toggle('modal-open', open);
  if (open) document.querySelector('#intakeProject')?.focus();
};
openIntake?.addEventListener('click', () => setIntakeOpen(true));
closeIntake?.addEventListener('click', () => setIntakeOpen(false));
document.querySelectorAll('[data-close-intake]').forEach(el => el.addEventListener('click', () => setIntakeOpen(false)));
document.addEventListener('keydown', event => {
  if (event.key === 'Escape') setIntakeOpen(false);
});
if (intakeForm) {
  intakeForm.addEventListener('submit', event => {
    event.preventDefault();
    const project = document.querySelector('#intakeProject').value.trim();
    const token = document.querySelector('#intakeToken').value.trim();
    const x = document.querySelector('#intakeX').value.trim();
    const notes = document.querySelector('#intakeNotes').value.trim();
    if (!project || !token || !x) return;
    window.open(intakeIssueUrl({ project, token, x, notes }), '_blank', 'noopener');
  });
}
