<!--
 * @FileDescription: 失物招领页面
 * @Author: thornboo
 * @Date: 
 * @LastEditors: thornboo
 * @LastEditTime: 2023-5-10
-->
<template>
	<view class="context">
		<view class="lost-search">
			<search />
		</view>
		<release-btn :jumpUrl="jumpUrl" />
		<view>
			<lost-bar />
			<lost-bar />
			<lost-bar />
			<lost-bar />
			<lost-bar />
		</view>
	</view>
</template>

<script>
	import LostBar from './components/lost-bar.vue'
	export default {
		name: 'lost_found',
		components: {
			'lost-bar': LostBar
		},
		data() {
			return {
				scrollTop: 0,
				mode: 'square',
				iconStyle: {
					fontSize: '32rpx',
					color: '#2979ff'
				},

				// 后期填补上失物招领的页面路径
				jumpUrl: '/pages/lost_found/components/lost_form'
			}
		},
		onPageScroll(e) {
			this.scrollTop = e.scrollTop;
		}
	}
</script>

<style lang="scss">
	.context {}

	.lost-search {
		margin-left: 5px;
		margin-right: 5px;
	}
</style>