# Developer Portfolio & Technical Journal

A personal developer website for sharing background, software engineering projects,
certifications, achievements, technical writing, and social profiles.

**Status: Phase 1 — project skeleton.** Every page is intentionally minimal. Personal
details are clearly labeled placeholders; no projects, credentials, or achievements
have been invented. This phase does not include article routes, portfolio displays,
GitHub integration, or deployment.

## Stack

- Astro 7 with static HTML output and TypeScript strict mode
- Tailwind CSS 4 through the official `@tailwindcss/vite` plugin
- Astro's built-in Markdown support and official `@astrojs/mdx` integration
- npm with a committed lockfile for reproducible installations
- Git and GitHub for version control

No frontend framework, component library, external API, or database is required.

## Local setup

Requirements: **Node.js 22.22.0 or newer** and **npm 9.6.5 or newer**. A supported
Node.js LTS release is recommended. Use npm for this repository.

From the project root:

```sh
npm ci
npm run dev
```

Open the local URL printed by Astro, normally `http://localhost:4321`.
For the initial installation or intentional dependency changes, use `npm install`.
Commit the resulting `package-lock.json` alongside dependency changes.

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the local development server |
| `npm run check` | Generate Astro types and check Astro/TypeScript source |
| `npm run build` | Run checks, then generate a production site in `dist/` |
| `npm run preview` | Serve the latest production build locally |
| `npm run astro -- --help` | Show Astro CLI commands |

If a server is running in the background, stop it from this project directory with
`npm run astro -- dev stop` or `npm run astro -- preview stop`, respectively.

No environment variables are needed for Phase 1. `.env` files, dependencies,
generated output, local npm credentials, and common private key files are ignored.
Never store secrets in source files or in `public/`; public assets ship to visitors.
An optional `.env.example` may contain placeholder values only.

## Structure

```text
.
├── public/
│   ├── images/                 # Future static images
│   ├── icons/                  # Future static icons
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── layout/             # Site footer
│   │   ├── navigation/         # Header and shared social links
│   │   ├── ui/                 # Small theme control
│   │   └── sections/           # Reusable page introduction
│   ├── layouts/
│   │   ├── BaseLayout.astro    # Document, metadata, header, main, footer
│   │   └── PlaceholderLayout.astro
│   ├── pages/                 # File-based public routes
│   │   ├── index.astro
│   │   ├── about.astro
│   │   ├── projects/index.astro
│   │   ├── certifications.astro
│   │   ├── achievements.astro
│   │   ├── journal/index.astro
│   │   └── contact.astro
│   ├── content/journal/       # Reserved for future Markdown/MDX articles
│   ├── data/                  # Typed profile, navigation, and content data
│   ├── styles/global.css      # Tailwind import, theme tokens, shared styles
│   └── content.config.ts      # Journal loader and frontmatter schema
├── .gitignore
├── astro.config.mjs
├── package.json
├── package-lock.json
├── tsconfig.json
└── README.md
```

Empty asset and journal folders use `.gitkeep` so Git retains the directory structure.

## Architecture

Astro generates static pages from `src/pages/`. All seven pages share
`BaseLayout.astro`, which owns document metadata and the accessible site shell.
Placeholder pages also share a small layout so their presentation remains consistent.
Navigation wraps on narrow screens and remains usable without JavaScript.

Presentation lives in components and CSS; profile and future structured content live
in `src/data/`. The empty project, certification, and achievement arrays are reserved
data sources and are intentionally not rendered in this phase. Their small exported
interfaces can evolve when real content requirements are known.

Theme colors are centralized in CSS custom properties. Dark is the initial default.
A small native button switches to light mode and remembers the choice in browser
storage when available. Without JavaScript, the site remains usable in dark mode.
No animations, external fonts, or client framework are loaded.

### Placeholder routes

`/`, `/about/`, `/projects/`, `/certifications/`, `/achievements/`, `/journal/`, and
`/contact/` are implemented. Each page has a unique title, description, and one main
heading. Shared navigation identifies the current route, and a skip link supports
keyboard navigation.

### Personalization

- `src/data/profile.ts`: site title, name, introduction, and default description.
- `src/data/socialLinks.ts`: GitHub, LinkedIn, Instagram, and YouTube URLs. `null`
  means unconfigured and renders as plain text, avoiding fake profile links.
- `src/data/navigation.ts`: shared route labels and destinations.
- `src/data/projects.ts`, `certifications.ts`, and `achievements.ts`: typed empty
  arrays for real records in a later phase.

### Future journal foundation

`src/content.config.ts` follows Astro's Content Layer convention with a `glob()`
loader for `src/content/journal/**/*.{md,mdx}`. The schema defines `title`,
`description`, `publishedAt`, and `draft` (default `true`). The directory is empty,
so Astro may report that no matching content files were found; this is expected.

Adding collection entries does **not** create public article pages. Article routing,
listings, and draft filtering must be implemented and reviewed in an approved future
phase. The current journal page remains a placeholder.

## Verification and version control

Before committing changes:

```sh
npm run check
npm run build
npm run preview
```

Visit all seven routes and check narrow-screen navigation, keyboard focus, and both
themes. `dist/`, `.astro/`, and `node_modules/` are generated locally and excluded
from Git. Keep source files and `package-lock.json` under version control.

The source repository is maintained on GitHub. Keep changes in focused commits and
run the checks above before pushing. Website hosting and deployment remain separate
decisions; publishing the source repository does not deploy the website.

## Official references

- [Astro setup](https://docs.astro.build/en/install-and-setup/)
- [Astro TypeScript](https://docs.astro.build/en/guides/typescript/)
- [Astro content collections](https://docs.astro.build/en/guides/content-collections/)
- [Official MDX integration](https://docs.astro.build/en/guides/integrations-guide/mdx/)
- [Tailwind with Astro](https://tailwindcss.com/docs/installation/framework-guides/astro)

Phase 1 ends with this working foundation. Full portfolio content, certification
displays, journal features, and GitHub integration require explicit approval for a
later phase.
