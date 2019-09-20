<template>
  <div class="wrapper">
    <div class="scroll">
      <div><slot></slot></div><div><slot></slot></div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>

@keyframes scrollUp {
  0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(0, -50%);
  }
}

.wrapper {
  overflow: hidden;
}

.scroll {
  animation: scrollUp 20000ms linear infinite normal;
}
</style>