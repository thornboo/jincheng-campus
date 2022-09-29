<template>
	<view class="context">

		<view>
			<msgClassify />
		</view>

		<view>
			<TabBar />
		</view>

	</view>
</template>

<script>
	import msgClassify from './components/msgClassify.vue'

	export default {
		name: 'message',
		components: {
			msgClassify
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
	.context {}
</style>
