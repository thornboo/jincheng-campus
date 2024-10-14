<script lang="ts" setup>
	import { onLaunch, onShow, onHide } from '@dcloudio/uni-app'

	onLaunch(() => {
		console.log('App Launch')
	})
	onShow(() => {
		console.log('App Show')
	})
	onHide(() => {
		console.log('App Hide')
	})
</script>

<style lang="scss">
	/* stylelint-disable selector-type-no-unknown */
	button::after {
		border: none;
	}

	swiper,
	scroll-view {
		flex: 1;
		height: 100%;
		overflow: hidden;
	}

	image {
		height: 100%;
		vertical-align: middle;
		width: 100%;
	}

	// 单行省略，优先使用 unocss: text-ellipsis
	.ellipsis {
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}

	// 两行省略
	.ellipsis-2 {
		-webkit-box-orient: vertical;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		overflow: hidden;
		text-overflow: ellipsis;
	}

	// 三行省略
	.ellipsis-3 {
		-webkit-box-orient: vertical;
		display: -webkit-box;
		-webkit-line-clamp: 3;
		overflow: hidden;
		text-overflow: ellipsis;
	}
</style>
