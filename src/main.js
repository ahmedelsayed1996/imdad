import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import login from './pages/Register/login'
import Discounts from './pages/Discounts/Discounts'
import DashboardPage from './pages/dashboard'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: login },
    { path: '/s', component: Discounts },
    { path: '/dashboard', component: DashboardPage },
  ]
})

const app = createApp(App)
app.use(router)
app.mount('#app')
