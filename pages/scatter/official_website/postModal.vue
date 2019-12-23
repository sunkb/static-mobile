<template>
  <div class="abstract" v-show="abstractShow">
    <div class="abstract-background" @click="cancelShow"></div>
    <div class="abstract-div" @click="cancelShow">
      <img
        class="abstract-div-img"
        src="https://qn-static.landi.com/uploadtool172eabbc796633601b9939f1aa16499f.png"
      />
    </div>
  </div>
</template>
<script>
export default {
  name: 'postModal',
  props: {
    abstractShow: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
    }
  },
  created () { },
  mounted () {
  },
  methods: {
    cancelShow () {
        this.$emit('fcancelShow')
    }
  }
}
</script>
<style lang="scss" scoped>
.abstract {
  overflow: auto;
  -webkit-overflow-scrolling: auto;
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  &-background {
    width: 100vw;
    height: 100vh;
    background: black;
    opacity: 0.4;
    position: fixed;
    top: 0;
    z-index: 100;
  }
  &-div {
    width: 540px;
    height: 628px;
    position: fixed;
    top: 250px;
    left: 50%;
    z-index: 1000;
    margin-left: -270px;
    &-img {
      width: 540px;
      height: 628px;
    }
  }
}
</style>