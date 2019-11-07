<template>
    <div class="upLoadVideo">
        <div class="content">
            <div class="thisWeekVideo">本周的作品视频录好了吗?</div>
            <div class="quicklyUpLoad">赶快上传班主任老师才能点评哦~</div>
            <nuxt-link to="/sign_in/addComments"><button class="upLoad">上传视频</button></nuxt-link>
            <div class="videoRules">视频要求:10秒≥时长≥180秒,视频大小≤300M</div>
        </div>
    </div>
</template>

<script>
export default {
        // name:'upLoadVideo',
        head(){
            
            return{
                title:'上传作品'
                } 
            },
        data(){

        },methods:{

        }
}
</script>
<style lang="scss" scoped>
    .upLoadVideo{
         position: absolute;
         top: 50%;
         left: 50%;
         transform: translate(-50%,-50%);
         text-align: center;
        .content{
            width: 70vw;
            .thisWeekVideo{
                font-size: 0.35rem;
                font-weight: 700;
                padding-bottom: 1vh;
            }.quicklyUpLoad{
                font-size: 0.35rem;
                font-weight: 700;
                padding-bottom: 5vh; 
            }.upLoad{
                width: 30vw;
                height: 6vh;
                border-radius: 33px;
                font-size: 0.38rem;
                font-weight: 550;
                margin-bottom: 3vh;
            }.videoRules{
                color: #999
            }
        }
    }

</style>