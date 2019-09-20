<template>
  <div class="container">
    <div :class="[{'fade-in':isFadeIn},'mask']" @click="closePopup"></div>
    <div :class="[{'move-up':isFadeIn},'popup-content']">
      <div @click="changePayType('ali')"  class="popup-content-item">
        <div>
          <i class="icon-alipay"></i>
          <span>支付宝</span>
        </div>
        <i v-if="showIcon"></i>
      </div>
      <div @click="changePayType('wechat')" class="popup-content-item">
        <div>
          <i class="icon-wechatpay"></i>
          <span>微信支付</span>
        </div>
        <i v-if="!showIcon"></i>
      </div>
      <div class="btn-pay" @click="appPay">立即支付</div>
    </div>
  </div>
</template>
<script>


export default {
  data() {
    return {
      showIcon: false,
      isFadeIn: true,
    }
  },
  mounted() {
    this.isFadeIn = true
  },
  beforeDestroy() {
    this.isFadeIn = false
  },
  methods: {
    changePayType(type) {
      if (this.showIcon) {
        this.showIcon = false
      } else {
        this.showIcon = true
      }
      this.$emit('changePayType', type)
    },
    closePopup() {
      this.$emit('closePopup')
    },
    appPay(){
      this.$emit('appPay')
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
.move-up{
  animation: moveUp .5s;
}
@keyframes moveUp {
  0% {
    bottom:-100%;
  }
  100% {
    bottom:0;
  }
}
.popup-content {
  position: fixed;
  z-index: 800;
  bottom: 0;
  left: 0;
  background-color: #fff;
  width: 100vw;
  .popup-content-item {
    height: 1.51rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 0.49rem 0 0.52rem;
    border-bottom: 1px solid rgba(238, 238, 238, 1);
    i {
      width: 0.53rem;
      height: 0.53rem;
      background: url('~assets/group_buy/img/icon-point-pink.png');
      background-size: cover;
      background-repeat: no-repeat;
    }
    div {
      display: flex;
      align-items: center;
      i {
        margin-right: 0.28rem;
        background-size: cover;
        background-repeat: no-repeat;
      }
      .icon-alipay {
        width: 0.69rem;
        height: 0.69rem;
        background-image: url('~assets/group_buy/img/zhifubao@2x.png');
      }
      .icon-wechatpay {
        width: 0.72rem;
        height: 0.67rem;
        background-image: url('~assets/group_buy/img/weixinzhifu@2x.png');
      }
    }
  }
  .btn-pay {
    color: #3e3a3b;
    font-size: 0.48rem;
    text-align: center;
    line-height: 1.9rem;
    font-weight: bold;
    height: 1.88rem;
  }
}
</style>