<template>
  <div class="weeklyHouseWorkSign">
    <div class="signContent">
      <div class="scoreStatistics">
        <!-- <div class="signContentSpace"></div> -->
        <div class="completed">
          <div class="div1">
            <img class="signIn1" src="~/assets/punch_card/img/signIn1.png" alt />
            <div class="scoreMsg">打卡次数</div>
          </div>
          <span class="scoreNum">{{scoreNumTime}}</span>
          <span class="scoreNumMsg">次</span>
          <!-- <span class="scoreNum">{{completedTime}}</span>次 -->
        </div>
        <!-- <div class="completedSpace"></div> -->
        <div class="averageScore">
          <div class="div1">
            <img class="signIn1" src="~/assets/punch_card/img/signIn2.png" alt />
            <div class="scoreMsg">平均得分</div>
          </div>
          <span class="scoreNum">{{scoreNum}}</span>
          <span class="scoreNumMsg">分</span>
          <!-- <span class="scoreNum">{{getScoreNum}}</span>分 -->
        </div>
      </div>
      <!-- <div class="signTop">
        <div class="signTopCon">
          <div class="signTopMsg">开启打开提醒,每周作业不健忘</div>
          <button class="signTopBtn">去开启</button>
        </div>
      </div>-->
      <div class="thisWeek">
        <div class="thisWeeKTop">
          <div class="signContentSpace"></div>
          <!-- <img class="signIn1" src="~/assets/punch_card/img/signIn3.png" alt /> -->
          <div class="scoreStatisticsMsg">本周进度</div>
          <div class="upLoadHw">{{upLoadHw}}</div>
        </div>

        <!-- 请上传<span>{{month}}</span>月<span>{{day}}</span>日作业 -->
        <div class="thisWeekProcess" v-if="this.hasSigned==='A'">
          <img class="signIn5" src="~/assets/punch_card/img/signIn5.png" alt />
          <div class="notCompleted">尚未完成哦</div>
          <div class="hasCompleted">班级已有{{hasCompleted}}人提交</div>
          <!-- {{hasuploaded}}到时候加到12那个位置 -->
          <div class="thisWeekSignBtn" @click="finSignBtn()">去打卡</div>
        </div>
        <div class="thisWeekProcess" v-if="this.hasSigned==='B'">
          <div class="hasCompleted">太棒了,已经完成打卡任务哦</div>
          <img class="goodjob" src="https://qn-static.landi.com/uploadtoolb9b4e1f5dcf1ca92a4e1249ff2020710.png" alt />
        </div>
        <div class="thisWeekProcess" v-if="this.hasSigned==='C'">
          <div class="hasCompleted">本周无打卡任务哦</div>
          <img class="nojob" src="https://qn-static.landi.com/uploadtool85138f62d1ea923566ee642fe0a513d3.png" alt />
        </div>
        <!--v-if这里从后台拿值,然后根据枚举值,利用三元表达式去判断,有就true显示,没有就false隐藏 -->
      </div>

      <div class="AllsignHistory">
        <div class="AllsignHistoryTop">
          <div class="signContentSpace"></div>
          <!-- <img src="~/assets/punch_card/img/signIn4.png" alt class="signIn4" /> -->
          <span class="signHistoryMsg">历史打卡记录</span>
        </div>

        <mt-loadmore
          :bottom-method="onLoad"
          ref="loadmore"
          :bottom-all-loaded="allLoaded"
          bottomPullText
          bottomDropText
          :auto-fill="false"
        >
          <div class="signHistory" v-for="item in videoList " :key="item.id">
            <div class="signHistoryVideo" v-if="historyShow==='A'">
              <div class="videodays">
                {{item.work_time}}作业
                <span class="videoTimes">第{{item.rank}}次打卡</span>
              </div>
              <div class="upLoadTime">提交时间:{{item.submit_time}}</div>

              <div class="video" @click="signHistoryVideo(item)">
                <video
                  preload="auto"
                  class="videoWin"
                  style="display: none;"
                  id="appearance1"
                  controls
                  :src="item.video_url"
                />
                <div class="appearance-video-item">
                   <img class="videoWin" :src="item.video_url + '?vframe/jpg/offset/2/h/960/'" />
                  <div class="videoPlay"></div>
                 
                </div>
              </div>
              <span class="videoGetScore">得分:</span>
              <startLevel :value="item.score" :allowHalf="allowHalf" class="changeRate" showText />
              <div class="teacherComment">
                {{'评论('+ item.comment.length +')'}}
                <div class :class="item.moreFlag ? 'watchMore': 'watchSingle' ">
                  <div
                    class="commentMsg"
                    v-for="(commentItem, index) in item.comment"
                    :key="commentItem.id"
                  >
                    <div
                      class="singleComment"
                      @touchstart="gtouchstart(commentItem)"
                      @touchend="gtouchend()"
                    >
                      <p class="singleComment2">{{commentItem.name+'：' + commentItem.content}}</p>
                      <div
                        @click="watchMore(item)"
                        style="position:absolute;right:24px;font-size:12px;color:rgba(153,153,153,1);"
                        v-if="index === 0"
                      >{{item.moreFlag ? '收起隐藏' : '显示更多'}}</div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="dividingLine"></div>
            </div>
          </div>
        </mt-loadmore>
        <div class="signHistory" v-if="historyShow==='B'">
          <div class="signHistoryVideo">
            <div class="noHistory">
              暂无打卡作品,要加油哦~
              <img class="fight" src="https://qn-static.landi.com/uploadtool86d23247578d9ce742555f54982d2474.png" alt />
            </div>
          </div>
        </div>
      </div>
      <div class="finSign" v-if="this.hasSigned==='A'">
        <div class="finSignMsg">本周作业已有X个同学提交哦</div>
        <!-- 到时候加到已有后面{{thisWeekSigned}} -->
        <div class="finSignBtn" @click="finSignBtn()">去打卡</div>
      </div>
    </div>
    <van-dialog
      v-model="dialogShow"
      title="删除评论"
      message="是否要删除该条评论？"
      show-cancel-button
      @confirm="confirmOption"
      @cancel="cancelOption"
    ></van-dialog>
    <toast ref="toast"></toast>
  </div>
