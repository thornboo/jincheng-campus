<route lang="json5" type="page">
{
	style: { navigationBarTitleText: '失物招领详情页' },
}
</route>

<template>
	<view class="container-page">
		<view class="bg-white">
			<wd-cell-group>
				<wd-cell custom-class="custom-cell-1">
					<template #title>
						<view class="flex items-center">
							<image :src="lostFoundDetail.userAvatar" class="w-[60rpx] h-[60rpx]" />
							<wd-text
								:text="lostFoundDetail.userName"
								color="#000000FF"
								custom-class="title-left-element"
								size="28rpx"
							/>
							<wd-tag
								bg-color="#ffd22e"
								color="#fff"
								custom-class="title-left-element"
							>
								Lv.{{ lostFoundDetail.userLevel }}
							</wd-tag>
						</view>
					</template>
					<wd-button custom-class="custom-style-btn" size="small">
						{{ lostFoundDetail.isFollow ? '取消关注' : '+ 关注' }}
					</wd-button>
				</wd-cell>
				<view class="px-[20rpx]">
					<wd-text
						:text="lostFoundDetail.lostTitle"
						bold
						color="#000000FF"
						size="28rpx"
					/>
				</view>
				<view class="px-[20rpx] py-[10rpx]">
					<wd-text
						:text="lostFoundDetail.content"
						color="#000"
						lineHeight="40rpx"
						size="28rpx"
					/>
				</view>
			</wd-cell-group>
			<view class="mx-[20rpx]">
				<image
					v-for="(img, index) in lostFoundDetail.imgUrl"
					:key="index"
					:src="img"
					class="w-[100%] h-auto py-[5rpx]"
					mode="widthFix"
					@click="previewImage(img)"
					@longpress="onLongPress(img)"
				/>
				<view class="py-[20rpx]">
					<wd-tag bg-color="#FFF" color="#000" size="small" type="primary">
						{{ formatDate(lostFoundDetail.updateTime) }} ·
					</wd-tag>
					<wd-tag bg-color="#FFF" color="#000" size="small" type="primary">
						{{ lostFoundDetail.location || '未知IP' }}
					</wd-tag>
				</view>
			</view>
		</view>

		<view class="bg-white mt-1">
			<wd-cell-group border>
				<wd-cell custom-class="custom-cell-2">
					<template #title>
						<span class="pl-[20rpx]">
							<wd-text color="#000000FF" size="26rpx" text="评论 " />
							<wd-text
								:text="lostFoundDetail.commentCount"
								color="#000000FF"
								size="28rpx"
							/>
						</span>
					</template>
				</wd-cell>
				<wd-cell custom-class="custom-cell-2" />
			</wd-cell-group>
			<view v-for="(item, index) in commentList" :key="index">
				<view class="mx-[20rpx]">
					<view class="flex items-center">
						<image :src="item.userAvatar" class="w-[60rpx] h-[60rpx]" />
						<view class="flex flex-col gap-[1rpx]">
							<span>
								<wd-text
									:text="item.userName"
									color="#000000FF"
									custom-class="title-left-element"
									size="28rpx"
								/>
								<wd-tag
									bg-color="#ffd22e"
									class="ml-1 align-middle"
									color="#fff"
									custom-class="title-left-element"
								>
									Lv.{{ item.userLevel }}
								</wd-tag>
							</span>
							<wd-text
								:text="
									formatDate(item.updateTime) +
									' · ' +
									(item.location ? item.location : '未知IP')
								"
								custom-class="title-left-element"
								size="22rpx"
							></wd-text>
						</view>
					</view>
					<view>
						<wd-text
							:text="item.content"
							color="#6A6A6AFF"
							lineHeight="40rpx"
							size="28rpx"
						></wd-text>
					</view>
				</view>
				<view class="h-[0.1px] w-[100%] bg-[#dedede]"></view>
			</view>
		</view>
	</view>
</template>

