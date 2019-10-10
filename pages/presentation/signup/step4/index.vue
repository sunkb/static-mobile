<template>
  <div id="step4">
    <div class="top-step-bar">
      <step-bar :steps="steps" :progress="70"></step-bar>
    </div>
    <div class="page-content">
      <h1>确认提交</h1>
      <div class="video">
        <video controls v-if="videoSrc && videoSrc != ''" class="video-content" x5-video-player-type='h5'>
          <source :src="videoSrc"/>
        </video>
      </div>
      <div class="rule">
        <div class="rule-select" @click="selectRule">
          <img v-if="ruleSelected" class="rule-select-img" :src="require('~/assets/presentation/img/rule-select.png')"/>
        </div>
        <h3 @click="gotoRulePage">我已阅读并同意《视频授权用户协议书》</h3>
      </div>
    </div>
    <submit-area 
      hint="确认提交之后，活动结束前可重新上传,届时原作品将自动覆盖、点赞数清零，详见活动规则" 
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
      ruleSelected: false,
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
      this.gotoPage('presentation-signup-step5')
    },
    gotoRulePage() {
      this.gotoPage('presentation-protocol')
    }
  },
  mounted() {
    const formData = JSON.parse(localStorage.getItem(STROGE.FORM_DATA))
    this.videoSrc = formData.videoSrc

    this.formData = formData
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
    max-height: 420px;
    overflow: hidden;
  }
}

.rule {
  display: flex;
  align-items: center;
  margin: 22.5px 22.5px;

  &-select {
    margin-right: 22.5px;
    width: 40px;
    height: 40px;
    border: 1.5px solid #E6E6E6;

    &-img {
      width: inherit;
      height: inherit;
    }
  }
}
</style>