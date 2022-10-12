<template>
	<view class="context">
		<view class="grid-container base-container">
			<u-grid :border="false" col="4" align="left">
				<u-grid-item v-for="(listIcon, listTitle) in gridList" :key="listTitle" @click="urlClick(listIcon.url)">
					<u-icon :customStyle="{paddingTop:20+'rpx'}" :name="listIcon.name" :size="28" color="#00BB30">
					</u-icon>
					<text class="grid-text">{{listIcon.title}}</text>
				</u-grid-item>
			</u-grid>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'GridBar',
		data() {
			return {
				gridList: [{
						name: '/static/icons/home-grid/Lost-found-1.png',
						title: '失物招领',
						url: '/pages/lost_found/index'
					},
					{
						name: '/static/icons/home-grid/Idle-trading-1.png',
						title: '闲置交易',
						url: '/pages/idle_trading/index'
					},
					{
						name: '/static/icons/home-grid/Courier-1.png',
						title: '代取快递',
						url: '/pages/replace_expressage/index'
					},
					{
						name: '/static/icons/home-grid/Resource-sharing-1.png',
						title: '资源分享',
						url: '/pages/resource_sharing/index'
					},
					{
						name: '/static/icons/home-grid/Campus-activities-2.png',
						title: '校园活动',
						url: '/pages/campus_activity/index'
					},
					{
						name: '/static/icons/home-grid/Campus-canteen-1.png',
						title: '校园食堂',
						url: '/pages/campus_canteen/index'
					},
					{
						name: '/static/icons/home-grid/Campus-supermarket-1.png',
						title: '校园超市',
						url: '/pages/campus_supermarket/index'
					},
					{
						name: 'photo',
						title: '更多'
					},
				],
			}
		},
		methods: {
			urlClick(gridUrl) {
				uni.navigateTo({
					url: gridUrl
				})
			}
		},
	}
</script>

<style lang="scss">
	.context {}

	.grid-container {
		background-color: #FEFEFE;
		border-radius: $uni-border-radius;
	}

	.grid-text {
		font-size: 14px;
	}
</style>
