/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "custom-orange": "#F35800",
      },
      boxShadow: {
        "custom-inset": "0px -6px 0px 0px inset rgb(255, 236, 148 )",
      },
    },
    fontFamily: {
      roboto: ["Roboto Mono", "monospace"],
      bebas: ["Bebas Neue", "sans-serif"],
    },
  },
  plugins: [],
};
