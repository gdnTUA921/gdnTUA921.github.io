import { useEffect, useState } from 'react';
import { profile } from '../data/resume.js';
import useTheme from '../hooks/useTheme.js';
import { MenuIcon, CloseIcon, DownloadIcon, SunIcon, MoonIcon } from './Icons.jsx';
import './Navbar.css';

const NAV_LINKS = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'education', label: 'Education' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'certifications', label: 'Certifications' },
  { id: 'contact', label: 'Contact' },
];

/**
 * Sticky top navigation.
 * - Anchor links smooth-scroll to sections (scroll-behavior in index.css).
 * - Collapses into a hamburger-toggled panel on mobile.
 * - Keyboard accessible: Escape closes the mobile menu, and the toggle
 *   exposes aria-expanded/aria-controls for screen readers.
 */
export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();

  // Add a shadow once the page is scrolled, so the bar reads as "floating"
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close the mobile menu with the Escape key
  useEffect(() => {
    if (!menuOpen) return undefined;
    const onKeyDown = (e) => {
      if (e.key === 'Escape') setMenuOpen(false);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <nav className="navbar__inner container" aria-label="Main navigation">
        {/* Brand — scrolls back to the top / hero */}
        <a className="navbar__brand" href="#hero" onClick={closeMenu}>
          Giancarlo<span className="navbar__brand-accent"> Nonato</span>
        </a>

        <div className="navbar__actions">
          {/* Light/dark mode toggle */}
          <button
            type="button"
            className="navbar__theme-btn"
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            title={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            onClick={toggleTheme}
          >
            {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
          </button>

          <button
            type="button"
            className="navbar__toggle"
            aria-expanded={menuOpen}
            aria-controls="primary-menu"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>

        <ul id="primary-menu" className={`navbar__menu ${menuOpen ? 'navbar__menu--open' : ''}`}>
          {NAV_LINKS.map((link) => (
            <li key={link.id}>
              <a className="navbar__link" href={`#${link.id}`} onClick={closeMenu}>
                {link.label}
              </a>
            </li>
          ))}
          <li>
            {/* Resume download — serves the PDF placed at public/resume.pdf */}
            <a
              className="navbar__resume-btn"
              href={profile.resumeUrl}
              download="Giancarlo-Nonato-Resume.pdf"
              onClick={closeMenu}
            >
              <DownloadIcon />
              Resume
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
