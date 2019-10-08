<template>
  <div style="height:100vh;width:100%;">
    <pull-to :bottom-load-method="loadmore">
      <div class="teacher-center" v-if="teacherMsg">
        <!-- 个人信息 -->
        <div class="info_wrap">
          <div class="teacher-item abc-border-bottom">
            <!-- 头像 -->
            <div class="avatar smallImg">
              <img
                :src="teacherMsg.info.avatar+'?imageView2/1/w/150/h/150'"
                v-if="teacherMsg.info.avatar"
              />
            </div>
            <div class="info">
              <div class="row row-name cf">
                <div class="name lt">
                  {{teacherMsg.info.nickname}}
                  <i
                    class="iconfont sex"
                    :class="teacherMsg.info.gender == 1 ? 'icon-girl' : 'icon-boy' "
                  ></i>
                </div>
              </div>
              <div class="row row-country">
                <span class="country BrithDay"></span>
                <span class="age" style="margin-right:40px;">{{teacherMsg.info.age}}岁</span>
                <span class="country Accent accent_icon" v-if="teacherMsg.info.accent!=0"></span>
                <span class="accent" v-if="teacherMsg.info.accent">{{teacherMsg.info.accent}}</span>
                <p
                  v-if="teacherMsg.info&&teacherMsg.info.recommendation"
                >{{teacherMsg.info.recommendation.highlights}}</p>
              </div>
            </div>
          </div>
        </div>
        <!-- tab切换 -->
        <div class="tabWrap">
          <p class="borderRight" @click="tabChange(1)" :class="{'active':tabIndex===1}">
            教师风采
            <span class="heng"></span>
          </p>
          <p @click="tabChange(2)" :class="{'active':tabIndex===2}">
            外教信息 
            <span class="heng"></span>
          </p>
        </div>
        <!-- 教师风采 -->
        <div class="centerInfo" v-if="tabIndex===1">
          <!-- 自我介绍 -->
          <div class="introduction" v-if="teacherMsg&&teacherMsg.info.video">
            <h6 class="title video_icon">自我介绍</h6>
            <div class="content" style="text-indent: 0">
              <video
                v-if="teacherMsg&&teacherMsg.info.video"
                controls
                poster="https://qn-static.landi.com/uploadtool56510002dc36f24b334a80a295fe3efc.png"
                preload="auto"
                class="video-style"
                :src="`${teacherMsg.info.video}`"
              />
            </div>
          </div>
          <!-- 上课风采 -->
          <div class="introduction" v-if="videoList&&videoList.length>0">
            <h6 class="title video_icon">上课风采</h6>
            <div class="content" style="text-indent: 0">
              <div v-for="(item,index) in videoList" :key="index" class="videoItem">
                <video
                  v-if="item"
                  preload="auto"
                  :src="item"
                  controls
                  poster="https://qn-static.landi.com/uploadtool56510002dc36f24b334a80a295fe3efc.png"
                />
              </div>
            </div>
          </div>
        </div>
        <!-- 外教信息 -->
        <div class="centerInfo" v-if="tabIndex===2">
          <!-- 上课时间 -->
          <!-- <div class="introduction" v-if="weekdays.length > 0">
            <h6 class="title">开课时间</h6>
            <div class="content" style="text-indent: 0">
              <p>
                <span v-for="(item,index) in weekdays" :key="index">
                  {{item}}
                  <span v-if="index+1!=weekdays.length">/</span>
                </span>
              </p>
            </div>
          </div>-->
          <div class="introduction" v-if="teacherMsg.info.intro!=''">
            <h6 class="title intro_icon ells">
              自我介绍
              <span class="transform" @click="tranformFn">{{tranformText}}</span>
            </h6>
            <!-- <div class="content" v-html="teacherMsg.info.intro"></div> -->
            <div class="content" style="text-indent: 0">
              <div v-if="teacherMsg.info.intro">
                <div :class="{'ells3':ellsStatus}" class="pr">
                  {{teacherIntro}}
                  <p class="shade pa" v-if="ellsStatus"></p>
                </div>
                <div style="height:30px;" v-if="teacherMsg&&teacherMsg.info.intro.length>100">
                  <p class="word_hide rt" @click="showFn">{{showBtn}}</p>
                </div>
              </div>
            </div>
          </div>
          <!-- 教学特点 -->
          <div class="introduction" v-if="tagList&&tagList.length > 0">
            <h6 class="title teach_tag">教学特点</h6>
            <div class="content" style="text-indent: 0">
              <div v-for="(item,index) in tagList" :key="index" class="item-wrap">
                <div
                  class="item-tag"
                  :class="{'orange_round':(index+1)%4==1}"
                  v-if="(index+1)%4==1"
                >{{item.name}}</div>
                <div
                  class="item-tag"
                  :class="{'yello_round':(index+1)%4==2}"
                  v-if="(index+1)%4==2"
                >{{item.name}}</div>
                <div
                  class="item-tag"
                  :class="{'blue_round':(index+1)%4==3}"
                  v-if="(index+1)%4==3"
                >{{item.name}}</div>
                <div
                  class="item-tag"
                  :class="{'green_round':(index+1)%4==0}"
                  v-if="(index+1)%4==0"
                >{{item.name}}</div>
              </div>
            </div>
          </div>
          <!-- 授课能力 -->
          <div
            class="introduction"
            v-if="skillList&&imgsrc||skillList.length>0||experList.length>0"
          >
            <h6 class="title teach_able">授课能力</h6>
            <div class="content" style="text-indent: 0">
              <div class="qua_wrap" v-if="imgsrc">
                <p class="qua_title">学历背景</p>
                <div class="pro">
                  <a :href="imgsrc" target="_blank">
                    <img class="qua_img" :src="imgsrc" alt />
                  </a>
                </div>
              </div>
              <div class="skill_list clear" v-if="skillList.length>0">
                <p class="qua_title" style="margin-top:20px;">任职资格</p>
                <div class="pro" v-for="(item,index) in skillList" :key="index">
                  <div class="img_wrap" v-for="(value,key) in item.files" :key="key">
                    <a :href="value.path" target="_blank">
                      <img class="qua_img" :src="value.path" alt />
                    </a>
                  </div>
                  <p class="skill_name ells">{{item.name}}</p>
                </div>
              </div>
              <div v-if="experList.length>0">
                <p class="qua_title" style="margin-top:20px;margin-bottom:4px;">教学经验</p>
                <div class="exper_list" v-for="(item,index) in experList" :key="index">
                  <p>
                    时间:
                    <span>{{formatDate(item.begin_time)}}-{{formatDate(item.end_time)}}</span>
                  </p>
                  <p>
                    教学机构:
                    <span>{{item.organization}}</span>
                  </p>
                  <p>
                    职位:
                    <span>{{item.job}}</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <!-- 评分 -->
          <div class="comment" v-if="commentList&&commentList.length>0">
            <h6 class="title score_icon cf">
              评分
              <span class="total rt">(共有{{total}}个评价)</span>
              <span class="rt" style="font-size:14px;" v-if="teacherMsg.info.star>0">分</span>
              <span class="rt score_total" v-if="teacherMsg.info.star>0">{{teacherMsg.info.star}}</span>
            </h6>
            <div class="content">
              <div class="item abc-border-bottom" v-for="(item, index) in commentList" :key="index">
                <img :src="item.avatar" />
                <div class="item-detail">
                  <div class="row cf">
                    <span class="name lt">{{item.nickname}}</span>
                  </div>
                  <!-- <abc-rate class="row" v-model="item.star" :size="size" :length="5" frontColor="#FBC42E" backColor="transparent" :writeable="false"/> -->
                  <div class="row cf">
                    <span class="time lt">{{item.date}}</span>
                    <abcRate class="rt" :value="Number(item.star)"></abcRate>
                  </div>
                  <!-- <div class="row detail"> {{item.remark}} </div> -->
                </div>
              </div>
            </div>
          </div>
          <!-- 底部 -->
          <p class="bottomStatus" v-if="loadmoreStatus&&tabIndex==2">{{stateText}}</p>
        </div>
      </div>
    </pull-to>
  </div>
