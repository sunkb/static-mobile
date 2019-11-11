<template>
    <div class="signInInfom">
        <div class="myVideo">
            <div class="videoTitle">
               <img src="" alt=""> 我的作品
            </div>
            <div class="submissionTime">提交时间:<span></span></div>
            <div class="studentVideo">
                这是学生的视频
            </div>
        </div>
        <div class="videoScore">
            <div class="scoreTitle">
               <img src="" alt="">  作品得分
            </div>    
            <div class="fiveStars">
              <rate v-model="rate" @changeRate="changeRate"></rate>
            </div>
        </div>
        <div class="videoComment">
           <div class="commentTitle">
                <img src="" alt=""> 作品评论
            </div> 
            <button @click="openMask" class="addComment">+</button>
            <dialog-bar v-model="sendVal" type="danger" title="请对作品进行评论"  v-on:cancel="clickCancel()" @danger="clickDanger" dangerText="Ok" >
            </dialog-bar>
           <div class="commentContent">
               <!-- 等有接口了再掉用吧-->
               <!-- <p v-for="(item) in commentList " :key="item.id">
                   {{commentList}}
               </p> -->
           </div>
        </div>


    </div>
</template>
<script>
import Rate from '@/components/Rate' 
import dialogBar from './tankuang'
export default {

        head(){
            return{
                title:'打卡详情'
                } 
            },
        components: {
                'rate': Rate,
                'dialog-bar': dialogBar,
        },
        data(){
            return{
                commentList:[{
                   Lisa:"第一次发言"//模拟老师
                   //这里应该还有一个用户
                }],
                rate: 3.5,
                sendVal: false,
            }
        }, 
        methods:{
            openMask(index){
                this.sendVal = true;
            },
            /**
            * 添加评论的取消
            */
            clickCancel(){
                console.log('我是点了取消的,或者没输入')
            },
            /**
            * 添加评论的确定
            */
            clickDanger(textArea){
                    if(textArea){
                         console.log('我是输入并点了确定',textArea)
                        this.commentList.push({
                            Lisa:textArea
                            //根据不同登陆者的身份,在判断好的else里去改发起评论人的身份
                        })
                    }else{
                        this.clickCancel()
                    }
            },
            /**
             * 得分五角星
             */
            changeRate (num) {
                    console.log(num)
            }


        }
}
</script>
<style  lang="scss" scoped>
    .signInInfom{
        .myVideo{
            background-color: red;
            position: absolute;
            width: 95vw;
            height: 35vh;
            top: 2%;
            left:2%;
            .videoTitle{
                font-size: 0.4rem;
                font-weight: 600;
                padding-bottom: 2vh;
            }.submissionTime{
                font-size: 0.33rem;
                padding-left: 2vw;
                padding-bottom: 3vh;
            }.studentVideo{
                background-color: yellow;
                width: 83vw;
                height: 20vh;
                margin-left: 4vw;
            }
        }.videoScore{
            background-color: skyblue;
            position: absolute;          
            width: 95vw;
            height: 15vh;
            top: 40%;
            left:2%;
            .scoreTitle{
                font-size: 0.4rem;
                font-weight: 600;
                padding-bottom: 2vh;
            }.fiveStars{
                background-color: pink;
                width: 83vw;
                height: 7.5vh;
                margin-left: 4vw;
            }
        }.videoComment{
            background-color: orange;
            position: absolute;          
            width: 95vw;
            height: 35vh;
            top: 60%;
            left:2%;
            .commentTitle{
                font-size: 0.4rem;
                font-weight: 600;
                margin-top: 1vh;
                padding-bottom: 2vh;
                display: inline-block;

            }.addComment{
                float: right;
                width: 8vw;
                height: 4vh;
                background-color: white;
                font-size: 0.55rem;
                font-weight: 600;

            }.commentContent{
                background-color: pink;
                width: 83vw;
                height: 25vh;
                margin-left: 4vw;
            }
        }
    }

</style>