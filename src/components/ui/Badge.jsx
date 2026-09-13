import { motion } from 'framer-motion';
import { cn } from '@utils/cn';

/**
 * Small pill-shaped chip for a technology, tag, or keyword. Generic
 * (not Skills-specific) so it's reusable anywhere a badge is useful
 * later — e.g. tech stacks on future Project cards.
 */
export function Badge({ className, children, ...props }) {
  return (
    <motion.span
      whileHover={{ y: -2, scale: 1.05 }}
      transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        'inline-flex items-center rounded-pill border border-border bg-surface px-3 py-1.5',
        'font-mono text-xs font-medium text-ink/80',
        'transition-colors duration-400 ease-signature hover:border-signal/60 hover:bg-signal-muted/30 hover:text-signal',
        className
      )}
      {...props}
    >
      {children}
    </motion.span>
  );
}

export default Badge;
