<template>
	<view class="container">
		<view class="release-btn">
			<u-icon name="edit-pen" size="24px" @click="clickUrl(jumpUrl)"></u-icon>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'release-btn',
		props: ['jumpUrl'],
		data() {
			return {}
		},
		methods: {
			clickUrl(jumpUrl) {
				uni.navigateTo({
					url: jumpUrl
				})
			}
		}
	}
</script>

<style lang="scss">
	.container {}

	.release-btn {
		position: fixed;
		width: 40rpx;
		padding: 20rpx;
		border-radius: 60rpx;
		background-color: #ffff00;
		bottom: 10%;
		left: 80%;
	}
</style>