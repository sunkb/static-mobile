<template>
  <div id="bruin">
    <div class="bruin-background">
      <div class="bruin-marquee">
        {{pmdInfo}}
      </div>
      <div class="bruin-header">
        <img class="bruin-header-ways" src="../../../assets/bruin/img/ways.png" @click="goToRule" />
        <img class="bruin-header-work" src="../../../assets/bruin/img/work.png" @click="goToHome"/>
      </div>
      <div class="bruin-first">
        <div class="bruin-first-div" v-for="(item, index) in firstDiv" :key="index">
          <div class="bruin-first-name">
            <div v-if="Number(item.num) > 0 ? true : false" class="bruin-first-name-content">{{item.name + " x" + item.num}}</div>
            <div v-if="Number(item.num) > 0 ? false : true " class="bruin-first-name-content1">{{item.name}}</div>
          </div>
          <img class="bruin-first-img" src="https://qn-static.landi.com/uploadtool543d8258ed2c2579eb63b890d7207056.png" />
          <img v-show="Number(item.num) > 0 ? false : true" class="bruin-first-view" :src="slidesView[item.card_no - 1].src" />
          <div v-show="Number(item.num) > 0 ? true : false" class="bruin-first-own">
            <img class="bruin-first-own-light" src="https://qn-static.landi.com/uploadtool1fe0c9c2ae04dae40e2d23643afd82eb.png" />
            <div :id="'bruin-keys' + item.card_no"></div>
          </div>
        </div>
      </div>
      <div class="bruin-second">
        <div class="bruin-second-div" v-for="(item, index) in secondDiv" :key="index">
          <div class="bruin-second-name">
            <div v-if="Number(item.num) > 0 ? true : false" class="bruin-second-name-content">{{item.name + " x" + item.num}}</div>
            <div v-if="Number(item.num) > 0 ? false : true " class="bruin-second-name-content1">{{item.name}}</div>
          </div>
          <img class="bruin-second-img" src="https://qn-static.landi.com/uploadtool543d8258ed2c2579eb63b890d7207056.png" />
          <img v-show="Number(item.num) > 0 ? false : true" class="bruin-second-view" :src="slidesView[item.card_no - 1].src" />
          <div v-show="Number(item.num) > 0 ? true : false" class="bruin-second-own">
            <img class="bruin-second-own-light" src="https://qn-static.landi.com/uploadtool1fe0c9c2ae04dae40e2d23643afd82eb.png" />
            <div :id="'bruin-keys' + item.card_no"></div>
          </div>
        </div>
      </div>
      <div class="button-div">
        <div class="button-div-first">
          <div class="button-div-first-content" @click="goToHome">获取小熊</div>
        </div>
        <div class="button-div-second" @click="abstractAction">
          <div class="button-div-second-content">开始抽取</div>
        </div>
        <div class="abstract-time">
          <div>当前可抽取</div>
          <div :class="awardChange > 0 ? 'abstract-time-content1' : 'abstract-time-content'">{{awardChange}}</div><div>次</div>
        </div>
      </div>
      <div class="rule-content">
        <img class="rule-content-img" src="https://qn-static.landi.com/uploadtool51dc78a12a233403690780d3cd48c421.png" />
        <img @click="goToRule" class="rule-content-button" src="../../../assets/bruin/img/rule_button.png" />
      </div>
    </div>
    <toast ref="toast"></toast>
    <Abstract :abstractShow="abstractShow" @fcancelShow="cancelShow"></Abstract>
  </div>
