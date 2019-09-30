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
        <h2 v-if="topic" class="topic-text-eng">{{ topic.text.eng }}</h2>
        <h3 v-if="topic" class="topic-text-chn">{{ topic.text.chn }}</h3>
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
import { STEPS, TOPICS, VIDEO_STATUS_TYPE, STROGE } from '~/pages/presentation/consts'
import FileUploader, { FILE_TYPE } from '~/utils/upload.js'
import Toast from '~/components/Toast'

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
      videoSrc: ''
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
        this.$router.push({ name: 'presentation-signup-step4' })
      }
    },
    gotoStep2() {
      this.$router.push({ name: 'presentation-signup-step2' })
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
      this.videoSrc = `${this.videoSrc}/${res.key}`
      localStorage.setItem(STROGE.VIDEO_SRC, this.videoSrc)
      this.$refs['toast'].showToast('上传成功')
    }
  },
  mounted() {
    this.landiLevel = localStorage.getItem(STROGE.LANDI_LEVEL) || ''
    this.topic = TOPICS[localStorage.getItem(STROGE.TOPIC) || 0]
    this.videoStatus = VIDEO_STATUS_TYPE.ADD

    const _videoSrc = localStorage.getItem(STROGE.VIDEO_SRC)
    if (_videoSrc) {
      this.videoSrc = _videoSrc
      this.videoStatus = VIDEO_STATUS_TYPE.UPLOADED
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
  padding-right: 3vw;

  &-action {
    h3 {
      color: $p-color-0;
      display: inline-block;
    }

    &-img {
      width: 1.33vw;
    }
  }
}

.topic-text {
  margin-top: -1vw;
  width: 90vw;
  
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
  margin-top: 3vw;
  display: flex;
  justify-content: center;
  position: relative;

  $video-content-width: 85.3vw;

  &-hint {
    width: 85.3vw;
    height: 48vw;
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
    background: #FAFAFA;
    border: .2vw dashed #E6E6E6;

    &-hint {
      width: 26vw;
      color: #B2B2B2;
      font-size: 3.2vw;
      margin-top: 2vw;
    }

    &-hintimg {
      width: 8vw;
      height: 8vw;
    }

    &-progress {
      position: relative;
      width: 46.7vw;
      height: 1.33vw;
      margin-bottom: 3vw;

      &-bg {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: #E6E6E6;
        border-radius: 1vw;
      }

      &-fg {
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        background: $p-color-0;
        border-radius: 1vw;
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
      width: 12vw;
      height: 12vw;
      display: flex;
      justify-content: center;
      align-items: center;
      background: #fff;
      border-radius: 6vw;
      box-shadow: 0 0 5vw -3vw #666666;

      &-img {
        width: 8.6vw;
        height: 8.6vw;
      }
    }
  }
}
</style>