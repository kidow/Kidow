require('dotenv').config()
const {
  NODE_ENV,
  SENTRY_DSN,
  FIREBASE_API_KEY,
  FIREBASE_AUTH_DOMAIN,
  FIREBASE_DATABASE_URL,
  FIREBASE_PROJECT_ID,
  FIREBASE_STORAGE_BUCKET,
  FIREBASE_MESSAGING_SENDER_ID,
  FIREBASE_APP_ID,
  FIREBASE_MEASUREMENT_ID,
  ABOUT_KEY
} = process.env

const TITLE = 'Kidow Blog'
const DESCRIPTION = 'Kidow Blog'
const IMAGE = ''
const PUBLIC_LINK = 'https://www.kidow.kr'
const BRAND_COLOR = '#fd7e14'
const FONT_COLOR = '#e5e6e7'
const BASE_URL =
  NODE_ENV === 'production' ? PUBLIC_LINK : 'http://localhost:3000'

module.exports = {
  mode: 'universal',
  srcDir: 'src/',
  server: {
    port: 3005
  },
  head: {
    title: TITLE,
    meta: [
      { 'http-equiv': 'Content-Type', content: 'text/html; charset=utf-8' },
      { 'http-equiv': 'X-UA-Compatible', content: 'IE=edge,chrome=1' },
      { name: 'robots', content: 'index, follow' },
      {
        name: 'viewport',
        content:
          'width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no'
      },
      {
        hid: 'description',
        name: 'description',
        content: DESCRIPTION
      },
      {
        'http-equiv': 'Content-Security-Policy',
        content: 'upgrade-insecure-requests',
        'content-src': true
      },

      // Open Graph
      { hid: 'og-site_name', property: 'og:site_name', content: TITLE },
      { hid: 'og-title', property: 'og:title', content: TITLE },
      {
        hid: 'og-description',
        property: 'og:description',
        content: DESCRIPTION
      },
      { hid: 'og-image', property: 'og:image', content: IMAGE },
      { hid: 'og-type', property: 'og:type', content: 'article' },
      { hid: 'og-locale', property: 'og:locale', content: 'en_US' },
      { hid: 'og-image-width', property: 'og:image:width', content: '1200' },
      { hid: 'og-image-height', property: 'og:image:height', content: '630' },
      {
        hid: 'og-image-alt',
        property: 'og:image:alt',
        content: '###Kidow###'
      },
      { hid: 'og-url', property: 'og:url', content: PUBLIC_LINK },

      // Twiiter
      { hid: 'twitter-site', property: 'twitter:site', content: '@kidow' },
      { hid: 'twitter-card', property: 'twitter:card', content: 'summary' },
      { hid: 'twitter-title', property: 'twitter:title', content: TITLE },
      {
        hid: 'twitter-description',
        property: 'twitter:description',
        content: DESCRIPTION
      },
      { hid: 'twitter-image', property: 'twitter:image', content: IMAGE },
      {
        hid: 'twitter-domain',
        property: 'twitter:domain',
        content: PUBLIC_LINK
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    script: [
      {
        src: 'https://use.fontawesome.com/releases/v5.11.2/js/all.js'
      }
    ]
  },
  loading: { color: BRAND_COLOR, height: '3px' },
  css: [
    { src: 'ant-design-vue/dist/antd.less', lang: 'less' },
    '~assets/scss/index.scss'
  ],
  plugins: [
    '@/plugins/i18n',
    '@/plugins/antd-ui',
    '@/plugins/firebase',
    { src: '@/plugins/vue-scroll-reveal', mode: 'client' },
    '@/plugins/vue-spinner',
    { src: '@/plugins/vue-clipboard2', mode: 'client' },
    '@/plugins/vue-custom'
  ],
  pageTransition: 'fade',
  modules: [
    '@nuxtjs/style-resources',
    '@nuxtjs/device',
    '@nuxtjs/axios',
    '@nuxtjs/pwa'
  ],
  buildModules: ['@nuxtjs/moment', '@nuxtjs/gtm'],
  moment: {
    defaultLocales: 'ko',
    locales: ['ko']
  },
  gtm: {
    id: 'GTM-NFXGGC2'
  },
  env: {
    FIREBASE_API_KEY,
    FIREBASE_AUTH_DOMAIN,
    FIREBASE_DATABASE_URL,
    FIREBASE_PROJECT_ID,
    FIREBASE_STORAGE_BUCKET,
    FIREBASE_MESSAGING_SENDER_ID,
    FIREBASE_APP_ID,
    FIREBASE_MEASUREMENT_ID,
    BASE_URL,
    ABOUT_KEY
  },
  styleResources: {
    scss: ['~assets/scss/index.scss']
  },
  manifest: {
    name: TITLE,
    short_name: TITLE,
    start_url: '/?utm_source=homescreen',
    display: 'standalone',
    background_color: '#17191d',
    theme_color: BRAND_COLOR
  },
  workbox: {
    offline: false
  },
  build: {
    extend(config, { loaders }) {
      loaders.less.javascriptEnabled = true
      loaders.less.modifyVars = {
        'primary-color': BRAND_COLOR,
        'link-color': BRAND_COLOR,
        'text-color': FONT_COLOR
      }
      config.devtool = 'hidden-source-map'
    }
  }
}
