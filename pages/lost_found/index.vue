<template>
	<view class="context">
		<view>
			<LostBar />
			<LostBar />
			<LostBar />
			<LostBar />
			<LostBar />
		</view>
	</view>
</template>

<script>
	import LostBar from './components/LostBar.vue'
	export default {
		name: 'lost_found',
		components: {
			LostBar
		},
		data() {
			return {}
		},
		onLoad() {},
		methods() {},
		computed() {}
	}
</script>

<style lang="scss">
	.context {}
</style>
