import { Github } from 'lucide-react';
import { Card } from '@components/ui/Card';
import { Badge } from '@components/ui/Badge';
import { Button } from '@components/ui/Button';
import { ImagePlaceholder } from '@components/ui/ImagePlaceholder';

/**
 * Single project card for the projects grid. Takes a project object
 * from `projectsContent.projects` (id, title, description, image,
 * technologies, githubUrl, featured). GitHub Repository is the only
 * action, by design — no live demo, report, or download link.
 *
 * `group` on the Card lets the image zoom together with the card's
 * own hover state; `hover:shadow-glow-signal` (a utility, so it wins
 * over `.card-interactive`'s components-layer shadow) swaps the
 * default hover shadow for a soft signal-colored glow.
 */
export function ProjectCard({ project }) {
  return (
    <Card
      variant="interactive"
      animate
      className="group flex h-full flex-col transition-shadow duration-400 ease-signature hover:shadow-glow-signal"
    >
      <div className="overflow-hidden rounded-lg">
        <ImagePlaceholder
          image={project.image}
          alt={`${project.title} preview`}
          label="Project image placeholder"
          className="transition-transform duration-600 ease-signature group-hover:scale-105"
        />
      </div>

      <Card.Title className="mt-5">{project.title}</Card.Title>
      <Card.Body className="mt-2 flex-1 text-sm">{project.description}</Card.Body>

      <div className="mt-4 flex flex-wrap gap-2.5">
        {project.technologies.map((tech) => (
          <Badge key={tech}>{tech}</Badge>
        ))}
      </div>

      <Card.Footer>
        <Button
          as="a"
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          variant="secondary"
          size="sm"
          icon={<Github size={16} />}
          aria-label={`View ${project.title} repository on GitHub`}
        >
          GitHub Repository
        </Button>
      </Card.Footer>
    </Card>
  );
}

export default ProjectCard;
