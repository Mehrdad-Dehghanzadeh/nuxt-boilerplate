import path from 'node:path'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      htmlAttrs: {
        lang: 'fa',
        dir: 'rtl'
      }
    }
  },

  css: [path.join(__dirname, 'app/assets/styles/custom/index.scss')],

  alias: {
    '@constants': path.join(__dirname, 'app/assets/constants'),
    '@type': path.join(__dirname, 'types'),
    '@models': path.join(__dirname, 'types/models'),
    '@assets': path.join(__dirname, 'app/assets'),
    '@styles': path.join(__dirname, 'app/assets/styles/global'),
    '@apis': path.join(__dirname, 'app/apis'),
    '@includes': path.join(__dirname, 'app/components/includes')
  },

  compatibilityDate: '2025-07-15',
  devtools: { enabled: true }
})
