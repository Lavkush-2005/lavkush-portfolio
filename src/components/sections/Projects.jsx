import { Section } from '@components/layout/Section';
import { FeaturedProject } from './FeaturedProject';
import { ProjectCard } from './ProjectCard';
import { projectsContent } from '@data/projectsContent';

/**
 * Projects section: header, one large FeaturedProject, then a
 * responsive grid of ProjectCard entries. Sits directly below Skills.
 *
 * Both the featured project and the grid are derived from the same
 * flat `projectsContent.projects` array (via the `featured` flag) —
 * there's no separate featured data to keep in sync. Adding a project
 * (up to 15+) is just appending an object to that array; this
 * component doesn't change.
 */
export function Projects() {
  const featuredProject = projectsContent.projects.find((project) => project.featured);
  const gridProjects = projectsContent.projects.filter((project) => !project.featured);

  return (
    <Section id="projects" background="bg" className="scroll-mt-24">
      <div className="mb-12 text-center md:mb-16">
        <span className="text-caption text-signal">{projectsContent.label}</span>
        <h2 className="text-heading-1 mt-3">{projectsContent.heading}</h2>
        <p className="text-body-lg mx-auto mt-4 max-w-2xl">{projectsContent.description}</p>
        <div className="divider mx-auto mt-6 w-24" />
      </div>

      {featuredProject && (
        <div className="mb-12 md:mb-16">
          <FeaturedProject project={featuredProject} />
        </div>
      )}

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {gridProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </Section>
  );
}

export default Projects;
