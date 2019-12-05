<template>
  <div class="poster-view">
    <component
      :is="currentTabComponent[currentPage]"
      :posterData="posterData"
      :posterUrl.sync="posterUrl"
      :mediaId="mediaId"
      @changeType="changeType"
    ></component>
  </div>
</template>

<script>
// import wx from 'weixin-js-sdk';
// import * as wxApi from '@/common/wx.js';
// if (process.client) {
//   var wx = require("weixin-js-sdk");
// }
import apiPoster from "@/api/danyue-diy-poster.js";
import one from "./_component/one.vue";
// import two from './two.vue';
import three from "./_component/three.vue";

export default {
  components: {
    one
  },
  head: {
    script: [
      {
        src:
          "https://qn-static.landi.com/uploadtoold47d092f9d9f1ab9d577a6a21fa85c0e.js"
      },
      { src: "https://res.wx.qq.com/open/js/jweixin-1.2.0.js" }
    ]
  },
  data() {
    return {
      currentTabComponent: [one, three],
      currentPage: 0,
      posterUrl: "",
      posterData: {},
      mediaId: ""
    };
  },
  methods: {
    changeType(page) {
      this.currentPage = page;
    }
  },
  created() {
    if (process.client) {
      document.title = "个性化海报";

      const urlLink = decodeURIComponent(
        document.URL.split("#")[0].split("?")[0]
      );
      apiPoster.posterIndex(urlLink).then(res => {
        console.log("res", res);
        if (!res.status) return;
        res = res.data;
        const wxConfig = res.wx_config;
        wx.config({
          ...wxConfig,
          debug:false,
          jsApiList: ["chooseImage", "uploadImage"]
        });
        // const shareObj = {
        //   title: res.wx_data.share_title,
        //   desc: res.wx_data.share_desc, // 分享描述
        //   link: res.wx_data.share_link, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
        //   imgUrl: res.wx_data.share_img_url // 分享图标
        // };
        // wx.ready(() => {
        //   wxApi.onMenuShareAppMessage(shareObj);
        //   wxApi.onMenuShareTimeline(shareObj);
        // });
        wx.error(err => {
          console.log(err);
        });
      });
    }
  }
};
</script>

<style lang="less" scoped>
.poster-view {
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: #fff;
}
</style>

