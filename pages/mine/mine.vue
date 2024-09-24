<!--
 * @FileDescription: “我的”页面
 * @Author: thornboo
 * @Date: 
 * @LastEditors: thornboo
 * @LastEditTime: 2023-5-10
-->
<template>
	<view class="context">
		<view>
			<user-message />
		</view>

		<tabbar :current="3"></tabbar>
	</view>
</template>

<script>
	import UserMessage from "./components/user-message.vue"
	export default {
		name: "mine",
		components: {
			'user-message': UserMessage
		},
		data() {
			return {

			}
		},
		onLoad() {
			uni.hideTabBar()
		},
	}
</script>