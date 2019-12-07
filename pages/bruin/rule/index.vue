<template>
  <div class="bruin-rule">
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
export default {
  name: 'rule',
  data () {
    return {

    }
  },
  methods: {
    // 跳转至首页
    goToHome (){
      window.location = `http://192.168.216.37:50209/bruin/`
    },
    // 跳转到我的熊库
    goToMyBruin () {
      window.location = `http://192.168.216.37:50209/bruin/my_bruin/`
    },
  },
  created () { }
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