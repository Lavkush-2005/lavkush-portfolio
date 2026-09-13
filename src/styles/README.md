# styles/

The global design system (tokens, typography, component classes, utilities)
lives in `src/index.css`, imported once in `main.jsx` — Tailwind's `@layer`
system needs one entry point to resolve cleanly.

This folder is reserved for **additional, scoped stylesheets** future
phases may need (e.g. a stylesheet for a single complex section, or
third-party CSS overrides). Import them directly into the component that
needs them, not into `index.css`, to keep the global file focused on
tokens and reusable primitives.
