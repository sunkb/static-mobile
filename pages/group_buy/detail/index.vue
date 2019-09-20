<template>
  <div class="container">
    <div :class="[{'top-2':isGroup},'top-1']">
      <div class="top-content">
        <div class="top-content-top">
          <div v-for="item in detailData.member" v-if="item.is_leader=='1'">
            <span>团长</span>
            <img :src="item.avatar" />
          </div>
          <div v-for="item in detailData.member" v-if="item.is_leader=='0'">
            <span>团员</span>
            <img :src="item.avatar" />
          </div>
          <div v-if="detailData.member && detailData.member.length<3">
            <span>团员</span>
            <img src="~assets/group_buy/img/no-one.png" />
          </div>
          <div v-if="detailData.member && detailData.member.length<2">
            <span>团员</span>
            <img src="~assets/group_buy/img/no-one.png" />
          </div>
        </div>
        <p
          class="group-success"
          v-if="detailDataGroupStatus==='2' && detailData.current_sid && detailData.current_user && detailData.activity.status==='1' && !detailData.current_user_join_group"
        >
          <i></i>
          <span>拼团成功</span>
        </p>
        <p class="group-fail" v-if="detailDataGroupStatus==='3' && detailData.current_sid ">
          <i></i>
          <span>很遗憾,拼团失败</span>
        </p>
        <p
          class="fail-text"
          v-if="detailDataGroupStatus==='3' && detailData.current_sid "
        >款项将在活动结束后10个工作日内退回</p>
        <div
          class="find-group"
          v-if="!isWeixin && detailDataGroupStatus==='2' && detailData.current_user&&detailData.current_user.is_leader==='0'"
        >
          <div>
            <span>请前往</span>
            <span @click="funCopy" class="color-pink bottom-line">「abc360英语</span>
            <span class="color-pink">服务号-享服务-个人中心-我」</span>
            <span>查看并学习</span>
          </div>
        </div>
        <p
          class="not-success"
          v-if="detailDataGroupStatus==='1' && detailData.activity.status==='1'"
        >还差 {{detailData.groupbuy.left_num}} 人拼团成功啦~</p>
        <div
          @click="joinGroup"
          class="btn-join"
          v-if="detailDataGroupStatus!=='3' && !detailData.current_user &&detailData.is_open===0&&!detailData.current_user_join_group"
        >立即参团</div>
        <div
          @click="funShare"
          class="btn-join"
          v-if="detailData.current_user && detailDataGroupStatus==='1' &&detailData.activity.status==='1' && detailData.current_sid&& detailData.activity.status==='1'"
        >邀请好友立即成团</div>
        <div
          @click="funShare"
          class="btn-join"
          v-if="detailData.current_user && detailDataGroupStatus==='2' &&detailData.activity.status==='1' && detailData.current_user.is_leader==='1' &&detailData.current_sid&& detailData.activity.status==='1'"
        >邀请好友继续参团</div>
        <div
          class="btn-join"
          v-if="!detailData.current_user && detailData.is_open===1&& !detailData.current_user_join_group && detailData.current_sid"
          @click="startGroup"
        >发起拼团</div>

        <div
          class="btn-join"
          @click="goStudy"
          v-if="detailData.current_user && detailData.current_user.is_leader==='0' && detailDataGroupStatus==='2'&&detailData.current_sid"
        >去学习</div>
        <div
          @click="inputAddress"
          class="btn-address"
          v-if="detailData.current_user && detailData.current_user.is_leader==='0'&& detailDataGroupStatus!=='3' && !detailData.current_user.receiver && detailData.current_sid"
        >填写收货地址</div>
        <div
          class="btn-join"
          v-if="!detailData.current_user && detailData.current_user_join_group && detailData.current_sid"
          @click="checkMyGroup"
        >查看我的拼团</div>
        <p
          @click="checkAddress"
          v-if="detailData.current_user && detailData.current_user.receiver &&detailData.current_sid"
        >查看收货地址>></p>
      </div>
    </div>
    <div :class="[{'bg-spell':activeTab==='spell','bg-detail':activeTab==='detail'},'bottom']">
      <div class="tab">
        <span :class="[{'active-btn':activeTab==='rule'},'tab-btn']" @click="tabChange('rule')">活动规则</span>
        <span
          :class="[{'active-btn':activeTab==='detail' || activeTab==='spell'},'tab-btn']"
          @click="tabChange('detail')"
        >课程详情</span>
      </div>
      <!-- tab内容区 -->
      <tab-content :activeTab="activeTab" @funBtnSide="funBtnSide" @goBack="goBack"></tab-content>
    </div>
    <popup-address
      :formData1="formData"
      :provinceReady="provinceReady"
      :cityReady="cityReady"
      @updataCityFinished="updataCityFinished"
      @updataSubFinished="updataSubFinished"
      @closePopup="showAddress=false; provinceReady=false; cityReady=false"
      @submit="addressSubmit"
      v-if="showAddress"
    ></popup-address>
    <popup-download-app
      :popupType="popupType"
      @downloadApp="downloadAppClick"
      @closePopup="showPopup=false"
      v-if="showPopup"
    ></popup-download-app>
    <v-dialog :dialogText="dialogText" @closeDialog="showDialog=false" v-if="showDialog"></v-dialog>
    <popup-share-wechat @closePopup="showPopupShareWechat = false" v-if="showPopupShareWechat"></popup-share-wechat>
    <!-- <div style="width:100px;height:50px;background:#fff;position:fixed;top:0;right:0;color:#000;font-size:20px">{{detailData.current_sid}}</div> -->
  </div>
