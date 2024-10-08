<template>
	<view class="context">
		<ReleaseBtn :jumpUrl="jumpUrl" />
		<view>
			<ExpressageBar />
		</view>
	</view>
</template>

<script>
	import ExpressageBar from './components/ExpressageBar.vue'
	export default {
		name: 'replace_expressage',
		components: {
			ExpressageBar
		},
		data() {
			return {
				jumpUrl: '/pages/replace_expressage/components/ExpressageForm'
			}
		}
	}
</script>

<style lang="scss">
	.context {}
</style>
