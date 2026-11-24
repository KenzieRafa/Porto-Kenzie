/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx,html}"],
  theme: {
    extend: {
      colors: {
        itb: {
          blue:  "#003366", // Biru tua ITB (primary)
          mid:   "#0055A5", // Biru menengah
          light: "#4A9EDB", // Biru muda / highlight
          gold:  "#FDB913", // Emas ITB (aksen)
        },
      },
    },
  },
  plugins: [],
}