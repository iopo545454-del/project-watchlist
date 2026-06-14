let rows = [];
let sortKey = 'project';
let sortDir = 1;
const dataVersion = '20260613-research-log';

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

function render() {
  const q = document.querySelector('#search').value.toLowerCase();
  const cat = document.querySelector('#category').value;
  let data = rows.filter(r => {
    const blob = JSON.stringify(r).toLowerCase();
    return (!q || blob.includes(q)) && (!cat || r.category === cat);
  });
  data.sort((a, b) => String(a[sortKey] || '').localeCompare(String(b[sortKey] || '')) * sortDir);
  const tb = document.querySelector('tbody');
  tb.innerHTML = data.map(r => `<tr><td><a class="project" href="${linkFor(r)}">${esc(r.project)}</a><div class="muted small">${esc(r.slug)}</div></td><td>${esc(r.ticker || '')}</td><td>${r.category ? esc(r.category) : '<span class="muted">TBD</span>'}</td><td>${r.conviction ? esc(r.conviction) : '<span class="muted">TBD</span>'}</td><td>${(r.x_accounts || []).slice(0, 4).map(x => `<a class="pill" href="${esc(x)}">@${esc(x.split('/').pop())}</a>`).join('') || '<span class="muted">—</span>'}</td><td><span class="pill">${esc(r.links_count || 0)} links</span></td><td class="small">${esc((r.last_updated || '').slice(0, 10))}</td></tr>`).join('');
}

function renderChangelog(items) {
  const list = document.querySelector('#changelog');
  const count = document.querySelector('#changelog-count');
  const latest = [...items]
    .sort((a, b) => String(b.date || '').localeCompare(String(a.date || '')))
    .slice(0, 12);
  const scans = items.map(x => x.last_scanned || x.date).filter(Boolean).sort();
  const mostRecentScan = scans.length ? fmtDate(scans[scans.length - 1]) : '';
  count.textContent = latest.length ? `${latest.length} recent project updates${mostRecentScan ? ` · last scan ${mostRecentScan}` : ''}` : 'No project scans yet';
  list.innerHTML = latest.map(item => {
    const url = item.url ? `<a class="change-link" href="${esc(item.url)}">open project</a>` : '';
    const scan = item.last_scanned ? `<span>scanned ${esc(fmtDate(item.last_scanned))}</span>` : '';
    return `<article class="change-item">
      <div class="change-meta">
        <span>${esc(fmtDate(item.date))}</span>
        <span>${esc(item.project || 'Watchlist')}</span>
        <span>${esc(item.type || 'update')}</span>
        ${scan}
      </div>
      <div class="change-summary">${esc(item.summary || '')}</div>
      <div class="change-source">${esc(item.source || '')} ${url}</div>
    </article>`;
  }).join('');
}

fetch(`data/index.json?v=${dataVersion}`)
  .then(r => r.json())
  .then(d => {
    rows = d;
    document.querySelector('#repoLink').href = repoBase();
    const cats = [...new Set(rows.map(r => r.category).filter(Boolean))].sort();
    document.querySelector('#category').innerHTML += [...cats].map(c => `<option>${esc(c)}</option>`).join('');
    render();
  });

fetch(`data/project-changelog.json?v=${dataVersion}`)
  .then(r => r.ok ? r.json() : [])
  .then(renderChangelog)
  .catch(() => renderChangelog([]));

document.querySelector('#search').addEventListener('input', render);
document.querySelector('#category').addEventListener('change', render);
document.querySelectorAll('th[data-sort]').forEach(th => th.addEventListener('click', () => {
  const k = th.dataset.sort;
  if (sortKey === k) sortDir *= -1;
  else {
    sortKey = k;
    sortDir = 1;
  }
  render();
}));
