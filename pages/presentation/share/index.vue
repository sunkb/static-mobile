<template>
  <div>
    <!-- TODO: 背景图 -->
    <!-- <img class="bg"  /> -->
    <div class="content">
      <video controls class="content-video">
        <source :src="stuData.videoSrc"/>
      </video>
      <h3 class="content-topic-eng">{{ topic.eng }}</h3>
      <h3 class="content-topic-chn">{{ topic.chn }}</h3>
      <div class="content-action">
        <div class="content-action-author">作者: {{ stuData.name }}</div>
        <div class="content-action-actions">
          <div class="content-action-actions-btn" style="background: #FFD750"><img :src="require('~/assets/presentation/img/share.png')" class="share"/></div>
          <div class="content-action-actions-btn" :style="{ background: liked ? '#F0552D' : '#E6E6E6' }" @click="clickLike"><img :src="require('~/assets/presentation/img/like.png')" class="like"/></div>
          <div class="content-action-actions-text">{{ stuData.like }}人点赞</div>
        </div>
      </div>
    </div>
    <div class="action">
      <div class="action-text">
        <span @click="gotoRegister" class="action-text-accent">免费领取</span>
        <span>兰迪试听课</span>
      </div>
      <div class="action-content" :style="{ background: themeColor }">
        <div class="action-content-text">去首页看看</div>
        <div class="action-content-deco0"></div>
        <div class="action-content-deco1"></div>
      </div>
    </div>
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
      liked: false
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
      window.location = 'https://www.landi.com/Api/FloorPage/index?from=zcyl&param=_bCOvjKLmiST2qHEDcTOScntrYF3wIzwj_ceg'
    },
    clickLike() {
      // TODO: 点赞和取消点赞
      this.liked = !this.liked
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
  width: 100vw;
  position: absolute;
  top: 0;
  left: 0;
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
    align-items: center;
    margin-top: 3vw;

    &-author {
      color: #333333;
      font-size: 3.46vw;
    }

    &-actions {
      display: flex;
      align-items: center;
      justify-content: space-evenly;
      width: 40vw;

      &-text {
        color: #B2B2B2;
        font-size: 3.2vw;
      }

      &-btn {
        width: 8vw;
        height: 8vw;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50%;
      }

      .share {
        width: 5vw;
        height: 5vw;
      }
      .like {
        width: 4.7vw;
        height: 4.6vw;
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

  &-text {
    text-align: center;
    font-size: 3.2vw;
    color: #B2B2B2;
    margin-bottom: 3vw;

    &-accent {
      color: $p-color-0;
    }
  }

  &-content {
    text-align: center;
    width: 100%;
    height: 13.3vw;
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