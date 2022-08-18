<template>
	<view class="context">
		<view class="card-head-info">
			<CardHead />
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
	import CardHead from '../components/CardHead.vue'
	import CardBody from '../components/CardBody.vue'
	import CardMark from '../components/CardMark.vue'
	export default {
		name: 'CardWrap',
		components: {
			CardHead,
			CardBody,
			CardMark
		},
		data() {
			return {}
		},
		onLoad() {},
		methods() {},
		computed() {}
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
