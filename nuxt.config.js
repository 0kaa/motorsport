import axios from 'axios'
import https from 'https';
const instance = axios.create({
  httpsAgent: new https.Agent({
    rejectUnauthorized: false
  })
});
const range = (size, startAt = 1) => [...Array(size).keys()].map(i => i + startAt);

const getSitemapsConfigurations = () => {
  return range(10).map(index => ({
    path: `/sitemap-${index}.xml`,
    routes: async () => {
      const instance = axios.create({
        httpsAgent: new https.Agent({
          rejectUnauthorized: false
        })
      });
      const { data } = await instance.post(`https://msfrontend.hirertek.hu/api/get-sitemap-data?page=${index}`)
      const routes = data.data.map((article, i) => {
        return {
          url: article.url,
          // changefreq: 'daily',
          // priority: 1,
          lastmod: article.mod
        }
      })
      return routes
    },
    cacheTime: 1000,
    trailingSlash: true,
    exclude: ['/**'], //here we exclude all static routes
  }));
}

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
    path: '/sitemap/index.xml',
    sitemaps: [

      {
        path: '/sitemap/tags.xml',
        routes: async () => {
          const instance = axios.create({
            httpsAgent: new https.Agent({
              rejectUnauthorized: false
            })
          });
          const { data } = await instance.post(`https://msfrontend.hirertek.hu/api/get-sitemap-tags`)
          const routes = data.data.map((tag, i) => {
            return {
              url: tag.url,
            }
          })
          return routes
        },
        cacheTime: 1000,
        trailingSlash: true,
        exclude: ['/**'], //here we exclude all static routes
      },
      {
        path: '/sitemap/teams.xml',
        routes: async () => {
          const instance = axios.create({
            httpsAgent: new https.Agent({
              rejectUnauthorized: false
            })
          });
          const { data } = await instance.post(`https://msfrontend.hirertek.hu/api/get-sitemap-teams`)
          const routes = data.data.map((team, i) => {
            return {
              url: team.url,
            }
          })
          return routes
        },
        cacheTime: 1000,
        trailingSlash: true,
        exclude: ['/**'], //here we exclude all static routes
      },
      {
        path: '/sitemap/drivers.xml',
        routes: async () => {
          const instance = axios.create({
            httpsAgent: new https.Agent({
              rejectUnauthorized: false
            })
          });
          const { data } = await instance.post(`https://msfrontend.hirertek.hu/api/get-sitemap-drivers`)
          const routes = data.data.map((driver, i) => {
            return {
              url: driver.url,
            }
          })
          return routes
        },
        cacheTime: 1000,
        trailingSlash: true,
        exclude: ['/**'], //here we exclude all static routes
      },
      {
        path: '/sitemap/races.xml',
        routes: async () => {
          const instance = axios.create({
            httpsAgent: new https.Agent({
              rejectUnauthorized: false
            })
          });
          const { data } = await instance.post(`https://msfrontend.hirertek.hu/api/get-sitemap-races`)
          const routes = data.data.map((race, i) => {
            return {
              url: race.url,
            }
          })
          return routes
        },
        cacheTime: 1000,
        trailingSlash: true,
        exclude: ['/**'], //here we exclude all static routes
      },
      ...getSitemapsConfigurations(),
    ]

  },

  axios: {
    // proxy: true,
    // debug: true
  },
  // proxy: {
  //   '/api': 'https://msfrontend.hirertek.hu/api'
  // },


  build: {
  },

  loading: {
    color: '#bd191c',
    height: '4px',
  },
}
