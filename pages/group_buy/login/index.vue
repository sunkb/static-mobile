<template>
  <div class="login-container">
    <div class="main">
      <div class="logo-content" v-if="formType==='logon'">
        <img src="~/assets/group_buy/img/abc360logo-3-01@2x.png" />
        <span>宝贝英语学习礼包</span>
      </div>
      <div class="tab">
        <span :class="[{'color-black':formType==='login'},'btn-tab-login']" @click="changeTab('login')">登录</span>
        <i class="dotted-line"></i>
        <span :class="[{'color-black':formType==='logon'},'btn-tab-logon']" @click="changeTab('logon')">注册</span>
      </div>
      <div :class="[{'border-pink':isTelFocus},'tel']">
        <div class="input-title">手机号码</div>
        <input
          @blur="funBlur('tel')"
          @focus="funFocus('tel')"
          class="login-input"
          maxlength="11"
          placeholder="+86 请输入手机号码"
          type="number"
          v-model="tel"
        />
        <i @click="clearTel" v-if="showClearIcon"></i>
      </div>
      <div class="input-warning" v-if="showNotExit">该学员不存在,请注册</div>
      <div class="input-warning" v-if="showAlreadyStudent">您已是学员，去登录</div>
      <div class="input-warning" v-if="showRightTel">请输入正确的手机号</div>
      
      <div :class="[{'border-pink':isVerCodeFocus},'ver-code']">
        <div class="input-title">验证码</div>
        <input
          @blur="funBlur('verCode')"
          @focus="funFocus('verCode')"
          class="login-input"
          maxlength="6"
          placeholder="请输入短信验证码"
          type="number"
          v-model="verCode"
        />
        <div :class="[{'border-color-grey':isLoading},'btn-ver-code']" @click="getVerCode">{{isLoading?`重新获取(${timerCount})`:'获取验证码'}}</div>
      </div>
      <div class="input-warning" v-if="showRightVerCode">请输入正确验证码哦~</div>
      <div class="btn-login" @click="funSubmit">{{formType==='login'?'登录':'立即注册'}}</div>
      <div @click="formType ='login'" class="btn-text" v-if="formType==='logon'">返回登录</div>
    </div>
    <v-dialog v-if="showDialog" :dialogText="dialogText" @closeDialog="showDialog=false"></v-dialog>
    <popup-vcode v-if="showPopupVCode" :verCodeImg="verCodeImg" @changeVerCode="changeVerCode" @closePopup="showPopupVCode=false" @submit="submitVerCode"></popup-vcode>
  </div>
</template>
<script>
import popupVcode from '~/components/popup_vcode.vue'
import axios from '~/utils/axios'
import dialog from '~/components/dialog.vue'

