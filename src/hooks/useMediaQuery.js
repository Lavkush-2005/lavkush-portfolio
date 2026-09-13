import { useEffect, useState } from 'react';

/**
 * Subscribes to a CSS media query and returns whether it currently matches.
 * Useful for JS-level responsive decisions (e.g. disabling an animation
 * on mobile) that Tailwind's responsive classes can't express.
 *
 * @param {string} query e.g. '(min-width: 1024px)'
 */
export function useMediaQuery(query) {
  const [matches, setMatches] = useState(() =>
    typeof window !== 'undefined' ? window.matchMedia(query).matches : false
  );

  useEffect(() => {
    const mediaQueryList = window.matchMedia(query);
    const listener = (e) => setMatches(e.matches);

    setMatches(mediaQueryList.matches);
    mediaQueryList.addEventListener('change', listener);
    return () => mediaQueryList.removeEventListener('change', listener);
  }, [query]);

  return matches;
}

export default useMediaQuery;
