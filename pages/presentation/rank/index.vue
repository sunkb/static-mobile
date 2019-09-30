<template>
  <div id="rank">
    <div class="headbar">
      <div class="headbar-content">
        <div class="headbar-content-title">点赞排行榜</div>
        <div class="headbar-content-text">在比赛中，小朋友们的精彩表现，让我们为选手们送上祝福的掌声，期待他们在未来取得更多成就</div>
      </div>
    </div>
    <div class="level" :style="{ position: innerScroll ? 'fixed' : 'static' }">
      <div v-for="(item, index) in landiLevels" :key="index" @click="listUpdate(index)" class="level-item">
        <div :class="['level-item-content', landiLevelIndex == index ? 'accent' : '' ]" >{{ item.name }}</div>
        <div v-if="landiLevelIndex == index" class="level-item-selector"></div>
      </div>
    </div>
    <div class="rank">
      <!-- TODO: key 修改成唯一的 -->
      <div v-for="(item, index) in rankList" :key="index" class="rank-item">
        <div class="rank-item-left">
          <div class="rank-item-rank">
            <div v-if="index > 2">{{ `${index + 1}`.padStart(2, '0') }}</div>
            <img v-if="index == 0" :src="require('~/assets/presentation/img/rank-1.png')"/>
            <img v-if="index == 1" :src="require('~/assets/presentation/img/rank-2.png')"/>
            <img v-if="index == 2" :src="require('~/assets/presentation/img/rank-3.png')"/>
          </div>
          <div class="rank-item-avatar">
            <img class="rank-item-avatar-img" :src="item.avatar"/>
          </div>
          <div class="rank-item-name">{{ item.name }}</div>
        </div>
        <div class="rank-item-like">
          <div class="rank-item-like-num">{{ item.like }}</div>
          <div class="rank-item-like-text">点赞数</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { LANDI_LEVEL, RANK_LIST } from '~/pages/presentation/consts'

export default {
  name: 'Rank',
  head() {
    return {
      title: '点赞排行榜'
    }
  },
  data() {
    return {
      landiLevels: [],
      landiLevelIndex: 0,
      rankList: [],
      innerScroll: false
    }
  },
  methods: {
    async listUpdate(levelIndex) {
      this.landiLevelIndex = levelIndex
      //TODO: update
    },
    handleScroll() {
      if (window.scrollY >= window.innerWidth * 0.467) {
        this.innerScroll = true
      } else {
        this.innerScroll = false
      }
    }
  },
  mounted() {
    // TODO: 获取level, 获取ranklist
    this.landiLevels = LANDI_LEVEL
    this.rankList = RANK_LIST

    window.addEventListener('scroll', this.handleScroll)
  }
}
</script>

<style lang="scss" scoped>
@import '~/assets/presentation/css/main.scss';

$headbar-height: 46.7vw;
$level-height: 12vw;

.headbar {
  height: $headbar-height;
  width: 100vw;
  background: 
    url('~assets/presentation/img/rank-head-bg1.png') 100% 400% / 35% no-repeat,
    url('~assets/presentation/img/rank-head-bg.png') 0 0 / cover;
  background-color: #3b7ada;
  color: #fff;
  position: relative;

  &-content {
    position: absolute;
    top: 50%;
    left: 4vw;
    transform: translate(0, -50%);

    &-title {
      font-size: 5.3vw;
      font-weight: bold;
      margin-bottom: 2vw;
    }
    &-text {
      width: 57.3vw;
    }
  }
}

.level {
  height: $level-height;
  width: 100vw;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background: #3781D6;
  top: 0;

  &-item {
    position: relative;
    width: 17vw;
    text-align: center;

    &-content {
      color: #fff;
      font-size: 4vw;
      line-height: 12vw;
    }

    .accent {
      font-weight: bold;
    }

    &-selector {
      position: absolute;
      left: 50%;
      bottom: -.2vw;
      transform: translateX(-50%);
      width: 0;
      height: 0;
      border-left: 2vw solid transparent;
      border-right: 2vw solid transparent;
      border-bottom: 2vw solid #fff;
    }
  }
}

.rank {
  // height: calc(100vh - #{$level-height} - #{$headbar-height});
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;
  padding: 0 4vw;

  &::-webkit-scrollbar {
    display: none;
  }

  &-item {
    display: flex;
    justify-content: space-between;
    padding: 2.5vw 0;
    box-sizing: content-box;
    border-bottom: .2vw solid #EBEBEB;

    &-left {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 75vw;
    }
    &-rank {
      width: 8vw;
      text-align: center;
      font-size: 3.6vw;
      color: #B2B2B2;
      display: flex;
      align-items: center;
      justify-content: center;

      img {
        width: 8vw;
        height: 8vw;
      }
    }
    &-avatar {
      width: 13vw;
      height: 13vw;
      border-radius: 50%;
      overflow: hidden;

      &-img {
        width: inherit;
      }
    }
    &-name {
      width: 45vw;
      padding-left: 2vw;
      text-align: left;
      font-size: 4vw;
      color: #333333;
    }
    &-like {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      &-num {
        color: #F0552D;
        font-size: 4.2vw;
      }
      &-text {
        color: #B2B2B2;
        font-size: 2.9vw;
      }
    }
  }
}
</style>