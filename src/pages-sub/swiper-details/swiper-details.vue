<route lang="json5" type="page">
{
	style: { navigationBarTitleText: '轮播图详情页面' },
}
</route>

<template>
	<view class="p-2">
		<image class="w-[100%] rounded-[10rpx] h-[300rpx]" :src="propsData.image" />
	</view>
</template>

<script lang="ts" setup>
	let propsData: object = {}

	onLoad((option) => {
		propsData = {
			...option,
		}
	})
</script>

<style lang="scss" scoped></style>
