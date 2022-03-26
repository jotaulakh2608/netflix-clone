module.exports = {
  corePlugins: {
    preflight: false,
  },
  variants: {
    borderColor: ['responsive', 'hover', 'focus', 'focus-within'],
  },
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      zIndex:{
        '1':'1'
      },
      colors:{
'netflix':'rgb(20, 20, 20)',
'hover':'#ffffffbd',
'hoverTwo':'#5353537a'
      },
      width:{
     'nav':'95vw'
      },
      height:{
        'banner':'450px'
      }
    },
  },
  plugins: [],
}
