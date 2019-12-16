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
          <!-- <input /> -->
        </div>
        <div class="acquire-input-yzm"></div>
      </div>
      <div class="acquire-button">
        <div class="acquire-button-text">立即领取</div>
      </div>
    </div>
    <div class="free">
      <div class="free-title">
        <img
          class="free-title-left"
          src="../../../assets/scatter/official_website/img/title_left.png"
        />
        <img
          class="free-title-content"
          src="../../../assets/scatter/official_website/img/class_name.png"
        />
        <img
          class="free-title-right"
          src="../../../assets/scatter/official_website/img/title_right.png"
        />
      </div>
    </div>
  </div>
</template>
<script>
export default {

}
</script>
<style lang="scss" scoped>
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
      }
      &-yzm {
        width: 630px;
        height: 90px;
        background: rgba(249, 249, 249, 1);
        border-radius: 8px;
        margin-top: 40px;
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
}
</style>