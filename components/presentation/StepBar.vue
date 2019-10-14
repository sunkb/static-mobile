<template>
  <div id="stepbar">
    <div class="progress">
      <div class="progress-empty progress-bar"></div>
      <div class="progress-fill progress-bar" :style="{ width: `${progress}%` }"></div>
    </div>
    <div class="wrapper">
      <div v-for="(item, index) in steps" :key="item" class="wrapper-item">
        <div class="circle-wrapper">
          <div class="circle">
            <div :class="['circle-content', (index / steps.length) * 100 <= progress ? 'accent' : '']" >{{ index + 1 }}</div>
          </div>
        </div>
        <div class="step">
          <div :class="['step-item', (index / steps.length) * 100 <= progress ? 'accent' : '']" >{{ item }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'StepBar',
  props: {
    progress: {
      type: Number, // 0 - 100
      default: 0
    },
    steps: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {
      
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~/assets/presentation/css/main.scss';

$circle-size: 52px;
$circle-content-size: 40px;
$height: 90px;

#stepbar {
  position: relative;
  width: 100vw;
}

.wrapper {
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 0 40px;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
}

.circle {
  height: $circle-size;
  width: $circle-size;
  border-radius: 50%;
  background: #fff;
  box-shadow: 0 0 11.25px -5.25px #666666;
  display: flex;
  justify-content: center;
  align-items: center;

  &-wrapper {
    height: $height;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &-content {
    height: $circle-content-size;
    width: $circle-content-size;
    color: #fff;
    background: #E6E6E6;
    border-radius: 50%;
    font-family: STYuanti-SC-Regular;
    font-size: 22px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .accent {
    background: $p-color-0;
  }
}

.step {
  &-item {
    color: #B2B2B2;
    font-size: 22px;
    font-weight: 400;
  }

  .accent {
    color: $p-color-0;
  }
}

.progress {
  height: $height;
  width: 90%;
  position: absolute;
  top: 0;
  left: 5%;
  overflow: hidden;

  &-bar {
    position: absolute;
    top: 50%;
    left: 0;
    transform: translate(0, -50%);
    height: 8px;
    border-radius: 4px;
  }

  &-empty {
    width: 100%;
    // box-shadow: 0 1.5px 2.25px #B9B9B9 inset;
    background: #E6E6E6;
  }

  &-fill {
    background: $p-color-0;
  }
}
</style>