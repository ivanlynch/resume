module.exports = {
  mode: 'jit',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'menu': 'all 0.3 ease-in-out'
      },
      backgroundImage: {
        'background-sm': "url('/src/assets/img/sm-background.svg')"
      }
    },
  },
  plugins: [],
  important: true
}