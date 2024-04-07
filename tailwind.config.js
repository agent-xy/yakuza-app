// /** @type {import('tailwindcss').Config} */

const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./src/**/*.js",],
  theme: {
    extend: {
      backgroundImage: {
        'hero': "url('http://localhost:3000/assets/images/hh1.jpg')",
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


