import { createSSRApp } from 'vue';
import App from './App.vue';
import uView from "@/wxcomponents/vk-uview-ui";
export function createApp() {
    const app = createSSRApp(App);
    app.use(uView);
    return {
        app,
    };
}
//# sourceMappingURL=main.js.map