<template>
  <div class="container">
    <div class="go-back" v-if="showGoBack">
      <i></i>
      <span>返回</span>
    </div>
    <span class="title">{{pageTitle}}</span>
  </div>
</template>
<script>
export default {
  data() {
    return {}
  },
  props: {
    pageTitle: {
      type: String,
      default: ''
    },
    showGoBack:{
      type:Boolean,
      default:true
    }
  }
}
</script>
<style lang="scss" scoped>
.container {
  padding: 0.13rem;
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  .go-back {
    position: absolute;
    top: 0.13rem;
    left: 0.49rem;
    color: #181818;
    font-size: 0.48rem;
    display: flex;
    align-items: center;
    i {
      width: 0.32rem;
      height: 0.59rem;
      background-image: url('~assets/group_buy/img/btn-back.png');
      background-size: cover;
      background-repeat:no-repeat; 
      margin-right: 0.15rem;
    }
  }
  .title {
    color: #272727;
    font-size: 0.48rem;
  }
}
</style>