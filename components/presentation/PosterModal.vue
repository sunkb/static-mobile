<template>
  <div>
    <div class="wrapper" v-if="show">
      <div class="content">
        <div class="content-close">
          <img class="content-close-img" @click="close" :src="require('~/assets/presentation/img/close.png')"/>
        </div>
        <img class="content-poster" v-if="poster == 0" @click="gotoLink" :src="require('~/assets/presentation/img/poster-signup-index.png')"/>
        <img class="content-poster" v-if="poster == 1" @click="gotoLink" :src="require('~/assets/presentation/img/submit-success.png')"/>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'PosterModal',
  model: {
    prop: 'show',
    event: 'changeShow'
  },
  props: {
    show: {
      type: Boolean,
      default: false
    },
    poster: {
      type: Number,
      default: 0
    }
  },
  methods: {
    close() {
      this.$emit('changeShow', false)
    },
    gotoLink() {
      this.$emit('click')
    }
  }
}
</script>

<style lang="scss" scoped>

.wrapper {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba($color: #000000, $alpha: 0.6);
}

.content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: inherit;
  height: inherit;

  &-poster {
    width: 74.6vw;
  }

  &-close {
    width: 60%;
    text-align: right;
    margin-bottom: -1vw;
    &-img {
      width: 6.67vw;
    }
  }
}

</style>