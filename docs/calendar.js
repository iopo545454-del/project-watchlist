const dataVersion = '20260623-catalyst-status-1';
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
function hasConfirmedDate(item) {
  return item.date_confirmation_status === 'confirmed' && Boolean(item.catalyst_date);
}
function eventStatus(item) {
  return String(item.event_status || '').toLowerCase();
}
function isCompleted(item) {
  return eventStatus(item) === 'completed';
}
function isUpcoming(item) {
  return eventStatus(item) === 'upcoming';
}
function parseCatalystDate(item) {
  const raw = String(item.catalyst_date || '');
  if (/^\d{4}-\d{2}-\d{2}$/.test(raw)) return { precision: 'day', date: new Date(`${raw}T00:00:00Z`) };
  if (/^\d{4}-\d{2}$/.test(raw)) return { precision: 'month', date: new Date(`${raw}-01T00:00:00Z`) };
  if (/^\d{4}$/.test(raw)) return { precision: 'year', date: new Date(`${raw}-01-01T00:00:00Z`) };
  return { precision: 'unknown', date: null };
}
function daysFromToday(date) {
  const now = new Date();
  const today = new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate()));
  return Math.floor((date - today) / 86400000);
}
function bucketFor(item) {
  // Event status wins over fuzzy timing. A source that says "live",
  // "launched", "published", "released", or "run it now" is a completed
  // event, not a forward-looking monthly catalyst. Completed items can be
  // recent, but they live in Alr happened rather than This week/This month.
  if (isCompleted(item)) return 'happened';

  // Only unresolved/upcoming items are eligible for the future lanes.
  if (!isUpcoming(item)) return 'later';

  // If a catalyst has no confirmed/derived date, it should not appear in
  // "This week" or "This month". It belongs in Unconfirmed / later until
  // a source-backed target date is found.
  if (!hasConfirmedDate(item) || isUnconfirmed(item)) return 'later';
  const parsed = parseCatalystDate(item);
  if (!parsed.date) return 'later';
  if (parsed.precision === 'year') return 'later';
  if (parsed.precision === 'month') {
    const now = new Date();
    const sameMonth = parsed.date.getUTCFullYear() === now.getUTCFullYear() && parsed.date.getUTCMonth() === now.getUTCMonth();
    return sameMonth ? 'month' : (parsed.date < now ? 'happened' : 'later');
  }
  const delta = daysFromToday(parsed.date);
  if (delta < 0) return 'happened';
  if (delta <= 7) return 'week';
  if (delta <= 31) return 'month';
  return 'later';
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
  const event = item.event_status ? `<span class="event-status event-${esc(item.event_status)}">${esc(item.event_status)}</span>` : '';
  return `<div class="catalyst-date-line ${dateStatusClass(item)}">
    <span class="date-label">${esc(label)}</span>
    <span class="date-status">${esc(status)}</span>
    ${event}
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
  grouped.happened.sort((a, b) => String(b.catalyst_date || '').localeCompare(String(a.catalyst_date || '')) ||
    String(b.catalyst_date_label || '').localeCompare(String(a.catalyst_date_label || '')) ||
    String(a.project || '').localeCompare(String(b.project || '')) ||
    String(a.catalyst || '').localeCompare(String(b.catalyst || '')));
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
  const repoLink = document.querySelector('#repoLink');
  if (repoLink) repoLink.href = repoBase();
  render();
}).catch(err => {
  document.querySelector('#catalystBoard').innerHTML = '<p class="change-empty">Failed to load catalyst data.</p>';
  console.error(err);
});
document.querySelector('#calSearch')?.addEventListener('input', render);
