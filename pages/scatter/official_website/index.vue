<template>
  <div id="official">
    <div class="header">
      <img class="header-img" src="../../../assets/scatter/official_website/img/head/1.png" />
    </div>
    <div class="acquire">
      <div class="acquire-title">
        <img
          class="acquire-title-left"
          src="../../../assets/scatter/official_website/img/title_left.png"
        />
        <img
          class="acquire-title-content"
          src="../../../assets/scatter/official_website/img/class_name.png"
        />
        <img
          class="acquire-title-right"
          src="../../../assets/scatter/official_website/img/title_right.png"
        />
      </div>
      <div class="acquire-input">
        <div class="acquire-input-mobile">
          <input class="acquire-input-mobile-style" placeholder="请输入您的手机号码" />
        </div>
        <div class="acquire-input-yzm">
          <input class="acquire-input-yzm-style" placeholder="请输入验证码" />
          <div class="acquire-input-yzm-button">
            <div class="acquire-input-yzm-button-text">获取验证码</div>
          </div>
        </div>
      </div>
      <div class="acquire-button">
        <div class="acquire-button-text">立即领取</div>
      </div>
    </div>
    <div class="free">
      <div class="common-title">
        <img
          class="common-title-left"
          src="../../../assets/scatter/official_website/img/title_left.png"
        />
        <div class="common-title-content">领取将免费获得</div>
        <img
          class="frcommonee-title-right"
          src="../../../assets/scatter/official_website/img/title_right.png"
        />
      </div>
      <div class="free-intr">
        <div class="free-intr-div" v-for="(item, index) in freeData" :key="index">
          <img
            class="free-intr-div-img"
            src="../../../assets/scatter/official_website/img/free/1.png"
          />
          <div class="free-intr-div-num">1节</div>
          <div class="free-intr-div-intr">{{item.intr}}</div>
        </div>
      </div>
    </div>
    <div class="choose">
      <div class="common-title">
        <img
          class="common-title-left"
          src="../../../assets/scatter/official_website/img/title_left.png"
        />
        <div class="common-title-content">家长为什么选择兰迪</div>
        <img
          class="common-title-right"
          src="../../../assets/scatter/official_website/img/title_right.png"
        />
      </div>
      <div class="choose-swipe">
        <mt-swipe trigger="click" height="150px">
          <mt-swipe-item v-for="(item, index) in firstImages" :key="index">
            <img
              class="choose-swipe-img"
              src="../../../assets/scatter/official_website/img/middle_swipe/1.png"
            />
          </mt-swipe-item>
        </mt-swipe>
      </div>
    </div>
    <div class="optimization">
      <div class="common-title">
        <img
          class="common-title-left"
          src="../../../assets/scatter/official_website/img/title_left.png"
        />
        <div class="common-title-content">兰迪优选-优质外教</div>
        <img
          class="common-title-right"
          src="../../../assets/scatter/official_website/img/title_right.png"
        />
      </div>
      <div class="optimization-text">兰迪少儿英语采用严格的外教录用标准，精心挑选有教育经验、纯正英文口音的外教，保证孩子在课堂上学习更高效</div>
      <div class="optimization-div" v-for="(item, index) in optimizationImg" :key="index">
        <img
          class="optimization-div-img"
          src="../../../assets/scatter/official_website/img/optimization/1.png"
        />
        <div class="optimization-div-content">
          <div class="optimization-div-content-title">6000+真人外教</div>
          <div class="optimization-div-content-intr">TESOL国际教师资格认证</div>
        </div>
      </div>
    </div>
    <div class="ways">
      <div class="common-title">
        <img
          class="common-title-left"
          src="../../../assets/scatter/official_website/img/title_left.png"
        />
        <div class="common-title-content">哈佛教授获奖研究成果-同伴学习法</div>
        <img
          class="common-title-right"
          src="../../../assets/scatter/official_website/img/title_right.png"
        />
      </div>
      <div class="ways-text">强化互动性，学习更科学高效</div>
      <img class="ways-img" src="../../../assets/scatter/official_website/img/tech_model.png" />
      <div class="ways-video"></div>
      <div class="ways-title">专家观点</div>
      <div
        class="ways-intr1"
      >美国哈佛大学Eric教授认为，通过和同伴一起学习、讨论、交流， 帮助孩子主动习得知识，而不是被动地接受老师的传授， 这样的学习方式更符合孩子学习天性。</div>
      <div class="ways-title">同伴课优势</div>
      <div class="ways-intr2"></div>
    </div>
    <div class="system">
      <div class="common-title">
        <img
          class="common-title-left"
          src="../../../assets/scatter/official_website/img/title_left.png"
        />
        <div class="common-title-content">自研+牛津-科学课程体系</div>
        <img
          class="common-title-right"
          src="../../../assets/scatter/official_website/img/title_right.png"
        />
      </div>
      <div class="system-text">入门级别课程丰富多彩，基础级别以上课程科学系统</div>
      <div class="system-intr"></div>
    </div>
    <div class="industry">
      <div class="common-title">
        <img
          class="common-title-left"
          src="../../../assets/scatter/official_website/img/title_left.png"
        />
        <div class="common-title-content">兰迪少儿英语-深耕在线少儿英语行业</div>
        <img
          class="common-title-right"
          src="../../../assets/scatter/official_website/img/title_right.png"
        />
      </div>
      <div class="industry-text">兰迪少儿英语成功入选CCTV大国品牌，作为国内领先的在线外教小班课品牌，一直致力于成为有温度的国民教育品牌。</div>
      <div class="industry-swipe">
        <mt-swipe trigger="click" height="150px">
          <mt-swipe-item v-for="(item, index) in firstImages" :key="index">
            <img
              class="industry-swipe-img"
              src="../../../assets/scatter/official_website/img/middle_swipe/1.png"
            />
          </mt-swipe-item>
        </mt-swipe>
      </div>
    </div>
    <div class="promise">
      <div class="common-title">
        <img
          class="common-title-left"
          src="../../../assets/scatter/official_website/img/title_left.png"
        />
        <div class="common-title-content">兰迪承诺</div>
        <img
          class="common-title-right"
          src="../../../assets/scatter/official_website/img/title_right.png"
        />
      </div>
      <div class="promise-text">树立行业标准 打消用户顾虑</div>
      <div class="promise-icon">
        <div v-for="(item, index) in promiseImg" :key="index">
          <img class="promise-img" src="../../../assets/scatter/official_website/img/promise/1.png" />
        </div>
      </div>
      <div class="promise-info">
        <div class="promise-info-div" v-for="(item, index) in promisrInfo" :key="index">
          <div class="promise-info-div-title">优选师资</div>
          <div class="promise-info-div-content">老师来自“英美加” 等英语为母语的国家，爱孩子，懂教育</div>
        </div>
      </div>
    </div>
    <div class="award">
      <div class="award-button">
        <img
          class="award-button-info"
          src="../../../assets/scatter/official_website/img/free_logo.png"
        />
        <div class="award-button-click">
          <img
            class="award-button-click-img"
            src="../../../assets/scatter/official_website/img/award.png"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Swipe from '~/components/swipe/Swipe';
