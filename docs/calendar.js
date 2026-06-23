const dataVersion = '20260623-catalyst-simple-1';
let catalysts = [];
let mode = 'week';
const esc = value => String(value ?? '').replace(/[&<>'"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[c]));
const repoBase = () => {
  const h = location.hostname;
  const path = location.pathname.split('/').filter(Boolean);
  if (h.endsWith('github.io') && path[0]) return `https://github.com/${h.replace('.github.io', '')}/${path[0]}`;
  return '..';
};
const MODE_COPY = {
  week: {
    eyebrow: 'This week',
    title: 'Catalysts to watch now',
    copy: 'Live, near-term, weekly, recently shipped, and active items. This is the quickest “what should I care about right now?” view.'
  },
  month: {
    eyebrow: 'This month',
    title: 'Monthly catalyst horizon',
    copy: 'Dated, scheduled, launch-window, roadmap, and upcoming catalysts that are not just routine live/ongoing items.'
  },
  unconfirmed: {
    eyebrow: 'Unconfirmed',
    title: 'Tentative / speculative watch items',
    copy: 'Items that could matter but need verification, stronger evidence, or clearer timing before being treated as confirmed catalysts.'
  }
};
const confidenceRank = { confirmed: 3, tentative: 2, speculative: 1, unknown: 0 };
function setText(id, value) { const el = document.querySelector(id); if (el) el.textContent = value; }
function linkFor(item) { return item.project_page || '#'; }
function sourceLink(item) { return item.source_url ? `<a href="${esc(item.source_url)}" target="_blank" rel="noopener">source ↗</a>` : ''; }
function timingText(item) { return `${item.timing || ''} ${item.status || ''} ${item.confidence || ''}`.toLowerCase(); }
function isUnconfirmed(item) {
  const text = timingText(item);
  return item.confidence !== 'confirmed' || /tentative|speculative|unverified|needs verification|needs current verification|early|unknown/.test(text);
}
function isThisWeek(item) {
  const text = timingText(item);
  return !isUnconfirmed(item) && /live|weekly|near[- ]term|recent|ongoing|current|active|rolling|now/.test(text);
}
function isThisMonth(item) {
  const text = timingText(item);
  return !isUnconfirmed(item) && !isThisWeek(item) && (/2026|q[1-4]|month|scheduled|launch|roadmap|upcoming|phased|next|soon/.test(text) || item.timing_bucket === 'upcoming');
}
function bucketFor(item) {
  if (isUnconfirmed(item)) return 'unconfirmed';
  if (isThisWeek(item)) return 'week';
  if (isThisMonth(item)) return 'month';
  return 'month';
}
function dataFor(modeName) {
  const q = document.querySelector('#calSearch')?.value.toLowerCase() || '';
  return catalysts
    .filter(item => bucketFor(item) === modeName)
    .filter(item => !q || JSON.stringify(item).toLowerCase().includes(q))
    .sort((a, b) => String(a.sort_key || '').localeCompare(String(b.sort_key || '')) ||
      (confidenceRank[b.confidence] - confidenceRank[a.confidence]) ||
      String(a.project || '').localeCompare(String(b.project || '')));
}
function updateCounts() {
  const counts = { week: 0, month: 0, unconfirmed: 0 };
  catalysts.forEach(item => { counts[bucketFor(item)] += 1; });
  setText('#stat-week', counts.week);
  setText('#stat-month', counts.month);
  setText('#stat-unconfirmed', counts.unconfirmed);
  setText('#stat-total', catalysts.length);
  setText('#tab-week', counts.week);
  setText('#tab-month', counts.month);
  setText('#tab-unconfirmed', counts.unconfirmed);
}
function card(item) {
  return `<article class="simple-catalyst-card confidence-${esc(item.confidence || 'unknown')}">
    <div class="simple-card-head">
      <span class="date-badge">${esc(item.timing || 'unknown')}</span>
      <span class="confidence-badge">${esc(item.confidence || 'unknown')}</span>
    </div>
    <h3><a href="${esc(linkFor(item))}">${esc(item.project || '')}</a></h3>
    <h4>${esc(item.catalyst || '')}</h4>
    <p>${esc(item.direct_impact || item.evidence || '')}</p>
    <div class="calendar-links">
      ${sourceLink(item)}
      <a href="${esc(linkFor(item))}">project page →</a>
    </div>
  </article>`;
}
function render() {
  updateCounts();
  const info = MODE_COPY[mode];
  setText('#mode-eyebrow', info.eyebrow);
  setText('#mode-title', info.title);
  setText('#mode-copy', info.copy);
  document.querySelectorAll('.calendar-mode').forEach(btn => {
    const active = btn.dataset.mode === mode;
    btn.classList.toggle('is-active', active);
    btn.setAttribute('aria-selected', String(active));
  });
  const rows = dataFor(mode);
  document.querySelector('#calendarCards').innerHTML = rows.map(card).join('') || '<p class="change-empty">No catalysts match this view.</p>';
}
fetch(`data/catalysts.json?v=${dataVersion}`).then(r => r.json()).then(data => {
  catalysts = data;
  document.querySelector('#repoLink').href = repoBase();
  render();
}).catch(err => {
  document.querySelector('#calendarCards').innerHTML = '<p class="change-empty">Failed to load catalyst data.</p>';
  console.error(err);
});
document.querySelectorAll('.calendar-mode').forEach(btn => btn.addEventListener('click', () => { mode = btn.dataset.mode; render(); }));
document.querySelector('#calSearch')?.addEventListener('input', render);