<script lang="ts" setup>
	import dayjs from 'dayjs'
	import 'dayjs/locale/zh-cn'
	import relativeTime from 'dayjs/plugin/relativeTime'

	// 扩展插件和设置语言
	dayjs.extend(relativeTime)
	dayjs.locale('zh-cn')

	const propsRef = defineProps({
		detail: {
			type: String,
			default: () => {},
		},
	})

	// 格式化时间
	function formatDate(dateString: string) {
		return dayjs(dateString).fromNow()
	}

	// 失物招领详细信息
	const lostFoundDetail = ref({
		id: '',
		userId: '',
		userName: '',
		userAvatar: '',
		userLevel: '',
		viewCount: '',
		commentCount: '',
		personalitySignature: '',
		phone: '',
		lostTitle: '',
		content: '',
		imgUrl: '',
		location: '',
		category: '',
		createTime: '',
		updateTime: '',
	})

	// 评论列表
	const commentList = [
		{
			userId: '012398172',
			userName: '啊会计师',
			userAvatar: 'https://tc.alcy.cc/i/2024/04/21/662416fbaea0c.webp',
			userLevel: '12',
			content:
				'这本我看完了感觉还行,但是你要知道这个游戏里的 所有东西都是虚拟的,都是阿特拉斯的程序,这个宇 宙是个巨大的计算机',
			createTime: '2024-10-05 14:30:00',
			updateTime: '2024-10-05 14:30:00',
			location: '四川',
		},
		{
			userId: '010192398172',
			userName: '我不是拉克斯',
			userAvatar: 'https://tc.alcy.cc/i/2024/05/24/6650601850fac.webp',
			userLevel: '8',
			content:
				'妥妥的七级文明,这些前置科技都不用看,单论一个能创造和模拟宇宙那肯定就是七级文明',
			createTime: '2024-10-05 14:30:00',
			location: '山西',
		},
		{
			userId: '01019239012372',
			userName: '大土豆',
			userAvatar: 'https://tc.alcy.cc/i/2024/04/21/662416f8e5f83.webp',
			userLevel: '81',
			content: '如果你没有上面的这些配置，默认导入将不起作用，你将继续使用 import * a ',
			createTime: '2024-10-05 14:30:00',
			location: '',
		},
	]

	onLoad((option) => {
		try {
			const parsedDetail = JSON.parse(decodeURIComponent(option.detail))
			lostFoundDetail.value = {
				...parsedDetail,
			}
			console.log(lostFoundDetail)
		} catch (error) {
			console.error('解析详细信息失败:', error)
		}
		formatDate(lostFoundDetail.value.createTime)
	})

	// 图片预览函数
	function previewImage(params: string) {
		uni.previewImage({
			current: params,
			urls: [params],
		})
		console.log(params)
	}

	// 图片长按的操作
	function onLongPress(valueUrl) {
		uni.showActionSheet({
			itemList: ['保存', '转发', '取消'],
			success: (res) => {
				if (res.tapIndex === 0) {
					// 保存
					uni.downloadFile({
						url: valueUrl,
						success: (downloadResult) => {
							if (downloadResult.statusCode === 200) {
								uni.saveImageToPhotosAlbum({
									filePath: downloadResult.tempFilePath,
									success: () => {
										uni.showToast({
											title: '图片保存成功',
											icon: 'success',
										})
									},
								})
							}
						},
					})
				} else if (res.tapIndex === 1) {
					// 转发
					uni.showToast({
						title: '分享功能尚未实现',
						icon: 'none',
					})
				}
			},
		})
	}
</script>

<style lang="scss" scoped>
	.container-page {
		background-color: $uni-bg-color;
	}

	:deep(.title-left-element) {
		margin-left: $uni-margin-base;
	}

	:deep(.custom-cell-1) {
		padding-left: 20rpx !important;
		padding-right: 0 !important;
	}

	:deep(.custom-cell-2) {
		padding-left: 0 !important;
		padding-right: 0 !important;
	}

	:deep(.custom-class-t) {
		padding-left: 0 !important;
	}

	:deep(.custom-style-btn) {
		border-radius: 10rpx !important;
	}

	:deep(.custom-class-divider) {
		color: red;
	}
</style>
