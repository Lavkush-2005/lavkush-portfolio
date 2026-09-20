import { useEffect, useState } from 'react';

export function useActiveSection(ids = []) {
  const [activeId, setActiveId] = useState(ids[0] ?? null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 180;

      let currentId = ids[0] ?? null;

      ids.forEach((id) => {
        const element = document.getElementById(id);

        if (element && element.offsetTop <= scrollPosition) {
          currentId = id;
        }
      });

      setActiveId(currentId);
    };

    handleScroll();

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [ids]);

  return activeId;
}

export default useActiveSection;
