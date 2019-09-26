import REGION_DATA from './region_data'

const STEPS = ['报名信息', '选择题目', '上传视频', '确认提交', '我的作品']

const API = {
  
}

const SIGNUP_DATA_RULE = {
  chnName: {
    rule: /[\u4e00-\u9fa5]{2,}/,
    message: '请输入正确的中文名'
  },
  engName: {
    rule: /^[a-z]{2,}$/i,
    message: '请输入正确的英文名'
  },
  landiLevel: {
    rule: /.+/,
    message: '请选择兰迪级别'
  },
  phone: {
    rule: /^(0|86|17951)?(13[0-9]|15[012356789]|166|17[3678]|18[0-9]|14[57])[0-9]{8}$/,
    message: '请输入正确的手机号码'
  },
  validateCode: {
    rule: /.+/,
    message: '请输入验证码'
  },
  province: {
    rule: /^[1-9]\d*(\.\d+)?$/,
    messgae: '请选择省份'
  },
  city: {
    rule: /^[1-9]\d*(\.\d+)?$/,
    messgae: '请选择城市'
  }
}

export {
  STEPS,
  API,
  REGION_DATA,
  SIGNUP_DATA_RULE
}