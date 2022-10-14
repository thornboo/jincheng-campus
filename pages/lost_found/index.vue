<template>
	<view class="context">
		<view class="lost-search">
			<Search />
		</view>
		<ReleaseBtn :jumpUrl="jumpUrl" />
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
				},

				// 后期填补上失物招领的页面路径
				jumpUrl: ''
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
