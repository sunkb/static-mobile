<template>
  <transition name="toasttrs">
    <div v-if="show">
      <div v-if="mask" class="toast-mask"></div>
      <div class="toast-content" :style="position">
        <svg v-if="loading" viewBox="25 25 50 50" class="toast-content-loading">
          <circle cx="50" cy="50" r="20" class="toast-content-loading"></circle>
        </svg>
        <div v-if="text && text != '' && loading" class="toast-content-div"></div>
        <div v-if="text && text != ''" class="toast-content-text">{{ text }}</div>
      </div>
    </div>
  </transition>
</template>

<script>

export default {
  name: 'Toast',
  data () {
    return {
      show: false,
      text: '',
      position: {},
      mask: true,
      loading: false,
      queue: []
    }
  },
  methods: {
    showToast (text, mask = true, timeout = 1500, position = {}) {
      if (this.show) {
        this.queue.push({ text, mask, timeout, position })
        return
      } else {
        this.queue.shift()
      }

      this.text = text
      this.mask = mask
      this.position = position
      this.show = true
      setTimeout(() => {
        this.show = false
        if (this.queue.length > 0) {
          this.showToast(this.queue[0].text, this.queue[0].mask, this.queue[0].timeout, this.queue[0].position)
        }
      }, timeout)
    },
    showLoadingToast (text, mask = true, position = {}) {
      this.text = text
      this.mask = mask
      this.position = position
      this.loading = true
      this.show = true
    },
    hideLoadingToast () {
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
  top: 30%;
  left: 50%;
  max-width: 400px;
  transform: translate(-50%, -50%);
  padding: 20px 30px;
  color: #fff;
  font-size: 28px;
  border-radius: 10px;
  background: rgba($color: #000000, $alpha: 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  &-div {
    height: 10px;
  }
}

.toast-content-loading {
  width: 80px;
  transform-origin: center;
  animation: rotate 2s linear infinite;
  position: relative;

  circle {
    fill: none;
    stroke: #fff;
    stroke-width: 4;
    stroke-dasharray: 1, 200;
    stroke-dashoffset: 0;
    stroke-linecap: round;
    animation: dash 1.5s ease-in-out infinite;
  }
}

@keyframes rotate {
  100% {
    transform: rotate(360deg);
  }
}

@keyframes dash {
  0% {
    stroke-dasharray: 1, 200;
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dasharray: 90, 200;
    stroke-dashoffset: -25px;
  }
  100% {
    stroke-dashoffset: -125px;
  }
}

</style>
