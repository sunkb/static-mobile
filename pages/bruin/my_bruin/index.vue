<template>
  <div id="bruin">
    <div class="bruin-background">
      <div class="bruin-header">
        <img class="bruin-header-ways" src="../../../assets/bruin/img/ways.png" @click="goToRule" />
        <img class="bruin-header-work" src="../../../assets/bruin/img/work.png" />
      </div>
      <div class="bruin-first">
        <div class="bruin-first-div" v-for="(item, index) in firstDiv" :key="index">
          <div>
            <div></div>
          </div>
          <img class="bruin-first-img" src="../../../assets/bruin/img/bruin_div.png" />
          <img v-if="item.num > 0 ? false : true" class="bruin-first-view" src="../../../assets/bruin/img/bruin_view/1.png" />
          <div v-if="item.num > 0 ? true : false" class="bruin-first-own">
            <img class="bruin-first-own-light" src="../../../assets/bruin/img/light.png" />
            <div :id="'bruin-keys' + (index +1)"></div>
          </div>
        </div>
      </div>
      <div class="bruin-second">
        <div class="bruin-second-div" v-for="(item, index) in secondDiv" :key="index">
          <img class="bruin-second-img" src="../../../assets/bruin/img/bruin_div.png" />
          <img v-if="item.num > 0 ? false : true" class="bruin-second-view" src="../../../assets/bruin/img/bruin_view/1.png" />
          <div v-if="item.num > 0 ? true : false" v-else class="bruin-second-own">
            <img class="bruin-second-own-light" src="../../../assets/bruin/img/light.png" />
            <div :id="'bruin-keys' + (index +4)"></div>
          </div>
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
import { API } from '~/pages/bruin/consts'
import axios from '~/utils/axios'
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
      firstDiv: [],
      secondDiv: [],
      abstractShow: false
    }
  },
  components: {
    'Abstract': Abstract
  },
  methods: {
    // 跳转规则页面
    goToRule () {
      window.location = `http://192.168.216.37:54972/bruin/rule/`
    },
    abstractAction () {
      this.abstractShow = true
    },
    cancelShow () {
      this.abstractShow = false
    },
    // 我的熊包的数据请求
    async getMyBruinData () {
      const activityID = 1
      try {
        // const res = await axios.get(`${API.MY_BRUIN}?activity_id=${activityID}`)
        // if(!res.status) {
        //   console.log(res.info)
        //   return
        // }
        this.myBruinData = {
          lucky_num: 1,
          cards: [
            {
              card_no: 1,
              num: 0
            },
            {
              card_no: 1,
              num: 2
            },
            {
              card_no: 1,
              num: 2
            },
            {
              card_no: 1,
              num: 1
            },
            {
              card_no: 1,
              num: 1
            }
          ],
          is_enable: false
        }
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
      
    }
  },
  created(){
    this.getMyBruinData()
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
        position: relative;
        .bruin-first-img {
          width: 227px;
          height: 331px;
        }
        .bruin-first-view {
          width: 165px;
          height: 248px;
          position: absolute;
          top: 30px;
          left: 15px;
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
        .bruin-second-img {
          width: 227px;
          height: 331px;
        }
        .bruin-second-view {
          width: 165px;
          height: 248px;
          position: absolute;
          top: 30px;
          left: 15px;
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
#bruin-keys1 {
  animation-name: rainbow1;
  animation-duration: 1s;
  animation-iteration-count: infinite;
  width: 197px;
  height: 268px;
  position: absolute;
  top: 40px;
  left: 10px;
}
#bruin-keys2 {
  animation-name: rainbow2;
  animation-duration: 1s;
  animation-iteration-count: infinite;
  width: 197px;
  height: 268px;
  position: absolute;
  top: 40px;
  left: 10px;
}
#bruin-keys3 {
  animation-name: rainbow3;
  animation-duration: 1s;
  animation-iteration-count: infinite;
  width: 197px;
  height: 268px;
  position: absolute;
  top: 40px;
  left: 10px;
}
#bruin-keys4 {
  animation-name: rainbow4;
  animation-duration: 1s;
  animation-iteration-count: infinite;
  width: 197px;
  height: 268px;
  position: absolute;
  top: 40px;
  left: 10px;
}
#bruin-keys5 {
  animation-name: rainbow5;
  animation-duration: 0.75s;
  animation-iteration-count: infinite;
  width: 197px;
  height: 268px;
  position: absolute;
  top: 40px;
  left: 10px;
}
@keyframes rainbow1 {
  0% {
    background: url("../../../assets/bruin/img/keys/11.png") no-repeat;
    background-size: 100%;
  }
  25% {
    background: url("../../../assets/bruin/img/keys/12.png") no-repeat;
    background-size: 100%;
  }
  50% {
    background: url("../../../assets/bruin/img/keys/13.png") no-repeat;
    background-size: 100%;
  }
  75% {
    background: url("../../../assets/bruin/img/keys/12.png") no-repeat;
    background-size: 100%;
  }
  100% {
    background: url("../../../assets/bruin/img/keys/11.png") no-repeat;
    background-size: 100%;
  }
}
@keyframes rainbow2 {
  0% {
    background: url("../../../assets/bruin/img/keys/21.png") no-repeat;
    background-size: 100%;
  }
  25% {
    background: url("../../../assets/bruin/img/keys/22.png") no-repeat;
    background-size: 100%;
  }
  50% {
    background: url("../../../assets/bruin/img/keys/23.png") no-repeat;
    background-size: 100%;
  }
  75% {
    background: url("../../../assets/bruin/img/keys/22.png") no-repeat;
    background-size: 100%;
  }
  100% {
    background: url("../../../assets/bruin/img/keys/21.png") no-repeat;
    background-size: 100%;
  }
}
@keyframes rainbow3 {
  0% {
    background: url("../../../assets/bruin/img/keys/31.png") no-repeat;
    background-size: 100%;
  }
  25% {
    background: url("../../../assets/bruin/img/keys/32.png") no-repeat;
    background-size: 100%;
  }
  50% {
    background: url("../../../assets/bruin/img/keys/33.png") no-repeat;
    background-size: 100%;
  }
  75% {
    background: url("../../../assets/bruin/img/keys/32.png") no-repeat;
    background-size: 100%;
  }
  100% {
    background: url("../../../assets/bruin/img/keys/31.png") no-repeat;
    background-size: 100%;
  }
}
@keyframes rainbow4 {
  0% {
    background: url("../../../assets/bruin/img/keys/41.png") no-repeat;
    background-size: 100%;
  }
  25% {
    background: url("../../../assets/bruin/img/keys/42.png") no-repeat;
    background-size: 100%;
  }
  50% {
    background: url("../../../assets/bruin/img/keys/43.png") no-repeat;
    background-size: 100%;
  }
  75% {
    background: url("../../../assets/bruin/img/keys/42.png") no-repeat;
    background-size: 100%;
  }
  100% {
    background: url("../../../assets/bruin/img/keys/41.png") no-repeat;
    background-size: 100%;
  }
}
@keyframes rainbow5 {
  0% {
    background: url("../../../assets/bruin/img/keys/51.png") no-repeat;
    background-size: 100%;
  }
  25% {
    background: url("../../../assets/bruin/img/keys/52.png") no-repeat;
    background-size: 100%;
  }
  50% {
    background: url("../../../assets/bruin/img/keys/53.png") no-repeat;
    background-size: 100%;
  }
  75% {
    background: url("../../../assets/bruin/img/keys/52.png") no-repeat;
    background-size: 100%;
  }
  100% {
    background: url("../../../assets/bruin/img/keys/51.png") no-repeat;
    background-size: 100%;
  }
}
</style>