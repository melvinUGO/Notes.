/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        // Simple 16 column grid
        custom_large: " 150px 3fr ",
        custom_small: "80px 2fr",
      },
    },
  },
  plugins: [],
};
