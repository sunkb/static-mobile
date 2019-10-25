<template>
  <div id="rank">
    <div class="headbar" ref="headbar">
      <div class="headbar-content">
        <div class="headbar-content-title">点赞排行榜</div>
        <div class="headbar-content-text">在比赛中，小朋友们的精彩表现，让我们为选手们送上祝福的掌声，期待他们在未来取得更多成就</div>
      </div>
    </div>
    <div class="level" :style="{ position: innerScroll ? 'fixed' : 'static' }">
      <div v-for="(item, index) in landiLevels" :key="item.id" @click="listUpdate(index)" class="level-item">
        <div :class="['level-item-content', landiLevelIndex == index ? 'accent' : '' ]" >{{ item.name }}</div>
        <div v-if="landiLevelIndex == index" class="level-item-selector"></div>
      </div>
    </div>
    <van-list class="rank" :finished="finished" v-model="loading" @load="onLoad" finished-text="没有更多了">
      <div class="rank-self" v-if="selfRankData ? true : false" @click="checkProduction">
        <div class="rank-item">
          <div class="rank-item-left">
            <div class="rank-item-rank"></div>
            <div class="rank-item-avatar">
              <img class="rank-item-avatar-img" :src="selfRankData.avatar"/>
            </div>
            <div class="rank-item-name">
              <div>{{ selfRankData.en_name }}</div>
              <div class='rank-self-data'>第{{selfRankData.rank}}名</div>
            </div>
          </div>
          <div class="rank-item-like">
            <div class="rank-item-like-num">{{ selfRankData.zan }}</div>
            <div class="rank-item-like-text">点赞数</div>
          </div>
        </div>
        <div class="rank-division"></div>
      </div>
      <div v-for="(item, index) in rankList" :key="item.sid" class="rank-item" @click="checkProduction">
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
          <div class="rank-item-name">{{ item.en_name }}</div>
        </div>
        <div class="rank-item-like">
          <div class="rank-item-like-num">{{ item.zan }}</div>
          <div class="rank-item-like-text">点赞数</div>
        </div>
      </div>
    </van-list>
    <toast ref="toast"></toast>
  </div>
</template>

<script>
import { API } from '~/pages/presentation/consts'
import axios from '~/utils/axios'
import Toast from '~/components/Toast'
q
import PrtMixin from '~/pages/presentation/mixin'
import { List } from 'vant';

export default {
  name: 'Rank',
  mixins: [PrtMixin],
  head() {
    return {
      title: '点赞排行榜'
    }
  },
  components: {
    'toast': Toast,
    'van-list': List
  },
  data() {
    return {
      landiLevels: [],
      landiLevelIndex: 0,
      rankList: [],
      innerScroll: false,
      headbarBottom: 0,
      selfRankData: {}, // 用户自身在当前的级别的排名数据
      pageIndex: 1,
      finished: false,
      loading: false,
      hasNext: true, // 当前排行榜是否还有数据
      list: []
    }
  },
  methods: {
    listUpdate(levelIndex) {
      this.pageIndex = 1;
      this.landiLevelIndex = levelIndex
      // this.rankList = this.landiLevels[levelIndex].students
      this.getListData(levelIndex)
      this.loading = false
      this.finished = false
    },
    handleScroll() {
      if (window.scrollY >= this.headbarBottom) {
        this.innerScroll = true
      } else {
        this.innerScroll = false
      }
    },
    // 获取点赞排行榜的对应级别的排行数据
    async getListData(levelIndex) {
      const activityID = this.$route.query.activity_id
      try {
        const getUrl = `${API.NEW_RANK}?activity_id=${activityID}&combination_id=${levelIndex}&page=${this.pageIndex}`
        const rankData1 = await axios.get(getUrl)
        // -------- todo -----------
        let rankData = {
          status: true,
          info: 'SUCCESS',
          data: {
            my_work: {
              avatar: "https://qn-global.abc360.com/ketasl1571544762000?imageView2/0/w/240/h/180",
              en_name: "Alisa",
              sid: "1683801",
              zan: "5943",
              rank: 1
            },
            list: [
              {
                avatar: "https://qn-global.abc360.com/ketasl1571544762000?imageView2/0/w/240/h/180",
                en_name: "Alisa",
                sid: "1683801",
                zan: "5943"
              },
              {
                avatar: "https://qn-global.abc360.com/mfxou41547548497000?imageView2/0/w/240/h/180",
                en_name: "Joy",
                sid: "1716624",
                zan: "4260"
              },
              {
                avatar: "https://qn-global.abc360.com/mfxou41547548497000?imageView2/0/w/240/h/180",
                en_name: "Joy",
                sid: "1716625",
                zan: "4260"
              },
              {
                avatar: "https://qn-global.abc360.com/mfxou41547548497000?imageView2/0/w/240/h/180",
                en_name: "Joy",
                sid: "1716626",
                zan: "4260"
              },
              {
                avatar: "https://qn-global.abc360.com/mfxou41547548497000?imageView2/0/w/240/h/180",
                en_name: "Joy",
                sid: "1716627",
                zan: "4260"
              },
              {
                avatar: "https://qn-global.abc360.com/mfxou41547548497000?imageView2/0/w/240/h/180",
                en_name: "Joy",
                sid: "1716628",
                zan: "4260"
              },
              {
                avatar: "https://qn-global.abc360.com/mfxou41547548497000?imageView2/0/w/240/h/180",
                en_name: "Joy",
                sid: "1716629",
                zan: "4260"
              },
              {
                avatar: "https://qn-global.abc360.com/mfxou41547548497000?imageView2/0/w/240/h/180",
                en_name: "Joy",
                sid: "1716630",
                zan: "4260"
              },
              {
                avatar: "https://qn-global.abc360.com/mfxou41547548497000?imageView2/0/w/240/h/180",
                en_name: "Joy",
                sid: "1716631",
                zan: "4260"
              },
              {
                avatar: "https://qn-global.abc360.com/mfxou41547548497000?imageView2/0/w/240/h/180",
                en_name: "Joy",
                sid: "1716632",
                zan: "4260"
              },
              {
                avatar: "https://qn-global.abc360.com/mfxou41547548497000?imageView2/0/w/240/h/180",
                en_name: "Joy",
                sid: "1716633",
                zan: "4260"
              }
            ]
          }
        }
        // -------- todo -----------
        if (!rankData.status) {
          this.$refs['toast'].hideLoadingToast()
          this.$refs['toast'].showToast(rankData.info)
          return
        }
        this.rankList = rankData.data.list
        this.selfRankData = rankData.data.my_work ? rankData.data.my_work : '';
        this.hasNext = rankData.data.has_next
      } catch (err) {
        console.log(err)
      }
    },
    // 获取排行版页面信息
    async getRankConfig() {
      const activityID = this.$route.query.activity_id
      try {
        const getUrl = `${API.GET_RANK_CONFIG}?activity_id=${activityID}`
        const rankConfig = await axios.get(getUrl)
        if(rankConfig.status) {
          document.title = rankConfig.data.activity_name
          this.landiLevels = rankConfig.data.combinations
        } else {
          console.log(rankConfig.info)
        }
      } catch(err) {
        console.log(err)
      }
    },
    // 下拉加载数据
    onLoad () {
      this.pageIndex++
      this.getListData(0)
      this.loading = false
      this.hasNext ? this.finished = true : this.finished = false
    },
    // 查看排行榜中用户的作品
    checkProduction () {
      window.location = `${process.env.BASE_URL}/presentation/signup/step5/?activity_id=${this.$route.query.activity_id}`
    }
  },
  async mounted() {
    this.headbarBottom = this.$refs.headbar.getBoundingClientRect().bottom
    window.addEventListener('scroll', this.handleScroll)

    this.$refs['toast'].showLoadingToast()
    this.getRankConfig()
    this.getListData(0)
    this.$refs['toast'].hideLoadingToast()
  }
}
</script>

