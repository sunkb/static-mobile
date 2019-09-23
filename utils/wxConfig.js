
if (process.client) {
  var wx=require('weixin-js-sdk')
  console.log('wx',wx)
}
import axios from '~/utils/axios'

function getQueryString(name) {
  var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i')
  var r = window.location.search.substr(1).match(reg)
  if (r != null) return unescape(r[2])
  return null
}

const wxShare = () => new Promise(resolve => {
  if(window.location.href.indexOf('from') != -1 || window.location.href.indexOf('isappinstalled') != -1){
    // 二次分享url重定向 - 需要截取一次分享后微信自动拼接的url参数&from=singlemessage&isappinstalled=0
    // if(getQueryString('groupbuyCode')){
    //   window.location.href =window.location.href.split('&form')[0]
    // }else{
      // window.location.href = window.location.href.split('&')[0];  // 这里的split中的字符串会变换（?或&），主要看自己的url
      window.location.href = window.location.href.split('&')[0];  // 这里的split中的字符串会变换（?或&），主要看自己的url

    // }
    
  }
    axios.get(`Web/Api/getDyhSignature?url=${decodeURIComponent(window.location.href.split('#')[0])}`).then(res=>{
      resolve(res.data)
    })
  
})

//wx-js-sdk配置
export const WxShareConfig = async () => {
  const {
    appId,
    timestamp,
    nonceStr,
    signature
  } = await wxShare()
  let wxParam = {
    debug: false,//上线改成false
    appId: appId,
    timestamp: timestamp,
    nonceStr: nonceStr,
    signature: signature,
    jsApiList: [
      'checkJsApi',
      'updateAppMessageShareData',
      'updateTimelineShareData',
      'onMenuShareAppMessage',
      'onMenuShareTimeline',
      'chooseWXPay'
    ]
  }
  wx.config(wxParam)
  return wx
}
