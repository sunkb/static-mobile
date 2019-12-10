<template>
  <div id="announcement">
    <div class="announcement-div">
      <img
        class="announcement-div-img"
        src="https://qn-static.landi.com/uploadtool0ac56dc8d97e66477c6b860ef6acf344.png"
      />
    </div>
  </div>
</template>
<script>
export default {
  name: 'announcement',
  head () {
    return {
      title: '公告'
    }
  }
}
</script>
<style lang="scss" scoped>
#announcement {
  background: #fff;
  width: 100vw;
  height: 100%;
}
.announcement-div {
    width: 100%;
    height: 100%;
    &-img {
        width: 100%;
        height: 100%;
    }
}
</style>