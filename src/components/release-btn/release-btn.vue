<template>
	<view>
		<!--<wd-fab-->
		<!--	:direction="direction"-->
		<!--	:disabled="disabled"-->
		<!--	:expandable="false"-->
		<!--	:position="position"-->
		<!--	:type="type"-->
		<!--&gt;-->
		<!--	<wd-button-->
		<!--		v-for="(item, index) in fabListData"-->
		<!--		:key="index"-->
		<!--		:disabled="disabled"-->
		<!--		custom-class="custom-button"-->
		<!--		round-->
		<!--		type="icon"-->
		<!--		@click="handleClick(item.name)"-->
		<!--	>-->
		<!--		&lt;!&ndash;<wd-icon :name="item.icon" size="40rpx" />&ndash;&gt;-->
		<!--	</wd-button>-->
		<!--</wd-fab>-->
		<wd-fab :expandable="false" custom-class="custom-fab" position="right-bottom">
			<template #trigger>
				<wd-button icon="add" type="primary" @click="handleClick"></wd-button>
			</template>
		</wd-fab>
	</view>
</template>

<script lang="ts" setup>
	import { onLoad } from '@dcloudio/uni-app'

	const type = ref<'primary' | 'success' | 'info' | 'warning' | 'error' | 'default'>('primary')
	const position = ref<'left-top' | 'right-top' | 'left-bottom' | 'right-bottom'>('right-bottom')
	const direction = ref<'top' | 'right' | 'bottom' | 'left'>('top')
	const disabled = ref<boolean>(false)

	type FabItem = {
		name: string
		icon: string
	}

	// 泛型声明式
	const propsRef = defineProps<{
		fabListData: FabItem[]
	}>()

	onLoad(() => {
		console.log('fab-btn-data：', propsRef.fabListData)
	})

	// 选项式 API 对象形式（第二种 typescript props 写法）
	// const propsRef = defineProps({
	// 	titleList: {
	// 		type: Array,
	// 		default: () => [],
	// 	},
	// })

	// 悬浮按钮内部点击跳转
	const handleClick = (param: string) => {
		uni.navigateTo({
			url: `/lost-found/lost-form?title=${param}`,
			success: (success: any) => {
				console.log(success)
			},
			fail: (error: any) => {
				console.log(error)
			},
		})
	}
</script>

<style lang="scss" scoped>
	:deep(.custom-button) {
		border-radius: 16px !important;
		box-sizing: border-box;
		height: 32px !important;
		margin: 8rpx;
		min-width: auto !important;
		width: 32px !important;
	}

	:deep(.custom-fab) {
		width: 40rpx !important;
	}
</style>
