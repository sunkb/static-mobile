<template>
  <div class="container">
    <div class="content" v-if="Object.keys(groupBuyData).length!==0">
      <div @click="goDetail" class="content-item">
        <div class="item-left">
          <span class="title">Smart Phonics智慧自然拼读课</span>
          <span class="total">合计：￥{{groupBuyData.order.price}}</span>
          <span class="info" v-if="groupBuyData.groupbuy.status==='3'">款项将在活动结束后10个工作日内退回</span>
          <span class="time">下单时间：{{timeFormat(Number(groupBuyData.order.pay_time))}}</span>
        </div>
        <div class="item-right">
          <span class="item-right-text color-pink" v-if="groupBuyData.groupbuy.status==='1'">还差{{groupBuyData.groupbuy.left_num}}人</span>
          <span class="item-right-text" v-if="groupBuyData.groupbuy.status==='2'">拼团成功</span>
          <span class="item-right-text" v-if="groupBuyData.groupbuy.status==='3'">拼团失败</span>
          <div @click.stop="funShare" class="item-btn" v-if="groupBuyData.groupbuy.status==='1'">邀请好友</div>
        </div>
      </div>
    </div>

    <div class="no-group" v-if="Object.keys(groupBuyData).length===0">
      <div @click="goToIndex" class="no-group-content">
        <i></i>
        <p class="no-record">暂无记录</p>
        <p class="go-start-group">快去发起一个拼团吧~</p>
      </div>
    </div>
    <popup-share @closePopup="showPopupShare = false" v-if="showPopupShare"></popup-share>
    <popup-share-wechat @closePopup="showPopupShareWechat = false" v-if="showPopupShareWechat"></popup-share-wechat>
  </div>
</template>
<script>
import popupShare from '~/components/popup_share.vue'
import popupShareWechat from '~/components/popup_share_wechat.vue'
import axios from '~/utils/axios'
import { WxShareConfig } from '~/utils/wxConfig'
import gettime from '~/utils/timeFormat'

