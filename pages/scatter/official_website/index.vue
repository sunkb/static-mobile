<template>
  <div id="official">
    <div class="header">
      <img class="header-img" :src="headerImgs[flag].src" />
    </div>
    <div class="acquire">
      <div class="acquire-title">
        <img
          class="acquire-title-left"
          src="../../../assets/scatter/official_website/img/title_left.png"
        />
        <img
          class="acquire-title-content"
          src="../../../assets/scatter/official_website/img/class_name.png"
        />
        <img
          class="acquire-title-right"
          src="../../../assets/scatter/official_website/img/title_right.png"
        />
      </div>
      <div class="acquire-input">
        <div class="acquire-input-mobile">
          <input
            v-model="verificationData.mobile"
            class="acquire-input-mobile-style"
            placeholder="请输入您的手机号码"
          />
        </div>
        <div class="acquire-input-yzm">
          <input v-model="verificationCode" class="acquire-input-yzm-style" placeholder="请输入验证码" />
          <div v-show="isShowCountDown ? true : false" class="acquire-input-yzm-button" @click="awardCode">
            <div class="acquire-input-yzm-button-text">获取验证码</div>
          </div>
          <div v-show="isShowCountDown ? false : true" class="acquire-input-yzm-down">
            <div class="acquire-input-yzm-down-text">{{countDown}}</div>
          </div>
        </div>
      </div>
      <div class="acquire-button" @click="immediateAward">
        <div class="acquire-button-text">立即领取</div>
      </div>
    </div>
    <div class="free">
      <div class="common-title">
        <img
          class="common-title-left"
          src="../../../assets/scatter/official_website/img/title_left.png"
        />
        <div class="common-title-content">领取将免费获得</div>
        <img
          class="common-title-right"
          src="../../../assets/scatter/official_website/img/title_right.png"
        />
      </div>
      <div class="free-intr">
        <div class="free-intr-div" v-for="(item, index) in freeData" :key="index">
          <img class="free-intr-div-img" :src="item.src" />
          <div class="free-intr-div-num">{{item.times}}</div>
          <div class="free-intr-div-intr">{{item.intr}}</div>
        </div>
      </div>
    </div>
    <div class="choose">
      <div class="common-title">
        <img
          class="common-title-left"
          src="../../../assets/scatter/official_website/img/title_left.png"
        />
        <div class="common-title-content">家长为什么选择兰迪</div>
        <img
          class="common-title-right"
          src="../../../assets/scatter/official_website/img/title_right.png"
        />
      </div>
      <div class="choose-swipe">
        <slide class="choose-swipe-img" :slides="firstImages" :inv="swipeTime" :name="transitionName1" :target="target"></slide>
      </div>
    </div>
    <div class="optimization">
      <img
        class="optimization-img"
        src="https://qn-static.landi.com/uploadtool2a2b4552691ad92fbfddda1fef074d1f.png"
      />
    </div>
    <div class="ways">
      <div class="common-title">
        <img
          class="common-title-left"
          src="../../../assets/scatter/official_website/img/title_left.png"
        />
        <div class="common-title-content">哈佛教授获奖研究成果-同伴学习法</div>
        <img
          class="common-title-right"
          src="../../../assets/scatter/official_website/img/title_right.png"
        />
      </div>
      <div class="ways-text">强化互动性，学习更科学高效</div>
      <img class="ways-img" src="../../../assets/scatter/official_website/img/tech_model.png" />
      <div class="ways-video">
        <video
          preload="auto"
          style="display: none;"
          id="video1"
          controls="controls"
          src="https://qn-static-landi.abc360.cn/uploadtoolae9051c14c1f2be89d46b7aee64d3c9f.mp4"
        />
        <div class="ways-video-div" @click="playFn('video1')">
          <div class="ways-video-div-play"></div>
          <img
            class="ways-video-div-pic"
            src="https://qn-static-landi.abc360.cn/uploadtoolae9051c14c1f2be89d46b7aee64d3c9f.mp4?vframe/jpg/offset/2/h/960/"
          />
        </div>
      </div>
      <div class="ways-title">专家观点</div>
      <div
        class="ways-intr1"
      >美国哈佛大学Eric教授认为，通过和同伴一起学习、讨论、交流， 帮助孩子主动习得知识，而不是被动地接受老师的传授， 这样的学习方式更符合孩子学习天性。</div>
      <img
        class="ways-intr2"
        src="https://qn-static.landi.com/uploadtool5ccfa17032a7c253f7294c9604614cde.png"
      />
    </div>
    <div class="system">
      <img
        class="system-intr"
        src="https://qn-static.landi.com/uploadtool75fb471b0cf8ce7665be7abc610e938a.png"
      />
    </div>
    <div class="industry">
      <div class="common-title">
        <img
          class="common-title-left"
          src="../../../assets/scatter/official_website/img/title_left.png"
        />
        <div class="common-title-content">兰迪少儿英语-深耕在线少儿英语行业</div>
        <img
          class="common-title-right"
          src="../../../assets/scatter/official_website/img/title_right.png"
        />
      </div>
      <div class="industry-text">兰迪少儿英语成功入选CCTV大国品牌，作为国内领先的在线外教小班课品牌，一直致力于成为有温度的国民教育品牌。</div>
      <div class="industry-swipe">
        <slide class="industry-swipe-img" :slides="secondImages" :inv="swipeTime" :name="transitionName1" :target="target"></slide>
      </div>
    </div>
    <div class="promise">
      <div class="common-title">
        <img
          class="common-title-left"
          src="../../../assets/scatter/official_website/img/title_left.png"
        />
        <div class="common-title-content">兰迪承诺</div>
        <img
          class="common-title-right"
          src="../../../assets/scatter/official_website/img/title_right.png"
        />
      </div>
      <div class="promise-text">树立行业标准 打消用户顾虑</div>
      <div class="promise-icon">
        <div v-for="(item, index) in promiseImg" :key="index">
          <img :class="'promise-img'+ index" :src="item.src" />
        </div>
      </div>
      <div class="promise-info">
        <div class="promise-info-div" v-for="(item, index) in promisrInfo" :key="index">
          <div class="promise-info-div-title">{{item.title}}</div>
          <div class="promise-info-div-content">{{item.content}}</div>
        </div>
      </div>
    </div>
    <div class="empty"></div>
    <div class="award" v-show="showFloatAction">
      <div class="award-button" @click="awardAction">
        <img
          class="award-button-info"
          src="../../../assets/scatter/official_website/img/free_logo.png"
        />
        <div class="award-button-click">
          <img
            class="award-button-click-img"
            src="../../../assets/scatter/official_website/img/award.png"
          />
        </div>
      </div>
    </div>
    <toast ref="toast"></toast>
    <postModal :abstractShow="abstractShow" @fcancelShow="fcancelShow"></postModal>
  </div>
