module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    minHeight: {
      0: '0',
      '1/4': '25%',
      '1/2': '50%',
      '3/4': '75%',
      full: '100%',
      screen: '100vh',
    },
    extend: {
      colors: {
        'afe-yellow': '#feed2e',
        'afz-blue': '#49b7e8',
      },
    },
  },
  variants: {},
  plugins: [require('@tailwindcss/aspect-ratio')],
}
