<template>
  <div>
    <div class="top-step-bar">
      <step-bar :steps="steps" :progress="50"></step-bar>
    </div>
    <div class="page-content">
      <h1>上传视频</h1>
    </div>
  </div>
</template>

<script>
import { StepBar } from '~/components/presentation'
import { STEPS } from '../consts'

export default {
  name: 'Signup',
  head() {
    return {
      title: '上传视频'
    }
  },
  components: {
    'step-bar': StepBar
  },
  data() {
    return {
      steps: STEPS
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~/assets/presentation/css/main.scss';


</style>