import { useRef, useState } from 'react';
import { motion } from 'framer-motion';

/**
 * Counts up from 0 to `value` once it scrolls into view. Generic (not
 * About-specific) so it's reusable wherever a stat needs an animated
 * entrance later. Uses a plain requestAnimationFrame loop rather than
 * Framer Motion's animate() so it stays dependency-light and easy to
 * follow alongside the rest of the hooks in this codebase.
 *
 * @param {number} value target number
 * @param {string} suffix e.g. '+', 'yrs'
 * @param {number} duration seconds for the count-up
 */
export function StatCounter({ value, suffix = '', duration = 1.6, className }) {
  const [count, setCount] = useState(0);
  const hasAnimated = useRef(false);

  const startCount = () => {
    if (hasAnimated.current) return;
    hasAnimated.current = true;

    const start = performance.now();
    const tick = (now) => {
      const progress = Math.min((now - start) / (duration * 1000), 1);
      const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
      setCount(Math.round(eased * value));
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  };

  return (
    <motion.span
      className={className}
      onViewportEnter={startCount}
      viewport={{ once: true, margin: '-40px' }}
    >
      {count}
      {suffix}
    </motion.span>
  );
}

export default StatCounter;
