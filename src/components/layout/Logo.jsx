import { cn } from '@utils/cn';
import { siteConfig } from '@data/siteConfig';

/**
 * Compact wordmark: a monospace "data tag" badge (initials) plus the
 * name. Used by both Navbar and Footer so the two stay visually
 * consistent by construction rather than by copy-pasted markup.
 */
export function Logo({ className, showName = true }) {
  return (
    <a href="#home" className={cn('group inline-flex items-center gap-2.5', className)}>
      <span className="flex h-9 w-9 items-center justify-center rounded-md bg-signal font-mono text-sm font-semibold text-[#1A1206] transition-transform duration-400 ease-signature group-hover:-rotate-6">
        {siteConfig.initials}
      </span>
      {showName && (
        <span className="font-display text-lg font-semibold tracking-tight">{siteConfig.name}</span>
      )}
    </a>
  );
}

export default Logo;
