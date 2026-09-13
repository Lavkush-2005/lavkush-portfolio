import { useEffect, useState } from 'react';

/**
 * Tracks vertical scroll position and, optionally, whether the user has
 * scrolled past a threshold — handy for shrinking/blurring a fixed header
 * once real sections exist. Read-only; throttled via requestAnimationFrame.
 *
 * @param {number} threshold px scrolled before `isScrolled` flips true
 */
export function useScrollPosition(threshold = 24) {
  const [scrollY, setScrollY] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    let ticking = false;

    const update = () => {
      setScrollY(window.scrollY);
      setIsScrolled(window.scrollY > threshold);
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(update);
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    update();

    return () => window.removeEventListener('scroll', onScroll);
  }, [threshold]);

  return { scrollY, isScrolled };
}

export default useScrollPosition;
