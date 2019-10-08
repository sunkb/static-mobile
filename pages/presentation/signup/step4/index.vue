<template>
  <div>
    <div class="top-step-bar">
      <step-bar :steps="steps" :progress="70"></step-bar>
    </div>
    <div class="page-content">
      <h1>确认提交</h1>
      <div class="video">
        <video controls v-if="videoSrc && videoSrc != ''" class="video-content">
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
      hint="确认提交之后，72小时内可以按照步骤重新上传，重新上传后原作品将自动覆盖，详见活动规则" 
      btnText="确认提交"
      :isClickable="ruleSelected"
      @submit="submit"
    ></submit-area>
    <poster-modal v-model="showPosterModal" @click="gotoStep5" :poster="1" @changeShow="gotoStep5"></poster-modal>
  </div>
</template>

<script>
import { StepBar, SubmitArea, PosterModal } from '~/components/presentation'
import { STEPS, STROGE } from '~/pages/presentation/consts'

export default {
  name: 'Signup',
  head() {
    return {
      title: '确认提交'
    }
  },
  components: {
    'step-bar': StepBar,
    'submit-area': SubmitArea,
    'poster-modal': PosterModal
  },
  data() {
    return {
      steps: STEPS,
      videoSrc: '',
      ruleSelected: false,
      showPosterModal: false
    }
  },
  methods: {
    selectRule() {
      this.ruleSelected = !this.ruleSelected
    },
    submit() {
      if (this.ruleSelected) {
        // TODO: 提交信息
        this.showPosterModal = true
      }
    },
    gotoStep5() {
      this.$router.push({ name: 'presentation-signup-step5' })
    },
    gotoRulePage() {
      this.$router.push({ name: "presentation-protocol" })
    }
  },
  mounted() {
    this.videoSrc = localStorage.getItem(STROGE.VIDEO_SRC) || ''
  }
}
</script>

<style lang="scss" scoped>
@import '~/assets/presentation/css/main.scss';

.video {
  margin-top: 22.5px;
  display: flex;
  justify-content: center;

  &-content {
    width: 637.5px;
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