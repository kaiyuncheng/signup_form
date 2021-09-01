// const colors = require('tailwindcss/colors')

module.exports = {
  mode: 'jit',
  purge: ['index.html','./src/**/*.{js,jsx,ts,tsx,vue,html}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        blue: {
          dark: "hsl(249, 10%, 26%)",
          DEFAULT: "hsl(248, 32%, 49%)",
        },
        red: "hsl(0, 100%, 74%)",
        green: "hsl(154, 59%, 51%)",
        gray: "hsl(246, 25%, 77%)",
      },
      boxShadow: {
        DEFAULT: "0px 8px 0px 0px #00000025",
        button: "inset 0px -4px 0px rgba(0, 0, 0, 0.0908818)",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      fontSize: {
        base: ["16px", "26px"],
        "2.5xl": ["28px", "36px"],
      },
    },
  },
  plugins: [],
}