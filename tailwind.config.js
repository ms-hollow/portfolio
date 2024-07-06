/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'text-c1': '#191710',
      'text-c2': '#EFEDE8',
      'background': '#FBF9F4',
      'primary': '#C7AA43',
      'secondary': '#EBD78E',
      'accent': '#F3D053',
    },
    fontSize: {
      'title': ['clamp(3rem, 14vw, 9rem)'],
      'heading-1': ['clamp(2.5rem, 6.5vw, 10rem)'],
      'heading-2': ['clamp(2.4rem, 8vw, 10rem)'],
      'heading-3': ['clamp(2rem, 5vw, 2.75rem)'], 
      'special': ['clamp(2rem, 4vw, 3.25rem)'],
      'works-title': ['clamp(1.25rem, 2vw, 1.5rem)'],
      'body-1': ['clamp(1.1rem, 2vw, 1.3rem)'], 
      'body-2': ['clamp(1rem, 1.5vw, 1.5rem)'],
      'body-3': '1.1rem',
      'body-4': ['clamp(0.75rem, 3vw, 1rem)'],
    },
    letterSpacing: {
      'headings': '-0.03em',
      'nav-headings': '0.03',
    },
    fontFamily: {
      'general': ['GeneralSans-Variable', 'sans-serif'],
      'grotesk': ['CabinetGrotesk-Variable', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [],
}

