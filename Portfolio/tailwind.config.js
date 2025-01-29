/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // Scan alle JavaScript en TypeScript bestanden in src/
    './public/index.html', // Scan het HTML-bestand voor klassen
  ],
  theme: {
    fontFamily: {
      Bar: ['bar', 'cursive'], // Voeg een fallback toe zoals 'cursive'
    },
    extend: {},
  },
  plugins: [],
}
