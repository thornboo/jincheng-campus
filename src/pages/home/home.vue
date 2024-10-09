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
</template>

<script lang="ts" setup>
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
