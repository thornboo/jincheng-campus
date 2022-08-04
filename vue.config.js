/**
 * vue.config.js 是一个可选的配置文件，如果项目的根目录中存在这个文件，那么它会被自动加载
 * 一般用于配置 webpack 等编译选项
 */
const path = require('path')

module.exports = {
  // 通过 Babel 显式转译一个依赖
  transpileDependencies: ['uview-ui'],
}
