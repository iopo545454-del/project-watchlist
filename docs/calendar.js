const dataVersion = '20260623-catalyst-dates-1';
let catalysts = [];
const lanes = ['happened', 'week', 'month', 'later'];
const esc = value => String(value ?? '').replace(/[&<>'"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[c]));
const repoBase = () => {
  const h = location.hostname;
  const path = location.pathname.split('/').filter(Boolean);
  if (h.endsWith('github.io') && path[0]) return `https://github.com/${h.replace('.github.io', '')}/${path[0]}`;
  return '..';
};
const confidenceRank = { confirmed: 3, tentative: 2, speculative: 1, unknown: 0 };
function setText(id, value) { const el = document.querySelector(id); if (el) el.textContent = value; }
function linkFor(item) { return item.project_page || '#'; }
function sourceLink(item) { return item.source_url ? `<a href="${esc(item.source_url)}" target="_blank" rel="noopener">source ↗</a>` : ''; }
function timingText(item) { return `${item.timing || ''} ${item.status || ''} ${item.confidence || ''} ${item.timing_bucket || ''} ${item.catalyst || ''}`.toLowerCase(); }
function isUnconfirmed(item) {
  const text = timingText(item);
  return item.confidence !== 'confirmed' || /tentative|speculative|unverified|needs verification|needs current verification|early|unknown|watch/.test(text);
}
function isAlreadyHappened(item) {
  const text = timingText(item);
  return !isUnconfirmed(item) && /live|launched|shipped|completed|released|mainnet|went live|already|active|ongoing|current/.test(text);
}
function isThisWeek(item) {
  const text = timingText(item);
  return !isUnconfirmed(item) && !isAlreadyHappened(item) && /weekly|near[- ]term|this week|now|recent|rolling/.test(text);
}
function isThisMonth(item) {
  const text = timingText(item);
  return !isUnconfirmed(item) && !isAlreadyHappened(item) && (/this month|month|2026|q[1-4]|scheduled|launch|roadmap|upcoming|phased|next|soon/.test(text) || item.timing_bucket === 'upcoming');
}
function bucketFor(item) {
  if (isUnconfirmed(item)) return 'later';
  if (isAlreadyHappened(item)) return 'happened';
  if (isThisWeek(item)) return 'week';
  if (isThisMonth(item)) return 'month';
  return 'month';
}
function filteredData() {
  const q = document.querySelector('#calSearch')?.value.toLowerCase() || '';
  return catalysts
    .filter(item => !q || JSON.stringify(item).toLowerCase().includes(q))
    .sort((a, b) => String(a.catalyst_date || '9999').localeCompare(String(b.catalyst_date || '9999')) ||
      String(a.sort_key || '').localeCompare(String(b.sort_key || '')) ||
      (confidenceRank[b.confidence] - confidenceRank[a.confidence]) ||
      String(a.project || '').localeCompare(String(b.project || '')) ||
      String(a.catalyst || '').localeCompare(String(b.catalyst || '')));
}
function dateStatusClass(item) {
  return item.date_confirmation_status === 'confirmed' ? 'date-confirmed' : 'date-needs-confirmation';
}
function dateLine(item) {
  const label = item.catalyst_date_label || item.timing || 'No set date yet — needs confirmation';
  const status = item.date_confirmation_status === 'confirmed' ? 'confirmed date' : 'needs date check';
  return `<div class="catalyst-date-line ${dateStatusClass(item)}">
    <span class="date-label">${esc(label)}</span>
    <span class="date-status">${esc(status)}</span>
  </div>`;
}
function card(item) {
  return `<article class="simple-catalyst-card catalyst-board-card confidence-${esc(item.confidence || 'unknown')}">
    <div class="simple-card-head">
      <span class="date-badge">${esc(item.timing || 'unknown')}</span>
      <span class="confidence-badge">${esc(item.confidence || 'unknown')}</span>
    </div>
    ${dateLine(item)}
    <h3><a href="${esc(linkFor(item))}">${esc(item.project || '')}</a></h3>
    <h4>${esc(item.catalyst || '')}</h4>
    <p>${esc(item.direct_impact || item.evidence || '')}</p>
    <div class="calendar-links">
      ${sourceLink(item)}
      <a href="${esc(linkFor(item))}">project →</a>
    </div>
  </article>`;
}
function render() {
  const grouped = { happened: [], week: [], month: [], later: [] };
  filteredData().forEach(item => grouped[bucketFor(item)].push(item));
  lanes.forEach(lane => {
    setText(`#stat-${lane}`, grouped[lane].length);
    setText(`#lane-${lane}-count`, grouped[lane].length);
    const target = document.querySelector(`#lane-${lane}`);
    if (!target) return;
    target.innerHTML = grouped[lane].map(card).join('') || '<p class="change-empty">No catalysts here.</p>';
  });
}
fetch(`data/catalysts.json?v=${dataVersion}`).then(r => r.json()).then(data => {
  catalysts = data;
  document.querySelector('#repoLink').href = repoBase();
  render();
}).catch(err => {
  document.querySelector('#catalystBoard').innerHTML = '<p class="change-empty">Failed to load catalyst data.</p>';
  console.error(err);
});
document.querySelector('#calSearch')?.addEventListener('input', render);
