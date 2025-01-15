/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte}'],
  theme: {
    extend: {
      colors: {
        primary: '#CD7F32',
        secondary: '#2B2B2B'
      },
      fontFamily: {
        'anton': ['Anton', 'sans-serif'],
        'antonio': ['Antonio', 'sans-serif'],
        'antic': ['Antic Didone', 'serif']
      }
    },
  },
  plugins: [],
}