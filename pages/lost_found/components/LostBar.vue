<template>
	<view class="context">
		<view class="user-avatar">
			<AvaTar />
		</view>

		<view class="user-name">
			<u--text mode="name" :bold="false" size="16" :text="userName"></u--text>
		</view>

		<view class="release-time">
			<u--text mode="date" size="10" :text="releaseTime"></u--text>
		</view>

		<view class="lost-items-text">
			<u--text mode="text" lines="3" :text="dataText"></u--text>
		</view>

		<view class="lost-items-picture">
			<u--image :showLoading="true" :src="pictureSrc" width="60px" height="60px" @click="click"></u--image>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'lostbar',
		data() {
			return {
				userName: '摘星星',
				releaseTime: '1612959739',
				dataText: '于2011年4月11日晚上十点半左右在阳光文化广场拾到一部自行车，请失主移步到服务中心（即管理处）认领',
				pictureSrc: 'https://cdn.uviewui.com/uview/album/1.jpg'
			}
		},
		onLoad() {},
		methods() {},
		computed() {}
	}
</script>

<style lang="scss">
	.context {
		background-color: #909090;
		margin: 5px;
		border-radius: 5px;
		overflow: hidden;
	}

	.user-avatar {
		position: absolute;
		margin-top: 10px;
		margin-left: 10px;
	}

	.user-name {
		position: absolute;
		margin-top: 8px;
		margin-left: 50px;
	}

	.release-time {
		position: absolute;
		margin-top: 30px;
		margin-left: 50px;
	}

	.lost-items-text {
		margin-top: 50px;
		margin-left: 5px;
		margin-right: 5px;
	}

	.lost-items-picture {
		margin-left: 5px;
		padding-bottom: 5px;
	}
</style>
