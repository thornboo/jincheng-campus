<template>
	<view>
		<wd-tabbar v-model="currentTab" :fixed="true" @change="switchTab(currentTab)">
			<wd-tabbar-item icon="home" name="home" title="首页">
				<template #icon>
					<wd-img
						height="40rpx"
						round
						src="../../static/tabbar/home.png"
						width="40rpx"
					></wd-img>
				</template>
			</wd-tabbar-item>
			<wd-tabbar-item icon="forum" name="forum" title="校园墙">
				<template #icon>
					<wd-img
						height="40rpx"
						round
						src="../../static/tabbar/forum.png"
						width="40rpx"
					></wd-img>
				</template>
			</wd-tabbar-item>
			<wd-tabbar-item icon="message" name="message" title="消息">
				<template #icon>
					<wd-img
						height="40rpx"
						round
						src="../../static/tabbar/message.png"
						width="40rpx"
					></wd-img>
				</template>
			</wd-tabbar-item>
			<wd-tabbar-item icon="mine" name="mine" title="我的">
				<template #icon>
					<wd-img
						height="40rpx"
						round
						src="../src/static/tabbar/mine.png"
						width="40rpx"
					></wd-img>
				</template>
			</wd-tabbar-item>
		</wd-tabbar>
	</view>
</template>

<script lang="ts" setup>
	const currentTab = ref<string>('home')

	function switchTab(index: string) {
		const pageMap = {
			home: '/pages/home/home',
			forum: '/pages/forum/forum',
			message: '/pages/message/message',
			mine: '/pages/mine/mine',
		}
		const path = pageMap[index]
		if (path) {
			uni.switchTab({
				url: path,
				success: () => {
					currentTab.value.changePath(index)
				},
			})
		} else {
			console.error('跳转页面失败：' + index)
		}
	}
</script>

<style lang="scss" scoped></style>
