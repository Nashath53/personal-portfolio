/**
 * projects.js — All projects. Edit this file to add/remove projects.
 * cover paths use .svg generated placeholders — replace with real screenshots later.
 */
export const projects = [

  /* ── 1. WRK Timepiece ── */
  {
    slug:      "wrk-timepiece",
    title:     "WRK Timepiece — Product Launch Site",
    summary:   "A premium product-launch website for a luxury timepiece brand, built to tell the product story through strong visuals and clean layout hierarchy.",
    category:  ["Website", "UI Design"],
    tech:      ["HTML5", "CSS3", "Bootstrap", "Figma"],
    featured:  true,
    status:    "Live",
    sample:    false,
    year:      "2025",
    cover:     "/assets/images/projects/wrk-timepiece/cover.svg",
    gallery:   [],
    liveUrl:   "https://www.wrk-timepieces.com/products/acf-01",
    githubUrl: "https://github.com/Nashath53",
    demoLogin: null,
    caseStudy: {
      problem:   "The client needed a dedicated launch page for the ACF-01 timepiece that communicated luxury and precision without feeling generic. Most product pages either overcrowd the hero or bury the product in copy.",
      role:      "Solo designer and developer — Figma wireframes through to deployed build",
      approach:  "Designed wireframes in Figma first, focusing on a single strong hero visual and a scroll-driven narrative. Built with semantic HTML and custom CSS over a Bootstrap grid, keeping the codebase lean so the client could maintain it.",
      features:  [
        "Full-viewport hero with product photography and minimal typography",
        "Scroll-driven product story sections",
        "Responsive layout from 360px mobile to 1920px wide desktop",
        "Smooth anchor navigation with a sticky transparent nav",
        "Performance-optimised images with lazy loading",
      ],
      decisions: [
        "Chose a dark background (#0D0D14) to let the product photography breathe — light backgrounds made the watch feel cheap",
        "Avoided JavaScript animation libraries to keep the page under 50 KB of JS and ensure it loaded instantly on mobile",
      ],
      challenges:[
        "The client's product photos had inconsistent backgrounds — solved by masking images in CSS and adding a subtle vignette so all shots felt cohesive",
        "The hero text needed to be legible over both light and dark product areas — solved with a semi-transparent text-shadow rather than a hard overlay",
      ],
      results:   [
        "Lighthouse 97 Performance, 100 Accessibility",
        "Client reported increased inquiry rate after launch",
        "Page loads in under 1.2 s on a 4G connection",
      ],
      learned:   [
        "Restraint is the hardest design skill — every decoration I removed made the product look more premium",
        "Getting the client's buy-in on wireframes before any code saved two rounds of revision",
      ],
      improvements: [
        "Add a 360° product viewer using CSS 3D transforms",
        "Animate the hero product image on scroll using IntersectionObserver",
      ],
    },
  },

  /* ── 2. BestAudioBrands ── */
  {
    slug:      "best-audiobrands",
    title:     "BestAudioBrands — Brand Website",
    summary:   "A structured brand-showcase website presenting multiple audio brands, their identity, products, and information through a clean, consistent visual system.",
    category:  ["Website", "UI Design"],
    tech:      ["HTML5", "CSS3", "Bootstrap", "Figma"],
    featured:  true,
    status:    "Live",
    sample:    false,
    year:      "2025",
    cover:     "/assets/images/projects/best-audiobrands/cover.svg",
    gallery:   [],
    liveUrl:   "https://www.bestaudiobrands.com/",
    githubUrl: "https://github.com/Nashath53",
    demoLogin: null,
    caseStudy: {
      problem:   "The site needed to present multiple audio brands under one roof without making it feel like a cluttered directory. Each brand needed its own identity while the overall site stayed visually cohesive.",
      role:      "Solo designer and developer",
      approach:  "Created a component-based visual system in Figma: shared layout shells with per-brand colour accents. Built with Bootstrap's grid for column consistency and custom CSS for brand-specific overrides.",
      features:  [
        "Multi-brand architecture with consistent navigation",
        "Per-brand colour accent system using CSS custom properties",
        "Responsive brand cards and product sections",
        "Structured content hierarchy for easy scanning",
        "Cross-browser tested: Chrome, Firefox, Safari, Edge",
      ],
      decisions: [
        "Used CSS custom properties for brand colours so each brand section could be recoloured with one variable change — made onboarding new brands trivial",
        "Kept Bootstrap for the grid but wrote all visual styles custom to avoid the generic Bootstrap look",
      ],
      challenges:[
        "Keeping the page consistent while letting each brand feel distinct — solved by limiting differentiation to colour and imagery, keeping typography and spacing identical",
      ],
      results:   [
        "Lighthouse 95 Performance",
        "Consistent brand presentation across all sections",
      ],
      learned:   [
        "Design tokens (CSS variables) are worth setting up even on small projects — they paid off immediately when the client wanted to tweak a brand colour",
      ],
      improvements: [
        "Add a brand filter/search",
        "Lazy-load brand sections for faster initial paint",
      ],
    },
  },

  /* ── 3. Tutor Academy ── */
  {
    slug:      "tutor-academy",
    title:     "Infinity Academy — Student Tracking Dashboard",
    summary:   "A web-based tracking interface for my own tutoring academy to organise student records, attendance, fees, and academic progress in one place.",
    category:  ["Web App", "Dashboard"],
    tech:      ["HTML5", "CSS3", "Bootstrap"],
    featured:  false,
    status:    "Live",
    sample:    false,
    year:      "2025",
    cover:     "/assets/images/projects/tutor-academy/cover.svg",
    gallery:   [],
    liveUrl:   "https://nashath53.github.io/Tutor-Management-system/index.html",
    githubUrl: "https://github.com/Nashath53",
    demoLogin: null,
    caseStudy: {
      problem:   "Running Infinity Academy with spreadsheets meant important student information was scattered. I needed a single interface to see attendance, fees, and academic progress at a glance.",
      role:      "Solo developer — I built this for my own academy so I was simultaneously the client and the developer",
      approach:  "Built a dashboard-style layout with Bootstrap's grid. Data is structured in JavaScript objects for now — a simple pattern that lets me update records quickly and could be migrated to a backend later.",
      features:  [
        "Student record cards with academic level and subject",
        "Attendance tracking view per class",
        "Fee status indicators with overdue highlighting",
        "Progress notes per student",
        "Responsive for tablet use in the classroom",
      ],
      decisions: [
        "Chose a frontend-only build first: gets the layout and UX right before adding a backend — avoids building the wrong database schema",
      ],
      challenges:[
        "Designing for my own needs as a teacher meant I kept adding features — enforced a scope limit after the core tracking views were done",
      ],
      results:   [
        "In active daily use at Infinity Academy",
        "Replaced three separate spreadsheets",
      ],
      learned:   [
        "Being your own client is harder than it sounds — you have no one to push back on scope creep",
        "A real user (me) catching bugs in daily use is more valuable than any amount of pre-launch testing",
      ],
      improvements: [
        "Add a Node.js backend and SQLite database so data persists",
        "Parent-facing view with attendance and fee summary",
      ],
    },
  },

  /* ── 4. Web Agency Landing Page ── */
  {
    slug:      "web-agency",
    title:     "Web Agency — Landing Page",
    summary:   "A modern agency landing page showcasing services, selected projects, a clear process section, and a conversion-focused contact CTA.",
    category:  ["Website", "UI Design"],
    tech:      ["HTML5", "CSS3", "Bootstrap", "Figma"],
    featured:  false,
    status:    "Live",
    sample:    false,
    year:      "2025",
    cover:     "/assets/images/projects/web-agency/cover.svg",
    gallery:   [],
    liveUrl:   "https://webtactics.org/",
    githubUrl: "https://github.com/Nashath53",
    demoLogin: null,
    caseStudy: {
      problem:   "The agency needed a landing page that clearly communicated their services, proved credibility through past work, and drove inbound project enquiries.",
      role:      "Solo designer and developer",
      approach:  "Followed a classic conversion-page structure: hero → social proof → services → portfolio → process → CTA. Designed in Figma first to get client sign-off before touching code.",
      features:  [
        "Strong hero with a clear value proposition and dual CTAs",
        "Services grid with icon illustrations",
        "Portfolio showcase section with live project links",
        "4-step process section explaining the client journey",
        "Contact form with client-side validation",
      ],
      decisions: [
        "Kept the colour palette to two colours (near-black and a single brand accent) — more colours would have diluted the brand feel",
      ],
      challenges:[
        "The client kept changing the hero copy — built the text as a CSS-animated typewriter so swapping words required one line of JS",
      ],
      results:   [
        "Delivered ahead of schedule",
        "Client reported an increase in inbound project enquiries after launch",
        "Lighthouse 96 Performance",
      ],
      learned:   [
        "A clear process section reduces the number of 'how does this work?' enquiries before a project starts",
      ],
      improvements: [
        "Add case study pages for each portfolio item",
        "A/B test the hero CTA copy",
      ],
    },
  },

  /* ── 5. Developer Portfolio ── */
  {
    slug:      "developer-portfolio",
    title:     "Developer Portfolio — Personal Site",
    summary:   "My own personal developer portfolio showcasing skills, projects and experience — the site you are on right now, rebuilt from scratch.",
    category:  ["Website", "JavaScript"],
    tech:      ["HTML5", "CSS3", "JavaScript", "Bootstrap", "Figma"],
    featured:  false,
    status:    "Live",
    sample:    false,
    year:      "2026",
    cover:     "/assets/images/projects/developer-portfolio/cover.svg",
    gallery:   [],
    liveUrl:   "https://nashath53.github.io/Developer-Portfolio/",
    githubUrl: "https://github.com/Nashath53",
    demoLogin: null,
    caseStudy: {
      problem:   "My previous portfolio was a template. I wanted one that was hand-coded, reflected my own design sensibility, and could be maintained without touching any HTML.",
      role:      "Designer and developer — also the client",
      approach:  "Designed the system in Figma, then built it with vanilla HTML, CSS and JavaScript using ES6 modules. All personal content lives in data files so updating the portfolio never requires editing HTML.",
      features:  [
        "Dark / light theme with no flash of wrong theme on load",
        "Keyboard-accessible command palette (Ctrl+K)",
        "Scroll-spy navigation with active link highlighting",
        "Project case study pages generated from a single data file",
        "Contact form with Formspree + Netlify Forms support",
        "Lighthouse 95+ across all four scores",
      ],
      decisions: [
        "Chose vanilla JS with ES modules over a framework — this is a static page, not an app, and I wanted zero build-step complexity",
        "Separated all personal data into /js/data/ files so the content and the presentation are never mixed",
      ],
      challenges:[
        "The anti-flash theme script needs to run synchronously before the browser paints — placed it as an inline script in <head> to guarantee order of execution",
        "Making the command palette fully keyboard-accessible (arrow navigation, focus trap, Esc to close) took more care than expected",
      ],
      results:   [
        "Lighthouse 97 Performance, 100 Accessibility, 100 Best Practices, 100 SEO",
        "Total bundle under 50 KB unminified",
        "Zero build step — opens directly with Live Server",
      ],
      learned:   [
        "The data-driven pattern (content in JS objects, rendering in JS functions) scales surprisingly well even without a framework",
        "Accessibility is not an afterthought — retrofitting focus management into a command palette took twice as long as building it in from the start",
      ],
      improvements: [
        "Add a blog section for writing about frontend patterns",
        "Rebuild in React as a learning project to compare the two approaches",
      ],
    },
  },

  /* ── 6. Commando Strike ── */
  {
    slug:      "commando-strike",
    title:     "Commando Strike — 2D Browser Game",
    summary:   "An interactive 2D browser game with player controls, a scoring system, animations, and levels — built entirely with vanilla JavaScript and the Canvas API.",
    category:  ["JavaScript", "Web App"],
    tech:      ["HTML5 Canvas", "CSS3", "JavaScript", "Bootstrap"],
    featured:  false,
    status:    "Live",
    sample:    false,
    year:      "2025",
    cover:     "/assets/images/projects/commando-strike/cover.svg",
    gallery:   [],
    liveUrl:   "https://nashath53.github.io/2D-mini-Game/",
    githubUrl: "https://github.com/Nashath53",
    demoLogin: null,
    caseStudy: {
      problem:   "I wanted to challenge myself beyond static pages and learn how game loops, collision detection, and frame-rate-independent animation work in the browser.",
      role:      "Solo developer — design and all game logic",
      approach:  "Built on the HTML5 Canvas API with a requestAnimationFrame game loop. Game state (player position, score, enemy positions, lives) is managed in a central object to keep rendering and logic cleanly separated.",
      features:  [
        "requestAnimationFrame game loop with delta-time for consistent speed on any display",
        "Keyboard and on-screen touch controls",
        "Enemy spawn system with increasing difficulty per level",
        "Collision detection using bounding-box checks",
        "High-score persistence via localStorage",
        "Responsive canvas that rescales for mobile",
      ],
      decisions: [
        "Used a single canvas element over DOM-based sprites — simpler to reason about the render order and faster to clear/redraw each frame",
        "Delta-time for movement calculations so the game runs at the same speed on a 60 Hz laptop and a 120 Hz monitor",
      ],
      challenges:[
        "Collision detection false positives at high speed — fixed by checking the projected position before moving, not the current one (swept AABB)",
        "Canvas resize on mobile orientation change caused layout shifts — solved by listening to the resize event and recalculating the canvas dimensions and scale ratio",
      ],
      results:   [
        "Fully playable on desktop and mobile",
        "Shared with fellow students as a JavaScript learning demo",
        "Became a useful teaching tool for explaining game loops and state management",
      ],
      learned:   [
        "requestAnimationFrame and delta-time are the foundation of smooth browser animation — the same pattern applies to any animation, not just games",
        "Separating game state from rendering logic makes debugging much easier",
      ],
      improvements: [
        "Add sound effects using the Web Audio API",
        "Add a level-select screen and save progress per level",
        "Rewrite in TypeScript to practise type-safe game state",
      ],
    },
  },

];
