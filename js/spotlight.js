/**
 * spotlight.js — Radial gradient follows the mouse inside .card-spotlight elements.
 * Updates --mouse-x / --mouse-y CSS variables used in components.css.
 */
export function initSpotlight() {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  document.addEventListener('mousemove', e => {
    // Only apply to hovered spotlight cards
    const card = e.target.closest('.card-spotlight');
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width)  * 100;
    const y = ((e.clientY - rect.top)  / rect.height) * 100;
    card.style.setProperty('--mouse-x', `${x}%`);
    card.style.setProperty('--mouse-y', `${y}%`);
  });
}
