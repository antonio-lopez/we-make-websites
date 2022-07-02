/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        white: '#ffffff',
      },
      fontFamily: {
        'sans-serif': ['DM Sans'],
      },
    },
  },
  plugins: [],
};
