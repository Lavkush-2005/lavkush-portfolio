import { useEffect, useState } from 'react';

/**
 * Tracks normalized pointer position across the viewport, centered at
 * (0, 0) and ranging roughly -0.5 to 0.5 on each axis. Used for subtle
 * parallax effects (e.g. the hero's floating gradient blobs). Safe on
 * touch devices — position simply stays at (0, 0) if no mousemove ever
 * fires, so nothing depends on it.
 */
export function useMousePosition() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMove = (e) => {
      setPosition({
        x: e.clientX / window.innerWidth - 0.5,
        y: e.clientY / window.innerHeight - 0.5,
      });
    };

    window.addEventListener('mousemove', handleMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMove);
  }, []);

  return position;
}

export default useMousePosition;
