/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        primary: ['Primary', 'sans-serif'],
        strong: ['Strong', 'sans-serif'],
        slim: ['Slim', 'sans-serif'],
      },
      colors: {
        primary: '#0D1214', // black
        secondary: '#1E1E1E', // gray
        text: '#ECECEC', // white
        details: '#F5D061', // yellow
      },
    },
  },
  plugins: [],
};
