<template>
	<view class="context">
		<u-back-top :scroll-top="scrollTop" :mode="mode" :iconStyle="iconStyle" />
		<view class="lost-search">
			<Search />
		</view>
		<view>
			<LostBar />
			<LostBar />
			<LostBar />
			<LostBar />
			<LostBar />
		</view>
	</view>
</template>

<script>
	import LostBar from './components/LostBar.vue'
	export default {
		name: 'lost_found',
		components: {
			LostBar
		},
		data() {
			return {
				scrollTop: 0,
				mode: 'square',
				iconStyle: {
					fontSize: '32rpx',
					color: '#2979ff'
				}
			}
		},
		onPageScroll(e) {
			this.scrollTop = e.scrollTop;
		},
		onLoad() {},
		methods() {},
		computed() {}
	}
</script>

<style lang="scss">
	.context {}

	.lost-search {
		margin-left: 5px;
		margin-right: 5px;
	}
</style>
