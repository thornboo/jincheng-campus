<!--
 * @FileDescription: “消息”页面
 * @Author: thornboo
 * @Date: 
 * @LastEditors: thornboo
 * @LastEditTime: 2023-5-10
-->
<template>
	<view class="context">

		<view>
			<msg-classify />
		</view>

		<tabbar :current="2"></tabbar>
	</view>
</template>

<script>
	import MsgClassify from './components/msg-classify.vue'

	export default {
		name: 'message',
		components: {
			'msg-classify': MsgClassify
		},
		data() {
			return {}
		},
		onLoad() {
			uni.hideTabBar()
		}
	}
</script>

<style lang="scss">
	.context {}
</style>