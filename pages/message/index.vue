<template>
	<view class="context">

		<view>
			<MsgClassify />
		</view>

		<view>
			<TabBar />
		</view>

	</view>
</template>

<script>
	import MsgClassify from './components/MsgClassify.vue'

	export default {
		name: 'message',
		components: {
			MsgClassify
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
