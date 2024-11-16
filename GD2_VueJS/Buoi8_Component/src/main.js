import { createApp } from 'vue'
import App from './App.vue'
import GlobalComponent from './component/GlobalComponent.vue'

const app = createApp(App)
app.component('ComponentA', GlobalComponent)
app.mount('#app')
// Dang ky component toan cau
