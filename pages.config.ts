import { defineUniPages } from '@uni-helper/vite-plugin-uni-pages'

export default defineUniPages({
	globalStyle: {
		navigationStyle: 'default',
		navigationBarTitleText: '金橙校园',
		navigationBarBackgroundColor: '#f8f8f8',
		navigationBarTextStyle: 'black',
		backgroundColor: '#FFFFFF',
	},
	easycom: {
		autoscan: true,
		custom: {
			'^wd-(.*)': 'wot-design-uni/components/wd-$1/wd-$1.vue',
			'^(?!z-paging-refresh|z-paging-load-more)z-paging(.*)':
				'z-paging/components/z-paging$1/z-paging$1.vue',
		},
	},
	tabBar: {
		color: '#999999',
		selectedColor: '#000000',
		backgroundColor: '#F8F8F8',
		borderStyle: 'black',
		height: '50px',
		fontSize: '10px',
		iconWidth: '24px',
		spacing: '3px',
		list: [
			{
				iconPath: 'static/tabbar/home.png',
				selectedIconPath: 'static/tabbar/homeHL.png',
				pagePath: 'pages/home/home',
				text: '首页',
			},
			{
				iconPath: 'static/tabbar/example.png',
				selectedIconPath: 'static/tabbar/exampleHL.png',
				pagePath: 'pages/forum/forum',
				text: '校园墙',
			},
			{
				iconPath: 'static/tabbar/example.png',
				selectedIconPath: 'static/tabbar/exampleHL.png',
				pagePath: 'pages/message/message',
				text: '消息',
			},
			{
				iconPath: 'static/tabbar/example.png',
				selectedIconPath: 'static/tabbar/exampleHL.png',
				pagePath: 'pages/mine/mine',
				text: '我的',
			},
		],
	},
})
