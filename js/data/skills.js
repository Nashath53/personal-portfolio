/**
 * skills.js — Skills data with brand colors, icons, and categories.
 */
export const skillGroups = [
  {
    tag: "Core Engineering",
    heading: "Frontend & Web Architecture",
    description: "Technologies I use every single day to engineer responsive, accessible web interfaces.",
    skills: [
      {
        name: "HTML5",
        level: "Semantic & A11y",
        color: "#E34F26",
        svg: `<svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M12 2L3 5.3v13.4L12 22l9-3.3V5.3L12 2zm6.7 15.6L12 20.1l-6.7-2.5V6.7L12 4.2l6.7 2.5v10.9zm-9.3-5.3h5.2l-.3 2.9-2.3.6-2.3-.6-.1-1.3H7.8l.2 2.6 4 1.1 4-1.1.5-5.1H9.3l-.2-1.9h7.4l.2-1.9H7.2l.2 4.7z"/></svg>`,
      },
      {
        name: "CSS3",
        level: "Flex, Grid, Animations",
        color: "#1572B6",
        svg: `<svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M12 2L3 5.3v13.4L12 22l9-3.3V5.3L12 2zm6.7 15.6L12 20.1l-6.7-2.5V6.7L12 4.2l6.7 2.5v10.9zm-2.4-7.6l-.3 3.3-4 1.1-4-1.1-.2-2.3h1.8l.1 1.2 2.3.6 2.3-.6.2-2.1H7.5l-.2-1.9h9.1z"/></svg>`,
      },
      {
        name: "JavaScript (ES6+)",
        level: "Modern Vanilla, DOM, APIs",
        color: "#F7DF1E",
        svg: `<svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><rect width="24" height="24" rx="4" fill="#F7DF1E"/><path d="M7 17.5c0 1.2.8 1.9 2 1.9 1 0 1.6-.5 1.6-1.5v-7.3H12v7.3c0 2-1.2 3.1-3.2 3.1-1.8 0-3.2-.9-3.4-2.6L7 17.5zm7.3 1.6c.7.4 1.6.7 2.5.7 1.2 0 1.9-.5 1.9-1.3 0-.8-.6-1.1-1.8-1.6-1.8-.7-2.9-1.5-2.9-3 0-1.7 1.3-3 3.3-3 1 0 1.9.3 2.5.6l-.5 1.5c-.5-.3-1.2-.5-2-.5-1.1 0-1.7.5-1.7 1.2 0 .7.6 1 1.8 1.5 1.9.7 2.9 1.6 2.9 3.1 0 1.8-1.4 3.1-3.6 3.1-1.2 0-2.3-.3-3-.8l.6-1.5z" fill="#000"/></svg>`,
      },
      {
        name: "Bootstrap",
        level: "Grid, Components, Utility",
        color: "#7952B3",
        svg: `<svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M18.8 4.6A4.5 4.5 0 0 0 15 3.3H6v17.4h9.3a4.8 4.8 0 0 0 4-1.8 4.9 4.9 0 0 0 .9-3.2 4.4 4.4 0 0 0-2-3.8c1.3-.8 2-2 2-3.8 0-1.4-.5-2.6-1.4-3.5zm-9.3 1.9h5.1c1.8 0 2.8.8 2.8 2.3 0 1.6-1.1 2.4-2.8 2.4H9.5V6.5zm5.6 11H9.5v-4.5h5.6c1.9 0 3.1.9 3.1 2.3 0 1.5-1.1 2.2-3.1 2.2z"/></svg>`,
      },
      {
        name: "Responsive Design",
        level: "Mobile First & Performance",
        color: "#38BDF8",
        svg: `<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8m-4-4v4"/></svg>`,
      },
      {
        name: "jQuery",
        level: "DOM & Legacy Migration",
        color: "#0769AD",
        svg: `<svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm1 14.5c-.8.8-1.9 1-3 .5l.8-1.5c.5.2 1 .1 1.4-.2.4-.4.5-1 .3-1.6l-1.8-5.3h2l1.2 4 1.7-4h1.9l-3 6.9c-.3.6-.9 1-1.5 1.2z"/></svg>`,
      },
    ],
  },
  {
    tag: "Design & Workflow",
    heading: "Tools & Developer Ecosystem",
    description: "Industry-standard tools for UI design, version control, and production builds.",
    skills: [
      {
        name: "Figma",
        level: "Wireframes & UI Kits",
        color: "#F24E1E",
        svg: `<svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M8 2h8a4 4 0 0 1 4 4 4 4 0 0 1-4 4h-4v4h4a4 4 0 0 1 4 4 4 4 0 0 1-4 4 4 4 0 0 1-4-4v-4H8a4 4 0 0 1-4-4 4 4 0 0 1 4-4h4V6H8a4 4 0 0 1-4-4 4 4 0 0 1 4-4z"/></svg>`,
      },
      {
        name: "Git & GitHub",
        level: "Version Control & CI/CD",
        color: "#F05032",
        svg: `<svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>`,
      },
      {
        name: "VS Code",
        level: "Extensions & Snippets",
        color: "#007ACC",
        svg: `<svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M17.5 2.5L7.2 10.7l-4.4-3.4L0 9.1l5.2 4.4L0 17.9l2.8 1.8 4.4-3.4 10.3 8.2 6.5-3.1V5.6l-6.5-3.1zm0 4.9v11.2L9.8 13.5l7.7-6.1z"/></svg>`,
      },
      {
        name: "Chrome DevTools",
        level: "Profiling & Lighthouse",
        color: "#22C55E",
        svg: `<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="m14.3 9.7-4.6 4.6m0-4.6 4.6 4.6"/></svg>`,
      },
    ],
  },
  {
    tag: "CS & Languages",
    heading: "Programming Fundamentals",
    description: "Solid computer science background with algorithmic thinking and structured code.",
    skills: [
      {
        name: "Python",
        level: "Scripts & Automation",
        color: "#3776AB",
        svg: `<svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M11.9 2C7.3 2 7.5 4 7.5 4v2.1h4.5v.7H5.6s-3.6.4-3.6 5.1 3.1 4.9 3.1 4.9h1.9v-2.7c0-2.1 1.8-3.9 3.9-3.9h4.5s2 .1 2-2.1V4.2S17.4 2 11.9 2zM9.5 3.5a1.1 1.1 0 1 1 0 2.2 1.1 1.1 0 0 1 0-2.2zM12.1 22c4.6 0 4.4-2 4.4-2v-2.1H12v-.7h6.4s3.6-.4 3.6-5.1-3.1-4.9-3.1-4.9H17v2.7c0 2.1-1.8 3.9-3.9 3.9H8.6s-2-.1-2 2.1v3.9s0 2.2 5.5 2.2zm2.4-1.5a1.1 1.1 0 1 1 0-2.2 1.1 1.1 0 0 1 0 2.2z"/></svg>`,
      },
      {
        name: "C Programming",
        level: "Memory & Algorithms",
        color: "#A8B9CC",
        svg: `<svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm3.8 14.8c-1.1 1.1-2.5 1.7-4.1 1.7-3.2 0-5.8-2.6-5.8-5.8s2.6-5.8 5.8-5.8c1.6 0 3 .6 4.1 1.7l-1.5 1.5c-.7-.7-1.6-1.1-2.6-1.1-2 0-3.7 1.6-3.7 3.7s1.7 3.7 3.7 3.7c1 0 1.9-.4 2.6-1.1l1.5 1.5z"/></svg>`,
      },
    ],
  },
  {
    tag: "Active Expansion",
    heading: "Modern Frontend & Full Stack",
    description: "Technologies currently being integrated into upcoming projects.",
    skills: [
      {
        name: "React",
        level: "Hooks & Component Architecture",
        color: "#61DAFB",
        svg: `<svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><circle cx="12" cy="12" r="2.2"/><g fill="none" stroke="currentColor" stroke-width="1.3"><ellipse cx="12" cy="12" rx="10" ry="4"/><ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(60 12 12)"/><ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(120 12 12)"/></g></svg>`,
      },
      {
        name: "Tailwind CSS",
        level: "Design Systems & JIT",
        color: "#06B6D4",
        svg: `<svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M12 6c-2.7 0-4.4 1.3-5.2 4 .9-1.3 2-1.8 3.3-1.4.8.2 1.4.8 2 1.5 1.1 1 2.3 2.1 4.9 2.1 2.7 0 4.4-1.3 5.2-4-.9 1.3-2 1.8-3.3 1.4-.8-.2-1.4-.8-2-1.5-1.1-1-2.3-2.1-4.9-2.1zM6.8 12c-2.7 0-4.4 1.3-5.2 4 .9-1.3 2-1.8 3.3-1.4.8.2 1.4.8 2 1.5 1.1 1 2.3 2.1 4.9 2.1 2.7 0 4.4-1.3 5.2-4-.9 1.3-2 1.8-3.3 1.4-.8-.2-1.4-.8-2-1.5-1.1-1-2.3-2.1-4.9-2.1z"/></svg>`,
      },
      {
        name: "Node.js",
        level: "Runtime & Express Basics",
        color: "#22C55E",
        svg: `<svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M12 2l10 5.8v11.6L12 22 2 19.4V7.8L12 2zm0 2.3L4 8.9v8.9l8 4.7 8-4.7V8.9l-8-4.6z"/></svg>`,
      },
    ],
  },
];
