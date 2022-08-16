<template>
	<view class="context">
		<u-search v-model="inputSearch" placeholder="搜索" shape="square" :showAction="false"></u-search>
	</view>
</template>

<script>
	export default {
		name: 'Search',
		data() {
			return {
				inputSearch: ""
			}
		},
		onLoad() {},
		methods() {},
		computed() {}
	}
</script>

<style lang="scss">
	.context {
		margin: 10px;
	}
</style>
