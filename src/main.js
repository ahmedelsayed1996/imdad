import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import login from './pages/Register/login'
import Discounts from './pages/Discounts/Discounts'
import DashboardPage from './pages/dashboard'
import SettingsPage from './pages/Settings/Settings'
import WhatsappmsgsPage from './pages/Marketing/Whatsappmsgs'
import CommissionsPage from './pages/commission/commissions'
import BranchChatPage from './pages/Chats/BranchChat'
import CustomerPage from './pages/customer/customer'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: login },
    { path: '/dicounts', component: Discounts },
    { path: '/dashboard', component: DashboardPage },
    { path: '/settings', component: SettingsPage },
    { path: '/msgs', component: WhatsappmsgsPage },
    { path: '/commissions', component: CommissionsPage },
    { path: '/branchchat', component: BranchChatPage },
    { path: '/customer', component: CustomerPage },
  ]
})

const app = createApp(App)
app.use(router)
app.mount('#app')
