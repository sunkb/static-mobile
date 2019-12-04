<template>
  <div class="addComments">
    <div class="Comments">
      <textarea class="comMsg" type="text" v-model="comMsg" placeholder="有什么想对班主任说的吗?"></textarea>
      <div class="comMsgLength">{{comMsg.length}}/400字符</div>
    </div>
    <input
      id="video-upload-input"
      class="video-upload-input"
      type="file"
      accept="video/*"
      ref="videoUploadInput"
      @change="videoUpload"
      style="display:none"
    />
    <label for="video-upload-input">
      <img
        class="isShow"
        v-show="isShow"
        src="https://qn-static.landi.com/uploadtool48287fd617dd00d4903d7607388e57c1.png"
        alt
        @click="hasBeenVideo"
      />
    </label>

    <div @click="btn" v-if="!isShow">
      <img class="del" src="~/assets/punch_card/img/del.png" alt />
    </div>
    <video
      preload="auto"
      class="videoWin"
      style="display: none;"
      id="appearance1"
      controls
      :src="videoUrl"
    />
    <div class="appearance-video-item" @click="playFn('appearance1')">
      <div></div>
      <img v-if="!isShow" class="videoWin" :src="videoFirstImg + '?vframe/jpg/offset/2/h/960/'" />
    </div>
    <button class="release" id="release" @click="videoOK" :disabled="btnDisabled">发布</button>
    <toast class="toast" ref="toast"></toast>
    <dialog-bar
      v-model="sendVal"
      type="danger"
      content=" 确定放弃本次编辑?"
      v-on:cancel="clickCancel()"
      @danger="clickDanger"
      dangerText="确定"
    ></dialog-bar>
  </div>
</template>
<script>
import Toast from "~/components/Toast";
import dialogBar from "../tishi";
import { videoPlayerEvent } from "~/utils/videoPlay";
import { API } from "../consts";
import axios from "~/utils/axios";
import FileUploader, { FILE_TYPE } from "~/utils/upload.js";
import { VIDEO_STATUS_TYPE } from '~/pages/presentation/consts'

