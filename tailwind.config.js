/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: 'var(--primary)',
        secondary: 'var(--secondary)',
        surface: 'var(--surface)',
        emphasis: {
          DEFAULT: 'var(--emphasis)',
          light: 'var(--emphasis-light)',
          dark: 'var(--emphasis-dark)',
        },
        accent: {
          blue: {
            DEFAULT: 'var(--accent-blue)',
            light: 'var(--accent-blue-light)',
            dark: 'var(--accent-blue-dark)',
          },
        },
        text: {
          primary: 'var(--text-primary)',
          secondary: 'var(--text-secondary)',
          white: 'var(--text-white)',
        },
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'sans-serif'],
      },
      screens: {
        '3xl': '1920px',
      },
    },
  },
  plugins: [],
};

