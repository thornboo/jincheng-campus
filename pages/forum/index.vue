<template>
	<view class="context">
		<view class="search-bar">
			<Search />
		</view>

		<view>

		</view>

		<view>
			<!-- 测试数据缓存 -->
			<CardWrap />
			<CardWrap />
			<CardWrap />
			<CardWrap />
			<CardWrap />
			<CardWrap />
		</view>
		<view>
			<TabBar />
		</view>
	</view>
</template>

<script>
	import CardWrap from './components/CardWrap.vue'
	export default {
		name: 'forum',
		components: {
			CardWrap
		},
		data() {
			return {}
		},
		onLoad() {
			uni.hideTabBar()
		}
	}
</script>

<style lang="scss">
	// 全局样式
	page {
		background-color: #F1F2F1;
		font-family: 'PingFang SC';
	}

	@font-face {
		font-family: 'PingFang';
		src: url('~@/static/font/PingFang Bold.ttf') format('truetype');
	}

	.context {
		font-family: PingFang;
	}

	.search-bar {
		margin: 10px;
	}
</style>
