/** @type {import('tailwindcss').Config} */
module.exports = {
  
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,json}",
  ],
  theme: {
    screens: {
      'sm': '600px',
      'md': '900px',
      'lg': '1160px',
    },
     extend: {
      animation: {
        fade: 'fadeIn 1s ease-in-out',
        accordion:'fadeIn 3s ease-in-out'
      },
      transition:{
      },
       transitionProperty: {
        'height': 'height',
        'spacing': 'margin, padding',
      },
      keyframes: theme => ({
        fadeIn: {
          '0%':  { opacity: '0'} ,
          '100%': {opacity:'1'},
        },
        heightInOut:{
          '0%':{height:'0%'}
          ,'50%':{height:'50%'}
          ,'100%':{height:'100%'}
        }
      }),
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}
