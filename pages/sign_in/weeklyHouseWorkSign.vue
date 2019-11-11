<template>
    <div class="weeklyHouseWorkSign">
        <div class="signTop">
            <span class="signTopMsg">开启打开提醒,每周作业不健忘</span>
            <button class="signTopBtn">去开启</button>
        </div>
        <div class="signContent">
            <div class="scoreStatistics">
                <div class="signContentSpace"></div>
                <span class="scoreStatisticsMsg">成绩统计</span>
                <div class="completed">
                    <span class="scoreNum">16</span>次
                    <!-- <span class="scoreNum">{{completedTime}}</span>次 -->
                    <div class="scoreMsg">已完成</div>
                </div>
                <div class="completedSpace"></div>
                <div class="averageScore">
                    <span class="scoreNum">4.75</span>分
                    <!-- <span class="scoreNum">{{getScoreNum}}</span>分 -->
                    <div class="scoreMsg">平均得分</div>
                </div>
            </div>
            <div class="thisWeek">
                <div class="thisWeekSpace"></div>
                <span class="scoreStatisticsMsg">本周进度</span>
                <span class="upLoadHw">请上传12月5日作业</span>
                <!-- 请上传<span>{{month}}</span>月<span>{{day}}</span>日作业 -->
                <div class="thisWeekProcess">
                    <div class="notCompleted">尚未完成</div>
                    <div>班级已有<span>12</span>人提交</div>
                    <!-- {{hasuploaded}}到时候加到12那个位置 -->
                </div>
                <button class="thisWeekSignBtn" @click="finSignBtn()" v-if="true">去打卡</button>
                <!--v-if这里从后台拿值,然后根据枚举值,利用三元表达式去判断,有就true显示,没有就false隐藏 -->
            </div>
            
            <div class="signHistorySpace"></div>
            <span class="signHistoryMsg">历史打卡记录</span>
            <div class="signHistory" v-for="(item,index) in videoList " :key="item.id">
                    <div class="signHistoryVideo" @click="signHistoryVideo">
                        <div class="videodays">X月X日作业</div>
                        <div class="upLoadTime">提交时间:{{upLoadTime}}<span></span></div>
                        <div class="videoTimes">第<span>{{videoList[index].id}}</span>次打卡</div>
                        <div class="video">123</div>
                        <span  class="videoGetScore">得分:</span> 
                        <rate v-model="rate"  class="changeRate"></rate>
                        <div class="teacherComment">评论
                            <div>{{teacherSays}}</div>
                        </div>
                        <div class="dividingLine"></div>

                </div>

            </div>
        </div>
        <div class="finSign">
                <span class="finSignMsg">本周作业已有位同班同学打卡</span>
                <!-- 到时候加到已有后面{{thisWeekSigned}} -->
                <button class="finSignBtn" @click="finSignBtn()">去打卡</button>
        </div>
    </div>
</template>