export default {
  // name:'addComments',
  head () {
    return {
      title: "添加评论"
    };
  },
  components: {
    //发布成功弹出框
    toast: Toast,
    "dialog-bar": dialogBar
  },
  data () {
    return {
      videoSrc: '',
      sendVal: false,
      isShow: false,
      btnDisabled: false,
      comMsg: "",
      hasBeenVideos: "",
      videoUrl: "", //上传的视频地址,
      homeworkId: this.$route.query.homeworkId || "",
      videoFirstImg: '' // 视频首帧图片
    };
  },
  mounted () {
    this.videoUrl = window.localStorage.getItem("videoUrl")
    this.videoFirstImg = window.localStorage.getItem("videoFirstImg")
    //监测回退
    history.pushState(null, null, document.URL);
    console.log("我是history", history);
    let get = localStorage.getItem("videoUrl");
    console.log(get, "localStorage.getItem");
    window.addEventListener("popstate", this.forbidback);
    if (this.videoUrl) {
      console.log("this.hasBeenVideos2", this.hasBeenVideos);
      this.isShow = false;
      this.btnDisabled = false;
      document.getElementById("release").style.backgroundColor = "#FFD750";
    } else {
      console.log("this.hasBeenVideos1", this.hasBeenVideos);
      document.getElementById("release").style.backgroundColor = "#EEEEEE";
      this.btnDisabled = true;
      this.isShow = true;
    }
  },
  // beforeDestroy(){
  //         //销毁
  //         window.removeEventListener('popstate',this.forbidback);
  // },
  methods: {
    forbidback (index) {
      console.log("1", this.hasBeenVideos);
      if (!this.hasBeenVideos) {
        this.sendVal = true;
        this.isShow = true;
      } else {
        window.location =
          `http://192.168.216.37:57725/sign_in/upLoadVideo/upLoadVideo/`;
      }

      //回退按钮点击处理
    },
    clickCancel () {
      console.log("我是取消的");
    },
    clickDanger (textArea) {
      // window.location = `${process.env.BASE_URL}/sign_in/weeklyHouseWorkSign/weeklyHouseWorkSign/`;
      window.location =`http://192.168.216.37:57725/sign_in/weeklyHouseWorkSign/weeklyHouseWorkSign/`;
      console.log("我是点了确定的");
    },
    hasBeenVideo () {
      console.log("this.hasBeenVideos1", this.hasBeenVideos);
      this.btnDisabled = false;
      this.hasBeenVideos = "+";
      this.videoUpload();
    },
    async videoUpload () {
      const fileUploader = new FileUploader();
      await fileUploader.init(1);
      this.videoSrc = fileUploader.domain;
      const uploadReturn = fileUploader.upload(
        this.$refs["videoUploadInput"].files[0],
        FILE_TYPE.VIDEO,
        this.fileUploadNext,
        this.fileUploadError,
        this.fileUploadComplete
      );
      if (uploadReturn.error) {
        this.$refs["toast"].showToast(uploadReturn.error);
        return;
      }
      this.videoStatus = VIDEO_STATUS_TYPE.UPLOADING;
      localStorage.setItem("videoUrl", this.videoUrl);
    },
    fileUploadNext (res) {
      console.log(this.videoStatus, 'this.video')
      this.videoStatus.progress = Math.round(res.total.percent * 100) / 100
      this.$refs['toast'].showToast('上传进度' + this.videoStatus.progress + '%')
    },
    fileUploadError (res) {
      this.videoStatus = VIDEO_STATUS_TYPE.ERROR
      this.$refs['toast'].showToast(res.message)
    },
    fileUploadComplete (res) {
      this.videoStatus = VIDEO_STATUS_TYPE.UPLOADED
      this.videoFirstImg = `${this.videoSrc}${res.key}`
      this.videoSrc = `${res.key}`
      console.log(this.videoSrc)
      localStorage.setItem('videoUrl', this.videoSrc)
      localStorage.setItem('videoFirstImg', this.videoFirstImg)
      this.$refs['toast'].showToast('上传成功')
      window.location = `http://192.168.216.37:57725/sign_in/addComments/addComments/?homeworkId=${this.homeworkId}`
    },
    btn () {
      this.hasBeenVideos = "+";
      this.btnDisabled = true;
      this.hasBeenVideos = "+";
      this.isShow = true;
      document.getElementById("release").style.backgroundColor = "#EEEEEE";
    },
    // release () {
    //   if (this.comMsg.length === 0) {
    //     this.$refs["toast"].showToast("请添加评论");
    //     return;
    //   }
    //   this.$refs["toast"].showToast("发布成功");
    //   this.videoOK();
    // },
    playFn (name) {
      event.stopPropagation();
      let video1 = document.getElementById(name);
      videoPlayerEvent(video1);
    },
    async videoOK () {
      const videoData = {
          video_url: this.videoUrl,
          id: this.homeworkId,
          content: this.comMsg || ''
        };
      const addSuccess = await axios.post(API.submit_Work, videoData);
      if (addSuccess.success) {
        this.$refs["toast"].showToast("发布成功");
        setTimeout(() => {
          // window.location = `${process.env.BASE_URL}/sign_in/weeklyHouseWorkSign/weeklyHouseWorkSign/`;
          window.location =`http://192.168.216.37:57725/sign_in/weeklyHouseWorkSign/weeklyHouseWorkSign/`;

        }, 1000);
      } else {
        console.log("errMsg", addSuccess.msg);
      }
    }
  },
  watch: {
    /**
     * 评论输入框
     */
    comMsg (newvalue, oldvalue) {
      if (newvalue.length <= 400) {
        this.comMsg = newvalue;
      } else {
        this.comMsg = oldvalue;
      }
    }
  }
};
</script>
<style  lang="scss" scoped>
.addComments {
  min-height: 100vh;
  min-width: 100vw;
  background-color: #f9f9f9;
  .Comments {
    position: relative;
    margin-left: 30px;
  }
  .comMsg {
    margin-top: 20px;
    padding-top: 20px;
    padding-left: 30px;
    padding-right: 30px;
    font-size: 28px;
    width: 690px;
    height: 500px;
  }
  .comMsgLength {
    position: absolute;
    top: 88%;
    left: 73%;

    color: #999999;
    font-size: 24px;
  }
  .isShow {
    margin: 30px;
    width: 356px;
    height: 200px;
  }
  .del {
    position: relative;
    float: right;
    right: 46%;
    width: 40px;
    height: 40px;
  }
  .videoWin {
    margin: 30px;
    width: 356px;
    height: 200px;
  }
  .toast {
    position: relative;
    left: 30%;
  }
  .release {
    margin-left: 30px;
    width: 690px;
    height: 80px;
    background-color: #eeeeee;
    font-size: 28px;
  }
}
</style>