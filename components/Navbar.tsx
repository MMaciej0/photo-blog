import Link from 'next/link';

function Navbar() {
  return (
    <nav
      className="flex justify-center items-center px-2 z-50 tracking-wide text-lg font-bold 
        text-primary-black py-4"
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