</template>
<script>
import Abstract from './abstract'
import { API } from '~/pages/bruin/consts'
import axios from '~/utils/axios'
import Toast from '~/components/Toast'
export default {
  name: 'myBruin',
  head () {
    return {
      titile: '集五熊，赢千万课时',
      myBruinData: {}
    }
  },
  data () {
    return {
      firstDiv: [
        {
          card_no: 1,
          num: 0,
          name: '乐学熊'
        },
        {
          card_no: 2,
          num: 0,
          name: '聪慧熊'
        },
        {
          card_no: 3,
          num: 0,
          name: '健康熊'
        },
      ],
      secondDiv: [
        {
          card_no: 4,
          num: 0,
          name: '勤奋熊'
        },
        {
          card_no: 5,
          num: 0,
          name: '勇敢熊'
        },
      ],
      abstractShow: false,
      awardChange: 0, // 可以抓熊的次数
      pmdInfo: '', // 跑马灯内容
      slidesView: [
        {
          src: 'https://qn-static.landi.com/uploadtoolcdb18852e43ed742d245e496dca2483e.png' // 乐学
        },
        {
          src: 'https://qn-static.landi.com/uploadtool4f6c2142f18d9a0feccacbd73c7c1ed0.png' // 聪慧
        },
        {
          src: 'https://qn-static.landi.com/uploadtool98d52df665c24b5e29b8bb1e030af934.png' // 健康
        },
        {
          src: 'https://qn-static.landi.com/uploadtool57cfdb371c7f82c0fd3d6319ca52eb3f.png' // 勤奋
        },
        {
          src: 'https://qn-static.landi.com/uploadtool6425ca67c5dc62ee4c4cc80a0267cd29.png' // 勇敢
        }
      ]
    }
  },
  components: {
    'Abstract': Abstract,
    'toast': Toast
  },
  methods: {
    // 跳转规则页面
    goToRule () {
      window.location = `${process.env.BASE_URL}/bruin/rule/`
    },
    // 跳转至首页
    goToHome (){
      window.location = `${process.env.BASE_URL}/bruin/`
    },
    async abstractAction () {
      if(!Number(this.awardChange)) {
        this.$refs['toast'].showToast('您当前可抽取次数为0！')
        return
      }
      this.abstractShow = true
    },
    cancelShow () {
      this.abstractShow = false
      window.location = `${process.env.BASE_URL}/bruin/my_bruin`
    },
    // 我的熊包的数据请求
    async getMyBruinData () {
      const activityID = 1
      try {
        const res = await axios.get(`${API.MY_BRUIN}?activity_id=${activityID}`)
        if(!res.status) {
          console.log(res.info)
          return
        }
        this.awardChange = res.data.lucky_num
        this.secondDiv = []
        this.firstDiv = []
        const cards = res.data.cards || []
        cards.forEach((element, index) => {
          if(index > 2) {
            this.secondDiv.push(element)
          } else {
            this.firstDiv.push(element)
          }
        })
        console.log(this.secondDiv)
        console.log(this.firstDiv)
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
        if(!res.status) {
          console.log(res.info)
          return 
        }
        this.pmdInfo = res.data || '0人已集齐，2019年1月1日18：00开奖'
      } catch (err) {
          console.log(res)
          return
      }
    }
  },
  created(){
    this.getMyBruinData()
    this.getBruinPMD()
  }
}
</script>
<style lang="scss" scoped>
@import "~/assets/bruin/css/main.scss";
#bruin {
  overflow: auto;
  -webkit-overflow-scrolling: auto;
  width: 100vw;
  height: 100%;
  // background-color: #500083;
  .bruin-background {
    background: url("https://qn-static.landi.com/uploadtool02540214a454a3b9a0809a71a3b9d453.png") no-repeat;
    background-size: 100%;
    width: 100vw;
    height: 100%;
    .bruin-marquee {
      height: 50px;
      width: 100%;
      background:rgba(0,0,0,1);
      opacity:0.5;
      font-size:28px;
      font-weight:400;
      color:rgba(255,255,255,1);
      text-align: center;
      padding-top: 5px;
    }
    .bruin-header {
      padding-top: 37px;
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
    .bruin-first {
      margin-top: 14px;
      padding-left: 32px;
      display: flex;
      .bruin-first-div {
        width: 227px;
        height: 331px;
        position: relative;
        .bruin-first-name {
          position: absolute;
          bottom: 10px;
          left: 50%;
          margin-left: -58px;
          &-content {
            text-align: center;
            width: 124px;
            font-size:26px;
            font-family:PingFang SC;
            font-weight:600;
            color:rgba(255,235,167,1);
            line-height:24px;
          }
          &-content1 {
            text-align: center;
            width: 124px;
            font-size:26px;
            font-family:PingFang SC;
            font-weight:600;
            color:rgba(130,42,180,1);
            line-height:24px;
          }
        }
        .bruin-first-img {
          width: 227px;
          height: 331px;
        }
        .bruin-first-view {
          width: 175px;
          height: 248px;
          position: absolute;
          top: 30px;
          left: 50%;
          margin-left: -87px;
        }
        .bruin-first-own {
          &-light {
            width: 228px;
            height: 340px;
            position: absolute;
            top: 0px;
            left: 0px;
          }
        }
      }
    }
    .bruin-second {
      margin-top: 36px;
      display: flex;
      justify-content: center;
      .bruin-second-div {
        width: 227px;
        height: 331px;
        position: relative;
        .bruin-second-name {
          position: absolute;
          bottom: 10px;
          left: 50%;
          margin-left: -58px;
          &-content {
            text-align: center;
            width: 124px;
            font-size:26px;
            font-family:PingFang SC;
            font-weight:600;
            color:rgba(255,235,167,1);
            line-height:24px;
          }
          &-content1 {
            text-align: center;
            width: 124px;
            font-size:26px;
            font-family:PingFang SC;
            font-weight:600;
            color:rgba(130,42,180,1);
            line-height:24px;
          }
        }
        .bruin-second-img {
          width: 227px;
          height: 331px;
        }
        .bruin-second-view {
          width: 175px;
          height: 248px;
          position: absolute;
          top: 30px;
          left: 50%;
          margin-left: -87px;
        }
        .bruin-second-own {
          &-light {
            width: 228px;
            height: 340px;
            position: absolute;
            top: 0px;
            left: 0px;
          }
        }
      }
    }
    .button-div {
      display: flex;
      margin-top: 120px;
      justify-content: center;
      position: relative;
      .button-div-first {
        width: 314px;
        height: 99px;
        background: rgba(20, 200, 210, 1);
        box-shadow: 0px 10px 0px 0px rgba(12, 129, 135, 1);
        border-radius: 24px;
        margin-right: 30px;
        display: flex;
        align-items: center;
        justify-content: center;
        &-content {
          font-size: 44px;
          font-family: PingFang SC;
          font-weight: 600;
          color: rgba(255, 255, 255, 1);
          line-height: 24px;
        }
      }
      .button-div-second {
        width: 314px;
        height: 99px;
        background: rgba(255, 126, 126, 1);
        box-shadow: 0px 10px 0px 0px rgba(184, 71, 71, 1);
        border-radius: 24px;
        display: flex;
        align-items: center;
        justify-content: center;
        &-content {
          font-size: 44px;
          font-family: PingFang SC;
          font-weight: 600;
          color: rgba(255, 255, 255, 1);
          line-height: 24px;
        }
      }
      .abstract-time {
        width: 216px;
        height: 65px;
        position: absolute;
        top: -63px;
        right: 30px;
        background: url("../../../assets/bruin/img/abstract_time.png") no-repeat;
        background-size: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 28px;
        font-weight: 600;
        color: rgba(125, 125, 125, 1);
        
        &-content {
          font-size: 28px;
          font-weight: 600;
          color: red;
          text-align: center;
        }
        &-content1 {
          font-size: 28px;
          font-weight: 600;
          color: green;
          text-align: center;
        }
      }
    }
    .rule-content {
      width: 682px;
      height: 775px;
      margin: 0 auto;
      margin-top: 71px;
      position: relative;
      .rule-content-img {
        width: 682px;
        height: 775px;
      }
      .rule-content-button {
        position: absolute;
        width: 294px;
        height: 24px;
        bottom: 30px;
        right: 34px;
      }
    }
  }
}
#bruin-keys1 {
  animation-name: rainbow1;
  animation-duration: 1s;
  animation-iteration-count: infinite;
  width: 197px;
  height: 228px;
  position: absolute;
  top: 40px;
  left: 10px;
  background-size: 100%;
  background-repeat: no-repeat;
}
#bruin-keys2 {
  animation-name: rainbow2;
  animation-duration: 1s;
  animation-iteration-count: infinite;
  width: 197px;
  height: 228px;
  position: absolute;
  top: 40px;
  left: 10px;
  background-size: 100%;
  background-repeat: no-repeat;
}
#bruin-keys3 {
  animation-name: rainbow3;
  animation-duration: 1s;
  animation-iteration-count: infinite;
  width: 197px;
  height: 228px;
  position: absolute;
  top: 40px;
  left: 10px;
  background-size: 100%;
  background-repeat: no-repeat;
}
#bruin-keys4 {
  animation-name: rainbow4;
  animation-duration: 1s;
  animation-iteration-count: infinite;
  width: 197px;
  height: 228px;
  position: absolute;
  top: 40px;
  left: 10px;
  background-size: 100%;
  background-repeat: no-repeat;
}
#bruin-keys5 {
  animation-name: rainbow5;
  animation-duration: 0.75s;
  animation-iteration-count: infinite;
  width: 197px;
  height: 228px;
  position: absolute;
  top: 40px;
  left: 10px;
  background-size: 100%;
  background-repeat: no-repeat;
}
@keyframes rainbow1 {
  0% {
    background: url("../../../assets/bruin/img/keys/11.png");
    background-size: 100%;
  }
  25% {
    background: url("../../../assets/bruin/img/keys/12.png");
    background-size: 100%;
  }
  50% {
    background: url("../../../assets/bruin/img/keys/13.png");
    background-size: 100%;
  }
  75% {
    background: url("../../../assets/bruin/img/keys/12.png");
    background-size: 100%;
  }
  100% {
    background: url("../../../assets/bruin/img/keys/11.png");
    background-size: 100%;
  }
}
@keyframes rainbow2 {
  0% {
    background: url("../../../assets/bruin/img/keys/21.png");
    background-size: 100%;
  }
  25% {
    background: url("../../../assets/bruin/img/keys/22.png");
    background-size: 100%;
  }
  50% {
    background: url("../../../assets/bruin/img/keys/23.png");
    background-size: 100%;
  }
  75% {
    background: url("../../../assets/bruin/img/keys/22.png");
    background-size: 100%;
  }
  100% {
    background: url("../../../assets/bruin/img/keys/21.png");
    background-size: 100%;
  }
}
@keyframes rainbow3 {
  0% {
    background: url("../../../assets/bruin/img/keys/31.png");
    background-size: 100%;
  }
  25% {
    background: url("../../../assets/bruin/img/keys/32.png");
    background-size: 100%;
  }
  50% {
    background: url("../../../assets/bruin/img/keys/33.png");
    background-size: 100%;
  }
  75% {
    background: url("../../../assets/bruin/img/keys/32.png");
    background-size: 100%;
  }
  100% {
    background: url("../../../assets/bruin/img/keys/31.png");
    background-size: 100%;
  }
}
@keyframes rainbow4 {
  0% {
    background: url("../../../assets/bruin/img/keys/41.png");
    background-size: 100%;
  }
  25% {
    background: url("../../../assets/bruin/img/keys/42.png");
    background-size: 100%;
  }
  50% {
    background: url("../../../assets/bruin/img/keys/43.png");
    background-size: 100%;
  }
  75% {
    background: url("../../../assets/bruin/img/keys/42.png");
    background-size: 100%;
  }
  100% {
    background: url("../../../assets/bruin/img/keys/41.png");
    background-size: 100%;
  }
}
@keyframes rainbow5 {
  0% {
    background: url("../../../assets/bruin/img/keys/51.png");
    background-size: 100%;
  }
  25% {
    background: url("../../../assets/bruin/img/keys/52.png");
    background-size: 100%;
  }
  50% {
    background: url("../../../assets/bruin/img/keys/53.png");
    background-size: 100%;
  }
  75% {
    background: url("../../../assets/bruin/img/keys/52.png");
    background-size: 100%;
  }
  100% {
    background: url("../../../assets/bruin/img/keys/51.png");
    background-size: 100%;
  }
}
</style>