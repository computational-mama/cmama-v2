const colors = require('tailwindcss/colors')

module.exports = {
  content: ['./src/**/*.njk', './src/**/*.md',],
  theme: {
    fontFamily: {
      mono: ['JetBrains Mono', 'monospace'],
    },
    colors: {
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      rose: colors.rose,
      red: colors.red,
      fuchsia: colors.fuchsia,
      pink: colors.pink,
      slate: colors.slate,
      orange: colors.orange
    },
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      fontFamily: {
        'cirrus': ["CirrusCumulus", "sans-serif"],
        'comp': ["Compagnon", "sans-serif"],

      }
    },
  },
  plugins: [],
}
