<template>
	<view class="context">
		<!-- <u-tabbar :value="index" @change="ChangBar" :fixed="true" :placeholder="true" :safeAreaInsetBottom="true"
			activeColor="#ffce56"> -->
		<!-- <u-tabbar-item text="首页" icon="home" @click="click(0)"></u-tabbar-item> -->

		<!-- <u-tabbar-item text="首页" @click="click(0)">
				<image class="slot-icon" slot="active-icon" src="@/static/icons/tabBar/home.png">
				</image>
				<image class="slot-icon" slot="inactive-icon" src="@/static/icons/tabBar/home-selected.png">
				</image>
			</u-tabbar-item>

			<u-tabbar-item text="校园墙" icon="moments" @click="click(1)"></u-tabbar-item>
			<u-tabbar-item text="消息" icon="chat" @click="click(2)"></u-tabbar-item>
			<u-tabbar-item text="我的" icon="account" @click="click(3)"></u-tabbar-item>
		</u-tabbar> -->

		<u-tabbar :value="index" @change="name => index = name" :fixed="true" :placeholder="true"
			:safeAreaInsetBottom="true">
			<u-tabbar-item text="首页" icon="home" @click="click(0)"></u-tabbar-item>
			<u-tabbar-item text="校园墙" icon="moments" @click="click(1)"></u-tabbar-item>
			<u-tabbar-item text="消息" icon="chat" @click="click(2)"></u-tabbar-item>
			<u-tabbar-item text="我的" icon="account" @click="click(3)"></u-tabbar-item>
		</u-tabbar>
	</view>
</template>

<script>
	export default {
		name: 'TabBar',
		data() {
			return {
				index: 0
			}
		},
		methods: {
			click(index) {
				let pageUrl = 'pages/home/index'
				switch (index) {
					case 0:
						pageUrl = "/pages/home/index"
						break
					case 1:
						pageUrl = "/pages/forum/index"
						break
					case 2:
						pageUrl = "/pages/message/index"
						break
					case 3:
						pageUrl = "/pages/mine/index"
						break
				}
				uni.switchTab({
					url: pageUrl
				});
				this.index = index
			}
		}
	}
</script>

<style lang="scss">
	.slot-icon {
		width: 24px;
		height: 24px;
	}
</style>
