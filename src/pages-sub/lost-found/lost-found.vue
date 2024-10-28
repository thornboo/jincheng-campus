<route lang="json5" type="page">
{
	style: { navigationBarTitleText: '失物招领' },
}
</route>

<template>
	<view class="container-page">
		<view class="py-2">
			<wd-segmented
				v-model:value="currentSegmenter"
				:options="segmenterList"
				customClass="custom-segmented"
				size="small"
				@change="handleSegmented"
			></wd-segmented>
		</view>
		<view v-for="item in lostFoundData" :key="item.id" class="relative">
			<wd-card class="mx-0" custom-class="custom-card-style">
				<template #title>
					<view class="py-2 flex justify-between items-center w-full">
						<span class="flex items-center">
							<image
								:src="item.userAvatar"
								class="w-[60rpx] h-[60rpx]"
								@click="handleClickUserInfo(item.id)"
							/>
							<wd-text
								:text="item.userName"
								color="#000000FF"
								custom-class="title-left-element"
								size="28rpx"
								@click="handleClickUserInfo(item.id)"
							/>
							<wd-tag
								bg-color="#ffd22e"
								color="#fff"
								custom-class="title-left-element"
							>
								Lv.{{ item.userLevel }}
							</wd-tag>
						</span>
						<span class="mr-[-20rpx]">
							<wd-button icon="more" type="icon" @click="showActions" />
							<wd-action-sheet
								v-model="show"
								:panels="panels"
								@close="handleClose"
								@select="select"
							/>
						</span>
					</view>
				</template>
				<view @click="handleClickCardContent(item)">
					<view class="pb-1">
						<wd-text :lines="2" :text="item.lostTitle" color="#000000FF" size="28rpx" />
					</view>
					<wd-text
						:lines="2"
						:text="item.content"
						color="#6A6A6AFF"
						lineHeight="40rpx"
						size="28rpx"
					/>
					<view class="relative w-fit flex gap-x-1">
						<template v-for="(img, index) in item.imgUrl" :key="index">
							<image
								v-if="index < 3"
								:src="img"
								class="w-[150rpx] h-[150rpx] pt-1"
								mode="aspectFill"
							/>
						</template>
						<view
							v-show="item.imgUrl.length > 3"
							class="flex w-[150rpx] h-[150rpx] absolute right-[0] bottom-0 bg-[rgba(100,100,100,0.5)] items-start justify-items-end justify-end text-white"
						>
							<view class="text-[20rpx] bg-black">
								+{{ item.imgUrl.length - 3 }}张
							</view>
						</view>
					</view>
				</view>
				<template #footer>
					<view class="flex justify-between items-center w-full">
						<wd-tag bg-color="#FFF" color="#000" size="small" type="primary">
							{{ formatDate(item.createTime) }}
						</wd-tag>
						<view class="ml-auto">
							<wd-tag bg-color="#FFF" class="mr-2" color="#000" size="small">
								{{ item.viewCount > 99 ? '99+' : item.viewCount }}次浏览
							</wd-tag>
							<wd-tag bg-color="#FFF" class="mr-2" color="#000" size="small">
								{{ item.commentCount > 99 ? '99+' : item.commentCount }}条评论
							</wd-tag>
							<wd-button plain size="small" @click="handleClickContact(item.userId)">
								立刻联系
							</wd-button>
						</view>
					</view>
				</template>
			</wd-card>
		</view>
	</view>
	<ReleaseBtn :titleList="titleList" />
</template>

