import { certifications, participation } from '../data/resume.js';
import useReveal from '../hooks/useReveal.js';
import { AwardIcon, UsersIcon } from './Icons.jsx';
import ZoomableImage from './ZoomableImage.jsx';
import './Certifications.css';

/**
 * Certifications & Participation — two clean side-by-side lists.
 *
 * CERTIFICATE IMAGES: each certification in src/data/resume.js points to
 * public/images/certifications/<slug>.jpg . Drop a photo/scan of the
 * certificate at that path and it renders as a thumbnail here — clicking it
 * opens an enlarged view in a modal. Until then a placeholder is shown.
 */
export default function Certifications() {
  const revealRef = useReveal();

  return (
    <section id="certifications" className="section">
      <div className="container reveal" ref={revealRef}>
        <h2 className="section__title">Certifications &amp; Participation</h2>
        <p className="section__subtitle">
          Trainings, certifications, and leadership involvement.
        </p>

        <div className="certs__columns">
          <div className="certs__group">
            <h3 className="certs__group-title">
              <AwardIcon /> Certifications &amp; Trainings
            </h3>
            <ul className="certs__list">
              {certifications.map((cert) => (
                <li className="certs__item" key={cert.title}>
                  <ZoomableImage
                    className="certs__thumb"
                    src={cert.image}
                    alt={`${cert.title} certificate`}
                    loading="lazy"
                    width="112"
                    height="84"
                    placeholder={
                      /* Shown until the certificate image is added */
                      <div className="certs__thumb certs__thumb--placeholder" aria-hidden="true">
                        <AwardIcon />
                      </div>
                    }
                  />
                  <div className="certs__item-text">
                    <p className="certs__item-title">{cert.title}</p>
                    <p className="certs__item-issuer">{cert.issuer}</p>
                  </div>
                  <span className="certs__item-year">{cert.year}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="certs__group">
            <h3 className="certs__group-title">
              <UsersIcon /> Participation &amp; Leadership
            </h3>
            <ul className="certs__list">
              {participation.map((item) => (
                <li className="certs__item" key={item.title}>
                  <div>
                    <p className="certs__item-title">{item.title}</p>
                    <p className="certs__item-issuer">{item.role}</p>
                  </div>
                  <span className="certs__item-year">{item.year}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
