<template>
  <div id="share" :style="shareStyle">
    <div class="topaction">
      <div></div>
      <div class="topaction-rank" @click="gotoPageWithHistory('presentation-rank')">点赞排行</div>
    </div>
    <div class="content">
      <div class="content-video" v-if="stuData.videoSrc" @click="playFn('video-share')">
        <video
          style="display: none;"
          id="video-share"
          controls
          preload="auto"
          :src="stuData.videoSrc"
        />
        <img class="content-video-img" :src="`${stuData.videoSrc}?vframe/jpg/offset/2/h/960/`"/>
        <div class="content-video-play"></div>
      </div>
      <div class="content-topic-eng">{{ topic.en_topic_name }}</div>
      <div class="content-topic-chn">{{ topic.cn_topic_name }}</div>
      <div class="content-action">
        <div class="content-action-author">作者: {{ stuData.name }}</div>
        <div class="content-action-actions">
          <div class="content-action-actions-btn" @click="shareToFrends" style="background: #FFD750"><img :src="require('~/assets/presentation/img/share.png')" class="share"/></div>
          <div class="content-action-actions-btn" :style="{ background: liked ? '#F0552D' : '#E6E6E6' }" @click="clickLike">
            <img :src="require('~/assets/presentation/img/like.png')" class="like"/></div>
          <div class="content-action-actions-text" :style="{ color: liked ? '#F0552D' : '#E6E6E6' }">{{ stuData.like }}人点赞</div>
        </div>
      </div>
    </div>
    <div class="action">
      <div class="action-text">
        <span @click="gotoRegister" class="action-text-accent">免费领取</span>
        <span>兰迪288元试听课大礼包</span>
      </div>
      <div class="action-content" :style="{ background: themeColor }" @click="gotoIndex">
        <div class="action-content-text">去首页看看</div>
        <div class="action-content-deco0"></div>
        <div class="action-content-deco1"></div>
      </div>
    </div>
    <div class="sharehelp" v-if="showShareHelp" @click="() => { showShareHelp = false }">
      <img class="sharehelp-img" :src="require('~/assets/presentation/img/share-help.png')" />
    </div>
    <poster-modal v-model="showPosterModal" @click="gotoRegister" :poster="0"></poster-modal>
    <toast ref="toast"></toast>
  </div>
</template>

<script>
import axios from '~/utils/axios'
import { API } from '~/pages/presentation/consts'
import { getWXCode, initWX } from '~/pages/presentation/wx'
import Toast from '~/components/Toast'
import PrtMixin from '~/pages/presentation/mixin'
import { videoPlayerEvent } from '~/utils/videoPlay'
import { PosterModal } from '~/components/presentation'
import '~/pages/presentation/presentation'

