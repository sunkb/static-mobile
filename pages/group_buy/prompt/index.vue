<template>
  <div class="container">
    <i></i>
    <!-- <div>支付请前往公众号或app</div> -->
    <div>支付请前往公众号</div>
    <p>
      1、依次打开「微信-“abc360英语”公众号-“领福利”菜单-轻课拼团」
    </p>
    <!-- <p>
      2、或依次打开「“
      <span @click="funGo">abc360英语</span>”app-首页“开学季
      送福利”活动海报」
    </p> -->
  </div>
</template>
<script>
export default {
  head () {
    return {
      title: '拼团「Smart Phonics智慧自然拼读小课堂」'
    }
  },
  data() {
    return {}
  },
  methods: {
    funGo() {}
  }
}
</script>
<style lang="scss" scoped>
.container {
  width: 100vw;
  height: 100vh;
  background: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.87rem .64rem 0 .65rem;
  i {
    width: 2.27rem;
    height: 2.01rem;
    background-image: url('~assets/group_buy/img/icon-prompt.png');
    background-size: cover;
    background-repeat: no-repeat;
  }
  div {
    color: #333333;
    font-size: 0.48rem;
    margin-top: .21rem;
    margin-bottom: .59rem;
  }
  p {
    color: #666666;
    font-size: 0.4rem;
    margin-top: .21rem;
    span {
      color: #30a3fe;
    }
  }
}
</style>