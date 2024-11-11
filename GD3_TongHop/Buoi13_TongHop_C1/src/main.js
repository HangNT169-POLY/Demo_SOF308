import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import { createApp } from 'vue'
import App from './App.vue'
import { router } from './route/route'

const app = createApp(App)
app.use(router)
app.mount('#app')
