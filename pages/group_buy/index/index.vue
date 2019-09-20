<template>
  <div class="index-container">
    <div :class="[{'bg-top-spell':activeTab==='spell'},'top']">
      <div class="class-content">
        <span class="class-content-title">Smart Phonics智慧自然拼读小课堂</span>
        <span class="class-content-describe">每天10分钟跟外教轻松入门自然拼读</span>
        <div class="class-content-bottom">
          <div>
            <span>¥</span>
            <span>19.9</span>
            <s>¥99</s>
          </div>
          <span>已拼{{groupCount}}团</span>
        </div>
      </div>
    </div>
    <div :class="[{'bg-detail':activeTab==='detail','bg-spell':activeTab==='spell'},'bottom']">
      <div class="tab">
        <span :class="[{'active-btn':activeTab==='rule'},'tab-btn']" @click="tabChange('rule')">活动规则</span>
        <span :class="[{'active-btn':activeTab==='detail' || activeTab==='spell'},'tab-btn']" @click="tabChange('detail')">课程详情</span>
      </div>
      <!-- tab内容区 -->
      <tab-content :activeTab="activeTab" @funBtnSide="funBtnSide" @goBack="goBack"></tab-content>
      <div class="btn-content">
        <div @click="myGroupBuy">我的拼团</div>
        <div :class="{'bg-grey':currentUser.is_leader==='1'}" @click="startGroupBuy">发起拼团</div>
      </div>
    </div>

    <popup-download-app :popupType="popupType" @downloadApp="downloadAppClick" @closePopup="showPopup=false" v-if="showPopup"></popup-download-app>
    <v-dialog :dialogText="dialogText" @closeDialog="showDialog=false" v-if="showDialog"></v-dialog>
  </div>
</template>
<script>

import popupDownloadApp from '~/components/group_buy/popup_download_app.vue'
import tabContent from '~/components/group_buy/tab_content.vue'
import dialog from '~/components/dialog.vue'
import axios from '~/utils/axios'
import { WxShareConfig } from '~/utils/wx-config.js'
import {getGroupCount,jsCallNative,init,groupbuy_downloadApp,getQueryString,getWXCode} from '../group_buy'
import eventEmitter from '~/utils/event-center'

