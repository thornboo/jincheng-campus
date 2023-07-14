<!--
 * @FileDescription: “首页”页面
 * @Author: thornboo
 * @Date: 
 * @LastEditors: thornboo
 * @LastEditTime: 2023-5-10
-->
<template>
	<view class="context">
		<view class="base-container">
			<swiper />
		</view>
		<view class="base-container">
			<notice-bar />
		</view>
		<view class="base-container">
			<grid-bar />
		</view>
		<view>
			<hot-topic />
		</view>
		<view>
			<tabbar />
		</view>
		<tabbar :current="0"></tabbar>
	</view>
</template>

<script>
	import GridBar from './components/grid-bar.vue'
	import NoticeBar from './components/notice-bar.vue'
	import swiper from './components/swiper.vue'
	import HotTopic from './components/swiper.vue'

	export default {
		name: 'home',
		components: {
			'grid-bar': GridBar,
			'notice-bar': NoticeBar,
			swiper,
			'hot-topic': HotTopic,
		},
		data() {
			return {}
		},
		onLoad() {
			uni.hideTabBar()
		}
	}
</script>

<style lang="scss">
	// 全局样式
	page {
		background-color: #dadada;
	}

	// base样式
	.base-container {
		margin-top: 10rpx;
		margin-left: 10rpx;
		margin-right: 10rpx;
	}

	// 通知栏外部样式
	.u-notice-bar {
		border-radius: 20rpx;
	}
</style>