<!--
 * @FileDescription: 头像展示组件
 * @Author: thornboo
 * @Date: 
 * @LastEditors: thornboo
 * @LastEditTime: 2023-5-10
-->
<template>
	<view class="context">
		<u-avatar :src="src" text="橙" fontSize="18" size="30px" randomBgColor shape="circle"></u-avatar>
	</view>
</template>

<script>
	export default {
		name: 'avatar',
		data() {
			return {
				src: "@/static/images/headPortrait.jpg"
			}
		}
	}
</script>

<style lang="scss">
	.context {}
</style>