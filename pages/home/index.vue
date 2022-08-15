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
	</view>
</template>

<script>
	import Swiper from './components/Swiper.vue'
	import NoticeBar from './components/NoticeBar.vue'
	import GridBar from './components/GridBar.vue'

	export default {
		components: {
			Swiper,
			NoticeBar,
			GridBar
		},
		data() {
			return {}
		},
		onLoad() {}
	}
</script>

<style lang="scss">
	// 全局样式
	page {
		background-color: $uni-bg-color;
	}

	// base样式
	.base-container {
		margin-top: 10px;
		margin-left: 10px;
		margin-right: 10px;
	}

	/**
	 * 轮播图
	 */
	.swiper-container {}

	/**
	 * 通知栏
	 */
	.notice-container {}

	.u-notice-bar {
		border-radius: 10px;
	}

	/**
	 * 宫格图
	 */
	.grid-container {
		background-color: aquamarine;
	}

	.grid-text {
		font-size: 14px;
	}
</style>
