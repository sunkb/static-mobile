const env = require('./env')
export default {
  server: {
    port: 3000, // default: 3000
    host: 'localhost', // default: localhost
  },
  router:{
    base: process.env.NODE_ENV === 'production'?'/static/web/':''
  },
  mode: 'Universal',
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [{
        charset: 'utf-8'
      },
      {
        name:"apple-mobile-web-app-capable",
        content:"yes"
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1, minimum-scale=1.0,maximum-scale=1.0, user-scalable=no'
      },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [{
      rel: 'icon',
      type: 'image/x-icon',
      href: '/favicon.ico'
    }],
    script: [{
      src: 'https://qn-smilejunior-admin.abc360.com/uploadtoola401bfc990031ddb91b4b627c34a8496.js',
      type: 'text/javascript',
      charset: 'utf-8'
    },
    {
      src: 'https://cdn.jsdelivr.net/npm/eruda',
      type: 'text/javascript',
      charset: 'utf-8'
    }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: {
    color: '#fff'
  },
  /*
   ** Global CSS
   */
  css: [{
    src: '~assets/group_buy/css/main.scss',
    lang: 'scss'
  }],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    { src: '~plugins/baidu.js', ssr: false },
    { src: '~plugins/pullto.js', ssr: false }
  ],
  /*
   ** Nuxt.js dev-modules
   */
  devModules: [],
  /*
   ** Nuxt.js modules
   */
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/proxy',
  ],
  axios: {
    prefix: '/api',
    proxy: true
  },
  proxy: {
    '/api': {
      // target:'http://192.168.125.209:9000/', //kimi
      // target: 'http://192.168.2.198/develop',
      target:'http://api-master.abc360.cn',
      // target: 'http://www.abc360.local',
      pathRewrite: {
        '^/api' : ''
      }
    }
  },
  env: {
    NODE_ENV: env[process.env.MODE].NODE_ENV,
    ENV_API:env[process.env.MODE].ENV_API,
    REDIRECT_URI:env[process.env.MODE].REDIRECT_URI,
    APP_ID:env[process.env.MODE].APP_ID,
    BASE_URL: env[process.env.MODE].BASE_URL,
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    //publicPath:'https://api-master.abc360.cn/static/web/',
    extend(config, ctx) {},
    postcss: [
      require('postcss-px2rem')({
        remUnit: 75
      })
    ],
    vendor: ['axios'] //防止重复打包
  }
}
