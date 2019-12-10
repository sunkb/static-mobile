<template>
  <div class="signInInfom">
    <div class="myVideo">
      <div class="videoTitle">
        {{detailData.work_time}}作业666666
        <div class="videoTitleTime">第{{detailData.rank}}次打卡</div>
      </div>
      <div class="submissionTime">提交时间:{{detailData.submit_time}}</div>
      <div class="studentVideo">
        <video
          preload="auto"
          class="videoWin"
          id="appearance1"
          poster="https://qn-static.landi.com/uploadtool631412028f21ac676ff7d8924b7bec4c.mp4?vframe/jpg/offset/2/h/960/'"
          controls
          src="https://qn-static.landi.com/uploadtool631412028f21ac676ff7d8924b7bec4c.mp4"
        />
        <!-- <div class="appearance-video-item" @click="playFn('appearance1')">
          <img class="videoWin" :src="detailData.video_url+ '?vframe/jpg/offset/2/h/960/'" />
          <div class="videoPlay"></div>
        </div> -->
      </div>
      <div class="videoScore">
        <div class="scoreTitle">得分</div>
        <div class="fiveStars">
          <startLevel
            v-if="getScore"
            :value="detailData.startLevelData"
            :allowHalf="allowHalf"
            showText
          />
          <!-- <rate v-model="rate" @changeRate="changeRate"></rate> -->
          <div v-if="!getScore" class="teacherNoScore">老师尚未评分哦</div>
        </div>
      </div>
      <div class="videoComment">
        <div class="commentAction">
          <div class="commentTitle">评论</div>
          <img class="addPic" src="~/assets/punch_card/img/msg.png" alt />
          <div @click="openMask" class="addComment">添加评论</div>
        </div>

        <div class="commentContent">
          <!-- 等有接口了再掉用吧 -->
          <div v-if="commentList.length>0">
            <div class="commentList" v-for="item in commentList" :key="item.id">
              <div @touchstart="gtouchstart(item)" @touchend="gtouchend()">
                <p class="commentListInfo">{{item.name + ': ' + item.content}}</p>
                <p class="commentListTime">{{item.create_time}}</p>
              </div>
            </div>
          </div>
          <div class="noComment" v-if="commentList.length<=0">
            <div class="commentMsg">有话想对老师说?点击评论按钮留言哦</div>
            <img
              class="commentPic"
              src="https://qn-static.landi.com/uploadtool34833716da1aea1decec2681bdaefd50.png"
              alt
            />
          </div>
        </div>
        <div></div>
      </div>
    </div>
    <div class="comment-content" v-show="buttonShow">
      <div class="content-input">
        <van-field
          style="font-size: 14px;"
          v-model="commentData"
          rows="2"
          autosize
          type="textarea"
          size="50px"
          ref="sssss"
          placeholder="请输入评语"
          maxlength="200"
          show-word-limit
          autofocus="autofocus"
        />
      </div>
      <div class="button-div">
        <div class="content-button" @click="submitContent">
          <div class="content-button-text">发送</div>
        </div>
      </div>
    </div>
    <toast ref="toast"></toast>
    <van-dialog
      v-model="dialogShow"
      title="删除评论"
      message="是否要删除该条评论？"
      show-cancel-button
      @confirm="confirmOption"
      @cancel="cancelOption"
    ></van-dialog>
  </div>
