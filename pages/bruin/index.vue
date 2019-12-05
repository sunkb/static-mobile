<template>
  <div class="home">
    <div class="home-background">
      <div class="home-header">
        <img class="home-header-ways" src="../../assets/bruin/img/ways.png" />
        <img class="home-header-work" src="../../assets/bruin/img/home_bruin.png" />
      </div>
      <div class="home-pitch">
        <div class="home-pitch-first">
          <img class="hot" src="../../assets/bruin/img/hot.png" />
          <img class="home-pitch-first-img" src="../../assets/bruin/img/pitch_button.png" />
        </div>
        <div class="home-pitch-second">
          <img class="home-pitch-second-img" src="../../assets/bruin/img/second_button_disable.png" />
        </div>
      </div>
      <div class="home-entrance">
        <div class="home-entrance-invite">
          <img class="home-entrance-invite-img" src="../../assets/bruin/img/invite_button.png" />
        </div>
        <div class="home-entrance-renew">
          <img class="home-entrance-renew-img" src="../../assets/bruin/img/renew_button.png" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {

}
</script>
<style lang="scss" scoped>
.home {
  overflow: auto;
  -webkit-overflow-scrolling: auto;
  width: 100vw;
  .home-background {
    width: 100vw;
    height: 100%;
    background: url("../../assets/bruin/img/home_page.png");
    background-size: 100%;
    .home-header {
      padding-top: 87px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      &-ways {
        width: 112px;
        height: 71px;
      }
      &-work {
        width: 96px;
        height: 94px;
        margin-right: 18px;
      }
    }
    .home-pitch {
      margin-top: 315px;
      display: flex;
      justify-content: center;
      position: relative;
      &-first {
        width: 343px;
        height: 95px;
        .hot {
          height: 61px;
          width: 42px;
          position: absolute;
          top: -20px;
          left: 60px;
        }
        &-img {
          width: 343px;
          height: 95px;
        }
      }
      &-second {
        width: 343px;
        height: 95px;
        &-img {
          width: 343px;
          height: 95px;
        }
      }
    }
    .home-entrance {
    margin-top: 45px;
     display: flex;
     flex-direction: column;
     align-items: center;
      &-invite {
        width: 630px;
        height: 241px;
        &-img {
          width: 630px;
          height: 241px;
        }
      }
      &-renew {
        width: 630px;
        height: 241px;
        &-img {
          width: 630px;
          height: 241px;
        }
      }
    }
  }
}
</style>