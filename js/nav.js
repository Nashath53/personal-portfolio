/**
 * nav.js — Sticky navbar, scroll-spy active links, mobile overlay menu.
 */
export function initNav() {
  const navbar   = document.getElementById('navbar');
  const hamburger= document.querySelector('.hamburger');
  const mobileMenu = document.getElementById('mobile-menu');
  const mobileLinks= document.querySelectorAll('#mobile-menu a');
  const navLinks  = document.querySelectorAll('.nav-links a');
  const sections  = document.querySelectorAll('section[id]');
  const progress  = document.getElementById('scroll-progress');

  /* ── Sticky + scroll progress ── */
  function onScroll() {
    const scrolled = window.scrollY;

    // Add solid background after 40px scroll
    navbar?.classList.toggle('scrolled', scrolled > 40);

    // Scroll progress bar
    if (progress) {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      progress.style.width = max > 0 ? `${(scrolled / max) * 100}%` : '0%';
    }
  }
  window.addEventListener('scroll', onScroll, { passive: true });

  /* ── Scroll-spy (IntersectionObserver) ── */
  const spy = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navLinks.forEach(a => {
          a.classList.toggle('active', a.getAttribute('href') === `#${id}`);
        });
      }
    });
  }, { rootMargin: '-40% 0px -55% 0px', threshold: 0 });

  sections.forEach(s => spy.observe(s));

  /* ── Mobile menu ── */
  let menuOpen = false;

  function openMenu() {
    menuOpen = true;
    mobileMenu?.classList.add('open');
    mobileMenu?.setAttribute('aria-hidden', 'false');
    if (mobileMenu) mobileMenu.inert = false;
    hamburger?.classList.add('open');
    hamburger?.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
    // Focus first link for accessibility
    setTimeout(() => mobileLinks[0]?.focus(), 300);
  }
  function closeMenu() {
    menuOpen = false;
    mobileMenu?.classList.remove('open');
    mobileMenu?.setAttribute('aria-hidden', 'true');
    if (mobileMenu) mobileMenu.inert = true;
    hamburger?.classList.remove('open');
    hamburger?.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
    hamburger?.focus();
  }

  hamburger?.addEventListener('click', () => menuOpen ? closeMenu() : openMenu());
  mobileMenu?.setAttribute('aria-hidden', 'true');
  if (mobileMenu) mobileMenu.inert = true;

  // Close on link click or Esc
  mobileLinks.forEach(a => a.addEventListener('click', closeMenu));
  document.addEventListener('keydown', e => { if (e.key === 'Escape' && menuOpen) closeMenu(); });

  // Focus trap inside mobile menu
  mobileMenu?.addEventListener('keydown', e => {
    if (e.key !== 'Tab') return;
    const focusable = [...mobileMenu.querySelectorAll('a, button')];
    const first = focusable[0];
    const last  = focusable[focusable.length - 1];
    if (e.shiftKey ? document.activeElement === first : document.activeElement === last) {
      e.preventDefault();
      (e.shiftKey ? last : first).focus();
    }
  });
}
