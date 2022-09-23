<template>
	<view class="context">
		<view class="grid-container base-container">
			<u-grid :border="false" col="4" align="left" @click="click">
				<u-grid-item v-for="(baseListItem,baseListIndex) in gridList" :key="baseListIndex">
					<u-icon :customStyle="{paddingTop:20+'rpx'}" :name="baseListItem.name" :size="28" color="#00BB30"></u-icon>
					<text class="grid-text">{{baseListItem.title}}</text>
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
						name: 'photo',
						title: '失物招领'
					},
					{
						name: 'photo',
						title: '闲置交易'
					},
					{
						name: 'photo',
						title: '代取快递'
					},
					{
						name: 'photo',
						title: '资源分享'
					},
					{
						name: 'photo',
						title: '校园活动'
					},
					{
						name: 'photo',
						title: '校园食堂'
					},
					{
						name: 'photo',
						title: '校园超市'
					},
					{
						name: 'photo',
						title: '暂未开放'
					},
				],
			}
		}
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
