import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        black: {
          '88': '#1F1F1F',
          '80': '#333333',
        },
        white: {
          '0': '#FFFFFF',
          '80': '#CCCCCC',
          '90': '#F7F7F7',
        },
        red: '#E65F78',
      },
    },
  },
  plugins: [],
}
export default config
