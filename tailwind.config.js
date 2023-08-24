/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "white",
        primaryLight: "#F2F3F5",
        primaryDark: "#1D272D",
        primaryAccent: "#9e0e0e",
      },
    },
  },
  plugins: [],
};
