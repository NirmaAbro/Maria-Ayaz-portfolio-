# Maria Ayaz — Portfolio

A academic portfolio website for Maria Ayaz (PhD applicant in Education, The
University of Melbourne), built with Next.js and Tailwind CSS.

## Getting started

Requires Node.js 18.17+ (Node 20 LTS recommended).

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

> **First build needs internet access.** The site uses `next/font/google`
> (Fraunces + Inter), which Next.js downloads and self-hosts automatically
> the first time you run `npm run dev` or `npm run build`. After that first
> fetch, the fonts are bundled locally — no runtime calls to Google are made
> and no layout shift occurs.

## Production build

```bash
npm run build
npm run start
```

This is a fully static-friendly Next.js Pages Router app — every route is
prerendered (`○ Static` in the build output) — so it also deploys as-is to
Vercel, Netlify, or any Node host.

## Project structure

```
components/       Reusable UI: Navbar, Footer, Layout, Tabs, Timeline,
                   PageHeader, ParticlesBackground, Seo
data/profile.js    All of Maria's CV content in one place -- edit this file
                   to update any page's content
pages/             One route per nav item (Home, About, Education, Research,
                   Experience, Certifications, Achievements, Contact) + 404
public/cv/         The downloadable CV PDF served from every page's footer
styles/            Tailwind entrypoint + a few global refinements
```

## Updating content

Everything text-based lives in `data/profile.js` as plain JS objects/arrays.
There's no CMS or database — edit that file and every page that uses that
data updates automatically. To swap the CV file, replace
`public/cv/MariaAyaz_CV.pdf` and keep the same file name (or update
`profile.cvFile` in `data/profile.js`).

**Portfolio link:** the source CV didn't include a personal site URL, so
there's currently no external "portfolio" link anywhere (this site *is* the
portfolio). If she later has a second site or a specific institutional page
to link to, add it in `data/profile.js`.

## Design notes

- **Palette:** deep navy-ink (`#1B2A41`), warm bone paper (`#EFEDE4`), a
  muted research-teal (`#3A6B63`) as the primary accent, and a restrained
  ochre-gold (`#B08A2E`) used only on award/certification markers — a quiet
  nod to her Gold Medalist distinction.
- **Type:** Fraunces (serif, editorial) for headlines, Inter (sans) for body
  and UI — one deliberate pairing rather than a generic system-font stack.
- **The hero particle network isn't decorative sparkle.** It's built with
  `particles.js` and styled as a node-and-line network labelled with Maria's
  actual thesis themes (Leadership, Curriculum, Policy, Voice, Equity,
  Language) — a direct visual reference to thematic analysis (Braun &
  Clarke), the qualitative method behind her MA thesis. See
  `components/ParticlesBackground.jsx`.
- **Certifications** and **Research** (Research experience + Publications)
  each have their own dedicated nav tab, per the brief. Research and
  Achievements use an in-page tab switcher (`components/Tabs.jsx`) to keep
  related content together without overloading the main nav.
- Fully responsive: single-column mobile layout with a slide-down nav menu,
  two-column layouts from `md:` breakpoint up. Keyboard focus states,
  `prefers-reduced-motion` handling, and semantic heading order are all in
  place.

## Customizing colors/fonts

Edit `tailwind.config.js` (color tokens) and `pages/_app.jsx` (font choices,
via `next/font/google`).
