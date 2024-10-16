<route lang="json5" type="page">
{
	style: { navigationBarTitleText: '失物招领' },
}
</route>

<template>
	<view>我是失物招领</view>
	<ReleaseBtn />
</template>

<script lang="ts" setup>
	import ReleaseBtn from '@/components/release-btn/release-btn.vue'

	const titleList = ref(['失物登记', '招领登记'])
</script>

<style lang="scss" scoped></style>
