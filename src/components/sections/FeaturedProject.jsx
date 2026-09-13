import { Github } from 'lucide-react';
import { Card } from '@components/ui/Card';
import { Badge } from '@components/ui/Badge';
import { Button } from '@components/ui/Button';
import { ImagePlaceholder } from '@components/ui/ImagePlaceholder';

/**
 * Large, single-project spotlight rendered above the projects grid.
 * Takes a project object from `projectsContent.projects` (the entry
 * with `featured: true`) — title, description, technologies, image,
 * githubUrl. GitHub Repository is the only action, by design.
 *
 * `group` on the Card lets the image zoom together with the card's
 * own hover state; `hover:shadow-glow-signal` (a utility, so it wins
 * over `.card`'s components-layer shadow) swaps the default shadow
 * for a soft signal-colored glow on hover.
 */
export function FeaturedProject({ project }) {
  return (
    <Card
      variant="glass"
      animate
      className="group overflow-hidden transition-shadow duration-400 ease-signature hover:shadow-glow-signal"
    >
      <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-14">
        <div className="overflow-hidden rounded-lg">
          <ImagePlaceholder
            image={project.image}
            alt={`${project.title} preview`}
            label="Featured project image placeholder"
            aspect="aspect-video"
            className="transition-transform duration-600 ease-signature group-hover:scale-105 lg:aspect-square"
          />
        </div>

        <div>
          <span className="text-caption text-signal">Featured Project</span>
          <h3 className="text-heading-2 mt-3">{project.title}</h3>
          <p className="text-body-lg mt-5 max-w-prose">{project.description}</p>

          <div className="mt-6 flex flex-wrap gap-2.5">
            {project.technologies.map((tech) => (
              <Badge key={tech}>{tech}</Badge>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <Button
              as="a"
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              variant="primary"
              icon={<Github size={18} />}
              aria-label={`View ${project.title} repository on GitHub`}
            >
              GitHub Repository
            </Button>
          </div>
        </div>
      </div>
    </Card>
  );
}

export default FeaturedProject;
