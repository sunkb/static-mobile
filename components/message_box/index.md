# landi 活动信息弹框组件

## 组件引入

```js
import messageBox from '~/components/message_box'
```

## 使用

```template
<messageBox 

/>
```

## props说明
isOpened: <Boolean> 是否显示
backgroundImag: <Number，String> 弹框背景图
mode: <Number> 模式，1为登录注册弹框，2为活动弹框
#### 当模式为1的情况下
loginImg: <Boolean> 登录按钮图片地址参数
registerImg: <Boolean> 注册按钮图片地址参数
#### 当模式为2的情况下
activityImg: <String> 活动按钮图片地址参数

