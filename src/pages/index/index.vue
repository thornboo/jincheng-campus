<!--
使用 type="home" 属性设置首页，其他页面不需要设置，默认为page；推荐使用json5，更强大，且允许注释。
route-block 代码块则可以配置页面相关信息，这些信息会自动同步到 page.json，无需切换到 page.json 进行配置。
 -->
<route lang="json5" type="index">
{
	style: {
		navigationStyle: 'custom',
		navigationBarTitleText: '金橙校园',
	},
}
</route>
<template>
	<view class="container">
		<image class="back-image" src="@img/index.png" />
	</view>
</template>
<script lang="ts" setup>
	setTimeout(() => {
		uni.reLaunch({
			url: '/pages/home/home',
		})
	}, 100) // TODO: 生产环境设置为3或者5秒
</script>
<style lang="scss" scoped>
	page {
		height: 100%;
	}

	.container {
		display: flex;
		height: 100%;
		width: 100%;
	}

	.back-image {
		height: 100vh; // vh表示视口高度的百分比
		width: 100%;
	}
</style>
