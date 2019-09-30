<template>
  <div>
    <div class="bg">
      <!-- TODO: 背景图 -->
      <!-- <img class="bg-img"  /> -->
    </div>
    <div class="content">
      <video controls class="content-video">
        <source :src="stuData.videoSrc"/>
      </video>
      <h3 class="content-topic-eng">{{ topic.eng }}</h3>
      <h3 class="content-topic-chn">{{ topic.chn }}</h3>
      <div class="content-action">
        <div class="content-action-author">作者: {{ stuData.name }}</div>
        <div class="content-action-actions">
          <div class="content-action-actions-share"></div>
          <div class="content-action-actions-like"></div>
          <div class="content-action-actions-text">{{ stuData.like }}人点赞</div>
        </div>
      </div>
    </div>
    <div class="action">
      <div class="action-content" :style="{ background: themeColor }">
        <div class="action-content-text">去首页看看</div>
        <div class="action-content-deco0"></div>
        <div class="action-content-deco1"></div>
      </div>
    </div>
    <!-- TODO: 修改海报图片 -->
    <poster-modal v-model="showPosterModal" @click="gotoRegister" :poster="0"></poster-modal>
  </div>
</template>

<script>
import axios from '~/utils/axios'
import { API, TOPICS } from '~/pages/presentation/consts'
import { PosterModal } from '~/components/presentation'

export default {
  name: 'Share',
  head() {
    return {
      title: '才艺视频'
    }
  },
  components: {
    'poster-modal': PosterModal
  },
  data() {
    return {
      stuData: {
        videoSrc: '',
        like: 0,
        name: '',
        topic: 0
      },
      themeColor: '#F0552D',
      topic: {
        eng: '',
        chn: ''
      },
      showPosterModal: false
    }
  },
  methods: {
    async getStuData() {
      // TODO: 获取数据
      this.stuData = {
        videoSrc: 'http://qn-video.abc360.com/40bc5e48-ca2d-48c8-9ff8-7a80e8a7ecdf.mp4',
        like: 2329,
        name: 'Jimmy',
        topic: 0
      }
      this.topic = TOPICS[this.stuData.topic].text
    },
    gotoRegister() {
      // TODO: 领取页面
      // window.location = ''
    }
  },
  async mounted() {
    await this.getStuData()
    document.title = this.stuData.name + '的才艺视频'

    //TODO: 获取主题色
    this.themeColor = '#F0552D'
  }
}
</script>

<style lang="scss" scoped>
@import '~/assets/presentation/css/main.scss';

.bg {
  background: #fff;
  width: 100vw;
  height: 100vw;
  position: absolute;
  top: 0;
  left: 0;

  &-img {
    width: inherit;
  }
}

.content {
  width: 92vw;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 5vw 3vw;
  box-shadow: 0 0 3vw -1.5vw #999999;

  &-video {
    width: 85.2vw;
  }

  &-topic-eng {
    color: #333333;
    margin-top: 3vw;
  }

  &-action {
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-top: 3vw;

    &-author {
      color: #333333;
      font-size: 3.46vw;
    }

    &-actions {
      display: flex;
      align-items: center;

      &-text {
        color: #B2B2B2;
        font-size: 3.2vw;
      }
    }
  }
}

.action {
  position: absolute;
  bottom: 5vw;
  left: 50%;
  transform: translateX(-50%);
  width: 86.6vw;
  height: 13.3vw;

  &-content {
    text-align: center;
    width: 100%;
    height: 100%;
    position: relative;
    line-height: 13.3vw;
    border-radius: 7vw;

    &-text {
      font-size: 4.5vw;
      color: #fff;
    }

    &-deco0 {
      position: absolute;
      top: 1.5vw;
      left: 7vw;
      width: 1.6vw;
      height: 1.6vw;
      background: rgba($color: #fff, $alpha: 0.4);
      border-radius: 0.8vw;
    }
    &-deco1 {
      position: absolute;
      top: 1.5vw;
      left: 10vw;
      width: 13.3vw;
      height: 1.6vw;
      background: rgba($color: #fff, $alpha: 0.4);
      border-radius: 0.8vw;
    }
  }
}

</style>