import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Logo } from './Logo';
import { ThemeToggle } from './ThemeToggle';
import { MobileMenu } from './MobileMenu';
import { Button } from '@components/ui/Button';
import { useScrollPosition } from '@hooks/useScrollPosition';
import { useActiveSection } from '@hooks/useActiveSection';
import { cn } from '@utils/cn';
import { siteConfig } from '@data/siteConfig';

/**
 * Sticky, glassmorphic site navigation. Shrinks slightly once the page
 * scrolls past a small threshold, tracks which section is in view for
 * the active-link underline, and hands off to <MobileMenu /> below the
 * `md` breakpoint via a hamburger toggle.
 */
export function Navbar() {
  const { isScrolled } = useScrollPosition(24);
  const [isOpen, setIsOpen] = useState(false);

  const sectionIds = useMemo(() => siteConfig.navLinks.map((link) => link.href.replace('#', '')), []);
  const activeId = useActiveSection(sectionIds);

  return (
    <>
      <motion.header
        initial={{ y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="glass fixed inset-x-0 top-0 z-50"
      >
        <div
          className={cn(
            'container-xl flex items-center justify-between transition-all duration-400 ease-signature',
            isScrolled ? 'py-3' : 'py-5'
          )}
        >
          <Logo />

          <nav aria-label="Primary" className="hidden items-center gap-8 md:flex">
            {siteConfig.navLinks.map((link) => {
              const id = link.href.replace('#', '');
              const isActive = id === activeId;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className="relative py-1 text-sm font-medium text-ink/80 transition-colors duration-400 hover:text-ink"
                >
                  {link.label}
                  {isActive && (
                    <motion.span
                      layoutId="nav-active-indicator"
                      className="absolute -bottom-1 left-0 right-0 h-[2px] rounded-pill bg-signal"
                      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                    />
                  )}
                </a>
              );
            })}
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <Button as="a" href={siteConfig.resumeUrl} variant="primary" size="sm">
              Resume
            </Button>
            <ThemeToggle />
          </div>

          <div className="flex items-center gap-2 md:hidden">
            <ThemeToggle />
            <button
              type="button"
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isOpen}
              onClick={() => setIsOpen((open) => !open)}
              className="btn-icon border border-border"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </motion.header>

      <MobileMenu isOpen={isOpen} onClose={() => setIsOpen(false)} activeId={activeId} />
    </>
  );
}

export default Navbar;
