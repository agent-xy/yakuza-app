// /** @type {import('tailwindcss').Config} */

const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./src/**/*.js",],
  theme: {
    extend: {
      colors: {
        'hh-white': '#DBDBDB',
      },
      backgroundImage: {
        'hero': "url('https://agent-xy.github.io/yakuza-app/assets/images/hh1.jpg')",
      }
    },
    fontFamily: {
      'japane': ['Permanent Marker'],
      'default': ['Quicksand'],
      'nirvanaTitle': ['Archivo Black'],
    }
  },
  plugins: [],
});


