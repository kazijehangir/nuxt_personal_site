export default defineNuxtConfig({
  devtools: { enabled: true },

  routeRules: {
    '/': { prerender: true }
  },

  modules: [
    '@nuxt/ui',
    '@nuxt/content',
    '@nuxthq/studio',
    '@nuxt/image',
    '@nuxtjs/color-mode',
  ],

  compatibilityDate: '2024-09-19',
})
