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
  css: [
    '@/assets/sass/main.sass',
    '@fortawesome/fontawesome-svg-core/styles.css'
  ],
  runtimeConfig: {
    public: {
      userLinkedinUrl: process.env.USER_LINKEDIN_URL || '',
      userGithubUrl: process.env.USER_GITHUB_URL || '',
      userInstagramUrl: process.env.USER_INSTAGRAM_URL || '',
      userDiscordUrl: process.env.USER_DISCORD_URL || ''
    }
  },
  app: {
    head: {
      meta: [
        { name: 'keywords', content: 'Souf IT, Souf, IT, Soufiane Seddouki, HalloSouf, Zeg Hallo Tegen Souf IT, SoufIT, Souf-IT' }
      ]
    }
  },
  modules: ['@hypernym/nuxt-gsap'],
  gsap: {
    extraPlugins: {
      scrollTrigger: true,
      scrollTo: true
    }
  }
});
