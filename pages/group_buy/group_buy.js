import axios from '../../utils/axios'
import eventEmitter from '../../utils/event-center'
import {platform} from '../../utils/platform'

/**
 * 获取页面参数
 * @param {*} name 
 */
export function getQueryString(name) {
    var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i')
    var r = window.location.search.substr(1).match(reg)
    if (r != null) return unescape(r[2])
    return null
}

/**
 * 重新计算拼团数据
 * @param {*} count 
 */
export function getGroupCount(count) {
    count = Number(count)
    let _count = count
    if (count <= 140) {
        _count += 38
    } else if (count > 140 && count <= 178) {
        _count = 178
    } else if (count > 200) {
        _count = 200
    }
    return _count
}


/**
 * 调用原生支付
 * @param {*} appPayData 
 */
export function jsCallNative(appPayData) {
    let defaultData = {
        acoin: 0,
        begin_time: 0,
        combo_name: '',
        create_time: 0,
        id: 0,
        installment: 0,
        payed: -1,
        split_id: -1,
        tmoney: 0
    }

    const resultData = Object.assign(defaultData, appPayData);
    const payurl = `abc360://pay?acoin=${resultData.acoin}&begin_time=${resultData.begin_time}&combo_name=${resultData.combo_name}&create_time=${resultData.create_time}&id=${resultData.order_id}&installment=${resultData.installment}&payed=${resultData.pay_status}&split_id=${resultData.split_id}&tmoney=${resultData.sale_price}`;
    
    const currentPlatform = platform();
    if(currentPlatform.iPhone){
        window.location.href = payurl
    }
    if(currentPlatform.android){
        console.log('payurl', payurl)
        var result = prompt(payurl)
    }
}


/**
 * 初始化页面配置等信息
 */
export function init() {
    const token = getQueryString('token')

    //判断环境并且保存环境信息到 sessionStorage
    const currentPlatform = platform();
    if (currentPlatform.isWeixin) {
        //微信
        sessionStorage.setItem('currentPlatform', 'wx');
    } else if (token) {
        //app
        sessionStorage.setItem('currentPlatform', 'app');
    } else {
        if(!sessionStorage.getItem('currentPlatform') === 'app'){
            //浏览器环境
            sessionStorage.setItem('currentPlatform', 'other');
        }
    }
    console.log('currentPlatform',sessionStorage.getItem('currentPlatform'))

    //如果链接中带有token参数则说明是app登录，需要做快速登录
    if (token) {
        const fastLoginUrl = `${process.env.ENV_API}Web/Index/fast_login?token=${token}&url=${process.env.BASE_URL}/group_buy/index`
        console.log('fastLoginUrl', fastLoginUrl)
        window.location.replace(fastLoginUrl);
    }

    console.log('currentPlatform',sessionStorage.getItem('currentPlatform'))
}

/**
 * app支付回调函数
 */
export function funPayNativeCallBack(result) {
    console.log('支付结果', result);
    if (result === 0) {
        //支付成功
        eventEmitter.emit("nativePayCallBack", {
            result: "0"
        });
    } else if (result === 1) {
        //支付失败
        eventEmitter.emit("nativePayCallBack", {
            result: "1"
        });
    }
}
if (process.client) {
window.funPayNativeCallBack = funPayNativeCallBack;
}

/**
 * app分享
 */
export function appShare(shareData) {
    const currentPlatform = platform();
    let defaultData = {
        title:'为了宝贝拼了「7天突破26个字母的标准发音」',
        image: 'https://qn-static.landi.com/uploadtoola4b025bbf7c19dfc16895b0ab0b776a2.png',
    }

    const resultData = Object.assign(defaultData, shareData);
    const href = `abc360://share?title=${resultData.title}&image=${resultData.image}&link=${resultData.link}`;

    console.log('分享链接',href);
    if(currentPlatform.iPhone){
        window.location.href = href;
    }
    if(currentPlatform.android){
        var result = prompt(href)
    }
}

/**
 * 打开下载页面
 */
export function groupbuy_downloadApp() {
    window.location.href = 'https://a.app.qq.com/o/simple.jsp?pkgname=com.abc360.student'
}

/**
 * 获取微信code
 */
export function getWXCode() {
    const urlData = {
        appid: process.env.APP_ID,
        redirect_uri: encodeURIComponent(`${process.env.BASE_URL}/group_buy/index`),
        response_type: 'code',
        scope: 'snsapi_base'
    }
    window.location.href = `https://open.weixin.qq.com/connect/oauth2/authorize?appid=${urlData.appid}&redirect_uri=${urlData.redirect_uri}?btnType=${this.btnType}&response_type=${urlData.response_type}&scope=${urlData.scope}#wechat_redirect`
}