import App from './App'
import Vue from 'vue'
import uView from '@/uni_modules/uview-ui'

// 组件全局注册
import tabBar from '@/components/TabBar/tabBar.vue'
import Search from '@/components/Search.vue'
import Avatar from '@/components/Avatar.vue'

Vue.component('tabBar', tabBar)
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
