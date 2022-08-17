<template>
	<view class="context">
		<view class="avatar">
			<Avatar />
		</view>

		<view class="nick-name">
			<p>{{nickName}}</p>
		</view>

		<view class="time-frame">
			<p>{{ timeFrame }}</p>
		</view>

		<view class="post-label">
			<p>{{postLabel}}</p>
		</view>

	</view>
</template>

<script>
	export default {
		name: 'CardHead',
		data() {
			return {
				nickName: "摘星星",
				timeFrame: "2022年12月10日",
				postLabel: "#身边趣事"
			}
		},
		onLoad() {},
		methods() {},
		computed() {}
	}
</script>

<style lang="scss">
	.context {}

	// 头像设置
	.avatar {
		position: absolute;
		margin-top: 5px;
		margin-left: 5px;
		background-color: #ffffff;
	}

	// 日期设置
	.time-frame {
		position: absolute;
		margin-left: 50px;
		margin-top: 30px;
		font-size: 12px;
	}

	// 昵称
	.nick-name {
		position: absolute;
		margin-left: 50px;
		margin-top: 5px;
	}

	// 标签
	.post-label {
		float: right;
		margin-right: 10px;
		margin-top: 5px;
		font-size: 14px;
	}
</style>
