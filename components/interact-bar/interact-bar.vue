<template>
	<view class="container">
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
		name: 'interact-bar',
		props: ['endorse', 'comments', 'transpond'],
		data() {
			return {}
		},
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
		}
	}
</script>

<style lang="scss">
	.container {
		display: flex;
		justify-content: space-evenly;
	}
</style>