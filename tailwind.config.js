/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      spacing:{
        "69" : "620px",
        "300" : "300vw"
      }
    },
  },
  plugins: [],
}