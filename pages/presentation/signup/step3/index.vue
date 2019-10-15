<template>
  <div id="step3">
    <div class="top-step-bar">
      <step-bar :steps="steps" :progress="50"></step-bar>
    </div>
    <div class="page-content">
      <div class="title">
        <div class="signup-title">上传视频</div>
        <div class="title-action" @click="gotoStep2">
          <div class="title-action-text">查看题目</div>
          <img class="title-action-img" :src="require('~/assets/presentation/img/arrow-right.png')"/>
        </div>
      </div>
      <div>
        <div>
          <div class="signup-title2">当前级别: {{ landiLevel }}</div>
          <div class="topic-text">
            <div v-if="topic" class="topic-text-eng">{{ topic.en_topic_name }}</div>
            <div v-if="topic" class="topic-text-chn">{{ topic.cn_topic_name }}</div>
          </div>
          <div class="video">
            <div class="video-hint" v-if="videoStatus.type != 'uploaded'">
              <img v-if="videoStatus.type == 'add'" class="video-hint-hintimg" :src="require('~/assets/presentation/img/wait-upload.png')"/>
              <img v-if="videoStatus.type == 'error'" class="video-hint-hintimg" :src="require('~/assets/presentation/img/upload-error.png')"/>
              <div v-if="videoStatus.hint" class="video-hint-hint">{{ videoStatus.hint }}</div>
              <div v-if="videoStatus.type == 'uploading'">
                <div class="video-hint-progress">
                  <div class="video-hint-progress-bg"></div>
                  <div class="video-hint-progress-fg" :style="{ width: `${videoStatus.progress}%` }"></div>
                </div>
                <div class="video-hint-progresstext">正在上传 {{ videoStatus.progress }}%</div>
              </div>
            </div>
            <div class="video-uploaded" v-if="videoStatus.type == 'uploaded'">
              <video
                style="display: none;"
                id="video-upload"
                controls
                preload="auto"
                :src="videoSrc"
                class="video-uploaded-videoplay"
              />
              <div class="video-uploaded-video" @click="playFn('video-upload')">
                <img class="video-uploaded-video-img" :src="`${videoSrc}?vframe/jpg/offset/2/h/960/`"/>
                <div class="video-uploaded-video-play"></div>
              </div>
            </div>
            <div class="video-upload" v-if="videoStatus.type != 'uploading'">
              <label class="video-upload-action" for="video-upload-input">
                <img class="video-upload-action-img" :src="require('~/assets/presentation/img/upload-add.png')"/>
              </label>
              <input id="video-upload-input" type="file" accept="video/*" ref="videoUploadInput" @change="videoUpload" style="display: none"/>
            </div>
          </div>
        </div>
        <submit-area 
          hint="视频要求时长10-90秒, 视频小于300M" 
          btnText="进入下一步"
          :isClickable="videoUploaded"
          @submit="nextStep"
          class="submitarea"
        ></submit-area>
      </div>
    </div>
    <toast ref="toast"></toast>
  </div>
</template>

<script>
import { StepBar, SubmitArea } from '~/components/presentation'
import { STEPS, VIDEO_STATUS_TYPE, STROGE, API } from '~/pages/presentation/consts'
import FileUploader, { FILE_TYPE } from '~/utils/upload.js'
import Toast from '~/components/Toast'
import axios from '~/utils/axios'
import PrtMixin from '~/pages/presentation/mixin'
import { videoPlayerEvent } from '~/utils/videoPlay'
import '~/pages/presentation/presentation'

