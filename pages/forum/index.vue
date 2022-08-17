<template>
	<view class="context">
		<view>
			<Search />
			<CardWrap />
			<CardWrap />
			<CardWrap />
			<CardWrap />
			<CardWrap />
			<CardWrap />
		</view>
		<view>
			<TabBar />
		</view>
	</view>
</template>

<script>
	import CardWrap from "./components/CardWrap.vue"
	export default {
		name: 'forum',
		components: {
			CardWrap
		},
		data() {
			return {}
		},
		onLoad() {
			uni.hideTabBar()
		},
		methods() {},
		computed() {}
	}
</script>

<style lang="scss">
	// 全局样式
	page {
		background-color: $uni-bg-color;
	}

	.context {}
</style>
