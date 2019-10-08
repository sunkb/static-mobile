
<template>
  <div class="login-container">
    <div :class="['tel']">
      <div class="input-title">手机号码</div>
      <input
        class="login-input"
        maxlength="11"
        placeholder="+86 请输入手机号码"
        type="number"
        v-model="mobile"
      />
    </div>
    <div>
      <div class="input-title">密码</div>
      <input class="login-input" placeholder="请输入密码" type="password" v-model="password" />
    </div>
    <div class="btn-login" @click="loginSubmit">登录</div>
  </div>
</template>

<script>
import axios from "~/utils/axios";

export default {
  data() {
    return {
      mobile: "",
      password: "",
      captchaObj: ""
    };
  },
  methods: {
    loginSubmit() {
      const captchaObj = this.captchaObj;
      captchaObj.verify();
    },
    init() {
      var handler = cObj => {
        this.captchaObj = cObj;
        cObj.onSuccess(() => {
          var result = cObj.getValidate();
          const mobile = this.mobile;
          const password = this.password;
          const data = {
            login_name: mobile,
            password,
            is_ubase: 1,
            geetest_challenge: result.geetest_challenge,
            geetest_validate: result.geetest_validate,
            geetest_seccode: result.geetest_seccode
          };
          console.log("data", data);
          axios.post("/Mobile/Public/pwdLogin", data).then(res => {
            console.log("登录结果", res);
          });
        });
      };

      axios.get("/Web/Public/getGtStr?t=" + new Date().getTime()).then(res => {
        const data = res;
        console.log(data);
        initGeetest(
          {
            gt: data.gt,
            challenge: data.challenge,
            offline: !data.success, // 表示用户后台检测极验服务器是否宕机
            new_captcha: data.new_captcha, // 用于宕机时表示是新验证码的宕机
            product: "bind", // 产品形式，包括：float，popup
            width: "900px"
          },
          handler
        );
      });
    }
  },
  mounted() {
    this.init();
  }
};
</script>

<style lang="scss" scoped>
.login-container {
  background: #ffffff;
  width: 100vw;
  height: 100vh;
  padding: 20px;
  .tel {
    border-bottom: 2px solid #d9d9d9;
    margin-top: 1.01rem;
    position: relative;
    i {
      display: block;
      width: 0.43rem;
      height: 0.43rem;
      background-image: url("~assets/group_buy/img/icon-clear-input.png");
      background-size: cover;
      background-repeat: no-repeat;
      position: absolute;
      right: 0;
      bottom: 0.2rem;
      border-radius: 999px;
    }
  }
  .login-input {
    width: 8.67rem;
    height: 1.23rem;
    border: 0;
    font-size: 0.64rem;
    outline: 0;
    color: #fa4b7e;
    font-weight: bold;
  }
  .login-input::-webkit-input-placeholder {
    color: #999999;
    font-size: 0.37rem;
    font-weight: 100;
  }
  .input-title {
    color: #3f3f3f;
    font-size: 0.48rem;
  }
  .btn-login {
    width: 8.67rem;
    height: 1.07rem;
    background-color: #fa4b7e;
    font-size: 0.48rem;
    color: #fff;
    border-radius: 10px;
    text-align: center;
    line-height: 1.07rem;
    margin-top: 1.47rem;
  }
  .btn-text {
    color: #fa4b7e;
    font-size: 0.37rem;
    margin-top: 0.21rem;
  }
}
</style>