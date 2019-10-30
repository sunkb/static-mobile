<template>
  <div id="signup">
    <div class="top-step-bar">
      <step-bar :steps="steps" :progress="10"></step-bar>
    </div>
    <div class="page-content">
      <div class="signup-title">报名信息</div>
      <div class="page-content-content">
        <div class="signupform">
          <div class="signupform-item">
            <span class="signupform-item-label required">{{fromInputData.label}}</span>
            <input class="signupform-item-input" v-model="signupData.engName"  :placeholder="fromInputData.placeholder" @blur="formBlur"/>
          </div>
          <div class="signupform-item">
            <span class="signupform-item-label required">{{fromSelectData.label}}</span>
            <select class="signupform-item-select" v-model="signupData.landiLevel" @blur="formBlur" @change="formBlur">
              <option value="">{{fromSelectData.placeholder}}</option>
              <option v-for="(item) in fromSelectData.options" :key="item.value" :value="item.value">{{item.text}}</option>
            </select>
          </div>
          <!-- <div class="signupform-item">
            <span class="signupform-item-label required">孩子中文名</span>
            <input class="signupform-item-input" v-model="signupData.chnName" placeholder="请填写中文名" @blur="formBlur"/>
          </div>
          <div class="signupform-item">
            <span class="signupform-item-label required">孩子英文名</span>
            <input class="signupform-item-input" v-model="signupData.engName" placeholder="请填写英文名" @blur="formBlur"/>
          </div>
          <div class="signupform-item">
            <span class="signupform-item-label required">兰迪级别</span>
            <select class="signupform-item-select" v-model="signupData.landiLevel" @blur="formBlur" @change="formBlur">
              <option value="">请选择级别</option>
              <option v-for="(item) in landiLevels" :key="item.id" :value="item.id">{{item.name}}</option>
            </select>
          </div>
          <div class="signupform-item">
            <span class="signupform-item-label required">省份</span>
            <select class="signupform-item-select" v-model="signupData.province" @change="provinceSelectChange" @blur="formBlur" ref="province">
              <option value="0">请选择所在省份</option>
              <option v-for="(item) in regionData['province']" :key="item.id" :value="item.id">{{ item.name }}</option>
            </select>
          </div>
          <div class="signupform-item">
            <span class="signupform-item-label required">城市</span>
            <select class="signupform-item-select" v-model="signupData.city" @blur="formBlur" ref="city" @change="formBlur">
              <option value="0">请选择所在城市</option>
              <option v-for="(item) in regionData['city'][signupData.province]" :key="item.id" :value="item.id">{{ item.name }}</option>
            </select>
          </div> -->
          <!-- <div class="signupform-item">
            <span class="signupform-item-label required">地址</span>
            <select class="signupform-item-select" v-model="signupData.province" @change="provinceSelectChange" @blur="formBlur" ref="province">
              <option value="0">请选择所在省份</option>
              <option v-for="(item) in regionData['province']" :key="item.id" :value="item.id">{{ item.name }}</option>
            </select>
            <select class="signupform-item-select" v-model="signupData.city" @blur="formBlur" ref="city" @change="formBlur">
              <option value="0">城市</option>
              <option v-for="(item) in regionData['city'][signupData.province]" :key="item.id" :value="item.id">{{ item.name }}</option>
            </select>
          </div> -->
        </div>
        <submit-area 
          hint="请确认信息属实, 一旦提交后不可再修改" 
          btnText="提交报名信息"
          :isClickable="dataNotEmpty"
          @submit="formSubmit"
          class="submitarea"
        ></submit-area>
      </div>
    </div>
    <toast ref="toast"></toast>
  </div>
</template>

<script>
import { StepBar, PosterModal, SubmitArea } from '~/components/presentation'
import { STEPS, API, REGION_DATA, SIGNUP_DATA_RULE, STROGE } from '~/pages/presentation/consts'
import axios from '~/utils/axios'
import Toast from '~/components/Toast'
import PrtMixin from '~/pages/presentation/mixin'
import '~/pages/presentation/presentation'

