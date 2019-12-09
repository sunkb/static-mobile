<template>
  <div class="abstract" v-show="abstractShow">
    <div class="abstract-background"></div>

    <div class="abstract-stage">
      <div v-show="nameAndButtonShow" :class="abstractShow ? 'abstract-stage-name wrapper' : 'abstract-stage-name'">
        <img class="abstract-stage-name-img" :src="bruinName[awardBruinNumber - 1].src" />
      </div>
      <div v-show="!nameAndButtonShow" :class="abstractShow ? 'abstract-stage-swipe' : 'abstract-stage-swipe wrapper'">
        <slide class="abstract-stage-swipe-div" :slides="slides" :inv="swipeTime" :name="transitionName1" :target="target"></slide>
      </div>
      <div v-show="nameAndButtonShow" :class="abstractShow ? 'abstract-stage-result wrapper' : 'abstract-stage-result'">
        <img class="abstract-stage-result-img" :src="bruinResult[awardBruinNumber - 1].src" />
      </div>
      <div @click="cancelShow" class="abstract-stage-button" v-show="nameAndButtonShow" :class="abstractShow ? 'abstract-stage-button-content wrapper' : 'abstract-stage-button-content'">
        <div>放入熊库</div>
      </div>
    </div>
  </div>
</template>
<script>
import slide from '~/components/slide/slide.vue'
import { API } from '~/pages/bruin/consts'
import axios from '~/utils/axios'
import "vant/lib/index.css";
export default {
  name: 'abstract',
  props: {
    abstractShow: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      isShowIndicators: false,
      swipeTime: 300,
      swipeObj: null,
      timeParam: 1,
      nameAndButtonShow: false,
      slides: [
        {
          src: 'https://qn-static.landi.com/uploadtool4f6c2142f18d9a0feccacbd73c7c1ed0.png'
        },
        {
          src: 'https://qn-static.landi.com/uploadtool98d52df665c24b5e29b8bb1e030af934.png'
        },
        {
          src: 'https://qn-static.landi.com/uploadtoolcdb18852e43ed742d245e496dca2483e.png'
        },
        {
          src: 'https://qn-static.landi.com/uploadtool57cfdb371c7f82c0fd3d6319ca52eb3f.png'
        },
        {
          src: 'https://qn-static.landi.com/uploadtool6425ca67c5dc62ee4c4cc80a0267cd29.png'
        }
      ],
      bruinName: [
        {
          src: 'https://qn-static.landi.com/uploadtoolb9c1ec278872b7404fc6a66e02b40a7d.png' // 乐学
        },
        {
          src: 'https://qn-static.landi.com/uploadtool35f628547667cc5bc6b418c807682b02.png' // 聪慧
        },
        {
          src: 'https://qn-static.landi.com/uploadtool8bdd328f9c8a7cdb33d4ee74713e4bdf.png' // 健康
        },
        {
          src: 'https://qn-static.landi.com/uploadtool52d8102aa7e04b6048d155eff313c2f8.png' // 勤奋
        },
        {
          src: 'https://qn-static.landi.com/uploadtool570e028a322ed1035d954d79bd197518.png' // 勇敢
        }
      ],
      bruinResult: [
        {
          src: 'https://qn-static.landi.com/uploadtoolf1c9c56c723ca8b49ac30e9d91f363fc.png' // 乐学
        },
        {
          src: 'https://qn-static.landi.com/uploadtool2e783b008fb670950ac337f8439512b0.png' // 聪慧
        },
        {
          src: 'https://qn-static.landi.com/uploadtool9e4f71ef5a28b872315dc775cdd2a7af.png' // 健康
        },
        {
          src: 'https://qn-static.landi.com/uploadtoolc6d0c31facd904eef2bb2dec5c99faaa.png' // 勤奋
        },
        {
          src: 'https://qn-static.landi.com/uploadtool0abba42258b5d7a7cf89eaf7d98603e3.png' // 勇敢
        }
      ],
      transitionName1: 'move',
      target: '_blank',
      swipeObj: null,
      awardBruinNumber: 1  // 点击抓熊按钮后，出现的熊的编号
    }
  },
  components: {
    'slide': slide
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
    async abstractShow(value) {
      if(value) {
        this.swipeObj = setInterval(() => {
          if (this.swipeTime > 1400) {
            console.log('chenjiafan')
            clearInterval(this.swipeObj)
            this.swipeTime = 300
            this.timeParam = 300000
            this.nameAndButtonShow = true
          }
          this.swipeTime = this.swipeTime + (this.timeParam ++) * 75
          console.log(this.swipeTime)
        }, 2000)
        try {
          const activityId = 1
          const res = await axios.post(API.GRAD_BRUIN, {activity_id: activityId})
          if (!res.status) {
            console.log(res.info)
            return 
          }
          this.awardBruinNumber = res.data
        } catch (err) {
          console.log(err) 
          return 
        }
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
      display: flex;
      justify-content: center;
      &-div {
        width: 246px;
        height: 380px;
      }
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
      width: 267px;
      height: 346px;
      z-index: 40000;
      position: absolute;
      left: 50%;
      margin-left: -135px;
      top: 180px;
      &-img {
        width: 267px;
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