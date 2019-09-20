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
api-master服务器下面
程序仓库放在/root/static-web/目录下
1. 执行git操作切换分支拉取最新代码
2. 执行复制文件夹命令复制static-web下的dist文件夹到abc360项目
cp -Rf /root/static-web/dist/* /root/abc360.com/static/web