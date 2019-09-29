<template>
  <div id="rank">
    <div class="headbar">
      <div class="headbar-content">
        <div class="headbar-content-title">点赞排行榜</div>
        <div class="headbar-content-text">在比赛中，小朋友们的精彩表现，让我们为选手们送上祝福的掌声，期待他们在未来取得更多成就</div>
      </div>
    </div>
    <div class="level">
      <div v-for="(item, index) in landiLevels" :key="index" @click="listUpdate(index)" class="level-item">
        <div class="level-item-content">{{ item.name }}</div>
        <div v-if="landiLevelIndex == index" class="level-item-selector"></div>
      </div>
    </div>
    <div class="rank">
      <!-- TODO: key 修改成唯一的 -->
      <div v-for="(item, index) in rankList" :key="index" class="rank-item">
        <div class="rank-item-left">
          <div class="rank-item-rank">{{ index <= 2 ? index + 1 : `${index}`.padStart(2, '0') }}</div>
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
      rankList: []
    }
  },
  methods: {
    async listUpdate(levelIndex) {
      this.landiLevelIndex = levelIndex
      //TODO: update
    }
  },
  mounted() {
    // TODO: 获取level, 获取ranklist
    this.landiLevels = LANDI_LEVEL
    this.rankList = RANK_LIST
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
  background: $b-color;
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
  background: #A3BECC;

  &-item {
    position: relative;
    width: 17vw;
    text-align: center;

    &-content {
      color: #fff;
      font-size: 4vw;
      line-height: 12vw;
    }

    &-selector {
      position: absolute;
      left: 50%;
      bottom: 0;
      transform: translateX(-50%);
      width: 0;
      height: 0;
      border-left: 1.5vw solid transparent;
      border-right: 1.5vw solid transparent;
      border-bottom: 2vw solid #fff;
    }
  }
}

.rank {
  height: calc(100vh - #{$level-height} - #{$headbar-height});
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
      font-size: 4vw;
      color: #B2B2B2;
    }
    &-avatar {
      width: 13vw;
      height: 13vw;
      border-radius: 50%;

      &-img {
        width: inherit;
      }
    }
    &-name {
      width: 50vw;
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