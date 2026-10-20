# Mohammad Nashath — Portfolio

A clean, fast, accessible frontend developer portfolio built with vanilla HTML, CSS, and JavaScript. No build step, no npm, no frameworks.

---

## How to run locally

You need a local server (browsers block ES module imports from `file://`).

**Option A — VS Code Live Server (easiest)**
1. Install the "Live Server" extension in VS Code
2. Right-click `index.html` → "Open with Live Server"

**Option B — Python**
```bash
cd portfolio
python -m http.server 3000
# Open http://localhost:3000
```

**Option C — Node**
```bash
npx serve .
```

---

## Where to edit personal info

| What                          | File                          |
|-------------------------------|-------------------------------|
| Name, bio, email, links       | `/js/data/site.js`            |
| Skills and groups             | `/js/data/skills.js`          |
| Projects                      | `/js/data/projects.js`        |
| Education / certifications    | `/js/data/journey.js`         |
| Colors, fonts, spacing        | `/css/variables.css`          |

**You should NEVER need to edit `index.html` to update your personal information.**

---

## How to add a project

1. Open `/js/data/projects.js`
2. Copy an existing object and paste it at the top of the array
3. Fill in every field (see the comment block at the top of the file)
4. Set `sample: false` (or delete the line)
5. Add your cover image to `/assets/images/projects/your-slug/cover.webp`
6. Update `sitemap.xml` with the new project URL

### Minimum fields needed

```js
{
  slug:      "my-project",
  title:     "My Project",
  summary:   "One sentence describing the problem it solves.",
  category:  ["Web App", "JavaScript"],
  tech:      ["HTML", "CSS", "JavaScript"],
  featured:  false,
  status:    "Live",
  year:      "2026",
  cover:     null,           // null = gradient placeholder
  gallery:   [],
  liveUrl:   "https://...",
  githubUrl: "https://github.com/...",
  demoLogin: null,
  caseStudy: {
    problem:  "...",
    role:     "Solo developer",
    approach: "...",
    features: ["..."],
    decisions: [],
    challenges: [],
    results: [],
    learned: [],
    improvements: [],
  }
}
```

---

## How to replace images

- **Profile photo:** drop a `.webp` file at `/assets/images/profile.webp` (4:5 ratio works best, ~400×500px). The initials fallback shows automatically if the file is missing.
- **Project cover:** `/assets/images/projects/[slug]/cover.webp` (16:10 ratio, ~800×500px). Missing = gradient placeholder.
- **OG image:** `/assets/images/og-image.png` (1200×630). Used for link previews on social.

### Optimise images before uploading
- Use [Squoosh](https://squoosh.app) to convert JPG/PNG to WebP
- Aim for cover images under 150 KB

---

## How to replace the CV

1. Export your CV as a PDF
2. Name it `nashath-frontend-cv.pdf` (no spaces)
3. Drop it in `/assets/cv/`
4. That's it — all download links already point there

---

## How to deploy on Netlify

1. Push the `portfolio/` folder to a GitHub repository
2. Go to [app.netlify.com](https://app.netlify.com) → "Add new site" → "Import from Git"
3. Select your repo. Build command: leave empty. Publish directory: `.` (or the folder name)
4. Click "Deploy site"

### Custom domain
1. Buy a domain (Namecheap, Cloudflare Registrar, Porkbun)
2. In Netlify: Site settings → Domain management → Add custom domain
3. Follow the DNS instructions Netlify gives you
4. Update the domain in:
   - `index.html` (`<link rel="canonical">` and all `og:url`)
   - `js/data/site.js` (`domain` field)
   - `robots.txt` (Sitemap URL)
   - `sitemap.xml` (all `<loc>` values)

---

## How to set up Formspree (contact form)

1. Go to [formspree.io](https://formspree.io) and create a free account
2. Create a new form → copy the endpoint URL (looks like `https://formspree.io/f/xyzabcde`)
3. In `index.html`, replace `[FORMSPREE_URL]` in the `<form action="...">` with your endpoint
4. Test: submit the form and check your email

**Netlify Forms alternative:** If you deploy on Netlify, the form already has `data-netlify="true"` — Netlify will capture submissions automatically without Formspree.

---

## Before launch checklist

- [ ] Replace `hello@nashath.dev` with your real email in `js/data/site.js` and `index.html`
- [ ] Update LinkedIn URL in `js/data/site.js` and `index.html` social links
- [ ] Drop your CV PDF in `/assets/cv/` and rename to `nashath-frontend-cv.pdf`
- [ ] Add your profile photo at `/assets/images/profile.webp`
- [ ] Add real project cover images (or leave null for gradient placeholders)
- [ ] Delete or replace the 3 sample projects (set `sample: false`, replace content)
- [ ] Update the domain in `index.html`, `robots.txt`, `sitemap.xml`, `site.js`
- [ ] Replace `[FORMSPREE_URL]` in the contact form action
- [ ] Update `[Your School Name]` in `journey.js`
- [ ] Run Lighthouse and fix any issues below 90
- [ ] Test at 375px, 768px, 1024px and 1440px widths
- [ ] Test in both dark and light mode
- [ ] Test keyboard navigation (Tab through everything, open command palette with Ctrl+K)
- [ ] Check no console errors in DevTools

---

## Upgrade tips (once you have real projects)

1. **Write real case studies.** Each project's `caseStudy.decisions` field is what impresses interviewers most — a thoughtful "I chose X over Y because…" shows senior thinking.
2. **Add a Lighthouse badge.** Run PageSpeed Insights on your deployed site and screenshot the scores. Add the image to your README and your About section.
3. **Record a demo video.** 60-second screen recording of each live project. Embed it in the case study. This removes the "let me click around" burden from reviewers.
4. **Keep GitHub green.** Push small commits regularly. Recruiters look at contribution graphs.
5. **Add Open Graph images per project.** When you share a case study link on LinkedIn, a project-specific OG image looks far more professional than the generic one.
6. **Testimonials section.** Even one quote from a peer, teacher, or anyone who used your project adds social proof at the fresher stage.
