import { motion } from 'framer-motion';
import { MapPin, Mail, Github, Linkedin, FileText } from 'lucide-react';
import { Section } from '@components/layout/Section';
import { Card } from '@components/ui/Card';
import { siteConfig } from '@data/siteConfig';
import { contactContent } from '@data/contactContent';
import { MOTION } from '@utils/constants';

// Mirrors Card's own `animate` behavior (same duration/ease) so the
// link items — which can't use Card directly since Card always
// renders a <div>, never an <a> — still enter identically to it.
const cardMotion = {
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.6, ease: MOTION.easeSignature },
};

function ContactItemContent({ icon: Icon, label, value }) {
  return (
    <>
      <div className="mx-auto mb-3 flex h-11 w-11 items-center justify-center rounded-md bg-signal-muted text-signal">
        <Icon size={20} />
      </div>
      <p className="text-caption">{label}</p>
      <p className="text-body mt-1 font-medium">{value}</p>
    </>
  );
}

/**
 * Contact section: heading + description, then a small grid of contact
 * items — Location, Email, LinkedIn, GitHub, Resume. Email, LinkedIn,
 * GitHub, and the resume link are read from siteConfig.js rather than
 * duplicated; only section copy and the location string live in
 * contactContent.js. No contact form, backend, or API — every item is
 * a direct link (mailto: for email, new-tab external links otherwise).
 */
export function Contact() {
  const github = siteConfig.socials.find((s) => s.icon === 'github');
  const linkedin = siteConfig.socials.find((s) => s.icon === 'linkedin');
  const email = siteConfig.socials.find((s) => s.icon === 'mail');

  const links = [
    email && {
      key: 'email',
      icon: Mail,
      label: 'Email',
      value: email.href.replace('mailto:', ''),
      href: email.href,
      ariaLabel: 'Email me',
    },
    linkedin && {
      key: 'linkedin',
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'View Profile',
      href: linkedin.href,
      external: true,
      ariaLabel: 'Open LinkedIn profile in a new tab',
    },
    github && {
      key: 'github',
      icon: Github,
      label: 'GitHub',
      value: 'View Profile',
      href: github.href,
      external: true,
      ariaLabel: 'Open GitHub profile in a new tab',
    },
    {
      key: 'resume',
      icon: FileText,
      label: 'Resume',
      value: 'View Resume',
      href: siteConfig.resumeUrl,
      external: true,
      ariaLabel: 'View resume',
    },
  ].filter(Boolean);

  return (
    <Section id="contact" background="grid" className="scroll-mt-24">
      <div className="mb-12 text-center md:mb-16">
        <span className="text-caption text-signal">{contactContent.label}</span>
        <h2 className="text-heading-1 mt-3">{contactContent.heading}</h2>
        <p className="text-body-lg mx-auto mt-4 max-w-2xl">{contactContent.description}</p>
        <div className="divider mx-auto mt-6 w-24" />
      </div>

      <div className="mx-auto grid max-w-4xl gap-5 sm:grid-cols-2 lg:grid-cols-3">
        <Card variant="glass" animate className="text-center">
          <ContactItemContent icon={MapPin} label="Location" value={contactContent.location} />
        </Card>

        {links.map((item) => (
          <motion.a
            key={item.key}
            {...cardMotion}
            href={item.href}
            target={item.external ? '_blank' : undefined}
            rel={item.external ? 'noopener noreferrer' : undefined}
            aria-label={item.ariaLabel}
            className="card-interactive block p-6 text-center"
          >
            <ContactItemContent icon={item.icon} label={item.label} value={item.value} />
          </motion.a>
        ))}
      </div>
    </Section>
  );
}

export default Contact;
