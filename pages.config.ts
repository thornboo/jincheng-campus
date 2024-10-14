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
				selectedColor: '#c32a2a',
				selectedIconPath: 'static/tabbar/homeHL.png',
				pagePath: 'pages/home/home',
				text: '首页',
			},
			{
				iconPath: 'static/tabbar/forum.png',
				selectedIconPath: 'static/tabbar/forumHL.png',
				pagePath: 'pages/forum/forum',
				text: '校园墙',
			},
			{
				iconPath: 'static/tabbar/message.png',
				selectedIconPath: 'static/tabbar/messageHL.png',
				pagePath: 'pages/message/message',
				text: '消息',
			},
			{
				iconPath: 'static/tabbar/mine.png',
				selectedIconPath: 'static/tabbar/mineHL.png',
				pagePath: 'pages/mine/mine',
				text: '我的',
			},
		],
	},
	subPackages: [
		{
			root: 'pages-sub', // 分包的相对根路径
			pages: [
				{
					path: 'pages-sub/lost-found/lost-found',
				},
			],
		},
	],
})
