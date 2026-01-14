/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "navy-blue": "#331C4C",
        
      },
      screens: {
        small: { raw: "(max-width: 400px)" },
        tablet: "700px",
        laptop: "900px",
        desktop: "1024px",
        large: "1200px",
        tall: { raw: "(min-height: 650px)" },
        short: { raw: "(max-height: 500px)" },
      },
      fontFamily: {
        geist: ['Geist', 'sans-serif'],
      },
    },
  },
  plugins: [],
}