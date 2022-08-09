import { createSSRApp } from 'vue'
import App from './App.vue'
// @ts-ignore
import uView from './wxcomponents/vk-uview-ui'

export function createApp() {
  const app = createSSRApp(App)
  app.use(uView)
  return {
    app,
  }
}
