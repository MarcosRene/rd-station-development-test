import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
      screens: {
        '2xl': '1441px',
      },
    },
    extend: {
      fontFamily: {
        body: '"Nunito Sans", sans-serif',
        heading: '"Darker Grotesque", sans-serif',
        title: '"Red Hat Display", sans-serif',
      },

      fontSize: {
        '5xl': '3.5rem',
      },

      lineHeight: {
        none: '100%',
        tight: '110%',
        snug: '120%',
        relaxed: '140%',
        loose: '150%',
      },

      colors: {
        brand: {
          300: 'var(--primary-shade-3)',
          400: 'var(--primary-shade-4)',
          800: 'var(--primary-shade-8)',
          900: 'var(--primary-shade-1)',
        },

        highlight: {
          0: 'var(--hightlight)',
          50: 'var(--hightlight-50)',
        },

        bw: {
          100: 'var(--gray-10)',
          200: 'var(--gray-20)',
          300: 'var(--gray-30)',
          600: 'var(--gray-60)',
          700: 'var(--gray-70)',
          800: 'var(--gray-80)',
          900: 'var(--gray-100)',
        },
      },

      boxShadow: {
        md: '0px 8px 18px 0px rgba(33, 36, 41, 0.16)',
      },

      screens: {
        xs: '375px',
      },

      keyframes: {
        'slider-top-to-bottom': {
          '0%': { transform: 'translateY(-100px)', opacity: '0' },
          '100%': { transform: 'translateY(0px)', opacity: '1' },
        },
        'slider-right-to-left': {
          '0%': { transform: 'translateX(100px)', opacity: '0' },
          '100%': { transform: 'translateX(0px)', opacity: '1' },
        },
        'slider-left-to-right': {
          '0%': { transform: 'translateX(-100px)', opacity: '0' },
          '100%': { transform: 'translateX(0px)', opacity: '1' },
        },
        shake: {
          '0%': { transform: 'translateX(0)' },
          '25%': { transform: 'translateX(-5px) rotate(0.5deg)' },
          '50%': { transform: 'translateX(5px) rotate(-0.5deg)' },
          '75%': { transform: 'translateX(-5px) rotate(0.5deg)' },
          '100%': { transform: 'translateX(0)' },
        },
      },

      animation: {
        'slider-top-to-bottom': 'slider-top-to-bottom 1s ease-in-out',
        'slider-right-to-left': 'slider-right-to-left 1s ease-in-out',
        'slider-left-to-right': 'slider-left-to-right 1s ease-in-out',
        shake: 'shake 180ms ease-in-out',
      },
    },
  },
  plugins: [],
}

export default config
