<template>
  <div class="bruin-rule">
    <div class="rule-marquee">
      {{pmdInfo}}
    </div>
    <img
      class="bruin-rule-img"
      src="https://qn-static.landi.com/uploadtoolb262a0e0a49df29417106c9db65b63c7.png"
    />
    <div class="home-header">
      <img class="home-header-back" src="../../../assets/bruin/img/back_home_button.png" @click="goToHome"/>
      <div class="home-header-right">
        <img
          class="home-header-right-work"
          src="../../../assets/bruin/img/home_bruin.png"
          @click="goToMyBruin"
        />
        <div v-show="curAwardBruinNum == 0 ? false : true" class="home-header-right-times"><div>{{curAwardBruinNum}}</div></div>
      </div>
    </div>
  </div>
</template>
<script>
import { API } from '~/pages/bruin/consts'
import axios from '~/utils/axios'
export default {
  name: 'rule',
  head() {
    return {
      title: "集五熊，赢千万课时"
    }
  },
  data () {
    return {
      pmdInfo: '',
      curAwardBruinNum: 0
    }
  },
  methods: {
    // 跳转至首页
    goToHome (){
      window.location = `${process.env.BASE_URL}/bruin/`
    },
    // 跳转到我的熊库
    goToMyBruin () {
      window.location = `${process.env.BASE_URL}/bruin/my_bruin/`
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
        this.curAwardBruinNum = res.data ? res.data.lucky_num : 0
      } catch (err) {
        console.log(err)
        return
      }
    }
  },
  created () {},
  mounted () {
    this.getBruinPMD()
    this.getMyBruinData()
  }
}
</script>
<style lang="scss" scoped>
.bruin-rule {
  overflow: auto;
  -webkit-overflow-scrolling: auto;
  width: 100vw;
  &-img {
    width: 100vw;
  }
  .rule-marquee {
    height: 50px;
    width: 100%;
    background:rgba(0,0,0,1);
    opacity:0.5;
    font-size:28px;
    font-weight:400;
    color:rgba(255,255,255,1);
    text-align: center;
    padding-top: 5px;
    position:absolute;
    top:0px;
  }
  .home-header {
    padding-top: 77px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: absolute;
    top: 0;
    z-index: 1000;
    &-back {
      width: 112px;
      height: 71px;
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
        width:30px;
        height:30px;
        background:rgba(255,54,0,1);
        border-radius:50%;
        font-weight:600;
        color:rgba(255,255,255,1);
        display: flex;
        align-items: center;
        justify-content: center;
        position: absolute;
        top: -6px;
        right: 20px;
      }
    }
  }
}
</style>