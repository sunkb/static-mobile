<template>
  <div class="container">
    <div class="content-item" v-if="permission===1" v-for="item in videoList">
      <video controls :poster="item.image_url">
          <source :src="item.video_url" type="video/mp4" />
        </video>
        <p class="video-title" >{{item.text}}</p>
    </div>
  </div>
</template>
<script>
import axios from '~/utils/axios'

export default {
  data(){
    return{
      videoList:[],
      permission:''
    }
  },
  mounted(){
    document.title='拼团「Smart Phonics智慧自然拼读小课堂」'
    axios.get('/MiniProgramApi/LessonGroupBuy/getUserVideo').then(res=>{
      this.videoList=res.data.videos
      this.permission=res.data.permission
    })
  },
  methods:{}
}
</script>
<style lang="scss" scoped>
  .container{
    width: 100vw;
    height: 100vh;
    background: #fff;
    .content-item{
      display: flex;
      flex-direction: column;
      padding: .37rem .61rem 0 .59rem;
      video{
        width: 100%;
      }
       .video-title{
        color: #000;
        font-size: .37rem;
        margin-top: .28rem;
      }
    }
   
  }
</style>