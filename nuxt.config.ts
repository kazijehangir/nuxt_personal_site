export default defineNuxtConfig({
  css: ['~/assets/css/main.css'],

  devtools: { enabled: true },

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  routeRules: {
    '/': { prerender: true }
  },

  modules: [
    '@nuxt/ui',
    '@nuxt/content',
    '@nuxthq/studio',
    '@nuxt/image',
    '@nuxtjs/color-mode',
    '@nuxtjs/mdc',
  ],

  compatibilityDate: '2024-09-19',
})
