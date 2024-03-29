import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import Countdown from 'vue3-flip-countdown'
import router from './router'

const app = createApp(App)

app.use(router)
app.use(Countdown)
app.mount('#app')
