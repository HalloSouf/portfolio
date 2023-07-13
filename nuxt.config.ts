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
  css: ['@/assets/sass/main.sass', '@fortawesome/fontawesome-svg-core/styles.css'],
  runtimeConfig: {
    public: {
      userLinkedinUrl: process.env.USER_LINKEDIN_URL || '',
      userGithubUrl: process.env.USER_GITHUB_URL || '',
      userInstagramUrl: process.env.USER_INSTAGRAM_URL || ''
    }
  },
  modules: ['@hypernym/nuxt-gsap'],
  gasp: {
    extraPlugins: {
      scrollTrigger: true
    }
  }
});
