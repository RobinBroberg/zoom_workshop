/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        customBlue: "#0b5cff",
        customDarkBlue: "#00031f",
      },
      fontFamily: {
        almaden: ['"Almaden Sans"', "Helvetica", "Arial", "sans-serif"],
      },
    },
  },
  plugins: [],
};
