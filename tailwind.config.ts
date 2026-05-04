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
          800: '#1a1a1a',
          700: '#2a2a2a',
        }
      },
      backgroundImage: {
        'gradient-dark': 'linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 50%, #2a2a2a 100%)',
        'gradient-accent': 'linear-gradient(135deg, #7c3aed 0%, #dc2626 100%)',
      }
    },
  },
  plugins: [],
}

export default config
