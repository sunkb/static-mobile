<template>
  <div class="vm-rate">
    <span
        v-for="(item,index) in max"
        class="vm-rate__item"
        @mousemove="setCurrentValue(item, $event)"
        @mouseleave="resetCurrentValue"
        @click="selectValue(item)"
        :key="index"
        :style="{'cursor': disabled ? 'auto' : 'pointer'}">
      <i
          class="vm-rate__icon"
          :class="[classes[item - 1], { 'hover': hoverIndex === item }]"
          :style="getIconStyle(item)"
      >
          <i
              class="vm-rate__decimal"
              v-if="showDecimalIcon(item)"
              :class="decimalIconClass"
              :style="decimalStyle"></i>
        </i>
    </span>&nbsp;&nbsp;&nbsp;<span v-if="showText" class="vm-rate__text" :style="{ color: textColor, fontSize: textSize }" v-html="text"></span>
  </div>
</template>
<script>

  function hasClass (el, cls) {
    if (!el || !cls) return false
    if (cls.indexOf(' ') > -1) throw new Error('className should not contain space.')
    if (el.classList) {
      return el.classList.contains(cls)
    } else {
      return (' ' + el.className + ' ').indexOf(' ' + cls + ' ') > -1
    }
  }

  export default {
    name: 'starLevel',

    componentName: 'starLevel',

    props: {
      value: {  //当前的评分数值
        type: String,
        default: 0
      },
      size: {  //评分字体大小，默认18
        type: [Number,String],
        default: 18
      },
      max: {  //最大分值，即几颗星数
        type: Number,
        default: 5
      },
      disabled: { // 是否为只读
        type: Boolean,
        default: true
      },
      allowHalf: {  //是否允许半选
        type: Boolean,
        default: true
      },
      colors: {  //选中的星级颜色值
        type: String,
        default: '#F0552D'
      },
      voidColor: {  //未选中的星级颜色值
        type: String,
        default: '#C6D1DE'
      },
      disabledVoidColor: {
        type: String,
        default: '#EFF2F7'
      },
      iconClasses: { 
        type: String,
        default: 'vm-rate-icon-star-full'
      },
      voidIconClass: {
        type: String,
        default: 'vm-rate-icon-star-empty'
      },
      disabledVoidIconClass: {
        type: String,
        default: 'vm-rate-icon-star-full'
      },
      showText: { //是否显示文本
        type: Boolean,
        default: false
      },
      texts: { // 分数值
        type: String,
        default: ''
      },
      textTemplate: { //文本模板
        type: String,
        default: '{value}'
      },
      textColor: {  //分数文本的字体颜色
        type: String,
        default: '#000000'
      },
      textSize: {  //分数文本的字体尺寸
        type: String,
        default: '14px'
      },
      textType: { // 文本的数据类型
        type: String,
        default: 'text'
      }
    },

    data () {
      return {
        colorMap: {},
        classMap: {},
        pointerAtLeftHalf: true, // 当前鼠标是否是在星星的左半部分
        currentValue: this.value,
        hoverIndex: -1
      }
    },

    watch: {
      value (val) {
        this.currentValue = val
        this.pointerAtLeftHalf = this.value !== Math.floor(this.value)
      }
    },

    computed: {
      text () { // 文本(分数值的显示)更替
        let result = ''
        if (this.disabled || this.textType === 'number') {
          result = this.textTemplate.replace(/\{\s*value\s*\}/, `${ '<i>' + this.currentValue + '</i>' }`)
        } else {
          result = this.texts[Math.ceil(this.currentValue / (this.max / 5)) - 1]
        }
        return result
      },
      voidClass () {
        return this.disabled ? this.classMap.disabledVoidClass : this.classMap.voidClass
      },
      activeClass () {
        return this.getValueFromMap(this.currentValue, this.classMap)
      },
      classes () {
        let result = []
        let i = 0
        let threshold = this.currentValue
        if (this.allowHalf && this.currentValue !== Math.floor(this.currentValue)) {
          threshold--
        }
        for (; i < threshold; i++) {
          result.push(this.activeClass)
        }
        for (; i < this.max; i++) {
          result.push(this.voidClass)
        }
        return result
      },
      activeColor () {
        return this.getValueFromMap(this.currentValue, this.colorMap)
      },
      valueDecimal () {
        return this.value * 100 - Math.floor(this.value) * 100
      },
      decimalIconClass () {
        return this.getValueFromMap(this.value, this.classMap)
      },
      decimalStyle () {
        let width = ''
        if (this.disabled) {
          width = `${ this.allowHalf ? this.valueDecimal : 0 }%`
        }
        if (this.allowHalf && !this.disabled) {
          width = '50%'
        }
        return {
          color: this.activeColor,
          width
        }
      }
    },

    methods: {
      getValueFromMap (value, map) { // 用于处理给星级添加颜色和星级icon
        let result = ''
        result = map.colors || map.iconClasse
        return result
      },
      showDecimalIcon (item) {
        let showWhenDisabled = this.disabled && this.valueDecimal && item - 1 < this.value && item > this.value
        let showWhenAllowHalf =
            this.allowHalf
            && this.pointerAtLeftHalf
            && this.currentValue < item
            && this.currentValue >= item - 0.5
        return showWhenDisabled || showWhenAllowHalf
      },
      getIconStyle (item) { // 处理当前星级的尺寸和颜色
        let voidColor = this.disabled ? this.colorMap.disabledVoidColor : this.colorMap.voidColor
        const UNITS = ['%', 'in', 'cm', 'mm', 'em', 'ex', 'pt', 'pc', 'px', 'rem']

        return {
          color: item <= this.currentValue ? this.activeColor : voidColor,
          fontSize: `${this.size +
            (
              typeof this.size === 'string'
              && UNITS.indexOf(this.size.replace(/\d*\.*\d*/, '')) > -1
              ? '' : 'px'
            )
          }`
        }
      },
      selectValue (value) {
        if (this.disabled) {
          return;
        }
        if (this.allowHalf && this.pointerAtLeftHalf) {
          this.$emit('input', this.currentValue)
          this.$emit('change', this.currentValue)
        } else {
          this.$emit('input', value)
          this.$emit('change', value)
        }
      },
      setCurrentValue (value, event) {
        if (this.disabled) {
          return;
        }

        if (this.allowHalf) {
          let target = event.target
          if (hasClass(target, 'vm-rate__item')) {
            target = target.querySelector('.vm-rate__icon')
          }
          if (hasClass(target, 'vm-rate__decimal')) {
            target = target.parentNode
          }
          this.pointerAtLeftHalf = event.offsetX * 2 <= target.clientWidth
          this.currentValue = this.pointerAtLeftHalf ? value - 0.5 : value
        } else {
          this.currentValue = value
        }
        this.hoverIndex = value
      },
      resetCurrentValue () {
        if (this.disabled) {
          return;
        }

        if (this.allowHalf) {
          this.pointerAtLeftHalf = this.value !== Math.floor(this.value)
        }

        this.currentValue = this.value
        this.hoverIndex = -1
      }
    },

    created () {

      if (!this.value) {
        this.$emit('input', 0)
      }

      this.colorMap = {
        colors: this.colors,
        voidColor: this.voidColor,
        disabledVoidColor: this.disabledVoidColor
      }

      this.classMap = {
        iconClasse: this.iconClasses,
        voidClass: this.voidIconClass,
        disabledVoidClass: this.disabledVoidIconClass
      }
    }
  }
</script>
<style lang="less">
    @import "./styles/less/index.less";
</style>