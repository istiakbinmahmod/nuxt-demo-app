export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss'],
  css: ['~/assets/css/main.css'],
  ssr: false,
  app: {
    head: {
      title: 'Nexus Digital - Modern Digital Solutions',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { 
          name: 'description', 
          content: 'Cutting-edge digital solutions for modern businesses. Web development, design, and consulting services.' 
        }
      ],
      script: [
        {
          src: 'https://cdn.optimizely.com/js/6371880462974976.js',
          defer: false
        }
      ]
    }
  },
  tailwindcss: {
    cssPath: '~/assets/css/main.css',
    configPath: 'tailwind.config.js'
  }
})