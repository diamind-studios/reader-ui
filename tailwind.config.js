/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts,tsx}', './src/*.{html,ts,tsx}'],
  theme: {
    extend: { fontSize: { '2xs': ['0.6rem','.75rem'] } },
  },
  plugins: [],
};
