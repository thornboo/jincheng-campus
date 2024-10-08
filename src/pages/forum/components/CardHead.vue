<template>
	<view class="context">
		<view class="avatar">
			<avatar />
		</view>

		<view class="nick-name">
			<p>{{nickName}}</p>
		</view>

		<view class="time-frame">
			<p>{{ timeFrame }}</p>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'CardHead',
		data() {
			return {
				nickName: "摘星星",
				timeFrame: "2022年12月10日"
			}
		}
	}
</script>

<style lang="scss">
	.context {}

	// 头像设置
	.avatar {
		position: absolute;
		margin-top: 5px;
		margin-left: 5px;
	}

	// 昵称
	.nick-name {
		position: absolute;
		margin-top: 10px;
		margin-left: 45px;
		font-size: 14px;
	}

	// 发布日期设置
	.time-frame {
		float: right;
		margin-right: 10px;
		margin-top: 10px;
		font-size: 12px;
	}
</style>
