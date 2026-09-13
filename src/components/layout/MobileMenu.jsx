import { AnimatePresence, motion } from 'framer-motion';
import { Button } from '@components/ui/Button';
import { cn } from '@utils/cn';
import { siteConfig } from '@data/siteConfig';

/**
 * Full-screen mobile navigation panel, below the `md` breakpoint. The
 * Navbar owns the open/closed state and the hamburger button; this
 * component only renders the overlay and calls `onClose` when a link
 * (or the resume button) is chosen, so selecting an item auto-closes it.
 */
export function MobileMenu({ isOpen, onClose, activeId }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="glass fixed inset-0 z-40 md:hidden"
        >
          <motion.nav
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 12 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1], delay: 0.05 }}
            aria-label="Mobile"
            className="flex h-full flex-col items-center justify-center gap-8 px-section-x"
          >
            {siteConfig.navLinks.map((link) => {
              const id = link.href.replace('#', '');
              const isActive = id === activeId;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={onClose}
                  className={cn(
                    'font-display text-2xl font-semibold transition-colors duration-400',
                    isActive ? 'text-signal' : 'text-ink hover:text-signal'
                  )}
                >
                  {link.label}
                </a>
              );
            })}
            <Button as="a" href={siteConfig.resumeUrl} variant="primary" onClick={onClose} className="mt-4">
              Resume
            </Button>
          </motion.nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default MobileMenu;
