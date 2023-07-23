/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    fontFamily: {
      display: ['Source Serif Pro', 'Georgia', 'serif'],
      body: ['Synonym', 'system-ui', 'sans-serif'],
    },
    colors: {
      primary: {
        50: '#f5f9ec',
        100: '#e8f2d5',
        200: '#d4e6b0',
        300: '#b7d482',
        400: '#9cc15a',
        500: '#7ea63c',
        600: '#688d30',
        700: '#4b6526',
        800: '#3e5123',
        900: '#364621',
        950: '#1a250e',
      },
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
