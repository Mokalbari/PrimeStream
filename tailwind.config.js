/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      red: "#FC4747",
      black: "#10141E",
      lightGrey: "#5A698F",
      darkGrey: "#161D2F",
      white: "#FFFFFF",
    },
    fontFamily: {
      sans: ["Outfit", "sans-serif"],
    },
    extend: {
      fontSize: {
        "3xl": "2rem",
        base: "0.9375rem",
      },
    },
  },
  plugins: [],
}
