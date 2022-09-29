<template>
	<view class="context">
		<u-grid :border="false" @click="click" col="4">
			<u-grid-item v-for="(baseListItem,baseListIndex) in baseList" :key="baseListIndex">
				<u-icon :customStyle="{paddingTop:20+'rpx'}" :name="baseListItem.name" :size="22"></u-icon>
				<text class="grid-text">{{baseListItem.title}}</text>
			</u-grid-item>
		</u-grid>
	</view>
</template>

<script>
	export default {
		name: 'app',
		data() {
			return {
				baseList: [{
						name: 'photo',
						title: '回复我的'
					},
					{
						name: 'photo',
						title: '@我'
					},
					{
						name: 'photo',
						title: '收到的赞'
					},
					{
						name: 'photo',
						title: '系统通知'
					},
				]
			}
		},
		onLoad() {},
		methods() {},
		computed() {}
	}
</script>

<style lang="scss">
	.context {}
</style>