export default {
  head () {
    return {
      title: '快登录abc360，学习吧~'
    }
  },
  data() {
    return {
      formType: 'login',
      isTelFocus: false,
      isVerCodeFocus: false,
      showNotExit: false,
      showRightVerCode: false,
      showAlreadyStudent: false,
      showRightTel: false,
      isLoading: false,
      tel: '',
      verCode: '',
      timer: null,
      timerCount: 5,
      verCodeImg: '',
      showPopupVCode:false,
      dialogText:'',
      showDialog:false
    }
  },
  components: {
    'v-dialog':dialog,
    popupVcode
  },
  computed: {
    showClearIcon: function() {
      if (this.tel === '') {
        return false
      } else {
        return true
      }
    },
    showGoBack: function() {
      if (this.formType === 'login') {
        return true
      } else {
        return false
      }
    }
  },
  beforeDestroy() {
    clearInterval(this.timer)
    this.timer = null
  },
  methods: {
    funSubmit(){
      if (
        !/^1([38][0-9]|4[579]|5[0-3,5-9]|6[6]|7[0135678]|9[89])\d{8}$/.test(
          this.tel
        )
      ) {
        this.showRightTel = true
        return
      } else {
        if(this.formType==='logon'){
          let data
          if(this.getQueryString('groupbuyCode')){
             data={
              mobile:this.tel,
              code:this.verCode,
              from:'1154',
              tjm:this.getQueryString('groupbuyCode'),
              password:this.tel.substring(5)}
            }else{
             data={
              mobile:this.tel,
              code:this.verCode,
              from:'1154',
              password:this.tel.substring(5)}
            }
            axios.post('V1/WxStudents/register2',data
            ).then(res=>{
              if(res.errorCode===200){
                if(this.getQueryString('groupbuyId')){//用户是详情页来的,登录成功后跳回详情页
                  this.$router.push({name:'group_buy-detail',query:{groupbuyId:this.getQueryString('groupbuyId')}})
                }else{
                  this.$router.push({name:'group_buy-index'})
                }
                
              }
                this.showDialog=true
                this.dialogText=res.errorMsg
            })
          }else if(this.formType==='login'){
          axios.post('NV1/Students/smsLogin',{
            mobile:this.tel,
            yzm:this.verCode,
            source:'qkpt'
          }).then(res=>{
              if(res.errorCode===200){
                if(this.getQueryString('groupbuyId')){//用户是详情页来的,注册成功后跳回详情页
                 this.$router.push({name:'group_buy-detail',query:{groupbuyId:this.getQueryString('groupbuyId')}})
                }else{
                  this.$router.push({name:'group_buy-index'})
                }
              }
              this.showDialog=true
              this.dialogText=res.errorMsg
          })
        }
      }
       
    },
    getQueryString(name) {
      var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i')
      var r = window.location.search.substr(1).match(reg)
      if (r != null) return unescape(r[2])
      return null
    },
    changeTab(type) {
      this.formType = type
      this.tel = ''
      this.verCode = ''
      this.verCodeImg=''
    },
    funFocus(type) {
      if (type === 'tel') {
        this.isTelFocus = true
      } else if (type === 'verCode') {
        this.isVerCodeFocus = true
      }
    },
    funBlur(type) {
      if (type === 'tel') {
        this.isTelFocus = false
      } else if (type === 'verCode') {
        this.isVerCodeFocus = false
      }
    },
    clearTel() {
      this.tel = ''
    },
    changeVerCode(){
      //暂时使用,以后删掉换下面的
      //  axios.post(`NV1/Students/smsCode`,{
      //    mobile:this.tel,
      //    option:this.formType==='logon'?'3':'4'
      //  }).then(res=>{

      // })
      axios.get(`Board/Public/verify`, { responseType: 'arraybuffer' }).then(res => {
              let blob = new Blob([res])
              let imageUrl = (window.URL || window.webkitURL).createObjectURL(
                blob
              )
              this.verCodeImg = imageUrl
            })
    },
    submitVerCode(verCode){
     
      axios.get(`V1/Students/smsAuthCode?mobile=${this.tel}&option=${this.formType==='logon'?'3':'4'}&verify=${verCode}&skipCheck=1`).then(res=>{//验证图片验证码,收短信验证码
        if(res.errorCode===200){
          this.showPopupVCode=false
          this.showDialog=true
          this.dialogText=res.errorMsg
          if (!this.isLoading) {
          this.isLoading = true
          this.timer = setInterval(() => {
            this.timerCount -= 1
            if (this.timerCount < 0) {
              clearInterval(this.timer)
              this.timer = null
              this.isLoading = false
              this.timerCount = 5
            }
          }, 1000)
        }
        }else{
          this.dialogText=res.errorMsg
          this.showDialog=true
        }
      })
    },
    getVerCode() {
      if (
        !/^1([38][0-9]|4[579]|5[0-3,5-9]|6[6]|7[0135678]|9[89])\d{8}$/.test(
          this.tel
        )
      ) {
        this.showRightTel = true
        return
      } else {
        this.showRightTel = false
        this.showPopupVCode=true
        this.changeVerCode()
        
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.login-container {
  background: #ffffff;
  width: 100vw;
  height: 100vh;
  .main {
    padding: 1.44rem 0.65rem 0 0.68rem;
    .logo-content {
      display: flex;
      flex-direction: column;
      align-items: center;
      img {
        width: 2.09rem;
        height: 0.52rem;
        margin-bottom: 0.39rem;
      }
      span {
        color: #3f3f3f;
        font-size: 0.53rem;
        margin-bottom: 1.35rem;
        font-weight: bold;
      }
    }
    .tab {
      display: flex;
      align-items: center;
      .btn-tab-login,
      .btn-tab-logon {
        font-size: 0.53rem;
        padding-right: 0.44rem;
        color: #999999;
      }
      .btn-tab-logon {
        padding-left: 0.44rem;
      }
      .dotted-line {
        display: inline-block;
        width: 0.027rem;
        height: 0.44rem;
        background-image: url('~assets/group_buy/img/icon-dotted-line.png');
        background-repeat: no-repeat;
        background-size: cover;
      }
    }
    .tel {
      border-bottom: 2px solid #d9d9d9;
      margin-top: 1.01rem;
      position: relative;
      i {
        display: block;
        width: 0.43rem;
        height: 0.43rem;
        background-image: url('~assets/group_buy/img/icon-clear-input.png');
        background-size: cover;
        background-repeat: no-repeat;
        position: absolute;
        right: 0;
        bottom: 0.2rem;
        border-radius: 999px;
      }
    }
    .ver-code-img{
      margin-top: .27rem;
    }
    .input-warning {
      color: #fa4b7e;
      font-size: 0.37rem;
      margin-top: 0.12rem;
    }
    .ver-code {
      border-bottom: 2px solid #d9d9d9;
      margin-top: 0.75rem;
      position: relative;
      .btn-ver-code {
        width: 2.91rem;
        height: 0.88rem;
        line-height: 0.88rem;
        text-align: center;
        border: 2px solid #fa4b7e;
        border-radius: 5px;
        position: absolute;
        right: 0;
        bottom: 0.53rem;
        font-size: 0.37rem;
        color: #fa4b7e;
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
}
.color-black {
  color: #3f3f3f !important;
}
.border-pink {
  border-color: #fa4b7e !important;
}
.border-color-grey {
  border-color: #d9d9d9 !important;
  color: #999999 !important;
}
</style>