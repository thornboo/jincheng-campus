<!--
 * @FileDescription: 小程序启动页（logo）
 * @Author: thornboo
 * @Date: 
 * @LastEditors: thornboo
 * @LastEditTime: 2023-5-10
-->
<template>
	<view class="content">
		<image class='backImg' src="@/static/images/index.png"></image>
	</view>
</template>

<script>
	export default {
		name: "index",
		data() {
			return {}
		},
		onLoad() {
			this.hopRouting()
		},
		methods: {
			// 延时2秒跳转首页
			hopRouting: function() {
				setTimeout(function() {
					wx.reLaunch({
						url: '../home/home',
					})
				}, 100) // 开发时设置为0.1秒
			},
		}
	}
</script>

<style lang="scss">
	page {
		height: 100%;
	}

	.content {
		display: flex;
		width: 100%;
		height: 100%;
	}

	.backImg {
		width: 100vw;
		height: 100%;
	}
</style>