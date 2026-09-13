import { motion } from 'framer-motion';
import { cn } from '@utils/cn';

const SIZES = {
  sm: 'h-4 w-4 border-2',
  md: 'h-8 w-8 border-2',
  lg: 'h-12 w-12 border-[3px]',
};

/**
 * Minimal spinner used for route-level Suspense fallbacks and async
 * button/content states. Intentionally quiet — a thin ring in the
 * signal color rather than a busy skeleton, in keeping with the
 * page's restrained motion language.
 */
export function Loader({ size = 'md', label = 'Loading', className }) {
  return (
    <div role="status" className={cn('inline-flex items-center justify-center', className)}>
      <span
        className={cn(
          'animate-spin-slow rounded-full border-border border-t-signal',
          SIZES[size] ?? SIZES.md
        )}
      />
      <span className="sr-only">{label}</span>
    </div>
  );
}

/**
 * Full-viewport loader for Suspense fallbacks around lazy-loaded pages.
 */
export function PageLoader() {
  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-bg">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }}>
        <Loader size="lg" label="Loading page" />
      </motion.div>
    </div>
  );
}

export default Loader;
