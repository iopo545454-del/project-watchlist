let rows = [];
let changes = [];
const dataVersion = '20260614-board-layout';

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
    const latestType = latest?.type || 'scan';
    const summary = latest?.summary || 'No project-info change logged yet.';
    const accounts = (r.x_accounts || []).slice(0, 3).map(x => `<span class="pill">@${esc(x.split('/').pop())}</span>`).join('');
    return `<a class="project-card" href="${esc(linkFor(r))}">
      <div class="card-topline">
        <span class="ticker">${esc(r.ticker || r.slug || '')}</span>
        <span class="card-date">${esc(fmtDate(latestDate))}</span>
      </div>
      <h3>${esc(r.project)}</h3>
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
