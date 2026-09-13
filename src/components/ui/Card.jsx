import { motion } from 'framer-motion';
import { cn } from '@utils/cn';

/**
 * Base surface for content blocks (future project cards, stat cards, etc).
 *
 * @param {'flat'|'interactive'|'glass'} variant
 * @param {boolean} animate - fade/rise in on mount
 */
export function Card({ variant = 'flat', animate = false, className, children, ...props }) {
  const base =
    variant === 'interactive' ? 'card-interactive' : variant === 'glass' ? 'glass-panel' : 'card';

  const content = (
    <div className={cn(base, 'p-6', className)} {...props}>
      {children}
    </div>
  );

  if (!animate) return content;

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      {content}
    </motion.div>
  );
}

Card.Header = function CardHeader({ className, children, ...props }) {
  return (
    <div className={cn('mb-4 flex items-center justify-between gap-4', className)} {...props}>
      {children}
    </div>
  );
};

Card.Title = function CardTitle({ className, children, ...props }) {
  return (
    <h3 className={cn('text-heading-3', className)} {...props}>
      {children}
    </h3>
  );
};

Card.Body = function CardBody({ className, children, ...props }) {
  return (
    <div className={cn('text-body', className)} {...props}>
      {children}
    </div>
  );
};

Card.Footer = function CardFooter({ className, children, ...props }) {
  return (
    <div className={cn('mt-4 pt-4 border-t border-border flex items-center justify-between', className)} {...props}>
      {children}
    </div>
  );
};

export default Card;
