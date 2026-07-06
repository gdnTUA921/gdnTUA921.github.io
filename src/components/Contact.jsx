import { profile } from '../data/resume.js';
import useReveal from '../hooks/useReveal.js';
import { GitHubIcon, LinkedInIcon, MailIcon, MapPinIcon, PhoneIcon } from './Icons.jsx';
import './Contact.css';

/** Contact section — email, phone, location, and social links. */
export default function Contact() {
  const revealRef = useReveal();

  return (
    <section id="contact" className="section section--dark">
      <div className="container reveal" ref={revealRef}>
        <h2 className="section__title contact__title">Get In Touch</h2>
        <p className="section__subtitle contact__subtitle">
          I&apos;m currently looking for developer opportunities — feel free to reach out!
        </p>

        <div className="contact__grid">
          <a className="contact__card" href={`mailto:${profile.email}`}>
            <MailIcon />
            <span className="contact__label">Email</span>
            <span className="contact__value">{profile.email}</span>
          </a>

          <a className="contact__card" href={`tel:+63${profile.phone.slice(1)}`}>
            <PhoneIcon />
            <span className="contact__label">Phone</span>
            <span className="contact__value">{profile.phone}</span>
          </a>

          <a
            className="contact__card"
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            <GitHubIcon />
            <span className="contact__label">GitHub</span>
            <span className="contact__value">gdnTUA921</span>
          </a>

          <a
            className="contact__card"
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedInIcon />
            <span className="contact__label">LinkedIn</span>
            <span className="contact__value">giancarlo-nonato</span>
          </a>
        </div>

        <p className="contact__location">
          <MapPinIcon /> {profile.location}
        </p>
      </div>
    </section>
  );
}
