<template>
    <div class="addComments">
        <textarea  class="comMsg" type="text" v-model="comMsg"  placeholder="还有什么想对班主任说的吗?(限200字)"></textarea>
        <span class="comMsgLength">{{comMsg.length}}/200</span>
        <button class="release"  @click="release"  :disabled="btnDisabled">发布</button>
        <button class="hasBeenVideos"  @click="hasBeenVideo" >
            <p v-show="isShow"> {{hasBeenVideos}}</p>
        </button>
        <toast ref="toast"></toast>
    </div>
</template>
<script>
import Toast from '~/components/Toast'
export default {
        // name:'addComments',
        head(){
            return{
                title:'添加评论'
                } 
            },
        components: {
                //发布成功弹出框
                'toast': Toast
            },
        data(){
            return{
                isShow:true,
                btnDisabled:false,
                comMsg:'',
                hasBeenVideos:"100"
            }
        },
        mounted(){
                //监测回退
                history.pushState(null, null, document.URL)
                window.addEventListener('popstate', this.forbidback);
        },
        // beforeDestroy(){
        //         //销毁
        //         window.removeEventListener('popstate',this.forbidback);
        // },
        methods:{
            forbidback(){
                if(this.hasBeenVideos==="100"){
                                  alert('kkkk');
                }
                    //回退按钮点击处理
    
            },
            hasBeenVideo(){
                if(this.hasBeenVideos==="100"){
                     this.btnDisabled=true
                     
                     this.hasBeenVideos="+"
                }else{
                     this.btnDisabled=false
                     this.hasBeenVideos="100"
                     if(this.hasBeenVideos==="100"){
                        this.$refs['toast'].showToast('上传成功')
                     }
                    
                   
                }
                
            }, release(){
                this.$refs['toast'].showToast('发布成功')
                setTimeout(()=>{
                     this.$router.replace('/sign_in/weeklyHouseWorkSign')
                },1000)
             
           
               
            }
        },watch:{
            /**
             * 评论输入框
             */
            comMsg(newvalue,oldvalue){
                if(newvalue.length<=200){
                    this.comMsg=newvalue
                }else{
                     this.comMsg=oldvalue
                }
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
        .comMsgLength{
            position: absolute;
            top: 20vh;
            
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
            text-align: center;
            top: 30%;
            left: 4vw;
            width: 19vw;
            height: 11vh;
            background-color: #fff;
            border: 1px solid #ccc;
            border-radius: 9px;
            font-size: 1rem;  
        }
    }
</style>