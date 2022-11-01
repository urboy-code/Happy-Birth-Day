/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    container: {
      center: true,
      padding: '18px',
    },
    extend: {
      colors: {
        primary: '#fca5a5',
        dark: '#0f172a',
        secondary: '#64748b',
      },

      screens: {
        xl: '1015px',
      },
    },
  },
  plugins: [],
};
