import path from 'node:path'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  css: [path.join(__dirname, 'app/assets/styles/custom/index.scss')],
  alias: {
    '@constants': path.join(__dirname, 'app/assets/constants'),
    '@type': path.join(__dirname, 'types'),
    '@models': path.join(__dirname, 'types/models'),
    '@assets': path.join(__dirname, 'app/assets'),
    '@styles': path.join(__dirname, 'app/assets/styles/global')
  }
})