<style lang="scss" scoped>
@import '~/assets/presentation/css/main.scss';

$headbar-height: 350.25px;
$level-height: 90px;

#rank {
  background: #fff;
  width: 100vw;
  height: 100%;
}

.headbar {
  height: $headbar-height;
  width: 100vw;
  background: 
    url('~assets/presentation/img/rank-head-bg1.png') 61vw 4vw / 38vw no-repeat,
    url('~assets/presentation/img/rank-head-bg.png') 0 0 / cover;
  background-color: #3b7ada;
  color: #fff;
  position: relative;

  &-content {
    position: absolute;
    top: 50%;
    left: 30px;
    transform: translate(0, -50%);

    &-title {
      font-size: 40px;
      font-weight: bold;
      margin-bottom: 15px;
      font-family: MicrosoftYaHei-Bold;
    }
    &-text {
      width: 430px;
      font-family: MicrosoftYaHei;
      font-size: 26px;
      color: #FFFFFF;
      letter-spacing: 0;
      line-height: 41px;
    }
  }
}

.level {
  height: $level-height;
  width: 100vw;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: #3781D6;
  top: 0;
  z-index: 999;

  &-item {
    position: relative;
    width: 200px;
    text-align: center;

    &-content {
      color: #fff;
      font-size: 30px;
      line-height: 90px;
      max-lines: 1;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
    }

    .accent {
      font-weight: bold;
    }

    &-selector {
      position: absolute;
      left: 50%;
      bottom: 0;
      transform: translateX(-50%);
      width: 0;
      height: 0;
      width: 30px;
      height: 14px;
      background: url('~assets/presentation/img/triangle1.png') 50% 50% / cover;
    }
  }
}

.rank {
  // height: calc(100vh - #{$level-height} - #{$headbar-height});
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;
  padding: 0;

  &::-webkit-scrollbar {
    display: none;
  }

  &-item {
    display: flex;
    justify-content: space-between;
    box-sizing: content-box;
    border-bottom: 1px solid #EBEBEB;
    background: #fff;
    padding: 18.75px 0;
    margin: 0 30px;
    &-left {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 562.5px;
    }
    &-rank {
      width: 60px;
      text-align: center;
      font-size: 27px;
      color: #B2B2B2;
      display: flex;
      align-items: center;
      justify-content: center;

      img {
        width: 60px;
        height: 60px;
      }
    }
    &-avatar {
      width: 97.5px;
      height: 97.5px;
      border-radius: 50%;
      overflow: hidden;

      &-img {
        width: inherit;
        height: inherit;
        object-fit: cover;
      }
    }
    &-name {
      width: 337.5px;
      padding-left: 15px;
      text-align: left;
      font-size: 32px;
      color: #333333;
      font-family: MicrosoftYaHei;
    }
    &-like {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      &-num {
        color: #F0552D;
        font-size: 31.5px;
      }
      &-text {
        color: #B2B2B2;
        font-size: 22px;
      }
    }
  }
  &-self {
    .rank-division {
      width: 100%;
      height: 24px;
      background: #E6E6E6;
    }
    .rank-self-data {
      font-size: 22px;
      color: #B2B2B2;
      letter-spacing: 0;
      text-align: justify;
    }
  }
}
</style>