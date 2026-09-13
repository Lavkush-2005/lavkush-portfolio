// Shared, low-level constants. Site content (name, bio, projects, etc.)
// belongs in `src/data/`, not here — this file is for structural values
// referenced by components (breakpoints, storage keys, motion presets).

export const THEME_STORAGE_KEY = 'portfolio-theme';

export const BREAKPOINTS = {
  xs: 375,
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1440,
  '3xl': 1728,
};

// Reusable Framer Motion presets so every section animates consistently.
export const MOTION = {
  easeSignature: [0.22, 1, 0.36, 1],
  fadeInUp: {
    initial: { opacity: 0, y: 16 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
  fadeIn: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
  staggerContainer: {
    animate: {
      transition: { staggerChildren: 0.08 },
    },
  },
};
