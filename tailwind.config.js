module.exports = {
  content: [
    './pages/**/*.{html,js}',
    './components/**/*.{html,js}',
    './**/**/*.{html, js}'
  ],
  theme: {
    fontFamily: {
      'inter': ['Inter', 'sans-serif'],
      'montserrat': ['Montserrat', 'sans-serif']
    },
    extend: {
      spacing: {
        'h': '183px',
        'w': '1010px'
      },

      fontSize: {
        'h2': '32px',
        '1': '12px',
        '2': '14px',
        '3': '16px'
      },

      colors: {
        'latar-b': '#F6F9FE',

      }
    },
  },
  plugins: [],
}
