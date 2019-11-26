module.exports = {
  local: {
    PUBLIC_PATH: '_nuxt',
    NODE_ENV: 'development',
    ENV_API: '/api/', //本地地址
    BASE_URL: 'http://www.test.com',
    APP_ID: 'wxfcc48a994f9a1a32'
  },
  test: {
    PUBLIC_PATH: 'http://release2.landi.com/static-web/mobile/',
    NODE_ENV: 'test',
    ENV_API: 'http://release2.landi.com/', //测试服务器地址
    BASE_URL: 'http://release2.landi.com/static-web/mobile',
    APP_ID: 'wxfcc48a994f9a1a32'
  },
  release6: {
    PUBLIC_PATH: 'https://release6.landi.com/static-web/mobile/',
    NODE_ENV: 'test',
    ENV_API: 'https://release6.landi.com/', //测试服务器地址
    BASE_URL: 'https://release6.landi.com/static-web/mobile',
    APP_ID: 'wx9632cb5f0990954d'
  },
  release1: {
    PUBLIC_PATH: 'https://release1.landi.com/static-web/mobile/',
    NODE_ENV: 'test',
    ENV_API: 'https://release1.landi.com/', //测试服务器地址
    BASE_URL: 'https://release1.landi.com/static-web/mobile',
    APP_ID: 'wx9632cb5f0990954d'
  },
  pro: {
    PUBLIC_PATH: 'https://www.landi.com/static-web/mobile/',
    NODE_ENV: 'production',
    ENV_API: 'https://www.landi.com/', // 正式服务器地址
    BASE_URL: 'https://www.landi.com/static-web/mobile',
    APP_ID: 'wx575385af6b09a6e0'
  }
}
