<route lang="json5" type="page">
{
	style: { navigationBarTitleText: '失物招领' },
}
</route>

<template>
	<view class="bg-[#e3e3e3ff] h-screen">
		<view class="px-2 py-2">
			<wd-segmented
				v-model:value="currentSegmenter"
				:options="segmenterList"
				customClass="custom-segmented"
				size="small"
				@change="handleSegmented"
			></wd-segmented>
		</view>
		<view v-for="item in lostFoundData" :key="item.id" class="px-2" style="position: relative">
			<wd-card class="mx-0" custom-class="custom-card-style">
				<template #title>
					<view
						class="py-2"
						style="
							display: flex;
							justify-content: space-between;
							align-items: center;
							width: 100%;
						"
					>
						<span>
							<image
								:src="item.userAvatar"
								class="w-[60rpx] h-[60rpx] rounded-full"
								@click="handleClickUserInfo(item.id)"
							/>
							<wd-text
								:text="item.userName"
								class="ml-1"
								color="#000000FF"
								size="28rpx"
								@click="handleClickUserInfo(item.id)"
							/>
							<wd-tag bg-color="#CACACAFF" class="ml-1" color="#FAA507FF" plain>
								Lv.{{ item.userLevel }}
							</wd-tag>
						</span>
						<span>
							<wd-button icon="more" type="icon" @click="showActions"></wd-button>
							<wd-action-sheet
								v-model="show"
								:panels="panels"
								@close="handleClose"
								@select="select"
							/>
						</span>
					</view>
					<view class="pb-2">
						<wd-text :lines="2" :text="item.lostTitle" color="#000000FF" size="30rpx" />
					</view>
				</template>
				<view @click="handleClickCardContent">
					<wd-text
						:lines="2"
						:text="item.content"
						color="#6A6A6AFF"
						lineHeight="36rpx"
						size="28rpx"
					/>
					<image
						v-for="(img, index) in item.imgUrl"
						v-show="index < 3"
						:key="index"
						:src="img"
						class="w-[150rpx] h-[150rpx] pt-1 pr-1"
						mode="aspectFill"
					/>
				</view>

				<template #footer>
					<view class="flex justify-between items-center w-full">
						<wd-tag plain size="small" type="primary">{{ item.createTime }}</wd-tag>
						<view class="ml-auto">
							<wd-button plain size="small" @click="handleClick(item)">
								查看详情
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

	// 传给悬浮按钮的标题列表
	const titleList = ['失物登记', '招领登记']

	// 顶部分段器数据
	const segmenterList = ref<string[]>(['失物大厅', '招领大厅'])
	const currentSegmenter = ref<string>('失物大厅')

	const show = ref<boolean>(false)
	const toast = useToast()

	// 更多选项列表
	const panels = ref([
		{
			iconUrl: '/static/app/share/wechat.png',
			title: '微信好友',
		},
		{
			iconUrl: '/static/app/share/qq.png',
			title: 'QQ好友',
		},
		{
			iconUrl: '/static/app/share/link.png',
			title: '复制链接',
		},
		{
			iconUrl: '/static/app/share/report.png',
			title: '举报',
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
	function handleClickCardContent() {
		console.log('点击了帖子内容')
	}

	// TODO: 前期先用假数据填充开发
	// 失物招领数据
	const lostFoundData = ref([
		{
			id: 97981293128932,
			userName: '张晓晓',
			userAvatar: 'https://tc.alcy.cc/i/2024/04/21/662416f7670ea.webp',
			userLevel: '4',
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
			location: 'A1教学楼502教室',
			category: '钱包',
			createTime: '2023-03-01 12:00:00',
			updateTime: '2023-03-01 11:00:00',
		},
		{
			id: 97981297169328,
			userName: '李四',
			userAvatar: 'https://tc.alcy.cc/i/2024/04/21/662416fd652ad.webp',
			userLevel: '22',
			personalitySignature: '相信自己，未来会更美好',
			phone: '10987654321',
			lostTitle: '哪位好心人捡到了Airpods耳机',
			content:
				'2023年5月11日在北区三食堂二楼中午吃饭的遗失了一个耳机，白色Airpods二代，有一个粉色的海绵宝宝外壳，如果有人捡到请尽快联系我，请喝奶茶。',
			imgUrl: [
				'https://tc.alcy.cc/i/2024/04/21/662413fb1172b.webp',
				'https://tc.alcy.cc/i/2024/04/21/662413f7beee3.webp',
			],

			location: '北区三食堂二楼',
			category: '钱包',
			createTime: '2023-05-11 12:00:00',
			updateTime: '2023-05-11 12:00:00',
		},
	])

	// 顶部分段器切换事件，根据不同的选项请求不同接口的数据
	function handleSegmented(params: string) {
		console.log(params)
	}

	// 查看详情事件（有三种处理方式：popup弹出层、showModal模态弹窗、navigateTo跳转新页面）
	function handleClick(params: any) {
		// popup弹出层
		// this.show = true
		// 打开失物招领详情模态框
		// uni.showModal({
		// 	title: params.lostTitle,
		// 	content: params.content,
		// 	success: function (res) {
		// 		if (res.confirm) {
		// 			console.log('用户点击确定')
		// 		} else if (res.cancel) {
		// 			console.log('用户点击取消')
		// 		}
		// 	},
		// })
		// 跳转到失物招领详情页
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
</script>

<style lang="scss" scoped>
	:deep(.custom-segmented) {
		background-color: #cdcdcd;
	}

	:deep(.wd-segmented__item--active) {
		background-color: #ffd22e;
	}

	:deep(.wd-card__title-content) {
		padding: 0;
	}

	.custom-card-style {
		margin-left: 0 !important;
		margin-right: 0 !important;
		padding-top: 0;
	}
</style>
