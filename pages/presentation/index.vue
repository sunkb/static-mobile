<template>
  <div id="presentation" :style="presentationStyle">
    <div v-if="resData">
      <div class="topaction">
        <div class="topaction-rank" @click="gotoPageWithHistory('presentation-rank')">
          <span>点赞排行</span>
        </div>
        <div class="topaction-rule" @click="gotoPageWithHistory('presentation-rule')">活动规则</div>
      </div>
      <div class="content card">
        <div class="content-title">报名参赛，分享更多宝贝高光时刻</div>
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
        <div class="content-topictitle">以下演讲主题，任意选择其中之一即可</div>
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
            <div class="content-video-item-eng content-video-item-text">{{ item.en_topic_name }}</div>
            <div class="content-video-item-chn content-video-item-text">{{ item.cn_topic_name }}</div>
          </div>
        </div>
      </div>
      <!-- 兰迪学员风采 -->
      <div class="appearance card" v-if="appearanceShow">
        <div class="divide-title divide-title-space">
          <div class="divide-decohr"></div>
          <div class="divide-title-text">{{goodWorkData.activity_name}}</div>
          <div class="divide-decohr"></div>
        </div>
        <div class="appearance-video">
          <video
            preload="auto"
            style="display: none;"
            id="appearance1"
            controls
            :src="goodWorkData.video_url"
          />
          <div class="appearance-video-item" @click="playFn('appearance1')">
            <div class="content-video-item-video-play"></div>
            <img class="content-video-item-video-pic" :src="goodWorkData.video_url + '?vframe/jpg/offset/2/h/960/'"/>
          </div>
        </div>
        <p class="appearance-english">{{goodWorkData.en_topic_name}}</p>
        <p class="appearance-chinese">{{goodWorkData.cn_topic_name}}</p>
        <div class="appearance-info"> 
          <div>作者：{{goodWorkData.nickname}}</div>
          <div class="appearance-info-index">推荐指数：<div style="color: red;">★★★★★</div></div>
        </div>
        <div class="appearance-cut" @click="cutStudentMien"><p>再看看</p></div>
      </div>
      <!-- 兰迪简介 -->
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
    <poster-modal v-model="loginRegistModal" @click="gotoLoginRegister" :poster="2"></poster-modal>
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
import { initWX } from '~/pages/presentation/wx'

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
      // isClassing: false,
      showPosterModal: false,
      loginRegistModal: false,
      isLogin:true,
      appearanceShow: true, // 兰迪学员风采模块
      curUserFrom: '', // 当前用户的渠道来源
      goodWorkData: {},// 兰迪学员风采模块--学员数据
      goodWorkPage: 1, // 兰迪学员风采模块--分页页码
      hasNext: true // 兰迪学员风采模块--判断是否还存在下个数据
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
      if(!this.isLogin) {
        this.loginRegistModal = true
        return
      }

      if (this.haveWork) {
        // this.gotoPage('presentation-signup-step5')
        window.location = `${process.env.BASE_URL}/presentation/signup/step5/?activity_id=${this.$route.query.activity_id}`
      } else {
        // if (this.isClassing) {
        //   this.signup()
        // } else {
        //   this.showPosterModal = true
        // }
        this.signup()
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
    },
    async updateWXShare() {
      const resWX = await axios.post(`${API.WX_INDEX_SHARE}`, {
        url: window.location.href.split('#')[0],
        activity_id: this.$route.query.activity_id,
        sid: window.localStorage.getItem("userSid")
      })
      if (!resWX.status) {
        this.$refs['toast'].showToast(resWX.info)
        return
      }
      const wxConfig = resWX.data.wx_config;
      const wx_data = resWX.data.wx_data;
      const wx = initWX({
        appId: wxConfig.appId,
        timestamp: wxConfig.timestamp,
        nonceStr: wxConfig.nonceStr,
        signature: wxConfig.signature,
      });
      
      const shareObj = { 
        title: wx_data.share_title,
        desc: wx_data.share_desc,
        link: wx_data.share_link,
        imgUrl: wx_data.share_img_url,
        // title: 'title',
        // desc: 'desc',
        // link: window.location.href,
        // imgUrl: 'https://qn-static.landi.com/uploadtool74007a0ed04a743f8ac9c5aebcc97dab.jpg',
      }
      wx.ready(() => {
        wx.updateAppMessageShareData(shareObj)
        wx.updateTimelineShareData(shareObj)
        wx.onMenuShareAppMessage(shareObj);
        wx.onMenuShareTimeline(shareObj);
        wx.error(function(res){
          console.log(res);
        });
      })
    },
    //登录或者注册模式选择
    async gotoLoginRegister(mode) {
      let redirect_url = window.location.href;
      redirect_url = removeParam('code',redirect_url);
      redirect_url = removeParam('state',redirect_url);
      redirect_url = encodeURIComponent(redirect_url);
      if(mode === "register") {
        const loginUrl = process.env.ENV_API+'/mobile/login/index/#/login?redirect_url='+redirect_url;
        window.location = loginUrl;
        return
      } else {
        const params = {
          from: this.curUserFrom,
          tjm: window.localStorage.getItem("userSid")
        }
        try {
          const resultData = await axios.post(`${API.FROM_TJM}`, params)
          if(resultData.status) {
            window.location = process.env.ENV_API+'/mobile/Login#/register?redirect_url='+redirect_url;
          } else {
            console.log(resultData.info)
          }
        } catch (err) {
          console.log(err)
        }
      }
    },
    //切换兰迪学员风采
    async cutStudentMien() {
      const activityID = this.$route.query.activity_id
      if(!this.hasNext) {
        this.hasNext = true
        this.goodWorkPage = 1
      }
      try {
        const goodWorkData = await axios.get(`${API.GET_GOOD_WORK}?activity_id=${activityID}&page=${this.goodWorkPage}`)
        if(goodWorkData.status) {
          this.goodWorkData = goodWorkData.data.work
          this.hasNext = goodWorkData.data.has_next
          this.goodWorkPage++
        } else {
          this.appearanceShow = false
          console.log(goodWorkData.info)
        }
      } catch (err) {
        this.appearanceShow = false
        console.log(err)
      }
    },
    async getSid () {
      try {
        const userSidData = await axios.get(`${API.MY_SID}`)
        if (userSidData.status) {
          window.localStorage.setItem("userSid", userSidData.data.sid) // 获取当前用户的sid,且在localStorage中存储
        } 
      } catch (error) {
        console.log(error)  
      }
    }
  },
  created() {
    const login = new Login();
    login.autoLogin();
  },
  async mounted() {
    if (this.$route.query.sid) {
      window.localStorage.setItem("userSid", this.$route.query.sid) // 为空不设置
    }
    await this.cutStudentMien()
    await this.getSid()
    this.steps = INDEX_STEPS
    const activityID = this.$route.query.activity_id
    const res = await axios.get(`${API.ACTIVITY_DETAIL}?activity_id=${activityID}`)
    if (res.status) { 
      this.resData = res.data
      document.title = this.resData.name
      this.presentationStyle.background = `url(${this.resData.background_pic_url}) 0 0 / contain local no-repeat`
      this.presentationStyle.backgroundColor = '#fff'
      this.curUserFrom = this.resData.ad_source_id // 获取当前的渠道来源
    } else {
      this.$refs['toast'].showToast(res.info)
    }
    try {
      const mywork = await axios.get(`${API.MY_WORK}?activity_id=${activityID}`)
      if (mywork.status) {
        if (mywork.data.id) {
          this.haveWork = true 
        }
        // this.isClassing = mywork.data.is_classing
      } else {
        this.$refs['toast'].showToast(mywork.info)
      }
    } catch (error) {
      console.log(error)
      if(error.response.status === 401){ // 用于判断是否登录过
        this.isLogin = false
        console.log(error.response.info)
      }
    }
    await this.updateWXShare()

    this.centerActionBottom = this.$refs.centerAction.getBoundingClientRect().bottom
    window.addEventListener('scroll', this.handleScroll)
  }
}

