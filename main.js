import App from './App'
import Vue from 'vue'
import uView from '@/uni_modules/uview-ui'
import axios from 'axios'
import Vuex from 'vuex'

// 组件全局注册
import avatar from '@/components/avatar/avatar.vue'
import backTop from '@/components/back-top/back-top.vue'
import InteractBar from '@/components/interact-bar/interact-bar.vue'
import ReleaseBtn from '@/components/release-btn/release-btn.vue'
import search from '@/components/search/search.vue'
import tabbar from '@/components/tabBar/tabbar.vue'


// Vue.component 的第一个参数为组件名
Vue.component('avatar', avatar)
Vue.component('back-top', backTop)
Vue.component('interact-bar', InteractBar)
Vue.component('release-btn', ReleaseBtn)
Vue.component('search', search)
Vue.component('tabbar', tabbar)

Vue.use(uView)
Vue.prototype.$axios = axios
Vue.config.productionTip = false
App.mpType = 'app'
const app = new Vue({
	...App
})

// //挂载 Vue 实例
app.$mount()