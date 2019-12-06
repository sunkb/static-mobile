<template>
  <div class="poster-two">
    <div class="clip-wrapper">
      <canvas v-show="false" id="canvas"></canvas>
      <div id="clip-box" class="clip-box" ref="clip-box">
        <div class="p-info">
          <p class="name">{{this.p_name}}</p>
          <p class="date" v-show="this.p_date_string !==''">
            <span class="date1">{{this.p_date_string}}</span>
            <span class="date2">天</span>
          </p>
          <!-- <span class="date">{{this.p_date_string}}</span><span class="date2">天</span> -->
        </div>
        <img id="temp-img" ref="temp-img" :src="currentImg" alt />
        <img id="clip-img" ref="clip-img" :src="clipImgUrl" alt />
      </div>
    </div>
    <div class="temp-container">
      <div class="temp-box">
        <div
          class="temp-item"
          v-show="tempList.length>0"
          v-for="(image, index) in tempList"
          :key="index"
          @click="currentImg = image"
        >
          <img class="temp-img" :src="image" alt />
          <div class="modal-mask" v-if="currentImg == image">
            <img :src="require('../posterImages/selected.png')" alt />
          </div>
        </div>
      </div>
      <div class="btn-box">
        <input v-show="false" type="file" id="chooseFile" accept="image/*" />
        <div class="default-btn btn" @click="chooseImage">重选照片</div>
        <div class="primary-btn btn" @click="uploadImage">生成海报</div>
      </div>
    </div>
    <div class="poster-model" v-if="modelShow">
      <div class="modal">
        <div class="tip-image-box">
          <h3>基本信息</h3>
          <h4>请填写姓名和入职日期</h4>
          <div class="input-wrap">
            <input class="input-area" v-model="p_name" type="text" placeholder="请填写名字"/>
            <input class="input-area" v-model="p_date" type="date" placeholder="请填写入职日期" />
          </div>
          <div @click="submitInfo" class="btn">提交信息</div>
        </div>
      </div>
    </div>
    <make-poster-model v-show="makePosterShow"></make-poster-model>
  </div>
</template>

<script>
if (process.client) {
  //var wx = require("weixin-js-sdk");
  var touch = require("../_js/touch.js");
  var u = navigator.userAgent;
  var isAndroid = u.indexOf("Android") > -1 || u.indexOf("Adr") > -1;
}
import apiPoster from "@/api/danyue-diy-poster.js";
import poster from "../_js/poster.js";
import makePosterModel from "./model.vue";
import image1 from "./image";
import image2 from "./image2";
//import image3 from "./tempimage";

export default {
  components: {
    makePosterModel
  },
  props: {
    posterUrl: {},
    posterData: {}
  },
  data() {
    return {
      isDev: process.env.NODE_ENV === "development",
      // tempList: [
      //   "https://qn-static.landi.com/uploadtool5778fc7f59e388f5fb69c1a32a62513a.png"
      // ],
      tempList: [image2, image1],
      currentImg: image2,
      modelShow: true,
      makePosterShow: false,
      clipImgUrl: "",
      mediaId: "",
      p_name: "",
      p_date: "",
      p_date_string:""
    };
  },
  methods: {
    getDateDay(){
      console.log('this.p_date',this.p_date)
      const date = new Date(this.p_date);
      console.log("p_date", date);
      const today = new Date();
      console.log("today", today);
      var diff = Math.abs(today.getTime() - date.getTime());
      console.log("diff", diff);
      var result = parseInt(diff / (1000 * 60 * 60 * 24));
      return result;
    },
    submitInfo() {
      this.modelShow = false;
      this.p_date_string = this.getDateDay();
      this.chooseImage();
      return;
    },
    // 选择相册或者拍照
    chooseImage() {
      const that = this;
      wx.chooseImage({
        count: 1, // 默认9
        sizeType: ["compressed"], // 可以指定是原图还是压缩图，默认二者都有
        sourceType: ["album", "camera"], // 可以指定来源是相册还是相机，默认二者都有
        success: res => {
          //this.mediaId = res.localIds[0]; // 返回选定照片的本地ID列表，localId可以作为img标签的src属性显示图片
          if (isAndroid) {
            that.makePosterShow = true;
            wx.getLocalImgData({
              localId: res.localIds[0], // 图片的localID
              success: function(res) {
                var localData = res.localData;
                that.clipImgUrl = "data:image/jpg;base64," + localData;
                console.log("本地base64数据", that.clipImgUrl);
                that.makePosterShow = false;
              }
            });
          } else {
            this.clipImgUrl = res.localIds[0]
          }
          return;
        },
        fail:function(err){
          console.log('err',err)
        },
        complete:function(){
          return;
        }
      });
    },
    makePoster() {
      if (process.client) {
        const posterElement = document.getElementById("clip-box");
        console.log("posterElement", posterElement);
        html2canvas(posterElement)
          .then(canvas => {
            const dataURL = canvas.toDataURL("image/png");
            console.log("dataURL", dataURL);
            this.$emit("update:posterUrl", dataURL);
            this.$emit("changeType", 1);
          })
          .catch(err => {
            //reject(err);
          });
      }
    },

    // 上传图片
    uploadImage() {
      if (!isAndroid) {
        this.makePoster();
      } else {
        this.makePoster();
      }

      //   if (process.env.NODE_ENV === "development") {
      //     this.clipImgUrl = this.mediaId;
      //     this.makePoster();
      //     return;
      //   } else {
      //     const that = this;
      //     that.makePosterShow = true;
      //     wx.uploadImage({
      //       localId: that.mediaId, // 需要上传的图片的本地ID，由chooseImage接口获得
      //       isShowProgressTips: 1, // 默认为1，显示进度提示
      //       success(res) {
      //         //res.serverId; // 返回图片的服务器端ID
      //         apiPoster.getPosterImage(res.serverId).then(data => {
      //           if (!data.status) return;
      //           that.clipImgUrl = data.data;
      //           console.log("that.clipImgUrl", that.clipImgUrl);
      //           that.makePosterShow = false;
      //           that.makePoster();
      //         });
      //       }
      //     });
      //   }
    }
  },
  mounted() {
    touch.default(this.$refs["clip-box"], this.$refs["clip-img"]);
  },
  created() {}
};
</script>

