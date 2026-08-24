/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          50: '#FDFBF7',
          100: '#FAF6EE',
          200: '#F5EFE0',
          300: '#EDE4CD',
          400: '#DFD2B3',
          500: '#CCA76F',
        },
        espresso: {
          50: '#F5F2F0',
          100: '#E7DFD9',
          200: '#C7B6A8',
          300: '#9E8573',
          400: '#695141',
          500: '#483528',
          600: '#3A2B20',
          700: '#2D2018',
          800: '#231812',
          900: '#1A120D',
          950: '#120B08',
        },
        gold: {
          50: '#FBF8EE',
          100: '#F6EED2',
          200: '#EDDBA1',
          300: '#E1C46E',
          400: '#D5AD44',
          500: '#C5A059',
          600: '#B0883E',
          700: '#8F6A2C',
          800: '#755427',
          900: '#624624',
        },
        caramel: {
          50: '#FAF4EF',
          100: '#F3E5DC',
          200: '#E6CABB',
          300: '#D4A892',
          400: '#B87B5D',
          500: '#8C5835',
          600: '#7D4728',
          700: '#68361F',
          800: '#562D1C',
          900: '#48271A',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        serif: ['"Playfair Display"', 'Cormorant Garamond', 'Georgia', 'serif'],
        mono: ['"Fira Code"', 'Consolas', 'monospace'],
      },
      boxShadow: {
        'soft': '0 10px 30px -10px rgba(35, 24, 18, 0.08)',
        'soft-lg': '0 20px 40px -15px rgba(35, 24, 18, 0.12)',
        'gold-glow': '0 0 25px rgba(197, 160, 89, 0.25)',
        'espresso-glow': '0 10px 35px rgba(26, 18, 13, 0.35)',
      },
      animation: {
        'shimmer': 'shimmer 2.5s infinite linear',
        'pulse-subtle': 'pulseSubtle 3s infinite ease-in-out',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.9', transform: 'scale(1.02)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        }
      }
    },
  },
  plugins: [],
}
