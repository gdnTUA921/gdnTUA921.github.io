import { experience } from '../data/resume.js';
import useReveal from '../hooks/useReveal.js';
import { BriefcaseIcon } from './Icons.jsx';
import LogoImage from './LogoImage.jsx';
import './Experience.css';

/**
 * Work Experience section — timeline-style cards with bullet points.
 *
 * COMPANY LOGO: drop the logo at  public/images/logos/international-academy-manila.png
 * (path defined per entry in src/data/resume.js) and it replaces the
 * briefcase placeholder automatically.
 */
export default function Experience() {
  const revealRef = useReveal();

  return (
    <section id="experience" className="section">
      <div className="container reveal" ref={revealRef}>
        <h2 className="section__title">Work Experience</h2>
        <p className="section__subtitle">Professional experience from my internship.</p>

        <div className="experience__timeline">
          {experience.map((job) => (
            <article className="experience__card" key={`${job.role}-${job.company}`}>
              <LogoImage
                className="experience__logo"
                src={job.logo}
                alt={`${job.company} logo`}
                loading="lazy"
                width="52"
                height="52"
                placeholder={
                  /* Shown until the company logo image is added */
                  <div className="experience__icon" aria-hidden="true">
                    <BriefcaseIcon />
                  </div>
                }
              />
              <div className="experience__body">
                <h3 className="experience__role">{job.role}</h3>
                <p className="experience__company">
                  {job.company} <span className="experience__period">· {job.period}</span>
                </p>
                <ul className="experience__bullets">
                  {job.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
