// App.vue是uni-app的主组件，所有页面都是在App.vue下进行切换的，是页面入口文件。但App.vue本身不是页面，这里不能编写视图元素，也就是没有template。
// 这个文件的作用包括：调用应用生命周期函数、配置全局样式、配置全局的存储globalData。
// 应用生命周期仅可在App.vue中监听，在页面监听无效。

<script>
	export default {
		// 当uni-app 初始化完成时触发（全局只触发一次）
		onLaunch: function() {
			uni.hideTabBar();
		},

		// 当 uni-app 启动，或从后台进入前台显示
		onShow: function() {},

		// 当 uni-app 从前台进入后台
		onHide: function() {},

		// 当 uni-app 报错时触发
		onError: function() {},
		// 对 nvue 页面发送的数据进行监听
		onUniNViewMessage: function() {},

		// 对未处理的 Promise 拒绝事件监听函数
		onUnhandledRejection: function() {},

		// 页面不存在监听函数
		onPageNotFound: function() {},

		// 监听系统主题变化
		onThemeChange: function() {},

		// 全局变量机制
		globalData: {
			default_font_size: '17rpx'
		}
	}
</script>

<style lang="scss">
	/*每个页面公共css */
	@import '@/uni_modules/uview-ui/index.scss';
	@import url("@/static/font/stylesheet.css");
</style>