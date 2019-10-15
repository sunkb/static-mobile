var PrtMixin = {
  methods: {
    gotoPage(name) {
      const _query = this.$route.query
      delete _query.code
      delete _query.state
      delete _query.work_id
      this.$router.replace({ name, query: _query })
    },
    gotoPageWithHistory(name) {
      const _query = this.$route.query
      delete _query.code
      delete _query.state
      delete _query.work_id
      this.$router.push({ name, query: _query })
    }
  }
}

export default PrtMixin