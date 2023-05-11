<!--
 * @FileDescription: “首页”页面
 * @Author: thornboo
 * @Date: 
 * @LastEditors: thornboo
 * @LastEditTime: 2023-5-10
-->
<template>
	<view class="context">
		<view>
			<swiper />
		</view>
		<view>
			<notice-bar />
		</view>
		<view>
			<grid-bar />
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

	export default {
		name: 'home',
		components: {
			'grid-bar': GridBar,
			'notice-bar': NoticeBar,
			swiper
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
		background-color: #F1F1F1;
	}

	// base样式
	.base-container {
		margin-top: 10px;
		margin-left: 10px;
		margin-right: 10px;
	}

	// 通知栏外部样式
	.u-notice-bar {
		border-radius: 10px;
	}
</style>