<template>
  <transition name="fade">
    <div class="dialog-container">
      <div class="content">{{dialogText}}</div>
    </div>
  </transition>
</template>

<script>
export default {
  data() {
    return {
      timer: null
    }
  },
  props: {
    dialogText: {
      type: String,
      default: ''
    }
  },
  mounted() {
    this.timer = setTimeout(() => {
      clearTimeout(this.timer)
      this.timer = null
      this.$emit('closeDialog')
    }, 2000)
  }
}
</script>
<style lang="scss" scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

.dialog-container {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  .content {
    padding: 0.13rem 0.27rem;
    background: #000;
    opacity: 0.6;
    border-radius: 8px;
    text-align: center;
    color: #fff;
  }
}
</style>