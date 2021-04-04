const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens:{
      'xs': '320px',
      ...defaultTheme.screens,
    },
    extend: {
    },
    colors:{
      black: {
        DEFAULT:'#1e1e1e',
        dark: '#191919',
      },
      white: '#f5f5f5',
      grey:'#f1faeeb3',
      red: '#c44536',

    },
    container: {
      center: true,
    },
    fontFamily: {
      bold:['PoppinsBold','sans-serif'],
      semi:['PoppinsSemi','sans-serif'],
      light:['PoppinsLight','sans-serif']
     }
  },
  variants: {
    extend: {
      fontWeight: ['responsive', 'hover', 'focus', 'active', 'group-hover'],
      backgroundColor: ['responsive', 'hover', 'focus', 'active', 'group-hover'],
    },
  },
  plugins: [],
}
