<template>
  <div id="step4">
    <div class="top-step-bar">
      <step-bar :steps="steps" :progress="70"></step-bar>
    </div>
    <div class="page-content">
      <div class="signup-title">确认提交</div>
      <div class="video">
        <div v-if="videoSrc && videoSrc != ''" class="video-content" @click="playFn('video-upload')">
          <video
            style="display: none;"
            id="video-upload"
            controls
            preload="auto"
            :src="videoSrc"
          />
          <img class="video-content-img" :src="`${videoSrc}?vframe/jpg/offset/2/h/960/`"/>
          <div class="video-content-play"></div>
        </div>
      </div>
      <div class="rule">
        <div :class="['rule-select', ruleSelected ? 'selected' : '']" @click="selectRule">
          <img v-if="ruleSelected" class="rule-select-img" :src="require('~/assets/presentation/img/rule-select.png')"/>
        </div>
        <div @click="gotoRulePage" class="rule-text">我已阅读并同意《视频授权用户协议书》</div>
      </div>
    </div>
    <submit-area 
      hint="确认提交之后，2019.11.15 23:59 前可重新上传,届时原作品将自动覆盖、点赞保留，详见活动规则" 
      btnText="确认提交"
      :isClickable="ruleSelected"
      @submit="submit"
    ></submit-area>
    <toast ref="toast"></toast>
    <poster-modal v-model="showPosterModal" @click="gotoStep5" :poster="1" @changeShow="gotoStep5"></poster-modal>
  </div>
</template>

<script>
import { StepBar, SubmitArea, PosterModal } from '~/components/presentation'
import { STEPS, STROGE, API } from '~/pages/presentation/consts'
import axios from '~/utils/axios'
import Toast from '~/components/Toast'
import PrtMixin from '~/pages/presentation/mixin'
import { videoPlayerEvent } from '~/utils/videoPlay'
import '~/pages/presentation/presentation'

export default {
  name: 'Signup',
  mixins: [PrtMixin],
  head() {
    return {
      title: '确认提交'
    }
  },
  components: {
    'step-bar': StepBar,
    'submit-area': SubmitArea,
    'poster-modal': PosterModal,
    'toast': Toast
  },
  data() {
    return {
      steps: STEPS,
      videoSrc: '',
      ruleSelected: true,
      showPosterModal: false,
      formData: null
    }
  },
  methods: {
    selectRule() {
      this.ruleSelected = !this.ruleSelected
    },
    async submit() {
      if (this.ruleSelected) {
        const data = {
          activity_id: this.$route.query.activity_id,
          combination_id: this.formData.landiLevel.id,
          topic_id: this.formData.topicID,
          video_url: this.formData.videoKey,
          address: this.formData.address
        }
        if (this.formData.workID) {
          data.id = this.formData.workID
        } else {
          data.cn_name = this.formData.cn_name
          data.nickname = this.formData.en_name
        }
        const res = await axios.post(API.SUBMIT_WORK, data)
        if (res.status) {
          this.showPosterModal = true
        } else {
          this.$refs['toast'].showToast(res.info)
        }
      }
    },
    gotoStep5() {
      window.location = `${process.env.BASE_URL}/presentation/signup/step5/?activity_id=${this.$route.query.activity_id}`
      // this.gotoPage('presentation-signup-step5')
    },
    gotoRulePage() {
      this.gotoPageWithHistory('presentation-protocol')
    },
    playFn(name){
      let video1 = document.getElementById(name)
      videoPlayerEvent(video1)
    },
  },
  async mounted() {
    this.$refs['toast'].showLoadingToast()
    const formData = JSON.parse(localStorage.getItem(STROGE.FORM_DATA))
    this.videoSrc = formData.videoSrc

    const activityID = this.$route.query.activity_id
    const data0 = await axios.get(`${API.MY_WORK}?activity_id=${activityID}`)
    if (!data0.status) {
      this.$refs['toast'].showToast(data0.info)
    } else {
      if (data0.data.id) {
        formData.workID = data0.data.id
      }
    }
    
    this.formData = formData
    this.$refs['toast'].hideLoadingToast()
  }
}
</script>

<style lang="scss" scoped>
@import '~/assets/presentation/css/main.scss';

#step4 {
  width: 100vw;
  height: 100vh;
  background: #fff;
}

.video {
  margin-top: 22.5px;
  display: flex;
  justify-content: center;
  align-items: center;

  &-content {
    width: 637.5px;
    height: 360px;
    overflow: hidden;
    position: relative;
    background: #E6E6E6;
    display: flex;
    justify-content: center;
    align-items: center;

    &-play {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 76px;
      height: 76px;
      background: url('~assets/presentation/img/playbtn.png') 50% 50% / contain no-repeat;
    }

    &-img {
      height: 360px;
    }
  }
}

.rule {
  display: flex;
  align-items: center;
  margin: 35px 22px;

  &-select {
    margin-right: 10px;
    width: 40px;
    height: 40px;
    border: 1px solid #E6E6E6;

    &-img {
      width: inherit;
      height: inherit;
    }
  }

  .selected {
    border: none;
  }

  &-text {
    font-size: 24px;
    color: #B2B2B2;
  }
}
</style>