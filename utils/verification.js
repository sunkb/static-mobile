/**
 * 
 */
import axios from '~/utils/axios'

const initObj = {
  init (curObj) {
    var handler = cObj => {
      curObj.captchaObj = cObj
      cObj.onSuccess(() => {
        var result = cObj.getValidate()
        let data = {
          geetest_challenge: result.geetest_challenge,
          geetest_validate: result.geetest_validate,
          geetest_seccode: result.geetest_seccode
        }
        Object.assign(data, curObj.verificationData)
        axios.post(curObj.loginApi, data).then(res => {
          console.log('登录结果', res)
          curObj.handleVerification(res)
        })
      })
    }
    axios.get('/Web/Public/getGtStr?t=' + new Date().getTime()).then(res => {
      const data = res
      initGeetest(
        {
          gt: data.gt,
          challenge: data.challenge,
          offline: !data.success, // 表示用户后台检测极验服务器是否宕机
          new_captcha: data.new_captcha, // 用于宕机时表示是新验证码的宕机
          product: 'bind', // 产品形式，包括：float，popup
          width: '900px'
        },
        handler
      )
    })
  }
}

export default initObj
