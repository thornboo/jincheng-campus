<route lang="json5" type="page">
{
	style: { navigationBarTitleText: '闲置交易' },
}
</route>

<template>
	<!--<view>闲置交易</view>-->
	<view :class="{ 'sticky-view': isSticky }">
		<!--<wd-tabs v-model="tab" @change="handleTabs">-->
		<!--	<block v-for="(item, index) in tabList" :key="index">-->
		<!--		<wd-tab :name="`${item.name}`" :title="`${item.name}`">-->
		<!--			<view>{{ item.content }}</view>-->
		<!--		</wd-tab>-->
		<!--	</block>-->
		<!--</wd-tabs>-->
		<wd-tabs v-model="tab" @change="handleTabs">
			<wd-tab name="正文" title="正文"></wd-tab>
			<wd-tab name="评论" title="评论"></wd-tab>
		</wd-tabs>
	</view>
	<swiper :current="current" :duration="200" class="swiper" @change="handleSwiperChange">
		<swiper-item>
			<view class="swiper-item bg-red">A</view>
		</swiper-item>
		<swiper-item>
			<view class="swiper-item bg-green">B</view>
		</swiper-item>
	</swiper>
</template>

<script lang="ts" setup>
	const tab = ref<number>(0)
	const current = ref(0)
	const isSticky = ref(true)
	const scrollTop = ref(0)

	const tabList = [
		{ name: '标签A', content: 'A' },
		{ name: '标签B', content: 'B' },
	]

	function handleTabs(e) {
		current.value = e.index
		console.log('当前下标:' + e.index)
		console.log('名称:' + e.name)
		console.log('tabs值：' + tab.value + '，current值：' + current.value)
	}

	function handleSwiperChange(e) {
		tab.value = e.detail.current
		console.log('当前索引:' + e.detail.current)
		console.log('触发来源:' + e.detail.source)
		console.log('tabs值：' + tab.value + '，current值：' + current.value)
	}

	onPageScroll((e) => {
		e.scrollTop > 200 ? (isSticky.value = false) : (isSticky.value = true)
		console.log('当前滚动距离：' + e.scrollTop)
	})
</script>

<style lang="scss" scoped>
	.content {
		line-height: 120px;
		text-align: center;
	}

	.sticky-view {
		position: sticky;
		top: 0;
		z-index: 999;
	}

	// 下面是swiper的样式
	.swiper {
		height: 4000rpx;
	}

	.swiper-item {
		display: block;
		height: 4000rpx;
		line-height: 300rpx;
		text-align: center;
	}

	.swiper-list {
		margin-bottom: 0;
		margin-top: 40rpx;
	}

	.uni-common-mt {
		margin-top: 60rpx;
		position: relative;
	}

	.info {
		position: absolute;
		right: 20rpx;
	}

	.uni-padding-wrap {
		padding: 0 100rpx;
		width: 550rpx;
	}
</style>
