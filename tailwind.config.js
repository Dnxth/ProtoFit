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
    },
  },
  plugins: [],
};
