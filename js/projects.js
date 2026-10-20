/**
 * projects.js — Interactive project cards, category filters, and smooth card UX.
 */
import { projects } from './data/projects.js';

/* Gradient fallback for missing covers */
const GRADIENTS = [
  'linear-gradient(135deg, #1e1b4b 0%, #312e81 50%, #4338ca 100%)',
  'linear-gradient(135deg, #064e3b 0%, #065f46 50%, #047857 100%)',
  'linear-gradient(135deg, #1e3a5f 0%, #1d4ed8 50%, #2563eb 100%)',
  'linear-gradient(135deg, #4a044e 0%, #7e22ce 50%, #9333ea 100%)',
  'linear-gradient(135deg, #7f1d1d 0%, #b91c1c 50%, #ef4444 100%)',
];

function getGradient(index) {
  return GRADIENTS[index % GRADIENTS.length];
}

export function initProjects() {
  const grid = document.getElementById('projects-grid');
  const filtersEl = document.getElementById('projects-filters');
  if (!grid) return;

  /* ── Build filter tabs ── */
  const allCats = ['All', ...new Set(projects.flatMap(p => p.category))];
  let active = 'All';

  if (filtersEl) {
    filtersEl.innerHTML = allCats.map(cat => `
      <button class="filter-tab ${cat === 'All' ? 'active' : ''}"
              data-cat="${cat}"
              aria-pressed="${cat === 'All'}">
        ${cat}
      </button>
    `).join('');

    filtersEl.addEventListener('click', e => {
      const btn = e.target.closest('.filter-tab');
      if (!btn) return;
      active = btn.dataset.cat;
      filtersEl.querySelectorAll('.filter-tab').forEach(b => {
        const isActive = b.dataset.cat === active;
        b.classList.toggle('active', isActive);
        b.setAttribute('aria-pressed', isActive);
      });
      renderGrid();
    });
  }

  /* ── Render grid ── */
  function renderGrid() {
    const visible = active === 'All'
      ? projects
      : projects.filter(p => p.category.includes(active));

    if (visible.length === 0) {
      grid.innerHTML = `
        <div class="projects-empty">
          <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
          </svg>
          <h3>No projects in this category</h3>
          <p>Projects are continuously being added. Browse other categories or explore GitHub.</p>
          <a href="https://github.com/Nashath53" target="_blank" rel="noopener" class="btn btn-outline">
            View GitHub
          </a>
        </div>`;
      return;
    }

    grid.innerHTML = visible.map((p, i) => buildCard(p, i)).join('');
    setupCardInteractivity();
  }

  renderGrid();
}

/* ── Build a single project card ── */
function buildCard(p, index) {
  const isSvg = p.cover && p.cover.endsWith('.svg');
  const coverHtml = p.cover
    ? `<img src="${p.cover}" alt="${p.title} preview" loading="lazy" width="800" height="500" class="project-img">`
    : `<div class="project-cover-placeholder" style="background:${getGradient(index)}">${p.title}</div>`;

  const badge = p.status === 'Live'
    ? `<span class="badge badge-live"><span class="badge-dot"></span>Live Production</span>`
    : `<span class="badge badge-progress"><span class="badge-dot"></span>In Progress</span>`;

  const featuredBadge = p.featured
    ? `<span class="badge badge-featured">★ Featured</span>`
    : '';

  const techTags = p.tech.map(t => `<span class="chip chip-tech">${t}</span>`).join('');

  const targetUrl = p.liveUrl || (p.caseStudy ? `project.html?slug=${p.slug}` : p.githubUrl);

  const liveBtn = p.liveUrl
    ? `<a href="${p.liveUrl}" target="_blank" rel="noopener" class="btn btn-primary btn-sm project-btn" title="Open live production website" onclick="event.stopPropagation()">
         <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
         Live Demo
       </a>`
    : '';

  const ghBtn = p.githubUrl
    ? `<a href="${p.githubUrl}" target="_blank" rel="noopener" class="btn btn-outline btn-sm project-btn" title="View source code on GitHub" onclick="event.stopPropagation()">
         <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
         Code
       </a>`
    : '';

  const caseBtn = p.caseStudy
    ? `<a href="project.html?slug=${p.slug}" class="btn btn-ghost btn-sm project-btn" title="Read in-depth case study" onclick="event.stopPropagation()">
         Case Study →
       </a>`
    : '';

  return `
    <article class="project-card card-spotlight ${p.featured ? 'is-featured' : ''}"
             data-url="${targetUrl}"
             tabindex="0"
             role="article"
             aria-label="${p.title}">
      <div class="project-cover-wrap">
        <div class="project-cover">
          ${coverHtml}
        </div>
      </div>

      <div class="project-body">
        <div class="project-meta">
          <span class="project-year">${p.year}</span>
          <div class="project-badges">
            ${featuredBadge}
            ${badge}
          </div>
        </div>

        <h3 class="project-title">
          <a href="${targetUrl}" class="project-title-link" onclick="event.stopPropagation()">
            ${p.title}
          </a>
        </h3>

        <p class="project-summary">${p.summary}</p>

        <div class="project-tags">${techTags}</div>

        <div class="project-actions">
          <div class="project-actions-left">
            ${liveBtn}
            ${ghBtn}
          </div>
          ${caseBtn}
        </div>
      </div>
    </article>`;
}

/* ── Enable smooth 3D tilt and card clicking ── */
function setupCardInteractivity() {
  const cards = document.querySelectorAll('.project-card');

  cards.forEach(card => {
    // Click anywhere on the card to navigate
    card.addEventListener('click', e => {
      if (e.target.closest('a, button')) return;
      const url = card.dataset.url;
      if (!url) return;
      if (url.startsWith('http')) {
        window.open(url, '_blank', 'noopener');
      } else {
        window.location.href = url;
      }
    });

    // Keyboard navigation (Enter / Space)
    card.addEventListener('keydown', e => {
      if (e.target.closest('a, button')) return;
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        const url = card.dataset.url;
        if (!url) return;
        if (url.startsWith('http')) {
          window.open(url, '_blank', 'noopener');
        } else {
          window.location.href = url;
        }
      }
    });

    // Subtle 3D tilt on mousemove
    card.addEventListener('mousemove', e => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = ((y - centerY) / centerY) * -4;
      const rotateY = ((x - centerX) / centerX) * 4;

      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
    });
  });
}
