import { forwardRef } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@utils/cn';
import { Container } from './Container';

/**
 * Vertical rhythm wrapper for every future page section (Hero, About,
 * Skills, ...). Handles consistent section padding, an optional id for
 * anchor-link navigation, an optional background treatment, and a
 * built-in scroll-reveal so sections don't need to repeat the same
 * Framer Motion boilerplate.
 *
 * @param {string} id - anchor id, e.g. "about"
 * @param {'bg'|'surface'|'grid'|'transparent'} background
 * @param {boolean} animate - fade/rise the section in on scroll
 * @param {'container'|'prose'|'full'} containerSize
 */
export const Section = forwardRef(
  (
    { id, background = 'transparent', animate = true, containerSize = 'container', className, children, ...props },
    ref
  ) => {
    const bgClass =
      background === 'bg'
        ? 'bg-bg'
        : background === 'surface'
        ? 'bg-surface'
        : background === 'grid'
        ? 'bg-grid'
        : '';

    const Wrapper = animate ? motion.section : 'section';
    const motionProps = animate
      ? {
          initial: { opacity: 0, y: 24 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, margin: '-100px' },
          transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
        }
      : {};

    return (
      <Wrapper
        ref={ref}
        id={id}
        className={cn('section-padding', bgClass, className)}
        {...motionProps}
        {...props}
      >
        <Container size={containerSize}>{children}</Container>
      </Wrapper>
    );
  }
);

Section.displayName = 'Section';

export default Section;
