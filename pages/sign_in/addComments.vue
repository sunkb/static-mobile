<template>
  <div class="addComments">
    <div class="Comments">
      <textarea class="comMsg" type="text" v-model="comMsg" placeholder="有什么想对班主任说的吗?"></textarea>
      <div class="comMsgLength">{{comMsg.length}}/400字符</div>
    </div>
      <img
        class="isShow"
        v-show="isShow"
        src="~/assets/punch_card/img/upload.png"
        alt
        @click="hasBeenVideo"
      />
    <div @click="btn" v-if="!isShow">

      <img class="del" src="~/assets/punch_card/img/del.png" alt />
    </div>
    <video
      preload="auto"
      class="videoWin"
      style="display: none;"
      id="appearance1"
      controls
      :src="'https://qn-static.landi.com/uploadtool7b921d8d27fffee64eb879bcbb2d6796.mp4'"
    />
    <div class="appearance-video-item" @click="playFn('appearance1')">
      <div ></div>
      <img
        v-if="!isShow"
        class="videoWin"
        :src="'https://qn-static.landi.com/uploadtool7b921d8d27fffee64eb879bcbb2d6796.mp4'+ '?vframe/jpg/offset/2/h/960/'"
      />
    </div>
    <button class="release" id="release" @click="release" :disabled="btnDisabled">发布</button>
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
import dialogBar from "./tishi";
import { videoPlayerEvent } from "~/utils/videoPlay";
export default {
  // name:'addComments',
  head() {
    return {
      title: "添加评论"
    };
  },
  components: {
    //发布成功弹出框
    toast: Toast,
    "dialog-bar": dialogBar
  },
  data() {
    return {
      sendVal: false,
      isShow: false,
      btnDisabled: false,
      comMsg: "",
      hasBeenVideos: "100"
    };
  },
  mounted() {
    //监测回退
    history.pushState(null, null, document.URL);
    console.log("我是history", history);
    window.addEventListener("popstate", this.forbidback);
  },
  // beforeDestroy(){
  //         //销毁
  //         window.removeEventListener('popstate',this.forbidback);
  // },
  methods: {
    forbidback(index) {
      if (this.hasBeenVideos === "100") {
        this.sendVal = true;
        this.isShow = true;
      }
      //回退按钮点击处理
    },
    clickCancel() {
      console.log("我是取消的");
    },
    clickDanger(textArea) {
      window.location =
        "http://192.168.29.119:3000/sign_in/weeklyHouseWorkSign";
      // this.$router.replace('/sign_in/weeklyHouseWorkSign')
      console.log("我是点了确定的");
    },
    hasBeenVideo() {
      if (this.hasBeenVideos === "100") {
        this.btnDisabled = true;
        this.hasBeenVideos = "+";
        this.isShow = false;
        document.getElementById("release").style.backgroundColor = "#EEEEEE";
      } else {
        this.isShow = false;
        this.btnDisabled = false;
        document.getElementById("release").style.backgroundColor = "#FFD750";
        this.hasBeenVideos = "100";
        if (this.hasBeenVideos === "100") {
          this.$refs["toast"].showToast("上传成功");
        }
      }
    },
    btn() {
      this.hasBeenVideos = "+";
      console.log("删除了");
      this.btnDisabled = true;
      this.hasBeenVideos = "+";
      this.isShow = true;
      document.getElementById("release").style.backgroundColor = "#EEEEEE";
    },
    release() {
      this.$refs["toast"].showToast("发布成功");
      setTimeout(() => {
        window.location =
          "http://192.168.29.119:3000/sign_in/weeklyHouseWorkSign";
        // this.$router.replace('/sign_in/weeklyHouseWorkSign')
      }, 1000);
    },
    playFn(name) {
      event.stopPropagation();
      // window._hmt &&
      //   window._hmt.push([
      //     "_trackEvent",
      //     "div",
      //     "click",
      //     "优秀案例展示--视频点击"
      //   ]); // 百度统计
      let video1 = document.getElementById(name);
      videoPlayerEvent(video1);
    }
  },
  watch: {
    /**
     * 评论输入框
     */
    comMsg(newvalue, oldvalue) {
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
    background-color: #ffd750;
    font-size: 28px;
  }
}
</style>