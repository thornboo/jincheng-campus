<template>
	<view class="context">
		<view class="notice-container base-container">
			<u-notice-bar :text="noticeText" direction="column" mode="link" border bgColor="#aeb1ae" color="#FFCE56">
			</u-notice-bar>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'NoticeBar',
		data() {
			return {
				noticeText: ['社区发帖规范', '关于版本更新问题', '问题反馈入口'],
			}
		}
	}
</script>

<style lang="scss">
	.context {}

	.notice-container {}
</style>
