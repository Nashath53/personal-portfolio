/**
 * project-page.js — Renders the full case study from URL param ?slug=...
 */
import { projects } from './data/projects.js';

export function initProjectPage() {
  const params = new URLSearchParams(window.location.search);
  const slug   = params.get('slug');
  const main   = document.getElementById('project-main');
  if (!main) return;

  const project = projects.find(p => p.slug === slug);

  if (!project) {
    main.innerHTML = `
      <div class="container project-not-found">
        <p style="font-family:var(--font-mono);color:var(--accent);margin-bottom:0.5rem">404</p>
        <h1>Project not found</h1>
        <p>No project matches <strong>${slug || 'this URL'}</strong>.</p>
        <a href="index.html#projects" class="btn btn-outline" style="margin-top:1.5rem">← Back to Projects</a>
      </div>`;
    return;
  }

  /* ── Update page title and meta ── */
  document.title = `${project.title} | Mohammad Nashath`;

  /* ── Hero section ── */
  const tagsHtml  = project.tech.map(t => `<span class="chip">${t}</span>`).join('');
  const badge     = project.status === 'Live'
    ? `<span class="badge badge-live"><span class="badge-dot"></span>Live</span>`
    : `<span class="badge badge-progress"><span class="badge-dot"></span>In Progress</span>`;

  const liveBtn = project.liveUrl
    ? `<a href="${project.liveUrl}" target="_blank" rel="noopener" class="btn btn-primary">
        Live Demo ↗
       </a>`
    : '';
  const ghBtn = project.githubUrl
    ? `<a href="${project.githubUrl}" target="_blank" rel="noopener" class="btn btn-outline">
        GitHub ↗
       </a>`
    : '';

  const coverHtml = project.cover
    ? `<div class="project-page-cover"><img src="${project.cover}" alt="${project.title} cover" loading="lazy"></div>`
    : '';

  /* ── Case study body ── */
  const cs = project.caseStudy || {};
  function listSection(heading, items) {
    if (!items?.length) return '';
    return `
      <div class="case-section">
        <h3>${heading}</h3>
        <ul class="case-list">${items.map(i => `<li>${i}</li>`).join('')}</ul>
      </div>`;
  }

  const caseHtml = !project.caseStudy ? '' : `
    <div class="case-section">
      <h3>The Problem</h3>
      <p>${cs.problem || ''}</p>
    </div>
    <div class="case-section">
      <h3>My Approach</h3>
      <p>${cs.approach || ''}</p>
    </div>
    ${listSection('Key Features', cs.features)}
    ${listSection('Technical Decisions', cs.decisions)}
    ${listSection('Challenges & Solutions', cs.challenges)}
    ${listSection('Results', cs.results)}
    ${listSection('What I Learned', cs.learned)}
    ${listSection('Future Improvements', cs.improvements)}
  `;

  /* ── Gallery ── */
  const galleryHtml = project.gallery?.length ? `
    <div class="case-section">
      <h3>Gallery</h3>
      <div class="gallery-grid">
        ${project.gallery.map((src, i) => `
          <div class="gallery-item" data-src="${src}">
            <img src="${src}" alt="${project.title} screenshot ${i + 1}" loading="lazy">
          </div>
        `).join('')}
      </div>
    </div>` : '';

  /* ── Prev / Next ── */
  const idx  = projects.indexOf(project);
  const prev = projects[idx - 1];
  const next = projects[idx + 1];
  const navHtml = `
    <nav class="project-nav container" aria-label="More projects">
      ${prev
        ? `<a href="project.html?slug=${prev.slug}" class="project-nav-link">
             <span class="project-nav-dir">← Previous</span>
             <span class="project-nav-title">${prev.title}</span>
           </a>`
        : '<div></div>'}
      ${next
        ? `<a href="project.html?slug=${next.slug}" class="project-nav-link next">
             <span class="project-nav-dir">Next →</span>
             <span class="project-nav-title">${next.title}</span>
           </a>`
        : '<div></div>'}
    </nav>`;

  main.innerHTML = `
    <!-- Hero -->
    <section class="project-page-hero">
      <div class="container">
        <a href="index.html#projects" class="project-page-back">← Back to Projects</a>
        <div class="project-page-tags">${tagsHtml} ${badge}</div>
        <h1 class="project-page-title">${project.title}</h1>
        <p class="project-page-summary">${project.summary}</p>
        <div class="project-page-links">${liveBtn}${ghBtn}</div>
      </div>
    </section>

    <!-- Cover -->
    <div class="container">${coverHtml}</div>

    <!-- Case study -->
    <section class="section">
      <div class="container">
        <div class="case-study-grid">

          <!-- Aside: project meta -->
          <aside class="case-study-aside">
            <div class="meta-block">
              <span class="meta-label">Year</span>
              <span class="meta-value">${project.year}</span>
            </div>
            <div class="meta-block">
              <span class="meta-label">Role</span>
              <span class="meta-value">${cs.role || 'Solo developer'}</span>
            </div>
            <div class="meta-block">
              <span class="meta-label">Stack</span>
              <div class="chips-wrap" style="margin-top:0.5rem">
                ${project.tech.map(t => `<span class="chip">${t}</span>`).join('')}
              </div>
            </div>
            <div class="meta-block">
              <span class="meta-label">Status</span>
              ${badge}
            </div>
            <div style="display:flex;flex-direction:column;gap:0.5rem;margin-top:1rem">
              ${liveBtn}${ghBtn}
            </div>
          </aside>

          <!-- Main content -->
          <div class="case-study-body">
            ${caseHtml}
            ${galleryHtml}
          </div>

        </div>
      </div>
    </section>

    <!-- Prev / Next -->
    ${navHtml}
  `;

  /* ── Lightbox for gallery ── */
  initLightbox();
}

function initLightbox() {
  const lightbox = document.getElementById('lightbox');
  const lbImg    = document.getElementById('lb-img');
  const lbClose  = document.getElementById('lb-close');
  if (!lightbox || !lbImg) return;

  document.querySelectorAll('.gallery-item').forEach(item => {
    item.addEventListener('click', () => {
      lbImg.src = item.dataset.src;
      lightbox.classList.add('open');
      lbClose?.focus();
    });
  });

  lbClose?.addEventListener('click', () => lightbox.classList.remove('open'));
  lightbox.addEventListener('click', e => {
    if (e.target === lightbox) lightbox.classList.remove('open');
  });
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') lightbox.classList.remove('open');
  });
}
