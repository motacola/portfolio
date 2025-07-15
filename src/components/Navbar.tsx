'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const pathname = usePathname();

  return (
    <header>
      <div className="container">
        <nav>
          <div className="logo">
            <h1>Christopher Belgrave</h1>
          </div>
          <div className="nav-toggle">
            <span></span>
            <span></span>
            <span></span>
          </div>
          <ul className="nav-menu" role="navigation" aria-label="Main navigation">
            <li>
              <Link href="/" className={pathname === '/' ? 'active' : ''}>
                Showreel
              </Link>
            </li>
            <li>
              <Link href="/about" className={pathname === '/about' ? 'active' : ''}>
                About
              </Link>
            </li>
            <li>
              <Link href="/about.html#experience">
                Experience
              </Link>
            </li>
            <li>
              <Link href="/contact" className={pathname === '/contact' ? 'active' : ''}>
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
