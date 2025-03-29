// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },

  modules: ['nuxt-microcms-module', '@nuxtjs/tailwindcss', '@nuxt/image'],

  image: {
    provider: 'ipx',
    preload: true,
  },

  microCMS: {
    serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN,
    apiKey: process.env.MICROCMS_API_KEY,
  },

  runtimeConfig: {
    public: {
      microCMS: {
        serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN,
        apiKey: process.env.MICROCMS_API_KEY,
      },
    },
  },

  app: {
    head: {
      link: [
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=M+PLUS+2:wght@100..900&family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap',
        },
      ],
    },
    pageTransition: {
      name: 'page',
      mode: 'out-in',
      appear: true, // 初期表示時もアニメーション適用
      duration: 300, // トランジション時間を短く
    },
  },

  plugins: [
    { src: '~/plugins/gsap.client.ts', mode: 'client' }, // クライアントサイドでのみ実行
    { src: '~/plugins/directives.ts', mode: 'client' },
  ],

  css: ['@/assets/css/main.css'],
})
