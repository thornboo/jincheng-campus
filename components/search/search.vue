<!--
 * @FileDescription: 搜索全局组件
 * @Author: thornboo
 * @Date: 
 * @LastEditors: thornboo
 * @LastEditTime: 2023-5-10
-->
<template>
	<view class="context">
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
	.context {}
</style>