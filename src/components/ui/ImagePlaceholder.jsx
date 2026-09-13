import { cn } from '@utils/cn';

/**
 * Bordered, glass-styled placeholder box for an image that doesn't
 * exist yet — same dashed-border-glass language already used for the
 * Hero illustration and About profile photo, packaged as a reusable
 * component so Projects can use it without duplicating that markup.
 *
 * Pass `image` once a real image is available and it renders a
 * properly-sized, cropped <img> with alt text in the exact same slot
 * instead of the placeholder box — no caller changes needed beyond
 * supplying the prop.
 *
 * @param {string} [image] - image URL; omit to show the placeholder box
 * @param {string} [alt] - alt text, used only when `image` is set
 * @param {string} label - placeholder caption shown when there's no image
 * @param {string} aspect - Tailwind aspect-ratio utility, e.g. 'aspect-video'
 */
export function ImagePlaceholder({ image, alt, label = 'Image placeholder', aspect = 'aspect-video', className }) {
  if (image) {
    return (
      <img
        src={image}
        alt={alt || label}
        loading="lazy"
        className={cn('w-full rounded-lg object-cover', aspect, className)}
      />
    );
  }

  return (
    <div
      className={cn(
        'glass flex items-center justify-center rounded-lg border border-dashed border-border',
        aspect,
        className
      )}
    >
      <span className="text-caption px-4 text-center">{label}</span>
    </div>
  );
}

export default ImagePlaceholder;
