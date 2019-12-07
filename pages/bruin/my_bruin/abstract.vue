<template>
  <div class="abstract" v-show="abstractShow">
    <div class="abstract-background" @click="cancelShow"></div>

    <div class="abstract-stage">
      <div class="abstract-stage-button">
        <div class="abstract-stage-button-swipe">
          <van-swipe :autoplay="swipeTime" :show-indicators="indicators">
            <van-swipe-item>
              <div style="width: 591px;height: 302px;display:flex;margin-left:96px;">
                <img
                  style="width: 139px;height: 150px;"
                  src="../../../assets/bruin/img/bruin_view/1.png"
                />
              </div>
            </van-swipe-item>
            <van-swipe-item>
              <div style="width: 591px;height: 302px;display:flex;margin-left:96px;">
                <img
                  style="width: 139px;height: 150px;"
                  src="../../../assets/bruin/img/bruin_view/2.png"
                />
              </div>
            </van-swipe-item>
            <van-swipe-item>
              <div style="width: 591px;height: 302px;display:flex;margin-left:96px;">
                <img
                  style="width: 139px;height: 150px;"
                  src="../../../assets/bruin/img/bruin_view/3.png"
                />
              </div>
            </van-swipe-item>
            <van-swipe-item>
              <div style="width: 591px;height: 302px;display:flex;margin-left:96px;">
                <img
                  style="width: 139px;height: 150px;"
                  src="../../../assets/bruin/img/bruin_view/4.png"
                />
              </div>
            </van-swipe-item>
            <van-swipe-item>
              <div style="width: 591px;height: 302px;display:flex;margin-left:96px;">
                <img
                  style="width: 139px;height: 150px;"
                  src="../../../assets/bruin/img/bruin_view/5.png"
                />
              </div>
            </van-swipe-item>
          </van-swipe>
        </div>
        <div class="abstract-stage-button-content" @click="ssss">放入熊库</div>
      </div>
    </div>
  </div>
</template>
<script>
import { Swipe, SwipeItem } from 'vant';
import "vant/lib/index.css";
export default {
  name: 'abstract',
  props: {
    abstractShow: {
      type: Boolean,
      default: false
    },
    awardBruinNumber: {
      type: Number,
      default: 0
    }
  },
  data () {
    return {
      isShowIndicators: false,
      indicators: false, // 指示器显隐
      swipeTime: 300,
      swipeObj: null,
      timeParam: 1
    }
  },
  components: {
    'van-swipe': Swipe,
    'van-swipe-item': SwipeItem
  },
  created () {},
  mounted () {
    this.swipeObj = setInterval(() => {
      if (this.swipeTime > 2601) {
        clearInterval(this.swipeObj)
        this.timeParam = 300000
      }
      this.swipeTime = this.swipeTime + (this.timeParam++) * 75
      console.log(this.swipeTime)
    }, 2000)
  },
  methods: {
    cancelShow () {
      clearInterval(this.swipeObj)
      this.swipeTime = 300
      this.$emit('fcancelShow')
    },
    ssss () {

    }
  }
}
</script>
<style lang="scss" scoped>
.abstract {
  overflow: auto;
  -webkit-overflow-scrolling: auto;
  width: 100vw;
  height: 100vh;
  position: relative;
  &-background {
    width: 100vw;
    height: 100vh;
    background: black;
    opacity: 0.4;
    position: fixed;
    top: 0;
    z-index: 100;
  }
  &-stage {
    width: 592px;
    height: 800px;
    background: url("https://qn-static.landi.com/uploadtool43e9e7eef83e79229aec4f7f0b62a0bf.png") no-repeat;
    background-size: 100%;
    position: fixed;
    top: 131px;
    left: 50%;
    margin-left: -296px;
    z-index: 1000;
    &-button {
      width: 314px;
      height: 99px;
      background: rgba(255, 126, 126, 1);
      box-shadow: 0px 10px 0px 0px rgba(184, 71, 71, 1);
      border-radius: 24px;
      position: absolute;
      bottom: 44px;
      left: 50%;
      margin-left: -157px;
      display: flex;
      justify-content: center;
      align-items: center;
      &-swipe {
        width: 592px;
        height: 300px;
        position: absolute;
        top: -430px;
        z-index: 10000;
      }
      &-content {
        font-size: 44px;
        font-family: PingFang SC;
        font-weight: 600;
        color: rgba(255, 255, 255, 1);
        line-height: 24px;
      }
    }
  }
}
</style>