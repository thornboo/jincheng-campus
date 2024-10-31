<route lang="json5" type="page">
{
	style: { navigationBarTitleText: '失物招领详情页' },
}
</route>

<template>
	<view
		:style="{
			overflow: bottom === 0 ? 'none' : 'hidden',
			height: bottom === 0 ? 'fit-content' : '100vh',
		}"
		class="container-page"
	>
		<wd-tabs
			v-model="tab"
			:animated="true"
			:duration="500"
			:lineWidth="24"
			:sticky="true"
			:swipeable="true"
			color="#000"
			custom-class="custom-tabs"
		>
			<wd-tab name="lostFoundText" title="正文">
				<view aria-label="长下划线" class="h-[0.1px] w-[100%] bg-[#dedede] my-1"></view>
				<view class="bg-white">
					<wd-cell-group>
						<wd-cell custom-class="custom-cell-1">
							<template #title>
								<view class="flex items-center">
									<image
										:src="lostFoundDetail.userAvatar"
										class="w-[60rpx] h-[60rpx]"
									/>
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
						<view class="py-[20rpx] flex justify-between">
							<span>
								<wd-tag bg-color="#FFF" color="#000" size="small" type="primary">
									{{ formatDate(lostFoundDetail.updateTime) }} ·
								</wd-tag>
								<wd-tag bg-color="#FFF" color="#000" size="small" type="primary">
									{{ lostFoundDetail.location || '未知IP' }}
								</wd-tag>
							</span>
							<span>
								<wd-tag bg-color="#FFF" color="#000" size="small" type="primary">
									{{ lostFoundDetail.viewCount }}人看过
								</wd-tag>
							</span>
						</view>
					</view>
				</view>
				<wd-gap custom-class="custom-wd-gap"></wd-gap>
				<view class="bg-white">
					<wd-cell-group border custom-class="custom-cell-group-1">
						<wd-cell custom-class="custom-title-class-1">
							<template #title>
								<view>
									<wd-text color="#000000FF" size="26rpx" text="评论 " />
									<wd-text
										:text="lostFoundDetail.commentCount"
										color="#000000FF"
										size="28rpx"
									/>
								</view>
							</template>
							<wd-text
								:text="commentSorting"
								prefix="↓ "
								size="26rpx"
								@click="switchBtnText"
							></wd-text>
						</wd-cell>
						<view class="h-[0.1px] w-[100%] bg-[#dedede] my-1"></view>
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
							<view class="pl-[70rpx]">
								<wd-text
									:text="item.content"
									color="#6A6A6AFF"
									lineHeight="40rpx"
									size="28rpx"
								></wd-text>
							</view>
						</view>
						<view class="h-[0.1px] w-[100%] bg-[#dedede] my-1"></view>
					</view>
				</view>
			</wd-tab>
			<wd-tab name="lostFoundComment" title="评论">
				<wd-gap custom-class="custom-wd-gap"></wd-gap>
				<view class="bg-white">
					<wd-cell-group border custom-class="custom-cell-group-1">
						<wd-cell custom-class="custom-title-class-1">
							<template #title>
								<view>
									<wd-text color="#000000FF" size="26rpx" text="评论 " />
									<wd-text
										:text="lostFoundDetail.commentCount"
										color="#000000FF"
										size="28rpx"
									/>
								</view>
							</template>
							<wd-text
								:text="commentSorting"
								prefix="↓ "
								size="26rpx"
								@click="switchBtnText"
							></wd-text>
						</wd-cell>
						<view
							aria-label="长下划线"
							class="h-[0.1px] w-[100%] bg-[#dedede] my-1"
						></view>
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
							<view class="pl-[70rpx]">
								<wd-text
									:text="item.content"
									color="#6A6A6AFF"
									lineHeight="40rpx"
									size="28rpx"
								></wd-text>
							</view>
						</view>
						<view class="h-[0.1px] w-[100%] bg-[#dedede] my-1"></view>
					</view>
				</view>
			</wd-tab>
		</wd-tabs>

		<!--评论输入框-->
		<!--<view-->
		<!--	class="flex flex-row items-end justify-center gap-col-[24rpx] bg-[#b3b3b3ff] fixed left-0 right-0 p-[10rpx] pb-[40rpx]"-->
		<!--	:style="{ bottom: `${bottom}px` }"-->
		<!--&gt;-->
		<!--	<view-->
		<!--		style="-->
		<!--			min-height: 72rpx;-->
		<!--			background-color: #fff;-->
		<!--			border-radius: 10rpx;-->
		<!--			width: 75%;-->
		<!--			overflow: hidden;-->
		<!--			box-sizing: border-box;-->
		<!--			max-height: 180rpx;-->
		<!--			overflow-y: auto;-->
		<!--		"-->
		<!--	>-->
		<!--		<textarea-->
		<!--			v-model="commentInput"-->
		<!--			:auto-height="true"-->
		<!--			:maxlength="1000"-->
		<!--			:fixed="true"-->
		<!--			:adjust-position="false"-->
		<!--			placeholder="参与评论"-->
		<!--			style="width: 100%; min-height: 36rpx; height: fit-content; font-size: 14px"-->
		<!--			@input="handleCommentChange"-->
		<!--			@keyboardheightchange="handleKeyboardheightchange"-->
		<!--		></textarea>-->
		<!--	</view>-->
		<!--	<wd-button custom-class="custom-comment-btn" @click="handleCommentChange">-->
		<!--		发送-->
		<!--	</wd-button>-->
		<!--</view>-->
		<!--聊天评论输入框：第二种写法-->
		<!--<wd-textarea-->
		<!--	v-model="commentInput"-->
		<!--	:maxlength="500"-->
		<!--	auto-height-->
		<!--	custom-class="custom-textarea"-->
		<!--	custom-textarea-class="custom-textarea-external"-->
		<!--	custom-textarea-container-class="custom-textarea-container"-->
		<!--	disable-default-padding-->
		<!--	no-border-->
		<!--	placeholder="参与评论"-->
		<!--	placeholderStyle="line-height: 48px;min-height: 24px;"-->
		<!--	@change="textareaChange"-->
		<!--	@linechange="lineChange"-->
		<!--/>-->
	</view>
