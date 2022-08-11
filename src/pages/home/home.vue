<template>
  <view class="swiper-container base-container">
    <swiper autoplay="true" circular="true">
      <swiper-item>
        <view class="swiper-item-box"></view>
      </swiper-item>
      <swiper-item>
        <view class="swiper-item-box"></view>
      </swiper-item>
    </swiper>
  </view>

  <view class="notice-container base-container">
    <van-notice-bar
      scrollable
      background="#ecf9ff"
      color="#1989fa"
      left-icon="info-o"
      custom-class="van-notice-bar"
      text="程序还在开发中，敬请期待~"
    />
  </view>

  <view class="grid-container base-container">
    <van-grid square column-num="4" gutter="10" clickable="true">
      <van-grid-item icon-color="#fca626" icon="photo-o" text="失物招领" :badge="value[0]" />
      <van-grid-item icon-color="#fca626" icon="photo-o" text="闲置交易" :badge="value[1]" />
      <van-grid-item icon-color="#fca626" icon="photo-o" text="代取快递" :badge="value[2]" />
      <van-grid-item icon-color="#fca626" icon="photo-o" text="校园活动" :badge="value[3]" />
      <van-grid-item icon-color="#fca626" icon="photo-o" text="校园食堂" :badge="value[4]" />
      <van-grid-item icon-color="#fca626" icon="photo-o" text="校园食堂" :badge="value[5]" />
      <van-grid-item icon="photo-o" text="选项" />
      <van-grid-item icon="photo-o" text="选项" />
    </van-grid>
  </view>
</template>

<script setup>
const value = [14, 25, 32, 48, 55, 61]
</script>

<style lang="scss">
/**
  公共类
 */
page {
  background-color: #8a8888;
  // 通知栏-样式变量
  --notice-bar-height: 30px;
}

.base-container {
  margin-left: 10px;
  margin-right: 10px;
  margin-bottom: 10px;
}

/**
  轮播图
 */
.swiper-container {
  height: 200px;
  margin-top: 10px;
}

// 轮播图item
.swiper-item-box {


  height: 200px;
  border-radius: 10px;
}

/**
  通知栏
 */
.notice-container {
}

// 通知栏-外部样式类
.van-notice-bar {
  border-radius: 10px !important;
}

/**
  宫格
 */
.grid-container {
}

/**
  演示样式（可替换删除）
 */
.A-view {
  background-color: $uni-color-primary;
  height: 200px;
}

.B-view {
  background-color: $uni-color-success;
  height: 200px;
}
</style>
