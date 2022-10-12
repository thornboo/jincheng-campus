<template>
	<view class="context">
		<u-icon name="thumb-up" index="1" size="26px" labelSize="14" labelPos="right" :label="endorse"
			@click="onClick(index)"></u-icon>
		<u-icon name="chat" index="2" size="26px" labelSize="14" labelPos="right" :label="comments"
			@click="onClick(index)"></u-icon>
		<u-icon name="share-square" index="3" size="26px" labelSize="14" labelPos="right" :label="transpond"
			@click="onClick(index)"></u-icon>
	</view>
</template>

<script>
	export default {
		name: 'InteractBar',
		props: ['endorse', 'comments', 'transpond'],
		data() {
			return {}
		},
		mounted() {},
		methods: {
			onClick(index) {
				console.log(index);
				switch (index) {
					case 1:
						console.log('1111');
						break;
					case 2:
						console.log('1111');
						break;
					case 3:
						console.log('1111');
						break;
				}
			}
		},
		computed() {}
	}
</script>

<style lang="scss">
	.context {
		display: flex;
		justify-content: space-evenly;
	}
</style>
