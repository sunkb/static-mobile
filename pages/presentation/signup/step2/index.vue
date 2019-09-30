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
          <video controls class="topic-item-video" :poster="item.video.poster">
            <source :src="item.video.src"/>
          </video>
          <div class="topic-item-selector" @click="selectTopic(index)">
            <img v-if="topicSelectIndex == index" class="topic-item-selector-img" :src="require('~/assets/presentation/img/topic-selector.png')"/>
          </div>
          <h3 class="topic-item-eng topic-item-text">{{ item.text.eng }}</h3>
          <h3 class="topic-item-chn topic-item-text">{{ item.text.chn }}</h3>
        </div>
      </div>
      <submit-area 
        hint="请勾选主题右下角选择当前参赛题目" 
        btnText="上传我的视频"
        :isClickable="topicSelected"
        @submit="submit"
      ></submit-area>
    </div>
  </div>
</template>

<script>
import { StepBar, SubmitArea } from '~/components/presentation'
import { STEPS, TOPICS, STROGE } from '~/pages/presentation/consts'

export default {
  name: 'Signup',
  head() {
    return {
      title: '选择题目'
    }
  },
  components: {
    'step-bar': StepBar,
    'submit-area': SubmitArea
  },
  data() {
    return {
      steps: STEPS,
      landiLevel: '',
      topics: [],
      topicSelectIndex: -1,
      lastTopicSelectIndex: null
    }
  },
  computed: {
    topicSelected() {
      return this.topicSelectIndex >= 0
    }
  },
  methods: {
    async getTopics() {
      // TODO: 通过接口数据获取题目
      this.topics = TOPICS
    },
    submit() {
      // TODO: 提交信息
      if (this.topicSelected) {
        if (this.lastTopicSelectIndex != this.topicSelectIndex) {
          localStorage.removeItem(STROGE.VIDEO_SRC)
        }
        localStorage.setItem(STROGE.TOPIC, this.topicSelectIndex)
        this.$router.push({ name: 'presentation-signup-step3' })
      }
    },
    selectTopic(index) {
      this.topicSelectIndex = index
    }
  },
  async mounted() {
    this.landiLevel = localStorage.getItem(STROGE.LANDI_LEVEL) || ''
    await this.getTopics()
    const _topic = localStorage.getItem(STROGE.TOPIC)
    if (_topic) {
      this.topicSelectIndex = _topic
      this.lastTopicSelectIndex = _topic
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~/assets/presentation/css/main.scss';

.level {
  display: flex;
  align-items: center;

  &-hint {
    margin-left: 3vw;
    &::before {
      content: '*';
      color: #F0552D;
    }
  }
}

$topic-item-width: 64vw;
.topic {
  display: flex;
  white-space: nowrap;
  overflow-x: scroll;
  
  &-item {
    display: inline-block;
    margin-right: 5vw;
    box-sizing: content-box;
    position: relative;

    &-video {
      width: $topic-item-width;
    }

    &-eng {
      color: #333333;
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
      top: 2.5vw;
      left: 2.5vw;
      width: 7vw;
      height: 7vw;
      border-radius: 50%;
      background: #fff;
      box-shadow: 0 0 2vw -0.7vw #666666;
      display: flex;
      justify-content: center;
      align-items: center;

      &-img {
        width: 5.5vw;
        height: 5.5vw;
      }
    }
  }
}
</style>