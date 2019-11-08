<template>
  <div id="announcement">
    <div class="announcement-div">
      <img
        class="announcement-div-img"
        src="https://qn-static.landi.com/uploadtool4bbb0792acda4d949fc50c5847ba6c20.png"
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