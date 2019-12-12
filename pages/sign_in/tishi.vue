
<template>
  <div class="dialog" v-show="showMask">
    <div class="dialog-container">
      <div class="dialog-title">{{title}}</div>
      <!-- <textarea class="content" placeholder="请进行评论"   id="textArea" @change="getTextArea"/> -->
      <div class="content" v-text="content"></div>
      <div class="btns">
        <div v-if="type == 'danger'" class="danger-btn" @click="dangerBtn">{{dangerText}}</div>
        <!-- <div class="danger-btn">
                    |
        </div>-->
        <div v-if="type != 'confirm'" class="default-btn" @click="closeBtn">{{cancelText}}</div>
      </div>
      <!-- <div class="close-btn" @click="closeMask"><b class="iconfont icon-close">X</b></div> -->
    </div>
  </div>
</template>
<script>
export default {
  props: {
    value: {},
    type: {
      type: String,
      default: 'default'
    },
    content: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    },
    cancelText: {
      type: String,
      default: '取消'
    },
    dangerText: {
      type: String,
      default: '确认'
    },

  },
  data () {
    return {
      showMask: false,
    }
  },
  methods: {
    closeMask () {
      this.showMask = false;
    },
    closeBtn () {
      this.$emit('cancel');
      this.closeMask();

    },
    dangerBtn () {
      this.$emit('danger', this.textArea);
      this.closeMask();
    },
    getTextArea (e) {
      this.textArea = e.target.value
      console.log('输入的内容', e.target.value)
    }
  },
  mounted () {
    this.showMask = this.value;
  },
  watch: {
    value (newVal, oldVal) {
      this.showMask = newVal;
    },
    showMask (val) {
      this.$emit('input', val);
    }
  },
}
</script>
<style lang="scss" scoped>
.dialog {
  position: fixed;
  top: -20%;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.6);
  z-index: 9999;
  .dialog-container {
    width: 600px;
    height: 240px;
    background: #ffffff;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    .dialog-title {
      width: 100%;
      height: 60px;
      font-size: 18px;
      color: #696969;
      font-weight: 600;
      box-sizing: border-box;
    }
    .content {
      color: #333333;
      width: 45vw;
      text-align: center;
      margin-left: 20%;
      font-size: 28px;
    }

    .btns {
      width: 100%;
      height: 60px;
      // line-height: 60px;
      position: absolute;
      bottom: 0;
      left: 0;
      text-align: right;
      padding: 0 16px;
      box-sizing: border-box;
      & > div {
        // display: inline-block;
        height: 45px;
        line-height: 25px;
        padding: 0 8px;
        color: black;
        background: #ffffff;
        border-radius: 8px;
        float: left;
        cursor: pointer;
      }
      .default-btn {
        position: absolute;
        top: -60%;
        left: 55%;
        font-size: 28px;
        line-height: 80px;
        text-align: center;
        width: 200px;
        height: 80px;
        color: black;
        background-color: #ffd750;
        &:hover {
          color: #509ee3;
        }
      }
      .danger-btn {
        position: absolute;
        top: -60%;
        width: 200px;
        height: 80px;
        font-size: 28px;
        text-align: center;
        line-height: 80px;
        margin-left: 50px;
        color: black;
        background-color: #eeeeee;
      }
    }
    // .close-btn{
    //     position: absolute;
    //     top: 16px;
    //     right: 16px;
    //     width: 30px;
    //     height: 30px;
    //     line-height: 30px;
    //     text-align: center;
    //     font-size: 18px;
    //     cursor: pointer;
    //     &:hover{
    //         font-weight: 600;
    //     }
    // }
  }
}
</style>
