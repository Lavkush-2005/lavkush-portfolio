import { FileText } from 'lucide-react';
import { Card } from '@components/ui/Card';
import { Button } from '@components/ui/Button';
import { ImagePlaceholder } from '@components/ui/ImagePlaceholder';

/**
 * Displays a single certificate: image, title, issuer, date, and an
 * optional "View PDF" button. Takes a certification object shaped like
 * an entry in `certificationsContent.certifications`. Purely
 * presentational — CertificationCarousel decides which one is active.
 *
 * The PDF button only renders when `certification.pdf` is set, so
 * there's never a broken "#" link for certificates without one.
 */
export function CertificationCard({ certification }) {
  const { title, issuer, date, image, pdf } = certification;

  return (
    <Card variant="glass" className="overflow-hidden text-center">
      <ImagePlaceholder
        image={image}
        alt={`${title} certificate`}
        label="Certificate image placeholder"
        aspect="aspect-[4/3]"
        className="mx-auto max-w-md"
      />

      <h3 className="text-heading-3 mt-6">{title}</h3>
      <p className="text-body mt-1 text-muted">{issuer}</p>
      <p className="text-caption mt-2">{date}</p>

      {pdf && (
        <div className="mt-6">
          <Button
            as="a"
            href={pdf}
            target="_blank"
            rel="noopener noreferrer"
            variant="secondary"
            size="sm"
            icon={<FileText size={16} />}
            aria-label={`View ${title} certificate PDF`}
          >
            View PDF
          </Button>
        </div>
      )}
    </Card>
  );
}

export default CertificationCard;
