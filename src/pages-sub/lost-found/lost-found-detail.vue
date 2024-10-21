<route lang="json5" type="page">
{
	style: { navigationBarTitleText: '失物招领详情页' },
}
</route>

<template>
	<view>
		<wd-cell-group>
			<wd-cell>
				<template #title>
					<image :src="lostFoundDetail.userAvatar" class="w-8 h-8 pr-2" />
					<wd-text size="26rpx" :text="lostFoundDetail.userName" />
					<wd-tag bg-color="#CACACAFF" class="ml-1 align-middle" color="#FAA507FF" plain>
						Lv.{{ lostFoundDetail.userLevel }}
					</wd-tag>
				</template>
				<wd-button size="small">
					{{ lostFoundDetail.isFollow ? '取消关注' : '+ 关注' }}
				</wd-button>
			</wd-cell>
			<view class="px-[15px] color-[#000000FF]">
				<wd-text bold :text="lostFoundDetail.lostTitle" color="#000000FF" size="28rpx" />
			</view>
			<view class="px-[15px] color-[#000000FF] py-[10rpx]">
				{{ lostFoundDetail.content }}
			</view>
		</wd-cell-group>
		<view class="mx-[30rpx]">
			<image
				v-for="(img, index) in lostFoundDetail.imgUrl"
				:key="index"
				:src="img"
				mode="widthFix"
				class="w-[100%] h-auto py-[5rpx]"
				@click="previewImage(img)"
				@longpress="onLongPress(img)"
			/>
			<view class="py-[5rpx]">
				<wd-text
					class="color-[#000000]"
					size="24rpx"
					:text="formatDate(lostFoundDetail.updateTime)"
				/>
			</view>
		</view>
		<wd-cell-group>
			<wd-cell>
				<template #title>
					<wd-text size="26rpx" text="评论 " color="#000000FF" />
					<wd-text size="26rpx" :text="lostFoundDetail.commentCount" color="#000000FF" />
				</template>
			</wd-cell>
		</wd-cell-group>

		<!-- <wd-cell-group v-for="(item, index) in commentList" :key="index">
			<wd-cell>
				<template #title>
					<image :src="item.userAvatar" class="w-8 h-8 pr-2" />
					<wd-text size="26rpx" :text="item.userName" />
					<wd-tag bg-color="#CACACAFF" class="ml-1 align-middle" color="#FAA507FF" plain>
						Lv.{{ item.userLevel }}
					</wd-tag>
				</template>
				<wd-text size="22rpx" :text="formatDate(item.updateTime)" />
			</wd-cell>
			<view class="px-[15px]">
				<wd-text size="28rpx" :text="item.content" />
			</view>
		</wd-cell-group> -->

		<view v-for="(item, index) in commentList" :key="index" class="mx-[30rpx]">
			<view>
				<image :src="item.userAvatar" class="w-8 h-8 pr-2" />
				<wd-text size="26rpx" :text="item.userName" />
				<wd-tag bg-color="#CACACAFF" class="ml-1 align-middle" color="#FAA507FF" plain>
					Lv.{{ item.userLevel }}
				</wd-tag>
				<wd-text :text="item.location || '未知IP'"></wd-text>
			</view>
			<view>
				<wd-text :text="item.content"></wd-text>
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

<style lang="scss" scoped></style>
