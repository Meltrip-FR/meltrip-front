module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        body: ["DIN Alternate ,serif"],
      },
    },
  },
  plugins: [require("tw-elements/dist/plugin")],
};
