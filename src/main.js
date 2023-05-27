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
import CustomerChatPage from './pages/Chats/CustomerChat'
import DriverChatPage from './pages/Chats/DriverChat'
import SellerChatPage from './pages/Chats/SellerChat'
import CustomerPage from './pages/customer/customer'
import CommissionSellerPage from './pages/commission/commissionforseller'
// import CommissionPage from './pages/commission/commission'
import AnalyticsPage from './pages/Analytics/analytics'
import BranchesPage from './pages/Branches/Branches'
import DriverPage from './pages/Driver/driver'
import CurrentBalancePage from './pages/Finance/CurrentBalance'
import DepositOperationsPage from './pages/Finance/DepositOperations'
import FinancePage from './pages/Finance/Finance'
import LastOperationPage from './pages/Finance/LastOperation'
import WalletPage from './pages/Finance/Wallet'
import NotificationPage from './pages/Marketing/Notification'
import PendingProductsPage from './pages/Products/PendingProducts'
import ProductControlPage from './pages/Products/ProductControl'
// import ProductDetailsPage from './pages/Products/ProductDetails'
import ProductsPage from './pages/Products/Products'
import verifycode from './pages/Register/verifycode'
import generalreports from './pages/Reports/generalreports'
import NewSeller from './pages/Sellers/NewSeller'
// import Settings from './pages/Settings/Settings'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: login },
    { path: '/verifycode', component: verifycode },
    { path: '/dicounts', component: Discounts },
    { path: '/dashboard', component: DashboardPage },
    { path: '/settings', component: SettingsPage },
    { path: '/msgs', component: WhatsappmsgsPage },
    { path: '/commissions', component: CommissionsPage },
    { path: '/branchchat', component: BranchChatPage },
    { path: '/customerchat', component: CustomerChatPage },
    { path: '/driverchat', component: DriverChatPage },
    { path: '/sellerchat', component: SellerChatPage },
    { path: '/customer', component: CustomerPage },
    { path: '/commissionseller', component: CommissionSellerPage },
    // { path: '/Commission', component: CommissionPage },
    { path: '/analytics', component: AnalyticsPage },
    { path: '/branches', component: BranchesPage },
    { path: '/driver', component: DriverPage },
    { path: '/currentbalance', component: CurrentBalancePage },
    { path: '/depositoperations', component: DepositOperationsPage },
    { path: '/finance', component: FinancePage },
    { path: '/lastoperation', component: LastOperationPage },
    { path: '/wallet', component: WalletPage },
    { path: '/notification', component: NotificationPage },
    { path: '/pendingproducts', component: PendingProductsPage },
    { path: '/productcontrol', component: ProductControlPage },
    { path: '/products', component: ProductsPage },
    { path: '/generalreports', component: generalreports },
    { path: '/newseller', component: NewSeller },
    // { path: '/settings', component: Settings },
    // { path: '/productdetails', component: ProductDetailsPage },
  ]
})

const app = createApp(App)
app.use(router)
app.mount('#app')
