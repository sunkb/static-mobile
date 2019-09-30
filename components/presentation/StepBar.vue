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

$circle-size: 6.67vw;
$circle-content-size: 5.06vw;
$height: 12vw;

#stepbar {
  position: relative;
}

.wrapper {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
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
  box-shadow: 0 0 1.5vw -0.7vw #666666;
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
    font-size: 2.93vw;
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
    font-size: 2.9vw;
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
    height: 0.8vw;
    border-radius: 0.4vw;
  }

  &-empty {
    width: 100%;
    box-shadow: inset 0 0.2vw .3vw -.25vw #666666;
  }

  &-fill {
    background: $p-color-0;
  }
}
</style>