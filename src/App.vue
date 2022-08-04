<!--
1、所有页面都是在App.vue下进行切换的，是页面入口文件
2、但App.vue本身不是页面，这里不能编写视图元素，也就是没有<template>
3、这个文件的作用包括：调用应用生命周期函数、配置全局样式、配置全局的存储globalData
4、应用生命周期仅可在App.vue中监听，在页面监听无效
-->
<script lang="ts">
import Vue from 'vue'

// 监听应用的生命周期
export default Vue.extend({
  mpType: 'app',
  // 当uni-app 初始化完成时触发（全局只触发一次）
  onLaunch() {
    console.log('App Launch')
  },

  // 当 uni-app 启动，或从后台进入前台显示
  onShow() {
    console.log('App Show')
  },

  // 当 uni-app 从前台进入后台
  onHide() {
    console.log('App Hide')
  },

  // 当 uni-app 报错时触发
  onError() {
    console.log('App Error')
  },

  // 监听系统主题变化
  onThemeChange() {
    console.log('App Theme Chage')
  },

  // 页面不存在监听函数
  onPageNotFound() {
    console.log('App Page NotFound')
  },

  // 对未处理的 Promise 拒绝事件监听函数
  onUnhandledRejection() {
    console.log('App Unhandled Rejection')
  },

  // 全局数据
  globalData: {
    text: 'text'
  }
})
</script>

<style lang="scss">
/* uView-ui */
@import 'uview-ui/theme.scss';

/* ColorUI */
@import 'colorui/main.css';
@import 'colorui/icon.css';
</style>
