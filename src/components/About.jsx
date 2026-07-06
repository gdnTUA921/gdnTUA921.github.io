import { profile } from '../data/resume.js';
import useReveal from '../hooks/useReveal.js';
import './About.css';

/** About / Summary section — text comes from the resume summary. */
export default function About() {
  const revealRef = useReveal();

  return (
    <section id="about" className="section section--grey">
      <div className="container reveal" ref={revealRef}>
        <h2 className="section__title">About Me</h2>
        <p className="section__subtitle">A quick summary of who I am as a developer.</p>
        <div className="about__card">
          <p className="about__text">{profile.summary}</p>
        </div>
      </div>
    </section>
  );
}
