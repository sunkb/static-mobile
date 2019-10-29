<template>
  <div>
    <div class="wrapper" v-if="show">
      <div class="content">
        <div class="content-close">
          <img class="content-close-img" @click="close" :src="require('~/assets/presentation/img/close.png')"/>
        </div>
        <img class="content-poster" v-if="poster == 0" @click="gotoLink" :src="require('~/assets/presentation/img/poster-signup-index.png')"/>
        <img class="content-poster" v-if="poster == 1" @click="gotoLink" :src="require('~/assets/presentation/img/submit-success.png')"/>
        <div class="content-poster content-register" v-if="poster == 2">
          <img class="content-poster" v-if="poster == 2" :src="require('~/assets/presentation/img/login_register.png')"/>
          <div class="register-button" @click="gotoLoginRegister('login')">
            <img class="register-button-img" :src="require('~/assets/presentation/img/register_button.png')"/>
          </div>
          <div class="login-button" @click="gotoLoginRegister('register')">
            <img class="login-button-img" :src="require('~/assets/presentation/img/login_button.png')">
          </div>
        </div>
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
    },
    gotoLoginRegister(mode) {
      this.$emit('click', mode)
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
  z-index: 999;
}

.content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: inherit;
  height: inherit;

  &-poster {
    width: 560px;
  }

  &-register {
    position: relative;
    .register-button {
      position: absolute;
      bottom: 90px;
      left: 55px;
      width: 450px;
      &-img {
        width: 450px;
      }
    }
    .login-button {
      position: absolute;
      bottom: 50px;
      left: 140px;
      &-img {
        width: 280px;
      }
    }
  }

  &-close {
    width: 60%;
    text-align: right;
    margin-bottom: -8px;
    &-img {
      width: 50px;
    }
  }
}

</style>