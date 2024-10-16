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

			<!--<wd-button-->
			<!--	:disabled="disabled"-->
			<!--	custom-class="custom-button"-->
			<!--	round-->
			<!--	type="primary"-->
			<!--	@click="handleClick()"-->
			<!--&gt;-->
			<!--	<wd-icon name="star" size="40rpx"></wd-icon>-->
			<!--</wd-button>-->
			<!--<wd-button-->
			<!--	:disabled="disabled"-->
			<!--	custom-class="custom-button"-->
			<!--	round-->
			<!--	type="primary"-->
			<!--	@click="handleClick('拾物发布')"-->
			<!--&gt;-->
			<!--	<wd-icon name="star" size="40rpx"></wd-icon>-->
			<!--</wd-button>-->
		</wd-fab>
	</view>
</template>

<script lang="ts" setup>
	const type = ref<'primary' | 'success' | 'info' | 'warning' | 'error' | 'default'>('primary')
	const position = ref<'left-top' | 'right-top' | 'left-bottom' | 'right-bottom'>('right-bottom')
	const direction = ref<'top' | 'right' | 'bottom' | 'left'>('top')
	const disabled = ref<boolean>(false)
	const titleList = ref(['11', '22'])

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

	:deep(.custom-radio) {
		height: 32px !important;
		line-height: 32px !important;
	}
</style>
