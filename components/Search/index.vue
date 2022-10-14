<template>
	<view class="context">
		<u-search v-model="inputSearch" placeholder="搜索" shape="square" :showAction="false" bgColor="#dcdfdd">
		</u-search>
	</view>
</template>

<script>
	export default {
		name: 'Search',
		data() {
			return {
				inputSearch: ""
			}
		}
	}
</script>

<style lang="scss">
	.context {}
</style>
