
import { Configuration } from '@nuxt/types'

const fileName = `.env.${process.env.NODE_ENV || 'local'}`
require('dotenv').config({ path: fileName })

const config: Configuration = {
  srcDir: 'src/',
  mode: 'spa',
  
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  server: {
    port: 2525,
    host: '0.0.0.0'
  },
  
  loading: { color: '#fff' },
  
  css: [
  ],
  
  plugins: [
  ],

  webfontloader: {
    google: {
      families: [
        'Noto+Sans+JP:wght@400;700',
      ]
    }
  },

  buildModules: [
    '@nuxt/typescript-build',
    '@nuxtjs/tailwindcss',
  ],
  
  modules: [
    '@nuxtjs/pwa',
    '@nuxtjs/dotenv',
    ['nuxt-i18n', {
      locales: [
        {
          code: 'en',
          file: 'en-US.js'
        },
        {
          code: 'ja',
          file: 'ja-JP.js'
        }
      ],
      detectBrowserLanguage: {
        useCookie: true,
        cookieKey: 'i18n_redirected',
        alwaysRedirect: false,
        fallbackLocale: 'ja'
      },
      lazy: true,
      langDir: 'lang/',
      defaultLocale: 'jp',
      strategy: 'no_prefix'
    }],
    ['@nuxt/typescript-build', {
      typeCheck: {
        memoryLimit: 4096,
        workers: 2
      },
      ignoreNotFoundWarnings: false
    }],
  ],

  build: {
    extend (config, ctx) {
    }
  }
}

export default config