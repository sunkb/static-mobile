<template>
  <div class="abstract" v-show="abstractShow">
    <div class="abstract-background"></div>

    <div class="abstract-stage">
      <div v-show="nameAndButtonShow" :class="abstractShow ? 'abstract-stage-name wrapper' : 'abstract-stage-name'">
        <img class="abstract-stage-name-img" src="../../../assets/bruin/img/bruin_name/1.png"/>
      </div>
      <div v-show="!nameAndButtonShow" :class="abstractShow ? 'abstract-stage-swipe' : 'abstract-stage-swipe wrapper'">
        <van-swipe :autoplay="swipeTime" :show-indicators="indicators">
          <van-swipe-item>
            <div style="width: 591px;height: 302px;display:flex;margin-left:96px;">
              <img
                style="width: 139px;height: 150px;"
                src="../../../assets/bruin/img/1.png"
              />
            </div>
          </van-swipe-item>
          <van-swipe-item>
            <div style="width: 591px;height: 302px;display:flex;margin-left:96px;">
              <img
                style="width: 139px;height: 150px;"
                src="../../../assets/bruin/img/2.png"
              />
            </div>
          </van-swipe-item>
          <van-swipe-item>
            <div style="width: 591px;height: 302px;display:flex;margin-left:96px;">
              <img
                style="width: 139px;height: 150px;"
                src="../../../assets/bruin/img/3.png"
              />
            </div>
          </van-swipe-item>
          <van-swipe-item>
            <div style="width: 591px;height: 302px;display:flex;margin-left:96px;">
              <img
                style="width: 139px;height: 150px;"
                src="../../../assets/bruin/img/4.png"
              />
            </div>
          </van-swipe-item>
          <van-swipe-item>
            <div style="width: 591px;height: 302px;display:flex;margin-left:96px;">
              <img
                style="width: 139px;height: 150px;"
                src="../../../assets/bruin/img/5.png"
              />
            </div>
          </van-swipe-item>
        </van-swipe>
      </div>
      <div v-show="nameAndButtonShow" :class="abstractShow ? 'abstract-stage-result wrapper' : 'abstract-stage-result'">
        <img class="abstract-stage-result-img" :src="'../../../assets/bruin/img/keys/'+ awardBruinNumber +'2.png'" />
      </div>
      <div @click="cancelShow" class="abstract-stage-button" v-show="nameAndButtonShow" :class="abstractShow ? 'abstract-stage-button-content wrapper' : 'abstract-stage-button-content'">
        <div>放入熊库</div>
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
      default: 1
    }
  },
  data () {
    return {
      isShowIndicators: false,
      indicators: false, // 指示器显隐
      swipeTime: 300,
      swipeObj: null,
      timeParam: 1,
      nameAndButtonShow: false
    }
  },
  components: {
    'van-swipe': Swipe,
    'van-swipe-item': SwipeItem
  },
  created () {},
  mounted () {
    this.swipeTime = 300
    this.timeParam = 1
  },
  methods: {
    cancelShow () {
      clearInterval(this.swipeObj)
      this.swipeTime = 300
      this.timeParam = 1
      this.nameAndButtonShow = false
      this.$emit('fcancelShow')
    }
  },
  watch: {
    abstractShow(value) {
      if(value) {
        this.swipeObj = setInterval(() => {
          if (this.swipeTime > 2601) {
            console.log('chenjiafan')
            clearInterval(this.swipeObj)
            this.swipeTime = 300
            this.timeParam = 300000
            this.nameAndButtonShow = true
          }
          this.swipeTime = this.swipeTime + (this.timeParam) * 75
          this.timeParam = this.timeParam + 2
          console.log(this.swipeTime)
        }, 2000)
      } else {
        clearInterval(this.swipeObj)
        this.swipeTime = 300
        this.timeParam = 1
        this.nameAndButtonShow = false
      }
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
    &-name {
      width: 304px;
      height: 58px;
      position: absolute;
      left: 50%;
      margin-left: -152px;
      top: 20px;
      &-img {
        width: 304px;
        height: 58px;
      }
    }
    &-swipe {
      width: 592px;
      height: 300px;
      position: absolute;
      top: 250px;
      z-index: 2000;
    }
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
      z-index: 3000;
      &-content {
        font-size: 44px;
        font-family: PingFang SC;
        font-weight: 600;
        color: rgba(255, 255, 255, 1);
        line-height: 24px;
      }
    }
    &-result {
      width: 247px;
      height: 346px;
      z-index: 40000;
      position: absolute;
      left: 50%;
      margin-left: -154px;
      top: 180px;
      &-img {
        width: 247px;
        height: 346px;
      }
    }
  }
}
@keyframes fade-in {  
    0% {opacity: 0;}/*初始状态 透明度为0*/  
    40% {opacity: 0;}/*过渡状态 透明度为0*/  
    100% {opacity: 1;}/*结束状态 透明度为1*/  
}  
@-webkit-keyframes fade-in {/*针对webkit内核*/  
    0% {opacity: 0;}  
    40% {opacity: 0;}  
    100% {opacity: 1;}  
}
.wrapper {    
    animation: fade-in;/*动画名称*/  
    animation-duration: 2s;/*动画持续时间*/  
    -webkit-animation:fade-in 2s;/*针对webkit内核*/  
} 
</style>