/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'retro-blue': '#29ABE2',
        'retro-green': '#90EE90',
        'retro-red': '#F08080',
        'retro-yellow': '#FADA5E',
        'dark-gray': '#333333',
      },
      fontFamily: {
        ' Press-Start-2P': ['"Press Start 2P"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}