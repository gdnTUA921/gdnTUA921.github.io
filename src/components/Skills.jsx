import { skillGroups, softSkills } from '../data/resume.js';
import useReveal from '../hooks/useReveal.js';
import './Skills.css';

/** Skills grouped by category, rendered as cards of tag pills. */
export default function Skills() {
  const revealRef = useReveal();

  return (
    <section id="skills" className="section">
      <div className="container reveal" ref={revealRef}>
        <h2 className="section__title">Skills</h2>
        <p className="section__subtitle">
          Technologies and tools I&apos;ve worked with across academic and project-based work.
        </p>

        <div className="skills__grid">
          {skillGroups.map((group) => (
            <div className="skills__card" key={group.category}>
              <h3 className="skills__category">{group.category}</h3>
              <ul className="skills__list" aria-label={group.category}>
                {group.skills.map((skill) => (
                  <li key={skill}>
                    <span className="tag">{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Soft skills get a highlighted card of their own */}
          <div className="skills__card skills__card--soft">
            <h3 className="skills__category">Soft Skills</h3>
            <ul className="skills__list" aria-label="Soft skills">
              {softSkills.map((skill) => (
                <li key={skill}>
                  <span className="tag tag--soft">{skill}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