export default {
  name: 'Signup',
  mixins: [PrtMixin],
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
      // signupData: {
      //   chnName: '',
      //   engName: '',
      //   landiLevel: '',
      //   province: '0',
      //   city: '0'
      // },
      validateCodeTimeout: 0,
      dataNotEmpty: false,
      landiLevels: [],
      regionData: REGION_DATA,
      errorMessage: '',
      fromInputData: {}, // 表单数据
      fromSelectData: {}, // 表单数据
      signupData: {
        engName: '',
        landiLevel: ''
      }
    }
  },
  async created() {
    this.getSignInfo()
  },
  methods: {
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

      let _landiLevel = {}
      let _topic = {}
      for (let item of this.landiLevels) {
        if (item.id == this.signupData.landiLevel) {
          _landiLevel = item
        }
      }
      // const _province = this.$refs['province']
      // const _city = this.$refs['city']
      const name = this.fromInputData.name
      const leaveName = this.fromSelectData.name
      localStorage.setItem(STROGE.FORM_DATA, JSON.stringify({
        [name]: _landiLevel,
        // address: `${_province.options[_province.selectedIndex].text}/${_city.options[_city.selectedIndex].text}#${this.signupData.province}/${this.signupData.city}`,
        // en_name: this.signupData.engName,
        [leaveName]: this.signupData.engName
      }))
      this.gotoPage('presentation-signup-step2')
    },
    // 获取报名的配置信息
    async getSignInfo () {
      const activityID = this.$route.query.activity_id
      try {
        const signInfoData = await axios.get(`${API.GET_SIGN_INFO}?activity_id=${activityID}`)
        if(signInfoData.status) {
          this.fromInputData = signInfoData.data[0]
          this.fromSelectData = signInfoData.data[1]
        } else {
          console.log(signInfoData.info)
        }
      } catch(err) {
        console.log(err)
      }
    }
  },
  async mounted() {
    this.$refs['toast'].showLoadingToast()
    const activityID = this.$route.query.activity_id
    const data0 = await axios.get(`${API.ACTIVITY_DETAIL}?activity_id=${activityID}`)
    if (!data0.status) {
      this.$refs['toast'].hideLoadingToast()
      this.$refs['toast'].showToast(data0.info)
      return
    }
    this.landiLevels = data0.data.combinations

    const data1 = await axios.get(`${API.MY_WORK}?activity_id=${activityID}`)
    if (!data1.status) {
      this.$refs['toast'].hideLoadingToast()
      this.$refs['toast'].showToast(data1.info)
      return
    } else {
      this.signupData.engName = data1.data.en_name
      if (data1.data.id) {
        this.signupData.landiLevel = data1.data.combination_id
      }
    }
    this.formBlur()
    this.$refs['toast'].hideLoadingToast()
  }
}
</script>

<style lang="scss" scoped>
@import '~/assets/presentation/css/main.scss';

#signup {
  background: #fff;
  width: 100vw;
  height: 100vh;
}

.signupform {

  &-item {
    border-top: 1px solid #E6E6E6;
    padding: 32px 0;
    white-space: nowrap;

    &:last-child {
      border-bottom: 1px solid #E6E6E6;
    }

    &-label {
      display: inline-block;
      color: #333333;
      font-size: 27.75px;
      width: 153px;
      margin-right: 37px;
    }
    .required {
      &::after {
        content: '*';
        color: #F0552D;
      }
    }

    &-input {
      font-size: 28px;
      outline: none;
      color: #333333;
      width: 300px;
      &::placeholder {
        color: #B2B2B2;
      }
    }

    &-select {
      font-size: 28px;
      outline: none;
      color: #333333;
      width: 400px;
      appearance:none;  
      -moz-appearance:none;  
      -webkit-appearance:none;
    }

    &-vcode {
      display: inline-block;
      background: #F0552D;
      font-size: 24px;
      color: #fff;
      line-height: 67.5px;
      width: 170px;
      text-align: center;
    }

    &-vcode-timeout {
      background: #B2B2B2;
    }
  }
}

.submitarea {
  position: static;
  margin-top: 120px;
}
</style>