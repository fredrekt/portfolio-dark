/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./gatsby-browser.ts"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Lato", "ui-sans-serif", "sans-serif"],
        display: ["Playball", "cursive"],
      },
    },
  },
  plugins: [],
}
