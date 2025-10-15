'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useState, useEffect, useCallback, type MouseEvent } from 'react';

const Navbar = () => {
  const pathname = usePathname();
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((open) => !open);
  };

  const closeMenu = useCallback(() => {
    setIsMenuOpen(false);
  }, []);

  const handleExperienceClick = useCallback(
    (event: MouseEvent<HTMLAnchorElement>) => {
      if (
        event.defaultPrevented ||
        event.button !== 0 ||
        event.metaKey ||
        event.altKey ||
        event.ctrlKey ||
        event.shiftKey
      ) {
        return;
      }

      event.preventDefault();
      if (pathname === '/about') {
        const experienceSection = document.getElementById('experience');

        if (experienceSection instanceof HTMLElement) {
          const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
          experienceSection.scrollIntoView({ behavior: prefersReducedMotion ? 'auto' : 'smooth' });
          try {
            experienceSection.focus({ preventScroll: true });
          } catch {
            experienceSection.focus();
          }
        }
      } else {
        router.push('/about#experience');
      }

      closeMenu();
    },
    [closeMenu, pathname, router],
  );

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  return (
    <header>
      <div className="container">
        <nav aria-label="Primary">
          <div className="logo">
            <h1>Christopher Belgrave</h1>
          </div>
          <button
            type="button"
            className={`nav-toggle ${isMenuOpen ? 'active' : ''}`}
            onClick={toggleMenu}
            aria-expanded={isMenuOpen}
            aria-controls="primary-navigation"
            aria-label="Toggle navigation menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
          <ul id="primary-navigation" className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
            <li>
              <Link
                href="/"
                className={pathname === '/' ? 'active' : ''}
                aria-current={pathname === '/' ? 'page' : undefined}
                onClick={closeMenu}
              >
                Showreel
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className={pathname === '/about' ? 'active' : ''}
                aria-current={pathname === '/about' ? 'page' : undefined}
                onClick={closeMenu}
              >
                About
              </Link>
            </li>
            <li>
              <a
                href="/about.html#experience"
                className={pathname === '/about' ? 'active' : ''}
                aria-current={pathname === '/about' ? 'page' : undefined}
                onClick={handleExperienceClick}
              >
                Experience
              </a>
            </li>
            <li>
              <Link
                href="/contact"
                className={pathname === '/contact' ? 'active' : ''}
                aria-current={pathname === '/contact' ? 'page' : undefined}
                onClick={closeMenu}
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
