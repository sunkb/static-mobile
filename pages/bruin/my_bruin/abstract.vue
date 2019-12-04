<template>
  <div class="abstract" v-show="abstractShow">
    <div class="abstract-background" @click="cancelShow"></div>
    <div class="abstract-stage">
      <div class="abstract-stage-button">
        <div class="abstract-stage-button-swipe">
          <van-swipe :autoplay="300">
            <van-swipe-item>
              <div style="width: 591px;height: 302px;display:flex;margin-left:96px;">
                <img style="width: 139px;height: 150px;" src="../../../assets/bruin/img/test11/test.png"/>
              </div>
            </van-swipe-item>
            <van-swipe-item>
              <div style="width: 591px;height: 302px;display:flex;margin-left:96px;">
                <img style="width: 139px;height: 150px;" src="../../../assets/bruin/img/test11/test.png"/>
              </div>
            </van-swipe-item>
            <van-swipe-item>
              <div style="width: 591px;height: 302px;display:flex;margin-left:96px;">
                <img style="width: 139px;height: 150px;" src="../../../assets/bruin/img/test11/test.png"/>
              </div>
            </van-swipe-item>
            <van-swipe-item>
              <div style="width: 591px;height: 302px;display:flex;margin-left:96px;">
                <img style="width: 139px;height: 150px;" src="../../../assets/bruin/img/test11/test.png"/>
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
    }
  },
  data() {
    return {
      isShowIndicators: false
    }
  },
  components: {
    'van-swipe': Swipe,
    'van-swipe-item': SwipeItem
  },
  created () {
    console.log(1111111111)
  },
  methods: {
    cancelShow () {
      this.$emit('fcancelShow')
    },
    ssss() {
      console.log(111111111)
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
    background: url("../../../assets/bruin/img/abstract.png") no-repeat;
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