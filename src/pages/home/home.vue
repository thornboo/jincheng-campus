<template>
  <view class="swiper-container">
    <swiper indicator-dots="true" autoplay="true" circular="true">
      <swiper-item>
        <view class="">
          <img src="" alt="样式图片">
        </view>
      </swiper-item>
      <swiper-item>
        <view class="B">图片B</view>
      </swiper-item>
      <swiper-item>
        <view class="C">图片C</view>
      </swiper-item>
    </swiper>
  </view>

  <view class="notice-container">
    <van-notice-bar
      left-icon="volume-o"
      text="程序还在开发中，敬请期待~"
    />
  </view>

  <view class="grid-container">
    <van-grid square column-num="4" gutter="10">
      <van-grid-item icon-color="#fca626" icon="photo-o" text="失物招领" badge="99+" />
      <van-grid-item icon-color="#fca626" icon="photo-o" text="闲置交易" />
      <van-grid-item icon-color="#fca626" icon="photo-o" text="代取快递" />
      <van-grid-item icon-color="#fca626" icon="photo-o" text="校园活动" />
      <van-grid-item icon-color="#fca626" icon="photo-o" text="校园食堂" />
      <van-grid-item icon-color="#fca626" icon="photo-o" text="校园食堂" />
    </van-grid>
  </view>
</template>

<script setup>
</script>
<style>
page {
  background-color: #e8e7e7;
}
.swiper-container {
  margin-top: 5px;
  margin-bottom: 10px;
}

.notice-container {
  margin-bottom: 10px;
}

.grid-container {
  margin-bottom: 10px;
}
.A {
  background-color: #9c26b0;
  height: 150px;
}

.B {
  background-color: #4cd964;
  height: 150px;
}

.C {
  background-color: #fca626;
  height: 150px;
}
</style>
