<template>
	<view>
		<wd-fab :direction="direction" :disabled="disabled" :position="position" :type="type">
			<wd-button
				v-for="(item, index) in titleList"
				:key="index"
				:disabled="disabled"
				custom-class="custom-button"
				round
				type="primary"
				@click="handleClick(item)"
			>
				<wd-icon name="star" size="40rpx"></wd-icon>
			</wd-button>
		</wd-fab>
		<!--单独悬浮按钮（不弹出）-->
		<!--<wd-fab :expandable="false" position="right-bottom">-->
		<!--	<template #trigger>-->
		<!--		<wd-button custom-class="custom-button-1" type="primary" @click="handleClick1">-->
		<!--			<wd-icon name="add" size="40rpx"></wd-icon>-->
		<!--		</wd-button>-->
		<!--	</template>-->
		<!--</wd-fab>-->
	</view>
</template>

<script lang="ts" setup>
	const type = ref<'primary' | 'success' | 'info' | 'warning' | 'error' | 'default'>('primary')
	const position = ref<'left-top' | 'right-top' | 'left-bottom' | 'right-bottom'>('right-bottom')
	const direction = ref<'top' | 'right' | 'bottom' | 'left'>('top')
	const disabled = ref<boolean>(false)

	// 泛型声明式
	const propsRef = defineProps<{
		titleList: string[]
	}>()

	// 选项式 API 对象形式
	// const propsRef = defineProps({
	// 	titleList: {
	// 		type: Array,
	// 		default: () => [],
	// 	},
	// })

	// 弹出按钮跳转事件
	const handleClick = (param: string) => {
		uni.navigateTo({
			url: `/pages-sub/lost-found/lost-form?title=${param}`,
			success: () => {
				console.log('success')
			},
			fail: () => {
				console.log('success')
			},
		})
	}

	const handleClick1 = (param: string) => {
		console.log('点击了自定义触发器')
		uni.navigateTo({
			url: `/pages-sub/lost-found/lost-form?title=${param}`,
			success() {
				console.log('success')
			},
			fail() {
				console.log('success')
			},
		})
	}
</script>

<style lang="scss" scoped>
	:deep(.custom-button) {
		border-radius: 34rpx !important;
		box-sizing: border-box;
		height: 64rpx !important;
		margin: 8rpx;
		min-width: auto !important;
		width: 64rpx !important;
	}

	:deep(.custom-radio) {
		height: 64rpx !important;
		line-height: 64px !important;
	}

	:deep(.custom-button-1) {
		border-radius: 30rpx !important;
		box-sizing: border-box;
		height: 80rpx !important;
		margin: 8rpx;
		min-width: auto !important;
		width: 80rpx !important;
	}
</style>
