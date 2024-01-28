/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        short: { raw: '(max-height: 800px)' },
      },
    },
  },
  plugins: [],
}
