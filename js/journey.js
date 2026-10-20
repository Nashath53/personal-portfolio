/**
 * journey.js — Renders the timeline from /js/data/journey.js
 */
import { journey } from './data/journey.js';

const TYPE_LABELS = {
  education:    'Education',
  certification:'Certification',
  experience:   'Experience',
};

export function initJourney() {
  const el = document.getElementById('timeline');
  if (!el) return;

  el.innerHTML = journey.map(item => `
    <div class="timeline-item reveal">
      <div class="timeline-dot"></div>
      <div class="timeline-year">${TYPE_LABELS[item.type] || item.type} · ${item.year}</div>
      <h3 class="timeline-title">${item.title}</h3>
      <p class="timeline-place">${item.place}</p>
      ${item.desc ? `<p class="timeline-desc">${item.desc}</p>` : ''}
    </div>
  `).join('');
}
