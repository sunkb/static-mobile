<template>
  <div class="container">
    <div class="content-item" v-for="(item, index) in videoList" :key="index">
      <p class="video-title">{{item.text}}</p>
      <video controls :poster="item.image_url">
        <source :src="item.video_url" type="video/mp4" />
      </video>
    </div>
  </div>
</template>
<script>
import axios from '~/utils/axios'

export default {
  data () {
    return {
      videoList: []
    }
  },
  async mounted () {
    document.title = '自然拼读'
    try {
      const res = await axios.post('/Mobile/My/getQingKeVideo', {})
      if (!res.status) {
        console.log(res.info)
        return
      }
      this.videoList.push(...res.data)
    } catch (err) {
      console.log(err)
    }
  },
  methods: {}
}
</script>
<style lang="scss" scoped>
.container {
  width: 100vw;
  height: 100vh;
  background: #fff;
  .content-item {
    display: flex;
    flex-direction: column;
    padding: 0.37rem 0.61rem 0 0.59rem;
    video {
      width: 100%;
    }
    .video-title {
      color: #000;
      font-size: 0.37rem;
      margin-top: 0.28rem;
    }
  }
}
</style>