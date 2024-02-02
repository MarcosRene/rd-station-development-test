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
      },

      fontSize: {
        sm: '14px',
        base: '16px',
        xl: '20px',
        '2xl': '24px',
        '3xl': '32px',
        '4xl': '40px',
        '5xl': '56px',
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
          900: 'var(--primary-shade-1)',
        },

        highlight: {
          0: 'var(--hightlight)',
          50: 'var(--hightlight-50)',
        },

        bw: {
          100: 'var(--gray-10)',
          300: 'var(--gray-30)',
          600: 'var(--gray-60)',
          700: 'var(--gray-70)',
          900: 'var(--gray-100)',
        },
      },
    },
  },
  plugins: [],
}

export default config
