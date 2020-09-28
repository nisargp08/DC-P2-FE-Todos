module.exports = {
  purge: [],
  theme: {
    extend: {
      fontFamily : {
        'raleway' : ['Raleway', 'sans-serif'],
        'montserrat' : ['Montserrat', 'sans-serif'],
      },
      colors : {
        'primary' : '#333333',
        'placeholder' : "#828282",
        'gray-1' : '#BDBDBD',
      },
      borderRadius : {
        'tabActive' : '4px 4px 0px 0px',
        '12px' : '12px',
      },
      boxShadow : {
        'danger' : '0 0 0 0.2rem rgba(225,83,97,.5)'
      },
      spacing : {
        '95' : '95%'
      }
    },
  },
  variants: {},
  plugins: [
    require('@tailwindcss/custom-forms'),
  ],
}
