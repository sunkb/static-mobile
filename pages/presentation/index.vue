<template>
  <div id="presentation" :style="presentationStyle">
    <div v-if="resData">
      <div class="topaction">
        <div class="topaction-rank" @click="gotoPage({ name: 'presentation-rank' })">
          <span v-if="haveWork">点赞排行</span>
        </div>
        <div class="topaction-rule" @click="gotoPage({ name: 'presentation-rule' })">活动规则</div>
      </div>
      <div class="content card">
        <h3>报名参赛，分享更多宝贝高光时刻</h3>
        <div class="action" @click="mainAction">
          <div class="action-content" :style="{ background: resData.button_color }">
            <div class="action-content-text">{{ haveWork ? '查看我的作品' : '我要报名参赛' }}</div>
            <div class="action-content-deco0"></div>
            <div class="action-content-deco1"></div>
          </div>
        </div>
        <div class="divide-title">
          <div class="divide-decohr"></div>
          <h1 style="color: #333333;">参赛作品样板</h1>
          <div class="divide-decohr"></div>
        </div>
        <div class="content-level">
          <div v-for="(item, index) in resData.combinations" :key="item.id" class="content-level-item" @click="selectLevel(index)"
            :style="levelSelectIndex == index ? { background: resData.button_color, color: '#fff' } : {}">{{ item.name }}</div>
        </div>
        <h3>以下2个演讲主题，任意选择其中之一报名即可</h3>
        <div class="content-video">
          <div class="content-video-item" v-for="(item) in resData.combinations[levelSelectIndex].topics" :key="item.id">
            <video v-if="item.videos.length > 0" controls class="content-video-item-video" :poster="item.videos[0].pic_url">
              <source :src="item.videos[0].url"/>
            </video>
            <video v-if="item.audios.length > 0 && item.videos.length == 0" controls class="content-video-item-video" :poster="item.audios[0].pic_url">
              <source :src="item.audios[0].url"/>
            </video>
            <div class="content-video-item-video" v-if="item.pics.length > 0 && item.videos.length == 0 && item.audios.length == 0">
              <img class="content-video-item-video-pic" :src="item.pics[0]"/>
            </div>
            <h3 class="content-video-item-eng content-video-item-text">{{ item.en_topic_name }}</h3>
            <h3 class="content-video-item-chn content-video-item-text">{{ item.cn_topic_name }}</h3>
          </div>
        </div>
      </div>
      <div class="description card">
        <div class="divide-title">
          <div class="divide-decohr"></div>
          <h1 style="color: #333333;">兰迪简介</h1>
          <div class="divide-decohr"></div>
        </div>
        <p>兰迪少儿英语是专注为4-12岁少儿提供优质的英语学习内容与体验的在线外教小班课教育品牌，引进牛津大学出版社原版最新美式英语 Starlight教材，优选“英美加”等英语为母语国家的外教。</p>
        <p>以“同伴学习”为教学理念，营造同伴竞争和同伴合作的场景，激发孩子学习英语的主动性，有效提升孩子的语言、思维及社交能力，让更多孩自如对话世界。</p>
      </div>
      <div class="step card">
        <div class="divide-title">
          <div class="divide-decohr"></div>
          <h1 style="color: #333333;">活动步骤</h1>
          <div class="divide-decohr"></div>
        </div>
        <div v-for="(item, index) in steps" :key="index" class="step-item">
          <div class="step-item-content">{{ item }}</div>
          <div class="step-item-deco"></div>
        </div>
      </div>
    </div>
    <toast ref="toast"></toast>
  </div>
</template>

<script>
import { INDEX_STEPS } from '~/pages/presentation/consts'
import {Login} from '~/utils/core/login'
import axios from '~/utils/axios'
import Toast from '~/components/Toast'

export default {
  name: 'Presentation',
  head() {
    return {
      title: "兰迪英语"
    }
  },
  components: {
    'toast': Toast
  },
  data() {
    return {
      levelSelectIndex: 0,
      steps: [],
      resData: null,
      haveWork: false,
      presentationStyle: { }
    }
  },
  methods: {
    gotoPage(page) {
      this.$router.push(page)
    },
    selectLevel(index) {
      this.levelSelectIndex = index
    },
    signup() {
      if (!this.resData.is_enable) {
        this.$refs['toast'].showToast('活动已结束')
        return 
      }
      if (!this.resData.status) {
        this.$refs['toast'].showToast('活动已关闭')
        return 
      }
      this.gotoPage({ name: 'presentation-signup' })
    },
    mainAction() {
      if (haveWork) {
        this.gotoPage({ name: 'presentation-signup-step5' })
      } else {
        this.signup()
      }
    }
  },
  created() {
    const login = new Login();
    login.autoLogin();
  },
  async mounted() {
    this.steps = INDEX_STEPS

    const res = await axios.get('/Mobile/StudentActivityDetail/detail?activity_id=1')
    if (res.status) { 
      this.resData = res.data
      document.title = this.resData.name
      this.presentationStyle.background = `url(${this.resData.background_pic_url}) 0 0 no-repeat / contain`
    } else {
      this.$refs['toast'].showToast(res.info)
    }
    const mywork = await axios.get('/Mobile/StudentActivity/myWork?activity_id=1')
    if (mywork.status) {
      if (mywork.data.id) { this.showRank = true }
    } else {
      this.$refs['toast'].showToast(mywork.info)
    }
  }
}
</script>

<style lang='scss' scoped>
@import '~/assets/presentation/css/main.scss';

#presentation {
  overflow: auto;
  background-attachment: local;
  -webkit-overflow-scrolling: auto;

  &::-webkit-scrollbar {
    display: none;
  }
}

.card {
  width: 690px;
  padding: 22.5px 30px;
  box-shadow: 0 2px 8px 0 #CCCCCC;
  position: relative;
  left: 50%;
  transform: translate(-50%, 0);
  background: #fff;
  border-radius: 10px;
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
      padding: 15px 22.5px;
    }
  }
  &-rule {
    border-top-left-radius: 30px;
    border-bottom-left-radius: 30px;
    box-shadow: 0 0 30px -22.5px #666666;
    padding: 15px 22.5px;
    background: #fff;
  }
}

.content {
  margin-top: 270px;
  text-align: center;

  &-level {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    margin-bottom: 22.5px;

    &-item {
      width: 150px;
      line-height: 60px;
      border: 1.5px solid #E6E6E6;
      border-radius: 30px;
      color: #333333;
      font-size: 26px;
    }
  }

  $topic-item-width: 500px;
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
        height: 280px;
        overflow: hidden;

        &-pic {
          width: inherit;
        }
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
    }
  }
}

.action {
  margin: 22.5px 0;
  display: inline-block;
  width: 600px;
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

    h1 {
      margin: 0 37.5px;
    }
  }
  &-decohr {
    width: 120px;
    border-bottom: 1.5px solid #EBEBEB;
  }
}

.description {
  margin-top: 37.5px;
  padding-bottom: 37.5px;
}

.step {
  margin: 37.5px 0;
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
      border: 1px solid #C0C7CC;
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
</style>