</template>
<script>
import axios from '~/utils/axios';
import verification from '~/utils/verification';
import { isPoneAvailable } from '~/utils/util';
import Toast from '~/components/Toast'
import { videoPlayerEvent } from '~/utils/videoPlay';
import slide from '~/components/swipe/Swipe';
import postModal from './postModal';

export default {
  name: 'official',
  head () {
    return {
      title: "兰迪少儿英语" // title
    }
  },
  data () {
    return {
      abstractShow: false,
      swipeTime: 3000,
      target: '_blank',
      transitionName1: 'move',
      flag: 0,
      headerImgs: [
        {
          src: 'https://qn-static.landi.com/uploadtoolc2a96f8695246149f007638f7b560bde.png' // CEO严选真人外教
        },
        {
          src: 'https://qn-static.landi.com/uploadtool8fd9051c20148c608268e60f9711952f.png' // 首个入选CCTV
        },
        {
          src: 'https://qn-static.landi.com/uploadtool79aceea0df4a5e283f5f724c2a9287af.png' // 每天25分钟
        },
        {
          src: 'https://qn-static.landi.com/uploadtool4a733c2a8b878ad431d049eb3c0e3a24.png' // 引入’同伴学习‘
        },
        {
          src: 'https://qn-static.landi.com/uploadtoold5f4317890b93f81a86584ee0dfe7465.png' // 牛津原版
        },
        {
          src: 'https://qn-static.landi.com/uploadtoolb13bc3d115e1ef98e3477bae7a027328.png' // 60元/课起
        }
      ],
      freeData: [
        {
          src: 'https://qn-static.landi.com/uploadtoolef99fec4ae4265479cebba957c243abc.png',
          times: '1节',
          intr: '1对2同伴外教课'
        },
        {
          src: 'https://qn-static.landi.com/uploadtoold140c1b0a4b69d8ef264b5332cc11ccd.png',
          times: '1次',
          intr: '英语能力测评'
        },
        {
          src: 'https://qn-static.landi.com/uploadtool9962dabeacb5478d59f95199c19310ff.png',
          times: '1份',
          intr: '英语学习报告'
        },
        {
          src: 'https://qn-static.landi.com/uploadtooled80485f2bf616397e864b4a672af1c0.png',
          times: '1份',
          intr: '个性化学习方案'
        }
      ],
      firstImages: [ // 第一个轮播
        {
          src: 'https://qn-static.landi.com/uploadtoolf07ee9e693bceb641d090baa048b3357.png' // 真人外教授课
        },
        {
          src: 'https://qn-static.landi.com/uploadtoolf730b49abb949de5b188573829b6d9d7.png' // 1对2
        },
        {
          src: 'https://qn-static.landi.com/uploadtoola80a4dc49f011983980ae3bbeb688a75.png' // 自主研发
        },
        {
          src: 'https://qn-static.landi.com/uploadtoola12f9401bdc4630655343a5c7952bd27.png' // 三固定
        },
        {
          src: 'https://qn-static.landi.com/uploadtool28dd02f5e6b57ce41a87cdce1b0354f3.png' // 学习闭环
        },
        {
          src: 'https://qn-static.landi.com/uploadtool6545337919b146196f3ead516d6e78f7.png' // 增值服务
        }
      ],
      secondImages: [ // 第二个轮播图
        {
          src: 'https://qn-static.landi.com/uploadtoolfe0620e79bc522fc522b48ecf7bfabf2.png' // 腾讯教育
        },
        {
          src: 'https://qn-static.landi.com/uploadtool2021ba0ec19027af25ad925580d66f66.png' // 新浪
        }
      ],
      promiseImg: [
        {
          src: 'https://qn-static.landi.com/uploadtool74d8f22909eed7b553b53dea0c24ab3b.png' // 第一张
        },
        {
          src: 'https://qn-static.landi.com/uploadtool98a0bb31665c828bfa280436c50d4e79.png' // 第二张
        },
        {
          src: 'https://qn-static.landi.com/uploadtool5a7a3a45018f04a891470b232c95d313.png' // 第三张
        },
      ],
      promisrInfo: [
        {
          title: '优选师资',
          content: '老师来自“英美加” 等英语为母语的国家，爱孩子，懂教育'
        },
        {
          title: '安心保障',
          content: '若对效果或服务不满意，可随时根据合同退费'
        },
        {
          title: '服务承诺',
          content: '专业班主任老师，课堂内外全程贴心辅导'
        }
      ],
      captchaObj: null,
      verificationData: {
        mobile: '', // 手机号码
        is_reg: 1
      },
      verificationCode: '', // 验证码
      showFloatAction: false,
      centerActionBottom: 250,
      loginApi: '/Mobile/Public/getVerifyCode',
      countDown: 60,
      isShowCountDown: true,
      timeObj: null
    }
  },
  components: {
    'toast': Toast,
    'slide': slide,
    'postModal': postModal
  },
  methods: {
    // 获取验证码
    async awardCode () {
      if (this.verificationData.mobile.replace(/\s*/g, "") === '') {
        this.$refs['toast'].showToast('手机号码不能为空!')
        return
      }
      clearInterval(this.timeObj)
      if (isPoneAvailable(this.verificationData.mobile)) {
        const captchaObj = this.captchaObj;
        const res = await captchaObj.verify();
      } else {
        this.$refs['toast'].showToast('请输入正确的手机号码!')
      }
    },
    handleVerification (res) {
      if (res && !res.status) {
        this.$refs['toast'].showToast(res.info)
        return
      }
      this.$refs['toast'].showToast(res.info)
      this.isShowCountDown = false
      this.timeObj = setInterval(()=> {
        if(this.countDown === 0) {
          clearInterval(this.timeObj)
          this.countDown=60
          this.isShowCountDown= true
        }
        this.countDown--;
      },1000)
    },
    // 处理滑动
    handleScroll () {
      if (window.scrollY > this.centerActionBottom) {
        this.showFloatAction = true
      } else {
        this.showFloatAction = false
      }
    },
    // 滚动条点击领取跳转至顶端
    awardAction () {
      window.scrollTo(0, 0)
    },
    // 立即领取
    async immediateAward () {
      if (this.verificationData.mobile.replace(/\s*/g, "") === '') {
        this.$refs['toast'].showToast('手机号码不能为空!')
        return
      }
      if (isPoneAvailable(this.verificationData.mobile)) {
        if (/^\d{6}$/.test(this.verificationCode)) {
          try {
            clearInterval(this.timeObj)
            this.countDown=60
            this.isShowCountDown= true
            const params = {
              mobile: String(this.verificationData.mobile),
              code: String(this.verificationCode)
            }
            const resultData = await axios.post(`mobile/Appointment/register`, JSON.stringify(params), {
              headers: { 'Content-Type': 'application/json;charset=UTF-8' },
              transformRequest: [
                function (data) {
                  return data
                }
              ],
            })
            if (resultData.code == 0) {
              this.abstractShow=true
              return 
            }
            this.$refs['toast'].showToast('领取失败')
          } catch (err) {
            console.log(err)
            this.$refs['toast'].showToast('验证码错误!')
          }
        } else {
          this.$refs['toast'].showToast('请输入合法的验证码!')
        }
      } else {
        this.$refs['toast'].showToast('请输入正确的手机号码!')
      }
    },
    // 通过路由判断切换头部图像
    cutHeaderImg () {
      console.log(this.$route.query.flag)
      const headerFlag = this.$route.query.flag || ''
      switch (headerFlag) {
        case 'general1':
          this.flag = 0;
          break;
        case 'general2':
          this.flag = 1;
          break;
        case 'teacher':
          this.flag = 2;
          break;
        case 'general3':
          this.flag = 3;
          break;
        case 'material':
          this.flag = 4;
          break;
        case 'general4':
          this.flag = 5;
          break;
        default:
          this.flag = 0;
      }
    },
    playFn(name){
      let video1 = document.getElementById(name)
      videoPlayerEvent(video1)
    },
    fcancelShow() {
      this.abstractShow = false
    }
  },
  created () {},
  mounted () {
    this.cutHeaderImg()
    verification.init(this)
    window.addEventListener('scroll', this.handleScroll)
  }

}
</script>
<style lang="scss" scoped>
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
.mint-swipe-indicators {
  bottom: 3px!important;
}
#official {
  overflow: auto;
  -webkit-overflow-scrolling: auto;
  width: 100vw;
  .header {
    width: 100vw;
    height: 450px;
    &-img {
      width: 100vw;
      height: 450px;
    }
  }
  .acquire {
    width: 690px;
    height: 502px;
    position: absolute;
    top: 350px;
    left: 50%;
    margin-left: -345px;
    background: rgba(255, 255, 255, 1);
    box-shadow: 0px 2px 12px 0px rgba(0, 0, 0, 0.1);
    border-radius: 6px;
    &-title {
      width: 100%;
      height: 100px;
      display: flex;
      justify-content: center;
      align-items: center;
      &-left {
        width: 18px;
        height: 16px;
      }
      &-content {
        width: 372px;
        height: 36px;
        padding-left: 20px;
        padding-right: 20px;
      }
      &-right {
        width: 18px;
        height: 16px;
      }
    }
    &-input {
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      &-mobile {
        width: 630px;
        height: 90px;
        background: rgba(249, 249, 249, 1);
        border-radius: 8px;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        &-style {
          width: 580px;
          height: 60px;
          font-size: 28px;
          background: rgba(249, 249, 249, 1);
          margin-left: 30px;
        }
        &-style::-moz-placeholder {
          font-weight: 400;
          font-size: 28px;
          color: rgba(153, 153, 153, 1);
        }
        &-style::-webkit-input-placeholder {
          font-weight: 400;
          font-size: 28px;
          color: rgba(153, 153, 153, 1);
        }
      }
      &-yzm {
        width: 630px;
        height: 90px;
        background: rgba(249, 249, 249, 1);
        border-radius: 8px;
        margin-top: 40px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        &-style {
          width: 410px;
          height: 60px;
          background: rgba(249, 249, 249, 1);
          margin-left: 30px;
          font-size: 28px;
        }
        &-style::-moz-placeholder {
          font-size: 28px;
          font-weight: 400;
          color: rgba(153, 153, 153, 1);
        }
        &-style::-webkit-input-placeholder {
          font-size: 28px;
          font-weight: 400;
          color: rgba(153, 153, 153, 1);
        }
        &-button {
          width: 150px;
          height: 70px;
          background: rgba(20, 200, 210, 1);
          border-radius: 8px;
          display: flex;
          justify-content: center;
          align-items: center;
          margin-right: 10px;
          &-text {
            font-size: 24px;
            font-weight: 400;
            color: rgba(255, 255, 255, 1);
          }
        }
        &-down {
          width: 150px;
          height: 70px;
          background: #e1e1e1;
          border-radius: 40px;
          display: flex;
          justify-content: center;
          align-items: center;
          margin-right: 10px;
          &-text {
            font-size: 24px;
            font-weight: 400;
            color: rgba(255, 255, 255, 1);
          }
        }
      }
    }
    &-button {
      width: 630px;
      height: 90px;
      background: rgba(20, 200, 210, 1);
      border-radius: 8px;
      margin-top: 40px;
      margin-left: 30px;
      display: flex;
      justify-content: center;
      align-items: center;
      &-text {
        font-size: 34px;
        font-weight: 600;
        color: rgba(255, 255, 255, 1);
        line-height: 48px;
      }
    }
  }
  .free {
    margin-top: 430px;
    &-intr {
      display: flex;
      justify-content: center;
      align-items: center;
      &-div {
        width: 164px;
        height: 250px;
        background: rgba(249, 249, 249, 1);
        border-radius: 8px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin-right: 10px;
        &-img {
          width: 80px;
          height: 80px;
          background: rgba(146, 229, 221, 1);
          border-radius: 50%;
          margin-left: 42px;
        }
        &-num {
          font-size: 28px;
          font-weight: 600;
          color: rgba(51, 51, 51, 1);
          text-align: center;
          margin-top: 20px;
          margin-bottom: 6px;
        }
        &-intr {
          font-size: 22px;
          font-weight: 400;
          color: rgba(102, 102, 102, 1);
          line-height: 30px;
          text-align: center;
        }
      }
    }
  }
  .choose {
    margin-top: 140px;
    &-swipe {
      width: 690px;
      height: 428px;
      margin-left: 30px;
      &-img {
        width: 690px;
        height: 428px;
      }
    }
  }
  .optimization {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 90px;
    &-img {
      width: 750px;
      height: 780px;
    }
  }
  .ways {
    margin-top: 80px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    &-text {
      font-size: 24px;
      font-weight: 400;
      color: rgba(102, 102, 102, 1);
      text-align: center;
    }
    &-img {
      width: 750px;
      height: 277px;
      margin-top: 30px;
    }
    &-video {
      width: 690px;
      height: 388px;
      margin-top: 10px;
      position: relative;
      &-div {
        width: 690px;
        height: 388px;
        &-play {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 76px;
          height: 76px;
          background: url("~assets/presentation/img/playbtn.png") 50% 50% /
            contain no-repeat;
        }
        &-pic {
          width: inherit;
          height: inherit;
        }
      }
    }
    &-title {
      width: 690px;
      font-size: 28px;
      font-weight: 800;
      color: rgba(51, 51, 51, 1);
      margin-top: 20px;
      margin-bottom: 12px;
    }
    &-intr1 {
      width: 690px;
      font-size: 28px;
      font-weight: 400;
      color: rgba(102, 102, 102, 1);
      margin-bottom: 20px;
    }
    &-intr2 {
      width: 745px;
      height: 800px;
      // margin-bottom: 40px;
    }
  }
  .system {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    &-text {
      font-size: 24px;
      font-weight: 400;
      color: rgba(102, 102, 102, 1);
      text-align: center;
    }
    &-intr {
      width: 750px;
      height: 940px;
      margin-bottom: 60px;
    }
  }
  .industry {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    &-text {
      width: 690px;
      font-size: 24px;
      font-weight: 400;
      color: rgba(102, 102, 102, 1);
      text-align: center;
      margin-bottom: 30px;
    }
    &-swipe {
      width: 690px;
      height: 540px;
      margin-bottom: 120px;
      &-img {
        width: 690px;
        height: 540px;
      }
    }
  }
  .promise {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    &-text {
      width: 690px;
      font-size: 24px;
      font-weight: 400;
      color: rgba(102, 102, 102, 1);
      text-align: center;
      margin-bottom: 30px;
    }
    &-icon {
      width: 100%;
      padding: 0 81px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .promise-img0 {
        width: 120px;
        height: 130px;
      }
      .promise-img1 {
        width: 147px;
        height: 130px;
      }
      .promise-img2 {
        width: 116px;
        height: 130px;
      }
    }
    &-info {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 30px;
      margin-bottom: 50px;
      margin-top: -8px;
      &-div {
        width: 222px;
        height: 244px;
        background: rgba(249, 249, 249, 1);
        border-radius: 8px;
        display: flex;
        flex-direction: column;
        align-items: center;
        &-title {
          font-size: 28px;
          font-weight: 500;
          margin-top: 30px;
          color: rgba(51, 51, 51, 1);
          text-align: center;
        }
        &-content {
          width: 194px;
          font-size: 24px;
          font-weight: 400;
          margin-top: 12px;
          color: rgba(102, 102, 102, 1);
        }
      }
    }
  }
  .empty {
    width: 100%;
    height: 145px;
  }
  .award {
    height: 140px;
    width: 100%;
    background: white;
    position: fixed;
    bottom: 0px;
    display: flex;
    flex-direction: column;
    // justify-content: center;
    align-items: center;
    &-button {
      width: 690px;
      height: 100px;
      background: rgba(20, 200, 210, 1);
      border-radius: 50px;
      margin: 0 auto;
      display: flex;
      position: relative;
      &-info {
        width: 396px;
        height: 41px;
        margin-left: 60px;
        margin-top: 30px;
      }
      &-click {
        width: 202px;
        height: 100px;
        background: rgba(255, 217, 86, 1);
        border-radius: 50px;
        position: absolute;
        right: 0px;
        display: flex;
        justify-content: center;
        align-items: center;
        &-img {
          width: 144px;
          height: 41px;
        }
      }
    }
  }
}
.common-title {
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  &-left {
    width: 18px;
    height: 16px;
  }
  &-content {
    font-size: 34px;
    font-weight: 800;
    color: rgba(51, 51, 51, 1);
    padding-left: 20px;
    padding-right: 20px;
  }
  &-right {
    width: 18px;
    height: 16px;
  }
}
</style>