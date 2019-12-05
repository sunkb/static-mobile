<template>
  <div class="home">
    <div class="home-background">
      <div class="home-header">
        <img class="home-header-ways" src="../../assets/bruin/img/ways.png" @click="goToRule" />
        <img
          class="home-header-work"
          src="../../assets/bruin/img/home_bruin.png"
          @click="goToMyBruin"
        />
      </div>
      <div class="home-pitch">
        <div class="home-pitch-first">
          <img class="hot" src="../../assets/bruin/img/hot.png" />
          <img class="home-pitch-first-img" src="../../assets/bruin/img/pitch_button.png" />
        </div>
        <div class="home-pitch-second">
          <img class="home-pitch-second-img" src="../../assets/bruin/img/second_button_disable.png" />
        </div>
      </div>
      <div class="home-entrance">
        <div class="home-entrance-invite" @click="inviteAction">
          <img class="home-entrance-invite-img" src="../../assets/bruin/img/invite_button.png" />
        </div>
        <div class="home-entrance-renew">
          <img class="home-entrance-renew-img" src="../../assets/bruin/img/renew_button.png" />
        </div>
      </div>
      <div class="sharehelp" v-show="showShareHelp" @click="() => { showShareHelp = false }">
        <img class="sharehelp-img" :src="require('~/assets/presentation/img/share-help.png')" />
      </div>
      <toast ref="toast"></toast>
    </div>
  </div>
</template>
<script>
import { API } from '~/pages/bruin/consts'
import axios from '~/utils/axios'
import Toast from '~/components/Toast'
import { initWX } from '~/pages/presentation/wx'
export default {
  name: "home",
  data () {
    return {
      showShareHelp: false
    }
  },
  components: {
    'toast': Toast
  },
  methods: {
    // 跳转规则页面
    goToRule () {
      window.location = `http://192.168.216.37:54972/bruin/rule/`
    },
    // 跳转到我的熊库
    goToMyBruin () {
      window.location = `http://192.168.216.37:54972/bruin/my_bruin/`
    },
    // 邀请好友
    inviteAction () {
      this.showShareHelp = true
    },
    // 用于微信分享的数据的接口请求
    async wxShare () {
      const curUrl = encodeURIComponent(window.location.href)
      const activityID = 1
      try {
        const res = await axios.get(`${API.WX_SHARE}?activity_id=${activityID}&url=${curUrl}`)
        if (!res.status) {
          this.$refs['toast'].hideLoadingToast()
          this.$refs['toast'].showToast(res.info)
          console.log(res.info)
          return
        }
        const wxConfig = res.data.wx_config;
        const wx_data = res.data.wx_data;
        const wx = initWX({
          appId: wxConfig.appId,
          timestamp: wxConfig.timestamp,
          nonceStr: wxConfig.nonceStr,
          signature: wxConfig.signature,
        })
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
          wx.error(function (res) {
            console.log(res);
          });
        })
        this.$refs['toast'].hideLoadingToast()
        console.log(res.data)
      } catch (err) {
        console.log(err)
        return
      }

    }
  },
  created () {

  },
  mounted () {
    this.$refs['toast'].showLoadingToast()
    this.wxShare()
  }
}
</script>
<style lang="scss" scoped>
.home {
  overflow: auto;
  -webkit-overflow-scrolling: auto;
  width: 100vw;
  height: 123vh;
  .home-background {
    width: 100vw;
    height: 100%;
    background: url("../../assets/bruin/img/home_page.png");
    background-size: 100%;
    .home-header {
      padding-top: 87px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      &-ways {
        width: 112px;
        height: 71px;
      }
      &-work {
        width: 96px;
        height: 94px;
        margin-right: 18px;
      }
    }
    .home-pitch {
      margin-top: 315px;
      display: flex;
      justify-content: center;
      position: relative;
      &-first {
        width: 343px;
        height: 95px;
        .hot {
          height: 61px;
          width: 42px;
          position: absolute;
          top: -20px;
          left: 60px;
        }
        &-img {
          width: 343px;
          height: 95px;
        }
      }
      &-second {
        width: 343px;
        height: 95px;
        &-img {
          width: 343px;
          height: 95px;
        }
      }
    }
    .home-entrance {
      margin-top: 45px;
      display: flex;
      flex-direction: column;
      align-items: center;
      &-invite {
        width: 630px;
        height: 241px;
        &-img {
          width: 630px;
          height: 241px;
        }
      }
      &-renew {
        width: 630px;
        height: 241px;
        &-img {
          width: 630px;
          height: 241px;
        }
      }
    }
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