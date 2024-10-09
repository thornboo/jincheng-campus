<route lang="json5" type="page">
{
	style: {
		navigationBarTitleText: '校园墙',
	},
}
</route>

<template>
	<view
		:style="{ marginTop: safeAreaInsets?.top + 'px' }"
		class="bg-white overflow-hidden pt-2 px-4"
	>
		<view class="text-center text-3xl mt-8">
			鸽友们好，我是
			<text class="text-red-500">菲鸽</text>
		</view>
	</view>
</template>

<script lang="ts" setup>
// 获取屏幕边界到安全区域距离
const { safeAreaInsets } = uni.getSystemInfoSync()
</script>

<style lang="scss" scoped>
.test-css {
	// mt-4=>1rem=>16px;
	margin-top: 16px;
}
</style>
