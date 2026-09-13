import { Code2, BarChart3, Wrench, Users2 } from 'lucide-react';
import { Section } from '@components/layout/Section';
import { Card } from '@components/ui/Card';
import { Badge } from '@components/ui/Badge';
import { skillsContent } from '@data/skillsContent';

const CATEGORY_ICONS = {
  code: Code2,
  chart: BarChart3,
  tool: Wrench,
  users: Users2,
};

/**
 * Skills section: header + four glassmorphism category cards (each
 * with an icon and a row of technology badges). Sits directly below
 * About. Built entirely from existing primitives — Section's `grid`
 * background variant, Card's `glass`/`animate` API, and the new
 * generic Badge component — no new design tokens.
 */
export function Skills() {
  return (
    <Section id="skills" background="grid" className="scroll-mt-24">
      <div className="mb-12 text-center md:mb-16">
        <span className="text-caption text-signal">{skillsContent.label}</span>
        <h2 className="text-heading-1 mt-3">{skillsContent.heading}</h2>
        <p className="text-body-lg mx-auto mt-4 max-w-2xl">{skillsContent.description}</p>
        <div className="divider mx-auto mt-6 w-24" />
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {skillsContent.categories.map((category) => {
          const Icon = CATEGORY_ICONS[category.icon];
          return (
            <Card
              key={category.title}
              variant="glass"
              animate
              className="hover-lift transition-shadow duration-400 ease-signature hover:shadow-floating"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-md bg-signal-muted text-signal">
                {Icon && <Icon size={22} />}
              </div>
              <Card.Title className="text-base">{category.title}</Card.Title>
              <div className="mt-4 flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <Badge key={skill}>{skill}</Badge>
                ))}
              </div>
            </Card>
          );
        })}
      </div>
    </Section>
  );
}

export default Skills;
