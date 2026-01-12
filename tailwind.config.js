/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        nevasca: {
          blue: '#2563EB',
          dark: '#000000',
          light: '#FFFFFF',
        }
      }
    },
  },
  plugins: [],
}