<template>
  <div class="container">
    <span @click="funShowDialog">1111</span>
    <h1>{{ value }}</h1>
    <h1>{{include()}}</h1>
    <button style="width:200px;height:100px" @click="funLogOut">登出</button>
    <div v-for="(item,index) in resData" @click="goPage2(index)">{{item.name}}</div>
    <popup-share v-if="showPopup" @closePopup="closePopup"></popup-share>
    <v-dialog
      v-if="showDialog"
      @closeDialog="closeDialog"
      :dialogText="'此活动仅限abc360老学员(购买过正式课程)发起'"
    ></v-dialog>
  </div>
</template>
<script>
import axios from "../../../assets/js/axios";
import popupShare from "~/components/popup_share.vue";
import dialog from "~/components/dialog.vue";
import gettime from "~/assets/js/timeFormat";
export default {
  data() {
    return {
      resData: [],
      id: 1,
      showPopup: false,
      showDialog: false
    };
  },
  computed: {
  },
  components: {
    popupShare,
    "v-dialog": dialog
  },
  mounted() {
    // 判断环境
    this.getInfo("Fuck the world");
    axios
      .get(
        "https://www.easy-mock.com/mock/5d34086d763f0068c2361dc5/example/mock"
      )
      .then(res => {
        this.resData = res.data.projects;
      });
    axios
      .post("/openGroup", { open_id: "oZqtd5SlbXDu780SMB_LWsxFI_2s" })
      .then(res => {});
    axios.get("/getInfo").then(res => {});
    //  this.$axios.get('/getInfo').then(res=>{})
  },
  methods: {
    funLogOut() {
      axios.post("/V1/WxStudents/logout").then(res => {
        alert(res.errorMsg);
      });
    },
    goPage2(index) {
      this.$router.push({ path: `/group_buy/page2`, query: { pageId: index } });
    },
    closePopup() {
      this.showPopup = false;
    },
    funShowDialog() {
      this.showDialog = true;
    },
    closeDialog() {
      this.showDialog = false;
    }
  }
};
</script>
<style lang="scss" scoped>
.container {
  position: relative;
  span {
    font-size: 0.32rem;
  }
}
</style>