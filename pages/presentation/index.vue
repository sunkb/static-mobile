<template>
  <div id="presentation" :style="presentationStyle">
    <div v-if="resData">
      <div class="topaction">
        <div class="topaction-rank" @click="gotoPageWithHistory('presentation-rank')">
          <span v-if="haveWork">点赞排行</span>
        </div>
        <div class="topaction-rule" @click="gotoPageWithHistory('presentation-rule')">活动规则</div>
      </div>
      <div class="content card">
        <h3 style="margin-top: 35px;">报名参赛，分享更多宝贝高光时刻</h3>
        <div class="action" @click="mainAction" ref="centerAction">
          <div class="action-content" :style="{ background: resData.button_color }">
            <div class="action-content-text">{{ haveWork ? '查看我的作品' : '我要报名参赛' }}</div>
            <div class="action-content-deco0"></div>
            <div class="action-content-deco1"></div>
          </div>
        </div>
        <div class="divide-title">
          <div class="divide-decohr"></div>
          <div class="divide-title-text">参赛作品样板</div>
          <div class="divide-decohr"></div>
        </div>
        <div class="content-level">
          <div v-for="(item, index) in resData.combinations" :key="item.id" class="content-level-item" @click="selectLevel(index)"
            :style="levelSelectIndex == index ? { background: resData.button_color, color: '#fff', border: 'none' } : {}">{{ item.name }}</div>
        </div>
        <h3>以下演讲主题，任意选择其中之一即可</h3>
        <div class="content-video" ref="content-video">
          <div class="content-video-item" v-for="(item, index) in resData.combinations[levelSelectIndex].topics" :key="item.id">
            <video
              v-if="srcType(item) == 'video' || srcType(item) == 'audio'"
              style="display: none;"
              :id="`video${index}`"
              controls
              :key="index"
              preload="auto"
              :src="getSrc(item)"
            />
            <div class="content-video-item-video" @click="playFn(`video${index}`)">
              <div class="content-video-item-video-play" v-if="item.videos.length > 0 || item.audios.length > 0"></div>
              <img class="content-video-item-video-pic" :src="item.videos[0].pic_url" v-if="item.videos.length > 0"/>
              <img class="content-video-item-video-pic" :src="item.audios[0].pic_url" v-if="item.audios.length > 0 && item.videos.length == 0"/>
              <img class="content-video-item-video-pic" :src="item.pics[0]" v-if="item.pics.length > 0 && item.videos.length == 0 && item.audios.length == 0"/>
            </div>
            <h3 class="content-video-item-eng content-video-item-text" style="margin-top: 20px;">{{ item.en_topic_name }}</h3>
            <h3 class="content-video-item-chn content-video-item-text" style="font-size: 24px;">{{ item.cn_topic_name }}</h3>
          </div>
        </div>
      </div>
      <div class="description card">
        <div class="divide-title divide-title-space">
          <div class="divide-decohr"></div>
          <div class="divide-title-text">兰迪简介</div>
          <div class="divide-decohr"></div>
        </div>
        <p>兰迪少儿英语是专注为4-12岁少儿提供优质的英语学习内容与体验的在线外教小班课教育品牌，引进牛津大学出版社原版最新美式英语 Starlight教材，优选“英美加”等英语为母语国家的外教。</p>
        <p>以“同伴学习”为教学理念，营造同伴竞争和同伴合作的场景，激发孩子学习英语的主动性，有效提升孩子的语言、思维及社交能力，让更多孩自如对话世界。</p>
      </div>
      <div class="step card">
        <div class="divide-title divide-title-space">
          <div class="divide-decohr"></div>
          <div class="divide-title-text">活动步骤</div>
          <div class="divide-decohr"></div>
        </div>
        <div v-for="(item, index) in steps" :key="index" class="step-item">
          <div class="step-item-content">{{ item }}</div>
          <div v-if="index + 1 < steps.length" class="step-item-deco"></div>
        </div>
      </div>
      <div class="float-action" v-show="showFloatAction">
        <div class="action" @click="mainAction">
          <div class="action-content" :style="{ background: resData.button_color }">
            <div class="action-content-text">{{ haveWork ? '查看我的作品' : '我要报名参赛' }}</div>
            <div class="action-content-deco0"></div>
            <div class="action-content-deco1"></div>
          </div>
        </div>
      </div>
    </div>
    <toast ref="toast"></toast>
    <poster-modal v-model="showPosterModal" @click="gotoRegister" :poster="0"></poster-modal>
  </div>
</template>

<script>
import { INDEX_STEPS, API } from '~/pages/presentation/consts'
import {Login} from '~/utils/core/login'
import axios from '~/utils/axios'
import Toast from '~/components/Toast'
import { PosterModal } from '~/components/presentation'
import PrtMixin from '~/pages/presentation/mixin'
import { videoPlayerEvent } from '~/utils/videoPlay'

