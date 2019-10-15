<template>
  <transition name="toasttrs">
    <div v-if="show">
      <div v-if="mask" class="toast-mask"></div>
      <div class="toast-content" :style="position">
        <div v-if="loading" class="toast-content-loading">
          <div class="toast-content-loading-content">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
        <div v-if="text && text != '' && loading" class="toast-content-div"></div>
        <div v-if="text && text != ''" class="toast-content-text">{{ text }}</div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'Toast',
  data() {
    return {
      show: false,
      text: '',
      position: {},
      mask: true,
      loading: false
    }
  },
  methods: {
    showToast(text, mask=true, timeout=1500, position={}) {
      this.text = text
      this.mask = mask
      this.position = position
      this.show = true
      setTimeout(() => {
        this.show = false
      }, timeout);
    },
    showLoadingToast(text, mask=true, position={}) {
      this.text = text
      this.mask = mask
      this.position = position
      this.loading = true
      this.show = true
    },
    hideLoadingToast() {
      this.loading = false
      this.show = false
    }
  }
}
</script>

<style lang="scss">
.toasttrs-enter-active, .toasttrs-leave-active {
  transition: opacity .5s;
}
.toasttrs-enter, .toasttrs-leave-to {
  opacity: 0;
}

.toast-mask {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
}

.toast-content {
  position: fixed;
  top: 50%;
  left: 50%;
  max-width: 400px;
  transform: translate(-50%, -50%);
  padding: 20px 30px;
  color: #fff;
  font-size: 28px;
  border-radius: 10px;
  background: rgba($color: #000000, $alpha: 0.6);

  &-div {
    height: 10px;
  }

  &-loading {
    display: flex;
    justify-content: center;
  }
}

$color: #fff;
$lds-size: 80px;
.toast-content-loading-content {
  position: relative;
  width: $lds-size;
  height: $lds-size;

  div {
    box-sizing: border-box;
    position: absolute;
    width: $lds-size;
    height: $lds-size;
    border: 1vw solid $color;
    border-radius: 50%;
    animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    border-color: $color transparent transparent transparent;

    &:nth-child(1) {
      animation-delay: -0.45s;
    }
    &:nth-child(2) {
      animation-delay: -0.3s;
    }
    &:nth-child(3) {
      animation-delay: -0.15s;
    }
  }
}
@keyframes lds-ring {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>