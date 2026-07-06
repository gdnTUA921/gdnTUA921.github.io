# Giancarlo Nonato — Developer Portfolio

A responsive, static single-page portfolio built with **ReactJS + Vite** and plain CSS
(no UI framework). Content is driven by a single data file, so updating the site never
requires touching component code.

## Getting started

```bash
npm install     # install dependencies
npm run dev     # start the dev server (http://localhost:5173)
```

## Building for deployment

```bash
npm run build   # outputs a static site to dist/
npm run preview # serve the production build locally to verify it
```

The `dist/` folder is fully static — deploy it anywhere:

- **Vercel / Netlify:** import the repo; both auto-detect Vite (build command `npm run build`, output directory `dist`). No config needed.
- **GitHub Pages:** if the site is served from `https://<user>.github.io/<repo>/`, first set `base: '/<repo>/'` in [vite.config.js](vite.config.js), then publish `dist/` (e.g. with GitHub Actions or the `gh-pages` package).

## Customizing content

All text content (name, contact info, skills, experience, projects, certifications) lives
in **`src/data/resume.js`**. Edit that one file to update any section.

### Resume PDF

`public/resume.pdf` is currently a placeholder — **replace it with your real resume PDF**
(same filename). The "Download Resume" buttons in the navbar and hero already point to it.

### Images

Drop your images into `public/images/` — no code changes needed:

- `public/images/profile.jpg` — your profile photo (square, shown in a circular frame in the hero)
- `public/images/projects/<project-slug>.jpg` — 16:9 screenshots for each project card
- `public/images/certifications/<cert-slug>.jpg` — photos/scans of your certificates

Every image on the site is clickable — it opens enlarged in an accessible modal
(closes on Escape, backdrop click, or the ✕ button).

See [public/images/README.md](public/images/README.md) for the exact filename each
project card expects. Until an image file exists, the site renders a styled placeholder
in its spot.

### Colors

The palette (university green / gold / white / light grey) is defined as CSS variables at
the top of [src/index.css](src/index.css) — tweak the whole site's look from there.

The site supports **light and dark mode**: the navbar toggle switches themes, the choice is
saved in `localStorage`, and first-time visitors get their OS preference. Dark-mode color
overrides live in the `[data-theme='dark']` block in the same file.

## Project structure

```
├── public/
│   ├── resume.pdf              # ← replace with your real resume
│   └── images/
│       ├── profile.jpg         # ← your profile photo (add)
│       └── projects/           # ← project screenshots (add)
├── src/
│   ├── data/resume.js          # all site content (single source of truth)
│   ├── hooks/useReveal.js      # scroll-reveal animation hook
│   ├── components/             # one component + CSS file per section
│   ├── App.jsx                 # page layout / section order
│   ├── index.css               # design tokens (colors) + global styles
│   └── main.jsx                # React entry point
└── index.html
```
