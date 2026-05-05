import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          950: '#0a0a0a',
          900: '#111111',
          800: '#141414',
          700: '#1a1a1a',
          600: '#8a8a8a',
        },
        accent: '#e63946',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'glow-red': '0 0 24px rgba(230, 57, 70, 0.12)',
      },
    },
  },
  plugins: [],
}

export default config
