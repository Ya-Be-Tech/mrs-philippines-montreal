export default defineNuxtConfig({
  compatibilityDate: '2026-05-09',
  ssr: true,
  css: ['~/assets/css/main.css'],
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/i18n'],
  experimental: {
    appManifest: false,
  },
  tailwindcss: {
    config: {
      path: '~/tailwind.config.ts',
    },
  },
  i18n: {
    locales: [
      { code: 'en', name: 'English', file: 'en.json' },
      { code: 'fr', name: 'Français', file: 'fr.json' },
      { code: 'tl', name: 'Tagalog', file: 'tl.json' }
    ],
    defaultLocale: 'en',
    langDir: 'locales/',
    strategy: 'prefix_except_default',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root'
    }
  },
  nitro: {
    preset: 'static',
    prerender: {
      crawlLinks: true,
      routes: [
        '/', '/about', '/talent', '/events/2019', '/events/2022',
        '/fr/', '/fr/about', '/fr/talent', '/fr/events/2019', '/fr/events/2022',
        '/tl/', '/tl/about', '/tl/talent', '/tl/events/2019', '/tl/events/2022',
      ],
    },
  },
})
