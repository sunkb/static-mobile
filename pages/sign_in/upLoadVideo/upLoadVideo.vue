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
      <!-- <video src=""></video> -->
      <div class="videoRules">视频要求:10秒≤视频时长,视频大小≤100M</div>
      <img class="img" src="https://qn-static.landi.com/uploadtool964fda54b98513378231d7284da7e59b.png" alt />

    </div>
    <toast ref="toast"></toast>
  </div>
</template>

<script>
import Toast from "~/components/Toast";
import FileUploader, { FILE_TYPE } from "~/utils/upload.js";
import { VIDEO_STATUS_TYPE } from '~/pages/presentation/consts'
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
      homeworkId:this.$route.query.homeworkId || '',
      videoSrc: '',
      myVid:''
    };
  },
  methods: {
    async videoUpload() {
      // this.myVid=document.getElementById("video-upload-input");
      // console.log('myVid',this.myVid.duration)
      this.$refs["toast"].showLoadingToast();
      const fileUploader = new FileUploader();
      await fileUploader.init(1);
      this.videoSrc = fileUploader.domain;
      console.log(this.videoSrc,'222')
      const uploadReturn = fileUploader.upload(
        this.$refs["videoUploadInput"].files[0],
        FILE_TYPE.VIDEO2,
        this.fileUploadNext,
        this.fileUploadError,
        this.fileUploadComplete,
      );
      this.$refs["toast"].hideLoadingToast();
      if (uploadReturn.error) {
        this.$refs["toast"].showToast(uploadReturn.error);
        return;
      }
      this.videoStatus = VIDEO_STATUS_TYPE.UPLOADING;


    },
    fileUploadNext(res) {
      console.log(this.videoStatus,'this.video')
      this.videoStatus.progress = Math.round(res.total.percent * 100) / 100
      this.$refs['toast'].showLoadingToast( this.videoStatus.progress)
    },
    fileUploadError(res) {
      console.log(res)
      this.videoStatus = VIDEO_STATUS_TYPE.ERROR
      this.$refs['toast'].showToast(res.message)
    },
    fileUploadComplete(res) {
      this.videoStatus = VIDEO_STATUS_TYPE.UPLOADED
      this.videoSrc = `${res.key}`
      console.log(this.videoSrc)
      localStorage.setItem('videoUrl',this.videoSrc)
      this.$refs['toast'].showToast('上传成功')
       window.location = `${process.env.BASE_URL}/sign_in/addComments/addComments/?homeworkId=${this.homeworkId}`
    },
    
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