import SwipeItem from '~/components/swipe/SwipeItem';
export default {
  name: 'official',
  data () {
    return {
      freeData: [
        {
          src: '../../../assets/scatter/official_website/img/free/1.png',
          intr: '1对2同伴外教课'
        },
        {
          src: '../../../assets/scatter/official_website/img/free/2.png',
          intr: '英语能力测评'
        },
        {
          src: '../../../assets/scatter/official_website/img/free/3.png',
          intr: '英语学习报告'
        }, {
          src: '../../../assets/scatter/official_website/img/free/4.png',
          intr: '个性化学习方案'
        }
      ],
      firstImages: [1, 2, 3],
      optimizationImg: [1, 2, 3],
      promiseImg: [1, 2, 3],
      promisrInfo: [1, 2, 3]
    }
  },
  components: {
    'mt-swipe': Swipe,
    'mt-swipe-item': SwipeItem
  },
  methods: {

  }

}
</script>
<style lang="scss" scoped>
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
#official {
  overflow: auto;
  -webkit-overflow-scrolling: auto;
  width: 100vw;
  .header {
    width: 100vw;
    height: 450px;
    &-img {
      width: 100vw;
      height: 450px;
    }
  }
  .acquire {
    width: 690px;
    height: 502px;
    position: absolute;
    top: 350px;
    left: 50%;
    margin-left: -345px;
    background: rgba(255, 255, 255, 1);
    box-shadow: 0px 2px 12px 0px rgba(0, 0, 0, 0.1);
    border-radius: 6px;
    &-title {
      width: 100%;
      height: 100px;
      display: flex;
      justify-content: center;
      align-items: center;
      &-left {
        width: 18px;
        height: 16px;
      }
      &-content {
        width: 352px;
        height: 36px;
        padding-left: 20px;
        padding-right: 20px;
      }
      &-right {
        width: 18px;
        height: 16px;
      }
    }
    &-input {
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      &-mobile {
        width: 630px;
        height: 90px;
        background: rgba(249, 249, 249, 1);
        border-radius: 8px;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        &-style {
          width: 380px;
          height: 60px;
          background: rgba(249, 249, 249, 1);
          margin-left: 30px;
        }
        &-style::-moz-placeholder {
          font-size: 28px;
          font-family: PingFangSC-Regular, PingFang SC;
          font-weight: 400;
          color: rgba(153, 153, 153, 1);
        }
        &-style::-webkit-input-placeholder {
          font-size: 28px;
          font-family: PingFangSC-Regular, PingFang SC;
          font-weight: 400;
          color: rgba(153, 153, 153, 1);
        }
      }
      &-yzm {
        width: 630px;
        height: 90px;
        background: rgba(249, 249, 249, 1);
        border-radius: 8px;
        margin-top: 40px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        &-style {
          width: 380px;
          height: 60px;
          background: rgba(249, 249, 249, 1);
          margin-left: 30px;
        }
        &-style::-moz-placeholder {
          font-size: 28px;
          font-family: PingFangSC-Regular, PingFang SC;
          font-weight: 400;
          color: rgba(153, 153, 153, 1);
        }
        &-style::-webkit-input-placeholder {
          font-size: 28px;
          font-family: PingFangSC-Regular, PingFang SC;
          font-weight: 400;
          color: rgba(153, 153, 153, 1);
        }
        &-button {
          width: 150px;
          height: 70px;
          background: rgba(20, 200, 210, 1);
          border-radius: 8px;
          display: flex;
          justify-content: center;
          align-items: center;
          margin-right: 10px;
          &-text {
            font-size: 24px;
            font-weight: 400;
            color: rgba(255, 255, 255, 1);
          }
        }
      }
    }
    &-button {
      width: 630px;
      height: 90px;
      background: rgba(20, 200, 210, 1);
      border-radius: 8px;
      margin-top: 40px;
      margin-left: 30px;
      display: flex;
      justify-content: center;
      align-items: center;
      &-text {
        font-size: 34px;
        font-family: PingFangSC-Semibold, PingFang SC;
        font-weight: 600;
        color: rgba(255, 255, 255, 1);
        line-height: 48px;
      }
    }
  }
  .free {
    margin-top: 430px;
    &-intr {
      display: flex;
      justify-content: center;
      align-items: center;
      &-div {
        width: 164px;
        height: 250px;
        background: rgba(249, 249, 249, 1);
        border-radius: 8px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin-right: 10px;
        &-img {
          width: 80px;
          height: 80px;
          background: rgba(146, 229, 221, 1);
          border-radius: 50%;
          margin-left: 42px;
        }
        &-num {
          font-size: 28px;
          font-family: PingFangSC-Semibold, PingFang SC;
          font-weight: 600;
          color: rgba(51, 51, 51, 1);
          text-align: center;
          margin-top: 20px;
          margin-bottom: 6px;
        }
        &-intr {
          font-size: 22px;
          font-family: PingFangSC-Regular, PingFang SC;
          font-weight: 400;
          color: rgba(102, 102, 102, 1);
          line-height: 30px;
          text-align: center;
        }
      }
    }
  }
  .choose {
    margin-top: 140px;
    &-swipe {
      width: 690px;
      height: 300px;
      margin-left: 30px;
      &-img {
        width: 690px;
        height: 300px;
      }
    }
  }
  .optimization {
    margin-top: 150px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    &-text {
      width: 690px;
      font-size: 24px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: rgba(102, 102, 102, 1);
      letter-spacing: 2px;
    }
    &-div {
      width: 690px;
      height: 150px;
      background: rgba(249, 249, 249, 1);
      border-radius: 8px;
      margin-top: 30px;
      display: flex;
      &-img {
        width: 210px;
        height: 148px;
      }
      &-content {
        margin-left: 30px;
        &-title {
          font-size: 28px;
          font-family: PingFangSC-Semibold, PingFang SC;
          font-weight: 600;
          color: rgba(51, 51, 51, 1);
          margin-top: 33px;
          margin-bottom: 12px;
        }
        &-intr {
          font-size: 24px;
          font-family: PingFangSC-Regular, PingFang SC;
          font-weight: 400;
          color: rgba(102, 102, 102, 1);
        }
      }
    }
  }
  .ways {
    margin-top: 140px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    &-text {
      font-size: 24px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: rgba(102, 102, 102, 1);
      text-align: center;
    }
    &-img {
      width: 750px;
      height: 277px;
    }
    &-video {
      width: 690px;
      height: 388px;
      border: 1px solid black;
    }
    &-title {
      width: 690px;
      font-size: 28px;
      font-family: PingFangSC-Semibold, PingFang SC;
      font-weight: 600;
      color: rgba(51, 51, 51, 1);
      margin-top: 20px;
      margin-bottom: 12px;
    }
    &-intr1 {
      width: 690px;
      font-size: 28px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: rgba(102, 102, 102, 1);
      margin-bottom: 100px;
    }
    &-intr2 {
      width: 690px;
      height: 550px;
      border: 1px solid black;
      margin-bottom: 140px;
    }
  }
  .system {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    &-text {
      font-size: 24px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: rgba(102, 102, 102, 1);
      text-align: center;
    }
    &-intr {
      width: 690px;
      height: 716px;
      border: 1px solid black;
      margin-bottom: 140px;
    }
  }
  .industry {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    &-text {
      width: 690px;
      font-size: 24px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: rgba(102, 102, 102, 1);
      text-align: center;
      margin-bottom: 30px;
    }
    &-swipe {
      width: 690px;
      height: 300px;
      margin-bottom: 140px;
      &-img {
        width: 690px;
        height: 300px;
      }
    }
  }
  .promise {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    &-text {
      width: 690px;
      font-size: 24px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: rgba(102, 102, 102, 1);
      text-align: center;
      margin-bottom: 30px;
    }
    &-icon {
      width: 100%;
      padding: 0 81px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .promise-img {
        width: 120px;
        height: 130px;
      }
    }
    &-info {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 30px;
      margin-bottom: 50px;
      &-div {
        width: 222px;
        height: 244px;
        background: rgba(249, 249, 249, 1);
        border-radius: 8px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        &-title {
          font-size: 28px;
          font-family: PingFangSC-Medium, PingFang SC;
          font-weight: 500;
          color: rgba(51, 51, 51, 1);
          text-align: center;
        }
        &-content {
          width: 194px;
          font-size: 24px;
          font-family: PingFangSC-Regular, PingFang SC;
          font-weight: 400;
          color: rgba(102, 102, 102, 1);
        }
      }
    }
  }
  .award {
    height: 150px;
    width: 100%;
    background: white;
    position: fixed;
    bottom: 0px;
    &-button {
      width: 690px;
      height: 100px;
      background: rgba(20, 200, 210, 1);
      border-radius: 50px;
      margin: 0 auto;
      display: flex;
      position: relative;
      &-info {
        width: 396px;
        height: 41px;
        margin-left: 60px;
        margin-top: 30px;
      }
      &-click {
        width: 202px;
        height: 100px;
        background: rgba(255, 217, 86, 1);
        border-radius: 50px;
        position: absolute;
        right: 0px;
        display: flex;
        justify-content: center;
        align-items: center;
        &-img {
          width: 144px;
          height: 41px;
        }
      }
    }
  }
}
.common-title {
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  &-left {
    width: 18px;
    height: 16px;
  }
  &-content {
    font-size: 34px;
    font-family: PingFangSC-Semibold, PingFang SC;
    font-weight: 600;
    color: rgba(51, 51, 51, 1);
    padding-left: 20px;
    padding-right: 20px;
  }
  &-right {
    width: 18px;
    height: 16px;
  }
}
</style>