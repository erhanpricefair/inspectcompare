/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          50: '#eef2f6',
          100: '#d7e0e9',
          400: '#3d5a76',
          600: '#22415f',
          700: '#16324f',
          800: '#0f253c',
          900: '#0a1a2b',
        },
        rust: {
          50: '#fbf0ec',
          100: '#f2d5c9',
          500: '#b14328',
          600: '#953620',
          700: '#7a2c1a',
        },
        sage: {
          50: '#eef5f0',
          100: '#d4e8dc',
          500: '#3c7a5c',
          600: '#2f6249',
        },
        paper: '#f6f8f7',
        sand: '#ede7dc',
      },
      fontFamily: {
        display: ['"Roboto Slab"', 'ui-serif', 'Georgia', 'serif'],
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
