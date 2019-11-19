<template>
  <div class="upLoadVideo">
    <div class="content">
      <div class="thisWeekVideo">本周的作业视频录制完成啦</div>
      <div class="quicklyUpLoad">赶快上传班主任老师才能点评哦~</div>
      <button class="upLoad" @click="upLoad">上传视频</button>
      <!-- <nuxt-link to="/sign_in/addComments"><button class="upLoad">上传视频</button></nuxt-link> -->
      <div class="videoRules">视频要求:10秒≤时长≤180秒,视频大小≤300M</div>
      <div class="imgDiv">
        <img  class="img" src="~/assets/punch_card/img/teacher.png" alt />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // name:'upLoadVideo',
  head() {
    return {
      title: "上传作品"
    };
  },
  data() {
    return {};
  },
  methods: {
    upLoad() {
      window.location = "http://192.168.29.119:3000/sign_in/addComments";
    }
  }
};
</script>
<style lang="scss" scoped>
.upLoadVideo {
  position: absolute;
  top: 360px;
  left: 50%;
  transform: translate(-50%, 0%);
  text-align: center;
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
    .upLoad {
      background-color: #ffd750;
      width: 280px;
      height: 80px;
      font-size: 28px;
      font-weight: 500;
      margin-bottom: 40px;
    }
    .videoRules {
      font-size: 24px;
      color: #999999;
    //   padding-bottom: 183px;

    }
    .imgDiv{
        margin-top: 30%;
        .img{
        width: 464.32px;
        height: 352.8px;
    }
    }

  }
}
</style>