</template>
<script>
import apiGoodTeacher from "~/api/goodTeacher";
import { getQueryString } from "~/utils/goodTeacher";
import abcRate from "~/components/cell_rate/index.vue";

export default {
  data() {
    return {
      tranformText: "翻译",
      loadmoreStatus: true,
      stateText: "查看更多",
      videoList: [], //上课视频列表
      tabIndex: 1, //tab切换
      ellsStatus: true, // 文字展开收起
      weekdays: [], // 上课时间
      skillList: [],
      experList: [],
      imgsrc: "",
      showBtn: "查看完整的自我介绍",
      num: "3",
      itemNum: "4",
      tid: "",
      teacherMsg: {
        info: {}
      },
      currentPage: 1,
      pages: 1,
      commentList: [],
      total: 0,
      //size: parseInt((document.body.clientWidth / 375), 10) * 20 || 20,
      tagList: [],
      teacherIntro: ""
    };
  },
  created() {
    this.getTag();
    this.getTeacherInfo();
    this.getTeacherScoreFn();
  },
  methods: {
    // 获取老师个人信息
    async getTeacherInfo() {
      const param = getQueryString("token");
      const res = await apiGoodTeacher.teacherIntroX({
        token: param
      });
      if (res) {
        if (res.info && res.info.intro) {
          res.info.intro = res.info.intro.replace(/<br \/>/g, "");
          res.info.intro_translation = res.info.intro_translation.replace(
            /<br\/>/g,
            ""
          );
          this.teacherIntro = res.info.intro;
        }
        let infoData = res;
        this.teacherMsg = res;
        //accent=1(美音); 2:英音 3:标准音
        if (this.teacherMsg.info.accent == 1) {
          this.teacherMsg.info.accent = "美音";
        } else if (this.teacherMsg.info.accent == 2) {
          this.teacherMsg.info.accent = "英音";
        } else if (this.teacherMsg.info.accent == 3) {
          this.teacherMsg.info.accent = "标准音";
        }
        if (res.info && res.info.recommendation) {
          this.videoList = res.info.recommendation.videos;
        }
        if (infoData.info.weekdays) {
          this.weekdays = infoData.info.weekdays;
        }
        if (
          infoData.info.qualifications.education &&
          infoData.info.qualifications.education.audit != undefined &&
          infoData.info.qualifications.education.audit.files[0].path !=
            undefined
        ) {
          this.imgsrc =
            infoData.info.qualifications.education.audit.files[0].path;
        }
        if (
          infoData.info.qualifications &&
          infoData.info.qualifications.certification
        ) {
          this.skillList = infoData.info.qualifications.certification;
        }
        if (
          infoData.info.qualifications &&
          infoData.info.qualifications.experience
        ) {
          this.experList = infoData.info.qualifications.experience;
        }
      }
    },
    //翻译
    tranformFn() {
      if (this.tranformText === "翻译") {
        this.tranformText = "查看原文";
        this.teacherIntro = this.teacherMsg.info.intro_translation;
      } else {
        this.teacherIntro = this.teacherMsg.info.intro;
        this.tranformText = "翻译";
      }
    },
    //tab切换
    tabChange(index) {
      this.tabIndex = index;
      this.commentList = [];
      this.currentPage = 1;
      this.getTeacherScoreFn();
    },
    //获取老师标签
    async getTag() {
      const param = getQueryString("token");
      const res = await apiGoodTeacher.getTeacherLabelX({
        token: param,
        limit: 5
      });
      if (res.status) {
        this.tagList = res.data;
      }
    },
    //获取老师评分
    async getTeacherScore() {
      const param = getQueryString("token");
      const res = await apiGoodTeacher.ajaxGetAppraiseX({
        token: param,
        page: this.currentPage
      });
      return res;
    },
    //获取老师评分
    getTeacherScoreFn() {
      this.getTeacherScore().then(res => {
        if (res.status) {
          this.pages = res.data.pages;
          if (res.data.data) {
            this.commentList.push(...res.data.data);
            this.total = res.data.total;
          }
          if(res.data.total<=5){
            this.loadmoreStatus = false;
          }
        }
      });
    },
    // 文字收起展开
    showFn() {
      this.ellsStatus = !this.ellsStatus;
      if (this.ellsStatus) {
        this.showBtn = "查看完整的自我介绍";
      } else {
        this.showBtn = "收起";
      }
    },
    //时间戳转化
    formatDate(now) {
      const myDate = new Date(now * 1000);
      const year = myDate.getFullYear();
      let month = myDate.getMonth() + 1;
      let myday = myDate.getDate();
      month = month < 10 ? `0${month}` : month;
      myday = myday < 10 ? `0${myday}` : myday;
      return `${year}.${month}.${myday}`;
    },
    //加载更多
    loadmore(loaded) {
      const vm = this;
      if (vm.pages <= vm.currentPage) {
        this.stateText = "没有更多了";
        return loaded("done");
      }
      vm.currentPage += 1;
      this.getTeacherScore().then(res => {
        if (res.status) {
          vm.pages = res.data.pages;
          vm.commentList.push(...res.data.data);
          loaded("done");
        }
      });
    },
    //拉到底部的状态改变
  },
  components: {
    abcRate
  }
};
</script>
<style lang="scss" scoped>
//解决div.vue-pull-to-wrapper 出现scroll 事件就会把action-block 露出来
.vue-pull-to-wrapper {
  overflow: hidden;
  .scroll-container {
    transform: translate3d(0px, 0px, 0px);
  }
  .action-block {
    transform: translate3d(0px, 0px, 0px);
  }
}
.scroll-container {
  background: #f7f7f7;
}
.ells{
  overflow: hidden;
  text-overflow:ellipsis;
  white-space: nowrap;
}
.teacher-center {
  .bottomStatus {
    border-top: 1px solid #eeeeee;
    width: 100%;
    height: 100px;
    text-align: center;
    line-height: 100px;
    font-size: 24px;
    color: #ffd750;
    background: #fff;
  }
  .transform {
    float: right;
    font-size: 28px;
    color: #ffc915;
  }
  .rt {
    float: right;
  }
  .videoItem {
    display: inline-block;
    width: 335px;
    height: 300px;
    margin-right: 10px;
    video {
      width: 100%;
      height: 100%;
    }
  }
  .tabWrap {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 80px;
    width: 100%;
    p {
      font-size: 28px;
      color: #999999;
      line-height: 80px;
      width: 50%;
      text-align: center;
      height: 80px;
    }
    .borderRight {
      border-right: 1px solid #eee;
    }
    .active {
      color: #333333;
      position: relative;
      .heng {
        display: block;
        width: 50px;
        height: 8px;
        background: #ffd750;
        border-radius: 4px;
        position: absolute;
        bottom: 6px;
        left: 50%;
        margin-left: -25px;
      }
    }
  }
  .info_wrap {
    height: 380px;
    width: 100%;
    background: url(~assets/good_teacher/images/bg.png);
    background-size: cover;
    .Accent {
      background: url(~assets/good_teacher/images/accent.png);
      background-size: cover;
    }
    .BrithDay {
      background: url(~assets/good_teacher/images/birth.png);
      background-size: cover;
    }
    .teacher-item {
      padding: 30px;
      display: flex;
      align-items: center;
      margin-bottom: 1px;
      padding-top: 80px;
      .sex {
        display: inline-block;
        width: 36px;
        height: 36px;
        border-radius: 100%;
      }
      .icon-girl {
        background: url(~assets/good_teacher/images/women.png);
        background-size: cover;
      }
      .icon-boy {
        background: url(~assets/good_teacher/images/man.png);
        background-size: cover;
      }
      .avatar {
        border-radius: 100%;
        position: relative;
        margin-right: 36px;
        img {
          width: 100%;
          height: 100%;
          border: 1px solid #fff;
          border-radius: 100%;
        }
      }
      .avatar.smallImg {
        width: 134px;
        height: 134px;
        border: 100%;
        border: 1px solid #fff;
      }
      .info {
        flex: 1;
        position: relative;
        color: #fff;
        .row-name {
          position: absolute;
          top: 0;
          left: 0;
          margin-right: -160px;
          height: 40px;
          .name {
            max-width: 370px;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
          }
        }
        .row-country {
          font-size: 24px;
          margin-top: 60px;
          color: #333;
        }
        .row {
          padding-top: 20px;
          margin-bottom: 20px;
          span {
            display: inline-block;
            vertical-align: middle;
            color: #fff;
            font-size: 28px;
          }
          p {
            color: #fff;
            margin-top: 16px;
            font-size: 28px;
          }
          .name {
            margin-right: 14px;
            font-size: 36px;
            vertical-align: middle;
            display: inline-block;
            font-weight: 600;
          }
          .country {
            display: inline-block;
            width: 20px;
            height: 26px;
          }
          .accent_icon {
            height: 26px;
            width: 26px;
          }
        }
        .row.bind {
          font-size: 28px;
          color: #999;
        }
      }
    }
    .teacher-item.ifFull {
      color: #ccc !important;
      .name {
        color: #ccc !important;
      }
      .score {
        color: #ccc !important;
      }
      .bind {
        color: #ccc !important;
      }
    }
    .accent {
      width: 100px;
      line-height: 34px;
      text-align: center;
      font-size: 24px;
      box-sizing: border-box;
    }
  }
  .item-tag {
    padding: 8px 20px;
    line-height: 40px;
    border: 1px solid #29d5e5;
    border-radius: 34px;
    display: inline-block;
    text-align: center;
    box-sizing: border-box;
    color: #333333;
    font-size: 24px;
  }
  .item-wrap {
    display: inline-block;
    margin: 0 1.5% 36px;
    line-height: 40px;
  }
  .orange_round {
    border: 2px solid #ff6515;
    color: #ff6515;
  }
  .yello_round {
    border: 2px solid #ffc915;
    color: #ffc915;
  }
  .blue_round {
    border: 2px solid #4193ff;
    color: #4193ff;
  }
  .green_round {
    border: 2px solid #52b746;
    color: #52b746;
  }
  .video-style {
    width: 100%;
  }
  background: #f7f7f7;
  .centerInfo {
    .ells3 {
      overflow: hidden;
      height: 110px;
      line-height: 36px;
    }
    .word_hide {
      color: #1cb7c6;
      text-align: right;
      width: 260px;
      text-align: right;
      padding: 20px 0;
      width: 100%;
    }
    .qua_img {
      width: 100%;
      height: 100%;
    }
    .qua_title {
      margin-bottom: 20px;
    }
    .qua_wrap {
      .pro {
        width: 130px;
        height: 160px;
        background: #f3f3f3;
        img {
          width: 100%;
          height: 100%;
        }
      }
    }
    .skill_list {
      min-height: 200px;
      word-wrap: break-word;
      word-break: break-all;
      margin-bottom: 25px;
      .pro {
        width: 130px;
        height: 204px;
        display: inline-block;
        margin-right: 60px;
        .img_wrap {
          height: 160px;
          width: 130px;
          background: #f3f3f3;
          img {
            width: 130px;
            height: 162px;
          }
        }
        .skill_name {
          width:100%;
          text-align: center;
          padding-top: 6px;
        }
      }
    }
    .exper_list {
      font-size: 28px;
      line-height: 48px;
      margin-bottom: 25px;
      span {
        color: #999;
        padding-left: 10px;
      }
    }
    .title {
      position: relative;
      font-size: 34px;
      padding-left: 20px;
      line-height: 32px;
      padding-left: 40px;
    }
    .title:before {
      position: absolute;
      left: 0;
      content: "";
      width: 30px;
      height: 30px;
      border-radius: 100%;
      -webkit-background-clip: padding-box;
      background-clip: padding-box;
      border: 1px solid #fff;
    }
    .teach_able:before {
      background: url(~assets/good_teacher/images/teach_able.png) no-repeat
        center center/cover;
    }
    .teach_tag:before {
      background: url(~assets/good_teacher/images/teach_tag.png) no-repeat
        center center/cover;
    }
    .intro_icon:before {
      background: url(~assets/good_teacher/images/intro.png) no-repeat center
        center/cover;
    }
    .video_icon:before {
      background: url(~assets/good_teacher/images/video_icon.png) no-repeat
        center center/cover;
    }
    .introduction {
      padding: 30px;
      padding-top: 50px;
      background: #fff;
      margin-bottom: 20px;
      .content {
        color: #666;
        font-size: 28px;
        text-indent: 2em;
        word-wrap: break-word;
        word-break: break-all;
        margin-top: 25px;
      }
    }
    .comment {
      background: #fff;
      padding: 0 30px;
      margin-bottom: 2px;
      .title {
        padding-top: 50px;
        &:before {
          position: absolute;
          left: 0;
          content: "";
          width: 30px;
          height: 30px;
          // background: url(../../assets/images/nation/Round.png) no-repeat center
          //   center/cover;
          border-radius: 100%;
          padding: 0;
          -webkit-background-clip: padding-box;
          background-clip: padding-box;
          border: 1px solid #fff;
        }
      }
      .score_icon:before {
        background: url(~assets/good_teacher/images/score.png) no-repeat center
          center/cover;
      }
      .total {
        font-size: 24px;
        color: #666;
        font-weight: normal;
      }
      .score_total {
        font-size: 34px;
        color: #ffd750;
      }
      .content {
        margin: 0 -30px;
        .item {
          display: flex;
          padding: 30px 30px 40px 30px;
          // border-bottom: 2px solid #ccc;
          img {
            width: 80px;
            height: 80px;
            margin-right: 20px;
          }
          .item-detail {
            flex: 1;
            .name {
              color: #11b7c7;
              font-size: 28px;
            }
            .time {
              color: #bbb;
              font-size: 24px;
            }
            .detail {
              font-size: 28px;
              padding: 20px;
              color: #333;
              word-break: break-all;
              background: #f7f7f7;
              margin-top: 20px;
            }
          }
        }
        .item:last-child {
          border-bottom: 0;
        }
      }
    }
  }
}
.pr {
  position: relative;
}
.pa {
  position: absolute;
}
.shade {
  top: 0;
  left: 0;
  opacity: 0.6;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    to bottom,
    rgba(255, 255, 255, 0),
    rgba(255, 255, 255, 1)
  );
}
</style>