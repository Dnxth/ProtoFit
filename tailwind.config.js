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
        primary: '#0D1214',
        text: '#ECECEC',
        details: '#F5D061',
      },
    },
  },
  plugins: [],
};
