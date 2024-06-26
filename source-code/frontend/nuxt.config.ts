import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@pinia/nuxt', '@nuxtjs/tailwindcss', '@ant-design-vue/nuxt'],
  ssr: false,
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {}
    }
  },
  css: ['ant-design-vue/dist/reset.css', '~/assets/css/main.css'],
  runtimeConfig: {
    public: {
      apiUrl: 'https://security-diplom.online',
      authTokenKey: 'JWT_SECRET'
    }
  },
  vite: {
    resolve: {
      alias: {
        'ant-design-vue/dist': 'ant-design-vue/dist',
        'ant-design-vue/es': 'ant-design-vue/es',
        'ant-design-vue/lib': 'ant-design-vue/es',
        'ant-design-vue': 'ant-design-vue/es'
      }
    }
  }
})
