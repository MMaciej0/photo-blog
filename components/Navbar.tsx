'use client';

import Link from 'next/link';
import { useEffect, useRef } from 'react';

function Navbar() {
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handler = () => {
      if (navRef.current) {
        if (window.scrollY > 50) {
          navRef.current.style.display = 'none';
          if (window.scrollY > window.innerHeight / 2) {
            navRef.current.style.display = 'flex';
            navRef.current.style.backgroundColor = 'rgb(55 65 81)';
          }
        } else {
          navRef.current.style.display = 'flex';
          navRef.current.style.backgroundColor = 'transparent';
        }
      }
    };
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  });

  return (
    <nav
      ref={navRef}
      className="bg-transparent flex justify-center items-center px-2 py-1 fixed top-0 left-0 right-0 z-50"
    >
      <Link
        href="/"
        className="text-white lg:mx-6 mx-3 hover:text-primary-green ease-linear duration-300"
      >
        Home
      </Link>
      <Link
        href="/about"
        className="text-white lg:mx-6 mx-3 hover:text-primary-green ease-linear duration-300"
      >
        About
      </Link>
      <Link
        href="/albums"
        className="text-white lg:mx-6 mx-3 hover:text-primary-green ease-linear duration-300"
      >
        Albums
      </Link>
      <Link
        href="/contact"
        className="text-white lg:mx-6 mx-3 hover:text-primary-green ease-linear duration-300"
      >
        Contact
      </Link>
    </nav>
  );
}

export default Navbar;
