/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "deep-green": "#064635",
        "deep-green-light": "#0a6b52",
        wood: "#F5EFE6",
        "accent-red": "#E11D48",
      },
      fontFamily: {
        myeongjo: ["Nanum Myeongjo", "Georgia", "serif"],
        sans: ["Pretendard", "-apple-system", "sans-serif"],
      },
    },
  },
  plugins: [],
};
