<template>
  <div class="submit">
    <div class="submit-text">{{ hint }}</div>
    <div :class="['submit-btn', isClickable ? 'accent' : '']" @click="submit">{{ btnText }}</div>
  </div>
</template>

<script>
export default {
  name: 'SubmitArea',
  props: {
    hint: {
      type: String,
      default: ''
    },
    btnText: {
      type: String,
      default: ''
    },
    isClickable: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    submit() {
      this.$emit('submit')
    }
  }
}
</script>

<style lang="scss">
@import '~/assets/presentation/css/main.scss';

.submit {
  text-align: center;
  width: 100%;
  position: fixed;
  bottom: 5vw;
  left: 0;

  &-text {
    margin: 3vw 0;
    color: #B2B2B2;
    font-size: 3.2vw;
    padding: 0 6vw;
  }

  &-btn {
    display: inline-block;
    width: 86.67vw;
    line-height: 13.3vw;
    text-align: center;
    font-size: 4.53vw;
    color: #fff;
    background: #B2B2B2;
  }

  .accent {
    background: $p-color-0;
  }
}
</style>