/**
 * prettier的配置文件
 */
module.exports = {
  printWidth: 100, // 每行字符数，超过之后自动换行
  semi: false, // 是否使用分号
  vueIndentScriptAndStyle: true, // 是否对vue中的script及style标签缩进
  singleQuote: true, // 是否使用单引号
  trailingComma: 'all', // 行尾逗号,默认none,可选 none|es5|all
  proseWrap: 'never', // 因为使用了一些折行敏感型的渲染器
  htmlWhitespaceSensitivity: 'strict', // 对HTML中的结束标签结尾尖括号是否换到下一行
  endOfLine: 'auto', // 结束行格式
}
