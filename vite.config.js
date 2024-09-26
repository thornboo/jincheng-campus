/**
 * vite.config.js 是一个可选的配置文件，如果项目的根目录中存在这个文件，那么它会被自动加载
 * 一般用于配置 vite 的编译选项
 * 仅vue 3项目生效
 */
import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
    resolve: {
        alias: {
            '@': path.resolve(__dirname, '')
        }
    }
});
