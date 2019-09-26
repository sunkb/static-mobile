<template>
  <div>
    <div class="top-step-bar">
      <step-bar :steps="steps" :progress="100"></step-bar>
    </div>
    <div class="page-content">
      <h1>我的作品</h1>
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
      title: '我的作品'
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