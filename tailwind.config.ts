import type { Config } from 'tailwindcss';

export default {
  darkMode: ['class'],
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        cream: '#FAF7EE',
        ink: '#141414',
        coral: '#FF4625',
        'coral-hover': '#e43c1d',
        cobalt: '#1F51FF',
        'cobalt-hover': '#1541dc',
        lime: '#C6F226',
        mint: '#B3F5DF',
        'mint-light': '#D4F9EE',
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', '"Inter"', 'sans-serif'],
        heading: ['"Archivo"', '"Plus Jakarta Sans"', '"Inter"', 'sans-serif'],
      },
      animation: {
        marquee: 'marquee 24s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
