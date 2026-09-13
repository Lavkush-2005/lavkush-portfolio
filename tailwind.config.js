/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    // Custom, slightly wider breakpoint set than Tailwind defaults.
    screens: {
      xs: '375px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1440px',
      '3xl': '1728px',
    },
    extend: {
      colors: {
        // Base surfaces
        bg: 'rgb(var(--color-bg) / <alpha-value>)',
        surface: 'rgb(var(--color-surface) / <alpha-value>)',
        'surface-raised': 'rgb(var(--color-surface-raised) / <alpha-value>)',
        border: 'rgb(var(--color-border) / <alpha-value>)',

        // Text
        ink: 'rgb(var(--color-text) / <alpha-value>)',
        muted: 'rgb(var(--color-muted) / <alpha-value>)',

        // Brand / signal colors — analytics dashboard convention:
        // amber "signal" for the one number that matters, indigo
        // "insight" as the cooler counterpart for links & data viz.
        signal: {
          DEFAULT: 'rgb(var(--color-signal) / <alpha-value>)',
          muted: 'rgb(var(--color-signal-muted) / <alpha-value>)',
        },
        insight: {
          DEFAULT: 'rgb(var(--color-insight) / <alpha-value>)',
          muted: 'rgb(var(--color-insight-muted) / <alpha-value>)',
        },

        // Semantic
        success: 'rgb(var(--color-success) / <alpha-value>)',
        danger: 'rgb(var(--color-danger) / <alpha-value>)',
      },
      fontFamily: {
        display: ['"Fraunces"', 'ui-serif', 'Georgia', 'serif'],
        sans: ['"Inter"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      fontSize: {
        // A deliberate, slightly-compressed type scale (major third-ish).
        xs: ['0.75rem', { lineHeight: '1.5' }],
        sm: ['0.875rem', { lineHeight: '1.55' }],
        base: ['1rem', { lineHeight: '1.6' }],
        lg: ['1.125rem', { lineHeight: '1.6' }],
        xl: ['1.25rem', { lineHeight: '1.5' }],
        '2xl': ['1.5rem', { lineHeight: '1.35' }],
        '3xl': ['1.875rem', { lineHeight: '1.25' }],
        '4xl': ['2.375rem', { lineHeight: '1.15' }],
        '5xl': ['3rem', { lineHeight: '1.1' }],
        '6xl': ['3.75rem', { lineHeight: '1.05' }],
        '7xl': ['4.5rem', { lineHeight: '1.02' }],
        '8xl': ['5.5rem', { lineHeight: '1' }],
      },
      spacing: {
        // Section-level rhythm on top of Tailwind's default scale.
        18: '4.5rem',
        22: '5.5rem',
        26: '6.5rem',
        30: '7.5rem',
        'section-y': 'clamp(4rem, 8vw, 8rem)',
        'section-x': 'clamp(1.25rem, 5vw, 4rem)',
        gutter: 'var(--gutter)',
      },
      maxWidth: {
        container: '1280px',
        prose: '65ch',
      },
      borderRadius: {
        sm: '0.375rem',
        DEFAULT: '0.625rem',
        md: '0.75rem',
        lg: '1rem',
        xl: '1.5rem',
        '2xl': '2rem',
        pill: '9999px',
      },
      boxShadow: {
        soft: '0 1px 2px rgb(15 23 42 / 0.04), 0 1px 3px rgb(15 23 42 / 0.06)',
        elevated: '0 8px 24px -8px rgb(15 23 42 / 0.18), 0 2px 8px -2px rgb(15 23 42 / 0.08)',
        floating: '0 24px 48px -12px rgb(15 23 42 / 0.25)',
        'glow-signal': '0 0 0 1px rgb(var(--color-signal) / 0.25), 0 0 24px -4px rgb(var(--color-signal) / 0.45)',
        'glow-insight': '0 0 0 1px rgb(var(--color-insight) / 0.25), 0 0 24px -4px rgb(var(--color-insight) / 0.45)',
        'inner-line': 'inset 0 0 0 1px rgb(var(--color-border) / 1)',
      },
      transitionTimingFunction: {
        signature: 'cubic-bezier(0.22, 1, 0.36, 1)',
        snappy: 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      transitionDuration: {
        400: '400ms',
        600: '600ms',
      },
      backdropBlur: {
        xs: '2px',
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        'fade-in-up': {
          '0%': { opacity: 0, transform: 'translateY(12px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        'scale-in': {
          '0%': { opacity: 0, transform: 'scale(0.96)' },
          '100%': { opacity: 1, transform: 'scale(1)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        'spin-slow': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
      animation: {
        'fade-in': 'fade-in 0.6s cubic-bezier(0.22, 1, 0.36, 1) both',
        'fade-in-up': 'fade-in-up 0.7s cubic-bezier(0.22, 1, 0.36, 1) both',
        'scale-in': 'scale-in 0.4s cubic-bezier(0.22, 1, 0.36, 1) both',
        shimmer: 'shimmer 2.5s linear infinite',
        'spin-slow': 'spin-slow 8s linear infinite',
      },
    },
  },
  plugins: [],
};
