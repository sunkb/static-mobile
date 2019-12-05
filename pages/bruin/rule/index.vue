<template>
  <div class="bruin-rule">
    <img
      class="bruin-rule-img"
      src="https://qn-static.landi.com/uploadtool268ec3eea4bf92331eeea6314e4b4df3.png"
    />
    <div class="home-header">
      <img class="home-header-back" src="../../../assets/bruin/img/back_home_button.png" />
      <img class="home-header-work" src="../../../assets/bruin/img/home_bruin.png" />
    </div>
  </div>
</template>
<script>
export default {

}
</script>
<style lang="scss" scoped>
.bruin-rule {
  overflow: auto;
  -webkit-overflow-scrolling: auto;
  width: 100vw;
  &-img {
    width: 100vw;
  }
  .home-header {
    padding-top: 77px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: absolute;
    top: 0;
    z-index: 1000;
    &-back {
      width: 112px;
      height: 71px;
    }
    &-work {
      width: 96px;
      height: 94px;
      margin-right: 18px;
    }
  }
}
</style>