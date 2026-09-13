import { cn } from '@utils/cn';

/**
 * Centers content and caps its width, with consistent horizontal gutters.
 * Every section's content should be wrapped in one of these so page
 * width stays consistent without repeating max-w/mx-auto everywhere.
 *
 * @param {'container'|'prose'|'full'} size
 */
export function Container({ size = 'container', as: Component = 'div', className, children, ...props }) {
  const width = size === 'prose' ? 'max-w-prose' : size === 'full' ? 'max-w-none' : 'max-w-container';

  return (
    <Component className={cn('mx-auto w-full px-section-x', width, className)} {...props}>
      {children}
    </Component>
  );
}

export default Container;
