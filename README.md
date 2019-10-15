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

# Q&A
## 微信分享的问题
### 1.页面路径和 location.href 中的不同
通过 router 来跳转页面的话, ios下微信复制链接出的路径还是一开始进去的页面路径, location.href 中的为当前页面路径, 导致不同步.  
采用 window.location 来跳转解决
### 2.采用 get 的方式请求 wxconfig
encode 了 url 还出现问题的话, 换成 post

## https 跳转为 http 导致请求跨域页面空白
链接 https://xxx.xxx/?param=1  
? 前不带 / 的话会跳转为 http
