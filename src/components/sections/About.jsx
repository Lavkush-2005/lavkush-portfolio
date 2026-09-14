import { motion } from 'framer-motion';
import { Lightbulb, BarChart3, LayoutDashboard, GraduationCap } from 'lucide-react';
import { Section } from '@components/layout/Section';
import { Card } from '@components/ui/Card';
import { StatCounter } from '@components/ui/StatCounter';
import { aboutContent } from '@data/aboutContent';
import { MOTION } from '@utils/constants';

const HIGHLIGHT_ICONS = {
  lightbulb: Lightbulb,
  chart: BarChart3,
  dashboard: LayoutDashboard,
  learning: GraduationCap,
};

/**
 * About section: profile-image placeholder + intro/mission/objective,
 * four highlight cards, and an animated stats row. Sits directly below
 * Hero. Leans entirely on existing primitives (Section, Card,
 * StatCounter) and the shared easing curve — no new design tokens.
 */
export function About() {
  return (
    <Section id="about" background="surface" className="scroll-mt-24">
      <div className="mb-12 text-center md:mb-16">
        <span className="text-caption text-signal">About</span>
        <h2 className="text-heading-1 mt-3">Who I am</h2>
        <div className="divider mx-auto mt-6 w-24" />
      </div>

      <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: MOTION.easeSignature }}
          className="glass mx-auto flex aspect-[4/5] w-full max-w-sm items-center justify-center rounded-2xl border border-dashed border-border p-8"
        >
          <img
  src="/profile/Lavkush_Profile_pic1.png"
  alt="Lavkush Kumar"
  className="h-full w-full rounded-2xl object-cover"
/>
        </motion.div>

        <div className="space-y-6">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, ease: MOTION.easeSignature }}
            className="text-body-lg"
          >
            {aboutContent.intro}
          </motion.p>

          <Card variant="glass" animate className="border-l-2 border-l-signal">
            <span className="text-caption">Mission</span>
            <p className="text-body mt-2">{aboutContent.mission}</p>
          </Card>

          <Card variant="glass" animate className="border-l-2 border-l-insight">
            <span className="text-caption">Career objective</span>
            <p className="text-body mt-2">{aboutContent.objective}</p>
          </Card>
        </div>
      </div>

      <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4 md:mt-20">
        {aboutContent.highlights.map((item) => {
          const Icon = HIGHLIGHT_ICONS[item.icon];
          return (
            <Card key={item.title} variant="interactive" animate className="text-center">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-md bg-signal-muted text-signal">
                {Icon && <Icon size={22} />}
              </div>
              <Card.Title className="text-base">{item.title}</Card.Title>
              <Card.Body className="mt-2 text-sm">{item.description}</Card.Body>
            </Card>
          );
        })}
      </div>

      <div className="mt-16 grid grid-cols-2 gap-8 border-t border-border pt-12 text-center md:mt-20 md:grid-cols-4">
        {aboutContent.stats.map((stat) => (
          <div key={stat.label}>
            <div className="text-display-2 text-signal">
              <StatCounter value={stat.value} suffix={stat.suffix} className="text-data" />
            </div>
            <p className="text-caption mt-2">{stat.label}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

export default About;
