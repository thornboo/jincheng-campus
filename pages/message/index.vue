<template>
	<view class="context">

		<view>
			<TabBar />
		</view>

	</view>
</template>

<script>
	export default {
		name: 'message',
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
	.context {}
</style>
