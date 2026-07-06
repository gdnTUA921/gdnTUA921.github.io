import { CodeIcon, ExternalLinkIcon, GitHubIcon } from './Icons.jsx';
import ZoomableImage from './ZoomableImage.jsx';
import './ProjectCard.css';

/**
 * Reusable project card: 16:9 image banner, name, year, tech tags,
 * description, and optional demo/GitHub links.
 *
 * PROJECT SCREENSHOTS: each project in src/data/resume.js points to a
 * predictable path like  public/images/projects/<project-slug>.jpg .
 * Drop your real screenshot at that exact path and it appears here
 * automatically — until then a styled placeholder banner is shown.
 * Once added, clicking the screenshot opens an enlarged view in a modal.
 *
 * LINKS: set `demo` / `github` on a project in src/data/resume.js to a URL
 * and the corresponding button renders on the card.
 */
export default function ProjectCard({ project }) {
  return (
    <article className="project-card">
      <div className="project-card__media">
        <ZoomableImage
          className="project-card__image"
          src={project.image}
          alt={`Screenshot of ${project.name}`}
          loading="lazy"
          width="640"
          height="360"
          placeholder={
            /* Placeholder banner shown until the real screenshot is added */
            <div className="project-card__placeholder" aria-hidden="true">
              <CodeIcon />
            </div>
          }
        />
        <span className="project-card__year">{project.year}</span>
      </div>

      <div className="project-card__body">
        <h3 className="project-card__name">{project.name}</h3>

        <ul className="project-card__tech" aria-label="Technologies used">
          {project.tech.map((tech) => (
            <li key={tech}>
              <span className="tag">{tech}</span>
            </li>
          ))}
        </ul>

        <p className="project-card__description">{project.description}</p>

        {(project.demo || project.github) && (
          <div className="project-card__links">
            {project.demo && (
              <a
                className="project-card__link"
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLinkIcon />
                Live Demo
              </a>
            )}
            {project.github && (
              <a
                className="project-card__link"
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <GitHubIcon />
                Source Code
              </a>
            )}
          </div>
        )}
      </div>
    </article>
  );
}
