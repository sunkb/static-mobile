<template>
  <div class="container">
    <!-- <div>
      <h1 class="title">
        abc360前端项目
      </h1>
    </div> -->
    <rate v-model="rate" @changeRate="changeRate"></rate>
  </div>
</template>

<script>
// import Rate from '@/components/Rate'

export default {
  components: {
    // 'rate': Rate
  },
  data () {
    return {
      rate: 0
    }
  },
  methods: {
    changeRate (num) {
      console.log(num)
    }
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
