/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        'container': '1604px',
      },
      fontFamily: {
        'dm-sans': ['DM Sans', 'sans-serif'],
        
      },
      colors: {
        'nav-text': '#767676',
        'matt': '#262626'
      },  
    },
  },
  plugins: [],
}