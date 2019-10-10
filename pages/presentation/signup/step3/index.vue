<template>
  <div>
    <div class="top-step-bar">
      <step-bar :steps="steps" :progress="50"></step-bar>
    </div>
    <div class="page-content">
      <div class="title">
        <h1>上传视频</h1>
        <div class="title-action" @click="gotoStep2">
          <h3>查看题目</h3>
          <img class="title-action-img" :src="require('~/assets/presentation/img/arrow-right.png')"/>
        </div>
      </div>
      <h2>当前级别: {{ landiLevel }}</h2>
      <div class="topic-text">
        <h2 v-if="topic" class="topic-text-eng">{{ topic.en_topic_name }}</h2>
        <h3 v-if="topic" class="topic-text-chn">{{ topic.cn_topic_name }}</h3>
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
            <h3>正在上传 {{ videoStatus.progress }}%</h3>
          </div>
        </div>
        <div class="video-uploaded" v-if="videoStatus.type == 'uploaded'">
          <video controls class="video-uploaded-video">
            <source :src="videoSrc"/>
          </video>
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
    ></submit-area>
    <toast ref="toast"></toast>
  </div>
</template>

<script>
import { StepBar, SubmitArea } from '~/components/presentation'
import { STEPS, VIDEO_STATUS_TYPE, STROGE, API } from '~/pages/presentation/consts'
import FileUploader, { FILE_TYPE } from '~/utils/upload.js'
import Toast from '~/components/Toast'
import axios from '~/utils/axios'

export default {
  name: 'Signup',
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
        this.$router.push({ name: 'presentation-signup-step4', query: this.$route.query })
      }
    },
    gotoStep2() {
      this.$router.push({ name: 'presentation-signup-step2', query: this.$route.query })
    },
    async videoUpload() {
      this.$refs['toast'].showLoadingToast()
      const fileUploader = new FileUploader()
      await fileUploader.init()
      this.videoStatus = VIDEO_STATUS_TYPE.UPLOADING
      this.videoSrc = fileUploader.domain
      const uploadReturn = fileUploader.upload(this.$refs['videoUploadInput'].files[0], FILE_TYPE.VIDEO,
        this.fileUploadNext, this.fileUploadError, this.fileUploadComplete
      )
      this.$refs['toast'].hideLoadingToast()
      if (uploadReturn.error) {
        this.$refs['toast'].showToast(uploadReturn.error)
      }
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
    },
    async initDataFromAPI() {
      this.$refs['toast'].showLoadingToast()
      const activityID = this.$route.query.activity_id
      const data0 = await axios.get(`${API.MY_WORK}?activity_id=${activityID}`)
      this.$refs['toast'].hideLoadingToast()
      if (!data0.status) {
        return {}
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
          return { id: data0.data.id }
        } else {
          return {}
        }
      }
    }
  },
  async mounted() {
    const fromAPI = await this.initDataFromAPI()
    if (!fromAPI.id) {
      this.initDataFromStroge()
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~/assets/presentation/css/main.scss';

.title {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-right: 22.5px;

  &-action {
    h3 {
      color: $p-color-0;
      display: inline-block;
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
    font-weight: bold;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  &-chn {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
}

.video {
  text-align: center;
  margin-top: 22.5px;
  display: flex;
  justify-content: center;
  position: relative;

  $video-content-width: 640px;

  &-hint {
    width: 640px;
    height: 360px;
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
    background: #FAFAFA;
    border: 1.5px dashed #E6E6E6;

    &-hint {
      width: 195px;
      color: #B2B2B2;
      font-size: 24px;
      margin-top: 15px;
    }

    &-hintimg {
      width: 60px;
      height: 60px;
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
    }
  }

  &-upload {
    position: absolute;
    bottom: 0;
    transform: translateY(50%);

    &-action {
      width: 90px;
      height: 90px;
      display: flex;
      justify-content: center;
      align-items: center;
      background: #fff;
      border-radius: 45px;
      box-shadow: 0 0 37.5px -22.5px #666666;

      &-img {
        width: 64.5px;
        height: 64.5px;
      }
    }
  }
}
</style>