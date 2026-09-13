# Data Analyst Portfolio — Foundation (Phase 1A)

Premium portfolio project, built in phases. **This phase is the foundation
only** — tooling, design system, theming, and reusable primitives. No
Hero, Navbar, About, Skills, Projects, Certifications, Contact, or Footer
sections exist yet; those arrive in later phases and will be built on top
of this exact structure.

## Tech stack

- React 19 + Vite
- Tailwind CSS 3
- Framer Motion
- React Icons + Lucide React
- React Router DOM

## Getting started

```bash
npm install
npm run dev
```

Open the URL Vite prints (default `http://localhost:5173`). You should see
a single centered "Foundation ready." card on a faint grid background,
with a light/dark toggle in the top-right corner.

Other commands:

```bash
npm run build     # production build to dist/
npm run preview   # preview the production build locally
npm run lint      # eslint
```

## Folder structure

```
src/
  assets/            static images & fonts (empty for now)
    images/
    fonts/
  components/
    ui/              generic, content-agnostic UI: Button, Card, Loader
    layout/           structural: Container, Section, ThemeToggle, ScrollToTop
  context/           React context providers (ThemeContext)
  data/              site content config, populated in later phases
  hooks/             useTheme, useScrollPosition, useMediaQuery
  pages/             route-level components (Home)
  styles/            scoped stylesheets, see styles/README.md
  utils/             cn() class helper, shared constants
  App.jsx            router + providers wiring
  main.jsx           React entry point
  index.css          design tokens, typography, component classes
```

## Design system

All tokens are defined as CSS variables in `src/index.css` (`:root` for
light, `.dark` for dark) and surfaced through `tailwind.config.js`, so
every color/spacing/radius/shadow decision is made in exactly one place.

- **Color** — a neutral `bg`/`surface`/`border`/`ink`/`muted` scale, plus
  two brand colors: `signal` (amber — the one number that matters) and
  `insight` (indigo — links & data visualization). Chosen to read as
  "analytics dashboard," not a generic AI-app palette.
- **Type** — `font-display` (Fraunces, serif, headings), `font-sans`
  (Inter, body), `font-mono` (JetBrains Mono, data/labels/captions).
  Scale runs from `text-xs` to `text-8xl`; semantic classes
  (`.text-display-1`, `.text-heading-1`, `.text-body`, `.text-caption`,
  `.text-data`) sit on top so components don't hardcode raw sizes.
- **Spacing** — Tailwind's default scale extended with `section-y` /
  `section-x` (fluid, `clamp()`-based) for consistent vertical rhythm
  across sections regardless of viewport.
- **Radius / shadow / motion** — `rounded-sm` → `rounded-2xl` +
  `rounded-pill`; `shadow-soft` → `shadow-floating` plus glow variants
  (`shadow-glow-signal`, `shadow-glow-insight`); a shared easing curve
  (`ease-signature`, a soft overshoot) used by both Tailwind transitions
  and Framer Motion presets in `utils/constants.js`.
- **Glassmorphism** — `.glass` / `.glass-panel` utility classes
  (blurred, translucent surface + hairline border).
- **Breakpoints** — `xs 375 / sm 640 / md 768 / lg 1024 / xl 1280 /
  2xl 1440 / 3xl 1728`.

### Dark mode

Class-based (`darkMode: 'class'`), driven by `ThemeContext` +
`useTheme()`. Persists to `localStorage`, defaults to OS preference on
first visit, and follows OS changes until the user picks explicitly.
Toggle it with the `<ThemeToggle />` button (top-right corner for now,
until a real Navbar exists).

## Reusable components

- `Button` — `primary` / `secondary` / `ghost` variants, `sm`/`md`/`lg`
  sizes, polymorphic via `as` (e.g. `as={Link}` for router links).
- `Card` — `flat` / `interactive` / `glass` variants, with `Card.Header`,
  `Card.Title`, `Card.Body`, `Card.Footer` subcomponents, optional
  scroll-reveal via `animate`.
- `Container` — centers and caps content width (`container` / `prose` /
  `full`).
- `Section` — page-section wrapper with consistent vertical padding, an
  anchor `id`, background variants (`bg` / `surface` / `grid`), and a
  built-in scroll-reveal animation.
- `ThemeToggle` — accessible light/dark switch with an animated icon.
- `Loader` / `PageLoader` — spinner for inline async states and
  Suspense route fallbacks.
- `ScrollToTop` — resets scroll position on route change (mount once
  inside the router).

## Conventions for future phases

- Import via the path aliases configured in `vite.config.js`
  (`@components`, `@pages`, `@hooks`, `@context`, `@utils`, `@data`,
  `@assets`, `@styles`) instead of relative `../../..` paths.
- New page sections (Hero, About, Skills, ...) go in
  `src/components/sections/` (not yet created) and are composed inside
  `Section` + `Container`, using the semantic type classes and color
  tokens already defined — don't hardcode new colors or font sizes.
- Site content (name, bio, project list, links) belongs in `src/data/`,
  not hardcoded inside components.
- New routes are added to `App.jsx` as additional lazy-loaded
  `<Route>` entries.
