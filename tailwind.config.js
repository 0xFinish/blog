/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      darkgreen: "#104547",
      latteWhite: "#F7F3E3",
      orange: "#F96E46",
      blueLight: "#7C99B4",
      violetDark: "#4C3B4D",
      white: "#ffffff",
      black: "#000000"
    },
    fontFamily: {
      // 'sans': ['Abril-Fatface'],
      navbar: ["Chalkduster"],
      title: ["Rockwell"]
    },
    extend: {},
  },
  plugins: [
    require('@headlessui/tailwindcss')
  ],
}