<template>
	<view class="context">
		<view class="card-head-info">
			<CardHead />
		</view>

		<view class="card-body">
			<CardBody />
		</view>

		<view class="card-mark">

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
		background-color: azure;
		height: 200px; // card高度
		border-radius: 5px;
		margin: 10px;
	}

	// card头部信息
	.card-head-info {
		height: 50px;
		background-color: #b3b3b3;
	}

	// card中间主体
	.card-body {
		background-color: #9a9a9a;
		margin-top: 5px;
		margin-left: 45px; // 和头像宽度保持一致
		// max-height: 300px;
	}

	//card尾部标注
	.card-mark {
		height: 50px;
		background-color: #5b5b5b;
	}
</style>
