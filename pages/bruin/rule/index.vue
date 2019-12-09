<template>
  <div class="bruin-rule">
    <div class="rule-marquee">
      {{pmdInfo}}
    </div>
    <img
      class="bruin-rule-img"
      src="https://qn-static.landi.com/uploadtool268ec3eea4bf92331eeea6314e4b4df3.png"
    />
    <div class="home-header">
      <img class="home-header-back" src="../../../assets/bruin/img/back_home_button.png" @click="goToHome"/>
      <img class="home-header-work" src="../../../assets/bruin/img/home_bruin.png" @click="goToMyBruin"/>
    </div>
  </div>
</template>
<script>
import { API } from '~/pages/bruin/consts'
import axios from '~/utils/axios'
export default {
  name: 'rule',
  data () {
    return {
      pmdInfo: ''
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
    }
  },
  created () {},
  mounted () {
    this.getBruinPMD()
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
    &-work {
      width: 96px;
      height: 94px;
      margin-right: 18px;
    }
  }
}
</style>