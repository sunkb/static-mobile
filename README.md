# activity-nuxt

> My riveting Nuxt.js project

## Build Setup

``` bash
# install dependencies
$ npm run install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

# 测试环境下部署
测试服务器下面
程序仓库放在/teen 同级目录下
1. 执行git操作切换分支拉取最新代码
2. 执行复制文件夹命令复制static-mobile下的dist文件夹到teen项目的static-web/mobile下面
\cp -Rf /root/static-mobile/dist/* /root/teen/static-web/mobile/