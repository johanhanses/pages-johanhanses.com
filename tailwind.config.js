/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        openSans: ['var(--font-openSans)'],
        playfair: ['var(--font-playfair)']
      }
    }
  },
  plugins: []
}
