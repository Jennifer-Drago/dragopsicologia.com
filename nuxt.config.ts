// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],

  app: {
    head: {
      viewport: 'width=device-width, initial-scale=1',
      meta: [
        {
          name: 'robots',
          content: 'noindex',
        },
      ],
      htmlAttrs: {
        lang: 'es',
      },
    },
  },

  modules: ["@nuxt/content"]
});