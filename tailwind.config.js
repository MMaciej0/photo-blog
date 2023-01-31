/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary-black': '#302D2D',
        'primary-gray': '#999999',
        'primary-green': '#60B656',
        'primary-bg': '#FDFDFD',
      },
    },
  },
  plugins: [require('tailwind-scrollbar')({ nocompatible: true })],
};
