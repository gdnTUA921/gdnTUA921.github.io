import { profile } from '../data/resume.js';
import { GitHubIcon, LinkedInIcon, MailIcon } from './Icons.jsx';
import './Footer.css';

/** Footer — copyright and social links. */
export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__inner container">
        <p className="footer__copy">
          © {year} {profile.name}. All rights reserved.
        </p>
        <div className="footer__socials">
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile"
            className="footer__social-link"
          >
            <GitHubIcon />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile"
            className="footer__social-link"
          >
            <LinkedInIcon />
          </a>
          <a
            href={`mailto:${profile.email}`}
            aria-label="Send an email"
            className="footer__social-link"
          >
            <MailIcon />
          </a>
        </div>
      </div>
    </footer>
  );
}
