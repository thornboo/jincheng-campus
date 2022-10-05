<template>
	<view class="context">
		<view class="business-card">
			<view class="avatar">
				<AvaTar />
			</view>
			<view class="username">摘星星</view>
			<view class="card-label">南京航空航天大学金城学院</view>
		</view>

		<view class="overview">
			<u-grid :border="false" @click="click" col="3">
				<u-grid-item v-for="(baseListItem,baseListIndex) in baseList" :key="baseListIndex">
					<u-icon :customStyle="{paddingTop:20+'rpx'}" :name="baseListItem.name" :size="22"></u-icon>
					<text class="grid-text">{{baseListItem.title}}</text>
				</u-grid-item>
			</u-grid>
		</view>

		<view class="options">
			<u-cell-group>
				<u-cell icon="setting-fill" title="主页" :isLink="true"></u-cell>
				<u-cell icon="setting-fill" title="收藏" :isLink="true"></u-cell>
				<u-cell icon="setting-fill" title="设置" :isLink="true"></u-cell>
				<u-cell icon="setting-fill" title="反馈" :isLink="true"></u-cell>
			</u-cell-group>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'UserMessage',
		data() {
			return {
				baseList: [{
						name: '/static/icons/mine-icon/Dynamic.png',
						title: '动态'
					},
					{
						name: '/static/icons/mine-icon/Follow.png',
						title: '关注'
					},
					{
						name: '/static/icons/mine-icon/Friends.png',
						title: '好友',
					}
				]
			}
		},
		onLoad() {},
		methods() {},
		computed() {}
	}
</script>

<style lang="scss">
	.context {}

	.avatar {
		position: absolute;
		margin-top: 10px;
		margin-left: 20px;
	}

	.username {
		position: absolute;
		margin-left: 60px;
		margin-top: 15px;
	}

	.card-label {
		position: absolute;
		margin-top: 40px;
		margin-left: 60px;
		font-size: 14px;
	}

	.business-card {
		background-color: #bcbcbc;
		height: 100px;
	}

	.overview {}

	.options {
		padding-top: 10px;
	}
</style>
