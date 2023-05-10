<!--
 * @FileDescription: 返回顶部组件
 * @Author: thornboo
 * @Date: 
 * @LastEditors: thornboo
 * @LastEditTime: 2023-5-10
-->
<template>
	<view class="context">
		<u-back-top :scroll-top="scrollTop" text="返回"></u-back-top>
	</view>
</template>

<script>
	export default {
		name: 'back-top',
		data() {
			return {
				scrollTop: 0
			}
		},
		onPageScroll(e) {
			this.scrollTop = e.scrollTop;
		}
	};
</script>

<style lang="scss" scoped>
	.context {}
</style>