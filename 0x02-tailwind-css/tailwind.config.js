/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./*.{html,js}"   // ✅ add this line so Tailwind sees 1-index.html
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
