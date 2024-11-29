/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
         "dgreen": "hsl(75, 94%, 57%)",
          "dgray": {
            700: "hsl(0, 0%, 20%)",
            800: "hsl(0, 0%, 12%)",
            900: "hsl(0, 0%, 8%)",
          }
      }
     
    },
    fontFamily: {
      sans: ["Inter", "sans-serif"]
    }
  },
  plugins: [],
}

