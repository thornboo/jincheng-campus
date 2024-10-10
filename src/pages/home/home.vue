<route lang="json5" type="page">
{
	style: {
		navigationStyle: 'custom',
		navigationBarTitleText: '首页',
	},
}
</route>
<template>
	<view
		:style="{ marginTop: safeAreaInsets?.top + 'px' }"
		class="bg-white overflow-hidden pt-2 px-4"
	>
		<wd-swiper
			v-model:current="current"
			:list="swiperList"
			autoplay
			@change="onChange"
			@click="handleClick"
		></wd-swiper>
	</view>
	<view>
		<wd-grid :column="3">
			<wd-grid-item icon="picture" text="失物招领" />
			<wd-grid-item icon="picture" text="闲置交易" />
			<wd-grid-item icon="picture" text="寻找兼职" />
			<wd-grid-item icon="picture" text="代取快递" />
			<wd-grid-item icon="picture" text="资源分享" />
			<wd-grid-item icon="picture" text="代取快递" />
		</wd-grid>
		<wd-grid>
			<wd-grid-item
				v-for="index in 3"
				:key="index"
				icon-size="36px"
				text="闲置买卖"
				use-icon-slot
			>
				<template #icon>
					<image :src="joy" class="slot-img" />
				</template>
			</wd-grid-item>
		</wd-grid>
	</view>
	<TabBar />
</template>

<script lang="ts" setup>
import TabBar from '../../components/tabbar/index.vue'

// 获取屏幕边界到安全区域距离
const { safeAreaInsets } = uni.getSystemInfoSync()

const current = ref<number>(0)

const swiperList = ref([
	'https://registry.npmmirror.com/wot-design-uni-assets/*/files/redpanda.jpg',
	'https://registry.npmmirror.com/wot-design-uni-assets/*/files/capybara.jpg',
	'https://registry.npmmirror.com/wot-design-uni-assets/*/files/panda.jpg',
	'https://registry.npmmirror.com/wot-design-uni-assets/*/files/moon.jpg',
	'https://registry.npmmirror.com/wot-design-uni-assets/*/files/meng.jpg',
])

function handleClick(e) {
	console.log(e)
}

function onChange(e) {
	console.log(e)
}
</script>

<style lang="scss" scoped></style>
