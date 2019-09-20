<template>
  <div class="container">
    <div :class="[{'fade-in':isFadeIn},'mask']" @click="closePopup"></div>
    <div :class="[{'move-up':isFadeIn},'popup-content']">
      <div @click="wechatShare"><i class="btn-wechat"></i><span>微信好友</span></div>
      <div @click="circleShare"><i class="btn-circle"></i><span>朋友圈</span></div>
      <div @click="qqShare"><i class="btn-qq"></i><span>QQ好友</span></div>
      <div @click="qqZoneShare"><i class="btn-qq-zone"></i><span>QQ空间</span></div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isFadeIn: true
    }
  },
  mounted() {
    this.isFadeIn = true
  },
  beforeDestroy() {
    this.isFadeIn = false
  },
  methods: {
    closePopup() {
      this.$emit('closePopup')
    },
    wechatShare(){
      this.$emit('wechatShare')
    },
    circleShare(){
      this.$emit('circleShare')
    },
    qqShare(){
      this.$emit('qqShare')
    },
    qqZoneShare(){
      this.$emit('qqZoneShare')
    }
  }
}
</script>
<style lang="scss" scoped>
.mask {
  background-color: rgba(83, 83, 83, 1);
  opacity: 0.85;
  position: fixed;
  z-index: 500;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
}
.fade-in {
  animation: fadeIn 0.5s;
}

@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 0.85;
  }
}
.move-up {
  animation: moveUp 0.5s;
}
@keyframes moveUp {
  0% {
    bottom: -100%;
  }
  100% {
    bottom: 0;
  }
}
.popup-content {
  position: fixed;
  z-index: 800;
  bottom: 0;
  left: 0;
  background-color: #fff;
  width: 100vw;
  height: 4.31rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.15rem .57rem 1.01rem .6rem;
  div{
    display: flex;
    flex-direction: column;
    align-items: center;
    i{
      width: 1.67rem;
      height: 1.67rem;
      background-size: cover;
      background-repeat: no-repeat;
    }
    .btn-wechat{
      background-image: url('~assets/group_buy/img/btn-wechat.png');
    }
    .btn-qq{
      background-image: url('~assets/group_buy/img/btn-qq.png');
    }
    .btn-circle{
      background-image: url('~assets/group_buy/img/btn-circle.png');
    }
    .btn-qq-zone{
      background-image: url('~assets/group_buy/img/btn-qq-zone.png');
    }
    span{
      color: #0C0303;
      font-size: .4rem;
    }
  }
}
</style>