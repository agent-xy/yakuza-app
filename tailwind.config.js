// /** @type {import('tailwindcss').Config} */

const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./src/**/*.js",],
  theme: {
    extend: {
      colors: {
        'hh-white': '#DBDBDB',
        'costume-pink': '#a21caf',
        'costume-blue': '#0ea5e9',
      },
      backgroundImage: {
        'hero': "url('https://agent-xy.github.io/yakuza-app/assets/images/hh1.jpg')",
        'costume-video': "url(http://localhost:3000/yakuza-app/assets/images/hhPattern1.png)",
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


