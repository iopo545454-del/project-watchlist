let runs = [];
let projects = [];
const dataVersion = '20260614-scan-debug-2';

const esc = value => String(value ?? '').replace(/[&<>'"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[c]));
const repoBase = () => {
  const h = location.hostname;
  const path = location.pathname.split('/').filter(Boolean);
  if (h.endsWith('github.io') && path[0]) return `https://github.com/${h.replace('.github.io', '')}/${path[0]}`;
  return '..';
};
const fmtDateTime = value => {
  if (!value) return '—';
  const d = new Date(value);
  if (Number.isNaN(d.getTime())) return String(value);
  return d.toISOString().replace('T', ' ').replace('.000Z', 'Z');
};
const fmtAgo = value => {
  const d = new Date(value);
  if (Number.isNaN(d.getTime())) return '—';
  const mins = Math.max(0, Math.round((Date.now() - d.getTime()) / 60000));
  if (mins < 60) return `${mins}m ago`;
  const hrs = Math.round(mins / 60);
  if (hrs < 48) return `${hrs}h ago`;
  return `${Math.round(hrs / 24)}d ago`;
};

function renderStatusCards(filtered) {
  const el = document.querySelector('#statusCards');
  const newest = runs[0];
  const totalProjects = projects.length;
  const material = runs.reduce((sum, r) => sum + (r.counts?.material_entries || 0), 0);
  const errors = runs.filter(r => r.status === 'error').length;
  el.innerHTML = `
    <div class="status-card"><span>Latest run</span><strong>${esc(newest ? fmtAgo(newest.completed_at || newest.started_at) : '—')}</strong><small>${esc(newest ? fmtDateTime(newest.completed_at || newest.started_at) : 'No runs')}</small></div>
    <div class="status-card"><span>Runs logged</span><strong>${esc(runs.length)}</strong><small>${esc(filtered.length)} visible after filters</small></div>
    <div class="status-card"><span>Tracked projects</span><strong>${esc(totalProjects)}</strong><small>from docs/data/index.json</small></div>
    <div class="status-card"><span>Material/debug items</span><strong>${esc(material)}</strong><small>${esc(errors)} error runs logged</small></div>`;
}

function renderRuns() {
  const q = document.querySelector('#search').value.toLowerCase();
  const status = document.querySelector('#status').value;
  const list = document.querySelector('#runs');
  const count = document.querySelector('#run-count');
  const data = runs.filter(run => {
    const blob = JSON.stringify(run).toLowerCase();
    return (!q || blob.includes(q)) && (!status || run.status === status);
  });
  count.textContent = `${data.length}/${runs.length} runs`;
  renderStatusCards(data);
  list.innerHTML = data.map(run => {
    const entries = run.decision_trail || [];
    const counts = run.counts || {};
    const projectsChecked = (run.projects_checked || []).slice(0, 12).map(p => `<span class="pill">${esc(p)}</span>`).join('');
    const decisions = entries.map(item => {
      const href = item.url ? `<a href="${esc(item.url)}" target="_blank" rel="noopener">source/page</a>` : '';
      return `<li>
        <div class="decision-top"><strong>${esc(item.project || 'Watchlist')}</strong><span>${esc(item.type || 'scan')}</span>${href}</div>
        <p>${esc(item.summary || '')}</p>
        <small>${esc(item.source || '')}</small>
        <em>${esc(item.decision || '')}</em>
      </li>`;
    }).join('');
    const next = (run.next_checks || []).map(x => `<li>${esc(x)}</li>`).join('');
    return `<details class="run-card" open>
      <summary>
        <div>
          <span class="run-status ${esc(run.status || 'completed')}">${esc(run.status || 'completed')}</span>
          <h3>${esc(fmtDateTime(run.completed_at || run.started_at))}</h3>
          <p>${esc(run.scope || 'Tracked project scan')}</p>
        </div>
        <div class="run-metrics">
          <span>${esc(counts.projects || 0)} projects</span>
          <span>${esc(counts.changelog_entries || entries.length || 0)} entries</span>
          <span>${esc(counts.material_entries || 0)} material</span>
        </div>
      </summary>
      <div class="run-body">
        <div class="project-pills">${projectsChecked || '<span class="muted small">No project list recorded</span>'}</div>
        <div class="debug-columns">
          <section>
            <h4>Decision trail</h4>
            <ol class="decision-list">${decisions || '<li>No per-item trail recorded yet.</li>'}</ol>
          </section>
          <section>
            <h4>Next checks</h4>
            <ul class="next-list">${next || '<li>Continue normal source-priority scan.</li>'}</ul>
          </section>
        </div>
      </div>
    </details>`;
  }).join('') || '<p class="change-empty">No matching scan runs.</p>';
}

Promise.all([
  fetch(`data/scan-debug.json?v=${dataVersion}`).then(r => r.ok ? r.json() : []),
  fetch(`data/index.json?v=${dataVersion}`).then(r => r.ok ? r.json() : [])
]).then(([runRows, projectRows]) => {
  runs = [...runRows].sort((a, b) => String(b.completed_at || b.started_at || '').localeCompare(String(a.completed_at || a.started_at || '')));
  projects = projectRows;
  document.querySelector('#repoLink').href = repoBase();
  renderRuns();
}).catch(err => {
  console.error(err);
  document.querySelector('#runs').innerHTML = '<p class="change-empty">Failed to load scan debug data.</p>';
});

document.querySelector('#search').addEventListener('input', renderRuns);
document.querySelector('#status').addEventListener('change', renderRuns);
