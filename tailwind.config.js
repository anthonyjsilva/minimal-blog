/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        blue: "#18a7ff",
        white: "#fafafa",
        "dark-blue": "#0b4c73",
        "light-gray": "#d3d3d3",
        gray: "#4e4e4e",
        "dark-gray": "#3a3a3a",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
