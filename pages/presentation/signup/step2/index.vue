<template>
  <div>
    <div class="top-step-bar">
      <step-bar :steps="steps" :progress="30"></step-bar>
    </div>
    <div class="page-content">
      <h1>选择题目</h1>
      <div class="level">
        <h2>当前级别: {{ landiLevel }}</h2>
        <h3 class="level-hint">左右滑屏可以切换样板和主题</h3>
      </div>
      <div class="topic">
        <div class="topic-item" v-for="(item, index) in topics" :key="index">
          <player :options="{ 
            controls: true, 
            aspectRatio: '16:9',
            poster: item.video.poster,
            sources: [{ src: item.video.src }]
          }"></player>
          <h3 class="topic-item-eng topic-item-text">{{ item.text.eng }}</h3>
          <h3 class="topic-item-chn topic-item-text">{{ item.text.chn }}</h3>
        </div>
      </div>
      <div class="submit">
        <div class="submit-text">请勾选主题右下角选择当前参赛题目</div>
        <div :class="['submit-btn', topicSelected ? 'accent' : '']" @click="submit">上传我的视频</div>
      </div>
    </div>
  </div>
</template>

<script>
import { StepBar, Player } from '~/components/presentation'
import { STEPS } from '../consts'

export default {
  name: 'Signup',
  head() {
    return {
      title: '选择题目'
    }
  },
  components: {
    'step-bar': StepBar,
    'player': Player
  },
  data() {
    return {
      steps: STEPS,
      landiLevel: '',
      topics: [],
      topicSelected: false
    }
  },
  methods: {
    async getTopics() {
      // TODO: 通过接口数据获取题目
      this.topics = [
        {
          video: {
            src: 'http://qn-video.abc360.com/40bc5e48-ca2d-48c8-9ff8-7a80e8a7ecdf.mp4',
            poster: 'https://qn-static.landi.com/uploadtoolc64639d85d1b028a645b35a27acfe218.png'
          },
          text: {
            eng: 'We can\'t just leave environmental protection to our government evexxxxxxx',
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
    },
    submit() {
      
    }
  },
  async mounted() {
    this.landiLevel = this.$route.query.landiLevel
    await this.getTopics()
  }
}
</script>

<style lang="scss" scoped>
@import '~/assets/presentation/css/main.scss';

.level {
  padding: 3vw 0;
  display: flex;

  &-hint {
    margin-left: 3vw;
    &::before {
      content: '*';
      color: #F0552D;
    }
  }
}

.topic {
  white-space: nowrap;
  overflow-y: scroll;

  &-item {
    display: inline-block;
    margin-right: 5vw;
    width: 64vw;
    box-sizing: content-box;

    &-eng {
      color: #333333;
    }

    &-text {
      text-overflow: ellipsis;
      overflow: hidden;
    }
  }
}
</style>