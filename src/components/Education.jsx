import { education } from '../data/resume.js';
import useReveal from '../hooks/useReveal.js';
import { GraduationCapIcon } from './Icons.jsx';
import LogoImage from './LogoImage.jsx';
import './Education.css';

/**
 * Education section — degree, university, honors, and dates.
 *
 * SCHOOL LOGO: drop the logo at  public/images/logos/trinity-university-of-asia.png
 * (path defined per entry in src/data/resume.js) and it replaces the
 * graduation-cap placeholder automatically.
 */
export default function Education() {
  const revealRef = useReveal();

  return (
    <section id="education" className="section section--grey">
      <div className="container reveal" ref={revealRef}>
        <h2 className="section__title">Education</h2>
        <p className="section__subtitle">My academic background.</p>

        {education.map((item) => (
          <article className="education__card" key={item.degree}>
            <LogoImage
              className="education__logo"
              src={item.logo}
              alt={`${item.school} logo`}
              loading="lazy"
              width="52"
              height="52"
              placeholder={
                /* Shown until the school logo image is added */
                <div className="education__icon" aria-hidden="true">
                  <GraduationCapIcon />
                </div>
              }
            />
            <div>
              <h3 className="education__degree">{item.degree}</h3>
              <p className="education__school">{item.school}</p>
              <p className="education__meta">
                <span className="education__honors">{item.honors}</span>
                <span aria-hidden="true"> · </span>
                <span>{item.period}</span>
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
