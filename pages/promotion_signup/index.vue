<template>
  <div id="promotion-signup-index">
    <a name="signup"/>
    <div class="block-signup" v-if="!signuped">
      <div class="block-signup-header">
        <img class="block-signup-header-img" src="~assets/promotion_signup/img/speaker.jpg"/>
        <span class="block-signup-header-title">截止目前已有3000名用户成为abc360推广大使</span>
      </div>
      <div class="block-signup-divide"></div>
      <div class="block-signup-form">
        <input class="block-signup-form-input" type="text" placeholder="请输入您的名字" v-model="user.name" @focus="inputFocus(0)"/>
        <input class="block-signup-form-input" type="text" placeholder="请输入手机号" v-model="user.phone" @focus="inputFocus(1)"/>
        <div style="position: relative">
          <input class="block-signup-form-input" type="text" placeholder="请输入验证码" v-model="user.validateCode" @focus="inputFocus(2)"/>
          <span class="block-signup-form-code" v-if="validateCodeTimeout" @click="getValidateCode">获取验证码</span>
          <span class="block-signup-form-code block-signup-form-codedisable" v-else >重新获取({{validateCodeCountDown}})</span>
        </div>
        <div class="block-signup-form-submit" @click="signUpBtnClick">
          <span style="font-weight: bold;">确定</span>
        </div>
      </div>
    </div>
    <div class="block-signuped" v-if="signuped">
      <div class="block-signuped-header">
        <img class="block-signuped-header-img" src="~assets/promotion_signup/img/speaker.jpg"/>
        <span class="block-signuped-header-title">截止目前已有3000名用户成为abc360推广大使</span>
      </div>
      <div class="block-signuped-divide"></div>
      <div class="signuped">
        <div class="signuped-text0">
          <img class="signuped-text0-img" src="~assets/promotion_signup/img/ok.jpg"/>
          <span>恭喜您!</span>
        </div>
        <div class="signuped-text1">已成为abc360推广大使中的一员</div>
        <div class="signuped-text2">请保持通话畅通，稍后会有工作人员与您联系哦</div>
      </div>
    </div>
    <div class="block-why">
      <div class="block-why-items">
        <div class="block-why-item" v-for="(item, index) in whyBlock" :key="index">
          <img class="block-why-item-icon" :src="require(`~/assets/promotion_signup/img/why-block-${index}.jpg`)"/>
          <h4 class="block-why-item-text">{{ item }}</h4>
        </div>
      </div>
    </div>
    <div class="block-special">
      <div v-for="(item, index) in specialBlock" :key="index" :class="`block-special-item-${index}`" >
        <div class="block-special-item-text">{{ item }}</div>
      </div>
    </div>
    <div class="block-itsyou">
      <img class="block-itsyou-img" src="~assets/promotion_signup/img/itsyou-block-0.jpg"/>
      <div class="block-itsyou-texts">
        <div class="block-itsyou-text" v-for="(item, index) in itsyouBlock" :key="index">{{ item }}</div>
      </div>
    </div>
    <div class="block-support">
      <div class="block-support-wrapper">
        <div class="block-support-item" v-for="(item, index) in supportBlock" :key="index">
          <img class="block-support-item-img" :src="require(`~/assets/promotion_signup/img/support-block-${index}.jpg`)"/>
          <div class="block-support-item-title">{{ item.title }}</div>
          <div class="block-support-item-content">{{ item.content }}</div>
        </div>
      </div>
    </div>
    <div class="block-partner">
      <swipe :showIndicators="false" :speed=1500 :auto=5000 @change="swipeChange">
        <swipe-item v-for="(item, index) in partnerBlock" :key="index" class="block-partner-item">
          <div class="block-partner-item-top">
            <div><img :src="require(`~/assets/promotion_signup/img/partner-block-${index}.jpg`)" class="block-partner-item-top-img"/></div>
            <div style="text-align: left">
              <div class="block-partner-item-top-text0">{{ item[0] }}</div>
              <div class="block-partner-item-top-text1">{{ item[1] }}</div>
            </div>
          </div>
          <div class="block-partner-item-text">{{ item[2] }}</div>
        </swipe-item>
      </swipe>
    </div>
    <div class="swipe-indicator">
      <div v-for="(item, index) in partnerBlock" :key="index" :class="['swipe-indicator-item', index === swipeCurrentIndex ? 'swipe-indicator-itemchecked' : '']"></div>
    </div>
    <div class="join-promotion">
      <div style="position: relative">
        <img class="join-promotion-img" src="~assets/promotion_signup/img/join-promotion.jpg"/>
        <a class="join-promotion-innertext" href="promotion_signup#signup">
          <span class="join-promotion-innertext-left">立即加入</span><span class="join-promotion-innertext-right">abc360推广大使</span>
        </a>
      </div>
      <h4 class="join-promotion-text">高额提成，丰厚收入，月入过万不是梦</h4>
    </div>
    <div class="block-news">
      <div class="block-news-content">
        <auto-scroll>
          <div v-for="(item, index) in newsBlock" :key="index" class="block-news-content-item">
            <div>{{item[0]}}</div>
            <div>{{item[1]}}</div>
            <div>{{item[2]}}</div>
          </div>
        </auto-scroll>
      </div>
    </div>
    <a class="bottombar" href="tel:15555444885">
      <img class="bottombar-img" src="~assets/promotion_signup/img/phone.jpg"/>
      <span class="bottombar-text">电话联系</span>
    </a>
    <v-dialog class="dialog" :dialogText="vDialog.text" v-if="vDialog.show" @closeDialog="closeDialogCB"/>
    <v-loading :visible="vLoading" />
  </div>
