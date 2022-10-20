<template>
	<view class="context">
		<view class="search-vi">
			<Search />
		</view>
		<ReleaseBtn :jumpUrl="jumpUrl" />
		<view>
			<IdleBar />
			<IdleBar />
		</view>
	</view>
</template>

<script>
	import IdleBar from './components/IdleBar.vue'
	export default {
		name: 'idle_trading',
		comments: {
			IdleBar
		},
		data() {
			return {
				jumpUrl: '/pages/idle_trading/components/IdleForm'
			}
		}
	}
</script>

<style lang="scss">
	.context {}

	.search-vi {
		margin: 5px;
	}
</style>
