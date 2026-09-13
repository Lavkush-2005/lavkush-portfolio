import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';
import { Logo } from './Logo';
import { Container } from './Container';
import { siteConfig } from '@data/siteConfig';

const SOCIAL_ICONS = { github: Github, linkedin: Linkedin, mail: Mail };

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

/**
 * Minimal site footer: logo, social icon links (LinkedIn/GitHub/Email),
 * and a copyright line with a small back-to-top control. Navigation
 * already lives in the Navbar and contact details already live in the
 * Contact section, so the footer intentionally doesn't repeat either.
 * Rendered once in App.jsx outside <Routes>, so it stays consistent
 * across every page.
 */
export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-surface">
      <Container>
        <div className="flex flex-col items-center gap-6 py-10 md:flex-row md:justify-between">
          <Logo />

          <div className="flex items-center gap-3">
            {siteConfig.socials.map((social) => {
              const Icon = SOCIAL_ICONS[social.icon];
              const isMail = social.icon === 'mail';
              return (
                <a
                  key={social.href}
                  href={social.href}
                  target={isMail ? undefined : '_blank'}
                  rel={isMail ? undefined : 'noopener noreferrer'}
                  aria-label={social.label}
                  className="btn-icon border border-border hover:border-signal/60"
                >
                  {Icon && <Icon size={16} />}
                </a>
              );
            })}
          </div>
        </div>

        <div className="divider" />

        <div className="flex flex-col items-center gap-4 py-6 md:flex-row md:justify-between">
          <p className="text-sm text-muted">
            &copy; {year} {siteConfig.name}
          </p>

          <motion.button
            type="button"
            onClick={scrollToTop}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Back to top"
            className="btn-icon border border-border hover:border-signal/60"
          >
            <ArrowUp size={16} />
          </motion.button>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
