'use client';

import Link from 'next/link';
import { useEffect, useRef } from 'react';

function Navbar() {
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handler = () => {
      if (navRef.current) {
        if (window.scrollY > 50) {
          navRef.current.classList.add('hidden');
          if (window.scrollY > window.innerHeight / 2) {
            navRef.current.classList.remove('hidden');
            navRef.current.classList.remove('bg-transparent');
            navRef.current.classList.add('bg-gray-700');
          }
        } else {
          navRef.current.classList.remove('bg-gray-700');
          navRef.current.classList.remove('hidden');
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
        className="text-white sm:mx-10 mx-3 hover:text-primary-green ease-linear duration-300"
      >
        Home
      </Link>
      <Link
        href="/about"
        className="text-white sm:mx-10 mx-3 hover:text-primary-green ease-linear duration-300"
      >
        About
      </Link>
      <Link
        href="/albums"
        className="text-white sm:mx-10 mx-3 hover:text-primary-green ease-linear duration-300"
      >
        Albums
      </Link>
      <Link
        href="/contact"
        className="text-white sm:mx-10 mx-3 hover:text-primary-green ease-linear duration-300"
      >
        Contact
      </Link>
    </nav>
  );
}

export default Navbar;
