<template>
    <div class="stars">
      <div class="star-item full-star" v-for="index in starVal" :key="index"  ></div>
      <div class="star-item half-star" v-if="halfStarVal"></div>
      <div class="star-item null-star" v-if="showNull" v-for="index in nullStar" :key="index" ></div>
      <div class="score" v-if="showFen">{{value}}分</div>
    </div>
</template>

<script>
export default {
  name: 'abc-rate',
  data() {
    return {
      halfStarVal: false,
      nullStar: [],
    };
  },
  computed: {
    starVal() {
      const vm = this;
      vm.nullStar = [];
      const halfStarVal = vm.value - Math.floor(vm.value);
      const arr = [];
      for (let i = 0; i < Math.floor(vm.value); i++) {
        arr.push(i);
      }
      for (let i = 0; i < Math.floor(5 - vm.value); i++) {
        vm.nullStar.push(i);
      }
      vm.halfStarVal = false;
      if (halfStarVal >= 0.75) {
        arr.push(Math.floor(vm.value));
        return arr;
      }
      if (halfStarVal >= 0.25) vm.halfStarVal = true;
      return arr;
    },
  },
  props: {
    value: {
      type: Number,
      default: 0,
    },
    size: {
      type: Number,
      default: 20,
    },
    showFen: {
      type: Boolean,
      default: true,
    },
    showNull: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="scss" scoped >
.stars{
  display: flex;
  align-items: center;
  .star-item{
    width: 32px;
    height: 30px;
    margin-right: 3px;
  }
  .full-star{
    background: url(./imgs/full.png) no-repeat center center/100% 100%;
  }
  .half-star{
    background: url(./imgs/half.png) no-repeat center center/100% 100%;
  }
  .null-star{
     background: url(./imgs/null.png) no-repeat center center/100% 100%;
  }
  .score{
    display: inline-block;
    vertical-align: middle;
    margin-left: 10px;
    font-size: 28px;
  }
}
</style>
