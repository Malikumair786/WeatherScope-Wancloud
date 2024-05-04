/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0A192F",
        secondary: "#142742",
        tertiary: "#54D6BB",
      },
    },
    screens: {
      sm: { max: "600px" },
      md: { min: "768px" },
      lg: { min: "992px" },
      xl: { min: "1200px" },
    },
  },
  plugins: [],
};
