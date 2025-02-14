"use strict";
/**
 * 在这里进行页面配置，如页面标题、页面路径、页面组件名等。
 * 不需要手动去修改 pages.json文件，因为会自动生成。如果进行过改动，请删除修改部分重新编译运行即可。
 * 核心依赖 vite-plugin-uni-pages：在 Vite 驱动的 uni-app 上使用基于文件的路由系统。
 * @see https://github.com/uni-helper/vite-plugin-uni-pages
 * @see https://github.com/hannoeru/vite-plugin-pages
 */
Object.defineProperty(exports, "__esModule", { value: true });
var vite_plugin_uni_pages_1 = require("@uni-helper/vite-plugin-uni-pages");
exports.default = (0, vite_plugin_uni_pages_1.defineUniPages)({
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
            '^(?!z-paging-refresh|z-paging-load-more)z-paging(.*)': 'z-paging/components/z-paging$1/z-paging$1.vue',
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
                    // todo: 此处临时用‘轮播图’模块先对path赋值，后续需要修改
                    path: 'pages-sub/swiper-details/swiper-details',
                },
            ],
        },
        {
            root: 'lost-found',
            pages: [
                {
                    path: 'lost-found',
                    type: 'page',
                    style: {
                        navigationBarTitleText: '失物招领',
                    },
                },
                {
                    path: 'lost-found-detail',
                    type: 'page',
                    style: {
                        navigationBarTitleText: '失物招领详情',
                    },
                },
                {
                    path: 'lost-form',
                    type: 'page',
                    style: {
                        navigationBarTitleText: '失物招领发布',
                    },
                },
            ],
        },
    ],
});
