<template>
    <div class="weChatH5">
        <div class="studyVideo" v-for="(item,index) in videoList " :key="item.id">
                <div class="video">

                </div>
                <div class="videoMsg">Smart Phonics Part<span>{{videoList[index].id}}</span></div>
               
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            // list:[1,2,3,4,5],
            //视频总体列表
            videoList:[
                {id:1,videoTimes:'第一次'},
                {id:2,videoTimes:'第二次'},
                {id:3,videoTimes:'第三次'},
                {id:4,videoTimes:'第四次'},
                {id:5,videoTimes:'第五次'}, 
            ]
        };
  }
}
</script>
<style lang="scss" scoped>
    .weChatH5{
        position: absolute;
        top: 2.5%;
        left: 5%;
            .studyVideo{
                // background-color: red;
                width: 90vw;
                height: 30vh;
                margin-bottom: 5%;
                .video{
                    position: relative;
                    background-color: yellow;;
                    top: 2%;
                    left: 2%;
                    width: 96%;
                    height: 85%;
                    border-radius: 20px
                }
                .videoMsg{
                    position: relative;
                    top:8%;
                    left: 2%;
                    font-size: 0.36rem;
                }
            }
    }

</style>