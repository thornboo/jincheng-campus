import avatar from '@/components/avatar/avatar.vue'
import backTop from '@/components/back-top/back-top.vue'
import InteractBar from '@/components/interact-bar/interact-bar.vue'
import ReleaseBtn from '@/components/release-btn/release-btn.vue'
import search from '@/components/search/search.vue'
import tabbar from '@/components/tabBar/tabbar.vue'

export default {
	install: function(Vue, options) {
		Vue.component('avatar', avatar)
		Vue.component('back-top', backTop)
		Vue.component('interact-bar', InteractBar)
		Vue.component('release-btn', ReleaseBtn)
		Vue.component('search', search)
		Vue.component('tabbar', tabbar)
	}
}