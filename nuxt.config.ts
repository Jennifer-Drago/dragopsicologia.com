// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],

  runtimeConfig: {
    turnstile: {
      secretKey: process.env.TURNSTILE_SECRET_KEY,
    },
  },

  app: {
    head: {
      viewport: 'width=device-width, initial-scale=1',
      meta: [
        {
          name: 'robots',
          content: 'noindex',
        },
        {
          name: 'msapplication-TileColor',
          content: '#da532c',
        },
        {
          name: 'theme-color',
          content: '#ffffff',
        },
      ],
      link: [
        { rel: 'canonical', href: 'https://www.dragopsicologia.com/' },
        {
          rel: 'manifest',
          href: '/site.webmanifest',
        },
        {
          rel: 'apple-touch-icon',
          sizes: '180x180',
          href: '/img/favicon/apple-touch-icon.png',
        },
        {
          rel: 'icon',
          type: 'icon',
          sizes: '32x32',
          href: '/img/favicon/favicon-32x32.png',
        },
        {
          rel: 'icon',
          type: 'icon',
          sizes: '16x16',
          href: '/img/favicon/favicon-16x16.png',
        },
      ],
      htmlAttrs: {
        lang: 'es',
      },
      script: [
        {
          type: 'application/ld+json',
          children: JSON.stringify(
            {
              '@context': 'https://schema.org',
              '@type': 'ProfessionalService',
              name: 'Drago Psicología',
              image: 'https://www.dragopsicologia.com/img/cover.png',
              url: 'https://www.dragopsicologia.com/',
              telephone: '634 58 67 24',
              address: {
                '@type': 'PostalAddress',
                postalCode: '08880',
                addressCountry: 'ES',
              },
            },
            null,
            ''
          ),
        },
      ],
    },
  },

  modules: [
    '@nuxt/content',
    '@nuxthq/studio',
    '@nuxt/fonts',
    '@nuxtjs/turnstile',
    '@nuxt/scripts',
  ],
  studio: {
    enabled: true,
  },
  content: {
    markdown: {
      anchorLinks: false,
    },
  },
  fonts: {
    families: [
      { name: 'Poppins', provider: 'google', weights: [400, 600, 700] },
    ],
  },
  turnstile: {
    siteKey: process.env.TURNSTILE_SITE_KEY,
  },
});