<template>
  <div class="message-model">
    <div class="fixed-background">
      <div class="modal-wrap">
        <div class="model-title">{title}</div>
        <div class="model-content">{content}</div>
        <div class="model-bottom">

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
    title: {
      type: String,
      default: '提示'
    },
    content: {
      type: String,
      default: ''
    }
  }
}
</script>
<style lang="scss" scoped>
.message-model {
  .fixed-background {
    position: fixed;
    width: 100%;
    height: 100%;
    left: 0px;
    top: 0px;
    background: rgba($color: #000000, $alpha: 0.4);
    z-index: 1000;
  }
  .modal-wrap {
    position: relative;
    left: 95px;
    top: 244px;
    width: 560px;
    height: 480px;
    background: #f9f8f0;
    border: 3px solid black;
    border-radius: 10px;
    .model-title {
      margin: 32px 0 38px 0;
      text-align: center;
      font-size: 36px;
      font-weight: 600;
    }
    .model-content {
      width: 388px;
      height: 82px;
      line-height: 1.8;
      margin: 0 auto;
    }
  }
}
</style>