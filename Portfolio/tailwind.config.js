/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // Scan alle JavaScript en TypeScript bestanden in src/
    './public/index.html', // Scan het HTML-bestand voor klassen
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
