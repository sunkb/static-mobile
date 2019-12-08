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
            <div v-if="item.num > 0 ? true : false" class="bruin-first-name-content">{{item.name + " x" + item.num}}</div>
            <div v-if="item.num > 0 ? false : true " class="bruin-first-name-content1">{{item.name}}</div>
          </div>
          <img class="bruin-first-img" src="../../../assets/bruin/img/bruin_div.png" />
          <img v-if="item.num > 0 ? false : true" class="bruin-first-view" :src="'/_nuxt/assets/bruin/img/bruin_view/'+ item.card_no +'.png'" />
          <div v-if="item.num > 0 ? true : false" class="bruin-first-own">
            <img class="bruin-first-own-light" src="/_nuxt/assets/bruin/img/light.png" />
            <div :id="'bruin-keys' + item.card_no"></div>
          </div>
        </div>
      </div>
      <div class="bruin-second">
        <div class="bruin-second-div" v-for="(item, index) in secondDiv" :key="index">
          <div class="bruin-second-name">
            <div v-if="item.num > 0 ? true : false" class="bruin-second-name-content">{{item.name + " x" + item.num}}</div>
            <div v-if="item.num > 0 ? false : true " class="bruin-second-name-content1">{{item.name}}</div>
          </div>
          <img class="bruin-second-img" src="../../../assets/bruin/img/bruin_div.png" />
          <img v-if="item.num > 0 ? false : true" class="bruin-second-view" :src="'/_nuxt/assets/bruin/img/bruin_view/'+ item.card_no +'.png'" />
          <div v-if="item.num > 0 ? true : false" class="bruin-second-own">
            <img class="bruin-second-own-light" src="../../../assets/bruin/img/light.png" />
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
          当前可抽取
          <div :class="awardChange > 0 ? 'abstract-time-content1' : 'abstract-time-content'">{{awardChange}}</div>次
        </div>
      </div>
      <div class="rule-content" @click="goToRule">
        <img class="rule-content-img" src="https://qn-static.landi.com/uploadtoole21f9199f510f8d0e6035c6c7389d24d.png" />
      </div>
    </div>
    <toast ref="toast"></toast>
    <Abstract :awardBruinNumber="awardBruinNumber" :abstractShow="abstractShow" @fcancelShow="cancelShow"></Abstract>
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
          num: 1,
          name: '乐学熊'
        },
        {
          card_no: 2,
          num: 1,
          name: '聪慧熊'
        },
        {
          card_no: 3,
          num: 1,
          name: '健康熊'
        },
      ],
      secondDiv: [
        {
          card_no: 4,
          num: 1,
          name: '勤奋熊'
        },
        {
          card_no: 5,
          num: 1,
          name: '勇敢熊'
        },
      ],
      abstractShow: false,
      awardChange: 0, // 可以抓熊的次数
      awardBruinNumber: 1, // 点击抓熊按钮后，出现的熊的编号
      pmdInfo: '' // 跑马灯内容
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
      if(!this.awardChange) {
        this.$refs['toast'].showToast('您当前可抽取次数为0！')
        return
      }
      this.abstractShow = true
      try {
        const activityId = 1
        const res = await axios.post(API.GRAD_BRUIN, {activity_id: activityId})
        if (!res.status) {
          console.log(res.info)
          return 
        }
        this.awardBruinNumber = res.data
      } catch (err) {
        console.log(err) 
        return 
      }
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
        // this.secondDiv = []
        // this.firstDiv = []
        this.myBruinData.cards.forEach((element, index) => {
          if(index > 2) {
            this.secondDiv.push(element)
          } else {
            this.firstDiv.push(element)
          }
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
  background-color: #500083;
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
        width: 196px;
        height: 58px;
        position: absolute;
        top: -58px;
        right: 30px;
        background: url("../../../assets/bruin/img/abstract_time.png") no-repeat;
        background-size: 100%;
        display: flex;
        align-items: center;
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
      .rule-content-img {
        width: 682px;
        height: 775px;
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