/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        fontOne: ["Playpen Sans", "cursive"],
        fontTwo: ["Josefin Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
