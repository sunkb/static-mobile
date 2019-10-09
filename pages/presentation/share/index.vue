<template>
  <div id="share">
    <div class="topaction">
      <div></div>
      <div class="topaction-rank" @click="gotoPage('presentation-rank')">点赞排行</div>
    </div>
    <div class="content">
      <video controls class="content-video">
        <source :src="stuData.videoSrc"/>
      </video>
      <h3 class="content-topic-eng">{{ topic.en_topic_name }}</h3>
      <h3 class="content-topic-chn">{{ topic.cn_topic_name }}</h3>
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
    <toast ref="toast"></toast>
  </div>
</template>

<script>
import axios from '~/utils/axios'
import { API } from '~/pages/presentation/consts'
import { getWXCode } from '~/pages/presentation/wx'
import Toast from '~/components/Toast'

export default {
  name: 'Share',
  head() {
    return {
      title: '才艺视频'
    }
  },
  components: {
    'toast': Toast
  },
  data() {
    return {
      stuData: {
        videoSrc: '',
        like: 0,
        name: ''
      },
      themeColor: '#fff',
      topic: {
        cn_topic_name: '',
        en_topic_name: ''
      },
      liked: false
    }
  },
  methods: {
    clickLike() {
      const url = `${window.location.origin}${window.location.pathname}?activity_id=${activity_id}&work_id=${work_id}&like=${!this.liked}`
      window.location = url
    },
    gotoPage(name) {
      this.$router.push({ name, query: this.$route.query })
    },
    async initData() {
      const { activity_id, code, work_id, like } = this.$route.query
      const url = `${window.location.origin}${window.location.pathname}?activity_id=${activity_id}&work_id=${work_id}`
      const work = await axios.get(`${API.WORK}?activity_id=${activity_id}&url=${url}&work_id=${work_id}%code=${code}`)
      if (!work.status) {
        this.$refs['toast'].showToast(work.info)
        return
      }

      document.title = work.data.activity_name
      this.themeColor = work.data.button_color
      this.topic = {
        cn_topic_name: work.data.cn_topic_name,
        en_topic_name: work.data.en_topic_name,
      }
      this.stuData = {
        videoSrc: work.data.video_url,
        like: work.data.zan,
        name: work.data.en_name
      }
      this.liked = work.data.is_zan
    },
    async initLike() {
      const { activity_id, code, work_id, like } = this.$route.query
      let res = null
      if (like) {
        res = await axios.get(`${API.LIKE}?code=${code}&work_id=${work_id}`)
        if (!res.status) {
          this.$refs['toast'].showToast(res.info)
        }
      } else {
        res = await axios.get(`${API.UNLIKE}?code=${code}&work_id=${work_id}`)
        if (!res.status) {
          this.$refs['toast'].showToast(res.info)
        }
      }
      await this.initData()
    }
  },
  async mounted() {
    this.$refs['toast'].showLoadingToast()
    const { code } = this.$route.query
    if (code == null) {
      getWXCode(window.location.href)
      return
    }

    if (like) {
      await this.initLike()
    } else {
      await this.initData()
    }
    this.$refs['toast'].hideLoadingToast()
  }
}
</script>

<style lang="scss" scoped>
@import '~/assets/presentation/css/main.scss';

#share {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}

.content {
  width: 690px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 37.5px 22.5px;
  box-shadow: 0 0 22.5px -11.25px #999999;
  background: #fff;
  z-index: 999;

  &-video {
    width: 639px;
  }

  &-topic-eng {
    color: #333333;
    margin-top: 22.5px;
  }

  &-action {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 22.5px;

    &-author {
      color: #333333;
      font-size: 26px;
    }

    &-actions {
      display: flex;
      align-items: center;
      justify-content: space-evenly;
      width: 300px;

      &-text {
        color: #B2B2B2;
        font-size: 24px;
      }

      &-btn {
        width: 60px;
        height: 60px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50%;
      }

      .share {
        width: 37.5px;
        height: 37.5px;
      }
      .like {
        width: 35.25px;
        height: 34.5px;
      }
    }
  }
}

.action {
  background: #fff;
  width: 100vw;
  padding: 37.5px 0;
  text-align: center;

  &-text {
    text-align: center;
    font-size: 24px;
    color: #B2B2B2;
    margin-bottom: 22.5px;

    &-accent {
      color: $p-color-0;
    }
  }

  &-content {
    display: inline-block;
    text-align: center;
    width: 650px;
    position: relative;
    line-height: 100px;
    border-radius: 50px;

    &-text {
      font-size: 33.75px;
      color: #fff;
    }

    &-deco0 {
      position: absolute;
      top: 11.25px;
      left: 52.5px;
      width: 12px;
      height: 12px;
      background: rgba($color: #fff, $alpha: 0.4);
      border-radius: 6px;
    }
    &-deco1 {
      position: absolute;
      top: 11.25px;
      left: 75px;
      width: 100px;
      height: 12px;
      background: rgba($color: #fff, $alpha: 0.4);
      border-radius: 6px;
    }
  }
}

.topaction {
  width: 100vw;
  display: flex;
  justify-content: space-between;
  color: #333333;
  font-size: 26px;
  margin-top: 60px;

  &-rank {
    border-top-left-radius: 30px;
    border-bottom-left-radius: 30px;
    box-shadow: 0 0 30px -22.5px #666666;
    background: #fff;
    width: 144px;
    line-height: 64px;
    text-align: center;
    padding-left: 10px;
  }
}
</style>