<script>
import Rate from '@/components/Rate' 
export default {
    name:'weeklyHouseWorkSign',
    head(){
        return{
            title:'周作业打卡',
            
        } 
    },
    components: {
                'rate': Rate
    },
    data() {
    return {
        //五角星参数
        rate: 1.5,
        //发表的评论
        teacherSays:'Ann:说得好',
        //提交时间
        upLoadTime:'2018年',
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
  },methods:{
        /**
         * 两个去打卡跳转按钮
         */
        finSignBtn:function(){
        this.$router.replace('/sign_in/upLoadVideo')
        },
        /**
         * 点击历史打卡记录跳转到详情页面
         */
        signHistoryVideo:function(){
        this.$router.replace('/sign_in/signInInfom')
        }
  }
}
</script>

<style lang="scss" scoped>
    .signTop{
         margin-top:1vw;
         margin-left: 3vw;
         background-color: #ccc;
         border-radius: 999px; 
         width:93vw;
         height: 7vw;
         line-height: 7vw;
             .signTopMsg{
                padding-left:5vw;
            }
            .signTopBtn{
                background-color: #ccc;
                margin-top: 0.5vh;
                margin-right: 3vw;
                float: right;
            }
    }

    .signContent{
         margin-top:3vw;
         margin-left: 5vw;
                .scoreStatistics{
                    height: 22vh;
                    width: 90vw;
                    position: relative;
                        .signContentSpace{
                            height: 3.1vw;
                            width: 0.8vw;
                            background-color: #ccc;
                            display: inline-block;
                        }
                        .scoreStatisticsMsg{
                            margin-left: 2vw;
                            font-size: 0.35rem;
                            font-weight: 700
                        }
                        .completed{
                            position: absolute;
                            left: 25%;
                            top:40%;
                            text-align: center;
                                .scoreNum{
                                    margin-bottom: 5vw;
                                    font-size: 0.5rem;;
                                    font-weight: 500;
                                }
                                .scoreMsg{
                                    padding-top: 1vh
                                }
                        }
                        .completedSpace{
                            position: absolute;
                            left: 50%;
                            top:35%;
                            height: 20vw;
                            width: 0.5vw;
                            background-color: #ccc;
                            display: inline-block;
                        }
                        .averageScore{
                            position: absolute;
                            left: 65%;
                            top:40%;
                            text-align: center;
                                .scoreNum{
                                    font-size: 0.5rem;;
                                    font-weight: 500;
                                }
                                .scoreMsg{
                                    padding-top:1vh
                                }
                        }
        }
       
    }
    .thisWeek{
            height: 30vw;
            width: 90vw;
            position: relative;
                .thisWeekSpace{
                    height: 3.1vw;
                    width: 0.8vw;
                    background-color: #ccc;
                    display: inline-block;
                }
                .scoreStatisticsMsg{
                    margin-left: 2vw;
                    font-size: 0.35rem;
                    font-weight: 700
                }
                .upLoadHw{
                    margin-left: 2vw;
                    font-size: 0.28rem;
                    font-weight: 500
                }
                .thisWeekProcess{
                    position: absolute;
                    left: 50%;
                    top: 50%;
                    transform: translate(-50%,-50%);
                        .notCompleted{
                            text-align: center;
                            font-size: 0.4rem;
                            font-weight: 700;
                            padding-bottom: 1.5vh;
                        }
                }
                .thisWeekSignBtn{
                            position: absolute;
                            // float: right;
                            left: 75vw;
                            top: 10vw;
                            width: 15vw;
                            height: 3vh;
                            border-radius: 9px;
             
                        }
    }
    .signHistorySpace{
            height: 3.1vw;
            width: 0.8vw;
            background-color: #ccc;
            display: inline-block;
        }
    .signHistoryMsg{
            margin-left: 2vw;
            font-size: 0.35rem;
            font-weight: 700
        }
    .signHistory{
            width: 90vw;
            // height: 50vh;
            position: relative;
                .signHistoryVideo{
                    margin-top: 2vh;
                    background-color: yellow;
                      border-radius: 20px; 
                      height: 35vh;;
                      .videodays{
                          position: absolute;
                          left: 3vw;
                          top:2vh;
                        font-size: 0.35rem;
                        font-weight: 700;
                      }
                      .upLoadTime{
                          position: absolute;
                          left: 3.5vw;
                          top:6vh;
                        font-size: 0.3rem;
                        font-weight: 600;
                      }
                      .videoTimes{
                          position: absolute;
                          left: 69vw;
                          top:2vh;
                        font-size: 0.35rem;
                        font-weight: 400;
                      }
                      .video{
                        //   margin-top: 5vh;
                        position: absolute;
                        top:10vh;
                        left: 5%;
                        width: 80vw;
                        //   height: 12vh;
                          background-color: red;
                          opacity : 0.4;
                      }
                      .videoGetScore{
                         position: absolute;
                          left: 3vw;
                          top:24vh;
                          font-size: 0.35rem;
                          font-weight: 700;
                          display: inline;

                      }
                      .changeRate{
                          position: absolute;
                          left: 12vw;
                          top:23.9vh;
                      }
                      .teacherComment{
                          position: absolute;
                          left: 3vw;
                          top:27vh;
                          font-size: 0.35rem;
                          font-weight: 700;
                      }
                      .dividingLine{
                          position: absolute;
                          left: 3vw;
                          top:34vh;
                          height: 0.5vh;
                          width: 83vw;
                          background-color: #999;
                          display: inline-block;
                      }
                }
    }
    .finSign{
            margin-top: 1vh;
            width: 90vw;
            height: 4vh;
            line-height: 4vh;
            position: relative;
            background-color: #ccc;
            margin-left:5vw;
            border-radius: 9px;
            .finSignMsg{
               padding-left:5vw;
             
            }
            .finSignBtn{
                float: right;
                margin-top: 0.5vh;
                border-radius: 9px;
                height: 3vh;
                line-height: 3vh;
                width: 16vw
            }
    }
</style>
