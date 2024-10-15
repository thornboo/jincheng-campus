import { createSSRApp } from 'vue'
import App from './App.vue'
import store from './store'
import { routeInterceptor, requestInterceptor, prototypeInterceptor } from './interceptors'
import 'virtual:uno.css'
import '@/style/index.scss'
// import VConsole from 'vconsole'

// const vConsole = new VConsole({ theme: 'dark' })

// 结束调试后，可移除掉vConsole
// vConsole.destroy()

export function createApp() {
	const app = createSSRApp(App)
	app.use(store)
	app.use(routeInterceptor)
	app.use(requestInterceptor)
	app.use(prototypeInterceptor)
	return {
		app,
	}
}
