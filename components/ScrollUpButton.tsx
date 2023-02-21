'use client';

import { useHide } from '@/hooks/useHide';

function ScrollUpButton() {
  const btnRef = useHide(50, 'lower');

  const scrollUpHandler = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      ref={btnRef}
      onClick={scrollUpHandler}
      className="fixed bottom-8 right-10 z-10 bg-white border-primary-black border-2 rounded p-2 opacity-50 hover:opacity-100 hover:border-primary-green transition-all"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4.5 15.75l7.5-7.5 7.5 7.5"
        />
      </svg>
    </button>
  );
}

export default ScrollUpButton;
