/**
 * main.js — Entry point. Initialises every module in the right order.
 */
import { initTheme }          from './theme.js';
import { initNav }            from './nav.js';
import { initHero }           from './hero.js';
import { initReveal }         from './reveal.js';
import { initSpotlight }      from './spotlight.js';
import { initProjects }       from './projects.js';
import { initJourney }        from './journey.js';
import { initContact }        from './contact.js';
import { initCommandPalette } from './command-palette.js';
import { initCursor }         from './cursor.js';
import { site }               from './data/site.js';
import { skillGroups }        from './data/skills.js';
import { testimonials }       from './data/testimonials.js';

document.addEventListener('DOMContentLoaded', () => {
  // Make body visible (FOUC guard)
  document.body.classList.add('theme-ready');

  /* --- Init modules --- */
  initTheme();
  initNav();
  initHero();
  initCursor();

  renderAbout();
  renderSkills();
  renderProjects();
  renderJourney();
  renderTestimonials();
  renderNow();
  renderMarquee();

  initContact();
  initCommandPalette();

  // Reveal observer runs after all dynamic DOM nodes exist
  initReveal();
  initSpotlight();

  // Trigger hero entrance animation
  requestAnimationFrame(() => document.body.classList.add('loaded'));

  // Console easter egg
  console.log(
    '%c Hey, nice to meet a curious developer! 👋\n' +
    '%c I\'m Mohammad Nashath — Frontend Developer from Colombo, Sri Lanka.\n' +
    '%c 📧 mhdnashath53@gmail.com\n' +
    '%c 💼 linkedin.com/in/nashath\n' +
    '%c 🐙 github.com/Nashath53',
    'font-size:15px;font-weight:800;color:#6366F1',
    'font-size:12px;color:#EDEDED',
    'font-size:12px;color:#94A3B8',
    'font-size:12px;color:#94A3B8',
    'font-size:12px;color:#94A3B8'
  );
});

/* ── About: bio paragraphs + stats ── */
function renderAbout() {
  const bioEl   = document.getElementById('bio-text');
  const statsEl = document.getElementById('about-stats');

  if (bioEl) {
    bioEl.innerHTML = site.bio
      .map(p => `<p>${p}</p>`)
      .join('');
  }

  if (statsEl) {
    statsEl.innerHTML = site.stats
      .map(s => `
        <div class="stat-card card-spotlight">
          <span class="stat-num">${s.number}</span>
          <span class="stat-label">${s.label}</span>
        </div>`)
      .join('');
  }
}

/* ── Skills: Professional layout with brand icons & colors ── */
function renderSkills() {
  const grid = document.getElementById('skills-grid');
  if (!grid) return;

  grid.innerHTML = skillGroups.map(g => `
    <div class="skill-group card-spotlight reveal">
      <div class="skill-group-header">
        <span class="skill-group-tag">${g.tag}</span>
        <h4>${g.heading}</h4>
        ${g.description ? `<p class="skill-group-desc">${g.description}</p>` : ''}
      </div>
      <div class="skills-tiles-grid">
        ${g.skills.map(s => `
          <div class="skill-tile" style="--skill-brand: ${s.color}">
            <div class="skill-tile-icon" style="color:${s.color}">
              ${s.svg}
            </div>
            <div class="skill-tile-body">
              <span class="skill-tile-name">${s.name}</span>
              <span class="skill-tile-level">${s.level}</span>
            </div>
          </div>
        `).join('')}
      </div>
    </div>`).join('');
}

/* ── Projects: initialize ── */
function renderProjects() {
  initProjects();
}

/* ── Journey: initialize ── */
function renderJourney() {
  initJourney();
}

/* ── Testimonials ── */
function renderTestimonials() {
  const grid = document.getElementById('testimonials-grid');
  if (!grid) return;

  grid.innerHTML = testimonials.map(t => `
    <article class="testimonial-card card-spotlight reveal" style="--t-accent:${t.accent}">
      <div class="testimonial-header">
        <div class="testimonial-stars" aria-label="${t.rating} out of 5 stars">
          ${'★'.repeat(t.rating)}
        </div>
        <span class="testimonial-project">${t.project}</span>
      </div>

      <p class="testimonial-quote">"${t.content}"</p>

      <div class="testimonial-author">
        <div class="testimonial-avatar" style="background:${t.accent}20;color:${t.accent}">
          ${t.avatar}
        </div>
        <div class="testimonial-meta">
          <h4 class="testimonial-name">${t.name}</h4>
          <p class="testimonial-role">${t.role} · <span class="testimonial-company">${t.company}</span></p>
        </div>
      </div>
    </article>
  `).join('');
}

/* ── Now section ── */
function renderNow() {
  const grid    = document.getElementById('now-grid');
  const updated = document.getElementById('now-updated');
  if (!grid) return;

  grid.innerHTML = site.now.items.map(item => `
    <div class="now-card card-spotlight reveal">
      <div class="now-icon">${item.icon}</div>
      <span class="now-label">${item.label}</span>
      <p>${item.text}</p>
    </div>`).join('');

  if (updated) updated.textContent = `Last updated: ${site.now.lastUpdated}`;
}

/* ── Marquee ── */
function renderMarquee() {
  const track = document.getElementById('marquee-track');
  if (!track) return;
  const items = [...site.marquee, ...site.marquee];
  track.innerHTML = items
    .map(t => `<span class="marquee-item">${t}</span>`)
    .join('');
}
