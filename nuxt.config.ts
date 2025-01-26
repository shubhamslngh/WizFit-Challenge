// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  pages: false,
  modules: ['@nuxt/ui', '@nuxtjs/google-fonts', '@nuxt/image'],
  googleFonts: {
    families: {
      Oswald: [400, 500, 600, 700], 
    },
    display: 'swap', 
    prefetch: true,  // Preload the font for faster rendering
    preconnect: true,
  },
  vue: {
    compilerOptions: {
      isCustomElement: (tag) => tag === 'ULoader',
    },
  },
  app: {
    head: {
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
      ],
      link: [
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Oswald:wght@400;500;600;700&display=swap',
        },
      ],
    },
  },
  devtools: { enabled: true }
})