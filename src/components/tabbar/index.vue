<template>
	<view>
		<wd-tabbar v-model="tabbar">
			<wd-tabbar-item icon="home" title="首页">
				<template #icon>
					<wd-img
						height="40rpx"
						round
						src="../../static/tabbar/home.png"
						width="40rpx"
					></wd-img>
				</template>
			</wd-tabbar-item>
			<wd-tabbar-item icon="forum" title="校园墙">
				<template #icon>
					<wd-img
						height="40rpx"
						round
						src="../../static/tabbar/forum.png"
						width="40rpx"
					></wd-img>
				</template>
			</wd-tabbar-item>
			<wd-tabbar-item icon="message" title="消息">
				<template #icon>
					<wd-img
						height="40rpx"
						round
						src="../../static/tabbar/message.png"
						width="40rpx"
					></wd-img>
				</template>
			</wd-tabbar-item>
			<wd-tabbar-item icon="mine" title="我的">
				<template #icon>
					<wd-img
						height="40rpx"
						round
						src="../../static/tabbar/mine.png"
						width="40rpx"
					></wd-img>
				</template>
			</wd-tabbar-item>
		</wd-tabbar>
	</view>
</template>

<script lang="ts" setup>
const tabbar = ref(1)
</script>

<style lang="scss" scoped></style>
