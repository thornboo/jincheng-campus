<route lang="json5" type="page">
{
	style: {
		navigationBarTitleText: '金橙校园',
		enablePullDownRefresh: true,
	},
}
</route>
<template>
	<view class="bg-[#e3e3e3ff] h-screen px-2">
		<view class="pt-2">
			<wd-swiper
				v-model:current="current"
				:list="swiperList"
				autoplay
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
	const current = ref<number>(0)

	const swiperList = ref([
		'https://registry.npmmirror.com/wot-design-uni-assets/*/files/redpanda.jpg',
		'https://registry.npmmirror.com/wot-design-uni-assets/*/files/capybara.jpg',
		'https://registry.npmmirror.com/wot-design-uni-assets/*/files/panda.jpg',
		'https://registry.npmmirror.com/wot-design-uni-assets/*/files/moon.jpg',
		'https://registry.npmmirror.com/wot-design-uni-assets/*/files/meng.jpg',
	])

	const gridAreaData = [
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
			text: '校园食堂',
			url: '/pages-sub/campus-canteen/campus-canteen',
			dot: false,
			type: 'danger',
			value: 33,
			max: 99,
			icon: '/static/images/campus-canteen.svg',
		},
	]

	function gridClick(value) {
		uni.navigateTo({
			url: value.url,
		})
	}

	function handleClick(e) {
		console.log(e)
	}

	function onChange(e) {
		console.log(e)
	}
</script>

<style lang="scss" scoped>
	.grid-img {
		height: 100rpx;
		width: 100rpx;
	}

	:deep(.custom-item) {
		border-radius: 10px;
	}
</style>