</template>

<script>
import { AutoScroll, Swipe, SwipeItem, Loading } from '~/components/promotion_signup';
import dialog from '~/components/dialog';
import axios from '~/assets/js/axios';

const phoneRegex = /^(0|86|17951)?(13[0-9]|15[012356789]|166|17[3678]|18[0-9]|14[57])[0-9]{8}$/;
const nameRegex = /^[a-zA-Z0-9\u4e00-\u9fa5]{1,6}$/g;

export default {
  components: {
    'auto-scroll': AutoScroll,
    'swipe': Swipe,
    'swipe-item': SwipeItem,
    'v-dialog': dialog,
    'v-loading': Loading
  },
  data() {
    return {
      whyBlock: [
        "成立8年, 品牌积淀有保障",
        "实力在线，阿里腾讯双投资",
        "大国品牌，在线教育领头羊",
        "课程完善，价格亲民我最强"
      ],
      specialBlock: [
        "坐拥专业海外教学中心",
        "VIP绑定专属外教",
        "4对1用心贴心让你放心 全程跟踪服务",
        "不满意课程无忧返还A币 完美解决后顾之忧"
      ],
      itsyouBlock: [
        "对教育充满热情，认可在线教育行业",
        "热爱孩子，关注孩子教育",
        "乐于体验，乐于交流",
        "有一定的生活工作交际圈"
      ],
      supportBlock: [
        { title: '品牌支持', content: '提供品牌使用权，配套品牌产品展示权' },
        { title: '培训支持', content: '推广专家入门指导、定期运营管理指导' },
        { title: '活动支持', content: '营销活动策划，营销推广工具支持' },
        { title: '服务支持', content: '' }
      ],
      partnerBlock: [
        ['罗女士', '全职主妇', '利用在家照顾孩子的空余时间，发动身边资源，半年成功推荐60余名学生，不仅获得了不错的收入，更把优质的教育资源传递给身边的宝爸宝妈们。'],
        ['赵先生', '上班族', '上班时间紧，生活压力大，利用休息时间进行学员招募，把课程推荐给同事朋友，口口相传，现已成为推广大使团领袖人物。'],
        ['叶校长', '上班族', '书法绘画机构校长，去年开始跟abc360合作以来，机构等于又多了一个产品，同时带动机构转介绍，零成本每月可以多收好几万。'],
        ['黄小姐', '在校大学生', '在校大学生，从朋友口中了解到abc360，将产品介绍给家人亲友，学习之余不费时间给自己赚取零花钱。']
      ],
      newsBlock: [
        ['李**', '167****3286', '5小时前已赚取1120元'],
        ['潘**', '133****7765', '6小时前已赚取3230元'],
        ['王**', '153****8907', '6小时前已赚取2080元'],
        ['刘**', '175****6927', '7小时前已赚取4560元'],
        ['张**', '138****3708', '8小时前已赚取1520元']
      ],
      validateCodeTimeout: true,
      validateCodeCountDown: 60,
      validateCodeInterval: -1,
      swipeCurrentIndex: 0,
      signuped: false,
      user: {
        name: '',
        phone: '',
        validateCode: ''
      },
      vDialog: {
        show: false,
        text: ''
      },
      vLoading: false
    }
  },
  methods: {
    async getValidateCode() {
      if (!this.user.phone.match(phoneRegex)) {
        this.showDialog('请输入正确的手机号')
        return
      }
      this.vLoading = true

      const checkRes = await axios.get(`/MiniProgramApi/Agent/checkAgent?mobile=${this.user.phone}`)
      if (checkRes && checkRes.errorCode == 200 && checkRes.data.is_agent) {
        this.vLoading = false
        this.showDialog('您已经是推广大使, 无需再次注册')
        return
      }

      const smsRes = await axios.get(`/MiniProgramApi/Agent/smsAuthCode?mobile=${this.user.phone}&option=1`)
      this.vLoading = false
      if (smsRes && smsRes.errorCode == 200) {
        this.validateCodeTimeout = false
        this.validateCodeInterval = setInterval(() => {
          this.validateCodeCountDown-- 
          if (this.validateCodeCountDown <= 0) {
            clearInterval(this.validateCodeInterval)
            this.resetValidateCodeBtn()
          }
        }, 1000)
      } else {
        this.showDialog('发送验证码失败')
      }
    },
    resetValidateCodeBtn() {
      this.validateCodeTimeout = true
      this.validateCodeCountDown = 60
    },
    swipeChange(index) {
      this.swipeCurrentIndex = index;
    },
    closeDialogCB() {
      this.vDialog.show = false
    },
    showDialog(text) {
      this.vDialog.text = text
      this.vDialog.show = true
    },
    async signUpBtnClick() {
      if (!this.user.name.match(nameRegex)) {
        this.showDialog('姓名1-6个字符,仅支持输入数字、字母')
        return
      }
      if (!this.user.phone.match(phoneRegex)) {
        this.showDialog('请输入正确的手机号')
        return
      }
      if (this.user.validateCode.length <= 0) {
        this.showDialog('请输入验证码')
        return
      }

      this.vLoading = true
      const res = await axios.post(`/MiniProgramApi/Agent/reg`, {
        mobile: this.user.phone,
        yzm: this.user.validateCode,
        nickname: this.user.name,
        source: 11
      })
      this.vLoading = false
      if (res && res.errorCode == 200) {
        this.signuped = true
      } else if (res && res.errorCode != 200) {
        this.showDialog(res.errorMsg)
      }
    },
    inputFocus(index) {
      document.querySelectorAll('.block-signup-form-input')[index]
        .scrollIntoView({behavior: "smooth", block: "center"})
    }
  },
  mounted() {
    document.title='推广大使'
  }
}
</script>

