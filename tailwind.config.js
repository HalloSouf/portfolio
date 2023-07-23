/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
    './app.vue'
  ],
  theme: {
    extend: {
      transitionDuration: {
        750: '750ms'
      },
      transitionProperty: {
        spacing: 'margin, padding'
      }
    }
  },
  plugins: [require('@tailwindcss/forms')]
};
