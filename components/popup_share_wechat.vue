<template>
  <div class="container">
    <div :class="[{'fade-in':isFadeIn},'mask']" @click="closePopup"></div>
    <div class="popup-content">
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

.popup-content {
  position: fixed;
  z-index: 800;
  top: 0.36rem;
  right: 0.21rem;
  background-image: url('~assets/group_buy/img/wechat-share.png');
  background-size: cover;
  background-repeat: no-repeat;
  width: 6.17rem;
  height: 3.56rem;
}
</style>