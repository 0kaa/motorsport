export default {
  head: {
    title: 'MS-Motors',
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
        href: 'https://fonts.googleapis.com/css2?family=Bai+Jamjuree:wght@400;500;700&display=swap',
      },
    ],
  },

  css: ['~assets/css/transitions.css'],

  // dev: process.env.enviroment,

  plugins: [
    { src: '~/plugins/api.js' },
    { src: '~/plugins/axios.js' },
    { src: '~/plugins/owl-carousel', ssr: false },
    { src: '~/plugins/vee-validate.js' },
    { src: '~/plugins/vue-tippy.js', mode: 'client' },
  ],

  components: true,

  buildModules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/date-fns',
    '@nuxtjs/stylelint-module',
  ],

  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/universal-storage',
    ['@nuxtjs/component-cache', { maxAge: 1000 * 60 * 60 }],
  ],
  tailwindcss: {
    exposeConfig: true,
    viewer: false,
  },

  axios: {
    baseURL: 'https://msfrontend.hirertek.hu/api'
  },

  build: {
    standalone: true,
    loaders: {
      vue: {
        prettify: false,
      },
    },
    babel: {
      plugins: [
        ['@babel/plugin-proposal-private-methods', { loose: true }],
        ['@babel/plugin-proposal-private-property-in-object', { loose: true }],
      ],
    },
  },

  loading: {
    color: '#7C3AED',
    height: '4px',
  },
}
