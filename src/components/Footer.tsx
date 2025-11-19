'use client';

import React from 'react';
import Link from 'next/link';
import Icon from './Icon';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const [showBackToTop, setShowBackToTop] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer>
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="back-to-top"
          aria-label="Back to top"
          type="button"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 19V5M5 12l7-7 7 7" />
          </svg>
        </button>
      )}
      <div className="container">
        <div className="footer-content">
          <div className="footer-info">
            <h3>Christopher Belgrave</h3>
            <p>Senior Project Manager | Producer | CSPO</p>
            <p className="footer-tagline">
              Championing cutting-edge technologies in AI, AR, 3D, and VFX to drive digital transformation
            </p>
          </div>
          <div className="footer-links">
            <div className="footer-column">
              <h4>Navigation</h4>
              <ul>
                <li>
                  <Link href="/">Showreel</Link>
                </li>
                <li>
                  <Link href="/about">About</Link>
                </li>
                <li>
                  <Link href="/about#experience">Experience</Link>
                </li>
                <li>
                  <Link href="/contact">Contact</Link>
                </li>
              </ul>
            </div>
            <div className="footer-column">
              <h4>Connect</h4>
              <ul>
                <li>
                  <a href="mailto:chrisbelgrave@gmail.com">Email</a>
                </li>
                <li>
                  <a href="tel:+447912360075">Phone</a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/in/chrisbelgrave/" target="_blank" rel="noopener noreferrer">
                    LinkedIn
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="social-links">
            <a
              href="https://www.linkedin.com/in/chrisbelgrave/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
            >
              <Icon name="linkedin" />
            </a>
          </div>
        </div>
        <div className="copyright">
          <p>&copy; {currentYear} Christopher Belgrave. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;