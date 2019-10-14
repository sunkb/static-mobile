<template>
  <div id="step2">
    <div class="top-step-bar">
      <step-bar :steps="steps" :progress="30"></step-bar>
    </div>
    <div class="page-content">
      <h1 class="title-content-space">选择题目</h1>
      <div class="level">
        <h2>当前级别: {{ landiLevel.name }}</h2>
        <h3 class="level-hint">左右滑屏可以切换样板和主题</h3>
      </div>
      <div class="topic">
        <div class="topic-item" v-for="(item, index) in topics" :key="item.id">
          <video
            v-if="srcType(item) == 'video' || srcType(item) == 'audio'"
            style="display: none;"
            :id="`video${index}`"
            controls
            :key="index"
            preload="auto"
            :src="getSrc(item)"
            class="topic-item-videoplay"
          />
          <div class="topic-item-video" @click="playFn(`video${index}`)">
            <div class="topic-item-video-play" v-if="item.videos.length > 0 || item.audios.length > 0"></div>
            <img class="topic-item-video-pic" :src="item.videos[0].pic_url" v-if="item.videos.length > 0"/>
            <img class="topic-item-video-pic" :src="item.audios[0].pic_url" v-if="item.audios.length > 0 && item.videos.length == 0"/>
            <img class="topic-item-video-pic" :src="item.pics[0]" v-if="item.pics.length > 0 && item.videos.length == 0 && item.audios.length == 0"/>
          </div>
          <div class="topic-item-selector" @click="selectTopic(item.id)">
            <img v-if="topicSelectID == item.id" class="topic-item-selector-img" :src="require('~/assets/presentation/img/topic-selector.png')"/>
          </div>
          <h3 class="topic-item-eng topic-item-text">{{ item.en_topic_name }}</h3>
          <h3 class="topic-item-chn topic-item-text">{{ item.cn_topic_name }}</h3>
        </div>
      </div>
      <submit-area 
        hint="请勾选主题右上角选择当前参赛题目" 
        btnText="上传我的视频"
        :isClickable="topicSelected"
        @submit="submit"
      ></submit-area>
    </div>
    <toast ref="toast"></toast>
  </div>
</template>

<script>
import { StepBar, SubmitArea } from '~/components/presentation'
import { STEPS, STROGE, API } from '~/pages/presentation/consts'
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
      title: '选择题目'
    }
  },
  components: {
    'step-bar': StepBar,
    'submit-area': SubmitArea,
    'toast': Toast
  },
  data() {
    return {
      steps: STEPS,
      landiLevel: '',
      topics: [],
      topicSelectID: -1,
      lastTopicSelectID: null,
      formData: null
    }
  },
  computed: {
    topicSelected() {
      return this.topicSelectID >= 0
    }
  },
  methods: {
    submit() {
      if (this.topicSelected) {
        if (this.lastTopicSelectID != this.topicSelectID) {
          delete this.formData.videoSrc
          delete this.formData.videoKey
        }
        this.formData.topicID = this.topicSelectID
        localStorage.setItem(STROGE.FORM_DATA, JSON.stringify(this.formData))
        this.gotoPage('presentation-signup-step3')
      }
    },
    selectTopic(id) {
      this.topicSelectID = id
    },
    srcType(item) {
      if (item.videos.length > 0) {
        return 'video'
      } else if (item.audios.length > 0) {
        return 'audio'
      } else {
        return 'pic'
      }
    },
    getSrc(item) {
      if (item.videos.length > 0) {
        return item.videos[0].url
      } else if (item.audios.length > 0) {
        return item.audios[0].url
      }
    },
    playFn(name){
      let video1 = document.getElementById(name)
      videoPlayerEvent(video1)
    },
  },
  async mounted() {
    if (window.WeixinJSBridge) {
      window.WeixinJSBridge.call('hideToolbar')
    }
    this.$refs['toast'].showLoadingToast()
    const formData = JSON.parse(localStorage.getItem(STROGE.FORM_DATA))
    const activityID = this.$route.query.activity_id
    if (formData.landiLevel.name) {
      this.landiLevel = formData.landiLevel
      this.topics = formData.landiLevel.topics
    } else {
      const detail = await axios.get(`${API.ACTIVITY_DETAIL}?activity_id=${activityID}`)
      if (!detail.status) {
        this.$refs['toast'].showToast(detail.info)
      } else {
        for (let item of detail.data.combinations) {
          if (item.id == formData.landiLevel.id) {
            formData.landiLevel = item
            break
          }
        }
        this.landiLevel = formData.landiLevel
        this.topics = formData.landiLevel.topics
      }
    }

    if (formData.topicID) {
      this.topicSelectID = this.lastTopicSelectID = formData.topicID
    }

    this.formData = formData
    this.$refs['toast'].hideLoadingToast()
  }
}
</script>

<style lang="scss" scoped>
@import '~/assets/presentation/css/main.scss';

#step2 {
  width: 100vw;
  height: 100vh;
  background: #fff;
}

.level {
  display: flex;
  align-items: center;

  &-hint {
    margin-left: 22.5px;
    &::before {
      content: '*';
      color: #F0552D;
    }
  }
}

$topic-item-width: 480px;
.topic {
  display: flex;
  white-space: nowrap;
  overflow-x: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
  
  &-item {
    display: inline-block;
    margin-right: 37.5px;
    box-sizing: content-box;
    position: relative;

    &-video {
      width: $topic-item-width;
      max-height: 300px;
      overflow: hidden;
      position: relative;

      &-pic {
        width: inherit;
      }
      &-play {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 100px;
        height: 100px;
        background: url('~assets/presentation/img/playbtn.png') 50% 50% / contain no-repeat;
      }
    }
    &-videoplay {
      width: $topic-item-width;
      max-height: 300px;
      overflow: hidden;
      position: absolute;
      top: 0;
      left: 0;
    }

    &-eng {
      color: #333333;
      max-height: 63px;
      box-sizing: content-box;
    }

    &-chn {
      padding-top: 15px;
      margin-top: -10px;
    }

    &-text {
      white-space: normal;
      width: $topic-item-width;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;  
      overflow: hidden;
    }

    &-selector {
      position: absolute;
      top: 18.75px;
      right: 18.75px;
      width: 52.5px;
      height: 52.5px;
      border-radius: 50%;
      background: #fff;
      box-shadow: 0 0 15px -5.25px #666666;
      display: flex;
      justify-content: center;
      align-items: center;

      &-img {
        width: 41.25px;
        height: 41.25px;
      }
    }
  }
}
</style>