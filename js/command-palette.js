/**
 * command-palette.js — Ctrl/Cmd+K or "/" to open quick-action modal.
 */
import { site } from './data/site.js';
import { showToast } from './utils.js';

const COMMANDS = [
  { label: 'Go to About',        icon: '↓', action: () => scrollTo('#about') },
  { label: 'Go to Skills',       icon: '↓', action: () => scrollTo('#skills') },
  { label: 'Go to Projects',     icon: '↓', action: () => scrollTo('#projects') },
  { label: 'Go to Journey',      icon: '↓', action: () => scrollTo('#journey') },
  { label: 'Go to Testimonials', icon: '★', action: () => scrollTo('#testimonials') },
  { label: 'Go to Contact',      icon: '↓', action: () => scrollTo('#contact') },
  { label: 'Toggle theme',       icon: '◐', action: () => document.getElementById('theme-toggle')?.click() },
  { label: 'Copy email',         icon: '@', action: copyEmail },
  { label: 'Open LinkedIn',      icon: '⇗', action: () => window.open(site.linkedin, '_blank') },
  { label: 'Open GitHub',        icon: '⇗', action: () => window.open(site.github, '_blank') },
  { label: 'Download CV',        icon: '↓', action: () => { const a = document.createElement('a'); a.href = site.cvPath; a.download = ''; a.click(); } },
];

export function initCommandPalette() {
  const overlay = document.getElementById('cmd-overlay');
  const input   = document.getElementById('cmd-input');
  const results = document.getElementById('cmd-results');
  const trigger = document.getElementById('cmd-trigger-btn');
  if (!overlay || !input || !results) return;

  let filtered = [...COMMANDS];
  let activeIdx = 0;

  /* ── Open / close ── */
  function open() {
    filtered = [...COMMANDS];
    activeIdx = 0;
    overlay.classList.add('open');
    overlay.setAttribute('aria-hidden', 'false');
    input.value = '';
    render(COMMANDS);
    setTimeout(() => input.focus(), 50);
  }
  function close() {
    overlay.classList.remove('open');
    overlay.setAttribute('aria-hidden', 'true');
  }

  trigger?.addEventListener('click', open);

  /* ── Keyboard shortcut ── */
  document.addEventListener('keydown', e => {
    const isOpen = overlay.classList.contains('open');
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') { e.preventDefault(); isOpen ? close() : open(); return; }
    if (e.key === '/' && !isOpen && document.activeElement.tagName !== 'INPUT' && document.activeElement.tagName !== 'TEXTAREA') {
      e.preventDefault(); open(); return;
    }
    if (!isOpen) return;
    if (e.key === 'Escape') { close(); return; }
    if (e.key === 'ArrowDown') { e.preventDefault(); moveActive(1); }
    if (e.key === 'ArrowUp')   { e.preventDefault(); moveActive(-1); }
    if (e.key === 'Enter')     { e.preventDefault(); runActive(); }
  });

  // Close on overlay backdrop click
  overlay.addEventListener('click', e => { if (e.target === overlay) close(); });

  /* ── Search ── */
  input.addEventListener('input', () => {
    const q = input.value.toLowerCase();
    filtered = q ? COMMANDS.filter(c => c.label.toLowerCase().includes(q)) : [...COMMANDS];
    activeIdx = 0;
    render(filtered);
  });

  /* ── Render results ── */
  function render(cmds) {
    if (cmds.length === 0) {
      results.innerHTML = `<div style="padding:1.5rem;text-align:center;color:var(--text-faint);font-size:0.85rem">No results</div>`;
      return;
    }
    results.innerHTML = cmds.map((cmd, i) => `
      <div class="cmd-item${i === activeIdx ? ' active' : ''}" data-idx="${i}" role="option" aria-selected="${i === activeIdx}">
        <span style="font-family:var(--font-mono);font-size:0.8rem;color:var(--accent)">${cmd.icon}</span>
        ${cmd.label}
      </div>
    `).join('');

    results.querySelectorAll('.cmd-item').forEach(item => {
      item.addEventListener('click', () => {
        const idx = parseInt(item.dataset.idx);
        activeIdx = idx;
        runActive();
      });
    });
  }

  function moveActive(dir) {
    activeIdx = Math.max(0, Math.min(filtered.length - 1, activeIdx + dir));
    render(filtered);
    results.querySelector('.active')?.scrollIntoView({ block: 'nearest' });
  }

  function runActive() {
    filtered[activeIdx]?.action?.();
    close();
  }
}

function scrollTo(hash) {
  document.querySelector(hash)?.scrollIntoView({ behavior: 'smooth' });
}

async function copyEmail() {
  try {
    await navigator.clipboard.writeText(site.email);
    showToast('Email copied!');
  } catch {
    showToast(`Email: ${site.email}`);
  }
}
