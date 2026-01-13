/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        cream: '#F5F0E8',
        'forest-green': '#2D5A4A',
        burgundy: '#8B4A3B',
        'warm-gray': '#6B6B6B',
        'dark-green': '#1F3A2E'
      },
      fontFamily: {
        serif: ['Playfair Display', 'serif'],
        script: ['Dancing Script', 'cursive']
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '104': '26rem',
        '120': '30rem'
      }
    },
  },
  plugins: [],
}