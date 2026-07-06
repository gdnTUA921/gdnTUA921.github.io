import { profile } from '../data/resume.js';
import { DownloadIcon, GitHubIcon, LinkedInIcon } from './Icons.jsx';
import ZoomableImage from './ZoomableImage.jsx';
import './Hero.css';

/**
 * Hero / intro section: name, tagline, CTAs, and profile photo.
 *
 * PROFILE PHOTO: drop your real photo at  public/images/profile.jpg
 * (the image below already points there — no code change needed).
 * Until the file exists, a styled placeholder with your initials renders
 * in its place automatically. Once added, clicking the photo opens an
 * enlarged view in a modal.
 */
export default function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero__inner container">
        <div className="hero__text">
          <p className="hero__greeting">Hello, I&apos;m</p>
          <h1 className="hero__name">{profile.name}</h1>
          <p className="hero__tagline">{profile.tagline}</p>
          <p className="hero__blurb">
            Fresh BS Information Technology (Software Engineering) graduate —{' '}
            <strong>Summa Cum Laude</strong> — building web and mobile applications with React,
            PHP, and Node.js.
          </p>

          <div className="hero__actions">
            <a className="btn btn--primary" href="#projects">
              View Projects
            </a>
            {/* Downloads the PDF placed at public/resume.pdf */}
            <a
              className="btn btn--outline"
              href={profile.resumeUrl}
              download="Giancarlo-Nonato-Resume.pdf"
            >
              <DownloadIcon />
              Download Resume
            </a>
          </div>

          <div className="hero__socials">
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
              className="hero__social-link"
            >
              <GitHubIcon />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
              className="hero__social-link"
            >
              <LinkedInIcon />
            </a>
          </div>
        </div>

        <div className="hero__photo-wrap">
          <ZoomableImage
            className="hero__photo"
            src={profile.photo}
            alt="Portrait of Giancarlo D. Nonato"
            width="320"
            height="320"
            placeholder={
              /* Placeholder frame shown until public/images/profile.jpg exists */
              <div className="hero__photo hero__photo--placeholder" aria-hidden="true">
                <span>GN</span>
              </div>
            }
          />
        </div>
      </div>
    </section>
  );
}
