<template>
	<view class="context">
		<u-avatar :src="src" text="橙" fontSize="18" size="30px" randomBgColor shape="circle"></u-avatar>
	</view>
</template>

<script>
	export default {
		name: 'Avatar',
		data() {
			return {
				src: "@/static/images/headPortrait.jpg"
			}
		},
		onLoad() {},
		methods() {},
		computed() {}
	}
</script>

<style lang="scss">
	.context {}
</style>