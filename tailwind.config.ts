import type { Config } from 'tailwindcss'

export default {
  content: [
    './app/**/*.vue',
    './pages/**/*.vue',
    './layouts/**/*.vue',
    './components/**/*.vue',
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['Playfair Display', 'Georgia', 'serif'],
        sans: ['Montserrat', 'system-ui', 'sans-serif'],
      },
      colors: {
        'mpm-black': '#0A0A0A',
        'mpm-gold': '#D4AF37',
        'mpm-gold-light': '#F9E27E',
        'mpm-gold-dark': '#996515',
        'mpm-text': '#F5F5F5',
        'mpm-text-muted': '#B59A5A',
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(45deg, #996515 0%, #D4AF37 50%, #F9E27E 100%)',
      },
    },
  },
  plugins: [],
} satisfies Config
