<template>
  <div id="bruin">
    <div class="bruin-background">
      <div class="bruin-header">
        <img class="bruin-header-ways" src="../../../assets/bruin/img/ways.png" @click="goToRule" />
        <img class="bruin-header-work" src="../../../assets/bruin/img/work.png" />
      </div>
      <div class="bruin-first">
        <div class="bruin-first-div" v-for="(item, index) in firstDiv" :key="index">
          <img class="bruin-first-img" src="../../../assets/bruin/img/bruin_div.png" />
        </div>
      </div>
      <div class="bruin-second">
        <div class="bruin-second-div" v-for="(item, index) in secondDiv" :key="index">
          <img class="bruin-second-img" src="../../../assets/bruin/img/bruin_div.png" />
        </div>
      </div>
      <div class="button-div">
        <div class="button-div-first">
          <div class="button-div-first-content">获取小熊</div>
        </div>
        <div class="button-div-second" @click="abstractAction">
          <div class="button-div-second-content">开始抽取</div>
        </div>
        <div class="abstract-time">
          <div class="abstract-time-content">当前可抽取0次</div>
        </div>
      </div>
      <div class="rule-content">
        <img class="rule-content-img" src="../../../assets/bruin/img/activity_rule.png" />
      </div>
    </div>
    <Abstract :abstractShow="abstractShow" @fcancelShow="cancelShow"></Abstract>
  </div>
</template>
<script>
import Abstract from './abstract'
export default {
  name: 'myBruin',
  head () {
    return {
      titile: '集五熊，赢千万课时'
    }
  },
  data () {
    return {
      firstDiv: [1, 2, 3],
      secondDiv: [1, 2],
      abstractShow: false
    }
  },
  components: {
    'Abstract': Abstract
  },
  methods: {
    // 跳转规则页面
    goToRule () {
      window.location = `http://192.168.216.37:54338/bruin/rule/`
    },
    abstractAction () {
      this.abstractShow = true
    },
    cancelShow () {
      this.abstractShow = false
    }
  }
}
</script>
<style lang="scss" scoped>
@import "~/assets/bruin/css/main.scss";
#bruin {
  overflow: auto;
  -webkit-overflow-scrolling: auto;
  width: 100vw;
  height: 100vh;
  background-color: #500083;
  .bruin-background {
    background: url("../../../assets/bruin/img/bruin_background.png") no-repeat;
    background-size: 100%;
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
        .bruin-first-img {
          width: 227px;
          height: 331px;
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
        .bruin-second-img {
          width: 227px;
          height: 331px;
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
        &-content {
          font-size: 28px;
          font-weight: 600;
          color: rgba(125, 125, 125, 1);
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
</style>