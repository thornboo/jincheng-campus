<template>
	<view class="base-container">
		<!-- 轮播图 -->
		<view class="swiper-container">
			<u-swiper :list="swiperList" autoplay="true" indicator="true" keyName="image" showTitle radius="20rpx"
				height="300rpx" circular @click="swiperClick">
			</u-swiper>
		</view>
		<!-- 滚动通知栏 -->
		<view class="notice-container">
			<u-notice-bar :text="noticeText" direction="column" mode="link" border bgColor="#aeb1ae" color="#FFCE56">
			</u-notice-bar>
		</view>
		<!-- 中间金刚区 -->
		<view class="grid-container">
			<u-grid :border="false" col="4" align="left">
				<u-grid-item v-for="(listIcon, listTitle) in gridList" :key="listTitle" @click="urlClick(listIcon.url)">
					<u-icon :customStyle="{paddingTop:20+'rpx'}" :name="listIcon.name" :size="28" color="#00BB30">
					</u-icon>
					<text class="grid-text">{{listIcon.title}}</text>
				</u-grid-item>
			</u-grid>
		</view>
		<!-- 热门话题 -->
		<view>
			<u--text block size="32rpx" lineHeight="80rpx" color="#55ff00" align="center" text="XX个话题正在被参与>"
				@click=""></u--text>
		</view>
		<!-- tabbar跳转 -->
		<tabbar :current="0"></tabbar>
	</view>
</template>

<script>
	import {
		getSwiperData
	} from '@/api/swiper/swiper.js'
	export default {
		name: 'home',
		components: {},
		data() {
			return {
				swiperList: [], //轮播图数据
				// 滚动通知栏数据
				noticeText: ['社区发帖规范', '关于版本更新问题', '问题反馈入口'],
				// 金刚区数据
				gridList: [{
						name: '/static/icons/home-grid/Lost-found-1.png',
						title: '失物招领',
						url: '/pages/lost_found/lost_found'
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
			// 轮播图详情页跳转
			swiperClick(e) {
				uni.navigateTo({
					url: "swiper-details",
					success: (res) => {
						console.log("success", res)
					},
					fail: (err) => {
						console.log("fail", err)
					}
				})
				return console.log(e)
			},
			// grid跳转
			urlClick(gridUrl) {
				uni.navigateTo({
					url: gridUrl
				})
			}
		},
		onLoad() {
			// 隐藏默认tabbar
			uni.hideTabBar({
				success: (res) => {
					console.log("tabbar success", res)
				},
				fail: (err) => {
					console.log("tabbar fail", err)
				}
			});
			// 获取轮播图数据
			getSwiperData().then((res) => {
				for (let item in res.data) {
					this.swiperList.push({
						image: res.data[item].swiper_picture,
						title: res.data[item].swiper_title,
					});
				};
			})
		}
	}
</script>

<style lang="scss">
	// base样式
	page {
		background-color: #dadada;
	}

	.base-container {
		margin-top: 10rpx;
		margin-left: 10rpx;
		margin-right: 10rpx;
	}

	// 滚动通知栏样式
	.u-notice-bar {
		border-radius: $uni-border-radius-base;
	}

	// grid区域样式
	.grid-container {
		background-color: #FEFEFE;
		border-radius: $uni-border-radius-base;
	}

	.grid-text {
		font-size: $uni-font-size-base;
	}
</style>