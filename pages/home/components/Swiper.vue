<template>
	<view class="context">
		<view class="swiper-container base-container">
			<u-swiper :list="swiperList" autoplay="true" indicator="true" keyName="image" showTitle height="150px"
				:radius="radius" circular>
			</u-swiper>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'Swiper',
		data() {
			return {
				swiperList: [{
						image: require('@/static/test/swiper1.png'),
						title: '出新版本啦',
					},
					{
						image: require('@/static/test/swiper2.png'),
						title: '关于XX活动的公告'
					},
					{
						image: require('@/static/test/swiper3.png'),
						title: '欢迎同学们购买！'
					}
				],
				radius: "10px",
			}
		}
	}
</script>

<style lang="scss">
	.content {}

	.swiper-container {}
</style>
