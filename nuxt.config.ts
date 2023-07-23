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
      userInstagramUrl: process.env.USER_INSTAGRAM_URL || '',
      userDiscordUrl: process.env.USER_DISCORD_URL || '',
      companyCoc: process.env.COMPANY_COC || '',
      companyVat: process.env.COMPANY_VAT || ''
    }
  },
  app: {
    head: {
      meta: [
        {
          name: 'keywords',
          content:
            'Souf IT, Souf, IT, Soufiane Seddouki, HalloSouf, Zeg Hallo Tegen Souf IT, SoufIT, Souf-IT'
        }
      ],
      htmlAttrs: {
        lang: 'nl'
      },
      link: [
        { rel: 'icon', href: '/images/soufit-logo.svg', type: 'image/svg+xml' },
        { rel: 'manifest', href: '/manifest.json' }
      ]
    }
  },
  modules: [
    '@hypernym/nuxt-gsap',
    '@nuxt/image',
    [
      'nuxt-mail',
      {
        message: {
          to: process.env.MAIL_MESSAGE_TO || 'to'
        },
        smtp: {
          service: process.env.MAIL_SERVICE || 'gmail',
          auth: {
            user: process.env.MAIL_AUTH_USER || 'user',
            pass: process.env.MAIL_AUTH_PASS || 'pass'
          }
        }
      }
    ]
  ],
  gsap: {
    extraPlugins: {
      scrollTrigger: true,
      scrollTo: true
    }
  }
});
