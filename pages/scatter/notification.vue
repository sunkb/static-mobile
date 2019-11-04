<template>
  <div id="notification">
    <div class="notification-div">
      <img
        class="notification-div-img"
        src="https://qn-static.landi.com/uploadtoole6134e881eaa4760616ff1c931b4c0f5.png"
      />
    </div>
  </div>
</template>
<script>
export default {
  name: 'notification',
  head () {
    return {
      title: '紧急通知'
    }
  }
}
</script>
<style lang="scss" scoped>
#notification {
  background: #fff;
  width: 100vw;
  height: 100%;
}
.notification-div {
    width: 100%;
    height: 100%;
    &-img {
        width: 100%;
        height: 100%;
    }
}
</style>