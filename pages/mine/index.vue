<template>
	<view class="context">
		<view>
			<UserMessage />
		</view>
		<view>
			<TabBar />
		</view>
	</view>
</template>

<script>
	import UserMessage from "./components/UserMessage.vue"
	export default {
		name: "mine",
		components: {
			UserMessage
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
