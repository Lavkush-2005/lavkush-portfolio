import { useEffect, useState } from 'react';
import { cn } from '@utils/cn';

/**
 * Cycles through a list of strings with a typewriter-style type/pause/
 * delete loop. Generic (not hero-specific) so it's reusable anywhere a
 * rotating headline is useful later. Renders the full current word in a
 * screen-reader-only span so the animation doesn't fragment assistive
 * tech output.
 *
 * @param {string[]} words
 * @param {number} typingSpeed ms per character while typing
 * @param {number} deletingSpeed ms per character while deleting
 * @param {number} pauseTime ms to hold the full word before deleting
 */
export function TypingText({ words = [], typingSpeed = 70, deletingSpeed = 40, pauseTime = 1400, className }) {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (!words.length) return undefined;
    const current = words[index % words.length];

    if (!deleting && subIndex === current.length) {
      const pause = setTimeout(() => setDeleting(true), pauseTime);
      return () => clearTimeout(pause);
    }

    if (deleting && subIndex === 0) {
      setDeleting(false);
      setIndex((i) => (i + 1) % words.length);
      return undefined;
    }

    const timeout = setTimeout(
      () => setSubIndex((s) => s + (deleting ? -1 : 1)),
      deleting ? deletingSpeed : typingSpeed
    );
    return () => clearTimeout(timeout);
  }, [subIndex, deleting, index, words, typingSpeed, deletingSpeed, pauseTime]);

  if (!words.length) return null;
  const current = words[index % words.length];

  return (
    <span className={cn('inline-flex items-center', className)}>
      <span aria-hidden="true">{current.slice(0, subIndex)}</span>
      <span
        aria-hidden="true"
        className="ml-0.5 inline-block h-[1em] w-[2px] animate-pulse bg-signal align-middle"
      />
      <span className="sr-only">{current}</span>
    </span>
  );
}

export default TypingText;
