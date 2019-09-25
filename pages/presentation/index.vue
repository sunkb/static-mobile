<template>
  <div>
    <div>{{ uploadPercent }}</div>
    <input type="file" accept="video/*" ref="fileUpload" @change="fileUploadChange"/>
    <video-player :options="{ controls: true, aspectRatio: '16:9',
      sources: [{ src: 'http://qn-video.abc360.com/40bc5e48-ca2d-48c8-9ff8-7a80e8a7ecdf.mp4', type: 'video/mp4' }]
    }" ></video-player>
  </div>
</template>

<script>
import FileUploader, { FILE_TYPE } from '~/utils/upload.js'
import { Player } from '~/components/presentation'

export default {
  name: 'Presentation',
  head() {
    return {
      title: "演讲比赛"
    }
  },
  components: {
    'video-player': Player
  },
  data() {
    return {
      uploadPercent: 0,
      uploadDomain: ''
    }
  },
  methods: {
    async fileUploadChange() {
      const fileUploader = new FileUploader()
      await fileUploader.init()
      this.uploadDomain = fileUploader.domain
      const uploadReturn = fileUploader.upload(this.$refs['fileUpload'].files[0], FILE_TYPE.VIDEO,
        this.fileUploadNext, this.fileUploadError, this.fileUploadComplete
      )
    },
    fileUploadNext(res) {
      this.uploadPercent = Math.round(res.total.percent * 100) / 100
    },
    fileUploadError(res) {
      console.log(res)
    },
    fileUploadComplete(res) {
      console.log(res)
      console.log(this.uploadDomain + '/' + res.key)
    }
  }
}
</script>

<style lang='scss' scoped>

</style>