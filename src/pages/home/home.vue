<route lang="json5" type="page">
{
	style: {
		navigationBarTitleText: '金橙校园',
		enablePullDownRefresh: true,
	},
}
</route>
<template>
	<view class="container-page h-screen">
		<view class="pt-1">
			<wd-swiper
				v-model:current="current"
				:list="swiperList"
				autoplay
				height="200rpx"
				@change="onChange"
				@click="handleClick"
			/>
		</view>
		<view class="bg-white rounded-[20rpx] my-2">
			<wd-grid :column="3" clickable>
				<wd-grid-item
					v-for="(item, index) in gridAreaData"
					:key="index"
					:is-dot="item.dot"
					:type="item.type"
					:url="item.url"
					:value="item.value"
					custom-class="custom-item"
					icon-size="100rpx"
					link-type="navigateTo"
					use-icon-slot
					v-bind="item"
					@itemclick="gridClick(item)"
				>
					<template #icon>
						<image :src="item.icon" class="grid-img" />
					</template>
				</wd-grid-item>
			</wd-grid>
		</view>
	</view>
</template>

<script lang="ts" setup>
	import img1 from '@img/swiper-list/beveragePromotionMilkTea.png'

	const current = ref<number>(0)

	// TODO: 此处的 @img 小程序无法识别，后续接口请求的数据处理需注意
	const swiperList: Array<string | object> = [
		img1,
		'/static/images/swiper-list/chineseFastFoodClayPotRice.png',
		'/static/images/swiper-list/chineseFastFoodStirFryTakeoutSet.png',
		'/static/images/swiper-list/cuisineSichuanStirFryTakeoutSet.png',
	]

	const gridAreaData: Array<object> = [
		{
			text: '失物招领',
			url: '/pages-sub/lost-found/lost-found', // 点击跳转页面地址
			dot: false, // 右上角小红点
			type: 'danger', // 右上角颜色类型
			value: 13, // 右上角数值
			max: 99, // 图标右上角 badge 最大值
			icon: '/static/images/lost-found.svg',
		},
		{
			text: '闲置交易',
			url: '/pages-sub/idle-trade/idle-trade',
			dot: false,
			type: 'danger',
			value: 64,
			max: 99,
			icon: '/static/images/idle-trade.svg',
		},
		{
			text: '寻找兼职',
			url: '/pages-sub/find-part-time/find-part-time',
			dot: false,
			type: 'danger',
			value: 33,
			max: 99,
			icon: '/static/images/find-part-time.svg',
		},
		{
			text: '校园跑腿',
			url: '/pages-sub/campus-errand-runner/campus-errand-runner',
			dot: false,
			type: 'danger',
			value: 33,
			max: 99,
			icon: '/static/images/campus-errand-runner.svg',
		},
		{
			text: '校园食堂',
			url: '/pages-sub/campus-canteen/campus-canteen',
			dot: false,
			type: 'danger',
			value: 33,
			max: 99,
			icon: '/static/images/campus-canteen.svg',
		},
		{
			text: '校园超市',
			url: '/pages-sub/campus-supermarket/campus-supermarket',
			dot: false,
			type: 'danger',
			value: 33,
			max: 99,
			icon: '/static/images/campus-supermarket.svg',
		},
	]

	// 防止多次点击导航跳转请求
	let isNavigating: boolean = false

	function gridClick(params: object) {
		uni.navigateTo({
			url: params.url,
			success: () => {
				isNavigating = false
			},
			fail: () => {
				isNavigating = false
			},
		})
	}

	// 轮播图点击事件
	function handleClick(params) {
		uni.navigateTo({
			url: '/pages-sub/swiper-details/swiper-details?images=' + params.item,
			success: () => {
				console.log('success')
			},
			fail: () => {
				console.log('error')
			},
		})
	}

	// 轮播图切换事件
	function onChange(params) {
		console.log(params)
	}
</script>

<style lang="scss" scoped>
	.container-page {
		background-color: $uni-bg-color;
		padding-left: $uni-padding-xn;
		padding-right: $uni-padding-xn;
	}

	.grid-img {
		height: 100rpx;
		width: 100rpx;
	}

	:deep(.custom-item) {
		border-radius: 10rpx;
	}
</style>