</template>
<script>
import startLevel from "~/components/star_level";
import dialogBar from "../tankuang";
import { videoPlayerEvent } from "~/utils/videoPlay";
import axios from "~/utils/axios";
import { API } from "../consts";
import Toast from "~/components/Toast";
import { Field, Dialog } from "vant";
import "vant/lib/index.css";
export default {
  head () {
    return {
      title: "打卡详情"
    };
  },
  components: {
    startLevel: startLevel,
    "dialog-bar": dialogBar,
    toast: Toast,
    "van-field": Field,
    [Dialog.Component.name]: Dialog.Component
  },
  created () {
    console.log("我是2的");
  },
  data () {
    return {
      commentList: [],
      sendVal: false, //是否发表
      allowHalf: true, //五角星允许半分评
      getScore: true, //老师是否评分
      commentState: false, //点评
      detailData: {
        startLevelData: '0'
      }, // 打卡详情
      buttonShow: false,
      focusState: false,
      commentData: "", // 提交的评论内容
      dialogShow: false
    };
  },
  mounted () {
    this.getComment();
  },
  methods: {
    // 初始化页面
    async initData () {
      const id = this.$route.query.id || "";
      const hid = this.$route.query.homework_Id;
      try {
        const detailData = await axios.get(
          API.production_detail + "?id=" + hid
        );
        console.log('我是数据', detailData)
        if (!detailData.success) {
          console.log(detailData.msg);
          return;
        }
        const result = detailData.data;
        this.detailData = {
          work_time: result.work_time || "",
          rank: result.rank || 0,
          submit_time: result.submit_time || "",
          startLevelData: result.score || "4.0",
          video_url: result.video_url || ""
        };
        //得分同步在这里!!!
        if (detailData.data.is_sync == 0) {
          this.getScore = false
        } else {
          this.getScore = true
        }
        console.log(this.getScore)
      } catch (err) {
        console.log(err);
      }
    },
    async getComment () {
      const getId = {
        homework_id: this.$route.query.homework_Id
      };
      const getCommentList = await axios.get(
        API.comment_List + `?homework_id=${this.$route.query.homework_Id}`
      );

      if (!getCommentList.success) {
        console.log(getCommentList.msg);
        return;
      }
      this.commentList = getCommentList.data;
    },
    openMask () {
      this.buttonShow = true;
      this.focusState = true;
      // this.$refs.sssss.focus()
    },
    /**
     * 添加评论的取消
     */
    clickCancel () {
      console.log("我是点了取消的,或者没输入");
    },
    /**
     * 添加评论的确定
     */
    clickDanger (textArea) {
      if (textArea) {
        console.log("我是输入并点了确定", textArea);
        this.commentList.push({
          Lisa: textArea
          //根据不同登陆者的身份,在判断好的else里去改发起评论人的身份
        });
      } else {
        this.clickCancel();
      }
    },
    /**
     * 视频播放
     */
    playFn (name) {
      // event.stopPropagation();
      console.log('chenjiafan')
      let video1 = document.getElementById(name);
      videoPlayerEvent(video1);
    },
    async submitContent () {
      this.buttonShow = false;
      this.focusState = false;
      const params = {
        homework_id: this.$route.query.homework_Id || "",
        content: this.commentData
      };
      try {
        const submitResult = await axios.post(API.add_Comment, params);
        if (!submitResult.success) {
          this.$refs["toast"].showToast("提交评论失败!");
          console.log(submitResult.msg);
          return;
        }
        this.$refs["toast"].showToast("成功提交评论!");
        this.commentData = "";
        this.getComment();
      } catch (err) {
        this.$refs["toast"].showToast("提交评论失败!");
        console.log(err);
      }
    },
    gtouchstart (commentItem) {
      this.curCommentId = commentItem.id || "";
      const that = this;
      this.timeOutEvent = setTimeout(function () {
        that.dialogShow = true;
      }, 500); //这里设置定时器，定义长按500毫秒触发长按事件，时间可以自己改，个人感觉500毫秒非常合适
      return false;
    },
    //手释放，如果在500毫秒内就释放，则取消长按事件，此时可以执行onclick应该执行的事件
    gtouchend () {
      clearTimeout(this.timeOutEvent); //清除定时器
      if (this.timeOutEvent != 0) {
        //这里写要执行的内容（尤如onclick事件）
      }
      return false;
    },
    async confirmOption () {
      try {
        const deleteResult = await axios.post(API.delete_comment, {
          id: this.curCommentId
        });
        if (!deleteResult.success) {
          console.log(this.msg);
          this.$refs["toast"].showToast("无法删除当前评论!");
          return;
        }
        this.$refs["toast"].showToast("成功删除当前评论!");
        window.location.reload();
      } catch (err) {
        console.log(err);
        this.$refs["toast"].showToast("无法删除当前评论!");
      }
    },
    cancelOption () {
      this.dialogShow = false;
    }
  },
  async created () {
    await this.initData();
  },
  directives: {
    focus: {
      //根据focusState的状态改变是否聚焦focus
      update: function (el, value) {
        //第二个参数传进来的是个json
        if (value) {
          el.focus();
        }
      }
    }
  }
};
</script>
<style  lang="scss" scoped>
.signInInfom {
  background-color: #f9f9f9;
  min-height: 100vh;
  min-width: 100vw;
  padding-top: 20px;
  .myVideo {
    margin: 0 30px;
    background-color: white;
    // width: 660px;
    height: 100%;
    .videoTitle {
      padding-top: 30px;
      padding-left: 30px;
      font-size: 28px;
      font-weight: 600;
      padding-bottom: 10px;
      .videoTitleTime {
        margin-right: 20px;
        float: right;
        font-size: 24px;
        color: #999999;
      }
    }
    .submissionTime {
      margin-left: 15px;
      color: #999999;
      font-size: 24px;
      padding-left: 2vw;
      padding-bottom: 20px;
    }
    .studentVideo {
      // width: 600px;
      height: 355px;
      // margin-left: 30px;
      // margin-right: 30px;
      // margin-bottom: 30px;
      position: relative;
      display: flex;
      justify-content: center;
      .videoPlay {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 76px;
        height: 76px;
        background: url("~assets/punch_card/img/playbtn.png") 50% 50% / contain
          no-repeat;
      }
      .videoWin {
        // position: absolute;
        // top: 50%;
        // left: 50%;
        // transform: translate(-50%, -50%);
        // padding-right: 30px;
        // width: 330px;
        height: 355px;
        width: 622px;
      }
    }
  }
  .videoScore {
    margin-top: 30px;
    height: 110px;

    .scoreTitle {
      font-size: 28px;
      color: #333333;
      font-weight: 600;
      padding-bottom: 10px;
      margin-left: 30px;
    }
    .fiveStars {
      width: 83vw;
      height: 35px;
      margin-left: 30px;
      .teacherNoScore {
        font-size: 28px;
        color: #999999;
      }
    }
  }
  .videoComment {
    // background-color: orange;
    width: 635px;
    margin-left: 30px;
    .commentAction {
      display: flex;
      align-items: center;
      padding-bottom: 10px;
      .commentTitle {
        font-size: 28px;
        font-weight: 500;
        display: inline-block;
      }
      .addComment {
        background-color: white;
        color: #666666;
        font-size: 24px;
      }
      .addPic {
        margin-right: 10px;
        width: 41px;
        height: 40px;
        margin-left: 427px;
      }
    }
    .input {
      width: 300px;
      background-color: yellow;
      height: 50px;
      // position: fixed;
      // bottom: 50px;
    }
    .commentContent {
      // width: 600px;
      position: relative;
      .commentList {
        font-size: 28px;
        color: #333333;
        padding-bottom: 73px;
        .commentListInfo {
          word-break: normal;
          white-space: pre-wrap;
          word-wrap: break-word;
          width: 600px;
        }
        .commentListTime {
          float: right;
          font-size: 24px;
          color: #999999;
        }
      }
      .noComment {
        // width: 383.64px;
        height: 510px;
      }
      .commentMsg {
        float: left;
        font-size: 28px;
        color: #999999;
      }
      .commentPic {
        position: absolute;
        left: 19%;
        margin-top: 13%;
        width: 383.64px;
        height: 334.89px;
      }
    }
  }
  .comment-content {
    display: flex;
    // min-height: 100px;
    width: 100%;
    padding: 10px 0;
    background: rgba(238, 238, 238, 1);
    position: fixed;
    bottom: 0px;
    // bottom: 193px;
    .content-input {
      width: 520px;
      margin-left: 30px;
      textarea {
        margin-top: 5px;
      }
    }
    .button-div {
      .content-button {
        width: 150px;
        height: 84px;
        margin-left: 20px;
        background: rgba(255, 215, 80, 1);
        border-radius: 2px;
        position: absolute;
        bottom: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
        .content-button-text {
          font-size: 28px;
          font-weight: 400;
          color: rgba(51, 51, 51, 1);
        }
      }
    }
  }
}
</style>