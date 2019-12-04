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
if (process.client) {
  var wx = require("weixin-js-sdk");
}
import apiPoster from "@/api/danyue-diy-poster.js";
import one from "./_component/one.vue";
// import two from './two.vue';
import three from './_component/three.vue';

export default {
  components: {
    one
  },
	head: {
	    script: [
	      { src: 'https://html2canvas.hertzen.com/dist/html2canvas.min.js' }
	    ]
	},
  data() {
    return {
      currentTabComponent: [one,three],
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
    // 选择相册或者拍照
    // chooseImage(currentPage) {
    //   wx.chooseImage({
    //     count: 1, // 默认9
    //     sizeType: ['compressed'], // 可以指定是原图还是压缩图，默认二者都有
    //     sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
    //     success: (res) => {
    //       this.mediaId = res.localIds[0]; // 返回选定照片的本地ID列表，localId可以作为img标签的src属性显示图片
    //       console.log('res------->', res);
    //       this.changeType(currentPage);
    //     },
    //   });
    // },
  },
  created() {
    if (process.client) {
      document.title = "个性化海报";

      const urlLink = decodeURIComponent(
        document.URL.split("#")[0].split("?")[0]
      );
      //apiPoster.posterIndex(urlLink).then(res => {
        //console.log("res", res);
        // if (!res.status) return;
        // res = res.data;
        // this.posterData = res;
      // wxApi.wxConfig(res.wx_config, ['updateAppMessageShareData',
      //   'updateTimelineShareData',
      //   'onMenuShareAppMessage',
      //   'onMenuShareTimeline',
      //   'chooseImage',
      //   'uploadImage'], false);
      // const shareObj = {
      //   title: res.wx_data.share_title,
      //   desc: res.wx_data.share_desc, // 分享描述
      //   link: res.wx_data.share_link, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
      //   imgUrl: res.wx_data.share_img_url, // 分享图标
      // };
      // wx.ready(() => {
      //   wxApi.onMenuShareAppMessage(shareObj);
      //   wxApi.onMenuShareTimeline(shareObj);
      // });
      // wx.error((err) => {
      //   console.log(err);
      // });
      //});
    }
  }
};
</script>

<style lang="less" scoped>
.poster-view {
  width: 100%;
  height: 100%;
  overflow: auto;
}
</style>

