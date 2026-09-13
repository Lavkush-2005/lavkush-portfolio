import { Section } from '@components/layout/Section';
import { CertificationCarousel } from './CertificationCarousel';
import { certificationsContent } from '@data/certificationsContent';

/**
 * Certifications section: header + a featured-certificate carousel.
 * Sits directly below Projects. Renders entirely from
 * certificationsContent.js — adding a certificate later only means
 * editing that data file, not this component or the carousel.
 */
export function Certifications() {
  return (
    <Section id="certifications" background="surface" className="scroll-mt-24">
      <div className="mb-12 text-center md:mb-16">
        <span className="text-caption text-signal">{certificationsContent.label}</span>
        <h2 className="text-heading-1 mt-3">{certificationsContent.heading}</h2>
        <p className="text-body-lg mx-auto mt-4 max-w-2xl">{certificationsContent.description}</p>
        <div className="divider mx-auto mt-6 w-24" />
      </div>

      <CertificationCarousel certifications={certificationsContent.certifications} />
    </Section>
  );
}

export default Certifications;
