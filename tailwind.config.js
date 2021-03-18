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
      animation: {
        wiggle: 'wiggle 1s ease-in-out infinite',
        xbounce: 'xbounce 1s infinite',
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        xbounce: {
          '0%, 100%': {
            transform: 'translateX(-25%)',
            animationTimingFunction: 'cubic-bezier(0.8, 0, 1, 1)',
          },
          '50%': {
            transform: 'translateX(0)',
            animationTimingFunction: 'cubic-bezier(0.8, 0, 0.2, 1)',
          },
        },
      },
    },
  },
  variants: {},
  plugins: [require('@tailwindcss/aspect-ratio')],
}
