<template>
	<view class="context">
		<view class="user-avatar">
			<AvaTar />
		</view>

		<view class="user-name">
			<u--text mode="name" :bold="false" size="16" :text="userName"></u--text>
		</view>

		<view class="release-time">
			<u--text mode="date" size="10" :text="releaseTime"></u--text>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'idlebar',
		data() {
			return {
				userName: '摘星星',
				releaseTime: '1612959739',
			}
		},
		methods: {}
	}
</script>

<style lang="scss">
	.context {
		background-color: #d4d4d4;
		min-height: 100px;
		margin: 5px;
		border-radius: 5px;
		overflow: hidden;
	}

	.user-avatar {
		position: absolute;
		margin-top: 10px;
		margin-left: 10px;
	}
</style>
