const colors = require('tailwindcss/colors')

module.exports = {
  content: ['./*.html'],
  theme: {
    screens:{
      sm:'480px',
      md:'768px',
      lg:'976px',
      xl:'1440px',

    },
    extend: {
      colors:{ 
        pink:'700',
        amber: '#fbbf24',
        text: '#999999',
        icon: '#c7eeff',
        yellow: '#ffc806',
        bluee: '#0077c0',
        black: '#1d242b',


      }
    },
  },
  corePlugins: {
    aspectRatio: false,
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
}
