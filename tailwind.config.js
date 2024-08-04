/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui"

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

    },
    fontFamily: {
      Genos: ["Genos, sans-serif"],
      Teko: ["Teko, sans-serif"],
    }
  },
  plugins: [
    daisyui
  ],
  daisyui: {
    themes: ["cupcake", "dark", "cmyk"],
  },
}