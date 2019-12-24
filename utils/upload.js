import axios from '~/utils/axios'
import * as qiniu from 'qiniu-js'

const TYPE = {
  'video': {
    mimeType: [
      "video/mp4",
      "video/mpeg",
      "video/quicktime",
      "video/x-msvideo",
      "video/ogg",
      "video/webm",
      "application/vnd.rn-realmedia-vbr"
    ],
    limit: 300
  },
  'video2':{
    mimeType: [
      "video/mp4",
      "video/mpeg",
      "video/quicktime",
      "video/x-msvideo",
      "video/ogg",
      "video/webm",
      "application/vnd.rn-realmedia-vbr"
    ],
    limit: 300
  }
}
const FILE_TYPE = {
  VIDEO: 'video',
  VIDEO2:'video2'
}

export default class FileUploader {
  async init(type) { // type类型为1，表示周作业打卡所使用的七牛接口地址
    let qiniuApi = '/Mobile/StudentActivity/token'
    if(type === 1) {
      qiniuApi = '/mobile/StudentWeekHomework/token'
    }
    const res = await axios.get(qiniuApi)
    if (res.status) {
      this.domain = res.data.domain
      this.token = res.data.uptoken
    }
  }

  upload(file, type, next, error, complete) {
    let limit = 30
    const putExtra = {}
    if (type && TYPE[type]) {
      limit = TYPE[type].limit
      putExtra.mimeType = TYPE[type].mimeType
    }
    if (file.size > limit * 1024 * 1024) {
      return {
        error: `上传文件不能大于${limit}MB`
      }
    }

    const arr = file.name.split('.')
    const key = `${UUIDGeneratorBrowser()}.${arr[arr.length - 1]}`
    const subscription = qiniu.upload(file, key, this.token, putExtra)
    subscription.subscribe({ next, error, complete })
    return {
      subscription
    }
  }
}

export {
  FILE_TYPE
}

const UUIDGeneratorBrowser = () =>
([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, c =>
    (c ^ (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))).toString(16)
)