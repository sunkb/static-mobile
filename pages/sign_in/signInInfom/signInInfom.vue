<template>
  <div class="signInInfom">
    <!-- <div class="left"></div> -->
    <div class="myVideo">
      <div class="videoTitle">
        {{detailData.work_time}}作业
        <div class="videoTitleTime">第{{detailData.rank}}次打卡</div>
      </div>
      <div class="submissionTime">提交时间:{{detailData.submit_time}}</div>
      <div class="studentVideo">
        <video
          preload="auto"
          class="videoWin"
          style="display: none;"
          id="appearance1"
          controls
          :src="detailData.video_url"
        />
        <div class="appearance-video-item" @click="playFn('appearance1')">
          <div class="content-video-item-video-play"></div>
          <img
            class="videoWin"
            :src="detailData.video_url+ '?vframe/jpg/offset/2/h/960/'"
          />
          <!-- :src="goodWorkData.video_url + '?vframe/jpg/offset/2/h/960/'" -->
        </div>
      </div>
      <div class="videoScore">
        <div class="scoreTitle">得分</div>
        <div class="fiveStars">
          <startLevel
            v-if="getScore"
            :value="detailData.startLevelData"
            :allowHalf="allowHalf"
            showText
            colors="#F0552D"
          />
          <!-- <rate v-model="rate" @changeRate="changeRate"></rate> -->
          <div v-if="!getScore" class="teacherNoScore">老师尚未评分哦</div>
        </div>
      </div>
      <div class="videoComment">
        <div class="commentTitle">评论</div>
        <div @click="openMask" class="addComment">撰写评论</div>
        <img class="addPic" src="~/assets/punch_card/img/msg.png" alt />
        <!-- <dialog-bar
          v-model="sendVal"
          type="danger"
          title="请对作品进行评论"
          v-on:cancel="clickCancel()"
          @danger="clickDanger"
          dangerText="发表"
        ></dialog-bar>-->

        <div  class="input"  v-if="sendVal">
          <input @focus="autofocus" class="input" type="text"  placeholder="评论">
        </div>

        <div class="commentContent">
          <!-- 等有接口了再掉用吧-->
          <div v-if="commentList.length>0">
            <p v-for="(item) in commentList " :key="item.id">{{item.Lisa}}</p>
          </div>
          <div v-if="commentList.length<=0">
            <div class="commentMsg">有话想对老师说?点击评论按钮留言哦</div>
            <img class="commentPic" src="~/assets/punch_card/img/comment.png" alt />
          </div>
        </div>
        <div>
          
        </div>
      </div>
    </div>
    <!-- <div class="right"></div> -->
  </div>
</template>
<script>
import startLevel from "~/components/star_level";
import dialogBar from "../tankuang";
import { videoPlayerEvent } from "~/utils/videoPlay";
import axios from "~/utils/axios";
import { API } from "../consts";

export default {
  head() {
    return {
      title: "打卡详情"
    };
  },
  components: {
    startLevel: startLevel,
    "dialog-bar": dialogBar
  },
  data() {
    return {
      commentList: [
        // {
        //   Lisa: "第一次发言" //模拟老师
        //   //这里应该还有一个用户
        // }
      ],
      sendVal: false, //是否发表
      allowHalf: true, //五角星允许半分评
      getScore: true, //老师是否评分
      commentState: false, //点评
      detailData: {} // 打卡详情

    };
  },
  mounted(){
    this.getComment()
  },
  methods: {
    // 初始化页面
    async initData () {
      const id = this.$route.query.id || ''
      try {
        const detailData = await axios.get(API.production_detail + '?id=' + id);
        if (!detailData.success) {
          console.log(detailData.msg)
          return ;
        }
        const result = detailData.data
        this.detailData = {
          work_time: result.work_time || '',
          rank: result.rank || 0,
          submit_time: result.submit_time || '',
          startLevelData: result.score || '4.0',
          video_url: 'https://qn-static.landi.com/uploadtool697ac79509454573ca2a71a610def2fa.mp4' || result.video_url
        }
      } catch (err) {
        console.log(err)
      }
    },
    async getComment(){
      const getId ={
        homework_id:this.$route.query.homework_Id
      };
      // const getId=this.$route.query.id 
      console.log('getId',this.$route.query.homework_Id)
      const getCommentList =await axios.get(API.comment_List + `?homework_id=${this.$route.query.homework_Id}`)
      console.log('拿到的数据',getCommentList)
    },
    openMask(index) {
      this.sendVal = true;
    },
    autofocus() {
      window.scrollTo(0, 0);
      console.log("1111111111111111111", window.scrollY)
    },
    /**
     * 添加评论的取消
     */
    clickCancel() {
      console.log("我是点了取消的,或者没输入");
    },
    /**
     * 添加评论的确定
     */
    clickDanger(textArea) {
      if (textArea) {
        console.log("我是输入并点了确定", textArea)
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
    playFn(name) {
      event.stopPropagation()
      let video1 = document.getElementById(name)
      videoPlayerEvent(video1)
    }
  },
  async created() {
    await this.initData()
  }
};
</script>
<style  lang="scss" scoped>
.signInInfom {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f9f9f9;
  min-height: 100vh;
  min-width: 100vw;

  .myVideo {
    background-color: white;
    margin-top: 20px;
    width: 660px;
    height: 100%;
    .videoTitle {
      padding-top: 30px;
      padding-left: 30px;
      font-size: 28px;
      font-weight: 600;
      padding-bottom: 10px;
      .videoTitleTime {
        //   display: inline-block;
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
      width: 600px;
      height: 355px;
      margin-left: 30px;
      margin-bottom: 30px;
      .videoWin {
        padding-right: 30px;
        width: 630px;
        height: 355px;
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
    width: 600px;
    height: 45vh;
    margin-left: 30px;
    .commentTitle {
      font-size: 28px;
      font-weight: 500;
      padding-bottom: 2vh;
      display: inline-block;
    }
    .addComment {
      float: right;
      background-color: white;
      color: #666666;
      font-size: 24px;
    }
    .addPic {
      float: right;
      margin-right: 10px;
      width: 40.62px;
      height: 39.81px;
    }
    .input {
      width: 300px;
      background-color: yellow;
      height: 50px;
      // position: fixed;
      // bottom: 50px;
    }
    .commentContent {
      width: 600px;
      height: 25vh;
      position: relative;
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
}
</style>