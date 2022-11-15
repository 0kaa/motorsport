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
      const { data } = await instance.post(`https://api.motorsport.hu/api/get-sitemap-data?page=${index}`)
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
    title: 'Motorsport.hu',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'F1 hírek, eredmények és egyéb érdekességek a motorsport világából' },
    ],
    link: [
      { rel: 'alternate', type: 'application/rss+xml', href: '/api/article', },
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Bai+Jamjuree:wght@300;400;500;700&display=swap',
      },
      {
        rel: 'stylesheet',
        href: 'https://vjs.zencdn.net/7.18.1/video-js.css',
      },
      {
        rel: 'stylesheet',
        href: 'https://cdn.jsdelivr.net/gh/MailOnline/videojs-vast-vpaid@master/bin/videojs.vast.vpaid.min.css',
      },

    ],
    script: [
      {
        src: '/js/ads.js',
        body: false,
        crossorigin: 'anonymous',
        async: true,
      },
      {
        src: 'https://vjs.zencdn.net/7.18.1/video.min.js',
        type: 'text/javascript',
        charset: 'utf-8',
        crossorigin: 'anonymous',
        // defer: true,
      },
      {
        src: 'https://cdn.jsdelivr.net/gh/MailOnline/videojs-vast-vpaid@master/bin/videojs_5.vast.vpaid.min.js',
        crossorigin: 'anonymous',
        async: true,
        body: true,
      },

      // {
      //   src: 'https://www.instagram.com/embed.js',
      //   async: true,
      //   body: true,
      // },
    ],
  },

  css: ['~assets/css/transitions.css'],

  dev: process.env.enviroment,
  target: 'server',
  plugins: [
    { src: '~/plugins/api.js' },
    { src: '~/plugins/axios.js' },
    { src: '~/plugins/jsonld.js' },
    { src: '~/plugins/owl-carousel', ssr: true },
  ],

  components: true,

  buildModules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/date-fns',
    'nuxt-delay-hydration',
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
    '@nuxtjs/feed',
    '@nuxtjs/toast',
    '@nuxt/image',
    '@nuxtjs/universal-storage',
    'nuxt-ssr-cache',
    '@nuxtjs/gtm',
    ['@nuxtjs/component-cache', { maxAge: 1000 * 60 * 60 }],
  ],

  image: {
    domains: ['api.motorsport.hu']
  },

  cache: {
    // if you're serving multiple host names (with differing
    // results) from the same server, set this option to true.
    // (cache keys will be prefixed by your host name)
    // if your server is behind a reverse-proxy, please use
    // express or whatever else that uses 'X-Forwarded-Host'
    // header field to provide req.hostname (actual host name)
    useHostPrefix: false,
    pages: [
      '/',
    ],

    key(route, context) {
      // custom function to return cache key, when used previous
      // properties (useHostPrefix, pages) are ignored. return 
      // falsy value to bypass the cache
    },

    store: {
      type: 'memory',

      // maximum number of pages to store in memory
      // if limit is reached, least recently used page
      // is removed.
      max: 100,

      // number of seconds to store this page in cache
      ttl: 60,
    },
  },

  gtm: {
    enable: true,
    id: 'GTM-MMNS5SC'
  },
  toast: {
    position: 'top-center',
    duration: 3000
  },

  feed: [
    // A default feed configuration object
    {
      path: '/api/article', // The route to your feed.
      async create(feed) {
        feed.options = {
          title: 'Motorsport RSS: Legfrissebb',
          link: 'https://motorsport.hu/api/article',
          description: 'Articles from https://motorsport.hu',
          copyright: "2022 - Motorsport – Liner Media Group Kft.",
        }

        const instance = axios.create({
          httpsAgent: new https.Agent({
            rejectUnauthorized: false
          })
        });
        const { data } = await (instance.post('https://api.motorsport.hu/api/get-rss-posts'))

        data.data.forEach(post => {
          feed.addItem({
            title: post.title,
            id: post.url,
            link: `https://motorsport.hu/${post.post_categories[0].slug}/${post.slug}`,
            description: post.excerpt,
            published: new Date(post.published_at),
            image: post.featured_image.url
          })
        })

        // feed.addCategory('Nuxt.js')

        // feed.addContributor({
        //   name: 'Alexander Lichter',
        //   email: 'example@lichter.io',
        //   link: 'https://lichter.io/'
        // })
      },
      cacheTime: 1000, // How long should the feed be cached
      type: 'rss2', // Can be: rss2, atom1, json1
      data: [] // Will be passed as 2nd argument to `create` function
    }
  ],
  delayHydration: {
    mode: 'init'
  },
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
          const { data } = await instance.post(`https://api.motorsport.hu/api/get-sitemap-tags`)
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
          const { data } = await instance.post(`https://api.motorsport.hu/api/get-sitemap-teams`)
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
          const { data } = await instance.post(`https://api.motorsport.hu/api/get-sitemap-drivers`)
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
          const { data } = await instance.post(`https://api.motorsport.hu/api/get-sitemap-races`)
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
  //   '/api': 'https://api.motorsport.hu/api'
  // },


  build: {
  },

  loading: {
    color: '#bd191c',
    height: '4px',
  },
}
