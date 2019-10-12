var PrtMixin = {
  methods: {
    gotoPage(name) {
      const _query = this.$route.query
      delete _query.code
      delete _query.state
      delete _query.work_id
      this.$router.push({ name, query: _query })
    },
    playFn(name){
      let video1 = document.getElementById(name)
      videoPlayerEvent(video1)
    },
  }
}

export default PrtMixin