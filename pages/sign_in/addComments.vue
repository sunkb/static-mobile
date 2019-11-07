<template>
    <div class="addComments">
        <!-- <div  > -->
            <textarea  class="comMsg" type="text" @change="comMsg" placeholder="还有什么想对班主任说的吗?">
            </textarea>
        <!-- </div> -->
        <button class="release">发布</button>
        <button class="hasBeenVideos">上传</button>

    </div>
</template>
<script>
export default {
        // name:'addComments',
        head(){
            
            return{
                title:'添加评论'
                } 
            },
        data(){

        },methods:{
            comMsg(e){
                console.log('eeeeeeeeeeee',e.target.value)
            }

        }
}
</script>
<style  lang="scss" scoped>
    .addComments{
        .comMsg{
            float: left;
            margin-top: 2vh;
            margin-left: 2vw;
            width: 77vw;
            height: 20vh;
            background-color: red;
        }
        .release{
            float: right;
            margin-top: 2vh;
            margin-right: 2vw;
            width: 18vw;
            height: 4vh;
            border-radius: 33px;
            font-size: 0.36rem;
            font-weight: 500;
        }
        .hasBeenVideos{
            position: absolute;
            top: 30%;
            left: 4vw;
            width: 18vw;
            height: 10vh;
            background-color: #fff;
            border: 1px solid #ccc;
            border-radius: 9px
        }
    }
</style>