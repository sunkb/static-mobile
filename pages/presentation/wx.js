if (process.client) {
  var wx=require('weixin-js-sdk')
}

function initWX(config) {
  wx.config({
    ...config,
    debug: false,
    jsApiList: [
      // 'updateAppMessageShareData',
      // 'updateTimelineShareData',
      'onMenuShareAppMessage',
      'onMenuShareTimeline'
    ]
  })
  return wx
}

function getWXCode(redirect_uri) {
  const urlData = {
    appid: process.env.APP_ID,
    redirect_uri: encodeURIComponent(redirect_uri),
    response_type: "code",
    scope: "snsapi_base"
  };
  window.location.href = `https://open.weixin.qq.com/connect/oauth2/authorize?appid=${urlData.appid}&redirect_uri=${urlData.redirect_uri}&response_type=${urlData.response_type}&scope=${urlData.scope}&state=1#wechat_redirect`;
}

export {
  initWX,
  getWXCode
}