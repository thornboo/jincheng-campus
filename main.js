import App from './App'
import Vue from 'vue'
import uView from '@/uni_modules/uview-ui'

// 组件全局注册
import AvaTar from '@/components/AvaTar/index.vue'
import Search from '@/components/Search/index.vue'
import TabBar from '@/components/TabBar/index.vue'
import InteractBar from '@/components/InteractBar/index.vue'
import BackTop from '@/components/BackTop/index.vue'

Vue.component('AvaTar', AvaTar)
Vue.component('Search', Search)
Vue.component('TabBar', TabBar)
Vue.component('InteractBar', InteractBar)
Vue.component('BackTop', BackTop)

Vue.use(uView)

Vue.config.productionTip = false
App.mpType = 'app'
const app = new Vue({
	...App
})

// //挂载 Vue 实例
app.$mount()
