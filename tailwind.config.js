/* eslint-disable no-undef */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./pages/**/*.{html,js, jsx,tsx}",
    "./components/**/*.{html,jsx, tsx,js}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
});
