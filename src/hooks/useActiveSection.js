import { useEffect, useState } from 'react';

/**
 * Observes a set of section ids and returns whichever is currently most
 * visible in the viewport — drives the navbar's active-link indicator.
 * Sections that don't exist yet on the page (later phases add them) are
 * skipped automatically, so this is safe to call with the full nav list
 * even before every section has been built.
 *
 * @param {string[]} ids section ids, without the leading '#'. Pass a
 *   stable (e.g. useMemo'd) array — a new array every render re-observes.
 */
export function useActiveSection(ids = []) {
  const [activeId, setActiveId] = useState(ids[0] ?? null);

  useEffect(() => {
    const elements = ids.map((id) => document.getElementById(id)).filter(Boolean);
    if (!elements.length) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible[0]) setActiveId(visible[0].target.id);
      },
      { rootMargin: '-30% 0px -60% 0px', threshold: [0, 0.25, 0.5, 0.75, 1] }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [ids]);

  return activeId;
}

export default useActiveSection;
