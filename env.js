module.exports = {
  local: {
    PUBLIC_PATH: '_nuxt',
    NODE_ENV: 'development',
    ENV_API: '/api/', //本地地址
    BASE_URL: 'http://192.168.29.188',
    APP_ID: 'wxfcc48a994f9a1a32'
  },
  test: {
    PUBLIC_PATH: 'http://api-master.abc360.cn/static/web/',
    NODE_ENV: 'test',
    ENV_API: 'http://api-master.abc360.cn/', //测试服务器地址
    BASE_URL: 'http://api-master.abc360.cn/static/web',
    APP_ID: 'wxfcc48a994f9a1a32'
  },
  test198: {
    PUBLIC_PATH: 'https://192.168.2.198/develop/static/web/',
    NODE_ENV: 'test',
    ENV_API: 'https://192.168.2.198/develop/', //测试服务器地址
    BASE_URL: 'https://192.168.2.198/develop/static/web',
    APP_ID: 'wxfcc48a994f9a1a32'
  },
  pro: {
    PUBLIC_PATH: 'https://www.abc360.com/static/web/',
    NODE_ENV: 'production',
    ENV_API: 'https://www.abc360.com/', // 正式服务器地址
    BASE_URL: 'https://www.abc360.com/static/web',
    APP_ID: 'wxc82e75af73bfbc8f'
  }
}
