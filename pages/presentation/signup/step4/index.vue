<template>
  <div>
    <div class="top-step-bar">
      <step-bar :steps="steps" :progress="70"></step-bar>
    </div>
    <div class="page-content">
      <h1>确认提交</h1>
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
      title: '确认提交'
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