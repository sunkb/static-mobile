import REGION_DATA from './region_data'

const STEPS = ['报名信息', '选择题目', '上传视频', '确认提交', '我的作品']

const API = {
  STU_SHARE_DATA: '',
  ACTIVITY_DETAIL: '/Mobile/StudentActivityDetail/detail',
  MY_WORK: '/Mobile/StudentActivity/myWork',
  SUBMIT_WORK: '/Mobile/StudentActivity/submitWork',
  RANK: '/Mobile/StudentActivityDetail/rank',
  WX_SHARE: '/Mobile/StudentActivityDetail/share',
  WX_SHARE1: '/Mobile/StudentActivityDetail/share1',
  WX_INDEX_SHARE: '/Mobile/StudentActivityDetail/indexShare',
  WORK: '/Mobile/StudentActivityDetail/work',
  LIKE: '/Mobile/StudentActivityDetail/zan',
  UNLIKE: '/Mobile/StudentActivityDetail/unZan',
  GET_OPENID: '/Mobile/StudentActivityDetail/getOpenid'
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

const TOPICS = [
  {
    video: {
      src: 'http://qn-video.abc360.com/40bc5e48-ca2d-48c8-9ff8-7a80e8a7ecdf.mp4',
      poster: 'https://qn-static.landi.com/uploadtoolc64639d85d1b028a645b35a27acfe218.png'
    },
    text: {
      eng: 'We can\'t just leave environmental protection to our govern ment every bady.',
      chn: '环境保护不仅仅是政府的事情，我们在日常生活中能为保护环境做什么呢？'
    }
  },
  {
    video: {
      src: 'http://qn-video.abc360.com/40bc5e48-ca2d-48c8-9ff8-7a80e8a7ecdf.mp4',
      poster: 'https://qn-static.landi.com/uploadtoolc64639d85d1b028a645b35a27acfe218.png'
    },
    text: {
      eng: 'How do you spend your holiday?',
      chn: '你的假期是怎样度过的呢？'
    }
  }
]

const LANDI_LEVEL = [
  { name: 'PRE E', type: 1 },
  { name: 'E1-E2', type: 2 },
  { name: 'E3-E7', type: 3 }
]

const RANK_LIST = [
  { name: 'Nina', like: 2330, avatar: 'https://www.abc360.com/Public/abc360mp/img/p3.png' },
  { name: 'Saeah', like: 1330, avatar: 'https://qn-static.landi.com/uploadtoolec4589c658440d583bbfdbf6b88608fd.jpg' },
  { name: 'Alina', like: 330, avatar: 'https://qn-static.landi.com/uploadtoolec4589c658440d583bbfdbf6b88608fd.jpg' },
  { name: 'Liz', like: 200, avatar: 'https://qn-static.landi.com/uploadtoolec4589c658440d583bbfdbf6b88608fd.jpg' },
  { name: 'Roma', like: 100, avatar: 'https://qn-static.landi.com/uploadtoolec4589c658440d583bbfdbf6b88608fd.jpg' },
  { name: 'Luke', like: 100, avatar: 'https://qn-static.landi.com/uploadtoolec4589c658440d583bbfdbf6b88608fd.jpg' },
  { name: 'Dandi', like: 100, avatar: 'https://qn-static.landi.com/uploadtoolec4589c658440d583bbfdbf6b88608fd.jpg' },
  { name: 'Pengy', like: 100, avatar: 'https://qn-static.landi.com/uploadtoolec4589c658440d583bbfdbf6b88608fd.jpg' },
  { name: 'Zoe', like: 100, avatar: 'https://qn-static.landi.com/uploadtoolec4589c658440d583bbfdbf6b88608fd.jpg' },
  { name: 'Loft', like: 100, avatar: 'https://qn-static.landi.com/uploadtoolec4589c658440d583bbfdbf6b88608fd.jpg' },
  { name: 'Tina', like: 100, avatar: 'https://qn-static.landi.com/uploadtoolec4589c658440d583bbfdbf6b88608fd.jpg' },
  { name: 'Carol', like: 100, avatar: 'https://qn-static.landi.com/uploadtoolec4589c658440d583bbfdbf6b88608fd.jpg' },
  { name: 'Roma', like: 100, avatar: 'https://qn-static.landi.com/uploadtoolec4589c658440d583bbfdbf6b88608fd.jpg' },
  { name: 'Roma', like: 100, avatar: 'https://qn-static.landi.com/uploadtoolec4589c658440d583bbfdbf6b88608fd.jpg' },
  { name: 'Roma', like: 100, avatar: 'https://qn-static.landi.com/uploadtoolec4589c658440d583bbfdbf6b88608fd.jpg' },
  { name: 'Roma', like: 100, avatar: 'https://qn-static.landi.com/uploadtoolec4589c658440d583bbfdbf6b88608fd.jpg' },
  { name: 'Roma', like: 100, avatar: 'https://qn-static.landi.com/uploadtoolec4589c658440d583bbfdbf6b88608fd.jpg' },
  { name: 'Roma', like: 100, avatar: 'https://qn-static.landi.com/uploadtoolec4589c658440d583bbfdbf6b88608fd.jpg' },
  { name: 'Roma', like: 100, avatar: 'https://qn-static.landi.com/uploadtoolec4589c658440d583bbfdbf6b88608fd.jpg' },
  { name: 'Roma', like: 100, avatar: 'https://qn-static.landi.com/uploadtoolec4589c658440d583bbfdbf6b88608fd.jpg' },
]

const INDEX_STEPS = [
  '提交报名信息', '选择参赛题目', '上传参赛视频', '确认提交参赛', '分享好友点赞'
]

const VIDEO_STATUS_TYPE = {
  ADD: { 
    type: 'add',
    hint: '宝爸/宝妈们, 快来上传宝贝的视频',
  },
  UPLOADING: {
    type: 'uploading',
    progress: 0
  },
  ERROR: {
    type: 'error',
    hint: '上传的文件不符合条件,尝试重新上传,也可直接将作品以邮件形式发送至 bisai@rochi.com'
  },
  UPLOADED: {
    type: 'uploaded',
    hint: '上传成功, 点击重新上传'
  }
}

const STROGE = {
  LANDI_LEVEL: 'prt_landi_level',
  TOPIC: 'prt_topic',
  VIDEO_SRC: 'prt_video_src',
  STU_ENG_NAME: 'prt_stu_eng_name',
  FORM_DATA: 'prt_form_data'
}

export {
  STEPS,
  API,
  REGION_DATA,
  SIGNUP_DATA_RULE,
  TOPICS,
  VIDEO_STATUS_TYPE,
  STROGE,
  LANDI_LEVEL,
  RANK_LIST,
  INDEX_STEPS
}