<template>
  <div>
    
  </div>
</template>

<script>
import {Login} from '~/utils/core/login'

export default {
  name: 'Presentation',
  head() {
    return {
      title: "2019 兰迪英语才艺展示 第一届"
    }
  },
  components: {
  },
  data() {
    return {
    }
  },
  methods: {

  },
  created() {
    const login = new Login();
    login.autoLogin();
  }
}
</script>

<style lang='scss' scoped>

</style>