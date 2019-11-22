<template>
  <div class="upLoadVideo">
    <div class="content">
      <div class="thisWeekVideo">本周的作业视频录制完成啦</div>
      <div class="quicklyUpLoad">赶快上传班主任老师才能点评哦~</div>
      <label class="upLoadSpan" for="video-upload-input">上传视频</label>
      <input
        id="video-upload-input"
        class="video-upload-input"
        type="file"
        accept="video/*"
        ref="videoUploadInput"
        @change="videoUpload"
        style="display:none"
      />
      <div class="videoRules">视频要求:10秒≤时长≤180秒,视频大小≤300M</div>
      <img class="img" src="~/assets/punch_card/img/teacher.png" alt />

    </div>
    <toast ref="toast"></toast>
  </div>
</template>

<script>
import Toast from "~/components/Toast";
import FileUploader, { FILE_TYPE } from "~/utils/upload.js";
export default {
  // name:'upLoadVideo',
  head() {
    return {
      title: "上传作品"
    };
  },
  components: {
    toast: Toast
  },
  data() {
    return {
      homeworkId:this.$route.query.homeworkId || ''
    };
  },
  methods: {
    async videoUpload() {
      this.$refs["toast"].showLoadingToast();
      const fileUploader = new FileUploader();
      await fileUploader.init();
      this.videoSrc = fileUploader.domain;
      console.log(this.videoSrc,'222')
      const uploadReturn = fileUploader.upload(
        this.$refs["videoUploadInput"].files[0],
        FILE_TYPE.VIDEO,
        this.fileUploadNext,
        this.fileUploadError,
        this.fileUploadComplete
      );
      this.$refs["toast"].hideLoadingToast();
      if (uploadReturn.error) {
        this.$refs["toast"].showToast(uploadReturn.error);
        return;
      }
      // this.videoStatus = VIDEO_STATUS_TYPE.UPLOADING;
      localStorage.setItem('videoUrl',this.videoSrc)
      window.location = `http://192.168.29.119:3000/sign_in/addComments/addComments?homeworkId=${this.homeworkId}`
      // this.$router.push({path:'/sign_in/addComments/addComments',query:{homeworkId:this.homeworkId}})
      console.log('1111111111111111111',this.homeworkId)
    }
    // upLoad() {
    //   window.location = "http://192.168.29.119:3000/sign_in/addComments/addComments";
    // }
  }
};
</script>
<style lang="scss" scoped>
.upLoadVideo {
display: flex;
justify-content: center;
align-items: center;
text-align: center;
margin-top: 360px;
  .content {
    .thisWeekVideo {
      font-size: 28px;
      color: #666666;
      padding-bottom: 10px;
    }
    .quicklyUpLoad {
      font-size: 28px;
      color: #666666;
      padding-bottom: 40px;
    }
    .upLoadSpan {
      display: inline-block;
      background-color: #ffd750;
      line-height: 80px;
      font-size: 28px;
      font-weight: 700;
      width: 280px;
      height: 80px;
      margin-bottom: 40px;
    }
    .videoRules {
      font-size: 24px;
      color: #999999;
      //   padding-bottom: 183px;
    }
    .img {
        margin-top: 30%;
        width: 464.32px;
        height: 352.8px;
      }
    
  }
}
</style>