<template>
  <div id="announcement">
    <div class="announcement-div">
      <img v-show="activeUrl" class="announcement-div-img" :src="activeUrl" />
    </div>
  </div>
</template>
<script>
import { getQueryString } from "@/utils";

export default {
  name: "announcement",
  head() {
    return {
      title: "公告"
    };
  },
  data() {
    return {
      activeUrl: "",
      urlList: {
        "1":
          "https://qn-static.landi.com/uploadtool0ac56dc8d97e66477c6b860ef6acf344.png",
        "2":
          "https://qn-static.landi.com/uploadtool2ccbefed1a8cf0d611f862b2777dd253.png",
        "3":
          "https://qn-static.landi.com/uploadtoolc7718b2b303fa93bf8ef90bba8542fca.png"
      }
    };
  },
  mounted() {
    const aid = getQueryString("aid");
    if (aid) {
      this.activeUrl = this.urlList[aid];
      console.log("aid", this.activeUrl);
    }
  }
};
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