<template>
  <div id="step5">
    <div class="top-step-bar">
      <step-bar :steps="steps" :progress="100"></step-bar>
    </div>
    <div class="page-content" v-if="mywork">
      <div class="title">
        <div class="signup-title">我的作品</div>
        <div class="title-action" @click="reUpload" v-if="canReUpload">
          <div class="title-action-text">重新上传</div>
          <img class="title-action-img" :src="require('~/assets/presentation/img/arrow-right.png')"/>
        </div>
      </div>
      <div class="production-info">
        <div class="signup-title2">报名学生: {{ mywork.en_name }}</div>
        <div class="signup-title2 production-info-like">作品<p class="number">{{mywork.zan}}</p>人已点赞</div>
      </div>
      <div class="topic-text">
        <div class="topic-text-eng">{{ mywork.topic.en_topic_name }}</div>
        <div class="topic-text-chn">{{ mywork.topic.cn_topic_name }}</div>
      </div>
      <div class="video">
        <div class="video-content" @click="playFn('video-upload')">
          <video
            style="display: none;"
            id="video-upload"
            controls
            preload="auto"
            :src="mywork.video_url"
          />
          <img class="video-content-img" :src="`${mywork.video_url}?vframe/jpg/offset/2/h/960/`"/>
          <div class="video-content-play"></div>
        </div>
      </div>
    </div>
    <div class="reminder" v-if="mywork.reupload_time ? true : false">
      <p>重新上传截止时间 {{mywork.reupload_time}}</p>
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
import { STEPS, STROGE, TOPICS, API } from '~/pages/presentation/consts'
import axios from '~/utils/axios'
import { initWX } from '~/pages/presentation/wx'
import PrtMixin from '~/pages/presentation/mixin'
import { videoPlayerEvent } from '~/utils/videoPlay'
import '~/pages/presentation/presentation'

export default {
  name: 'Signup',
  mixins: [PrtMixin],
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
      canReUpload: true,
      showShareHelp: false,
      mywork: null
    }
  },
  methods: {
    reUpload() {
      this.gotoPage('presentation-signup-step3')
    },
    gotoIndex() {
      window.location = `${process.env.BASE_URL}/presentation/?activity_id=${this.$route.query.activity_id}`
    },
    shareToFrends() {
      this.showShareHelp = true
    },
    playFn(name){
      let video1 = document.getElementById(name)
      videoPlayerEvent(video1)
    },
  },
  async mounted() {
    this.$refs['toast'].showLoadingToast()
    const activityID = this.$route.query.activity_id
    const mywork = await axios.get(`${API.MY_WORK}?activity_id=${activityID}`)
    if (!mywork.status) {
      this.$refs['toast'].hideLoadingToast()
      this.$refs['toast'].showToast(mywork.info)
      return
    } else {
      if (!mywork.data.id) { return }
    }
    this.mywork = {
      video_url: mywork.data.video_url,
      topic: {
        cn_topic_name: mywork.data.cn_topic_name,
        en_topic_name: mywork.data.en_topic_name,
      },
      en_name: mywork.data.en_name,
      zan: mywork.data.zan,
      reupload_time: mywork.reupload_time ? mywork.reupload_time : ''
    }
    this.canReUpload = mywork.data.is_reupload

    const url = encodeURIComponent(window.location.href)
    
    // const url = encodeURIComponent('https://release6.landi.com/static-web/mobile/presentation/?activity_id=1')
    const res = await axios.get(`${API.WX_SHARE}?activity_id=${activityID}&url=${url}&work_id=${mywork.data.id}&sid=${window.localStorage.getItem("userSid")}`)
    if (!res.status) {
      this.$refs['toast'].hideLoadingToast()
      this.$refs['toast'].showToast(res.info)
      return
    }
    const wxConfig = res.data.wx_config;
    const wx_data = res.data.wx_data;
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

    this.$refs['toast'].hideLoadingToast()
  }
}
</script>

<style lang="scss" scoped>
@import '~/assets/presentation/css/main.scss';

#step5 {
  width: 100vw;
  height: 100vh;
  background: #fff;
}

.production-info {
  display: flex;
  &-like {
    display: flex;
    font-family: MicrosoftYaHei;
    font-size: 24px;
    color: #B2B2B2;
    letter-spacing: 0;
    text-align: justify;
    margin-left: 20px;
    align-items: center;
    .number {
      font-family: MicrosoftYaHei;
      color: red;
      letter-spacing: 0;
      text-align: justify;
      line-height: 31px;
      margin: 0 5px 0 5px;
    }
  }
}

.topic-text {
  width: 675px;
  
  &-eng {
    font-size: 26px;
    color: #333333;
    letter-spacing: 0;
  }

  &-chn {
    font-size: 24px;
    color: #B2B2B2;
    letter-spacing: 0;
    line-height: 38px;
    margin-top: 14px;
  }
}

.video {
  margin-top: 22.5px;
  display: flex;
  justify-content: center;
  align-items: center;

  &-content {
    width: 638px;
    height: 360px;
    overflow: hidden;
    position: relative;
    background: #E6E6E6;
    display: flex;
    justify-content: center;
    align-items: center;

    &-play {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 76px;
      height: 76px;
      background: url('~assets/presentation/img/playbtn.png') 50% 50% / contain no-repeat;
    }

    &-img {
      height: 360px;
    }
  }
}

.title {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-right: 22.5px;

  &-action {
    &-img {
      width: 10px;
    }

    &-text {
      color: $p-color-0;
      display: inline-block;
      font-size: 26px;
      margin-bottom: 30px;
    }
  }
}

.reminder{
  width: 100%;
  display: flex;
  justify-content: center;
  position: fixed;
  bottom: 150px;
  p {
    font-family: MicrosoftYaHei;
    font-size: 24px;
    color: #B2B2B2;
  }
}

.action {
  display: flex;
  justify-content: space-around;
  padding: 0 20px;
  width: 100%;
  position: fixed;
  left: 0;
  bottom: 37.5px;

  &-btn {
    width: 320px;
    line-height: 100px;
    font-size: 34px;
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
    width: 540px;
    position: fixed;
    left: 135px;
    top: 0;
  }
}
</style>