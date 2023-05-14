<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  <!-- <h1>hello</h1> -->
  <!-- <DashboardPage></DashboardPage> -->
  <!-- <h1>hello wdasd lorem</h1> -->
  
  <!-- <router-link to="/customer">customer</router-link> -->
  <!-- <CustomerPage></CustomerPage> -->
  <!-- <CustomerDetailsPage></CustomerDetailsPage> -->
  <!-- <FinancePage></FinancePage> -->
  <!-- <DriverPage></DriverPage> -->
  <GeneralReportsPage></GeneralReportsPage>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue';
// import DashboardPage from '@/pages/dashboard.vue'
// import CustomerPage from './pages/customer/customer.vue'
// import CustomerDetailsPage from './pages/customer/customerdetails.vue'
// import FinancePage from './pages/Finance/Finance.vue'
// import DriverPage from './pages/Driver/driver.vue'
import GeneralReportsPage from './pages/Reports/generalreports.vue'

export default {
  name: 'App',
  components: {
    // HelloWorld,
    // DashboardPage,
    // CustomerPage,
    // CustomerDetailsPage,
    // FinancePage,
    // DriverPage,
    GeneralReportsPage,
    // BranchesPage,
    // SellersPage

  }
}
</script>

<!-- <style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style> -->
