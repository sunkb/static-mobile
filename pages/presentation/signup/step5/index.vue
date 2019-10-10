<template>
  <div>
    <div class="top-step-bar">
      <step-bar :steps="steps" :progress="100"></step-bar>
    </div>
    <div class="page-content" v-if="mywork">
      <div class="title">
        <h1>我的作品</h1>
        <div class="title-action" @click="reUpload" v-if="canReUpload">
          <h3>重新上传</h3>
          <img class="title-action-img" :src="require('~/assets/presentation/img/arrow-right.png')"/>
        </div>
      </div>
      <h2>报名学生: {{ mywork.en_name }}</h2>
      <div class="topic-text">
        <h2 class="topic-text-eng">{{ mywork.topic.en_topic_name }}</h2>
        <h3 class="topic-text-chn">{{ mywork.topic.cn_topic_name }}</h3>
      </div>
      <div class="video">
        <video controls class="video-content">
          <source :src="mywork.video_url"/>
        </video>
      </div>
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

export default {
  name: 'Signup',
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
      this.$router.push({ name: 'presentation-signup-step3', query: this.$route.query })
    },
    gotoIndex() {
      this.$router.push({ name: 'presentation', query: this.$route.query })
    },
    shareToFrends() {
      this.showShareHelp = true
    }
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
      en_name: mywork.data.en_name
    }
    this.canReUpload = mywork.data.is_reupload

    const url = `${window.location.origin}${window.location.pathname}?activity_id=${activityID}`
    const res = await axios.get(`${API.WX_SHARE}?activity_id=${activityID}&url=${encodeURIComponent(window.location.href)}&work_id=${mywork.data.id}`)
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
    
    wx.ready(() => {
      // wx.updateAppMessageShareData({ 
      //   title: wx_data.share_title,
      //   desc: wx_data.share_desc,
      //   link: wx_data.share_link,
      //   imgUrl: wx_data.share_img_url,
      // })
      wx.updateAppMessageShareData({ 
        title: '我的米',
        desc: wx_data.share_desc,
        link: wx_data.share_link,
        imgUrl:'http://qn-static.landi.com/uploadtoole8f6168bff27164dad317c533885c51e.png',
      })
      wx.updateTimelineShareData({ 
        title: wx_data.share_title,
        link: wx_data.share_link,
        imgUrl: wx_data.share_img_url,
      })
      wx.error(function(res){
        console.log(res);
      });
    })

    this.$refs['toast'].hideLoadingToast()
  }
}
</script>

<style lang="scss" scoped>
@import '~/assets/presentation/css/main.scss';

.topic-text {
  margin-top: -7.5px;
  width: 675px;
  
  &-eng {
    font-weight: bold;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  &-chn {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
}

.video {
  margin-top: 22.5px;
  display: flex;
  justify-content: center;
  align-items: center;

  &-content {
    width: 638px;
  }
}

.title {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-right: 22.5px;

  &-action {
    h3 {
      color: $p-color-0;
      display: inline-block;
    }

    &-img {
      width: 10px;
    }
  }
}

.action {
  display: flex;
  justify-content: space-evenly;
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