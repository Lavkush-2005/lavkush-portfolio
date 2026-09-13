import { forwardRef, useMemo } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@utils/cn';

const VARIANTS = {
  primary: 'btn-primary',
  secondary: 'btn-secondary',
  ghost: 'btn-ghost',
};

const SIZES = {
  sm: 'text-xs px-4 py-2',
  md: '', // uses .btn default (px-5 py-2.5 text-sm)
  lg: 'text-base px-7 py-3.5',
};

/**
 * Reusable button. Renders a <button> by default, or any element/component
 * via the `as` prop (e.g. `as={Link}` with a `to` prop for navigation).
 *
 * @param {'primary'|'secondary'|'ghost'} variant
 * @param {'sm'|'md'|'lg'} size
 * @param {React.ElementType} as
 * @param {React.ReactNode} icon - optional icon rendered before children
 */
export const Button = forwardRef(
  (
    { as: Component = 'button', variant = 'primary', size = 'md', icon, className, children, ...props },
    ref
  ) => {
    // Memoize so we don't call motion(Component) fresh on every render,
    // which would unmount/remount the element and drop animation state.
    const MotionComponent = useMemo(() => motion(Component), [Component]);

    return (
      <MotionComponent
        ref={ref}
        whileTap={{ scale: 0.97 }}
        className={cn(VARIANTS[variant] ?? VARIANTS.primary, SIZES[size], className)}
        {...props}
      >
        {icon}
        {children}
      </MotionComponent>
    );
  }
);

Button.displayName = 'Button';

export default Button;
