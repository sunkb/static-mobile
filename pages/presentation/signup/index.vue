<template>
  <div>
    <div class="top-step-bar">
      <step-bar :steps="steps" :progress="10"></step-bar>
    </div>
    <div class="page-content">
      <h1>报名信息</h1>
      <div class="signupform">
        <div class="signupform-item">
          <span class="signupform-item-label required">孩子中文名</span>
          <input class="signupform-item-input" v-model="signupData.chnName" placeholder="请填写中文名" @blur="formBlur"/>
        </div>
        <div class="signupform-item">
          <span class="signupform-item-label required">孩子英文名</span>
          <input class="signupform-item-input" v-model="signupData.engName" placeholder="请填写英文名" @blur="formBlur"/>
        </div>
        <div class="signupform-item">
          <span class="signupform-item-label required">兰迪级别</span>
          <select class="signupform-item-select" v-model="signupData.landiLevel" @blur="formBlur">
            <option value="">请选择级别</option>
            <option v-for="(item, index) in landiLevels" :key="index" :value="item.type">{{item.name}}</option>
          </select>
        </div>
        <div class="signupform-item">
          <span class="signupform-item-label required">家长手机号</span>
          <input class="signupform-item-input" v-model="signupData.phone" placeholder="请填写家长手机号" @blur="formBlur"/>
        </div>
        <!-- <div class="signupform-item">
          <span class="signupform-item-label required">验证码</span>
          <input class="signupform-item-input" v-model="signupData.validateCode" placeholder="请填写短信验证码" @blur="formBlur"/>
          <span @click="validatePhone" :class="['signupform-item-vcode', validateCodeTimeout > 0 ? 'signupform-item-vcode-timeout' : '']">
            {{ validateCodeTimeout > 0 ? `${validateCodeTimeout}s重新发送` : '获取验证码' }}
          </span>
        </div> -->
        <div class="signupform-item">
          <span class="signupform-item-label required">地址</span>
          <!-- TODO: 城市数据应该来自请求数据 -->
          <select class="signupform-item-select" v-model="signupData.province" @change="provinceSelectChange" @blur="formBlur">
            <option value="0">请选择所在省份</option>
            <option v-for="(item) in regionData['province']" :key="item.id" :value="item.id">{{ item.name }}</option>
          </select>
          <select class="signupform-item-select" v-model="signupData.city" @blur="formBlur">
            <option value="0">城市</option>
            <option v-for="(item) in regionData['city'][signupData.province]" :key="item.id" :value="item.id">{{ item.name }}</option>
          </select>
        </div>
      </div>
      <submit-area 
        hint="请确认信息属实, 一旦提交后不可再修改" 
        btnText="提交报名信息"
        :isClickable="dataNotEmpty"
        @submit="formSubmit"
      ></submit-area>
    </div>
    <toast ref="toast"></toast>
    <poster-modal v-model="showPosterModal" @click="gotoRegister" :poster="0"></poster-modal>
  </div>
</template>

<script>
import { StepBar, PosterModal, SubmitArea } from '~/components/presentation'
import { STEPS, API, REGION_DATA, SIGNUP_DATA_RULE, STROGE, LANDI_LEVEL } from '~/pages/presentation/consts'
import axios from '~/utils/axios'
import Toast from '~/components/Toast'

export default {
  name: 'Signup',
  head() {
    return {
      title: '报名信息'
    }
  },
  components: {
    'step-bar': StepBar,
    'toast': Toast,
    'poster-modal': PosterModal,
    'submit-area': SubmitArea
  },
  data() {
    return {
      steps: STEPS,
      signupData: {
        chnName: '',
        engName: '',
        landiLevel: '',
        phone: '',
        // validateCode: '',
        province: '0',
        city: '0'
      },
      validateCodeTimeout: 0,
      dataNotEmpty: false,
      landiLevels: [],
      regionData: REGION_DATA,
      errorMessage: '',
      showPosterModal: false
    }
  },
  methods: {
    validatePhone() {
      // TODO: 验证是否是用户, 然后 sendValidateCode(), 不是就 this.showPosterModal = true
    },
    // sendValidateCode() {
    //   if (this.validateCodeTimeout > 0) { return }

    //   // TODO: 获取验证码

    //   this.validateCodeTimeout = 60
    //   const vinterval = setInterval(() => {
    //     this.validateCodeTimeout--
    //     if (this.validateCodeTimeout <= 0) {
    //       clearInterval(vinterval)
    //     }
    //   }, 1000)
    // },
    provinceSelectChange() {
      this.signupData.city = '0'
    },
    formBlur() {
      for(let item of Object.keys(this.signupData)) {
        if (this.signupData[item] == '' || this.signupData[item] == '0') {
          this.dataNotEmpty = false
          return
        }
      }
      this.dataNotEmpty = true
    },
    formSubmit() {
      if (!this.dataNotEmpty) { return }

      for(let item of Object.keys(this.signupData)) {
        if (!SIGNUP_DATA_RULE[item].rule.test(this.signupData[item])) {
          this.errorMessage = SIGNUP_DATA_RULE[item].message
          this.$refs['toast'].showToast(this.errorMessage)
          return 
        }
      }

      // TODO: 提交数据
      localStorage.setItem(STROGE.LANDI_LEVEL, this.signupData.landiLevel)
      localStorage.setItem(STROGE.STU_ENG_NAME, this.signupData.engName)
      this.$router.push({ name: 'presentation-signup-step2' })
    },
    gotoRegister() {
      // TODO: 注册页面
    }
  },
  mounted() {
    // TODO: 获取 landi_level
    this.landiLevels = LANDI_LEVEL
  }
}
</script>

<style lang="scss" scoped>
@import '~/assets/presentation/css/main.scss';

.signupform {
  &:last-child {
    border-bottom: .2vw solid #E6E6E6;
  }

  &-item {
    border-top: .2vw solid #E6E6E6;
    padding: 3vw 0;
    white-space: nowrap;

    &-label {
      display: inline-block;
      color: #333333;
      font-size: 3.7vw;
      width: 20.4vw;
      margin-right: 4.93vw;
    }
    .required {
      &::after {
        content: '*';
        color: #F0552D;
      }
    }

    &-input {
      font-size: 3.7vw;
      outline: none;
      color: #333333;
      width: 40vw;
      &::placeholder {
        color: #B2B2B2;
      }
    }

    &-select {
      font-size: 3.7vw;
      outline: none;
      color: #333333;
      appearance: none;
    }

    &-vcode {
      display: inline-block;
      background: #F0552D;
      font-size: 3.2vw;
      color: #fff;
      line-height: 9vw;
      width: 22.67vw;
      text-align: center;
    }

    &-vcode-timeout {
      background: #B2B2B2;
    }
  }
}
</style>