/** @type {import('tailwindcss').Config} */

/* eslint-disable @typescript-eslint/no-var-requires */
const plugin = require("tailwindcss/plugin");
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      primary: "#243c5a",
      secondary: {
        100: "#243c5a",
      },
    },
  },
  plugins: [],
};
