'use client';

import Link from 'next/link';
import { useHide } from '@/hooks/useHide';
import { usePathname } from 'next/navigation';

function Navbar() {
  const navRef = useHide(50, 'higher');
  const route = usePathname();

  return (
    <nav
      ref={navRef}
      className={`flex justify-center items-center px-2 fixed top-0 left-0 right-0 z-50 tracking-wide text-lg font-bold ${
        route === '/' ? 'text-white py-1' : 'text-primary-black py-4'
      }`}
    >
      <Link
        href="/"
        className="sm:mx-10 mx-3 hover:text-primary-green ease-linear duration-300"
      >
        Home
      </Link>
      <Link
        href="/about"
        className="sm:mx-10 mx-3 hover:text-primary-green ease-linear duration-300"
      >
        About
      </Link>
      <Link
        href="/albums"
        className="sm:mx-10 mx-3 hover:text-primary-green ease-linear duration-300"
      >
        Albums
      </Link>
      <Link
        href="/contact"
        className="sm:mx-10 mx-3 hover:text-primary-green ease-linear duration-300"
      >
        Contact
      </Link>
    </nav>
  );
}

export default Navbar;
