import App from './App'
import Vue from 'vue'
import uView from '@/uni_modules/uview-ui'

// 组件全局注册
import TabBar from '@/components/Tabbar.vue'
import Search from '@/components/Search.vue'
import Avatar from '@/components/Avatar.vue'
Vue.component('TabBar', TabBar)
Vue.component('Search', Search)
Vue.component('Avatar', Avatar)

Vue.use(uView)

Vue.config.productionTip = false
App.mpType = 'app'
const app = new Vue({
	...App
})

// //挂载 Vue 实例
app.$mount()
