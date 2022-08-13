<template>
	<view class="context">
		<view class="swiper-container base-container">
			<u-swiper :list="swiperList" autoplay="true" indicator="true" keyName="image" showTitle height="150px"
				:radius="radius" circular>
			</u-swiper>
		</view>

		<view class="notice-container base-container">
			<u-notice-bar :text="noticeText" direction="column" mode="link" border></u-notice-bar>
		</view>

		<view class="grid-container base-container">
			<u-grid :border="true" col="4" align="left" @click="click">
				<u-grid-item v-for="(baseListItem,baseListIndex) in gridList" :key="baseListIndex">
					<u-icon :customStyle="{paddingTop:20+'rpx'}" :name="baseListItem.name" :size="28"></u-icon>
					<text class="grid-text">{{baseListItem.title}}</text>
				</u-grid-item>
			</u-grid>
		</view>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				swiperList: [{
						image: require('@/static/test/swiper1.png'),
						title: '谁念西风独自凉',
					},
					{
						image: require('@/static/test/swiper2.png'),
						title: '萧萧黄叶闭疏窗'
					},
					{
						image: require('@/static/test/swiper3.png'),
						title: '沉思往事立残阳'
					}
				],
				noticeText: ['谁念西风独自凉', '萧萧黄叶闭疏窗', '沉思往事立残阳'],
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
						title: '校园活动'
					},
					{
						name: 'photo',
						title: '资源分享'
					},
					{
						name: 'photo',
						title: '校园食堂'
					},
					{
						name: 'photo',
						title: '暂未开放'
					},
					{
						name: 'photo',
						title: '暂未开放'
					},
				],
				radius: "10px",
			}
		},
		onLoad() {}
	}
</script>

<style lang="scss">
	// 全局样式
	page {
		background-color: $uni-bg-color;
	}

	// base样式
	.base-container {
		margin-top: 10px;
		margin-left: 10px;
		margin-right: 10px;
	}

	/**
	 * 轮播图
	 */
	.swiper-container {}

	/**
	 * 通知栏
	 */
	.notice-container {}

	.u-notice-bar {
		border-radius: 10px;
	}

	/**
	 * 宫格图
	 */
	.grid-container {
		background-color: aquamarine;
	}

	.grid-text {
		font-size: 14px;
	}
</style>
