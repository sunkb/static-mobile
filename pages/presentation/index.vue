<template>
  <div id="presentation">
    <!-- <img class="bg" /> -->
    <div class="topaction">
      <div class="topaction-rank">点赞排行</div>
      <div class="topaction-rule">活动规则</div>
    </div>
    <div class="content">
      <h1 style="color: #B2B2B2;">参赛作品样板</h1>
      <div class="content-topics"></div>
      <h3>以下2个演讲主题，任意选择其中之一报名即可</h3>
      <div class="action">
        <div class="action-content" :style="{ background: themeColor }">
          <div class="action-content-text">提交报名信息</div>
          <div class="action-content-deco0"></div>
          <div class="action-content-deco1"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Presentation',
  head() {
    return {
      title: "2019 兰迪英语才艺展示 第一届"
    }
  },
  components: {
  },
  data() {
    return {
      themeColor: '#F0552D'
    }
  },
  methods: {

  },
  mounted() {
    this.themeColor = '#F0552D'
  }
}
</script>

<style lang='scss' scoped>
@import '~/assets/presentation/css/main.scss';

.bg {
  width: 100vw;
  position: fixed;
  top: 0;
  left: 0;
}

.topaction {
  margin-top: 8vw;
  width: 100vw;
  display: flex;
  justify-content: space-between;
  color: #B2B2B2;
  font-size: 3.46vw;

  &-rank {
    border-top-right-radius: 4vw;
    border-bottom-right-radius: 4vw;
    box-shadow: 0 0 4vw -3vw #666666;
    padding: 2vw 3vw;
  }
  &-rule {
    border-top-left-radius: 4vw;
    border-bottom-left-radius: 4vw;
    box-shadow: 0 0 4vw -3vw #666666;
    padding: 2vw 3vw;
  }
}

.content {
  text-align: center;
  width: 92vw;
  padding: 1vw 3vw 4vw;
  box-shadow: 0 0 4vw -3vw #666666;
  margin-top: 36vw;
  position: relative;
  left: 50%;
  transform: translate(-50%, 0);
}

.action {
  margin-top: 3vw;
  display: inline-block;
  width: 86.6vw;
  height: 13.3vw;

  &-content {
    text-align: center;
    width: 100%;
    height: 100%;
    position: relative;
    line-height: 13.3vw;
    border-radius: 7vw;

    &-text {
      font-size: 4.5vw;
      color: #fff;
    }

    &-deco0 {
      position: absolute;
      top: 1.5vw;
      left: 7vw;
      width: 1.6vw;
      height: 1.6vw;
      background: rgba($color: #fff, $alpha: 0.4);
      border-radius: 0.8vw;
    }
    &-deco1 {
      position: absolute;
      top: 1.5vw;
      left: 10vw;
      width: 13.3vw;
      height: 1.6vw;
      background: rgba($color: #fff, $alpha: 0.4);
      border-radius: 0.8vw;
    }
  }
}
</style>