/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "pattern-bg": "url('/src/assets/pattern-bg.svg')",
        "pattern-curve": "url('/src/assets/pattern-curve.svg')",
        "pattern-quotes": "url('/src/assets/pattern-quotes.svg')",
      },
    },
  },
  plugins: [],
};
