/**
 * utils.js — Shared utility functions.
 */

/** Show a brief toast notification at the bottom of the screen. */
export function showToast(message, duration = 2800) {
  const toast = document.getElementById('toast');
  if (!toast) return;
  toast.textContent = message;
  toast.setAttribute('role', 'status');
  toast.setAttribute('aria-live', 'polite');
  toast.classList.add('show');
  clearTimeout(toast._timer);
  toast._timer = setTimeout(() => toast.classList.remove('show'), duration);
}

/** Slugify a string for URL use. */
export function slugify(str) {
  return str.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '');
}

/** Escape HTML for safe text insertion. */
export function escHtml(str) {
  return str.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}
