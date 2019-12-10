# landi 星级评分组件

## 组件引入

```js
import startLevel from '~/components/star_level'
```

## 使用

```template
<startLevel 

/>
```

## props说明
value: <String> 当前星级的评分数值
size: <Number，String> 评分字体大小，默认18
max: <Number> 最大分值，即几颗星数
disabled: <Boolean> 是否为只读
allowHalf: <Boolean> 是否允许半选
colors: <String> 选中的星级颜色值
voidColor: <String> 未选中的星级颜色值
disabledVoidColor: <Number> 无法选择时，未选中的星级颜色值
iconClasses: <String>
voidIconClass: <String>
disabledVoidIconClass: <String>
showText: <Boolean> 是否显示文本
texts: <String> 分数值
textTemplate: <String> 文本模板
textColor: <String> 分数文本的字体颜色
textSize: <String> 分数文本的字体尺寸
textType: <String> 文本的数据类型

