/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./public/**/*.html",
  ],
  theme: {
    extend: {
      padding: {
        "1/2": "50%",
        full: "100%",
      },
      colors: {
        primary: {
          orange: "#BC6C25",
          green: "#606C38",
        },
      },
    },
  },
  plugins: [],
};
