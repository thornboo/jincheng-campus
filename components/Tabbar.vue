<template>
	<view class="context">
		<u-tabbar :value="index" @change="change" :fixed="true" :placeholder="true" :safeAreaInsetBottom="true" activeColor="#00BB30">
			<u-tabbar-item text="首页" icon="home" @click="click(0)"></u-tabbar-item>
			<u-tabbar-item text="校园墙" icon="moments" @click="click(1)"></u-tabbar-item>
			<u-tabbar-item text="消息" icon="chat" @click="click(2)"></u-tabbar-item>
			<u-tabbar-item text="我的" icon="account" @click="click(3)"></u-tabbar-item>
		</u-tabbar>
	</view>
</template>

<script>
	export default {
		name: 'Tabbar',
		data() {
			return {
				index: 0
			}
		},
		methods: {
			change(name) {},

			click(index) {
				if (this.index == index) {
					uni.startPullDownRefresh()
					// 2秒后强制停止刷新
					setTimeout(function() {
						uni.stopPullDownRefresh()
					}, 2000)
				} else {
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
	}
</script>

<style lang="scss">
</style>