</template>

<script lang="ts" setup>
	import dayjs from 'dayjs'
	import 'dayjs/locale/zh-cn'
	import relativeTime from 'dayjs/plugin/relativeTime'

	// 扩展插件和设置语言
	dayjs.extend(relativeTime)
	dayjs.locale('zh-cn')

	const bottom = ref(0)

	const propsRef = defineProps({
		detail: {
			type: String,
			default: () => {},
		},
	})

	const tab = ref<number>(0)

	// 格式化时间
	function formatDate(dateString: string) {
		return dayjs(dateString).fromNow()
	}

	// 评论排序
	const commentSorting = ref('最热')
	const switchBtnText = () => {
		commentSorting.value = commentSorting.value === '最热' ? '最新' : '最热'
	}

	// 监听评论输入框的高度
	function lineChange() {
		console.log('监听输入框行数变化')
	}

	function textareaChange() {
		console.log('监听输入框修改事件')
	}

	// 评论输入框相关
	const commentInput = ref<string>('')

	function handleCommentChange() {
		console.log('评论了：' + commentInput.value)
	}

	function handleKeyboardheightchange(e) {
		console.log(e)
		bottom.value = e.detail.height
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

	:deep(.custom-tabs) {
	}

	// 直接作用在tabs的内置样式上面来修改间距
	:deep(.wd-tabs__nav--wrap) {
		margin-left: 200rpx;
		margin-right: 200rpx;
	}

	:deep(.wd-tabs__line) {
		background-color: #000000 !important;
	}

	:deep(.title-left-element) {
		margin-left: $uni-margin-base;
	}

	:deep(.custom-wd-gap) {
		background-color: $uni-bg-color !important;
		height: 10rpx !important;
	}

	:deep(.custom-cell-1) {
		padding-left: 20rpx !important;
		padding-right: 0 !important;
	}

	:deep(.custom-cell-group-1) {
		padding-bottom: 10rpx !important;
		padding-top: 10rpx !important;
	}

	:deep(.custom-style-btn) {
		border-radius: 10rpx !important;
	}

	:deep(.custom-textarea) {
		border-radius: 10rpx !important;
		margin: 10rpx !important;
		width: 100% !important;
	}

	:deep(.custom-textarea-container) {
	}

	:deep(.custom-textarea-external) {
	}

	:deep(.custom-comment-btn) {
		background-color: #00d68e !important;
		border-radius: 10rpx !important;
		height: 36px !important;
		min-width: 140rpx !important;
	}

	:deep(.custom-title-class-1) {
		height: fit-content;
		padding-left: 20rpx !important;

		.wd-cell__wrapper {
			padding: 0 !important;
			padding-right: 20rpx !important;
		}
	}
</style>