export default {
  name: 'Signup',
  mixins: [PrtMixin],
  head() {
    return {
      title: '上传视频'
    }
  },
  components: {
    'step-bar': StepBar,
    'submit-area': SubmitArea,
    'toast': Toast,
  },
  data() {
    return {
      steps: STEPS,
      landiLevel: '',
      topic: null,
      videoStatus: {},
      videoSrc: '',
      formData: null
    }
  },
  computed: {
    videoUploaded() {
      return this.videoStatus.type == 'uploaded'
    }
  },
  methods: {
    nextStep() {
      if (this.videoUploaded) {
        this.gotoPage('presentation-signup-step4')
      }
    },
    gotoStep2() {
      this.gotoPage('presentation-signup-step2')
    },
    async videoUpload() {
      this.$refs['toast'].showLoadingToast()
      const fileUploader = new FileUploader()
      await fileUploader.init()
      this.videoSrc = fileUploader.domain
      const uploadReturn = fileUploader.upload(this.$refs['videoUploadInput'].files[0], FILE_TYPE.VIDEO,
        this.fileUploadNext, this.fileUploadError, this.fileUploadComplete
      )
      this.$refs['toast'].hideLoadingToast()
      if (uploadReturn.error) {
        this.$refs['toast'].showToast(uploadReturn.error)
        return
      }
      this.videoStatus = VIDEO_STATUS_TYPE.UPLOADING
    },
    fileUploadNext(res) {
      this.videoStatus.progress = Math.round(res.total.percent * 100) / 100
    },
    fileUploadError(res) {
      console.log(res)
      this.videoStatus = VIDEO_STATUS_TYPE.ERROR
      this.$refs['toast'].showToast(res.message)
    },
    fileUploadComplete(res) {
      this.videoStatus = VIDEO_STATUS_TYPE.UPLOADED
      this.videoSrc = `${this.videoSrc}${res.key}`
      this.formData.videoSrc = this.videoSrc
      this.formData.videoKey = res.key
      localStorage.setItem(STROGE.FORM_DATA, JSON.stringify(this.formData))
      this.$refs['toast'].showToast('上传成功')
    },
    initDataFromStroge() {
      const formData = JSON.parse(localStorage.getItem(STROGE.FORM_DATA))
      if (!(formData && formData.landiLevel && formData.landiLevel.topics)) {
        return false
      }

      this.landiLevel = formData.landiLevel.name
      for (let item of formData.landiLevel.topics) {
        if (item.id == formData.topicID) {
          this.topic = item
        }
      }
      if (formData.videoSrc) {
        this.videoSrc = formData.videoSrc
        this.videoStatus = VIDEO_STATUS_TYPE.UPLOADED
      } else {
        this.videoStatus = VIDEO_STATUS_TYPE.ADD
      }
      
      this.formData = formData
      return true
    },
    async initDataFromAPI() {
      this.$refs['toast'].showLoadingToast()
      const activityID = this.$route.query.activity_id
      const data0 = await axios.get(`${API.MY_WORK}?activity_id=${activityID}`)
      this.$refs['toast'].hideLoadingToast()
      if (!data0.status) {
        this.$refs['toast'].showToast(data0.info)
        return false
      } else {
        if (data0.data.id) {
          this.landiLevel = data0.data.combination_name
          this.topic = {
            cn_topic_name: data0.data.cn_topic_name,
            en_topic_name: data0.data.en_topic_name,
          }
          this.videoSrc = data0.data.video_url
          this.videoStatus = VIDEO_STATUS_TYPE.UPLOADED

          const video = data0.data.video_url.split('/')
          const videoKey = video[video.length - 1]
          this.formData = {
            landiLevel: { id: data0.data.combination_id },
            topicID: data0.data.topic_id,
            videoKey: videoKey,
            workID: data0.data.id,
            address: data0.data.address
          }
          return true
        } else {
          return false
        }
      }
    },
    playFn(name){
      let video1 = document.getElementById(name)
      videoPlayerEvent(video1)
    },
  },
  async mounted() {
    const result = this.initDataFromStroge()
    if (!result) {
      await this.initDataFromAPI()
    }
    localStorage.setItem(STROGE.FORM_DATA, JSON.stringify(this.formData))
  }
}
</script>

<style lang="scss" scoped>
@import '~/assets/presentation/css/main.scss';

#step3 {
  width: 100vw;
  height: 100vh;
  background: #fff;
}

.title {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-right: 22.5px;

  &-action {
    &-text {
      color: $p-color-0;
      display: inline-block;
      font-size: 26px;
      margin-bottom: 30px;
    }

    &-img {
      width: 10px;
    }
  }
}

.topic-text {
  margin-top: -7.5px;
  width: 675px;
  
  &-eng {
    font-size: 26px;
    color: #333333;
    letter-spacing: 0;
    margin-bottom: 14px;
  }

  &-chn {
    font-size: 24px;
    color: #B2B2B2;
    letter-spacing: 0;
  }
}

.video {
  text-align: center;
  margin-top: 30px;
  display: flex;
  justify-content: center;
  position: relative;

  $video-content-width: 528px;
  $video-conten-height: 297px;

  &-hint {
    width: $video-content-width;
    height: $video-conten-height;
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
    background: #FAFAFA;
    border: 1px dashed #E6E6E6;

    &-progresstext {
      font-size: 26px;
      color: #B2B2B2;
      margin-top: 20px;
    }

    &-hint {
      width: 195px;
      color: #B2B2B2;
      font-size: 24px;
      margin-top: 15px;
    }

    &-hintimg {
      width: 50px;
      height: 50px;
    }

    &-progress {
      position: relative;
      width: 350px;
      height: 10px;
      margin-bottom: 22.5px;

      &-bg {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: #E6E6E6;
        border-radius: 7.5px;
      }

      &-fg {
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        background: $p-color-0;
        border-radius: 7.5px;
      }
    }
  }

  &-uploaded {
    &-video {
      width: $video-content-width;
      height: $video-conten-height;
      overflow: hidden;
      position: relative;
      background: #E6E6E6;
      display: flex;
      justify-content: center;
      align-items: center;

      &-play {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 76px;
        height: 76px;
        background: url('~assets/presentation/img/playbtn.png') 50% 50% / contain no-repeat;
      }

      &-img {
        height: $video-conten-height;
      }
    }
  }

  &-upload {
    position: absolute;
    left: 50%;
    bottom: 0;
    transform: translate(-50%, 50%);

    &-action {
      width: 80px;
      height: 80px;
      display: flex;
      justify-content: center;
      align-items: center;
      background: #fff;
      border-radius: 40px;
      box-shadow: 0 2px 4px 0 #DEE6EC;

      &-img {
        width: 64px;
        height: 64px;
      }
    }
  }
}

.submitarea {

}
</style>