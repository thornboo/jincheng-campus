<template>
	<view class="context">
		<view class="card-head-info">
			<view class="avatar">
				<avatar />
			</view>

			<view class="nick-name">
				<p>{{nickName}}</p>
			</view>

			<view class="time-frame">
				<p>{{ timeFrame }}</p>
			</view>
		</view>

		<view class="tag-bar">
			<u-tag text="#失物招领" size="mini" type="warning" plain bgColor="#E5F7EA" color="#009E14"
				borderColor="#E5F7EA"></u-tag>
		</view>

		<view class="card-body">
			<CardBody />
		</view>

		<view class="card-mark">
			<CardMark />
		</view>
	</view>
</template>

<script>
	import CardHead from './CardHead.vue'
	import CardBody from './CardBody.vue'
	import CardMark from './CardMark.vue'
	export default {
		name: 'CardWrap',
		components: {
			CardHead,
			CardBody,
			CardMark
		},
		data() {
			return {
				nickName: "摘星星",
				timeFrame: "2022年12月10日"
			}
		}
	}
</script>

<style lang="scss">
	.context {
		display: flex;
		flex-direction: column;
		border-radius: $uni-border-radius-card;
		margin: 10px;
		background-color: #FFFFFF;
	}

	// card头部信息
	.card-head-info {
		order: 0;
		height: 40px;
	}

	// card中间主体
	.card-body {
		order: 1;
		margin-left: 10px;
		margin-right: 10px;
	}

	//card尾部标注
	.card-mark {
		order: 2;
		width: 100%;
	}

	.tag-bar {
		width: 70px;
		margin-left: 10px;
	}
</style>
