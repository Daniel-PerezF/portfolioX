/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        dark: "#27262b ",
        orange: "#FB904D",
        light: "#F5F5F5",
        lighter: "#DFDBDB",
        pop: "#FB904D",
      },
     
    },
  },
  plugins: [],
}

