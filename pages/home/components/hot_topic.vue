<template>
	<view class="context">
		<u--text block size="32rpx" lineHeight="80rpx" color="#55ff00" align="center" text="XX个话题正在被参与>"
			@click=""></u--text>
	</view>
</template>

<script>
	export default {
		name: 'hot_topic',
		data() {
			return {}
		},
		onLoad() {},
		methods() {
			// 跳转到话题详情页
			hot_topic_details() {
				uni.navigateTo({
					url: "hot_topic/swiper_details_" + e,
					success: (res) => {
						console.log("success", res)
					},
					fail: (err) => {
						console.log("fail", err)
					}
				})
				return console.log(e)
			},
		},
		computed() {}
	}
</script>

<style lang="scss">
	.context {}
</style>