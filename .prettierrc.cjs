// @see https://prettier.io/docs/en/options
module.exports = {
	// 使用单引号代替双引号
	singleQuote: true,
	// 每行最大长度 100 个字符
	printWidth: 100,
	// 使用 4 个空格作为缩进宽度
	tabWidth: 4,
	// 使用 tab 缩进而不是空格
	useTabs: true,
	// 不使用分号
	semi: false,
	// 所有可能的地方都加上尾逗号
	trailingComma: 'all',
	// 根据文件类型自动处理换行符
	endOfLine: 'auto',
	// 在 HTML 中忽略空格敏感度
	htmlWhitespaceSensitivity: 'ignore',
	// 在 Vue 文件的 <script> 和 <style> 标签内自动缩进
	vueIndentScriptAndStyle: true,
	// 针对特定文件类型的覆盖配置
	overrides: [
		{
			files: '*.json',
			options: {
				// JSON 文件中不使用尾逗号
				trailingComma: 'none',
			},
		},
	],
}
