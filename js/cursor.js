/**
 * cursor.js — Custom magnetic cursor follower.
 * Only activates on fine-pointer (mouse) devices.
 * The dot tracks instantly; the ring lags for a fluid feel.
 */
export function initCursor() {
  // Skip on touch-only devices
  if (!window.matchMedia('(pointer: fine)').matches) return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const dot  = document.getElementById('cursor-dot');
  const ring = document.getElementById('cursor-ring');
  if (!dot || !ring) return;

  let mx = window.innerWidth / 2;
  let my = window.innerHeight / 2;
  let rx = mx, ry = my;

  // Track mouse position
  document.addEventListener('mousemove', e => {
    mx = e.clientX;
    my = e.clientY;
    dot.style.left  = mx + 'px';
    dot.style.top   = my + 'px';
  }, { passive: true });

  // Lag ring with lerp
  function lerp(a, b, t) { return a + (b - a) * t; }

  function loop() {
    rx = lerp(rx, mx, 0.14);
    ry = lerp(ry, my, 0.14);
    ring.style.left = rx + 'px';
    ring.style.top  = ry + 'px';
    requestAnimationFrame(loop);
  }
  requestAnimationFrame(loop);

  // Hover state — enlarge ring on interactive elements
  const INTERACTIVE_SELECTORS = 'a, button, [role="button"], .filter-tab, .gallery-item, .project-card, .skill-tile, .testimonial-card, .hero-tab-btn';
  document.addEventListener('mouseover', e => {
    if (e.target.closest(INTERACTIVE_SELECTORS)) {
      document.body.classList.add('cursor-hover');
    }
  });
  document.addEventListener('mouseout', e => {
    if (e.target.closest(INTERACTIVE_SELECTORS)) {
      document.body.classList.remove('cursor-hover');
    }
  });

  // Click pulse
  document.addEventListener('mousedown', () => document.body.classList.add('cursor-clicking'));
  document.addEventListener('mouseup',   () => document.body.classList.remove('cursor-clicking'));
}
