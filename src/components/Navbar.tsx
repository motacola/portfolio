'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';

const Navbar = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const closeMenu = () => setIsMenuOpen(false);

  useEffect(() => {
    closeMenu();
  }, [pathname]);

  useEffect(() => {
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closeMenu();
      }
    };
    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, []);

  useEffect(() => {
    if (typeof document === 'undefined') return;
    document.body.classList.toggle('menu-open', isMenuOpen);
    return () => {
      document.body.classList.remove('menu-open');
    };
  }, [isMenuOpen]);

  const handleNavItemClick = () => {
    closeMenu();
  };

  return (
    <header>
      <div className="container">
        <nav>
          <div className="logo">
            <h1>Christopher Belgrave</h1>
          </div>
          <button
            type="button"
            className={`nav-toggle ${isMenuOpen ? 'active' : ''}`}
            aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-controls="primary-navigation"
            aria-expanded={isMenuOpen}
            onClick={toggleMenu}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
          <ul
            id="primary-navigation"
            className={`nav-menu ${isMenuOpen ? 'active' : ''}`}
            role="navigation"
            aria-label="Main navigation"
          >
            <li>
              <Link href="/" className={pathname === '/' ? 'active' : ''} onClick={handleNavItemClick}>
                Showreel
              </Link>
            </li>
            <li>
              <Link href="/about" className={pathname === '/about' ? 'active' : ''} onClick={handleNavItemClick}>
                About
              </Link>
            </li>
            <li>
              <Link href="/about#experience" onClick={handleNavItemClick}>
                Experience
              </Link>
            </li>
            <li>
              <Link href="/contact" className={pathname === '/contact' ? 'active' : ''} onClick={handleNavItemClick}>
                Contact
              </Link>
            </li>
          </ul>
        </nav>
        <div className={`nav-overlay ${isMenuOpen ? 'active' : ''}`} aria-hidden="true" onClick={closeMenu}></div>
      </div>
    </header>
  );
};

export default Navbar;
