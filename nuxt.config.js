import axios from 'axios'
import https from 'https';



export default {
  head: {
    title: 'MS-Motors',
    titleTemplate: '%s - MS-Motors',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Bai+Jamjuree:wght@300;400;500;700&display=swap',
      },
    ],
  },

  css: ['~assets/css/transitions.css'],

  dev: process.env.enviroment,
  target: 'server',
  plugins: [
    { src: '~/plugins/api.js' },
    { src: '~/plugins/axios.js' },
    { src: '~/plugins/owl-carousel', ssr: true },
    { src: '~/plugins/vee-validate.js' },
    { src: '~/plugins/vue-tippy.js', mode: 'client' },
  ],

  components: true,

  buildModules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/date-fns',
    '@nuxtjs/stylelint-module',
  ],

  dateFns: {
    /* module options */
    defaultLocale: 'hu'
  },

  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/proxy',
    '@nuxtjs/sitemap',
    '@nuxtjs/universal-storage',
    ['@nuxtjs/component-cache', { maxAge: 1000 * 60 * 60 }],
  ],
  tailwindcss: {
    exposeConfig: true,
    viewer: false,
  },

  sitemap: {
    gzip: true,
    exclude: [
      '/404',
      '/adatkezelesi-tajekoztato',
      '/contact',
      '/cookie-szabalyzat',
      '/impresszum',
      '/kereses',
      '/szerzoi-jogok',
    ],
    path: '/sitemap.xml',
    sitemaps: [
      {
        exclude: [
          '/404',
          '/adatkezelesi-tajekoztato',
          '/contact',
          '/cookie-szabalyzat',
          '/impresszum',
          '/kereses',
          '/szerzoi-jogok',
        ],
        path: '/sitemap-1.xml',
        routes: async () => {
          const instance = axios.create({
            httpsAgent: new https.Agent({
              rejectUnauthorized: false
            })
          });
          const { data } = await instance.post('https://msfrontend.hirertek.hu/api/get-sitemap-data?skip=0')
          const routes = data.data.map(article => {
            return {
              url: article.url,
              changefreq: 'daily',
              priority: 1,
              lastmod: article.mod
            }
          })
          return routes
        }
      }, {
        exclude: [
          '/404',
          '/adatkezelesi-tajekoztato',
          '/contact',
          '/cookie-szabalyzat',
          '/impresszum',
          '/kereses',
          '/szerzoi-jogok',
        ],
        path: '/sitemap-2.xml',
        routes: async () => {
          const instance = axios.create({
            httpsAgent: new https.Agent({
              rejectUnauthorized: false
            })
          });
          const { data } = await instance.post('https://msfrontend.hirertek.hu/api/get-sitemap-data?skip=200')
          const routes = data.data.map(article => {
            return {
              url: article.url,
              changefreq: 'daily',
              priority: 1,
              lastmod: article.mod
            }
          })
          return routes
        }
      }
    ]

  },

  axios: {
    // proxy: true,
    // debug: true
  },
  // proxy: {
  //   '/api': 'https://liner.test/api'
  // },


  build: {
  },

  loading: {
    color: '#bd191c',
    height: '4px',
  },
}
