/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#C3B29A',
        'primary-dark': '#8C7B66',
        secondary: '#E5DED4',
        accent: '#D4C3B3',
        cream: '#F5F2EE',
        'brown-text': '#4A4039',
      },
    },
  },
  plugins: [],
}

