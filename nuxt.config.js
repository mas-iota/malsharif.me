import path from 'path'

export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'malsharif.me',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'preload',
        as: 'font',
        crossorigin: 'crossorigin',
        type: 'font/woff2',
        href: '/fonts/helveticaneuelt-arabic-55-roman.woff2'
      }
    ]
  },

  publicRuntimeConfig: {
    appHostName: process.env.HOST_NAME,
    secure: JSON.parse(process.env.SECURE)
  },
  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    '@/assets/sass/main.scss'
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module'
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // Doc: https://nuxt-community.github.io/nuxt-i18n/setup.html
    'nuxt-i18n',
    // https://github.com/daliborgogic/nuxt-brotli
    'nuxt-brotli',
    // https://github.com/nuxt-community/robots-module#readme
    '@nuxtjs/robots',
    // https://sitemap.nuxtjs.org/guide/setup
    '@nuxtjs/sitemap'
  ],

  eslint: {
    emitWarning: process.env.NODE_ENV === 'development',
    emitError: false
  },

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {

  },

  pwa: {
    workbox: false
  },

  robots: {
    UserAgent: '*',
    Disallow: '',
    Sitemap: path.join(process.env.WEBSITE_HOST, '/', 'sitemap.xml')
  },

  sitemap: {
    hostname: process.env.WEBSITE_HOST,
    gzip: false,
    i18n: true,
    defaults: {
      changefreq: 'daily',
      priority: 1,
      lastmod: new Date()
    }
  },

  modern: 'client',

  i18n: {
    seo: true,
    lazy: true,
    detectBrowserLanguage: false,
    locales: [{
      code: 'en',
      file: 'en.js',
      iso: 'en-US'
    }, {
      code: 'ar',
      file: 'ar.js',
      iso: 'ar-JO'
    }],
    defaultLocale: 'en',
    vueI18n: {
      fallbackLocale: 'en'
    },
    langDir: './assets/locales/'
  }
}
