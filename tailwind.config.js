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
      keyframes: {
        'pop-out-tilt': {
          '0%': { transform: 'scale(1) rotate(0deg)' },
          '50%': { transform: 'scale(1.1) rotate(-10deg)' }, // 0.5s 동안 커지고 기울어짐
          '75%': { transform: 'scale(1.1) rotate(5deg)' },  // 0.25s 동안 우로 약간 기울임
          '100%': { transform: 'scale(1) rotate(0deg)' } // 원래대로 복귀
        }
      },
      animation: {
        'pop-out-tilt': 'pop-out-tilt 0.5s ease-in-out',
      },
    },
    fontFamily: {
      Ownglyph_UNZ: ["Ownglyph_UNZ"],
      Pretendard: ["Pretendard"],
    },
  },
  variants: {
    extend: {
      animation: ['hover'],
    },
  },
  darkMode: "class",
  plugins: [
    require('@tailwindcss/forms'),
  ],
}