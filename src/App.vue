<!--
1、应用生命周期仅可在App.vue中监听，在其它页面监听无效
2、App.vue 不能写模板
3、这个文件的作用包括：调用应用生命周期函数、配置全局样式、配置全局的存储globalData
4、可以定义一些全局通用样式,通用的背景色，首屏页面渲染的动画等都可以写在App.vue中
-->
<script setup lang="ts">
import {
  onLaunch,
  onShow,
  onHide,
  onError,
  onUnhandledRejection,
  onPageNotFound,
  onThemeChange,
} from '@dcloudio/uni-app'

// 当uni-app 初始化完成时触发（全局只触发一次）
onLaunch(() => {
  console.log('App Launch')
})

// 当 uni-app 启动，或从后台进入前台显示
onShow(() => {
  console.log('App Show')
})

// 当 uni-app 从前台进入后台
onHide(() => {
  console.log('App Hide')
})

// 当 uni-app 报错时触发
onError(() => {
  console.log('App Error')
})

// 对未处理的 Promise 拒绝事件监听函数
onUnhandledRejection(() => {
  console.log('Unhandled Rejection')
})

// 页面不存在监听函数
onPageNotFound(() => {
  console.log('Page Not Found')
})

// 监听系统主题变化
onThemeChange(() => {
  console.log('App Theme Change')
})
</script>
<style lang="scss">
@import 'wxcomponents/vant/common/index.wxss';
</style>
