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
		data() {
			return {
				swiperList: [{
						image: require('@/static/test/swiper1.png'),
						title: '谁念西风独自凉',
					},
					{
						image: require('@/static/test/swiper2.png'),
						title: '萧萧黄叶闭疏窗'
					},
					{
						image: require('@/static/test/swiper3.png'),
						title: '沉思往事立残阳'
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
