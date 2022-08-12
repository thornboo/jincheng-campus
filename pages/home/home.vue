<template>
	<view>
		<view class="swiper-container base-container">
			<u-swiper :list="list" keyName="image" showTitle :autoplay="false" circular></u-swiper>
		</view>
		<view class="notice-container base-container"></view>
		<view class="grid-container"></view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list: [{
						image: require('@/static/test/swiper1.png'),
						title: '标题1',
					},
					{
						image: require('static/test/swiper2.png'),
						title: '标题2'
					},
					{
						image: require('static/test/swiper3.png'),
						title: '标题3'
					}
				]
			}
		},
		onLoad() {}
	}
</script>

<style lang="scss">
	page {}

	.base-container {}

	.swiper-container {}

	.notice-container {}

	.grid-container {}
</style>
