export default {
  server: {
    host: '127.0.0.1', // Default: localhost
    port: 3000         // Default: 3000
},

  head: {
    title: 'My Nuxt App',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'My Nuxt.js application' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Quicksand:wght@300..700&display=swap'}
    ]
  },

  css: [
    "~/assets/css/styles.css" // Global CSS file
  ],

  plugins: [
    // Plugins can be added here
  ],

  modules: [
    // Nuxt.js modules can be added here
  ],

  build: {
    // Build configuration can be added here
  },

  compatibilityDate: '2025-04-14'
};