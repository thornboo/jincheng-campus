module.exports = {
	// 设置代码运行环境，支持浏览器、ES2021 和 Node.js 环境
	env: {
		browser: true,
		es2021: true,
		node: true,
	},
	extends: [
		// 使用 ESLint 推荐的基础规则
		'eslint:recommended',
		// 使用 TypeScript ESLint 插件的推荐规则
		'plugin:@typescript-eslint/recommended',
		// Vue3 的基本规则
		'plugin:vue/vue3-essential',
		// eslint-plugin-import 插件，支持导入规则 @see https://www.npmjs.com/package/eslint-plugin-import
		'plugin:import/recommended',
		// eslint-config-airbnb-base 插件 已经改用 eslint-config-standard 插件，使用 Standard 代码风格规范
		'standard',
		// 1. 接入 prettier 的规则，禁用 ESLint 中与 Prettier 冲突的样式规则
		'prettier',
		// 使用推荐的 Prettier 配置，确保 Prettier 与 ESLint 集成
		'plugin:prettier/recommended',
		// 自动导入的自定义配置文件
		'./.eslintrc-auto-import.json',
	],
	overrides: [
		{
			// 针对特定环境（如 Node.js）的配置覆盖
			env: {
				node: true,
			},
			files: ['.eslintrc.{js,cjs}'], // 仅适用于 .eslintrc.js 和 .eslintrc.cjs 文件
			parserOptions: {
				sourceType: 'script', // 解析模式为 script，而不是 module
			},
		},
	],
	parserOptions: {
		// 使用最新的 ECMAScript 标准
		ecmaVersion: 'latest',
		// 使用 TypeScript 解析器解析 TypeScript 文件
		parser: '@typescript-eslint/parser',
		// 模块化代码的解析方式
		sourceType: 'module',
	},
	plugins: [
		// 启用 TypeScript 插件
		'@typescript-eslint',
		// 启用 Vue 插件
		'vue',
		// 2. 加入 prettier 的 eslint 插件，确保 ESLint 按 Prettier 的规则格式化代码
		'prettier',
		// eslint-import-resolver-typescript 插件，处理 ES 模块的导入逻辑 @see https://www.npmjs.com/package/eslint-import-resolver-typescript
		'import',
	],
	rules: {
		// 3. 开启 prettier 的自动修复功能，使代码自动格式化为 Prettier 样式
		'prettier/prettier': 'error',
		// 关闭未解析的导入报错
		'import/no-unresolved': 'off',
		// 强制对文件导入时忽略扩展名（无需手动添加 .ts 等后缀）
		'import/extensions': [
			'error',
			'ignorePackages',
			{ js: 'never', jsx: 'never', ts: 'never', tsx: 'never' },
		],
		// 关闭默认导出的限制，允许多个导出
		'import/prefer-default-export': ['off'],
		// 允许使用 console.log，不强制移除调试信息
		'no-console': ['off'],
		// 关闭变量未使用的检查（包括 TypeScript 的相关规则）
		'no-unused-vars': 'off',
		'@typescript-eslint/no-unused-vars': 'off',
		// 解决在 `vite.config.ts` 文件中的依赖报错问题
		'import/no-extraneous-dependencies': 'off',
		// 关闭不必要的规则，允许 ++, _ 等符号使用
		'no-plusplus': 'off',
		'no-shadow': 'off',
		'no-underscore-dangle': 'off',
		// 关闭“使用前定义”的规则检查
		'no-use-before-define': 'off',
		'no-undef': 'off',
		'no-param-reassign': 'off',
		// 避免 TypeScript 中的函数重载误报
		'no-redeclare': 'off',
		'@typescript-eslint/no-redeclare': 'error',
		// 关闭 Vue 的多单词组件名限制
		'vue/multi-word-component-names': 'off',
		// 关闭对 `any` 的使用限制
		'@typescript-eslint/no-explicit-any': 'off',
	},
	// eslint-import-resolver-typescript 插件，支持 TypeScript 的导入解析。@see https://www.npmjs.com/package/eslint-import-resolver-typescript
	settings: {
		'import/parsers': {
			// 指定哪些文件类型使用 TypeScript 解析器
			'@typescript-eslint/parser': ['.ts', '.tsx'],
		},
		'import/resolver': {
			// 使用 TypeScript 解析导入
			typescript: {},
		},
	},
	// 定义全局变量，避免报错
	globals: {
		$t: true,
		uni: true,
		UniApp: true,
		wx: true,
		WechatMiniprogram: true,
		getCurrentPages: true,
		UniHelper: true,
		Page: true,
		App: true,
		NodeJS: true,
	},
}
