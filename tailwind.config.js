/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'main-purple': '#785FBB',
        'light-purple': '#E7DAEC',
      }
    },
  },
  plugins: [],
}
