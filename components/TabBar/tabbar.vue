<template>
	<view>
		<u-tabbar :value="current?current:0" @change="changeTab" :fixed="true" :safeAreaInsetBottom="true"
			:border="true" :placeholder="true" activeColor="#EA8831">
			<u-tabbar-item v-for="(item,index) in list" :key="index" :text="item.text">
				<image class="u-page__item__slot-icon" slot="inactive-icon" :src="item.iconPath"></image>
				<image class="u-page__item__slot-icon" slot="active-icon" :src="item.selectedIconPath"></image>
			</u-tabbar-item>
		</u-tabbar>
	</view>
</template>

<script>
	export default {
		name: 'tabar',
		props: {
			current: Number
		},
		data() {
			return {
				list: [{
						pagePath: "pages/home/home",
						iconPath: "../../static/icons/tab-bar/home.png",
						selectedIconPath: "../../static/icons/tab-bar/home-selected.png",
						text: '首页',
						customIcon: false
					},
					{
						pagePath: "pages/forum/forum",
						iconPath: "../../static/icons/tab-bar/friends-circle.png",
						selectedIconPath: "../../static/icons/tab-bar/friends-circle-selected.png",
						text: '校园墙',
						customIcon: false
					},
					{
						pagePath: "pages/message/message",
						iconPath: "../../static/icons/tab-bar/comment.png",
						selectedIconPath: "../../static/icons/tab-bar/comment-selected.png",
						text: '消息',
						customIcon: false
					},
					{
						pagePath: "pages/mine/mine",
						iconPath: "../../static/icons/tab-bar/user.png",
						selectedIconPath: "../../static/icons/tab-bar/user-selected.png",
						text: '我的',
						customIcon: false
					}
				],
			}
		},
		methods: {
			changeTab(e) {
				uni.switchTab({
					url: '/' + this.list[e].pagePath,
				})
			}
		}
	}
</script>

<style scoped>
	.u-page__item__slot-icon {
		width: 40rpx;
		height: 40rpx;
	}
</style>