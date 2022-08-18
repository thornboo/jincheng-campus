<template>
	<view class="context">
		<view class="give-like">
			<u-icon name="thumb-up" size="30px" :label="giveLike"></u-icon>
		</view>

		<view class="comments">
			<u-icon name="chat" size="30px" :label="comments"></u-icon>
		</view>

		<view class="trans-pond">
			<u-icon name="share-square" size="30px" :label="transpond"></u-icon>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'CardMark',
		data() {
			return {
				giveLike: "赞",
				comments: "回复",
				transpond: "转发"
			}
		},
		onLoad() {},
		methods() {},
		computed() {}
	}
</script>

<style lang="scss">
	.context {
		display: flex;
		justify-content: space-evenly;
	}

	.give-like {}

	.comments {}

	.trans-pond {}
</style>
