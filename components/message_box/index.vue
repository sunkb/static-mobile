<template>
  <div class="message-model">
    <div class="fixed-background" v-show="isOpened">
      <div class="model-wrap">
        <div class="content-close">
          <img
            class="content-close-img"
            @click="close"
            :src="require('~/assets/presentation/img/close.png')"
          />
        </div>
        <div class="content-div">
          <img class="content-div-img" :src="backgroundImag" />
          <div class="info-div" v-if="mode === 1">
            <div class="register-button" @click="gotoLoginRegister('login')">
              <img class="register-button-img" :src="loginImg" />
            </div>
            <div class="login-button" @click="gotoLoginRegister('register')">
              <img class="login-button-img" :src="registerImg" />
            </div>
          </div>
          <div class="activity-div" v-else-if="mode === 2">
            <div class="activity-button" @click="gotoLink()">
              <img class="activity-button-img" :src="activityImg" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>

export default {
  name: 'messageBox',

  componentName: 'messageBox',

  data () {
    return {
    }
  },

  props: {
    isOpened: { // 是否显示
      type: Boolean,
      default: true
    },
    backgroundImag: { // 弹框背景图
      type: String,
      default: 'https://qn-static.landi.com/uploadtool1607f5931e0aa1553ca368b2478d5d80.png'
    },
    mode: { // 模式
      type: Number,
      default: 2
    },
    // 当模式为1的情况下
    loginImg: { //登录按钮参数
      type: String,
      default: 'https://qn-static.landi.com/uploadtool59e39dafc52e9b84414ea1c435d4bc74.png'
    },
    registerImg: { //注册按钮参数
      type: String,
      default: 'https://qn-static.landi.com/uploadtool2c80075256a0afc4d95dab6add8099a7.png'
    },
    // 当模式为2的情况下
    activityImg: {  //活动按钮参数
      type: String,
      default: 'https://qn-static.landi.com/uploadtool59e39dafc52e9b84414ea1c435d4bc74.png'
    }

  },

  methods: {
    close () {
      this.isOpened = false
    },
    gotoLoginRegister (mode) {
      this.$emit('click', mode)
    },
    gotoLink () {
      this.$emit('click')
    },
  }

}
</script>
<style lang="scss" scoped>
.message-model {
  .fixed-background {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0px;
    background: rgba($color: #080808, $alpha: 0.4);
    z-index: 1000;
    .model-wrap {
      position: relative;
      left: 95px;
      top: 144px;
      width: 560px;
      border-radius: 20px;
      .content-close {
        width: 100%;
        text-align: right;
        margin-bottom: -8px;
        &-img {
          width: 50px;
        }
      }
      .content-div {
        &-img {
          width: 560px;
        }
        .info-div {
          position: relative;
          .register-button {
            position: absolute;
            bottom: 90px;
            left: 55px;
            width: 450px;
            &-img {
              width: 450px;
            }
          }
          .login-button {
            position: absolute;
            bottom: 50px;
            left: 140px;
            &-img {
              width: 280px;
            }
          }
        }
        .activity-div {
          position: relative;
          .activity-button {
            position: absolute;
            bottom: 50px;
            left: 55px;
            width: 450px;
            &-img {
              width: 450px;
            }
          }
        }
      }
    }
  }
}
</style>
