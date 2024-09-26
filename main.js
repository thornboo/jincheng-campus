import App from './App';
import Vue from 'vue';
import uView from '@/uni_modules/uview-ui';

// 全局组件
import GlobalComp from '@/components/index.js';
import tabbar from '@/components/TabBar/tabbar.vue';

Vue.use(GlobalComp);
Vue.component('tabbar', tabbar);
Vue.use(uView);
Vue.config.productionTip = false;

App.mpType = 'app';

const app = new Vue({
    ...App
});

// 挂载 Vue 实例
app.$mount();
