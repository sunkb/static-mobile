<template>
  <div class="poster-three">
    <div class="poster">
      <img :src="posterUrl" alt />
    </div>
    <img
      class="tips-text"
      src="https://qn-static.landi.com/uploadtool3663b9ed245223f942c1f9a86b23eefc.jpg"
      alt
    />
  </div>
</template>

<script>
export default {
  props: {
    posterUrl: {},
    posterData: {}
  },
  data() {
    return {
      modelShow: false,
      currentCopyIndex: 0,
      textList: []
    };
  },
  methods: {
    changeText() {
      if (this.currentCopyIndex < this.textList.length - 1) {
        this.currentCopyIndex += 1;
        return;
      }
      this.currentCopyIndex = 0;
    }
  },
  created() {
    this.textList = this.posterData.texts;
  }
};
</script>

<style lang="less" scoped>
.poster-three {
  padding-top: 36px;
  text-align: center;
  position: relative;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  overflow: auto;
  .poster {
    width: 600px;
    height: 770px;
    margin: 0 auto;
    overflow: hidden;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .tips-text {
    width:720px;
    margin-top:20px;
  }
  .bottoms {
    width: 100%;
    height: 221px;
    background: url("../posterImages/left.png") 20px bottom no-repeat;
    background-size: 145px 221px;
    overflow: hidden;
    margin-top: -10px;
    .btn {
      height: 80px;
      line-height: 80px;
      font-size: 32px;
      border-radius: 40px;
      width: 450px;
      margin-left: 145px;
      // background: #05AAB3 ;
      box-shadow: 0 2px 4px #29d5e5;
      margin-top: 100px;
    }
  }
  .poster-model {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.6);
    z-index: 100;
    display: flex;
    flex-direction: column;
    align-items: center;
    .content {
      width: 600px;
      background: #ffffff;
      border-radius: 10px;
      margin-top: 270px;
      padding: 20px 40px 0;
      box-sizing: border-box;
      .change-text {
        font-size: 28px;
        color: #333333;
        text-decoration: underline;
        text-align: right;
        margin: 0 0 30px 0;
        // display: inline-block;
      }
      .text {
        font-size: 28px;
        color: #808080;
        line-height: 43px;
        text-align: left;
      }
      .btn {
        width: 300px;
        height: 70px;
        line-height: 70px;
        border-radius: 35px;
        font-size: 28px;
        margin: 50px auto;
      }
    }
  }
}
</style>

