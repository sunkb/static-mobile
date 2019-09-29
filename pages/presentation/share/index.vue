<template>
  <div>

  </div>
</template>

<script>
import axios from '~/utils/axios'
import { API } from '~/pages/presentation/consts'

export default {
  name: 'Share',
  head() {
    return {
      title: '才艺视频'
    }
  },
  data() {
    return {}
  },
  methods: {
    async getStuData() {
      await axios.get(API.STU_SHARE_DATA)
    }
  },
  mounted() {
    
  }
}
</script>

<style lang="scss" scoped>

</style>