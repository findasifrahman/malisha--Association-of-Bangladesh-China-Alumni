import { createApp } from 'vue'
import App from './App.vue'
import i18n from './i18n/index.js'

// Import Material Design CSS
import 'material-design-icons/iconfont/material-icons.css'
// Import custom styles
import './assets/styles/main.css'

const app = createApp(App)
app.use(i18n)
app.mount('#app')
