<route lang="json5" type="page">
{
	style: { navigationBarTitleText: '轮播图详情页面' },
}
</route>

<template>
	<view class="p-2">
		<image :src="propsData.images" class="w-[100%] rounded-[10rpx] h-[300rpx]" />
	</view>
</template>

<script lang="ts" setup>
	const propsData: object = ref({
		images: String,
	})

	onLoad((option) => {
		propsData.value = {
			images: import(option.images),
		}
	})
</script>

<style lang="scss" scoped></style>
