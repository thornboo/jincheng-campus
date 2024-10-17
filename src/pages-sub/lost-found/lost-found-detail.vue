<route lang="json5" type="page">
{
	style: { navigationBarTitleText: '失物招领详情页' },
}
</route>

<template>
	<view>
		<wd-cell-group class="px-2">
			<wd-cell>
				<template #title>
					<image :src="temp.userAvatar" class="w-8 h-8 pr-2" />
					<wd-text :text="temp.userName"></wd-text>
				</template>
				<template #default>
					<wd-button size="small">关注</wd-button>
				</template>
			</wd-cell>
			<wd-cell>
				<template #title>
					<wd-text :text="temp.lostTitle" color="#000000FF" size="30rpx" />
				</template>
			</wd-cell>
		</wd-cell-group>
		<wd-cell-group class="px-2" use-slot>
			<template #title>
				<wd-text bold size="30rpx" text="评论" type="primary" />
			</template>
		</wd-cell-group>
	</view>
</template>

<script lang="ts" setup>
	const propsRef = defineProps({
		detail: {
			type: Object,
			default: () => {},
		},
	})

	const temp = ref({
		id: '',
		userName: '',
		userAvatar: '',
		phone: '',
		lostTitle: '',
	})

	onLoad((option) => {
		try {
			const parsedDetail = JSON.parse(decodeURIComponent(option.detail))
			temp.value = {
				...parsedDetail,
			}
			console.log(temp)
		} catch (error) {
			console.error('解析详细信息失败:', error)
		}
	})
</script>

<style lang="scss" scoped></style>
