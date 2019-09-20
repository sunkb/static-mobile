<template>
  <div>
    <!-- 活动规则 -->
    <div class="tab-content" v-if="activeTab==='rule'">
      <i class="rule-title rule-title-1"></i>
      <p class="rule-content-1">
        本活动于2019年9月4日开始，限量200团，先到先得，
        额满为止。
      </p>
      <i class="rule-title rule-title-2"></i>
      <p class="rule-content-2">
        活动仅限老用户（已购买正式课程的用户）发起拼团，新用户（未注册用户）参与拼团，3人起拼团。
      </p>
      <i class="rule-title rule-title-3"></i>
      <p class="rule-content-3">
        1、每位老学员有<span>1</span>次开团机会，每位新学员有<span>1</span>次参团机会。拼团失败不占用拼团成功次数。
        <br />2、开团后，邀请至少<span>2</span>位新学员成功参团，即拼团成功。
        <br />3、拼团成功后，团长可得<span>「4节外教真人课」</span>。团员可得<span>「7节自然拼读课+1节精品外教真人课+配套精美单词卡」</span>。
        <br />4、发起拼团后，在该页下方点击<span>“我的拼团”</span>可以查看拼团进度。
        <br />5、拼团失败，款项将在活动结束后<span>10</span>个工作日内退回。
        <br />6、因本次组团优惠力度大，拼团成功后不可退费、退课。
        <br />7、拼团活动结束后，单词卡将于<span>3-5</span>个工作日，按拼团成功的先后顺序发货（<span>包邮</span>）。
        <br />8、自然拼读课程请前往<span>「abc360英语服务号-享服务-个人中心-我」查看并学习</span>。
        <br />9、自然拼读课程可以永久免费观看学习。
        <br />10、参与拼团的未注册用户，无论是否拼团成功，注册成功后均可享受<span>1</span>节免费外教体验课，参与拼团后<span>24</span>小时内，会有课程顾问老师致电联系。
        <br />11、未注册学员，如果该学员通过老学员[邀请参团页面中专属链接]注册<span>abc360</span>并首次购买课程，邀请人可根据阶梯获得对应的赠币、被邀请人也可获得对应的赠币。
      </p>
      <p class="rule-content-4">在法律允许范围内，本活动的最终解释权abc360所有</p>
    </div>
    <!-- 课程详情 -->
    <div class="tab-content" v-if="activeTab==='detail'">
      <i class="detail-title detail-title-1"></i>
      <div class="detail-content detail-content-1"></div>
      <div class="detail-content detail-content-2"></div>
      <i class="detail-title detail-title-2"></i>
      <div class="detail-content-3">
        <video controls poster="https://qn-smilejunior-admin.abc360.com/uploadtool4d3af4ea89c305f2cd444075c3a8865c.png">
          <source src="https://qn-video.abc360.com/Intro-190828.mp4" type="video/mp4" />
        </video>
      </div>
      <div class="video-describe"></div>
      <i class="detail-title detail-title-3"></i>
      <div class="detail-content detail-content-4"></div>
      <div class="detail-content detail-content-5">
        <i class="detail-title detail-title-4"></i>
      </div>
      <div @click="funBtnSide" class="btn-side">
        <span>自然拼读小科普</span>
        <i></i>
      </div>
    </div>
    <!-- 自然拼读小科普 -->
    <div class="tab-content" v-if="activeTab==='spell'">
      <i class="spell-title"></i>
      <p class="spell-title-1">为什么要学习自然拼读法?</p>
      <p class="spell-content-1">
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;传统记忆单词的方式：将单词拆成一个一个字母，记忆字母的排列顺序。
        <br />1.容易扼杀孩子的学习兴趣；
        <br />2.无法掌握最纯正的发音方式；
        <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;自然拼读法: 通过建立字母和发音的对应关系，根据英文字母在单词里的发音规律将这个单词读出来。实现从“字母发音-字母组合发音-单词-简单句子-整段句子”的系统学习。
        <br />1.帮助孩子培养地道的发音；
        <br />2.帮助提高单词量和认读能力，增强阅读兴趣；
        <br />3.帮助快速记忆单词，准确拼写；
      </p>
      <p class="spell-title-1">自然拼读课程适合的人群是谁？</p>
      <p class="spell-content-2">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;想要培养地道发音，或者期望轻松记忆单词并提高单词量的孩子，都可以开始学习。</p>
      <p class="spell-content-3">
        英语单词80%以上都符合自然拼读的发音规则，只要掌握这些规则并加以练习，就可轻松的做到看字读音，听音拼字哦~
      </p>
      <div @click="goBack" class="btn-goback">返回</div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {}
  },
  props: {
    activeTab: {
      type: String,
      default: 'rule'
    }
  },
  methods: {
    funBtnSide() {
      this.$emit('funBtnSide')
    },
    goBack() {
      this.$emit('goBack')
    }
  }
}
</script>
<style lang="scss" scoped>
.tab-content {
  width: 9.35rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 0.32rem;
  position: relative;

  .rule-title {
    height: 1.01rem;
    background-size: cover;
    background-repeat: no-repeat;
  }
  .rule-title-1 {
    width: 5.47rem;
    margin-top: 0.27rem;
    background-image: url('~assets/group_buy/img/rule-title-1.png');
  }
  .rule-title-2 {
    width: 3.73rem;
    background-image: url('~assets/group_buy/img/rule-title-2.png');
  }
  .rule-title-3 {
    width: 3.73rem;
    background-image: url('~assets/group_buy/img/rule-title-3.png');
  }

  p {
    color: #878787;
    font-size: 0.35rem;
    font-weight: 500;
    font-family: PingFang SC;
    line-height: 0.59rem;
    span {
      color: #fe5f8f;
    }
  }
  .rule-content-1 {
    width: 8.6rem;
    margin: 0.27rem 0.39rem 0.19rem 0.36rem;
  }
  .rule-content-2 {
    width: 8.65rem;
    margin: 0.21rem 0.33rem 0.33rem 0.36rem;
  }
  .rule-content-3 {
    width: 8.84rem;
    margin: 0.28rem 0.16rem 0 0.35rem;
  }
  .rule-content-4 {
    color: #878787;
    font-size: 0.32rem;
    margin-top: 0.7rem;
  }
  .detail-title {
    height: 1rem;
    background-size: cover;
    background-repeat: no-repeat;
  }
  .detail-title-1 {
    width: 3.97rem;
    margin-top: 0.27rem;
    background-image: url('~assets/group_buy/img/detail-title-1.png');
  }
  .detail-title-2 {
    width: 7.23rem;
    margin-top: 0.75rem;
    background-image: url('~assets/group_buy/img/detail-title-2.png');
  }
  .detail-title-3 {
    width: 3.97rem;
    margin-top: 0.83rem;
    background-image: url('~assets/group_buy/img/detail-title-3.png');
  }
  .detail-title-4 {
    width: 5.87rem;
    background-image: url('~assets/group_buy/img/detail-title-4.png');
    position: absolute;
    right: 0.27rem;
    top: -0.27rem;
  }
  .detail-content {
    background-size: cover;
    background-repeat: no-repeat;
  }
  .detail-content-1 {
    width: 8.37rem;
    height: 6.8rem;
    background-image: url('~assets/group_buy/img/detail-content-1.png');
    margin-top: 0.32rem;
  }
  .detail-content-2{
    width: 8.24rem;
    height: 6.63rem;
    background-image: url('~assets/group_buy/img/detail-content-2.png');
    margin-top: .32rem;
  }
  .detail-content-3 {
    width: 8.05rem;
    height: 4.27rem;
    border-radius: 30px;
    margin-top: 0.48rem;
    video {
      width: 100%;
      height: 100%;
    }
  }
  .video-describe {
    background-size: cover;
    background-repeat: no-repeat;
    background-image: url('~assets/group_buy/img/video-describe.png');
    width: 8.52rem;
    height: 3.52rem;
    margin-top: .19rem;
  }
  .detail-content-4 {
    width: 8.37rem;
    height: 10.19rem;
    background-image: url('~assets/group_buy/img/detail-content-4.png');
    margin-top: 0.29rem;
  }
  .detail-content-5 {
    width: 8.37rem;
    height: 6.45rem;
    background-image: url('~assets/group_buy/img/detail-content-5.png');
    margin-top: 0.69rem;
    position: relative;
  }
  .btn-side {
    display: flex;
    align-items: center;
    width: 2.39rem;
    height: 0.53rem;
    position: absolute;
    top: 9.95rem;
    right: 0;
    background-image: url('~assets/group_buy/img/btn-side.png');
    background-size: cover;
    background-repeat: no-repeat;
    padding-left: 0.28rem;
    span {
      font-weight: 500;
      color: #ffffff;
      font-size: 0.27rem;
    }
    i {
      width: 0.19rem;
      height: 0.17rem;
      background-image: url('~assets/group_buy/img/icon-more.png');
      background-size: cover;
      background-repeat: no-repeat;
    }
  }
  .spell-title {
    width: 6.2rem;
    height: 1rem;
    background-image: url('~assets/group_buy/img/spell-title.png');
    background-size: cover;
    background-repeat: no-repeat;
    margin-top: 0.24rem;
  }
  .spell-title-1 {
    width: 100%;
    padding-left: 0.51rem;
    font-size: 0.4rem;
    color: #525050;
    font-family: PingFang SC;
    font-weight: bold;
  }
  .spell-content-1 {
    padding: 0.53rem 0.51rem 0 0.52rem;
  }
  .spell-content-2 {
    padding: 0.25rem 0.37rem 0 0.44rem;
  }
  .spell-content-3 {
    font-size: 0.29rem;
    color: #666666;
    line-height: 0.48rem;
    padding: 1.71rem 0.43rem 0 2.56rem;
  }
  .btn-goback {
    width: 2.03rem;
    height: 0.8rem;
    line-height: 0.8rem;
    text-align: center;
    font-size: 0.48rem;
    color: #ffffff;
    background-image: url('~assets/group_buy/img/btn-go-back.png');
    background-size: cover;
    background-repeat: no-repeat;
    margin: 0.8rem 1.13rem 0.8rem 7.29rem;
  }
}
</style>