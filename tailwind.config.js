/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      "dgreen": "hsl(75, 94%, 57%)"
    },
    fontFamily: {
      sans: ["Inter", "sans-serif"]
    }
  },
  plugins: [],
}

