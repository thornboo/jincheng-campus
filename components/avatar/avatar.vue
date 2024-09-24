<template>
	<view class="container">
		<u-avatar :src="src" text="橙" fontSize="18" size="30rpx" randomBgColor shape="circle"></u-avatar>
	</view>
</template>

<script>
	export default {
		name: 'avatar',
		data() {
			return {
				// 网络请求头像数据
				src: "@/static/images/headPortrait.jpg"
			}
		}
	}
</script>

<style lang="scss">
	.container {}
</style>