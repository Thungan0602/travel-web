/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: "selector",
    content: ["./src/**/*.{html,js,tsx}", "index.html"],
    theme: {
      extend: {
        padding: {
          13: "3.25rem",
          26: "6.5rem",
          46: "11rem",
        },
        margin: {
          13: "3.25rem",
          26: "6.5rem",
        },
        color: {
          primary: "#1877F2",
        },
      },
      fontFamily: {
        primary: ["Bacasime Antique", "sans-serif"],
      },
    },
    plugins: [],
  };