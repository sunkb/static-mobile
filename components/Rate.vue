<template>
  <div id="rate">
    <div v-for="(item, index) in stars" :key="index" class="star">
      <img v-if="item === 0" src="@/assets/punch_card/star_border.svg" class="star-img"/>
      <img v-if="item === 0.5" src="@/assets/punch_card/star_half.svg" class="star-img"/>
      <img v-if="item === 1" src="@/assets/punch_card/star.svg" class="star-img"/>
      <div class="star-action">
        <div class="star-action-item" @click="onStarClick(index, 0.5)"></div>
        <div class="star-action-item" @click="onStarClick(index, 1)"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'rate',
  model: {
    prop: 'rate',
    event: 'changeRate'
  },
  props: {
    rate: {
      type: Number,
      default: 0
    }
  },
  computed: {
    stars: function () {
      const starArray = []
      for (let i = 0; i < 5; i++) {
        let num = 0
        if (this.rate > i && this.rate < i + 1) {
          num = 0.5
        } else if (this.rate > i) {
          num = 1
        }
        starArray.push(num)
      }
      return starArray
    }
  },
  methods: {
    onStarClick (index, num) {
      this.$emit('changeRate', index + num)
    }
  }
}
</script>

<style lang="scss" scoped>

#rate {
  display: flex;
  align-items: center;

}

$star-width: 40px;
$star-height: 40px;
.star {
  width: $star-width;
  height: $star-height;
  position: relative;

  &-img {
    width: inherit;
    height: inherit;
  }

  &-action {
    position: absolute;
    top: 0;
    left: 0;
    width: $star-width;
    height: $star-height;
    display: flex;
    justify-content: center;
    align-items: center;

    &-item {
      width: calc(#{$star-width} / 2);
      height: $star-height;
    }
  }
}
</style>