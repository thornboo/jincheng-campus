<template>
	<view class="container">
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

<style lang="scss">
	.container {}
</style>