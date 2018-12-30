import Vue from 'vue'
import App from './service.vue'
// import store from './store'
import router from './router'
import axios from 'axios'

// 导入bootstrap
import 'bootstrap337/dist/css/bootstrap.min.css'
import 'bootstrap337/dist/js/bootstrap.min.js'
import '@/assets/style/main.css'
import '@/assets/style/responsive.css'
import '@/assets/style/font-awesome.min.css'

import PageHeader from '@/components/common/Header'
import PageFooter from '@/components/common/footer'
// 导入jquery
import $ from 'jquery'

Vue.config.productionTip = false
Vue.prototype.$http = axios

Vue.component('page-header', PageHeader)
Vue.component('page-footer', PageFooter)
Vue.use($)

new Vue({
  // store,
  router,
  render: h => h(App)
}).$mount('#app')
