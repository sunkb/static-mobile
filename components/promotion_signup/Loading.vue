<template>
  <transition name="ldsfade">
    <div class="lds-wrapper" v-if="visible">
      <div class="lds-ring">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  props: {
    visible: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss">

$color: #FF327D;
$lds-size: 10vw;

.lds-wrapper {
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(255, 255, 255, 0.3);
  z-index: 99;
}

.lds-ring {
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

.ldsfade-enter-active, .ldsfade-leave-active {
  transition: opacity .5s;
}
.ldsfade-enter, .ldsfade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>