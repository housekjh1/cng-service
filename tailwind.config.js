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
        'slide-up': {
          '0%': { opacity: 0, transform: 'translateY(10%)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        'slide-up-repeat': {
          '0%': { opacity: 0, transform: 'translateY(10%)' },
          '10%': { opacity: 1, transform: 'translateY(0)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        'pop-out-tilt': {
          '0%': { transform: 'scale(1) rotate(0deg)' },
          '50%': { transform: 'scale(1.1) rotate(-10deg)' },
          '75%': { transform: 'scale(1.1) rotate(5deg)' },
          '100%': { transform: 'scale(1) rotate(0deg)' },
        },
      },
      animation: {
        'slide-up': 'slide-up 0.5s ease-out',
        'slide-up-repeat': 'slide-up-repeat 10s ease-out infinite',
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