import App from './App.vue';
import Vue from 'vue';
import { createSSRApp } from 'vue';

// 全局组件
import GlobalComp from '@/components/index.js';
import tabbar from '@/components/TabBar/tabbar.vue';
import uviewPlus from 'uview-plus';

Vue.use(GlobalComp);
Vue.component('tabbar', tabbar);
Vue.config.productionTip = false;

App.mpType = 'app';

const app = new Vue({
    ...App
});

// 挂载 Vue 实例
app.$mount();

export function createApp() {
    const app = createSSRApp(App);
    app.use(uviewPlus);
    // 状态管理
    setupStore(app);
    // 网络请求
    setupRequest();

    return {
        app,
    };
}
