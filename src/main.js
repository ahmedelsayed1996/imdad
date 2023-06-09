import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import login from './pages/Register/login'
import VerifyCodePage from './pages/Register/verifycode'
import Discounts from './pages/Discounts/Discounts'
import DashboardPage from './pages/dashboard'
import SettingsPage from './pages/Settings/Settings'
import WhatsappmsgsPage from './pages/Marketing/Whatsappmsgs'
import CommissionsPage from './pages/commission/commissions'
import BranchChatPage from './pages/Chats/BranchChat'
import CustomerPage from './pages/customer/customer'
import CustomerDetailsPage from './pages/customer/customerdetails'
import CommissionSellerPage from './pages/commission/commissionforseller'
import NotificationPage from './pages/Marketing/Notification'
import ProductsPage from './pages/Products/Products'
import ProductControlPage from './pages/Products/ProductControl'
import PendingProductsPage from './pages/Products/PendingProducts'
import ProductDetailsPage from './pages/Products/ProductDetails'
import BranchesPage from './pages/Branches/Branches'
import DriverPage from './pages/Driver/driver'
import FinancePage from './pages/Finance/Finance'
import LastOperationPage from './pages/Finance/LastOperation'
import GeneralReportsPage from './pages/Reports/generalreports'
import NewSellerPage from './pages/Sellers/NewSeller'
import SellersDetailsPage from './pages/Sellers/SellersDetails'
import DriverChatPage from './pages/Chats/DriverChat'
import CustomerChatPage from './pages/Chats/CustomerChat'
import SellerChatPage from './pages/Chats/SellerChat'
import AnalyticsPage from './pages/Analytics/analytics'
import CurrentBalancePage from './pages/Finance/CurrentBalance'
import DepositOperationsPage from './pages/Finance/DepositOperations'

import WalletPage from './pages/Finance/Wallet'
import SealsPage from './pages/Seals/Seals'
const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: login },
    { path: '/verifycode', component: VerifyCodePage },
    { path: '/dashboard', component: DashboardPage },
    { path: '/notification', component: NotificationPage },
    { path: '/products', component: ProductsPage },
    { path: '/productcontrol', component: ProductControlPage },
    { path: '/pendingproducts', component: PendingProductsPage },
    { path: '/productdetails', component: ProductDetailsPage },
    { path: '/branches', component: BranchesPage },
    { path: '/driver', component: DriverPage },
    { path: '/finance', component: FinancePage },
    { path: '/lastoperation', component: LastOperationPage },
    { path: '/generalreports', component: GeneralReportsPage },
    { path: '/dicounts', component: Discounts },
    { path: '/msgs', component: WhatsappmsgsPage },
    { path: '/newseller', component: NewSellerPage },
    { path: '/sellersdetails', component: SellersDetailsPage },    
    { path: '/customer', component: CustomerPage },
    { path: '/customerdetails', component: CustomerDetailsPage },
    { path: '/driverchat', component: DriverChatPage },
    { path: '/branchchat', component: BranchChatPage },
    { path: '/customerchat', component: CustomerChatPage },
    { path: '/sellerchat', component: SellerChatPage },
    { path: '/analytics', component: AnalyticsPage },
    { path: '/settings', component: SettingsPage },    
    { path: '/currentbalance', component: CurrentBalancePage },    
    { path: '/depositoperations', component: DepositOperationsPage },    
    { path: '/commissions', component: CommissionsPage },
    { path: '/commissionseller', component: CommissionSellerPage },
    { path: '/wallet', component: WalletPage },
    { path: '/seals', component: SealsPage },

  ]
})

const app = createApp(App)
app.use(router)
app.mount('#app')
