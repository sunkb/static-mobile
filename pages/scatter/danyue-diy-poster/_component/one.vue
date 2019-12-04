<template>
  <div class="poster-two">
    <div class="clip-wrapper">
      <canvas v-show="false" id="canvas"></canvas>
      <div id="clip-box" class="clip-box" ref="clip-box">
        <img id="temp-img" ref="temp-img" :src="currentImg" alt />
        <img
          v-if="isDev"
          id="clip-img"
          ref="clip-img"
          :src="require('../posterImages/avatar.jpg')"
          alt
        />
        <img v-else id="clip-img" ref="clip-img" :src="mediaId" alt />
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
        <div class="default-btn btn" @click="chooseImage">选择照片</div>
        <div class="primary-btn btn" @click="uploadImage">生成海报</div>
      </div>
    </div>
    <div class="poster-model" v-if="modelShow" @click="modelShow = false">
      <div class="tip-image-box">
        <img :src="require('../posterImages/tips.png')" alt class="not-allow-selected" />
      </div>
      <img class="know-btn" :src="require('../posterImages/i-know-btn.png')" alt />
    </div>
    <make-poster-model v-show="makePosterShow"></make-poster-model>
  </div>
</template>

<script>
if (process.client) {
  var wx = require("weixin-js-sdk");
  var touch = require("../js/touch.js");
}
import poster from "../js/poster.js";
import makePosterModel from "./model.vue";

export default {
  components: {
    makePosterModel
  },
  props: {
    posterUrl: {},
    posterData: {},
    mediaId: {}
  },
  data() {
    return {
      isDev: process.env.NODE_ENV === "development",
      // tempList: [
      //   "https://qn-static.landi.com/uploadtool5778fc7f59e388f5fb69c1a32a62513a.png"
      // ],
      tempList: [require("../posterImages/1.png")],
      currentImg: require("../posterImages/1.png"),
      modelShow: true,
      makePosterShow: false,
      clipImgUrl: ""
    };
  },
  methods: {
    // chooseImage() {
    //   if (process.client) {
    //     document.getElementById("chooseFile").click();
    //   }
    // },
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
    // makePoster() {
    //   const that = this;
    //   that.makePosterShow = true;
    //   const pr = poster.pixelRatio();
    //   const longUrl = that.posterData.url;
    //   const $clipBox = $("#clip-box"); // 裁剪框
    //   const $clipImg = $("#clip-img"); // 用户选择的图片
    //   const $tempBox = $("#temp-box"); // 模板盒子
    //   const $tempImg = $("#temp-img"); // 模板dom
    //   //const $qrCode = $("#qr-code");
    //   $tempImg.data("width", $tempImg[0].naturalWidth);
    //   $tempImg.data("height", $tempImg[0].naturalHeight);
    //   const canvas = document.createElement("canvas");
    //   // const canvas = document.getElementById('canvas');
    //   canvas.width = $clipBox.width() * pr;
    //   canvas.height = $clipBox.height() * pr;
    //   const ctx = canvas.getContext("2d");
    //   ctx.fillStyle = "#fff";
    //   ctx.fillRect(0, 0, canvas.width, canvas.height);
    //   const clipImg = new Image();
    //   clipImg.src = that.clipImgUrl;
    //   // clipImg.setAttribute('crossOriginigin', 'Anonymous');
    //   clipImg.crossOriginigin = "anonymous";
    //   clipImg.onload = function() {
    //     console.log(this.width, this.height);
    //     $clipImg.data("width", this.width);
    //     $clipImg.data("height", this.height);
    //     console.log('$clipImg',$clipImg)
    //     poster.drawImage(ctx, clipImg, poster.intersect($clipBox, $clipImg));
    //     poster.drawImage(ctx, $tempImg, poster.intersect($clipBox, $tempImg));
    //     console.log("canvas---->", canvas);
    //     // const imgBase64 = jrQrcode.getQrBase64(longUrl, {
    //     //   padding: 10,
    //     //   correctLevel: QRErrorCorrectLevel.L, // 二维码容错level
    //     //   width: 800,
    //     //   height: 800
    //     // });
    //     // // console.log(imgBase64);
    //     // const img = new Image();
    //     // img.src = imgBase64;
    //     // img.onload = function() {
    //     //   // $qrCode.data("width", this.width);
    //     //   // $qrCode.data("height", this.height);
    //     //   // poster.drawImage(ctx, img, poster.intersect($clipBox, $qrCode));
    //     //   const arr = that.currentImg.split("/");
    //     //   console.log("--------base64-------");
    //     //   const base64 = canvas.toDataURL("image/jpeg");
    //     //   // console.log('base64------->', base64);
    //     //   that.$emit("update:posterUrl", base64);
    //     //   that.$emit("changeType", 2);
    //     //   that.makePosterShow = false;
    //     // };
    //     const base64 = canvas.toDataURL("image/jpeg");
    //     console.log('base64------->', base64);
    //               that.$emit("update:posterUrl", base64);
    //       that.$emit("changeType", 1);
    //       that.makePosterShow = false;
    //   };
    //   clipImg.onerror = function() {
    //     that.makePosterShow = false;
    //     that.$Toast("图片加载失败~");
    //   };
    // },
    // 上传图片
    uploadImage() {
      if (process.env.NODE_ENV === "development") {
        this.clipImgUrl = require("../posterImages/avatar.jpg");
        this.makePoster();
        return;
      } else {
        const that = this;
        wx.uploadImage({
          localId: that.mediaId, // 需要上传的图片的本地ID，由chooseImage接口获得
          isShowProgressTips: 1, // 默认为1，显示进度提示
          success(res) {
            // res.serverId; // 返回图片的服务器端ID
            //   api.poster.getPosterImage(res.serverId).then((data) => {
            //     if (!data.status) return;
            //     that.clipImgUrl = data.data;
            //     that.makePoster();
            //   });
          }
        });
      }
    },
    chooseFileChange() {
      const chooseFile = document.getElementById("chooseFile");
      chooseFile.onchange = () => {
        var file = chooseFile.files[0];
        var reader = new FileReader();
        reader.onload = e => {
          var dataURL = e.target.result,
            // this.clipImgUrl =
            // console.log('dataURL',dataURL)
            canvas = document.querySelector("canvas"), // see Example 4
            ctx = canvas.getContext("2d"),
            img = new Image();

          var exif = EXIF.readFromBinaryFile(new BinaryFile(file));

          switch (exif.Orientation) {
            case 8:
              ctx.rotate((90 * Math.PI) / 180);
              break;
            case 3:
              ctx.rotate((180 * Math.PI) / 180);
              break;
            case 6:
              ctx.rotate((-90 * Math.PI) / 180);
              break;
          }
          img.onload = () => {
            canvas.width = img.width;
            canvas.height = img.height;
            ctx.drawImage(img, 0, 0);
            console.log(canvas.toDataURL("image/png"));

            this.clipImgUrl = canvas.toDataURL("image/png");
          };

          img.src = dataURL;
        };

        reader.readAsDataURL(file);
      };
    }
  },
  mounted() {
    touch.default(this.$refs["clip-box"], this.$refs["clip-img"]);
    //this.chooseFileChange();
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
    .tip-image-box {
      margin-top: 88px;
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
</style>
