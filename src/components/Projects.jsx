import { projects } from '../data/resume.js';
import useReveal from '../hooks/useReveal.js';
import ProjectCard from './ProjectCard.jsx';
import './Projects.css';

/** Notable Projects — responsive grid of project cards. */
export default function Projects() {
  const revealRef = useReveal();

  return (
    <section id="projects" className="section section--grey">
      <div className="container reveal" ref={revealRef}>
        <h2 className="section__title">Notable Projects</h2>
        <p className="section__subtitle">
          A selection of web, mobile, and desktop applications I&apos;ve designed and built.
        </p>

        <div className="projects__grid">
          {projects.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
