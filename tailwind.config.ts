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
          '75': '#4b4b4b',
          '80': '#333333',
          '88': '#1F1F1F',
        },
        white: {
          '0': '#FFFFFF',
          '80': '#CCCCCC',
          '90': '#F7F7F7',
        },
        red: {
          '500': '#E65F78',
          '600': '#CF556C',
        },
      },
      boxShadow: {
        'card-project': '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
      },
    },
  },
  plugins: [],
}
export default config
