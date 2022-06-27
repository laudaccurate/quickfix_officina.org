const colors = require('tailwindcss/colors');

module.exports = {
  important: true,
  corePlugins: {
    preflight: false,
  },
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        abstract: "url('/images/abstract-background.webp')",
        landing: "url('/images/landing.webp')",
      },
      colors: {
        primary: '#228be6',
        secondary: colors.gray[600],

        danger: '#FF0000',
      },
    },
  },
  plugins: [],
};
