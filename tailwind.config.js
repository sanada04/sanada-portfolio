/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          100: '#1a1a1a',
          200: '#141414',
          300: '#0f0f0f',
          400: '#0a0a0a',
        },
        accent: {
          100: '#3b82f6',
          200: '#2563eb',
        }
      },
      animation: {
        blob: "blob 7s infinite",
      },
      keyframes: {
        blob: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)",
          },
          "33%": {
            transform: "translate(30px, -50px) scale(1.1)",
          },
          "66%": {
            transform: "translate(-20px, 20px) scale(0.9)",
          },
          "100%": {
            transform: "translate(0px, 0px) scale(1)",
          },
        },
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.zinc.400'),
            maxWidth: 'none',
            hr: {
              borderColor: theme('colors.zinc.700'),
              marginTop: '2em',
              marginBottom: '2em',
            },
            'h1, h2, h3, h4': {
              color: theme('colors.white'),
              fontWeight: '600',
              letterSpacing: '-0.025em',
            },
            h1: {
              fontSize: '2.5rem',
              marginBottom: '1.5rem',
            },
            h2: {
              fontSize: '1.875rem',
              marginTop: '2.5rem',
              marginBottom: '1rem',
            },
            h3: {
              fontSize: '1.5rem',
              marginTop: '2rem',
              marginBottom: '0.75rem',
            },
            h4: {
              fontSize: '1.25rem',
              marginTop: '1.75rem',
              marginBottom: '0.5rem',
            },
            p: {
              marginTop: '1.25em',
              marginBottom: '1.25em',
              lineHeight: '1.75',
            },
            a: {
              color: theme('colors.white'),
              textDecoration: 'none',
              borderBottom: `1px solid ${theme('colors.zinc.700')}`,
              transition: 'border-color 0.2s',
              '&:hover': {
                borderColor: theme('colors.zinc.300'),
              },
            },
            'ul, ol': {
              paddingLeft: '1.25rem',
              marginTop: '1.25em',
              marginBottom: '1.25em',
            },
            ul: {
              listStyleType: 'disc',
            },
            ol: {
              listStyleType: 'decimal',
            },
            li: {
              marginTop: '0.5em',
              marginBottom: '0.5em',
            },
            blockquote: {
              fontStyle: 'italic',
              color: theme('colors.zinc.300'),
              borderLeftWidth: '4px',
              borderLeftColor: theme('colors.zinc.700'),
              paddingLeft: '1rem',
              marginTop: '1.5em',
              marginBottom: '1.5em',
            },
            code: {
              color: theme('colors.white'),
              backgroundColor: theme('colors.zinc.800'),
              padding: '0.2em 0.4em',
              borderRadius: '0.25rem',
              fontSize: '0.875em',
            },
            pre: {
              backgroundColor: theme('colors.zinc.900'),
              color: theme('colors.zinc.200'),
              padding: '1rem',
              borderRadius: '0.5rem',
              overflow: 'auto',
              fontSize: '0.875em',
              marginTop: '1.5em',
              marginBottom: '1.5em',
            },
            'pre code': {
              backgroundColor: 'transparent',
              padding: 0,
              color: 'inherit',
              fontSize: 'inherit',
            },
            img: {
              borderRadius: '0.5rem',
              marginTop: '1.5em',
              marginBottom: '1.5em',
            },
          },
        },
      }),
    },
  },
  plugins: [
    // @ts-ignore
    require('@tailwindcss/typography'),
  ],
}
