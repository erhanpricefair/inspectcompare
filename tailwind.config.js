/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f2f7f5',
          100: '#dfeae5',
          500: '#2f6f5e',
          600: '#255a4c',
          700: '#1c463b',
        },
      },
    },
  },
  plugins: [],
};
