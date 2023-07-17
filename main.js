import App from './App'
import Vue from 'vue'
import uView from '@/uni_modules/uview-ui'
import Vuex from 'vuex'


// 全局组件
import GlobalComp from '@/components/index.js'
Vue.use(GlobalComp)

Vue.use(uView)
Vue.config.productionTip = false
App.mpType = 'app'
const app = new Vue({
	...App
})

// //挂载 Vue 实例
app.$mount()