<template>
	<view class="context">
		轮播图的具体信息
	</view>
</template>

<script>
	export default {
		name: 'swiperInfo0',
		data() {
			return {}
		},
		onShow() {},
		onReady() {
			// 导航条样式
			uni.setNavigationBarColor({
				frontColor: '#000000',
				backgroundColor: '#caca00',
				animation: {
					duration: 0,
					timingFunc: 'easeIn'
				}
			});
		},
		onLoad() {
			// 导航条标题
			uni.setNavigationBarTitle({
				title: 'swiperInfo0_title'
			});
		},
		methods() {},
		computed() {}
	}
</script>

<style lang="scss">
	.context {}
</style>