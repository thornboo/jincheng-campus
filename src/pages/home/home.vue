<template>
  <view class="swiper-container">
    <swiper indicator-dots="true" autoplay="true" circular="true">
      <swiper-item>
        <view class="A text-swiper swiper-item-box">图片A</view>
      </swiper-item>
      <swiper-item>
        <view class="B text-swiper swiper-item-box">图片B</view>
      </swiper-item>
      <swiper-item>
        <view class="C text-swiper swiper-item-box">图片C</view>
      </swiper-item>
    </swiper>
  </view>

  <view class="notice-container">
    <van-notice-bar
      custom-class="notice-bar-box"
      scrollable
      background="#ecf9ff"
      color="#1989fa"
      left-icon="info-o"
      text="程序还在开发中，敬请期待~"
    />
  </view>

  <view class="grid-container">
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
const value = [10, 20, 30, 40, 50, 60]
</script>

<style lang="scss">
page {
  background-color: #8a8888;
  --notice-bar-height: 30px;
}

.swiper-container {
  margin-top: 10px;
  margin-bottom: 10px;
}

.swiper-item-box {
  margin-left: 10px;
  margin-right: 10px;
  border-radius: 10px;
}

.A {
  background-color: $uni-color-primary;
  height: 120px;
}

.B {
  background-color: $uni-color-success;
  height: 120px;
}

.C {
  background-color: $uni-color-warning;
  height: 120px;
}

// 轮播图中的文字（暂时性）
.text-swiper {
  height: 150px;
  line-height: 150px;
  text-align: center;
}

.notice-container {
  margin-left: 10px;
  margin-right: 10px;
  border-radius: 10px;
  margin-bottom: 10px;
}

.grid-container {
  margin-bottom: 10px;
}

.notice-bar-box {
  border-radius: 10px !important;
  background-color: #9c26b0 !important;
}
</style>
