<template>
  <view class="swiper-container base-container">
    <swiper
      class="swiper"
      indicator-dots="true"
      indicator-color="red"
      autoplay="true"
      circular="true"
    >
      <swiper-item>
        <view class="swiper-item-box"></view>
      </swiper-item>
      <swiper-item>
        <view class="swiper-item-box"></view>
      </swiper-item>
    </swiper>
  </view>

  <view class="notice-container base-container">
    <van-notice-bar left-icon="info-o" >
      <swiper vertical="true" autoplay="true" class="notice-swiper">
        <swiper-item v-for="item in notice_msg" :key="item">{{ item }}</swiper-item>
      </swiper>
    </van-notice-bar>
  </view>

  <view class="grid-container">
    <van-grid square column-num="4" gutter="10" clickable="true">
      <van-grid-item icon-color="#fca626" icon="photo-o" text="失物招领" :badge="10" />
      <van-grid-item icon-color="#fca626" icon="photo-o" text="闲置交易" :badge="10" />
      <van-grid-item icon-color="#fca626" icon="photo-o" text="代取快递" :badge="10" />
      <van-grid-item icon-color="#fca626" icon="photo-o" text="校园活动" :badge="10" />
      <van-grid-item icon-color="#fca626" icon="photo-o" text="校园食堂" :badge="10" />
      <van-grid-item icon-color="#fca626" icon="photo-o" text="校园食堂" :badge="10" />
      <van-grid-item icon="photo-o" text="选项" />
      <van-grid-item icon="photo-o" text="选项" />
    </van-grid>
  </view>
</template>

<script setup>
const notice_msg = ['内容 1', '内容 2', '内容 3', '内容 4']
</script>

<style lang="scss">
$swiper-height: 200px; // swiper高度
$uni-border-radius: 20px; // 圆角度
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
  height: $swiper-height;
  margin-top: 10px;
}

// 轮播图容器
.swiper {
  height: $swiper-height;
}

// 轮播图item
.swiper-item-box {
  height: $swiper-height;
  background-color: #ffb25f;
  border-radius: $uni-border-radius;
}

/**
  通知栏
 */
.notice-container {
}

.van-notice-bar__content {
  width: 100%;
}
// 通知栏-外部样式类
.van-notice-bar {
  border-radius: $uni-border-radius !important;
}

// 嵌入轮播图（实现纵向滚动）
.notice-swiper {
  width: 100%;
  height: 24px;
  line-height: 24px;
  display: inline-block;
}
/**
  宫格
 */
.grid-container {
}

/**
  演示样式（可替换删除）
 */
.test {
  width: 100%;
}
</style>
