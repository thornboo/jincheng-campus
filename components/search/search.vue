<template>
	<view class="container">
		<u-search v-model="inputSearch" placeholder="搜索" shape="square" :showAction="false" :animation="true"
			maxlength="100" bgColor="#dcdfdd">
		</u-search>
	</view>
</template>

<script>
	export default {
		name: 'search',
		data() {
			return {
				inputSearch: ""
			}
		}
	}
</script>

<style lang="scss">
	.container {}
</style>