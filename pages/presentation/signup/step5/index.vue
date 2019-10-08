<template>
  <div>
    <div class="top-step-bar">
      <step-bar :steps="steps" :progress="100"></step-bar>
    </div>
    <div class="page-content" v-if="mywork">
      <div class="title">
        <h1>我的作品</h1>
        <div class="title-action" @click="gotoStep3" v-if="canReUpload">
          <h3>重新上传</h3>
          <img class="title-action-img" :src="require('~/assets/presentation/img/arrow-right.png')"/>
        </div>
      </div>
      <h2>报名学生: {{ mywork.en_name }}</h2>
      <div class="topic-text">
        <h2 class="topic-text-eng">{{ mywork.topic.en_topic_name }}</h2>
        <h3 class="topic-text-chn">{{ mywoek.topic.cn_topic_name }}</h3>
      </div>
      <div class="video">
        <video controls class="video-content">
          <source :src="mywork.video_url"/>
        </video>
      </div>
    </div>
    <div class="action">
      <div class="action-btn action-left" @click="gotoIndex">去首页看看</div>
      <div class="action-btn action-right" @click="shareToFrends">分享给好友</div>
    </div>
    <toast ref="toast"></toast>
    <div class="sharehelp" v-if="showShareHelp" @click="() => { showShareHelp = false }">
      <img class="sharehelp-img" :src="require('~/assets/presentation/img/share-help.png')" />
    </div>
  </div>
</template>

<script>
import { StepBar } from '~/components/presentation'
import Toast from '~/components/Toast'
import { STEPS, STROGE, TOPICS } from '~/pages/presentation/consts'
import axios from '~/utils/axios'

export default {
  name: 'Signup',
  head() {
    return {
      title: '我的作品'
    }
  },
  components: {
    'step-bar': StepBar,
    'toast': Toast
  },
  data() {
    return {
      steps: STEPS,
      stuEngName: '',
      canReUpload: true,
      showShareHelp: false,
      mywork: null
    }
  },
  methods: {
    gotoStep3() {
      this.$router.push({ name: 'presentation-signup-step3' })
    },
    gotoIndex() {
      this.$router.push({ name: 'presentation' })
    },
    shareToFrends() {
      this.showShareHelp = true
    }
  },
  async mounted() {
    // TODO: 修改分享链接

    const mywork = await axios.get('/Mobile/StudentActivity/myWork?activity_id=1')
    if (mywork.status) {
      if (!mywork.data.id) {
        this.$refs['toast'].showToast('无作品资料')
        return
      }

      const workID = mywork.data.id
      const combinationID = mywork.data.combination_id
      const topicID = mywork.data.topic_id
      this.mywork.video_url = mywork.data.video_url

      const data0 = await axios.get('/Mobile/StudentActivityDetail/detail?activity_id=1')
      if (!data0.status) {
        this.$refs['toast'].showToast('获取活动信息失败')
        return
      } 
      this.canReUpload = new Date() < new Date(Number(`${data0.data.reupload_time}000`))
      this.mywork.topic = data0.combinations[combinationID].topics[topicID]

      const data1 = await axios.get(`/Mobile/StudentActivityDetail/work?activity_id=1&url=${window.location.href}&work_id=${workID}`)
      if (!data1.status) {
        this.$refs['toast'].showToast('获取作品信息失败')
        return
      } 
      this.mywork.en_name = data1.data.en_name
    } else {
      this.$refs['toast'].showToast(mywork.info)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~/assets/presentation/css/main.scss';

.topic-text {
  margin-top: -7.5px;
  width: 675px;
  
  &-eng {
    font-weight: bold;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  &-chn {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
}

.video {
  margin-top: 22.5px;
  display: flex;
  justify-content: center;

  &-content {
    width: 638px;
  }
}

.title {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-right: 22.5px;

  &-action {
    h3 {
      color: $p-color-0;
      display: inline-block;
    }

    &-img {
      width: 10px;
    }
  }
}

.action {
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  position: fixed;
  left: 0;
  bottom: 37.5px;

  &-btn {
    width: 320px;
    line-height: 100px;
    font-size: 34px;
    font-family: MicrosoftYaHeiLight;
    color: #fff;
    text-align: center;
  }

  &-left {
    background: #16C8D2;
  }

  &-right {
    background: #FFD750;
  }
}

.sharehelp {
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  background: rgba($color: #000000, $alpha: 0.6);

  &-img {
    width: 540px;
    position: fixed;
    left: 135px;
    top: 0;
  }
}
</style>