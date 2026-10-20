/**
 * hero.js — Rotating role words, live Colombo clock, and 3D Interactive Card.
 */
const WORDS = [
  "Frontend Developer",
  "UI/UX Craftsman",
  "Responsive Architect",
  "Clean Code Advocate"
];

export function initHero() {
  initWordRotate();
  initHeroClock();
  init3DHeroCard();
}

function initWordRotate() {
  const el = document.querySelector('.rotating-word');
  if (!el) return;

  let index = 0;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  setInterval(() => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(6px)';
    setTimeout(() => {
      index = (index + 1) % WORDS.length;
      el.textContent = WORDS[index];
      el.style.opacity = '1';
      el.style.transform = 'translateY(0)';
    }, 280);
  }, 3200);

  el.style.transition = 'opacity 0.28s ease, transform 0.28s ease';
}

function initHeroClock() {
  const clockEl = document.getElementById('hero-clock');
  const aboutClock = document.getElementById('about-clock');

  function tick() {
    const now = new Date();
    const time = now.toLocaleTimeString('en-US', {
      timeZone: 'Asia/Colombo',
      hour: '2-digit',
      minute: '2-digit',
      hour12: true,
    });
    if (clockEl) clockEl.textContent = time;
    if (aboutClock) aboutClock.textContent = time;
  }
  tick();
  setInterval(tick, 60000);
}

function init3DHeroCard() {
  const container = document.querySelector('.hero-visual-wrap');
  const card = document.querySelector('.hero-3d-card');
  const floatingBadges = document.querySelectorAll('.hero-float-badge');
  if (!container || !card) return;

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  container.addEventListener('mousemove', e => {
    const rect = container.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -12;
    const rotateY = ((x - centerX) / centerX) * 12;

    card.style.transform = `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) translateZ(10px)`;

    // Parallax on floating badges
    floatingBadges.forEach((badge, i) => {
      const depth = (i + 1) * 6;
      const moveX = ((x - centerX) / centerX) * depth;
      const moveY = ((y - centerY) / centerY) * depth;
      badge.style.transform = `translate(${moveX}px, ${moveY}px)`;
    });
  });

  container.addEventListener('mouseleave', () => {
    card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0)';
    floatingBadges.forEach(badge => {
      badge.style.transform = 'translate(0, 0)';
    });
  });

  // Interactive code tabs
  const tabBtns = document.querySelectorAll('.hero-tab-btn');
  const tabPanes = document.querySelectorAll('.hero-tab-pane');

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const target = btn.dataset.tab;
      tabBtns.forEach(b => b.classList.toggle('active', b === btn));
      tabPanes.forEach(pane => {
        pane.classList.toggle('active', pane.dataset.pane === target);
      });
    });
  });
}
