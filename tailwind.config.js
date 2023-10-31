/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        pattern: "0px 17px 21px -7px rgba(114,114,192,0.4)",
        "area-btn": "0px 11px 30px 3px rgba(114,114,192,0.3)",
      },
      fontFamily: {
        inter: ["Inter"],
      },
      keyframes: {
        soft: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        soft: "soft 1.5s ease-in-out",
      },
    },
  },
  plugins: [],
};
