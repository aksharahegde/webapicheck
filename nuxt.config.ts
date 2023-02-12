const appName = 'WebAPI check'
const appDescription = 'Simply open this page and get an instant overview of the WebAPIs that are supported on your current device. WebAPI requirements, specs, live tests, and more...'

export default defineNuxtConfig({
  extends: [
    'nuxt-seo-kit',
  ],
  runtimeConfig: {
    indexable: true,
    public: {
      titleSeparator: '·',
      trailingSlash: false,
      siteUrl: 'https://webapicheck.com',
      siteName: appName,
      siteDescription: appDescription,
      twitterProfile: 'https://twitter.com/toniengelhardt',
      repoUrl: 'https://github.com/toniengelhardt/webapicheck',
      feedbackEmail: 'feedback@webapicheck.com',
      sentryDSN: process.env.SENTRY_DSN,
    },
  },
  experimental: {
    componentIslands: true,
  },
  modules: [
    '@kevinmarrec/nuxt-pwa',
    '@nuxtjs/color-mode',
    '@nuxtjs/plausible',
    '@vueuse/nuxt',
    'nuxt-icon',
    'nuxt-windicss',
  ],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
            @import "@/assets/scss/_mixins.scss";
          `,
        },
      },
    },
  },
  typescript: {
    shim: false,
  },
  css: [
    'assets/scss/style.scss',
  ],
  postcss: {
    plugins: {
      cssnano: false,
    },
  },
  app: {
    head: {
      htmlAttrs: {
        translate: 'no', // Avoid translation.
      },
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico', key: 'favicon' },
      ],
    },
  },
  pwa: {
    manifest: {
      id: '/?standalone=true',
      name: appName,
      short_name: appName,
      description: appDescription,
      display: 'standalone',
      orientation: 'portrait',
      lang: 'en',
      start_url: '/?standalone=true',
      categories: [
        'productivity',
        'utilities',
      ],
    },
    meta: {
      title: appName,
      mobileApp: true,
      mobileAppIOS: true,
      twitterCard: 'summary_large_image',
      theme_color: false,
    },
    icon: {
      source: 'public/icon.png',
      maskableSource: 'public/icon.maskable.png',
      maskablePadding: 0,
    },
  },
  colorMode: {
    classSuffix: '',
  },
  plausible: {
    domain: 'webapicheck.com',
    trackLocalhost: false,
    autoOutboundTracking: false,
  },
  linkChecker: {
    failOn404: true,
  },
})
