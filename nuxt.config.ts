/**
 * Nuxt configuration object
 * @type {NuxtConfig}
 */
export default defineNuxtConfig({
  devtools: { enabled: true },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {}
    }
  },
  css: ['@/assets/sass/app.sass']
});
