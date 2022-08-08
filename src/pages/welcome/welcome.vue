<template>
  <view class="content">
    <image class="backImg" src="../../static/images/welcome.png"></image>
  </view>
</template>

<script lang="ts" setup>
// 延时2秒跳转首页
setTimeout(function () {
  wx.reLaunch({
    url: '../home/home',
  })
}, 2000)
</script>

<style>
page {
  height: 100%;
}
.content {
  display: flex;
  width: 100%;
  height: 100%;
}

.backImg {
  width: 100vw;
  height: 100%;
}
</style>