<style lang="scss" scoped>
/************* 默认按钮 *************/
.default-btn {
  box-sizing: border-box;
  text-align: center;
  border: 1px solid #29d5e5;
  color: #29d5e5;
  background: #fff;
}

/************* 主按钮 *************/
.primary-btn {
  box-sizing: border-box;
  text-align: center;
  border: 1px solid #29d5e5;
  color: #fff;
  background: #29d5e5;
}
/************* 主按钮点击actived *************/
.primary-btn:active {
  box-sizing: border-box;
  text-align: center;
  border: 1px solid #179aa7;
  color: #fff;
  background: #179aa7;
}
.poster-two {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  position: relative;
  .clip-wrapper {
    width: 100%;
    flex: 1;
    background: #fff;
    padding: 36px 0;
    overflow: auto;
    .clip-box {
      width: 600px;
      height: 770px;
      margin: 0 auto;
      position: relative;
      overflow: hidden;
      .p-info {
        position: absolute;
        z-index: 99;
        top:32px;
        left: 120px;
        .name {
          color: #C64E24;
          font-size: 26px;
          font-weight: 700;
          margin-left: -20px;
        }
        .date {
          margin-top: 17px;
        }
        .date1{
          font-size: 44px;
          font-weight: 700;
          color: #C64E24;
          //-webkit-text-stroke: 2px #C64E24;
        }
        .date2{
          color: #C64E24;
          margin-top: -10px;
          font-size: 26px;
          font-weight: 700;
        }
      }
      #temp-img {
        width: 600px;
        height: 770px;
        position: absolute;
        top: 0;
        left: 0;
        z-index: 10;
      }
      #clip-img {
        width: 100%;
        position: absolute;
        top: 0;
        left: 0;
        transform: translate3d(0px, 0px, 0px) scale(1);
      }
    }
  }
  .temp-container {
    box-shadow: 0 -1px 10px 0 rgba(0, 0, 0, 0.2);
    height: 350px;
    overflow-x: scroll;
    width: 100%;
    .temp-box {
      display: flex;
      overflow: auto;
      box-sizing: border-box;
      padding: 20px 0 30px 30px;

      .temp-item {
        width: 156px;
        height: 200px;
        position: relative;
        margin-right: 14px;
        flex-shrink: 0;
        flex-grow: 0;
        .temp-img {
          width: 156px;
          height: 200px;
        }
        .modal-mask {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: rgba(0, 0, 0, 0.6);
          z-index: 10;
          img {
            width: 40px;
            height: 40px;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            -webkit-transform: translate(-50%, -50%);
          }
        }
      }
    }
    .btn-box {
      display: flex;
      padding: 0 30px;
      justify-content: space-between;
      .btn {
        width: 180px;
        height: 70px;
        line-height: 70px;
        border-radius: 35px;
        font-size: 28px;
      }
    }
  }
  .poster-model {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.6);
    z-index: 100;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .modal {
      width: 550px;
      height: 626px;
      background-color: #fff;
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 50px;
      h3 {
        font-size: 34px;
        color: #333333;
        text-align: center;
      }
      h4 {
        color: #808080;
        font-size: 26px;
        text-align: center;
        margin-top: 16px;
      }
      .input-wrap {
        margin-top: 60px;
      }
      .input-area {
        margin-bottom: 40px;
        width: 450px;
        height: 90px;
        border: 1px solid #d9d9d9;
        font-size: 28px;
        color: #333333;
      }
      // .input-area:focus {
      //   border: none;
      // }
      .btn {
        background-color: #fb9253;
        color: #fff;
        width: 450px;
        height: 90px;
        border-radius: 44px;
        text-align: center;
        line-height: 90px;
        font-size: 32px;
      }
      .input-area::placeholder {
        color: #b2b2b2;
        font-size: 28px;
      }
      .tip-image-box {
        img {
          width: 414px;
        }
      }
      .know-btn {
        width: 200px;
        height: 70px;
        margin-top: 60px;
      }
    }
  }
}
</style>
