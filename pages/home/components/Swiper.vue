<!--
 * @FileDescription: 首页轮播图组件
 * @Author: thornboo
 * @Date: 
 * @LastEditors: thornboo
 * @LastEditTime: 2023-5-10
-->
<template>
	<view class="context">
		<view class="swiper-container">
			<u-swiper :list="swiperList" autoplay="true" indicator="true" keyName="image" showTitle :radius="radius"
			height="300rpx"
				circular>
			</u-swiper>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'swiper',
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
				radius: "20rpx"
			}
		}
	}
</script>

<style lang="scss" scoped>
	.content {}

	.swiper-container {}
</style>