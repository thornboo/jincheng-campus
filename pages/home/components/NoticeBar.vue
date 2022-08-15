<template>
	<view class="context">
		<view class="notice-container base-container">
			<u-notice-bar :text="noticeText" direction="column" mode="link" border></u-notice-bar>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'app',
		data() {
			return {
				noticeText: ['谁念西风独自凉', '萧萧黄叶闭疏窗', '沉思往事立残阳'],
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
