<template>
  <div class="home">
    <div class="home-background">
      <div class="home-marquee">{{pmdInfo}}</div>
      <div class="home-header">
        <img class="home-header-ways" src="../../assets/bruin/img/ways.png" @click="goToRule" />
        <!-- <img
          v-show="isAllBruin"
          @click="checkAward"
          class="home-header-check"
          src="../../assets/bruin/img/check_award.png"
        /> -->
        <div class="home-header-right">
          <img
            class="home-header-right-work"
            src="../../assets/bruin/img/home_bruin.png"
            @click="goToMyBruin"
          />
          <div v-show="curAwardBruinNum == 0 ? false : true" class="home-header-right-times">
            <div>{{curAwardBruinNum}}</div>
          </div>
        </div>
      </div>
      <div class="home-pitch">
        <div class="home-pitch-first" @click="cutButton('first')">
          <img v-show="chooseButton" class="hot" src="../../assets/bruin/img/hot.png" />
          <img
            v-show="chooseButton"
            class="home-pitch-first-img"
            src="../../assets/bruin/img/first_button_click.png"
          />
          <img
            v-show="!chooseButton"
            class="home-pitch-first-img"
            src="../../assets/bruin/img/first_button.png"
          />
        </div>
        <div class="home-pitch-second" @click="cutButton('second')">
          <img
            v-show="chooseButton"
            class="home-pitch-second-img"
            src="../../assets/bruin/img/second_button.png"
          />
          <img v-show="!chooseButton" class="hot" src="../../assets/bruin/img/hot.png" />
          <img
            v-show="!chooseButton"
            class="home-pitch-second-img"
            src="../../assets/bruin/img/second_button_click.png"
          />
        </div>
      </div>
      <div class="home-entrance" v-show="chooseButton">
        <div v-show="firstChoose" class="home-entrance-new" @click="goToMyBruin">
          <img class="home-entrance-new-img" src="../../assets/bruin/img/first_use.png" />
        </div>
        <div class="home-entrance-invite" @click="inviteAction">
          <img class="home-entrance-invite-img" src="../../assets/bruin/img/invite_button.png" />
          <div class="home-entrance-invite-num">
            <div>已邀请</div>
            <div class="home-entrance-invite-num-color">{{activityData.invite_num}}</div>
            <div>人</div>
          </div>
        </div>
        <div class="home-entrance-renew">
          <img class="home-entrance-renew-img" src="../../assets/bruin/img/buy_course.png" />
          <img
            v-show="activityData.is_buy ? true : false"
            class="home-entrance-renew-finsh-img"
            src="../../assets/bruin/img/finsh.png"
          />
          <img
            v-show="activityData.is_buy ? false : true"
            class="home-entrance-renew-unfinsh-img"
            src="../../assets/bruin/img/unfinsh.png"
          />
        </div>
      </div>
      <div class="home-entrance2" v-show="!chooseButton">
        <div class="home-entrance2-coin" @click="goToCoin">
          <img
            class="home-entrance2-coin-img"
            src="https://qn-static.landi.com/uploadtoolb03cbde0945a6bffda545ca618ef08cd.png"
          />
        </div>
        <div class="home-entrance2-gua" @click="goToGua">
          <img
            class="home-entrance2-gua-img"
            src="https://qn-static.landi.com/uploadtool420501adee55e23d7b01f9fac22a6105.png"
          />
        </div>
      </div>
      <div class="sharehelp" v-show="showShareHelp" @click="() => { showShareHelp = false }">
        <img class="sharehelp-img" :src="require('~/assets/bruin/img/share_help.png')" />
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
import { Login } from '~/utils/core/logins'
import { PosterModal } from '~/components/presentation'
export default {
  name: "home",
  head () {
    return {
      title: "集五熊，赢千万课时"
    }
  },
  data () {
    return {
      showShareHelp: false,
      pmdInfo: "",
      activityData: {
        is_enable: true,
        id: 1,
        name: '',
        start_time: '',
        end_time: '',
        is_buy: false,
        invite_num: 0
      },
      curAwardBruinNum: 0,
      isBuy: false,
      firstChoose: false,
      chooseButton: false,  // 用于首页的第一波熊和第二波熊的按钮切换
      isAllBruin: false // 用于判断是否已经集齐了五只熊
    }
  },
  components: {
    'toast': Toast
  },
  methods: {
    // 跳转规则页面
    goToRule () {
      window.location = `${process.env.BASE_URL}/bruin/rule/`
    },
    // 跳转到我的熊库
    goToMyBruin () {
      window.location = `${process.env.BASE_URL}/bruin/my_bruin/`
    },
    // 邀请好友
    inviteAction () {
      this.showShareHelp = true
    },
    // 用于微信分享的数据的接口请求
    async wxShare () {
      try {
        // const curUrl = encodeURIComponent(location.protocol + '//' + location.host + location.pathname)
        const params = {
          activity_id: 1,
          url: window.location.href.split('#')[0]
        }
        const res = await axios.post(API.WX_SHARE, params)
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
        console.log(shareObj)
        wx.ready(() => {
          wx.updateAppMessageShareData(shareObj)
          wx.updateTimelineShareData(shareObj)
          wx.onMenuShareAppMessage(shareObj);
          wx.onMenuShareTimeline(shareObj);
          wx.error(function (res) {
            console.log(res);
          });
        })
      } catch (err) {
        console.log(err)
        return
      }

    },
    // 用于获取跑马灯的内容数据
    async getBruinPMD () {
      try {
        const activityID = 1
        const res = await axios.get(`${API.BRUIN_PMD}?activity_id=${activityID}`)
        if (!res.status) {
          console.log(res.info)
          return
        }
        this.pmdInfo = res.data || '0人已集齐，2019年1月1日18：00开奖'
      } catch (err) {
        console.log(res)
        return
      }
    },
    //登录或者注册模式选择
    async gotoLoginRegister () {
      let redirect_url = window.location.href;
      redirect_url = removeParam('code', redirect_url);
      redirect_url = removeParam('state', redirect_url);
      redirect_url = encodeURIComponent(redirect_url);
      const loginUrl = process.env.ENV_API + '/mobile/login/index/#/login?redirect_url=' + redirect_url;
      window.location = loginUrl;
    },
    // 活动详情的接口数据
    async getActivityDetail () {
      try {
        const activityId = 1
        const res = await axios.get(`${API.ACTIVITY_DETAIL}?activity_id=${activityId}`)
        if (!res.status) {
          console.log(res.info)
          return
        }
        this.activityData = {
          is_enable: res.data.is_enable || '',
          id: res.data.id || 1,
          name: res.data.name || '',
          start_time: res.data.start_time || '',
          end_time: res.data.end_time || '',
          is_buy: res.data.is_buy || false,
          invite_num: res.data.invite_num || 0
        }
        const firstChooseResult = localStorage.getItem("firstChoose")
        if (firstChooseResult) {
          this.firstChoose = false
        } else {
          this.firstChoose = true
          localStorage.setItem("firstChoose", true);
        }
      } catch (err) {
        console.log(err)
        return
      }
    },
    // 我的熊包的数据请求
    async getMyBruinData () {
      const activityID = 1
      try {
        const res = await axios.get(`${API.MY_BRUIN}?activity_id=${activityID}`)
        if (!res.status) {
          console.log(res.info)
          return
        }
        this.curAwardBruinNum = res.data ? res.data.lucky_num : 0
        let flag = true
        if (res.data && res.data.cards) {
          const cards = res.data.cards
          cards.forEach(element => {
            if (element.num == 0) {
              flag = false
            }
          })
        }
        if (flag) {
          this.isAllBruin = true
        }
      } catch (err) {
        console.log(err)
        return
      }
    },
    // 切换第几波熊的按钮
    cutButton (type) {
      if (type === 'first') {
        this.chooseButton = true
        return
      }
      this.chooseButton = false
    },
    // 跳转至金币商城
    goToCoin () {
      window.location = 'http://www.landi.com/Mobile/PointMall/index?type=2&item=actbear05'
    },
    // 跳转至金币刮刮乐
    goToGua () {
      window.location = 'http://www.landi.com/Mobile/PointMall/toActivity?act=ggl'
    },
    // 查看奖励
    checkAward () {
      this.$refs['toast'].showToast('2020年1月1日 18:00开奖')
    }
  },
  created () {
    const login = new Login();
    login.autoLogin();
  },
  async mounted () {
    try {
      const activityID = 1
      const res = await axios.get(`${API.BRUIN_PMD}?activity_id=${activityID}`)
      if (!res.status) {
        console.log(res.info)
        return
      }
      this.pmdInfo = res.data || '0人已集齐，2019年1月1日18：00开奖'
      this.wxShare()
      this.getActivityDetail()
      this.getMyBruinData()
      this.$refs['toast'].hideLoadingToast()
    } catch (err) {
      console.log(err)
      if (err.response.status === 401) { // 用于判断是否登录过
        this.gotoLoginRegister()
        console.log(err.response.info)
      }
    }
  }
}
function removeParam (key, sourceURL) {
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
<style lang="scss" scoped>
.home {
  overflow: auto;
  -webkit-overflow-scrolling: auto;
  width: 100vw;
  height: 1495px;
  .home-background {
    width: 100vw;
    height: 1495px;
    background: url("https://qn-static.landi.com/uploadtool9b81a286bff56fe0a012a2d881e92761.png"); // 背景图
    background-size: 100%;
    .home-marquee {
      height: 50px;
      width: 100%;
      background: rgba(0, 0, 0, 1);
      opacity: 0.5;
      font-size: 28px;
      font-weight: 400;
      color: rgba(255, 255, 255, 1);
      text-align: center;
      padding-top: 5px;
    }
    .home-header {
      padding-top: 37px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      &-ways {
        width: 112px;
        height: 71px;
      }
      &-check {
        width: 100px;
        height: 105px;
        margin-left: 380px;
      }
      &-right {
        display: flex;
        position: relative;
        &-work {
          width: 96px;
          height: 94px;
          margin-right: 18px;
        }
        &-times {
          width: 30px;
          height: 30px;
          background: rgba(255, 54, 0, 1);
          border-radius: 50%;
          font-weight: 600;
          color: rgba(255, 255, 255, 1);
          display: flex;
          align-items: center;
          justify-content: center;
          position: absolute;
          top: -6px;
          right: 20px;
        }
      }
    }
    .home-pitch {
      margin-top: 315px;
      display: flex;
      justify-content: center;
      position: relative;
      &-first {
        width: 362px;
        height: 104px;
        .hot {
          height: 61px;
          width: 42px;
          position: absolute;
          top: -20px;
          left: 60px;
        }
        &-img {
          width: 362px;
          height: 104px;
        }
      }
      &-second {
        width: 362px;
        height: 104px;
        position: relative;
        .hot {
          height: 61px;
          width: 42px;
          position: absolute;
          top: -20px;
          left: 40px;
        }
        &-img {
          width: 362px;
          height: 104px;
        }
      }
    }
    .home-entrance {
      margin-top: 45px;
      display: flex;
      flex-direction: column;
      align-items: center;
      &-new {
        width: 630px;
        height: 241px;
        &-img {
          width: 630px;
          height: 241px;
        }
      }
      &-invite {
        width: 630px;
        height: 241px;
        position: relative;
        &-img {
          width: 630px;
          height: 241px;
        }
        &-num {
          display: flex;
          align-items: center;
          font-size: 20px;
          color: rgba(117, 117, 117, 1);
          position: absolute;
          bottom: 30px;
          left: 310px;
          &-color {
            color: red;
          }
        }
      }
      &-renew {
        width: 630px;
        height: 241px;
        position: relative;
        &-img {
          width: 630px;
          height: 241px;
        }
        &-finsh-img {
          width: 90px;
          height: 90px;
          position: absolute;
          right: 38px;
          top: 36px;
        }
        &-unfinsh-img {
          width: 90px;
          height: 90px;
          position: absolute;
          right: 38px;
          top: 36px;
        }
      }
    }
    .home-entrance2 {
      margin-top: 45px;
      display: flex;
      flex-direction: column;
      align-items: center;
      &-coin {
        width: 630px;
        height: 241px;
        &-img {
          width: 630px;
          height: 241px;
        }
      }
      &-gua {
        width: 630px;
        height: 241px;
        position: relative;
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
  background: rgba($color: #000000, $alpha: 0.8);

  &-img {
    width: 540px;
    position: fixed;
    left: 135px;
    top: 0;
  }
}
</style>