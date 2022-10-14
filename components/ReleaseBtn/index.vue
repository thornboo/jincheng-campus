<template>
	<view class="context">
		<view class="release-btn">
			<u-icon name="edit-pen" size="24px" @click="clickUrl(jumpUrl)"></u-icon>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'ReleaseBtn',
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
	.context {}

	.release-btn {
		position: fixed;
		width: 20px;
		padding: 10px;
		border-radius: 30px;
		background-color: #ffff00;
		bottom: 10%;
		left: 80%;
	}
</style>
