<template>
	<view class="context">
		<view>
			<Swiper />
		</view>
		<view>
			<NoticeBar />
		</view>
		<view>
			<GridBar />
		</view>
		<view>
			<TabBar />
		</view>
	</view>
</template>

<script>
	import Swiper from './components/Swiper.vue'
	import NoticeBar from './components/NoticeBar.vue'
	import GridBar from './components/GridBar.vue'

	export default {
		name: 'home',
		components: {
			Swiper,
			NoticeBar,
			GridBar
		},
		data() {
			return {}
		},
		onLoad() {
			uni.hideTabBar()
		},
		onShow() {}
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
