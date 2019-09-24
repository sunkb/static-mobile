<template>
  <div>
    <div>{{ uploadPercent }}</div>
    <input type="file" accept="video/*" ref="fileUpload" @change="fileUploadChange"/>
  </div>
</template>

<script>
import FileUploader, { FILE_TYPE } from '~/utils/upload.js'

export default {
  name: 'Presentation',
  head() {
    return {
      title: "演讲比赛"
    }
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