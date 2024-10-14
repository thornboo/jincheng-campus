<p align="center">
  <a href="https://github.com/thornboo/jincheng-campus">
    <img width="500" src="./src/static/logo.png" alt="icon">
  </a>
</p>

<h1 align="center">
  <a href="https://github.com/codercup2/unibest" target="_blank">Jincheng Campus - A Multi-functional Integrated Campus Service Platform</a>
</h1>

[[中文文档]](https://github.com/thornboo/jincheng-campus/blob/master/README.md)

## ⚙︎ Environment

- node>=18
- pnpm>=7.30
- Vue Official<=2.1.6
- TypeScript<=5.5.4

## Quick Start

Run `git clone https://github.com/thornboo/jincheng-campus.git` to pull the project.

Run `pnpm i` to install dependencies.

Run `pnpm run dev` to start the `H5` version.

## 📦 Running (Supports Hot Reload)

- **Web Platform**: Run `pnpm dev:h5`, then open [http://localhost:9000/](http://localhost:9000/).
- **Weixin Platform**: Run `pnpm dev:mp-weixin`, then open the WeChat Developer Tools, import the local folder, and select the `dist/dev/mp-weixin` directory in this project.
- **APP Platform**: Run `pnpm dev:app`, then open `HBuilderX`, import the newly generated `dist/dev/app` folder, and select the simulator for development (preferred for testing) or run on the Android/iOS base.

## 🔗 Release

- **Web Platform**: Run `pnpm build:h5` to build the project. The built files are located in `dist/build/h5`, which can be hosted on a web server like nginx. If the final deployment is not in the root directory, modify the `h5.router.base` property in the `manifest.config.ts` file.
- **Weixin Platform**: Run `pnpm build:mp-weixin` to build the project. The built files are located in `dist/build/mp-weixin`. Then, import them into the WeChat Developer Tools and click the "Upload" button in the top-right corner.
- **APP Platform**: Run `pnpm build:app`, then open `HBuilderX`, import the newly generated `dist/build/app` folder, and select "Release - APP Cloud Packaging".

## Technology Stack

- [vuejs3](https://vuejs.org/) - A progressive JavaScript framework for building user interfaces. It's easy to learn, high-performance, and suitable for a wide range of scenarios.
- [uni-app](https://uniapp.dcloud.io/) - Write a single codebase and run it on multiple platforms.
- [Wot Design Uni](https://wot-design-uni.netlify.app/) - Developed based on Vue3 and TypeScript, offering 70+ high-quality components with support for dark mode, internationalization, and theme customization.

## 📄 License

[MIT](https://opensource.org/license/mit/)

Copyright (c) 2024 thornboo

## Donation
