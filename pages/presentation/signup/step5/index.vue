<template>
  <div>
    <div class="top-step-bar">
      <step-bar :steps="steps" :progress="100"></step-bar>
    </div>
    <div class="page-content">
      <div class="title">
        <h1>我的作品</h1>
        <div class="title-action" @click="gotoStep3" v-if="canReUpload">
          <h3>重新上传</h3>
          <img class="title-action-img" :src="require('~/assets/presentation/img/arrow-right.png')"/>
        </div>
      </div>
      <h2>报名学生: {{ stuEngName }}</h2>
      <div class="topic-text">
        <h2 v-if="topic" class="topic-text-eng">{{ topic.text.eng }}</h2>
        <h3 v-if="topic" class="topic-text-chn">{{ topic.text.chn }}</h3>
      </div>
      <div class="video">
        <video controls v-if="videoSrc && videoSrc != ''" class="video-content">
          <source :src="videoSrc"/>
        </video>
      </div>
    </div>
    <div class="action">
      <div class="action-btn action-left" @click="gotoIndex">去首页看看</div>
      <div class="action-btn action-right" @click="shareToFrends">分享给好友</div>
    </div>
    <toast ref="toast"></toast>
    <div class="sharehelp" v-if="showShareHelp" @click="() => { showShareHelp = false }">
      <img class="sharehelp-img" :src="require('~/assets/presentation/img/share-help.png')" />
    </div>
  </div>
</template>

<script>
import { StepBar } from '~/components/presentation'
import Toast from '~/components/Toast'
import { STEPS, STROGE, TOPICS } from '~/pages/presentation/consts'

export default {
  name: 'Signup',
  head() {
    return {
      title: '我的作品'
    }
  },
  components: {
    'step-bar': StepBar,
    'toast': Toast
  },
  data() {
    return {
      steps: STEPS,
      stuEngName: '',
      topic: null,
      videoSrc: '',
      canReUpload: true,
      showShareHelp: false
    }
  },
  methods: {
    gotoStep3() {
      this.$router.push({ name: 'presentation-signup-step3' })
    },
    gotoIndex() {
      this.$router.push({ name: 'presentation' })
    },
    shareToFrends() {
      this.showShareHelp = true
    }
  },
  mounted() {
    // TODO: 获取是否能够重新上传
    this.stuEngName = localStorage.getItem(STROGE.STU_ENG_NAME) || ''
    this.topic = TOPICS[localStorage.getItem(STROGE.TOPIC) || 0]
    // TODO: 获取视频
    this.videoSrc = localStorage.getItem(STROGE.VIDEO_SRC) || ''
    // TODO: 修改分享链接
  }
}
</script>

<style lang="scss" scoped>
@import '~/assets/presentation/css/main.scss';

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
  margin-top: 3vw;
  display: flex;
  justify-content: center;

  &-content {
    width: 85vw;
  }
}

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

.action {
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  position: fixed;
  left: 0;
  bottom: 5vw;

  &-btn {
    width: 42.6vw;
    line-height: 13.3vw;
    font-size: 4.53vw;
    font-family: MicrosoftYaHeiLight;
    color: #fff;
    text-align: center;
  }

  &-left {
    background: #16C8D2;
  }

  &-right {
    background: #FFD750;
  }
}

.sharehelp {
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  background: rgba($color: #000000, $alpha: 0.6);

  &-img {
    width: 72vw;
    position: fixed;
    left: 18vw;
    top: 0;
  }
}
</style>