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
  css: ['@/assets/sass/app.sass', '@fortawesome/fontawesome-svg-core/styles.css'],
  runtimeConfig: {
    public: {
      userLinkedinUrl: process.env.USER_LINKEDIN_URL || '',
      userGithubUrl: process.env.USER_GITHUB_URL || ''
    }
  },
  modules: ['@hypernym/nuxt-gsap']
});
