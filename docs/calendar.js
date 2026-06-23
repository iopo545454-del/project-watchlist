const dataVersion = '20260623-catalyst-1';
let catalysts = [];
const esc = value => String(value ?? '').replace(/[&<>'"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[c]));
const repoBase = () => {
  const h = location.hostname;
  const path = location.pathname.split('/').filter(Boolean);
  if (h.endsWith('github.io') && path[0]) return `https://github.com/${h.replace('.github.io', '')}/${path[0]}`;
  return '..';
};
const groupMeta = {
  live: { title: 'Live / ongoing', note: 'Already active, recurring, or rolling now.' },
  upcoming: { title: 'Upcoming / dated', note: 'Near-term, scheduled, or roadmap-window catalysts.' },
  watch: { title: 'Watch list', note: 'Important but not cleanly dated yet.' },
  unknown: { title: 'Unknown timing', note: 'Needs verification before it can be dated.' }
};
const confidenceRank = { confirmed: 3, tentative: 2, speculative: 1, unknown: 0 };

function setText(id, value) { const el = document.querySelector(id); if (el) el.textContent = value; }
function linkFor(item) { return item.project_page || '#'; }
function sourceLink(item) { return item.source_url ? `<a href="${esc(item.source_url)}" target="_blank" rel="noopener">source ↗</a>` : ''; }
function renderStats(data) {
  setText('#cal-total', data.length);
  setText('#cal-live', data.filter(x => x.timing_bucket === 'live').length);
  setText('#cal-upcoming', data.filter(x => x.timing_bucket === 'upcoming').length);
  setText('#cal-projects', new Set(data.map(x => x.project)).size);
}
function filterData() {
  const q = document.querySelector('#calSearch').value.toLowerCase();
  const status = document.querySelector('#calStatus').value;
  const timing = document.querySelector('#calTiming').value;
  return catalysts.filter(item => {
    const blob = JSON.stringify(item).toLowerCase();
    return (!q || blob.includes(q)) && (!status || item.confidence === status) && (!timing || item.timing_bucket === timing);
  }).sort((a, b) => {
    const bucketOrder = { live: 0, upcoming: 1, watch: 2, unknown: 3 };
    return (bucketOrder[a.timing_bucket] - bucketOrder[b.timing_bucket]) ||
      String(a.sort_key || '').localeCompare(String(b.sort_key || '')) ||
      (confidenceRank[b.confidence] - confidenceRank[a.confidence]) ||
      String(a.project || '').localeCompare(String(b.project || ''));
  });
}
function renderCalendar() {
  const data = filterData();
  renderStats(data);
  const groups = document.querySelector('#calendarGroups');
  if (!data.length) {
    groups.innerHTML = '<p class="change-empty">No catalysts match the current filters.</p>';
    return;
  }
  groups.innerHTML = ['live', 'upcoming', 'watch', 'unknown'].map(bucket => {
    const items = data.filter(x => x.timing_bucket === bucket);
    if (!items.length) return '';
    const meta = groupMeta[bucket];
    return `<section class="calendar-group calendar-${esc(bucket)}">
      <div class="panel-head">
        <div>
          <p class="eyebrow">${esc(meta.title)}</p>
          <h2>${items.length} catalyst${items.length === 1 ? '' : 's'}</h2>
          <p class="sub mini">${esc(meta.note)}</p>
        </div>
      </div>
      <div class="calendar-list">
        ${items.map(item => `<article class="calendar-item confidence-${esc(item.confidence || 'unknown')}">
          <div class="calendar-date"><span>${esc(item.timing || 'unknown')}</span></div>
          <div class="calendar-body">
            <div class="change-meta">
              <span>${esc(item.confidence || 'unknown')}</span>
              <span>${esc(item.status || 'status unknown')}</span>
              <span>${esc(item.ticker || item.slug || '')}</span>
            </div>
            <h3><a href="${esc(linkFor(item))}">${esc(item.project || '')}</a></h3>
            <h4>${esc(item.catalyst || '')}</h4>
            <p>${esc(item.direct_impact || item.evidence || '')}</p>
            <div class="calendar-links">
              ${sourceLink(item)}
              <a href="${esc(linkFor(item))}">project page →</a>
            </div>
          </div>
        </article>`).join('')}
      </div>
    </section>`;
  }).join('');
}

fetch(`data/catalysts.json?v=${dataVersion}`).then(r => r.json()).then(data => {
  catalysts = data;
  document.querySelector('#repoLink').href = repoBase();
  renderCalendar();
}).catch(err => {
  document.querySelector('#calendarGroups').innerHTML = '<p class="change-empty">Failed to load catalyst data.</p>';
  console.error(err);
});
['#calSearch', '#calStatus', '#calTiming'].forEach(sel => document.querySelector(sel)?.addEventListener('input', renderCalendar));
['#calStatus', '#calTiming'].forEach(sel => document.querySelector(sel)?.addEventListener('change', renderCalendar));