export default {
  name: 'Presentation',
  mixins: [PrtMixin],
  head() {
    return {
      title: "兰迪英语"
    }
  },
  components: {
    'poster-modal': PosterModal,
    'toast': Toast
  },
  data() {
    return {
      levelSelectIndex: 0,
      steps: [],
      resData: null,
      haveWork: false,
      showFloatAction: false,
      centerActionBottom: 0,
      presentationStyle: { },
      isClassing: false,
      showPosterModal: false
    }
  },
  methods: {
    selectLevel(index) {
      this.levelSelectIndex = index
      this.$refs['content-video'].scroll(0, 0)
    },
    signup() {
      if (!this.resData.is_enable) {
        this.$refs['toast'].showToast('活动已结束')
        return 
      }
      this.gotoPage('presentation-signup')
    },
    mainAction() {
      if (this.haveWork) {
        // this.gotoPage('presentation-signup-step5')
        window.location = `${process.env.BASE_URL}/presentation/signup/step5/?activity_id=${this.$route.query.activity_id}`
      } else {
        if (this.isClassing) {
          this.signup()
        } else {
          this.showPosterModal = true
        }
      }
    },
    handleScroll() {
      if (window.scrollY > this.centerActionBottom) {
        this.showFloatAction = true
      } else {
        this.showFloatAction = false
      }
    },
    gotoRegister() {
      window.location = 'https://www.landi.com/Api/FloorPage/index?from=zcyl&param=_bCOvjKLmiST2qHEDcTOScntrYF3wIzwj_ceg'
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
    }
  },
  created() {
    const login = new Login();
    login.autoLogin();
  },
  async mounted() {
    this.steps = INDEX_STEPS
    const activityID = this.$route.query.activity_id
    const res = await axios.get(`${API.ACTIVITY_DETAIL}?activity_id=${activityID}`)
    if (res.status) { 
      this.resData = res.data
      document.title = this.resData.name
      this.presentationStyle.background = `url(${this.resData.background_pic_url}) 0 0 / contain local no-repeat`
      this.presentationStyle.backgroundColor = '#fff'
    } else {
      this.$refs['toast'].showToast(res.info)
    }
    const mywork = await axios.get(`${API.MY_WORK}?activity_id=${activityID}`)
    if (mywork.status) {
      if (mywork.data.id) {
        this.haveWork = true 
      }
      this.isClassing = mywork.data.is_classing
    } else {
      this.$refs['toast'].showToast(mywork.info)
    }

    this.centerActionBottom = this.$refs.centerAction.getBoundingClientRect().bottom
    window.addEventListener('scroll', this.handleScroll)
  }
}
</script>

<style lang='scss' scoped>
@import '~/assets/presentation/css/main.scss';

#presentation {
  overflow: auto;
  -webkit-overflow-scrolling: auto;
  width: 100vw;

  &::-webkit-scrollbar {
    display: none;
  }
}

.card {
  width: 690px;
  padding: 22.5px 42px;
  box-shadow: 0 2px 8px 0 #CCCCCC;
  position: relative;
  left: 50%;
  transform: translate(-50%, 0);
  background: #fff;
}

.topaction {
  width: 100vw;
  display: flex;
  justify-content: space-between;
  color: #333333;
  font-size: 26px;
  margin-top: 60px;

  &-rank {
    border-top-right-radius: 30px;
    border-bottom-right-radius: 30px;
    box-shadow: 0 0 30px -22.5px #666666;
    background: #fff;
    
    span {
      display: inline-block;
      width: 144px;
      line-height: 64px;
      text-align: center;
      padding-right: 10px;
    }
  }
  &-rule {
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

.content {
  margin-top: 495px;
  text-align: center;

  &-level {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 22.5px;

    &-item {
      width: 150px;
      height: 60px;
      border: 1.5px solid #E6E6E6;
      border-radius: 30px;
      color: #333333;
      font-size: 26px;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-right: 20px;

      &:last-child {
        margin-right: 0;
      }
    }
  }

  $topic-item-width: 480px;
  &-video {
    display: flex;
    white-space: nowrap;
    overflow-x: scroll;
    margin-top: 22.5px;
    text-align: left;
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
        height: 360px;
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
    }
  }
}

.action {
  margin: 16.5px 0 60px;
  display: inline-block;
  width: 610px;
  height: 100px;

  &-content {
    text-align: center;
    width: 100%;
    height: 100%;
    position: relative;
    line-height: 100px;
    border-radius: 52.5px;

    &-text {
      font-size: 34px;
      color: #fff;
      font-weight: bold;
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

.divide {
  &-title {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin-bottom: 40px;

    &-space {
      margin-top: 20px;
    }

    &-text {
      margin: 0 37.5px;
      font-size: 28px;
      color: #333333;
      font-weight: bold;
      font-family: MicrosoftYaHei-Bold;
    }
  }
  &-decohr {
    width: 120px;
    border-bottom: 1px solid #E6E6E6;
  }
}

.description {
  margin-top: 37.5px;
  padding-bottom: 37.5px;

  p {
    line-height: 44px;
  }
}

.step {
  margin: 37.5px 0 173.5px;
  text-align: center;

  &-item {
    width: 500px;
    display: inline-block;
    color: #333333;
    margin-bottom: 22.5px;

    &-content { 
      width: 100%;
      line-height: 70px;
      font-size: 28px;
      border: 1.5px dashed #C0C7CC;
      border-radius: 37.5px;
      background: #FAFAFA;
      margin-bottom: 22.5px;
    }
    &-deco {
      border-left: 15px solid transparent;
      border-right: 15px solid transparent;
      border-top: 15px solid #333333;
      width: 30px;
      position: relative;
      left: 50%;
      transform: translateX(-50%)
    }
  }
}

.float-action {
  position: fixed;
  bottom: 0;
  left: 0;
  background: #fff;
  width: 100vw;
  height: 140px;
  box-shadow: 0 -2px 6px 0 #CCCCCC;
  text-align: center;
}
</style>