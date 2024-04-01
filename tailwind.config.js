/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./shadows/**/*.{html,md,js}"],
  theme: {
    extend: {
      colors: {
        prime: {
          100: '#ACCBE5',
          200: '#4B76AC',
          300: '#22426B',
          500: '#2B3F4A',
        },
        second: '#226831',
        accent: '#84BA00',
      },
      fontFamily: {
        head: ['Love Ya Like A Sister'],
        body: ['Poppins']
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/container-queries'),
  ],
}
