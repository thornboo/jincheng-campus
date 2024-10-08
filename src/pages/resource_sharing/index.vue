<template>
	<view class="context">
		<ReleaseBtn :jumpUrl="jumpUrl" />
		<view>
			<ResourceBar />
		</view>
	</view>
</template>

<script>
	import ResourceBar from './components/ResourceBar.vue'
	export default {
		name: 'resource_sharing',
		components: {
			ResourceBar
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
</style>