export default {
  name: 'Share',
  mixins: [PrtMixin],
  head() {
    return {
      title: '才艺视频'
    }
  },
  components: {
    'poster-modal': PosterModal,
    'toast': Toast
  },
  data() {
    return {
      stuData: {
        videoSrc: null,
        like: 0,
        name: ''
      },
      themeColor: '#fff',
      topic: {
        cn_topic_name: '',
        en_topic_name: ''
      },
      liked: false,
      shareStyle: {},
      showShareHelp: false,
      showPosterModal: false,
      registerUrl: '', // 注册页面路由地址
      isShowWindow: false,
      isEnable: false // 集赞是否在活动时间范围内
    }
  },
  methods: {
    async clickLike() {
      const liked = this.liked;
      const { activity_id, work_id } = this.$route.query

      if (!this.isEnable) {
        this.$refs['toast'].showToast('集赞活动已结束')
        return
      }

      if (this.liked) {
        this.stuData.like = this.stuData.like - 1 >= 0 ? this.stuData.like - 1 : 0
      } else {
        this.stuData.like++
      }
      this.liked = !this.liked

      let res;
      if(!liked){
        res = await axios.get(`${API.LIKE}?work_id=${work_id}`)
      }else{
        res = await axios.get(`${API.UNLIKE}?&work_id=${work_id}`)
      }

      if (res.status) {
        // await this.initData();
        this.checkLogin()
      }else{
        this.$refs['toast'].showToast(res.info)
      }

    },
    async checkLogin() {
      try {
        const loginResult = await axios.get(`${API.CHECK_LOGIN}`)
        if(!loginResult.status) {
          console.log(loginResult.info)
        }
      } catch (error) {
        console.log(error)
        if(error.response.status === 401 && this.isShowWindow) {
          const windowPicData = window.localStorage.getItem("curTime")
          if (!windowPicData) {
            window.localStorage.setItem("curTime", new Date().getTime())
            this.showPosterModal = true
          } else {
            const time = new Date().getTime() - windowPicData
            if(time > 28800000) {
              this.showPosterModal = true
              window.localStorage.setItem("curTime", new Date().getTime())
              return 
            }
            this.showPosterModal = false
          }
        }
      }
      
    },
    // 判断此次活动是否需要显示弹窗
    async checkWindows() {
      try {
        const { activity_id } = this.$route.query 
        const getZanConfig = await axios.get(`${API.GET_ZAN_CONFIG}?activity_id=${activity_id}&tjm=${window.localStorage.getItem("userSid")}`)
        if (!getZanConfig.status) {
          console.log(getZanConfig.info)
          return
        }
        if (getZanConfig.data && getZanConfig.data.is_show_zan_alert == '1'){
          this.registerUrl = getZanConfig.data.my_url
          this.isShowWindow = true
        }
        this.isEnable = getZanConfig.data.is_enable
      } catch (err) {
        console.log(err)
      }
    },
    async initData() {
      const { activity_id, work_id } = this.$route.query
      if (this.$route.query.sid) {
        window.localStorage.setItem("userSid", this.$route.query.sid) // 为空不设置
      }
      // const url = encodeURIComponent(window.location.href)
      // const url = encodeURIComponent(sessionStorage.getItem('lastUrl'))
      // const url = encodeURIComponent('https://release6.landi.com/static-web/mobile/presentation/share/?activity_id=1&work_id=1')
      const res = await axios.get(`${API.WORK}?activity_id=${activity_id}&work_id=${work_id}`)
      if (!res.status) {
        this.$refs['toast'].showToast(res.info)
        return
      }
      const work = res.data.work;
      this.topic = {
        cn_topic_name: work.cn_topic_name,
        en_topic_name: work.en_topic_name,
      }
      this.stuData = {
        videoSrc: work.video_url,
        like: work.zan,
        name: work.en_name
      }
      this.liked = work.is_zan

      const detail = await axios.get(`${API.ACTIVITY_DETAIL}?activity_id=${activity_id}`)
      if (!detail.status) {
        this.$refs['toast'].showToast(detail.info)
        return
      }
      document.title = detail.data.name
      this.themeColor = detail.data.button_color
      this.shareStyle.background = `url(${detail.data.share_pic_url}) 0 0 / contain no-repeat`
      this.shareStyle.backgroundColor = '#fff'

      //分享修改
      const url = window.location.href
      //const resWX = await axios.get(`${API.WX_SHARE}?activity_id=${activity_id}&url=${url}&work_id=${work_id}`)
      const resWX = await axios.post(`${API.WX_SHARE1}`, {
        activity_id,
        url,
        work_id,
        sid: window.localStorage.getItem("userSid") ? window.localStorage.getItem("userSid") : ""
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
      // wx.ready(() => {
      //   wx.onMenuShareAppMessage(shareObj);
      //   wx.onMenuShareTimeline(shareObj);
      // });
    },
    gotoRegister() {
      window._hmt && window._hmt.push(['_trackEvent', 'div', 'click', '免费领取大礼包']); // 百度统计
      window.location = this.registerUrl
    },
    async getOpenid(){
      const { code, activity_id, work_id } = this.$route.query
      const res = await axios.get(`${API.GET_OPENID}?code=${code}`)
      if(!res.status){
        this.$refs['toast'].showToast(res.info)
      }
    },
    shareToFrends() {
      this.showShareHelp = true
    },
    gotoIndex() {
      window._hmt && window._hmt.push(['_trackEvent', 'div', 'click', '#点击回首页']); // 百度统计
      window.location = `${process.env.BASE_URL}/presentation/?activity_id=${this.$route.query.activity_id}&sid=${window.localStorage.getItem("userSid")}`
    },
    playFn(name){
      let video1 = document.getElementById(name)
      videoPlayerEvent(video1)
    },
    async getSid () {
      try {
        const userSidData = await axios.get(`${API.MY_SID}`)
        if (userSidData.status) {
          window.localStorage.setItem("userSid", userSidData.data.sid)
        } 
      } catch (error) {
        console.log(error)  
      }
    }
  },
  async mounted() {
    if (window.WeixinJSBridge) {
      window.WeixinJSBridge.call('hideToolbar')
    }
    this.$refs['toast'].showLoadingToast()
    const { code } = this.$route.query
    if (code == null) {
      sessionStorage.setItem('lastUrl', window.location.href)
      getWXCode(window.location.href)
      return
    }

    if(code){
      await this.getOpenid()
      await this.initData();
      await this.checkWindows();
      await this.getSid()
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
}

.content {
  width: 690px;
  padding: 30px 25px;
  box-shadow: 0 2px 4px 0 #CCCCCC;
  background: #fff;
  margin-top: 46px;
  position: relative;
  left: 50%;
  top: 0;
  transform: translateX(-50%);

  &-video {
    width: 640px;
    height: 360px;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

    &-img {
      height: inherit;
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

  &-topic-eng {
    font-size: 26px;
    color: #333333;
    letter-spacing: 0;
    text-align: left;
    margin-top: 30px;
  }

  &-topic-chn {
    text-align: left;
    font-size: 24px;
    color: #B2B2B2;
    letter-spacing: 0;
    line-height: 38px;
    margin-top: 10px;
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
      justify-content: space-around;
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
        width: 37px;
        height: 37px;
      }
      .like {
        width: 35px;
        height: 34px;
      }
    }
  }
}

.action {
  background: #fff;
  width: 100vw;
  padding: 37.5px 0;
  text-align: center;
  position: fixed;
  bottom: 0;
  left: 0;

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
  padding-top: 60px;

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

.sharehelp {
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  background: rgba($color: #000000, $alpha: 0.6);

  &-img {
    width: 540px;
    position: fixed;
    left: 135px;
    top: 0;
  }
}
</style>