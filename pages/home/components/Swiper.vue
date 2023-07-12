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
				height="300rpx" circular @click="swiperClick">
			</u-swiper>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'swiper',
		data() {
			return {
				// 轮播图数据(测试数据)
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
		},
		methods: {
			// 点击swiper跳转触发
			swiperClick(e) {
				uni.navigateTo({
					url: "swiperInfo/swiperInfo" + e,
					success: (res) => {
						console.log("success", res)
					},
					fail: (err) => {
						console.log("fail", err)
					}
				})
				return console.log(e)
			}
		},
	}
</script>

<style lang="scss" scoped>
	.content {}

	.swiper-container {}
</style>