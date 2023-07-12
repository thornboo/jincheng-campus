<!--
 * @FileDescription: 滚动通知组件
 * @Author: thornboo
 * @Date: 
 * @LastEditors: thornboo
 * @LastEditTime: 2023-5-10
-->
<template>
	<view class="context">
		<view class="notice-container">
			<u-notice-bar :text="noticeText" direction="column" mode="link" border bgColor="#aeb1ae" color="#FFCE56">
			</u-notice-bar>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'notice-bar',
		data() {
			return {
				noticeText: ['社区发帖规范', '关于版本更新问题', '问题反馈入口'],
			}
		}
	}
</script>

<style lang="scss" scoped>
	.context {}

	.notice-container {}
</style>