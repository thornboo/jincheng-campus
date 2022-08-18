<template>
	<view class="context">
		<view class="search-bar">
			<Search />
		</view>
		
		<view>
			
		</view>
		
		<view>
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
	import CardWrap from "./components/CardWrap.vue"
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
		},
		methods() {},
		computed() {}
	}
</script>

<style lang="scss">
	// 全局样式
	page {
		background-color: #F1F2F1;
	}

	.context {}
	
	.search-bar {
		margin: 10px;
	}
</style>
