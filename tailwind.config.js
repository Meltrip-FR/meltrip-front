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
        poppins: ["Poppins", "DIN Alternate", "sans-serif"],
      },
    },
  },
  plugins: [require("tw-elements/dist/plugin")],
};
