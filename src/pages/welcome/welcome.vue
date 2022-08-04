<template>
  <view class="content">
    <image class="backImg" src="../../static/images/index.png"></image>
  </view>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data() {
    return {
      title: '金橙校园',
    }
  },
  onLoad() {
    // 引导页延时2秒进入首页
    setTimeout(function() {
      wx.redirectTo({
        url: '/pages/home/home',
      })
    }, 2000)
  },
  methods: {},
})
</script>

<style>
page {
  height: 100%;
}
.content {
  display: flex;
  /*flex-direction: column;*/
  /*align-items: center;*/
  /*justify-content: center;*/
  width: 100%;
  height: 100%;
}

.backImg {
  width: 100vw;
  height: 100%;
}
</style>
