/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
  ],
  theme: {
    extend: {
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
        // 커스텀 브레이크포인트 추가
        '3xl': '1920px',
      },
    },
    fontFamily: {
      Ownglyph_UNZ: ["Ownglyph_UNZ"],
    },
  },
  darkMode: "class",
  plugins: [
    require('@tailwindcss/forms'),
  ],
}