<style lang="scss" scoped>
$block-top-padding: 16vw;

@mixin item-block($height, $url) {
  width: 93vw;
  height: $height;
  display: inline-block;
  margin-bottom: 2vw;
  background: url('~assets/promotion_signup/img/' + $url) 0 0 / contain no-repeat;
}

#promotion-signup-index {
  width: 100vw;
  height: 100vh;
  overflow: auto;
  background: url('~assets/promotion_signup/img/background.jpg') 0 0 / cover no-repeat local;
  text-align: center;
}

.block-signuped {
  @include item-block(62.53vw, 'signuped-block.jpg');
  margin-top: 84vw;

  &-header {
    height: 10.7vw;
    margin-top: 6.1vw;
    padding: 0 5.3vw 2vw;
    display: flex;
    align-items: center;

    &-img {
      height: 8.7vw;
    }

    &-title {
      margin-left: 1.6vw;
      font-size: 3.2vw;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }

  &-divide {
    margin: 0 7.3vw;
    border-bottom: 0.3vw dashed #BFBFBF;
    text-align: center;
  }
}

.block-signup {
  @include item-block(98vw, 'signup-block.jpg');
  margin-top: 84vw;

  &-header {
    height: 10.7vw;
    margin-top: 6.1vw;
    padding: 0 5.3vw 2vw;
    display: flex;
    align-items: center;

    &-img {
      height: 8.7vw;
    }

    &-title {
      margin-left: 1.6vw;
      font-size: 3.2vw;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }

  &-divide {
    margin: 0 7.3vw;
    border-bottom: 0.3vw dashed #BFBFBF;
    text-align: center;
  }

  &-form {
    margin-top: 2vw;

    &-input {
      width: 73.3vw;
      height: 12vw;
      border: 0.3vw solid #BFBFBF;
      border-radius: 6vw;
      padding: 0 7.3vw;
      font-size: 4.25vw;
      margin-top: 5.2vw;
      outline: none;
      color: #4a4a4a;

      &:focus {
        border: 0.3vw solid #FF327D;
      }
    }

    &-code {
      position: absolute;
      left: 53.35vw;
      top: 0;
      width: 30.3vw;
      height: 12vw;
      border: 0.3vw solid #BFBFBF;
      border-radius: 0 6vw 6vw 0;
      font-size: 4.25vw;
      margin-top: 5.2vw;
      line-height: 12vw;
      color: #fff;
      background: #FF327D;
    }

    &-codedisable {
      background: #B1A8A8;
    }

    &-submit {
      margin: 5.2vw auto 0 auto;
      width: 73.3vw;
      height: 14vw;
      background: url('~assets/promotion_signup/img/signup-btn.jpg') 0 0 / contain no-repeat;
      color: #fff;
      font-size: 4.8vw;
      line-height: 13.5vw;
    }
  }
}

.block-why {
  @include item-block(94vw, 'why-block.jpg');
  padding-top: $block-top-padding;

  &-items {
    display: flex;
    align-items: center;
    height: calc(90vw - #{$block-top-padding});
    flex-flow: row wrap;
    padding: 0 2vw;
  }

  &-item {
    flex-basis: 50%;

    &-icon {
      height: 17.6vw;
    }

    &-text {
      padding: 0 8vw;
      text-align: left;
      font-size: 3.2vw;
      color: #010103;
    }
  }
}

.block-special {
  @include item-block(131vw, 'special-block.jpg'); 
  padding: $block-top-padding 2vw 0 2vw;

  @mixin block-special-item($url, $left, $top) {
    position: relative;
    height: 27.5vw;
    background: url('~assets/promotion_signup/img/' + $url) 0 0 / contain no-repeat;

    .block-special-item-text {
      position: absolute;
      left: $left;
      top: $top;
      font-size: 3.3vw;
      color: #010103;
      max-width: 33vw;
      text-align: left;
    }
  }

  &-item-0 {
    @include block-special-item('special-block-0.jpg', 6.4vw, 12.7vw)
  }
  &-item-1 {
    @include block-special-item('special-block-1.jpg', 50vw, 16vw)
  }
  &-item-2 {
    @include block-special-item('special-block-2.jpg', 5vw, 15vw)
  }
  &-item-3 {
    @include block-special-item('special-block-3.jpg', 47vw, 9vw)
  }
}

.block-itsyou {
  @include item-block(63.5vw, 'itsyou-block.jpg'); 
  padding-top: $block-top-padding;

  &-img {
    width: 85vw;
    height: 23.2vw;
  }

  &-texts {
    margin: 0 auto;
    width: 85vw;
    display: flex;
    justify-content: space-evenly;
  }

  &-text {
    width: 17.6vw;
    text-align: left;
    color: #010103;
    font-size: 2.9vw;
  }
}

.block-support {
  @include item-block(120vw, 'support-block.jpg'); 
  padding-top: $block-top-padding;

  &-wrapper {
    display: flex;
    
    height: calc(107vw - #{$block-top-padding});
    flex-flow: row wrap;
    padding: 4vw 5.5vw 0;
  }

  &-item {
    flex-basis: 50%;
    color: #010103;

    &-img {
      height: 20.4vw;
      width: 20.4vw;
    }

    &-title {
      font-size: 4vw;
      font-weight: bold;
    }

    &-content {
      font-size: 3.2vw;
      padding: 0 5vw;
      text-align: left;
    }
  }
}

.block-partner {
  @include item-block(74.2vw, 'partner-block.jpg'); 
  padding-top: $block-top-padding;

  &-item {
    &-top {
      display: flex;
      justify-content: center;
      align-items: center;
      
      &-img {
        height: 31.3vw;
        margin-left: -10vw;
      }

      &-text0 {
        font-size: 4.8vw;
        font-weight: bold;
        margin-bottom: 2vw;
      }
      &-text1 {
        font-size: 3.2vw;
      }
    }

    &-text {
      font-size: 3.2vw;
      padding: 2vw 7vw;
      text-align: left;
    }
  }
}

.block-news {
  @include item-block(84.5vw, 'news-block.jpg'); 
  padding-top: $block-top-padding;
  margin-bottom: 24vw;
  overflow: hidden;

  &-content {
    display: flex;
    justify-content: center;
    height: 59vw;

    &-item {
      width: 83.3vw;
      padding: 3vw;
      background: #FEFAF3;
      border-radius: 1.3vw;
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 2vw;
      color: #131112;
      font-size: 3.2vw;
    }
  }
}

.join-promotion {
  &-img {
    width: 91.9vw;
    height: 14.5vw;
  }

  &-innertext {
    width: 91.9vw;
    position: absolute;
    left: 50vw;
    top: 2.6vw;
    transform: translateX(-50%);
    text-decoration: none;
    font-size: 4.8vw;
    text-shadow: 0 0.6vw 0.5vw rgba(133,3,50,0.22);
    -webkit-text-stroke: 0.1vw white;

    &-left {
      color: #FF327D;
      font-weight: bold;
    }

    &-right {
      color: #66D3F4;
      font-weight: bold;
    }
  }

  &-text {
    color: #fff;
    font-size: 3.2vw;
    margin-bottom: 10vw;
  }
}

.bottombar {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 16vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #F8F3C5;
  text-decoration: none;
  box-shadow: 0 -1.5vw 4.5vw -3.3vw black;

  &-img {
    width: 6.4vw;
    height: 6.4vw;
  }

  &-text {
    font-size: 4.8vw;
    font-weight: bold;
    color: #FF327D;
    margin-left: 2vw;
  }
}

.swipe-indicator {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: -1vw;
  margin-bottom: 8vw;

  &-item {
    width: 3vw;
    height: 3vw;
    margin: 1vw;
    border-radius: 3vw;
    background: #fff;
  }

  &-itemchecked {
    background: #fff000;
  }
}

.signuped {
  padding: 5vw 0;

  &-text0 {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 5.3vw;

    &-img {
      height: 6.4vw;
      margin-right: 2vw;
    }
  }

  &-text1 {
    font-size: 4vw;
    margin-top: 5vw;
  }

  &-text2 {
    color: #666666;
    font-size: 3.2vw;
    margin-top: 5vw;
  }
}

.dialog {
  font-size: 4vw;
}
</style>