export default {
  head () {
    return {
      title: '我的拼团'
    }
  },
  data() {
    return {
      gettime: gettime,
      groupBuyData: {
        groupbuy: {
          id: '',
          code: '', //分享唯一编码
          status: '', // 1-未成团 2-拼团成功
          left_num: '', //  还差几人成团
          is_leader: '' // 1- 团长 0-团员
        },
        order: {
          price: '', // 订单价格
          pay_time: '' //下单时间
        }
      },
      showPopupShare: false,
      showPopupShareWechat: false,
      statusCode: 0
    }
  },
  components: {
    popupShare,
    popupShareWechat
  },
  created() {},
  mounted() {
    axios.get('/MiniProgramApi/LessonGroupBuy/getMyGroup').then(res => {
      this.groupBuyData = res.data
      this.statusCode = res.code
      axios
        .get(
          `/MiniProgramApi/LessonGroupBuy/getRecommendCodeByGroupCode?group_code=${this.groupBuyData.groupbuy.code}`
        )
        .then(res => {
          this.funWxShare(res.data.recommend_code)
        })
    })
  },
  methods: {
    timeFormat(t) {
      let date = new Date(t * 1000)
      let year = date.getFullYear()
      let month = this.change(date.getMonth() + 1)
      let day = this.change(date.getDate())
      let hour = this.change(date.getHours())
      let minute = this.change(date.getMinutes())
      let second = this.change(date.getSeconds())
      return `${year}-${month}-${day} ${hour}:${minute}:${second}`
    },
    change(l) {
      return l.toString().length < 2 ? '0' + l : l;
    },
    goDetail() {
      this.$router.push({
        name: 'group_buy-detail',
        query: { groupbuyId: this.groupBuyData.groupbuy.id }
      })
    },
    funShare() {
      // if (this.$store.state.groupBuy.platform.isWeixin) {
      this.showPopupShareWechat = true
      // } else {
      //   this.showPopupShare = true
      // }
    },
    goToIndex() {
      this.$router.push({ name: 'group_buy-index' })
    },
    funWxShare(code) {
      const { desc1, desc2, imgUrl, link, title } = {
        desc1: 'abc360英语，让孩子能说会考。拼团还差你1个。',
        desc2: '为了宝贝拼了「7天突破26个字母的标准发音」。',
        imgUrl: `https://qn-static.landi.com/uploadtoola4b025bbf7c19dfc16895b0ab0b776a2.png`,
        link: `${process.env.BASE_URL}/group_buy/detail/?groupbuyId=${this.groupBuyData.groupbuy.id}&groupbuyCode=${code}`,
        title: '为了宝贝拼了「7天突破26个字母的标准发音」。'
      }
      WxShareConfig().then(res => {
        res.ready(() => {
          //低版本微信兼容
          let appMessage = {
            title: title, //分享标题
            desc: desc1, //分享描述
            link: link, //分享链接
            imgUrl: imgUrl, //分享图标
            success: function() {},
            cancel: function() {}
          }
          let timeline = {
            title: title, // 分享标题
            link: link, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
            imgUrl: imgUrl, // 分享图标
            success: function() {},
            cancel: function() {}
          }
          //分享给朋友
          res.updataAppMessageShareData
            ? res.updataAppMessageShareData(appMessage)
            : res.onMenuShareAppMessage(appMessage)
          //分享到朋友圈
          res.updateTimelineShareData
            ? res.updateTimelineShareData(timeline)
            : res.onMenuShareTimeline(timeline)
        })
      })
    }
  }
}
</script>
<style lang="scss" scoped>
.container {
  background: #eeefef;
  height: 100vh;
  overflow-y: auto;
  padding-top: 0.09rem;
  .content {
    .content-item {
      background: #fff;
      padding: 0.41rem 0.47rem 0.32rem 0.45rem;
      position: relative;
      height: 3.39rem;
      margin-bottom: 0.17rem;
      .item-left {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        .title,
        .total {
          color: #090707;
          font-size: 0.4rem;
          font-weight: 500;
          line-height: 0.32rem;
        }
        .total {
          margin-top: 0.41rem;
        }
        .info {
          color: #ff9f00;
          font-size: 0.29rem;
          font-weight: 500;
          line-height: 0.32rem;
          margin-top: 0.27rem;
        }
        .time {
          color: #999999;
          font-size: 0.32rem;
          line-height: 0.32rem;
          position: absolute;
          bottom: 0.4rem;
          left: 0.49rem;
        }
      }
      .item-right {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        position: absolute;
        right: 0.47rem;
        top: 0;
        .item-right-text {
          margin-top: 0.91rem;
          color: #090707;
          font-size: 0.4rem;
        }
        .color-pink {
          color: #ff327d;
        }
        .item-btn {
          width: 2.44rem;
          height: 0.8rem;
          background-image: url('~assets/group_buy/img/btn-my-group.png');
          background-size: cover;
          background-repeat: no-repeat;
          color: #ff5d94;
          font-size: 0.4rem;
          font-weight: 500;
          text-align: center;
          line-height: 0.8rem;
          margin-top: 0.97rem;
        }
      }
    }
  }

  .no-group {
    height: 100vh;
    background: #fff;
    .no-group-content {
      display: flex;
      flex-direction: column;
      align-items: center;
      i {
        width: 2.69rem;
        height: 2.71rem;
        background-image: url('~assets/group_buy/img/no-group.png');
        background-size: cover;
        background-repeat: no-repeat;
        margin-top: 0.73rem;
      }
      p {
        color: #666;
        font-size: 0.4rem;
      }
      .no-record {
        font-weight: 500;
        margin-top: 0.16rem;
      }
      .go-start-group {
        margin-top: 0.24rem;
      }
    }
  }
}
</style>