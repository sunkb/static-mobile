var PrtMixin = {
  methods: {
    gotoPage(name) {
      const _query = this.$route.query
      delete _query.code
      this.$router.push({ name, query: _query })
    }
  }
}

export default PrtMixin