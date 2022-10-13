<template>
	<view class="context">
		<u-back-top :scroll-top="scrollTop" text="返回"></u-back-top>
	</view>
</template>

<script>
	export default {
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
