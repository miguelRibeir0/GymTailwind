/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      height: {
        main: "700px",
      },
      backgroundImage: {
        landing: "url('../images/landing.jpg')",
        landing2: "url('../images/landing2.jpg')",
      },
      backgroundPosition: {
        "top-4": "center -5rem",
      },
      fontFamily: {
        Bebas: ["Bebas Neue", "sans-serif"],
        Kanit: ["Kanit", "sans-serif"],
      },
    },
  },
  plugins: ["prettier-plugin-tailwindcss"],
};
