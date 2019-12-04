<template>
  <div class="bounce-animation" id="animate-wrapper">
      <div class="loading-container">
          <span class="item">海</span>
          <span class="item">报</span>
          <span class="item">正</span>
          <span class="item">在</span>
          <span class="item">制</span>
          <span class="item">作</span>
          <span class="item">中</span>
          <span class="item">.</span>
          <span class="item">.</span>
          <span class="item">.</span>
      </div>
  </div>
</template>

<script>
export default {
  data() {
    return {

    };
  },
};
</script>

<style lang="scss" scoped>
@-webkit-keyframes bounce-wave {
  0% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }
  100% {
    -webkit-transform: translateY(-20px);
    transform: translateY(-20px);
  }
}

@-moz-keyframes bounce-wave {
  0% {
    -moz-transform: translateY(0);
    transform: translateY(0);
  }
  100% {
    -moz-transform: translateY(-20px);
    transform: translateY(-20px);
  }
}

@-o-keyframes bounce-wave {
  0% {
    -o-transform: translateY(0);
    transform: translateY(0);
  }
  100% {
    -o-transform: translateY(-20px);
    transform: translateY(-20px);
  }
}

@keyframes bounce-wave {
  0% {
    -webkit-transform: translateY(0);
    -moz-transform: translateY(0);
    -o-transform: translateY(0);
    transform: translateY(0);
  }
  100% {
    -webkit-transform: translateY(-20px);
    -moz-transform: translateY(-20px);
    -o-transform: translateY(-20px);
    transform: translateY(-20px);
  }
}
/* 海报中制作中 */
.bounce-animation {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 100;
  font-family: "Helvetica Neue", Helvetica, STHeiTi, "Microsoft Yahei", Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
}

.bounce-animation .loading-container {
  position: fixed;
  left: 50%;
  top: 50%;
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-transform: translate(-50%, -50%);
  -moz-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  -o-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  z-index: 101;
}

.bounce-animation .loading-container .item {
  color: #fff;
  font-size: 46px;
  font-weight: bold;
  margin-right: 26px;
  -moz-animation: bounce-wave 0.3s infinite alternate;
  -o-animation: bounce-wave 0.3s infinite alternate;
  animation: bounce-wave 0.3s infinite alternate;
  -webkit-animation: bounce-wave 0.3s infinite alternate;
}

.loading-container .item:nth-child(2) {
  -webkit-animation-delay: 0.2s;
  -moz-animation-delay: 0.2s;
  -o-animation-delay: 0.2s;
  animation-delay: 0.2s;
}

.loading-container .item:nth-child(3) {
  -webkit-animation-delay: 0.3s;
  -moz-animation-delay: 0.3s;
  -o-animation-delay: 0.3s;
  animation-delay: 0.3s;
}

.loading-container .item:nth-child(4) {
  -webkit-animation-delay: 0.4s;
  -moz-animation-delay: 0.4s;
  -o-animation-delay: 0.4s;
  animation-delay: 0.4s;
}

.loading-container .item:nth-child(5) {
  -webkit-animation-delay: 0.5s;
  -moz-animation-delay: 0.5s;
  -o-animation-delay: 0.5s;
  animation-delay: 0.5s;
}

.loading-container .item:nth-child(6) {
  -webkit-animation-delay: 0.6s;
  -moz-animation-delay: 0.6s;
  -o-animation-delay: 0.6s;
  animation-delay: 0.6s;
}

.loading-container .item:nth-child(7) {
  -webkit-animation-delay: 0.7s;
  -moz-animation-delay: 0.7s;
  -o-animation-delay: 0.7s;
  animation-delay: 0.7s;
}

.loading-container .item:nth-child(8) {
  -webkit-animation-delay: 0.8s;
  -moz-animation-delay: 0.8s;
  -o-animation-delay: 0.8s;
  animation-delay: 0.8s;
}

.loading-container .item:nth-child(9) {
  -webkit-animation-delay: 0.9s;
  -moz-animation-delay: 0.9s;
  -o-animation-delay: 0.9s;
  animation-delay: 0.9s;
}

.loading-container .item:nth-child(10) {
  -webkit-animation-delay: 1s;
  -moz-animation-delay: 1s;
  -o-animation-delay: 1s;
  animation-delay: 1s;
}

</style>

