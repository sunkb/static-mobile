import axios from '../axios'

/**
 * 登录注册的类封装
 */
export class Login {
    constructor() {}

    /**
     * 自动登录
     */
    autoLogin() {
        //不是开发环境
        if(process.env.NODE_ENV !== 'development'){
            if (getIsWxClient()) {
                wxAutoLogin();
            }
        }
    }

    /**
     * 登录
     */
    login() {

    }

    /**
     * 注册
     */
    register() {

    }
}

/**
 * 微信自动登录
 */
function wxAutoLogin() {
    if (process.client) {
        const code = getQueryString('code');
        if (!code) {
            //如果没有code则执行微信跳转获取code
            const urlData = {
                appid: process.env.APP_ID,
                redirect_uri: window.location.href,
                response_type: "code",
                scope: "snsapi_base"
            };
            window.location.href = `https://open.weixin.qq.com/connect/oauth2/authorize?appid=${urlData.appid}&redirect_uri=${urlData.redirect_uri}&response_type=${urlData.response_type}&scope=${urlData.scope}#wechat_redirect`;
        }

        //调用后台接口登录
        const url = 'Mobile/StudentActivity/login';
        const params = {
            code,
        }
        axios.get(url,{params}).then(res=>{
            console.log('code登录',res)
        })
    }
}

/**
 * app自动登录
 */
function appAutoLogin() {

}

/**
 * 判断是否是微信环境
 */
function getIsWxClient() {
    let result = false;
    if (process.client) {
        var ua = navigator.userAgent.toLowerCase();
        if (ua.match(/MicroMessenger/i) == "micromessenger") {
            result = true;
        }
    }
    return result;
};

/**
 * 获取页面参数
 * @param {*} name 
 */
function getQueryString(name) {
    var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i')
    var r = window.location.search.substr(1).match(reg)
    if (r != null) return unescape(r[2])
    return null
}