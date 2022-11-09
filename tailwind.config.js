/** @type {import('tailwindcss').Config} */

module.exports = {
  darkMode: "media",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        meltrip: {
          primary: "#186E7A",
          secondary: "#CE5729",
          ternary: "#448B7B",
          textW: "#ffffff",
        },
      },
      backgroundImage: {
        travel: "url(/travel.webp)",
      },
      fontFamily: {
        body: ["DIN Alternate , poppins"],
      },
    },
  },
  plugins: [require("tw-elements/dist/plugin")],
};