export default {
  head () {
    return {
      title: '拼团「Smart Phonics智慧自然拼读小课堂」'
    }
  },
  data() {
    return {
      showPopup: false,
      activeTab: 'rule',
      showDialog: false,
      dialogText: '',
      popupType: 'download',
      groupCount: 178,
      GroupStatus: '0',
      statusCode: 0,
      groupbuyId: '',
      openId: '',
      currentUser: {},
      btnType: '',
      indexData:{}
    }
  },
  components: {
    popupDownloadApp,
    tabContent,
    'v-dialog': dialog
  },
  mounted() {
    console.log('加载首页')
    init();
    this.eventOnListen();
    this.initData();
    const currentPlatform = sessionStorage.getItem('currentPlatform');
    if(currentPlatform === 'wx'){
      WxShareConfig()
      this.wxLogin();
    }
  },
  methods: {
    initData(){
      //获取首页信息
      axios.get('/MiniProgramApi/LessonGroupBuy/getInfo').then(res => {
        this.statusCode = res.code
        if (res.code === 3011) {
          //活动已结束
          this.groupCount = 200
        } else {
          this.groupCount = getGroupCount(res.data.count)
        }
        this.GroupStatus = res.data.status
        if (res.data.current_user) {
          this.currentUser = res.data.current_user
          //用户已经参团跳转详情页
          this.$router.push({name:'group_buy-detail',query:{groupbuyId:res.data.current_user.groupbuy_id}})
        }
      })
    },
    wxLogin(){
      //重定向后获取code,获取登录信息
      const wxcode = getQueryString('code');
      if (wxcode) {    
        axios
          .post('/MiniProgramApi/LessonGroupBuy/getWxLogin', {
            code:wxcode
          })
          .then(res => {
            this.openId = res.data.open_id
            if (res.data.is_login === 0) {
              //用户未登录
              this.$router.push({ name: 'group_buy-login'})
            } else {
              //已登录
              const btnType = getQueryString('btnType')
              if (btnType === 'myGroupBuy') {
                this.$router.push({ name: 'group_buy-my_group' })
              } else {
                this.funPay()
              }
            }
          })
      }
    },
    tabChange(type) {
      this.activeTab = type
    },
    myGroupBuy() {
      this.btnType = 'myGroupBuy'
      const currentPlatform = sessionStorage.getItem('currentPlatform');
      switch(currentPlatform){
        case 'wx':
          getWXCode()
          break;
        case 'app':
          this.$router.push({ name: 'group_buy-my_group' })
          break;
        case 'other':
          this.$router.push({ name: 'group_buy-prompt' })
          break;
      }
    },
    /**
     * 开团并且支付
     */
    funPay() {
      console.log(location.href);
      let params = {};
      if (this.$store.state.groupBuy.platform.isWeixin) {
        params.open_id = this.openId;
      }

      axios
        .post('/MiniProgramApi/LessonGroupBuy/openGroup',params)
        .then(res => {

          if(res.code !==0){
            this.showDialog=true
            this.dialogText=res.msg
            return;
          }

          this.groupbuyId = res.data.groupbuy.id
          
          const appPayData = res.data.order

          // 微信环境直接调取微信支付接口
          if (this.$store.state.groupBuy.platform.isWeixin) {
            const payData = JSON.parse(res.data.pay.data)
            console.log(payData)
            setTimeout(() => {
              wx.chooseWXPay({
                timestamp: payData.timeStamp, // 支付签名时间戳，注意微信jssdk中的所有使用timestamp字段均为小写。但最新版的支付后台生成签名使用的timeStamp字段名需大写其中的S字符
                nonceStr: payData.nonceStr, // 支付签名随机串，不长于 32 位
                package: payData.package, // 统一支付接口返回的prepay_id参数值，提交格式如：prepay_id=\*\*\*）
                signType: payData.signType, // 签名方式，默认为'SHA1'，使用新版支付需传入'MD5'
                paySign: payData.paySign, // 支付签名
                success: function(res) {
                  // 支付成功后的回调函数
                  that.$router.push({
                    name: 'group_buy-detail',
                    query: { groupbuyId: that.groupbuyId }
                  })
                },
                fail:function(res){
                  console.log(res)
                }
              })
            }, 500);

          }else{
            //如果是app环境则调用原生支付
            jsCallNative(appPayData)
          }
        })
        .catch(err=>{
          console.log('axios error',err)
        })
    },
    startGroupBuy() {
      const currentPlatform = sessionStorage.getItem('currentPlatform');
      console.log('currentPlatform',currentPlatform)
      this.btnType = 'startGroupBuy'
      if (this.currentUser.is_leader) {
        if (this.currentUser.is_leader === '1') {
          //当前用户为团长并已开团
          //开团按钮至灰,不可点击
          return
        }
        if (this.currentUser.is_leader === '0') {
          //当前用户为团员并已加入该团
          this.showDialog = true
          this.dialogText = "您已参团，每人限拼团1次"
        }
        return
      }
      if (this.statusCode === 3013) {
        //非活动用户提示
        this.showDialog = true
        this.dialogText = '此活动仅限abc360老学员(购买过正式课)发起'
        return
      }
      if (this.groupCount === 200) {
        //活动结束提示
        this.showPopup = true
        this.popupType = 'download'
        return
      }

      switch(currentPlatform){
        case 'wx':
          getWXCode()
          break;
        case 'app':
          this.funPay()
          break;
        case 'other':
          this.$router.push({ name: 'group_buy-prompt' })
          break;
        default:
          break;
      }
    },
    funBtnSide() {
      this.activeTab = 'spell'
    },
    goBack() {
      this.activeTab = 'detail'
    },
    /**
     * 监听
     */
    eventOnListen(){
      eventEmitter.on('nativePayCallBack', data => {
        const groupbuyId = this.groupbuyId
        if(data.result === '0'){
          //支付成功
          this.$router.push({
            name: 'group_buy-detail',
            query: { groupbuyId: groupbuyId,indexPay:'true'}
          })
        }
        else{
          this.showDialog=true
          this.dialogText='支付失败'
        }
      });
    },
    downloadAppClick(){
      groupbuy_downloadApp();
    }
  }
}
</script>
<style lang="scss" scoped>
.index-container {
  width: 100vw;
  background-size: cover;
  background-repeat: no-repeat;
  .top {
    padding-top: 9.67rem;
    background-image: url('~assets/group_buy/img/bg-index-top.png');
    background-size: cover;
    background-repeat: no-repeat;
    width: 100vw;
    height: 22.07rem;
    .class-content {
      display: flex;
      flex-direction: column;
      width: 9.33rem;
      height: 4.67rem;
      margin-left: 0.33rem;
      padding: 1.44rem 0.73rem 0.43rem;
      .class-content-title {
        color: #060002;
        font-size: 0.48rem;
        font-weight: bold;
      }
      .class-content-describe {
        color: #878787;
        font-size: 0.35rem;
        margin-top: 0.28rem;
      }
      .class-content-bottom {
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
        color: #fff;
        margin-top: 0.48rem;
        font-size: 0.45rem;
        div {
          span {
            &:nth-child(2) {
              font-size: 0.8rem;
              font-weight: bold;
            }
          }
        }
      }
    }
  }
  .bottom {
    position: relative;
    background-size: cover;
    background-repeat: no-repeat;
    background-image: url('~assets/group_buy/img/bg-index-rule.png');
    width: 100vw;
    height: 26.41rem;
    .tab {
      display: flex;
      justify-content: space-between;
      padding: 0.5rem 1rem 0;
      .tab-btn {
        width: 3.65rem;
        height: 1.23rem;
        color: #c6c5c5;
        font-size: 0.53rem;
        font-weight: bold;
        line-height: 1.1rem;
        text-align: center;
      }
      .active-btn {
        color: #fe5794 !important;
      }
    }
    .btn-content {
      width: 100vw;
      position: fixed;
      bottom: 0;
      left: 0;
      display: flex;
      justify-content: space-between;
      padding: 0.79rem 0.45rem 0.95rem;
      div {
        width: 4.4rem;
        height: 1.6rem;
        background-size: cover;
        background-repeat: no-repeat;
        font-size: 0.48rem;
        line-height: 1.6rem;
        text-align: center;
        font-family: FZYuan;
        &:nth-child(1) {
          color: #ff327d;
          background-image: url('~assets/group_buy/img/btn-my-group-buy.png');
        }
        &:nth-child(2) {
          color: #ffffff;
          background-image: url('~assets/group_buy/img/btn-start-group-buy.png');
        }
      }
    }
  }
}
.bg-grey {
  background-image: url('~assets/group_buy/img/btn-my-group-buy.png') !important;
}
.bg-detail {
  background-image: url('~assets/group_buy/img/bg-index-detail.png') !important;
  height: 50.25rem !important;
}
.bg-spell {
  background-image: url('~assets/group_buy/img/bg-index-spell.png') !important;
  height: 21.37rem !important;
}
.bg-top-spell {
  background-image: url('~assets/group_buy/img/bg-index-top-spell.png') !important;
  height: 22.11rem !important;
}
</style>