</template>
<script>
import tabContent from "~/components/group_buy/tab_content.vue";
import popupAddress from "~/components/group_buy/popup_address.vue";
import popupDownloadApp from "~/components/group_buy/popup_download_app.vue";
import popupShareWechat from "~/components/popup_share_wechat.vue";
import dialog from "~/components/dialog.vue";
import axios from '~/utils/axios'
import { WxShareConfig } from "~/assets/js/wxConfig";
import { appShare, groupbuy_downloadApp, getQueryString,init} from "../group_buy";
import eventEmitter from '~/utils/event-center'

export default {
  head() {
    return {
      title: "拼团「Smart Phonics智慧自然拼读小课堂」"
    };
  },
  data() {
    return {
      isWeixin:false,
      activeTab: "rule",
      isGroup: false,
      showPopup: false,
      showDialog: false,
      showAddress: false,
      showPopupShareWechat: false,
      popupType: "download",
      formData: {
        receiver: "",
        mobile: "",
        province: "",
        city: "",
        area: "",
        detailAddress: "",
        isActive: false
      },
      dialogText: "此活动仅限abc360新学员参团",
      statusCode: 0,
      detailData: {
        groupbuy: {
          //拼团信息
          code: "",
          status: "", // 1-待成团 2-拼团成功 3-拼团失败
          left_num: "" // 还剩几人
        },
        member: [
          {
            //团员信息
            is_leader: "", // 1-团长 0-团员
            sid: "",
            order_id: "",
            avatar: ""
          }
        ],
        activity: {
          // 拼团活动信息
          status: "" // 1-进行中 2-已结束
        },
        current_user: {
          // 当期登录用户是否已经加入该团，加入则返回此字段，否则不返回
          order_id: "", // 用来更新用户的收货地址。
          is_leader: "",
          receiver: "",
          mobile: "",
          address: ""
        },
        is_open: 0 // 当前登录用户，是否满足开团条件。 0 - 不可开团 1-可开团
      },
      detailDataGroupStatus:'',
      openId: "",
      provinceReady: false,
      cityReady: false
    };
  },
  components: {
    tabContent,
    popupAddress,
    popupDownloadApp,
    popupShareWechat,
    "v-dialog": dialog
  },
  mounted() {
    init();
    this.eventOnListen();
    const currentPlatform = sessionStorage.getItem('currentPlatform');
    if(currentPlatform === 'wx'){
      this.isWeixin = true;
    }
    this.initData();
  },
  methods: {
    initData(){
      const indexPay = getQueryString("indexPay");
      const groupbuyId = getQueryString("groupbuyId");
      const wxcode = getQueryString("code");
      const currentPlatform = sessionStorage.getItem('currentPlatform');

      axios.get(`/MiniProgramApi/LessonGroupBuy/getGroupDetail?groupbuy_id=${groupbuyId}`)
      .then(res => {
        this.statusCode = res.code;
        this.detailData = res.data;

        if(res.data.groupbuy){
          this.detailDataGroupStatus = res.data.groupbuy.status;
        }

        if(indexPay === 'true'){
          //首页支付过来的流程
          if(res.data.member === null){
            //如果成员是null，则有可能支付回调还没成功，需要重新请求
            setTimeout(()=>{
              this.initData();
            },1000)
          }
        }

        if (currentPlatform === 'wx') {
          //走微信的流程
          this.funWxShare();
          if (this.statusCode === 3019) {
            this.getWXCode();
            return;
          }
          if (wxcode) {
            axios
            .post("/MiniProgramApi/LessonGroupBuy/getWxLogin", {
              code: wxcode
            })
            .then(res => {
              this.openId = res.data.open_id;
              if (res.data.is_login === 0) {
                //用户未登录
                axios.get(`/MiniProgramApi/LessonGroupBuy/getRecommendCodeByGroupCode?group_code=${this.detailData.groupbuy.code}`)
                .then(res => {
                    this.$router.push({
                      name: "group_buy-login",
                      query: {
                        groupbuyId: groupbuyId,
                        groupbuyCode: res.data.recommend_code
                      }
                    });
                  });
              } else {
                //已登录
                this.funPay();
              }
            });
          }
        }
      });
    },
    startGroup() {
      if (this.detailData.activity.status === "2") {
        this.showPopup = true;
        this.popupType = "download";
        return;
      }
      let code = '';
      if(this.detailData.groupbuy){
        code = this.detailData.groupbuy.code
      }
      this.$router.push({
        name: "group_buy-index",
        query: { groupbuyCode: code }
      });
    },
    checkMyGroup() {
      let groupbuy_id = '';
      if(this.detailData.current_user_join_group){
        groupbuy_id = this.detailData.current_user_join_group.groupbuy_id
      }
      window.location.href = `${process.env.BASE_URL}/group_buy/detail?groupbuyId=${groupbuy_id}`;
    },
    goStudy() {
      this.$router.push({ name: "group_buy-video_list" });
    },
    inputAddress() {
      this.showAddress = true;
    },
    updataCityFinished() {
      this.formData.city = this.detailData.current_user.address.split(",")[1];
      this.formData = Object.assign({}, this.formData);
      this.cityReady = true;
    },
    updataSubFinished() {
      this.formData.area = this.detailData.current_user.address.split(",")[2];
      this.formData = Object.assign({}, this.formData);
    },
    addressSubmit() {
      axios
        .post("/MiniProgramApi/LessonGroupBuy/updateAddress", {
          order_id: this.detailData.current_user.order_id,
          mobile: this.formData.mobile,
          receiver: this.formData.receiver,
          address: `${this.formData.province},${this.formData.city},${this.formData.area},${this.formData.detailAddress}`
        })
        .then(res => {
          const groupbuyId = getQueryString("groupbuyId");
          this.showAddress = false;
          this.dialogText = "保存成功";
          axios
            .get(
              `/MiniProgramApi/LessonGroupBuy/getGroupDetail?groupbuy_id=${groupbuyId}`
            )
            .then(res => {
              if (this.statusCode === 3019) {
                this.getWXCode();
                return;
              }
              this.statusCode = res.code;
              this.detailData = res.data;
              this.formData.receiver = res.data.current_user.receiver;
              this.formData.mobile = res.data.current_user.mobile;
              this.formData.province = res.data.current_user.address.split(
                ","
              )[0];
              this.formData.city = res.data.current_user.address.split(",")[1];
              this.formData.area = res.data.current_user.address.split(",")[2];
              this.formData.detailAddress = res.data.current_user.address.split(
                ","
              )[3];
              this.provinceReady = false;
              this.cityReady = false;
            });
          this.showDialog = true;
        });
    },
    tabChange(type) {
      this.activeTab = type;
    },
    funBtnSide() {
      this.activeTab = "spell";
    },
    goBack() {
      this.activeTab = "detail";
    },
    funPay() {
      const groupbuyId = getQueryString("groupbuyId");
      let params = {
        groupbuyId: groupbuyId
      };

      const currentPlatform = sessionStorage.getItem('currentPlatform');

      if (currentPlatform === 'wx') {
        params.open_id = this.openId;
      }

      axios
        .post("/MiniProgramApi/LessonGroupBuy/joinGroup", params)
        .then(res => {
          this.statusCode = res.code;
          if (res.code === 3011) {
            this.showDialog = true;
            this.dialogText = res.msg;
            return;
          }
          if (res.code === 3016) {
            this.showDialog = true;
            this.dialogText = res.msg;
            return;
          }
          if (res.code === 3019) return; //未登录
          let payData = JSON.parse(res.data.pay.data);
          let appPayData = res.data.order;

          if (currentPlatform === 'wx') {
            // 微信环境直接调取微信支付接口
            setTimeout(() => {
              wx.chooseWXPay({
                timestamp: payData.timeStamp, // 支付签名时间戳，注意微信jssdk中的所有使用timestamp字段均为小写。但最新版的支付后台生成签名使用的timeStamp字段名需大写其中的S字符
                nonceStr: payData.nonceStr, // 支付签名随机串，不长于 32 位
                package: payData.package, // 统一支付接口返回的prepay_id参数值，提交格式如：prepay_id=\*\*\*）
                signType: payData.signType, // 签名方式，默认为'SHA1'，使用新版支付需传入'MD5'
                paySign: payData.paySign, // 支付签名
                success: function(res) {
                  // 支付成功后的回调函数
                  axios
                    .get(
                      `/MiniProgramApi/LessonGroupBuy/getGroupDetail?groupbuy_id=${groupbuyId}`
                    )
                    .then(res => {
                      this.statusCode = res.code;
                      this.detailData = res.data;
                      this.funWxShare();
                    }).catch(err=>{
                      console.log('getGroupDetailerr',err);
                    })
                },
                fail: function(res) {
                  console.log(res);
                }
              });
            }, 500);
          }else{
            //如果是app环境则调用原生支付
            jsCallNative(appPayData)
          }
        })
        .catch(err=>{
          console.log('axios error',err)
        });
    },
    getWXCode() {
      //获取code
      const groupbuyId = getQueryString("groupbuyId");
      const urlData = {
        appid: process.env.APP_ID,
        redirect_uri: encodeURIComponent(
          `${process.env.BASE_URL}/group_buy/detail?groupbuyId=${groupbuyId}`
        ),
        response_type: "code",
        scope: "snsapi_base"
      };
      window.location.href = `https://open.weixin.qq.com/connect/oauth2/authorize?appid=${urlData.appid}&redirect_uri=${urlData.redirect_uri}&response_type=${urlData.response_type}&scope=${urlData.scope}#wechat_redirect`;
    },
    joinGroup() {
      const currentPlatform = sessionStorage.getItem('currentPlatform');

      if (this.detailData.activity.status === "2") {
        //活动结束提示
        this.showPopup = true;
        this.popupType = "download";
        return;
      }

      
      switch(currentPlatform){
        case 'wx':
          if (!this.detailData.current_user) {
            //未登录,跳转登录
            this.getWXCode();
          }else{
            this.funPay();
          }
          break;
        case 'app':
          this.funPay();
          break;
        case 'other':
          this.$router.push({ name: "group_buy-prompt" });
          break;
        default:
          break;
      }

    },
    checkAddress() {
      this.showAddress = true;
      const groupbuyId = getQueryString("groupbuyId");
      axios
        .get(
          `/MiniProgramApi/LessonGroupBuy/getGroupDetail?groupbuy_id=${groupbuyId}`
        )
        .then(res => {
          this.statusCode = res.code;
          this.detailData = res.data;
          this.formData.receiver = res.data.current_user.receiver;
          this.formData.mobile = res.data.current_user.mobile;
          this.formData.province = res.data.current_user.address.split(",")[0];
          this.provinceReady = true;
          this.formData.detailAddress = res.data.current_user.address.split(",")[3];
        });
    },
    funShare() {
      const currentPlatform = sessionStorage.getItem('currentPlatform');
      if (currentPlatform === 'wx') {
        //微信环境
        this.showPopupShareWechat = true;
      } else {
        //app环境
        const shareData = {
          imgUrl: `https://qn-static.landi.com/uploadtoola4b025bbf7c19dfc16895b0ab0b776a2.png`,
          link: `${window.location.href}&groupbuyCode=${this.detailData.groupbuy.code}`,
          title: "为了宝贝拼了「7天突破26个字母的标准发音」"
        };
        appShare(shareData);
      }
    },
    funWxShare() {
      //微信环境
      const { desc1, desc2, imgUrl, link, title } = {
        desc1: "abc360英语，让孩子能说会考。拼团还差你1个。",
        desc2: "为了宝贝拼了「7天突破26个字母的标准发音」。",
        imgUrl: `https://qn-static.landi.com/uploadtoola4b025bbf7c19dfc16895b0ab0b776a2.png`,
        link: `${window.location.href}&groupbuyCode=${this.detailData.groupbuy.code}`,
        title: "为了宝贝拼了「7天突破26个字母的标准发音」。"
      };
      WxShareConfig().then(res => {
        res.ready(() => {
          //低版本微信兼容
          let appMessage = {
            title: title, //分享标题
            desc: desc1, //分享描述
            link: link, //分享链接
            imgUrl: imgUrl, //分享图标
            success: function() {
              this.showPopupShareWechat = false;
            },
            cancel: function() {}
          };
          let timeline = {
            title: title, // 分享标题
            link: link, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
            imgUrl: imgUrl, // 分享图标
            success: function() {
              this.showPopupShareWechat = false;
            },
            cancel: function() {}
          };
          //分享给朋友
          res.updataAppMessageShareData
            ? res.updataAppMessageShareData(appMessage)
            : res.onMenuShareAppMessage(appMessage);
          //分享到朋友圈
          res.updateTimelineShareData
            ? res.updateTimelineShareData(timeline)
            : res.onMenuShareTimeline(timeline);
        });
      });
    },
    downloadAppClick() {
      groupbuy_downloadApp();
    },
    /**
     * 监听
     */
    eventOnListen(){
      eventEmitter.on('nativePayCallBack', data => {
        const groupbuyId = this.groupbuyId
        if(data.result === '0'){
          //支付成功
          axios
            .get(`/MiniProgramApi/LessonGroupBuy/getGroupDetail?groupbuy_id=${groupbuyId}`)
            .then(res => {
              this.statusCode = res.code;
              this.detailData = res.data;
            }).catch(err=>{
              console.log('getGroupDetailerr',err);
            })
        }
        else{
          this.showDialog=true
          this.dialogText='支付失败'
        }
      });
    },
  }
};
</script>
<style lang="scss" scoped>
.container {
  .top-1 {
    width: 100vw;
    height: 17.85rem;
    padding-top: 10.09rem;
    background-image: url("~assets/group_buy/img/bg-detail-top-1.png");
    background-size: cover;
    background-repeat: no-repeat;
    .top-content {
      width: 9.33rem;
      height: 7.7rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 1rem 0.83rem 0 1.09rem;
      .top-content-top {
        width: 100%;
        display: flex;
        justify-content: space-between;
        flex-direction: row;
        align-items: center;
        padding: 0 0.15rem 0 0.51rem;
        div {
          width: 1.6rem;
          display: flex;
          align-items: center;
          flex-direction: column;
          span {
            color: #ff327d;
            font-size: 0.4rem;
            line-height: 0.48rem;
            font-family: PingFang SC;
            font-weight: bold;
          }
          img {
            border-radius: 999px;
            width: 1.6rem;
            height: 118px;
            margin-top: 0.23rem;
          }
        }
      }

      .not-success {
        color: #060102;
        font-size: 0.4rem;
        font-family: PingFang SC;
        font-weight: 500;
        line-height: 0.48rem;
        margin-top: 0.5rem;
      }
      .btn-join {
        background-image: url("~assets/group_buy/img/btn-join-group.png");
        background-size: cover;
        background-repeat: no-repeat;
        width: 5.8rem;
        height: 1.23rem;
        line-height: 1rem;
        color: #ffffff;
        font-size: 0.48rem;
        margin-top: 0.3rem;
        text-align: center;
      }
      .group-success {
        display: flex;
        align-items: center;
        margin-top: 0.5rem;
        i {
          width: 0.43rem;
          height: 0.41rem;
          background-image: url("~assets/group_buy/img/icon-group-success.png");
          background-size: cover;
          background-repeat: no-repeat;
        }
        span {
          color: #ff5d94;
          font-size: 0.48rem;
          font-family: PingFang SC;
          font-weight: bold;
          margin-left: 0.28rem;
        }
      }
      .group-fail {
        display: flex;
        align-items: center;
        margin-top: 0.5rem;
        i {
          width: 0.11rem;
          height: 0.47rem;
          background-image: url("~assets/group_buy/img/icon-warning.png");
          background-size: cover;
          background-repeat: no-repeat;
        }
        span {
          color: #ff5d94;
          font-size: 0.48rem;
          font-family: PingFang SC;
          font-weight: bold;
          margin-left: 0.28rem;
        }
      }
      .fail-text {
        color: #060102;
        font-size: 0.4rem;
        margin-top: 0.71rem;
        font-weight: bold;
      }
      .find-group {
        margin-top: 0.44rem;
        span {
          color: #666666;
          font-size: 0.32rem;
          font-family: PingFang SC;
          font-weight: 500;
          line-height: 0.48rem;
        }
      }
      .btn-address {
        width: 5.8rem;
        height: 1.23rem;
        background-image: url("~assets/group_buy/img/btn-grey.png");
        background-size: cover;
        background-repeat: no-repeat;
        text-align: center;
        line-height: 1rem;
        color: #ff327d;
        font-size: 0.48rem;
        font-family: PingFang SC;
        font-weight: bold;
        margin-top: 0.2rem;
      }
      .btn-stydy {
        margin-top: 0.85rem;
      }
      .find-address {
        color: #666666;
        font-size: 0.37rem;
        font-family: PingFang SC;
        font-weight: 500;
        margin-top: 0.36rem;
      }
    }
  }
  .top-2 {
    background-image: url("~assets/group_buy/img/bg-detail-top-2.png") !important;
    height: 19.49rem !important;
  }
  .bottom {
    width: 100vw;
    height: 24.61rem;
    background-image: url("~assets/group_buy/img/bg-detail-bottom-1.png");
    background-size: cover;
    background-repeat: no-repeat;
    .tab {
      display: flex;
      justify-content: space-between;
      padding: 0.5rem 1rem 0 1rem;
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
  }
}
.color-pink {
  color: #fe5f8f !important;
}

.bg-spell {
  background-image: url("~assets/group_buy/img/bg-detail-bottom-3.png") !important;
  height: 18.37rem !important;
}
.bg-detail {
  height: 48.21rem !important;
  background-image: url("~assets/group_buy/img/bg-detail-bottom-2.png") !important;
}
</style>