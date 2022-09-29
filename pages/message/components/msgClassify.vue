<template>
	<view class="context">

		<view class="classify-btn">
			<u-grid :border="false" @click="click" col="4">
				<u-grid-item v-for="(baseListItem, baseListIndex) in baseList" :key="baseListIndex">
					<u-icon :customStyle="{paddingTop:20+'rpx'}" :name="baseListItem.name" :size="24"></u-icon>
					<text class="grid-text">{{baseListItem.title}}</text>
				</u-grid-item>
			</u-grid>
		</view>

		<view class="msg-list">
			<view class="u-page">
				<u-list @scrolltolower="scrolltolower">
					<u-list-item v-for="(item, index) in indexList" :key="index">
						<u-cell :title="`列表长度-${index + 1}`">
							<u-avatar slot="icon" shape="square" size="35" :src="item.url"
								customStyle="margin: -3px 5px -3px 0"></u-avatar>
						</u-cell>
					</u-list-item>
				</u-list>
			</view>
		</view>

	</view>
</template>

<script>
	export default {
		name: 'msgClassify',
		data() {
			return {
				baseList: [{
						name: 'photo',
						title: '回复我的'
					},
					{
						name: 'photo',
						title: '@我'
					},
					{
						name: 'photo',
						title: '收到的赞'
					},
					{
						name: 'photo',
						title: '系统通知'
					},
				],
				indexList: [{
						name: 'photo',
						title: '系统通知'
					},
					{
						name: 'photo',
						title: '系统通知'
					}, {
						name: 'photo',
						title: '系统通知'
					},
				],
				urls: [
					'https://cdn.uviewui.com/uview/album/1.jpg',
					'https://cdn.uviewui.com/uview/album/2.jpg',
					'https://cdn.uviewui.com/uview/album/3.jpg',
					'https://cdn.uviewui.com/uview/album/4.jpg',
					'https://cdn.uviewui.com/uview/album/5.jpg',
					'https://cdn.uviewui.com/uview/album/6.jpg',
					'https://cdn.uviewui.com/uview/album/7.jpg',
					'https://cdn.uviewui.com/uview/album/8.jpg',
					'https://cdn.uviewui.com/uview/album/9.jpg',
					'https://cdn.uviewui.com/uview/album/10.jpg',
				]
			}
		},
		onLoad() {
			this.loadmore()
		},
		methods: {
			scrolltolower() {
				this.loadmore()
			},
			loadmore() {
				for (let i = 0; i < 5; i++) {
					this.indexList.push({
						url: this.urls[uni.$u.random(0, this.urls.length - 1)]
					})
				}
			}
		},
		computed() {}
	}
</script>

<style lang="scss">
	.context {}

	.classify-btn {
		background-color: #c5c5c5;
		border-radius: 10px;
		margin: 5px;
		padding: 5px;
	}

	.msg-list {}
</style>
