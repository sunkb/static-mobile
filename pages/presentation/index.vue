<template>
  <div id="presentation">
    <div class="topaction">
      <div class="topaction-rank" @click="gotoPage({ name: 'presentation-rank' })">点赞排行</div>
      <div class="topaction-rule" @click="gotoPage({ name: 'presentation-rule' })">活动规则</div>
    </div>
    <div class="content card">
      <h3>报名参赛，分享更多宝贝高光时刻</h3>
      <div class="action">
        <div class="action-content" :style="{ background: themeColor }">
          <div class="action-content-text">我要报名参赛</div>
          <div class="action-content-deco0"></div>
          <div class="action-content-deco1"></div>
        </div>
      </div>
      <div class="divide-title">
        <div class="divide-decohr"></div>
        <h1 style="color: #333333;">参赛作品样板</h1>
        <div class="divide-decohr"></div>
      </div>
      <div class="content-level">
        <div v-for="(item, index) in landiLevel" :key="index" class="content-level-item" @click="selectLevel(index)"
          :style="levelSelectIndex == index ? { background: themeColor, color: '#fff' } : {}">{{ item.name }}</div>
      </div>
      <h3>以下2个演讲主题，任意选择其中之一报名即可</h3>
      <div class="content-video">
        <div class="content-video-item" v-for="(item, index) in topics" :key="index">
          <video controls class="content-video-item-video" :poster="item.video.poster">
            <source :src="item.video.src"/>
          </video>
          <h3 class="content-video-item-eng content-video-item-text">{{ item.text.eng }}</h3>
          <h3 class="content-video-item-chn content-video-item-text">{{ item.text.chn }}</h3>
        </div>
      </div>
    </div>
    <div class="description card">
      <div class="divide-title">
        <div class="divide-decohr"></div>
        <h1 style="color: #333333;">兰迪简介</h1>
        <div class="divide-decohr"></div>
      </div>
      <p>兰迪少儿英语是专注为4-12岁少儿提供优质的英语学习内容与体验的在线外教小班课教育品牌，引进牛津大学出版社原版最新美式英语 Starlight教材，优选“英美加”等英语为母语国家的外教。</p>
      <p>以“同伴学习”为教学理念，营造同伴竞争和同伴合作的场景，激发孩子学习英语的主动性，有效提升孩子的语言、思维及社交能力，让更多孩自如对话世界。</p>
    </div>
    <div class="step card">
      <div class="divide-title">
        <div class="divide-decohr"></div>
        <h1 style="color: #333333;">活动步骤</h1>
        <div class="divide-decohr"></div>
      </div>
      <div v-for="(item, index) in steps" :key="index" class="step-item">
        <div class="step-item-content">{{ item }}</div>
        <div class="step-item-deco"></div>
      </div>
    </div>
  </div>
</template>

<script>
import { LANDI_LEVEL, TOPICS, INDEX_STEPS } from '~/pages/presentation/consts'

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
      themeColor: '#F0552D',
      landiLevel: [],
      levelSelectIndex: 0,
      topics: [],
      steps: []
    }
  },
  methods: {
    gotoPage(page) {
      this.$router.push(page)
    },
    selectLevel(index) {
      // TODO: 刷新数据
      this.levelSelectIndex = index
    }
  },
  mounted() {
    // TODO: 数据
    this.themeColor = '#F0552D'
    this.landiLevel = LANDI_LEVEL
    this.topics = TOPICS
    this.steps = INDEX_STEPS
  }
}
</script>

<style lang='scss' scoped>
@import '~/assets/presentation/css/main.scss';

#presentation {
  background: #EBEBEB;
  padding: 8vw 0 5vw;

  &::-webkit-scrollbar {
    display: none;
  }
}

.card {
  width: 92vw;
  padding: 3vw 4vw;
  box-shadow: 0 0 4vw -3vw #666666;
  position: relative;
  left: 50%;
  transform: translate(-50%, 0);
  background: #fff;
}

.topaction {
  width: 100vw;
  display: flex;
  justify-content: space-between;
  color: #333333;
  font-size: 3.46vw;

  &-rank {
    border-top-right-radius: 4vw;
    border-bottom-right-radius: 4vw;
    box-shadow: 0 0 4vw -3vw #666666;
    padding: 2vw 3vw;
    background: #fff;
  }
  &-rule {
    border-top-left-radius: 4vw;
    border-bottom-left-radius: 4vw;
    box-shadow: 0 0 4vw -3vw #666666;
    padding: 2vw 3vw;
    background: #fff;
  }
}

.content {
  margin-top: 36vw;
  text-align: center;

  &-level {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    margin-bottom: 3vw;

    &-item {
      width: 20vw;
      line-height: 8vw;
      border: .2vw solid #E6E6E6;
      border-radius: 4vw;
      color: #333333;
    }
  }

  $topic-item-width: 64vw;
  &-video {
    display: flex;
    white-space: nowrap;
    overflow-x: scroll;
    margin-top: 3vw;
    text-align: left;
    &::-webkit-scrollbar {
      display: none;
    }

    &-item {
      display: inline-block;
      margin-right: 5vw;
      box-sizing: content-box;
      position: relative;

      &-video {
        width: $topic-item-width;
      }

      &-eng {
        color: #333333;
      }

      &-text {
        white-space: normal;
        width: $topic-item-width;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;  
        overflow: hidden;
      }
    }
  }
}

.action {
  margin: 3vw 0;
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

.divide {
  &-title {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;

    h1 {
      margin: 0 5vw;
    }
  }
  &-decohr {
    width: 16vw;
    border-bottom: .2vw solid #EBEBEB;
  }
}

.description {
  margin-top: 5vw;
  padding-bottom: 5vw;
}

.step {
  margin-top: 5vw;
  text-align: center;

  &-item {
    width: 66.7vw;
    display: inline-block;
    color: #333333;
    margin-bottom: 3vw;

    &-content { 
      width: 100%;
      line-height: 9.3vw;
      font-size: 3.7vw;
      border: .1vw solid #C0C7CC;
      border-radius: 5vw;
      background: #FAFAFA;
      margin-bottom: 3vw;
    }
    &-deco {
      border-left: 2vw solid transparent;
      border-right: 2vw solid transparent;
      border-top: 2vw solid #333333;
      width: 4vw;
      position: relative;
      left: 50%;
      transform: translateX(-50%)
    }
  }
}
</style>