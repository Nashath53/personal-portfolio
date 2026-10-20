/**
 * reveal.js — Scroll-triggered fade-up animations with fallback for immediate visibility.
 */
export function initReveal() {
  const elements = document.querySelectorAll('.reveal, .reveal-stagger');

  // Skip animations if user prefers reduced motion
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    elements.forEach(el => el.classList.add('revealed'));
    return;
  }

  // Fallback: If element is already in viewport, reveal immediately
  const winHeight = window.innerHeight;
  elements.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < winHeight * 0.92) {
      el.classList.add('revealed');
    }
  });

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.05,
    rootMargin: '0px 0px -40px 0px'
  });

  elements.forEach(el => {
    if (!el.classList.contains('revealed')) {
      observer.observe(el);
    }
  });
}
