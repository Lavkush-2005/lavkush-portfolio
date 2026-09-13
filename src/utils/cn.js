/**
 * Lightweight class-name combiner.
 * Accepts strings, arrays, and objects ({ className: boolean }) and
 * filters out falsy values. Avoids pulling in `clsx`/`tailwind-merge`
 * for a foundation this small — swap in `tailwind-merge` later if
 * class-conflict resolution becomes necessary.
 *
 * @param  {...any} inputs
 * @returns {string}
 */
export function cn(...inputs) {
  const classes = [];

  for (const input of inputs) {
    if (!input) continue;

    if (typeof input === 'string' || typeof input === 'number') {
      classes.push(input);
    } else if (Array.isArray(input)) {
      const nested = cn(...input);
      if (nested) classes.push(nested);
    } else if (typeof input === 'object') {
      for (const key in input) {
        if (input[key]) classes.push(key);
      }
    }
  }

  return classes.join(' ');
}

export default cn;
