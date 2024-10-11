<p align="center">
  <a href="https://github.com/thornboo/jincheng-campus">
    <img width="500" src="./src/static/logo.png" alt="icon">
  </a>
</p>

<h1 align="center">
  <a href="https://github.com/codercup2/unibest" target="_blank">金橙校园 - 多功能的一体校园服务平台</a>
</h1>

[[English document]](https://github.com/thornboo/jincheng-campus/blob/master/README.en.md)

## ⚙︎ 环境

-   node>=18
-   pnpm>=7.30
-   Vue Official<=2.1.6
-   TypeScript<=5.5.4

## 快速开始

执行 `git clone https://github.com/thornboo/jincheng-campus.git` 拉取项目

执行 `pnpm i` 安装依赖

执行 `pnpm run dev` 运行 `H5`

## 📦 运行（支持热更新）

-   web平台： `pnpm dev:h5`, 然后打开 [http://localhost:9000/](http://localhost:9000/)。
-   weixin平台：`pnpm dev:mp-weixin` 然后打开微信开发者工具，导入本地文件夹，选择本项目的
    `dist/dev/mp-weixin` 文件。
-   APP平台：`pnpm dev:app`, 然后打开 `HBuilderX`，导入刚刚生成的`dist/dev/app` 文件夹，选择运行到模拟器(
    开发时优先使用)，或者运行的安卓/ios基座。

## 🔗 发布

-   web平台： `pnpm build:h5`，打包后的文件在 `dist/build/h5`，可以放到web服务器，如nginx运行。如果最终不是放在根目录，可以在
    `manifest.config.ts` 文件的 `h5.router.base` 属性进行修改。
-   weixin平台：`pnpm build:mp-weixin`, 打包后的文件在 `dist/build/mp-weixin`
    ，然后通过微信开发者工具导入，并点击右上角的“上传”按钮进行上传。
-   APP平台：`pnpm build:app`, 然后打开 `HBuilderX`，导入刚刚生成的`dist/build/app` 文件夹，选择发行 -
    APP云打包。

## 技术框架

-   [vuejs3](https://cn.vuejs.org/) - 易学易用，性能出色，适用场景丰富的 Web 前端框架。
-   [uni-app](https://uniapp.dcloud.net.cn/) - 编写一套代码，在多个平台同时运行。
-   -   [Wot Design Uni](https://wot-design-uni.netlify.app/) - 基于Vue3+TS开发，提供70+高质量组件，支持暗黑模式、国际化和自定义主题。

## 主要功能

目前1.0版本的主要功能有：

-   失物招领
-   闲置交易
-   代取快递
-   校园活动
-   校园食堂
-   校园超市
-   金橙树洞
-   校园墙

## 📄 License

[MIT](https://opensource.org/license/mit/)

Copyright (c) 2024 thornboo

## 捐赠
