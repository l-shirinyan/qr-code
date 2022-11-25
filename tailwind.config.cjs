/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        purple: "#4A46FF",
        "light-grey": "#F8F8F8",
        yellow: "#F3B755",
        "light-yellow": "#FDBC3E",
        "grey-100": "#EEEEEE",
      },
      borderColor: {
        purple: "#4A46FF",
        "light-grey": "#DEDEDE",
      },
      textColor: {
        red: "#FF1717",
        grey: "#AAAAAA",
        "grey-500": "#2F2F2F",
      },
    },
  },
  plugins: [],
};
