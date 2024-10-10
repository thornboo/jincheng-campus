// .stylelintrc.cjs

module.exports = {
	root: true,
	extends: [
		// 基础的推荐规则集
		'stylelint-config-recommended',
		// SCSS 的推荐规则集
		'stylelint-config-recommended-scss',
		// 为 Vue 项目配置的 SCSS 推荐规则集
		'stylelint-config-recommended-vue/scss',
		// 检查 Vue 文件中 HTML 相关的样式
		'stylelint-config-html/vue',
		// 使样式按照 recess 排序
		'stylelint-config-recess-order',
	],
	// 使用 Prettier 插件来确保与 Prettier 的格式化兼容
	plugins: ['stylelint-prettier'],
	// 配置文件的覆盖部分，针对不同文件类型使用不同的语法解析
	overrides: [
		{
			// 扫描 .vue 和 .html 文件中 <style> 标签内的样式
			files: ['**/*.{vue,html}'],
			// 使用 postcss-html 解析 Vue 和 HTML 文件
			customSyntax: 'postcss-html',
		},
		{
			// 扫描 .css 和 .scss 文件
			files: ['**/*.{css,scss}'],
			// 使用 postcss-scss 解析 CSS 和 SCSS 文件
			customSyntax: 'postcss-scss',
		},
	],
	// 自定义规则
	rules: {
		// 启用 Prettier 的格式化规则
		'prettier/prettier': true,
		// 允许特定伪类（如 global、export、v-deep 和 deep），这些伪类在 Vue 中较为常见
		'selector-pseudo-class-no-unknown': [
			true,
			{
				ignorePseudoClasses: ['global', 'export', 'v-deep', 'deep'],
			},
		],
		// 忽略小程序中的 rpx 单位
		'unit-no-unknown': [
			true,
			{
				ignoreUnits: ['rpx'],
			},
		],
		// 解决小程序中识别不了 <page> 标签的问题
		'selector-type-no-unknown': [
			true,
			{
				ignoreTypes: ['page'],
			},
		],
		// 评论前不要留空行
		'comment-empty-line-before': 'never', // never|always|always-multi-line|never-multi-line
		// 自定义属性前不要留空行
		'custom-property-empty-line-before': 'never',

		// 禁用某些默认规则以减少不必要的检查
		'no-empty-source': null, // 允许空的样式文件
		'comment-no-empty': null, // 允许空的注释
		'no-duplicate-selectors': null, // 允许重复的选择器
		'scss/comment-no-empty': null, // 允许空的 SCSS 注释
		'selector-class-pattern': null, // 不强制选择器类名的格式
		'font-family-no-missing-generic-family-keyword': null, // 允许不定义通用字体系列
	},
}