function removeParam(key, sourceURL) {
  var rtn = sourceURL.split("?")[0],
      param,
      params_arr = [],
      queryString = (sourceURL.indexOf("?") !== -1) ? sourceURL.split("?")[1] : "";
  if (queryString !== "") {
      params_arr = queryString.split("&");
      for (var i = params_arr.length - 1; i >= 0; i -= 1) {
          param = params_arr[i].split("=")[0];
          if (param === key) {
              params_arr.splice(i, 1);
          }
      }
      rtn = rtn + "?" + params_arr.join("&");
  }
  return rtn;
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
  padding: 40px 20px 50px;
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

  &-title {
    font-family: MicrosoftYaHei;
    font-size: 24px;
    color: #B2B2B2;
    margin-top: 20px;
  }

  &-level {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 30px;

    &-item {
      width: 150px;
      height: 60px;
      border: 1px solid #E6E6E6;
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

  &-topictitle {
    font-family: MicrosoftYaHei;
    font-size: 24px;
    color: #B2B2B2;
  }

  $topic-item-width: 480px;
  &-video {
    display: flex;
    white-space: nowrap;
    overflow-x: scroll;
    margin-top: 40px;
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
          height: inherit;
        }
        &-play {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 76px;
          height: 76px;
          background: url('~assets/presentation/img/playbtn.png') 50% 50% / contain no-repeat;
        }
      }

      &-eng {
        font-size: 26px;
        color: #333333;
        letter-spacing: -1.86px;
        margin-top: 28px;
      }

      &-chn {
        font-size: 24px;
        color: #B2B2B2;
        margin-top: 8px;
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
  margin: 24px 0 60px;
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

// 兰迪学员风采模块样式
.appearance {
  margin-top: 37.5px;
  padding-bottom: 37.5px;
  .appearance-video {
    position: relative;
    &-item {
      width: 100%;
      height: 360px;
    }
  }
  &-english {
    margin-top: 30px;
    font-size: 26px;
    color: #333333;
    letter-spacing: 0;
    text-align: justify;
  }
  &-chinese {
    margin-top: 10px;
    font-size: 24px;
    color: #B2B2B2;
    letter-spacing: 0;
    text-align: justify;
    line-height: 38px;
  }
  &-info {
    display: flex;
    margin-top: 40px;
    font-size: 26px;
    color: #333333;
    .appearance-info-index {
      margin-left: 20px;
      display: flex;
      align-items: center;
    }
  }
  &-cut {
    width: 140px;
    height: 60px;
    background: #FFFFFF;
    border: 1px solid #E6E6E6;
    border-radius: 30px;
    font-size: 26px;
    color: #333333;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 11px;
    margin-left: 520px;
    
  }
}

.description {
  margin-top: 37.5px;
  padding-bottom: 37.5px;

  p {
    font-size: 26px;
    color: #808080;
    text-align: justify;
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
    margin-bottom: 18px;

    &:last-child {
      margin-bottom: 0;
    }

    &-content { 
      width: 100%;
      line-height: 70px;
      font-size: 28px;
      border: 1px dashed #C0C7CC;
      border-radius: 37.5px;
      background: #FAFAFA;
      margin-bottom: 18px;
    }
    &-deco {
      width: 30px;
      height: 14px;
      background: url('~assets/presentation/img/triangle.png') 50% 50% / cover;
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