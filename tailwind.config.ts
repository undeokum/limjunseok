import type { Config } from 'tailwindcss'
import * as colors from 'tailwindcss/colors'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {},
    screens: {
      'sm': '576px',
      'md': '768px',
      'lg': '992px',
      'xl': '1200px',
    },
    fontFamily: {
      regular: ['regular'],
      medium: ['medium'],
      thin: ['thin'],
      bold: ['bold'],
      black: ['black'],
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      red: colors.red,
      white: colors.white,
      gray: colors.gray,
      emerald: colors.emerald,
      indigo: colors.indigo,
      yellow: colors.yellow,
      slate: colors.slate,
      orange: colors.orange,
      blue: colors.blue,

      cblue: '#7194FF',
      cpurple: '#A855F7'
    }
  },
  plugins: [],
}
export default config