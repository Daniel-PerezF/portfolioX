/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        dark: "#27262b",
        orange: "#FB904D",
        light: "#F5F5F5",
        lighter: "#DFDBDB",
        pop: "#FB904D",
      },
      animation: {
        'slide-right': 'slideInRight 0.5s forwards',
        'slide-left': 'slideInLeft 0.5s forwards',
      },
      keyframes: {
        slideInRight: {
          from: {
            transform: 'translateX(100%)',
            opacity: 0,
          },
          to: {
            transform: 'translateX(0)',
            opacity: 1,
          },
        },
        slideInLeft: {
          from: {
            transform: 'translateX(-100%)',
            opacity: 0,
          },
          to: {
            transform: 'translateX(0)',
            opacity: 1,
          },
        },
      },
    },
  },
  plugins: [],
};