</template>

<script>
import startLevel from "~/components/star_level";
import { videoPlayerEvent } from "~/utils/videoPlay";
import { API } from "../consts";
import axios from "~/utils/axios";
import { Loadmore } from "mint-ui";
import addComments from "../addComments/addComments";
import { Dialog } from "vant";
import Toast from "~/components/Toast";
import "vant/lib/index.css";
export default {
  name: "weeklyHouseWorkSign",
  head() {
    return {
      title: "周作业打卡"
    };
  },
  async created() {
    console.log("我是首页的");
    this.userStatus()
  },
  components: {
    startLevel: startLevel,
    "mt-loadmore": Loadmore,
    [Dialog.Component.name]: Dialog.Component,
    toast: Toast
  },
  mounted() {
    this.submit();
    this.history();
  },
  data() {
    return {
      homeworkId: "",
      videoUrl: "", //视频地址
      videodays: "", //历史记录中某天得作业
      hasCompleted: "", //班级已提交人数
      scoreNumTime: 0, //打卡次数
      scoreNum: 0, //平均得分
      upLoadHw: "", //上传该次作业
      historyShow: "", //没有后端前,A为有打卡记录,B为无打卡记录
      hasSigned: "", //没有后端前,A为尚未打卡,B为完成打卡,C为无打卡任务
      teacherSays: "Ann:说得好", //发表的评论
      upLoadTime: "", //提交时间
      videoList: [], // 历史打卡记录数据集
      allowHalf: true,
      page: 1,
      limit: 4,
      hasNext: false, // 是否还有下一页
      allLoaded: false,
      timeOutEvent: null,
      dialogShow: false,
      curCommentId: "" // 当前的评论id
    };
  },
  methods: {
    async userStatus () {
      const res = await axios.post(API.work_url, { sid: '514954', sign: '397AF506DEBA106723F2A628C6910A820C3DD56B'})
      if(!res.success) {
        console.log(res.msg)
        return 
      }
      console.log(res.msg)
    },
    /**
     * 两个去打卡跳转按钮
     */
    finSignBtn: function() {
      // http://192.168.29.119:3000/
      window.location = `${process.env.BASE_URL}/sign_in/upLoadVideo/upLoadVideo?homeworkId=${this.homeworkId}`;
      // window.location = `http://192.168.29.119:3000/sign_in/upLoadVideo/upLoadVideo?homeworkId=${this.homeworkId}`;
    },
    /**
     * 点击历史打卡记录跳转到详情页面
     */
    async signHistoryVideo(itemObj) {
      const res = await axios.get(API.weekly_Work);
      const studentId = res.data.homework.id;
      // this.$router.push({
      //   path: "/sign_in/signInInfom/signInInfom",
      //   query: { id: studentId ,homework_Id: itemObj.id }
      // });
      window.location = `${process.env.BASE_URL}/sign_in/signInInfom/signInInfom?id=${studentId}&homework_Id=${itemObj.id}`; // 此路由需要设置
    },
    // 下拉加载数据
    onLoad() {
      if (this.hasNext) {
        this.page++;
        this.history();
      } else {
        this.allLoaded = true; // 若数据已全部获取完毕
        this.$refs.loadmore.onBottomLoaded();
      }
    },
    async submit() {
      const res = await axios.get(API.weekly_Work);
      if (res.success) {
        this.scoreNumTime = res.data.achievement.synced;
        this.scoreNum = res.data.achievement.avg_score || 0;
        //判断是否有打卡任务或者是否完成
        if (res.data.homework == null) {
          this.hasSigned = "C"; //无任务
        } else {
          // if (res.data.homework.is_submit) {
          if (res.data.homework.is_submit == 1) {
            this.hasSigned = "B"; //已提交
          } else {
            this.hasSigned = "A"; //未提交
            this.upLoadHw = "请上传" + res.data.homework.end_work_time + "作业";
            this.homeworkId = res.data.homework.id;
            this.hasCompleted = res.data.submit_total;
          }
          // }
        }
      } else {
        console.log("errMsg", res.msg);
      }
    },
    async history() {
      try {
        const listResult = await axios.get(
          API.history_List + `?page=${this.page}&limit=${this.limit}`
        );
        if (!listResult.success) {
          console.log(listResult.meg);
          return;
        }
        if (listResult.data.list.length==0) {
          this.historyShow = "B";
        } else {
          this.historyShow = "A";
        }
        this.hasNext = listResult.data.has_next;
        listResult.data.list.forEach(element => {
          this.videoList.push(Object.assign(element, { moreFlag: false }));
        });
      } catch (err) {
        console.log(err);
      }
    },
    //查看和隐藏更多评论
    watchMore(itemObj) {
      itemObj.moreFlag = !itemObj.moreFlag;
    },
    gtouchstart(commentItem) {
      this.curCommentId = commentItem.id || "";
      const that = this;
      this.timeOutEvent = setTimeout(function() {
        that.dialogShow = true;
      }, 500); //这里设置定时器，定义长按500毫秒触发长按事件，时间可以自己改，个人感觉500毫秒非常合适
      return false;
    },
    //手释放，如果在500毫秒内就释放，则取消长按事件，此时可以执行onclick应该执行的事件
    gtouchend() {
      clearTimeout(this.timeOutEvent); //清除定时器
      if (this.timeOutEvent != 0) {
        //这里写要执行的内容（尤如onclick事件）
      }
      return false;
    },
    async confirmOption() {
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
    cancelOption() {
      this.dialogShow = false;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "~/assets/presentation/css/main.scss";

.weeklyHouseWorkSign {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f9f9f9;
  padding: 20px 30px 0 30px;
  .signContent {
    .scoreStatistics {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 192px;
      background-color: white;

      .completed {
        margin-right: 140px;
        text-align: center;
        .div1 {
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .scoreNum {
          font-size: 60px;
          font-weight: 500;
        }
        .scoreNumMsg {
          font-size: 24px;
        }
        .scoreMsg {
          font-size: 24px;
          color: #999999;
          display: inline-block;
        }
      }
      .signIn1 {
        width: 30px;
        height: 30px;

        margin-right: 8px;
      }

      .completedSpace {
        height: 30px;
        width: 2px;
        background-color: #ccc;
        display: inline-block;
      }
      .averageScore {
        text-align: center;
        .div1 {
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .scoreNum {
          font-size: 60px;
          font-weight: 500;
        }
        .scoreNumMsg {
          font-size: 24px;
        }
        .scoreMsg {
          font-size: 24px;
          color: #999999;
          display: inline-block;
        }
      }
    }
    .signTop {
      height: 90px;
      background-color: white;
      margin-top: 15px;
      .signTopCon {
        margin-left: 30px;
        font-size: 28px;
        // padding-bottom: 25px;
        // height: 40px;
        .signTopMsg {
          margin-top: 25px;
          display: inline-block;
          color: #666666;
          // padding-right: 48px;
        }
        .signTopBtn {
          margin-top: 15px;
          margin-right: 30px;
          width: 180px;
          height: 60px;
          float: right;
          background-color: #ffd750;
          border-radius: 45px;
        }
      }
    }
    .thisWeek {
      background-color: #fff;
      margin-top: 20px;

      .thisWeeKTop {
        display: flex;
        // margin-left: 30px;
        // float: left;
        // justify-content: center;
        align-items: center;
        width: 500px;
        height: 80px;
        .signContentSpace {
          height: 30px;
          width: 6px;
          background-color: #ffd750;
          display: inline-block;
          margin-right: 30px;
          // margin-right: -20px;
        }
        // .signIn1 {
        //   margin-left: 30px;
        //   width: 34px;
        //   height: 34px;
        //   margin-right: 10px;
        // }
        .scoreStatisticsMsg {
          font-size: 34px;
          font-weight: 700;
          margin-right: 20px;
        }
        .upLoadHw {
          // padding-top: 1px;
          font-size: 24px;
          color: #999999;
        }
      }

      .thisWeekProcess {
        text-align: center;
        height: 250px;
        .signIn5 {
          // margin-left: 45%;
          width: 30px;
          height: 40px;
        }
        .goodjob {
          width: 400px;
          height: 190px;
        }
        .nojob {
          width: 400px;
          height: 190px;
        }
        .notCompleted {
          display: inline-block;
          // padding-top: 39px;
          color: #ff5050;
          text-align: center;
          font-size: 0.4rem;
          font-weight: 700;
          padding-bottom: 10px;
        }
        .hasCompleted {
          text-align: center;
          color: #999999;
          font-size: 24px;
          padding-bottom: 30px;
        }
        .thisWeekSignBtn {
          display: inline-block;
          border-radius: 45px;
          color: #333333;
          font-weight: 600;
          font-size: 28px;
          text-align: center;
          line-height: 80px;
          width: 623px;
          height: 80px;
          background-color: #ffd750;
          // margin-bottom: 31px;
        }
      }
    }

    .AllsignHistory {
      background-color: #fff;
      margin-top: 20px;
      .AllsignHistoryTop {
        padding-top: 30px;
        display: flex;
        align-items: center;
        .signContentSpace {
          height: 30px;
          width: 6px;
          background-color: #ffd750;
          display: inline-block;
          margin-right: 30px;
          // margin-right: -20px;
        }
        .signIn4 {
          width: 34px;
          height: 34px;
        }
        .signHistoryMsg {
          font-size: 34px;
          font-weight: 700;
        }
      }

      .signHistory {
        // height: 606px;
        .signHistoryVideo {
          margin-top: 10px;
          // background-color: yellow;

          .videodays {
            margin-left: 30px;
            padding-top: 40px;
            font-size: 28px;
            font-weight: 600;
          }
          .noHistory {
            margin-top: 50px;
            text-align: center;
            font-size: 28px;
            color: #999999;
          }
          .fight {
            width: 486.81px;
            height: 260.66px;
            margin-top: 147px;
          }
          .upLoadTime {
            margin-left: 30px;
            padding-top: 10px;
            padding-bottom: 20px;
            font-size: 24px;
            color: #999999;
          }
          .videoTimes {
            float: right;
            margin-right: 40px;
            font-size: 24px;
            color: #999999;
          }
          .video {
            margin-left: 30px;
            margin-bottom: 30px;
            width: 600px;
            height: 355px;
            position: relative;
             background-color: black;
            .videoPlay {
             
              position: absolute;
              top: 50%;
              left: 50%;
              transform: translate(-50%, -50%);
              width: 76px;
              height: 76px;
              background: url("~assets/presentation/img/playbtn.png") 50% 50% /
                contain no-repeat;
            }
            .videoWin {
              position: absolute;
              top: 50%;
              left: 50%;
              transform: translate(-50%, -50%);
              padding-right: 30px;
              // width: 600px;
              height: 355px;
            }
          }
          .videoGetScore {
            margin-left: 30px;
            font-size: 28px;
            font-weight: 700;
            display: inline;
          }
          .changeRate {
            margin-left: 30px;
            margin-top: 10px;
          }
          .teacherComment {
            margin-top: 30px;
            margin-left: 30px;
            font-size: 28px;
            font-weight: 700;
            color: #333333;

            .commentMsg {
              padding-top: 10px;
              color: #666666;
              .singleComment {
                display: flex;
                position: relative;
                .singleComment2 {
                  width: 430px;
                  overflow: hidden;
                  white-space: nowrap;
                  text-overflow: ellipsis;
                }
              }
            }
          }
          .dividingLine {
            margin-left: 30px;
            height: 2px;
            width: 630px;
            background-color: #eeeeee;
            display: inline-block;
          }
        }
      }
    }
    .finSign {
      margin-top: 20px;
      margin-bottom: 20px;
      background-color: #fff;
      padding-left: 30px;
      font-size: 28px;
      // width: 690px;
      height: 90px;
      .finSignMsg {
        margin-top: 25px;
        margin-left: 30px;
        display: inline-block;
      }
      .finSignBtn {
        font-weight: 60px;
        margin-top: 15px;
        margin-right: 30px;
        margin-bottom: 15px;
        text-align: center;
        line-height: 60px;
        float: right;
        width: 180px;
        height: 60px;
        background-color: #ffd750;
        border-radius: 45px;
      }
    }
  }
}
.watchMore {
  max-height: 1000px;
  overflow: hidden;
}
.watchSingle {
  max-height: 45px;
  overflow: hidden;
}
</style>
