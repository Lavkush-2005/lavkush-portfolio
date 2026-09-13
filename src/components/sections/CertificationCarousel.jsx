import { useCallback, useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { CertificationCard } from './CertificationCard';
import { ImagePlaceholder } from '@components/ui/ImagePlaceholder';
import { MOTION } from '@utils/constants';

const SWIPE_THRESHOLD = 60;

const slideVariants = {
  enter: (direction) => ({ x: direction > 0 ? 80 : -80, opacity: 0, scale: 0.96 }),
  center: { x: 0, opacity: 1, scale: 1 },
  exit: (direction) => ({ x: direction > 0 ? -80 : 80, opacity: 0, scale: 0.96 }),
};

/**
 * Featured-certificate carousel: previous ← current → next, with a
 * position indicator. Works from any-length `certifications` array —
 * nothing here depends on a fixed count, so growing the data file to
 * 15-20+ entries needs no changes to this component.
 *
 * Navigation: click the arrow buttons, click a desktop side preview,
 * press ← / → on the keyboard, or swipe/drag horizontally on touch.
 */
export function CertificationCarousel({ certifications }) {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const total = certifications.length;

  const goTo = useCallback(
    (nextIndex, dir) => {
      setDirection(dir);
      setIndex((nextIndex + total) % total);
    },
    [total]
  );

  const goPrev = useCallback(() => goTo(index - 1, -1), [goTo, index]);
  const goNext = useCallback(() => goTo(index + 1, 1), [goTo, index]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      const tag = e.target.tagName;
      if (tag === 'INPUT' || tag === 'TEXTAREA' || e.target.isContentEditable) return;
      if (e.key === 'ArrowLeft') goPrev();
      if (e.key === 'ArrowRight') goNext();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [goPrev, goNext]);

  if (!total) return null;

  const current = certifications[index];
  const prev = certifications[(index - 1 + total) % total];
  const next = certifications[(index + 1) % total];

  return (
    <div role="region" aria-roledescription="carousel" aria-label="Certifications" className="relative">
      <div className="flex items-center justify-center gap-3 md:gap-6">
        <button
          type="button"
          onClick={goPrev}
          aria-label="Previous certificate"
          className="btn-icon shrink-0 border border-border hover:border-signal/60"
        >
          <ChevronLeft size={20} />
        </button>

        <button
          type="button"
          onClick={goPrev}
          aria-label={`Go to previous certificate: ${prev.title}`}
          className="hidden w-32 shrink-0 flex-col items-center gap-2 opacity-40 transition-opacity duration-400 ease-signature hover:opacity-70 lg:flex"
        >
          <ImagePlaceholder
            image={prev.image}
            alt=""
            label="Certificate"
            aspect="aspect-[4/3]"
            className="pointer-events-none w-full"
          />
          <span className="text-caption w-full truncate text-center">{prev.title}</span>
        </button>

        <div className="relative w-full max-w-2xl overflow-hidden">
          <AnimatePresence mode="wait" custom={direction} initial={false}>
            <motion.div
              key={current.id}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.45, ease: MOTION.easeSignature }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.2}
              onDragEnd={(_, info) => {
                if (info.offset.x < -SWIPE_THRESHOLD) goNext();
                else if (info.offset.x > SWIPE_THRESHOLD) goPrev();
              }}
            >
              <CertificationCard certification={current} />
            </motion.div>
          </AnimatePresence>
        </div>

        <button
          type="button"
          onClick={goNext}
          aria-label={`Go to next certificate: ${next.title}`}
          className="hidden w-32 shrink-0 flex-col items-center gap-2 opacity-40 transition-opacity duration-400 ease-signature hover:opacity-70 lg:flex"
        >
          <ImagePlaceholder
            image={next.image}
            alt=""
            label="Certificate"
            aspect="aspect-[4/3]"
            className="pointer-events-none w-full"
          />
          <span className="text-caption w-full truncate text-center">{next.title}</span>
        </button>

        <button
          type="button"
          onClick={goNext}
          aria-label="Next certificate"
          className="btn-icon shrink-0 border border-border hover:border-signal/60"
        >
          <ChevronRight size={20} />
        </button>
      </div>

      <div className="mt-6 text-center">
        <span className="text-caption" aria-live="polite">
          {index + 1} / {total}
        </span>
      </div>
    </div>
  );
}

export default CertificationCarousel;
