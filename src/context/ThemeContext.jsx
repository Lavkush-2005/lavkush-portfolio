import { createContext, useEffect, useMemo, useState } from 'react';
import { THEME_STORAGE_KEY } from '@utils/constants';

export const ThemeContext = createContext(undefined);

function getInitialTheme() {
  if (typeof window === 'undefined') return 'dark';

  const stored = window.localStorage.getItem(THEME_STORAGE_KEY);
  if (stored === 'light' || stored === 'dark') return stored;

  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  return prefersDark ? 'dark' : 'light';
}

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle('dark', theme === 'dark');
    root.style.colorScheme = theme;
    window.localStorage.setItem(THEME_STORAGE_KEY, theme);
  }, [theme]);

  // Follow the OS preference if the user hasn't made an explicit choice yet.
  useEffect(() => {
    const media = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e) => {
      const stored = window.localStorage.getItem(THEME_STORAGE_KEY);
      if (!stored) setTheme(e.matches ? 'dark' : 'light');
    };
    media.addEventListener('change', handleChange);
    return () => media.removeEventListener('change', handleChange);
  }, []);

  const value = useMemo(
    () => ({
      theme,
      isDark: theme === 'dark',
      toggleTheme: () => setTheme((t) => (t === 'dark' ? 'light' : 'dark')),
      setTheme,
    }),
    [theme]
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}
