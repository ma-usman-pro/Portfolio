# Muhammad Ahmad Usman — Developer Portfolio

A premium, dark-themed developer portfolio built with React, Vite, TypeScript, Tailwind CSS, and Framer Motion. All content is sourced from the resume, certificates, and offer letters provided — organized into single data files so it's easy to keep current.

**Design direction:** a "luxury dark" theme built around Python's own brand colors (blue `#4B8BBE` + yellow `#FFD43B`) since this is a Python developer's portfolio — paired with an ambient animated neural-network canvas in the hero to nod at the AI/ML work, and a terminal/REPL motif (typing effect, `$` prompts, blinking caret) throughout to reflect a developer's day-to-day tools.

---

## 1. Installation

Requires Node.js 18+.

```bash
npm install
```

## 2. Development

```bash
npm run dev
```

Opens the app at `http://localhost:5173` with hot reload.

## 3. Build for production

```bash
npm run build
```

Outputs a static, production-ready site to `dist/`.

```bash
npm run preview
```

Serves the built `dist/` folder locally so you can sanity-check the production build.

## 4. Deployment

The site is 100% static, so it deploys anywhere that serves static files.

### GitHub Pages (matches the `ma-usman-pro.github.io` link in the resume)
1. `npm run build`
2. Push the contents of `dist/` to the `gh-pages` branch (or use the `gh-pages` npm package / a GitHub Action).
3. In the repo settings, set Pages to serve from that branch.

### Vercel / Netlify
1. Connect the repository.
2. Build command: `npm run build`
3. Output directory: `dist`

## 5. Project structure

```
src/
  animations/     Shared Framer Motion variants (fadeUp, staggerContainer, ...)
  components/     All UI building blocks (Hero, Navbar, ProjectCard, ...)
  data/           Single source of truth for content — edit these, not the components
  hooks/          useTheme, useActiveSection, useScrollProgress
  pages/          Home.tsx (composes all sections) and NotFound.tsx (404 page)
  styles/         Global Tailwind + custom CSS (index.css)
  types/          Shared TypeScript interfaces
  utils/          GitHub API client (github.ts)
public/
  favicon.svg     Terminal-style monogram favicon
  profile.jpg     Profile photo used in the hero
  resume.docx     Downloadable resume (wired to the "Download Resume" button)
```

## 6. Customization guide

**Add or edit a project** — open `src/data/projects.ts` and add/edit an object in the `projects` array. It will automatically show up in the grid and be searchable, filterable, and sortable. No component changes needed.

**Update skills, experience, education, or certifications** — edit the matching file in `src/data/` (`skills.ts`, `experience.ts`, `education.ts`, `certifications.ts`).

**Change the profile info / social links / resume file** — edit `src/data/profile.ts`. To change the downloadable resume, replace `public/resume.docx` (or point `resumeUrl` at a new file, e.g. a PDF export).

**Swap the profile photo** — replace `public/profile.jpg` with a new image of the same filename, or update the `src` in `src/components/Hero.tsx`.

**Change the color palette or fonts** — all design tokens live in `tailwind.config.js` under `theme.extend.colors` and `theme.extend.fontFamily`. The three fonts (Space Grotesk, Inter, JetBrains Mono) are loaded via Google Fonts in `index.html`.

**Dark/light mode** — handled by `src/hooks/useTheme.ts`, toggled from the navbar, and persisted to `localStorage`.

**GitHub stats** — `src/components/GithubStats.tsx` calls the public GitHub REST API client-side (no token needed) for the username set in `profile.social.github`. Unauthenticated requests are rate-limited by GitHub (60/hour per IP), which is enough for normal portfolio traffic.

## 7. Accessibility & performance notes

- Visible focus rings (`:focus-visible`) throughout.
- `prefers-reduced-motion` is respected — animations shorten to near-zero automatically, and the ambient canvas background stops animating.
- Semantic landmarks (`header`, `main`, `footer`, `section` with ids) support screen readers and keyboard navigation.
- Fonts are preconnected; images are served at reasonable sizes — consider compressing `profile.jpg` further and converting to WebP for production.

## 8. What to double-check before publishing

- Swap `public/resume.docx` for a PDF version if you'd rather not distribute a Word file (a PDF is generally the safer, more portable format for a "Download Resume" button).
- The project cards use a generated icon treatment instead of real screenshots — replace with real screenshots/GIFs of each project if you have them, by adding an `image` field to the relevant entry in `src/data/projects.ts` and rendering it in `ProjectCard.tsx`.
- Live LinkedIn demo links and a live deployed URL weren't provided for most projects — add `demoUrl` / `liveUrl` to any project in `src/data/projects.ts` once you have them.
