<template>
  <view>
    <van-tabbar active-color="red" v-model="active" :fixed="true" @change="Change">
      <van-tabbar-item name="home" icon="home-o" >标签</van-tabbar-item>
      <van-tabbar-item name="campusWall" icon="search"
        >标签</van-tabbar-item
      >
      <van-tabbar-item name="chat" icon="friends-o" url="pages/chat/chat">标签</van-tabbar-item>
      <van-tabbar-item name="mine" icon="setting-o" url="pages/mine/mine">标签</van-tabbar-item>
    </van-tabbar>
  </view>
</template>

<script setup>
import { ref } from 'vue'
const active = ref('home')

function Change(index) {
}
</script>

<style lang="scss"></style>
