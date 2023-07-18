import App from './App'
import Vue from 'vue'
import uView from '@/uni_modules/uview-ui'
import Vuex from 'vuex'


// 全局组件
import GlobalComp from '@/components/index.js'
Vue.use(GlobalComp)

// tabbar自定义组件
import tabbar from '@/components/tabBar/tabbar.vue'
Vue.component('tabbar', tabbar)

Vue.use(uView)
Vue.config.productionTip = false
App.mpType = 'app'
const app = new Vue({
	...App
})

// //挂载 Vue 实例
app.$mount()