<script lang="ts" setup>
	import { useToast } from 'wot-design-uni'
	import ReleaseBtn from '@/components/release-btn/release-btn.vue'
	import dayjs from 'dayjs'
	import 'dayjs/locale/zh-cn'
	import relativeTime from 'dayjs/plugin/relativeTime'
	import qq from '@/static/app/share/qq.png'
	import wechat from '@/static/app/share/wechat.png'
	import wechatMoments from '@/static/app/share/wechatMoments.png'
	import link from '@/static/app/share/link.png'
	import report from '@/static/app/share/report.png'

	// 扩展插件和设置语言
	dayjs.extend(relativeTime)
	dayjs.locale('zh-cn')

	// 传给悬浮按钮的标题列表
	const titleList = ['失物登记', '招领登记']

	// 顶部分段器数据
	const segmenterList = ref<string[]>(['失物大厅', '招领大厅'])
	const currentSegmenter = ref<string>('失物大厅')

	const show = ref<boolean>(false)
	const toast = useToast()

	// 定义面板数据
	const panelData = [
		{ icon: wechat, title: '微信好友' },
		{ icon: qq, title: 'QQ好友' },
		{ icon: wechatMoments, title: '朋友圈' },
		{ icon: link, title: '复制链接' },
		{ icon: report, title: '举报' },
	]

	// 使用 map 创建 panels
	const panels = ref(
		panelData.map(({ icon, title }) => ({
			iconUrl: icon,
			title,
		})),
	)

	// 格式化时间
	function formatDate(dateString: string) {
		return dayjs(dateString).fromNow()
	}

	// TODO: 前期先用假数据填充开发
	// 失物招领数据
	const lostFoundData = ref([
		{
			id: 97981293128932,
			userId: 132812397,
			userName: '张晓晓',
			userAvatar: 'https://tc.alcy.cc/i/2024/04/21/662416f7670ea.webp',
			userLevel: '4',
			viewCount: 999,
			commentCount: 888,
			personalitySignature: '我不是懒，我只是能量保存专家',
			phone: '12345678901',
			lostTitle: '在A1教学楼丢了一个黑色钱包',
			content:
				'2023年3月1日在A1教学楼502教室丢了一个黑色钱包，内含身份证及若干银行卡，这对我非常重要，如果有人捡到请尽快联系我，必有重谢。',
			// 图片获取的时候最多保存3张显示在外面，超出的显示省略
			imgUrl: [
				'https://tc.alcy.cc/i/2024/04/21/662413fbab9ba.webp',
				'https://tc.alcy.cc/i/2024/05/24/66505fcfb39e1.webp',
				'https://tc.alcy.cc/i/2024/04/21/66241666f028b.webp',
				'https://tc.alcy.cc/i/2024/04/21/6624167d53a59.webp',
				'https://tc.alcy.cc/i/2024/04/21/6624164ee4641.webp',
			],
			location: '四川',
			category: '钱包',
			createTime: '2024-10-21 12:00:00',
			updateTime: '2024-10-21 12:00:00',
		},
		{
			id: 97981297169328,
			userId: 98712387,
			userName: '李四',
			userAvatar: 'https://tc.alcy.cc/i/2024/04/21/662416fd652ad.webp',
			userLevel: '22',
			viewCount: 666,
			commentCount: 444,
			personalitySignature: '相信自己，未来会更美好',
			phone: '10987654321',
			lostTitle: '哪位好心人捡到了Airpods耳机',
			content:
				'2023年5月11日在北区三食堂二楼中午吃饭的遗失了一个耳机，白色Airpods二代，有一个粉色的海绵宝宝外壳，如果有人捡到请尽快联系我，请喝奶茶。',
			imgUrl: [
				'https://tc.alcy.cc/i/2024/04/21/662413fb1172b.webp',
				'https://tc.alcy.cc/i/2024/04/21/662413f7beee3.webp',
			],

			location: '',
			category: '钱包',
			createTime: '2024-10-28 16:02:12',
			updateTime: '2024-10-28 16:02:12',
		},
	])

	// 显示更多选项
	function showActions() {
		show.value = true
	}

	// 弹出事件被关闭
	function handleClose() {
		show.value = false
	}

	// 更多选项选中事件
	function select({ item, index }) {
		toast.show(`当前选中项: ${item.title}, 下标: ${index}`)
	}

	// 点击头像或名称跳转个人主页
	function handleClickUserInfo(id: number) {
		console.log(id + '的头像昵称被点击了')
	}

	// 点击帖子内容跳转详情
	function handleClickCardContent(params: object) {
		uni.navigateTo({
			url: `/pages-sub/lost-found/lost-found-detail?detail=${encodeURIComponent(JSON.stringify(params))}`,
			success(success) {
				console.log(success)
			},
			fail(error) {
				console.log(error)
			},
		})
	}

	// 顶部分段器切换事件，根据不同的选项请求不同接口的数据
	function handleSegmented(params: string) {
		console.log(params)
	}

	// 立即联系事件
	function handleClickContact(id: number) {
		uni.navigateTo({
			url: `/pages-sub/contact/id=${id}`,
			success(success) {
				console.log(success)
			},
			fail(error) {
				console.log(error)
			},
		})
	}
</script>

<style lang="scss" scoped>
	.container-page {
		background-color: $uni-bg-color;
		height: 100vh;
		padding-left: $uni-padding-base;
		padding-right: $uni-padding-base;
	}

	:deep(.title-left-element) {
		margin-left: $uni-margin-base;
	}

	// 分段器自定义样式覆盖
	:deep(.custom-segmented) {
		background-color: #cdcdcd;
	}

	// 分段器激活样式
	:deep(.wd-segmented__item--active) {
		background-color: #ffd22e;
	}

	// card组件标题样式
	:deep(.wd-card__title-content) {
		padding: 0 !important;
	}

	// card组件样式
	:deep(.custom-card-style) {
		margin-bottom: $uni-margin-base !important;
		margin-left: 0 !important;
		margin-right: 0 !important;
		padding-top: 0 !important;
	}

	// 覆盖更多选项组件原有的遮罩层样式
	:deep(.wd-overlay) {
		background: rgba(78, 78, 78, 0.4) !important;
	}
</style>
