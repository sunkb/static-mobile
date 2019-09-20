<template>
  <div class="container">
    <div :class="[{'fade-in':isFadeIn},'mask']" ></div>
    <div class="popup-content">
      <div class="top">
        <input type="text" v-model="verCode" placeholder="请填写验证码"/>
        <img :src="verCodeImg" @click="changeVerCode" class="ver-code-img" />
      </div>
      <div class="bottom">
        <span class="btn-close" @click="closePopup">取消</span><span class="btn-submit" @click="submit">确定</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isFadeIn: true,
      verCode:''
    }
  },
  props: {
    popupType: {
      type: String,
      default: ''
    },
    verCodeImg: {
      type: String,
      default: ''
    }
  },
  mounted() {
    this.isFadeIn = true
  },
  beforeDestroy() {
    this.isFadeIn = false
  },
  methods: {
    closePopup() {
      this.$emit('closePopup')
    },
    changeVerCode(){
      this.$emit('changeVerCode')
    },
    submit(){
      this.$emit('submit',this.verCode)
    }
  }
}
</script>
<style lang="scss" scoped>
.mask {
  background-color: rgba(83, 83, 83, 1);
  opacity: 0.85;
  position: fixed;
  z-index: 500;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
}
.fade-in {
  animation: fadeIn 0.5s;
}

@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 0.85;
  }
}

.popup-content {
  position: fixed;
  z-index: 800;
  bottom: 0;
  left: 0;
  top: 0;
  right: 0;
  margin: auto;
  width: 7.83rem;
  height: 3.92rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  background-color: #fff;
  border-radius: 10px;
  overflow: hidden;
  .top {
    display: flex;
    align-items: center;
    margin-bottom: .87rem;
    input {
      width: 3.48rem;
      height: 1.07rem;
      border: 2px solid #bfbfbf;
      border-radius: 10px;
      margin-right: .35rem;
    }
  }
  .bottom{
    width: 100%;
    display: flex;
    border:1px solid #DCDCDC;
    font-size: .53rem;
    .btn-close{
      width: 50%;
      color: #181816;
      text-align: center;
      line-height: 1.19rem;
    }
    .btn-submit{
      width: 50%;
      color: #FA4B7E;
      text-align: center;
      line-height: 1.19rem;
    }
  }
}
</style>