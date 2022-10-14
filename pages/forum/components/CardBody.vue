<template>
	<view class="context">
		<view class="post-text">
			<p>{{ postText }}</p>
		</view>

		<view class="post-illustration">
			<u--image :showLoading="true" :src="src" width="50px" height="100px" @click="click"></u--image>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'CardBody',
		data() {
			return {
				postText: "猫猫落泪，哈哈哈",
				src: "https://cdn.uviewui.com/uview/album/1.jpg"
			}
		}
	}
</script>

<style lang="scss">
	.context {}

	.post-text {}

	.post-illustration {}
</style>
