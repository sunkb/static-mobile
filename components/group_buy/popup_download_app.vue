<template>
  <div class="container">
    <div :class="[{'fade-in':isFadeIn},'mask']"></div>
    <div class="popup-content">
      <img class="img-download" src="~assets/group_buy/img/download-app.png" v-if="popupType==='download'" />
      <img class="img-qr-code" src="~assets/group_buy/img/qr-code.png" v-if="popupType==='qrCode'" />
      <span class="message">很遗憾，卖完了！</span>
      <span class="describe" v-if="popupType==='download'">下载app，更多福利早知道！</span>
      <span class="describe" v-if="popupType==='qrCode'">关注服务号，更多福利早知道！</span>
      <span @click="downloadApp" class="btn" v-if="popupType==='download'">下载客户端</span>
      <span @click="saveQrCode" class="btn" v-if="popupType==='qrCode'">保存二维码到本地</span>
      <div @click="closePopup" class="btn-close"></div>
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
  props: {
    popupType: {
      type: String,
      default: ''
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
    downloadApp() {
      this.$emit('downloadApp')
    },
    saveQrCode() {
      this.$emit('saveQrCode')
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
  bottom: 0;
  left: 0;
  top: 0;
  right: 0;
  margin: auto;
  background-image: url('~assets/group_buy/img/bg-popup.png');
  background-size: cover;
  background-repeat: no-repeat;
  width: 9rem;
  height: 8.8rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  .img-download {
    width: 3.04rem;
    height: 2.32rem;
    margin-bottom: 0.77rem;
  }
  .img-qr-code {
    width: 3.81rem;
    height: 3.81rem;
  }

  .describe {
    color: #060002;
    font-family: PingFang SC;
    font-weight: bold;
    font-size: 0.37rem;
    margin-bottom: 0.21rem;
  }
  .btn {
    color: #fe5f8f;
    font-family: PingFang SC;
    font-weight: 500;
    font-size: 0.48rem;
    width: 8.4rem;
    height: 1.65rem;
    text-align: center;
    line-height: 1.65rem;
    margin-bottom: 0.3rem;
    border-top: 2px solid #dcdcdc;
  }
  .message {
    color: #060002;
    font-size: 0.48rem;
    margin-bottom: 0.15rem;
  }
  .btn-close {
    width: 0.75rem;
    height: 0.75rem;
    position: absolute;
    bottom: -1rem;
    left: 4.09rem;
    background-image: url('~assets/group_buy/img/icon-close-popup.png');
    background-size: cover;
    background-repeat: no-repeat;
    z-index: 999;
  }
}
</style>