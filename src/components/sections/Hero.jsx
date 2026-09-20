import { motion } from 'framer-motion';
import { FileText, Github, Linkedin, ArrowDown } from 'lucide-react';
import { Section } from '@components/layout/Section';
import { Button } from '@components/ui/Button';
import { TypingText } from '@components/ui/TypingText';
import { useMousePosition } from '@hooks/useMousePosition';
import { MOTION } from '@utils/constants';
import { siteConfig } from '@data/siteConfig';

// Local variants for the entrance stagger. Reuses the shared easing
// curve from MOTION so the motion language stays consistent with the
// rest of the design system, but needs its own initial/animate shape
// (MOTION.fadeInUp isn't structured for nested variant orchestration).
const container = {
  initial: {},
  animate: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};
const item = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: MOTION.easeSignature } },
};

/**
 * First-impression hero: name, rotating role (TypingText), tagline,
 * resume/GitHub/LinkedIn CTAs, an illustration placeholder, an animated
 * gradient + floating blurred circles that drift with the pointer, and
 * a scroll-down indicator. Section-level scroll-reveal is disabled
 * (animate={false}) since this section orchestrates its own entrance.
 */
export function Hero() {
  const { x, y } = useMousePosition();
  const github = siteConfig.socials.find((s) => s.icon === 'github');
  const linkedin = siteConfig.socials.find((s) => s.icon === 'linkedin');

  return (
    <Section
      id="home"
      animate={false}
      background="transparent"
      className="relative flex min-h-screen items-center overflow-hidden scroll-mt-24"
    >
      {/* Decorative layer: animated gradient blobs + faint grid, all inert to assistive tech */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <motion.div
          className="absolute -top-24 -left-24 h-96 w-96 rounded-full bg-signal/30 blur-3xl"
          animate={{ x: x * 30, y: y * 30 }}
          transition={{ type: 'spring', stiffness: 40, damping: 20 }}
        />
        <motion.div
          className="absolute bottom-0 right-0 h-[28rem] w-[28rem] rounded-full bg-insight/25 blur-3xl"
          animate={{ x: x * -40, y: y * -40 }}
          transition={{ type: 'spring', stiffness: 35, damping: 20 }}
        />
        <div className="absolute inset-0 bg-grid opacity-40 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />
      </div>

      <motion.div
        variants={container}
        initial="initial"
        animate="animate"
        className="grid w-full items-center gap-12 md:grid-cols-[1.1fr_0.9fr]"
      >
        <div>
          <motion.span variants={item} className="text-caption text-signal">
            Hello, I&apos;m
          </motion.span>

          <motion.h1 variants={item} className="text-display-1 mt-3">
            {siteConfig.name}
          </motion.h1>

          <motion.div variants={item} className="text-heading-2 mt-3 text-muted">
            <TypingText words={siteConfig.roles} />
          </motion.div>

          <motion.p variants={item} className="text-body-lg mt-6 max-w-prose">
            {siteConfig.tagline}
          </motion.p>

          <motion.div variants={item} className="mt-8 flex flex-wrap gap-4">
            <Button as="a" href={siteConfig.resumeUrl} variant="primary" icon={<FileText size={18} />}>
              Resume
            </Button>
            {github && (
              <Button
                as="a"
                href={github.href}
                target="_blank"
                rel="noopener noreferrer"
                variant="secondary"
                icon={<Github size={18} />}
              >
                GitHub
              </Button>
            )}
            {linkedin && (
              <Button
                as="a"
                href={linkedin.href}
                target="_blank"
                rel="noopener noreferrer"
                variant="secondary"
                icon={<Linkedin size={18} />}
              >
                LinkedIn
              </Button>
            )}
          </motion.div>
        </div>

        <motion.div
          variants={item}
          className="glass relative mx-auto flex aspect-square w-full max-w-sm overflow-hidden items-center justify-center rounded-2xl border border-dashed border-border"
        >
         <img
  src="/profile/Lavkush_Profile_pic1.png"
  alt="Lavkush Kumar"
  className="h-full w-full scale-x-110 rounded-2xl object-cover"
/>
        </motion.div>
      </motion.div>

      <motion.div
        className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 text-muted"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
      >
        <span className="text-caption">Scroll</span>
        <ArrowDown size={18} />
      </motion.div>
    </Section>
  );
}

export default Hero;
