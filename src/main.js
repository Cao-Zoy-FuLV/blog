
import './style.css'
import App from './App.vue'
import { createApp } from 'vue'
import Layui from '@layui/layui-vue'
import '@layui/layui-vue/lib/index.css'
import router from './router'

const app = createApp(App)
app.use(Layui)
app.use(router)
app.mount('#app')

console.log('应用已挂载，当前路由:', router.currentRoute.value.path)