import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '@hooks/useTheme';
import { cn } from '@utils/cn';

/**
 * Accessible light/dark toggle. Icon crossfades + rotates on switch;
 * respects reduced-motion via the global CSS override in index.css.
 */
export function ThemeToggle({ className }) {
  const { isDark, toggleTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      aria-pressed={isDark}
      className={cn(
        'btn-icon relative overflow-hidden border border-border hover:border-signal/60',
        className
      )}
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={isDark ? 'moon' : 'sun'}
          initial={{ rotate: -90, opacity: 0 }}
          animate={{ rotate: 0, opacity: 1 }}
          exit={{ rotate: 90, opacity: 0 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="flex"
        >
          {isDark ? <Moon size={18} /> : <Sun size={18} />}
        </motion.span>
      </AnimatePresence>
    </button>
  );
}

export default ThemeToggle;
