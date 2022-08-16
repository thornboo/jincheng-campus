<template>
	<view class="context">
		<view>
			<Search />
			<TabBar />
		</view>
	</view>
</template>

<script>
	export default {
		name: 'forum',
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
