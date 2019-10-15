<template>
  <div id="rule">
    <h1>肖像使用授权</h1>
    <p>1、本监护人在参加杭州硕明科技有限公司组织的兰迪少儿英语小小演讲家英语比赛活动时上传一份含有被监护人肖像的视频资料（以下简称肖像资料）。</p>
    <p>2、本监护人授权被授权人在媒体或媒介上无偿使用该肖像资料，并可适当用于宣传推广（如优秀学员视频展示等，使用时不得损害被监护人的肖像权）。</p>
    <p>3、被授权人依本授权使用该肖像资料时，无需另行通知本监护人，如需使用该被监护人其他个人隐私信息，应当提前取得被监护人及监护人的同意；未经同意的，不得使用。</p>
    <p>4、被授权人有义务在第三人针对被监护人的肖像权侵权行为中提供必要帮助，协助监护人维权。</p>
    <h1></h1>
  </div>
</template>

<script>
export default {
  name: 'Protocol',
  head() {
    return {
      title: '用户协议'
    }
  },
  methods: {
    goBack() {
      this.$router.go(-1)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~/assets/presentation/css/main.scss';

#rule {
  padding: 22.5px 37.5px;
  background: #fff;
  width: 100vw;
  height: 100%;
}

.back {
  position: fixed;
  top: 37.5px;
  right: 0;
  padding: 22.5px 30px;
  font-size: 26px;
  font-weight: bold;
  color: #fff;
  background: $p-color-0;
  box-shadow: 0 0 22.5px -15px black;
  border-top-left-radius: 40%;
  border-bottom-left-radius: 40%;
}
</style>