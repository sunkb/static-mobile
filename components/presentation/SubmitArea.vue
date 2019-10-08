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
  bottom: 37.5px;
  left: 0;

  &-text {
    margin: 22.5px 0;
    color: #B2B2B2;
    font-size: 24px;
    padding: 0 45px;
  }

  &-btn {
    display: inline-block;
    width: 650px;
    line-height: 100px;
    text-align: center;
    font-size: 34px;
    color: #fff;
    background: #B2B2B2;
  }

  .accent {
    background: $p-color-0;
  }
}
</style>