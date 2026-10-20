/**
 * theme.js — Dark/light theme toggle.
 * Reads from localStorage first, then falls back to prefers-color-scheme.
 * The anti-flash inline script in <head> also sets data-theme before body renders.
 */
export function initTheme() {
  const toggle = document.getElementById('theme-toggle');
  if (!toggle) return;

  toggle.addEventListener('click', () => {
    const current = document.documentElement.getAttribute('data-theme');
    const next = (current === 'light') ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
    toggle.setAttribute('aria-label',
      next === 'light' ? 'Switch to dark mode' : 'Switch to light mode'
    );
  });
}
