export default defineNuxtConfig({
  // extends: '@nuxt-themes/docus',
  // compatibilityDate: '2024-09-19',
  devtools: { enabled: true },

  routeRules: {
    '/': { prerender: true }
  },

  modules: [
    '@nuxt/ui',
    '@nuxt/content',
    '@nuxthq/studio',
    '@nuxt/image',
  ],

  compatibilityDate: '2024-09-19',
})
