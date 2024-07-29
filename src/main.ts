import './assets/main.css'
import 'vuetify/styles'

import { createVuetify } from 'vuetify'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'

const pinia = createPinia()
const vuetify = createVuetify()
const app = createApp(App)

app.use(router)
app.use(pinia)
app.use(vuetify)

app.mount('#app')
