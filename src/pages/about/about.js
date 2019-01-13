import Vue from 'vue'
import App from './about.vue'
// import store from './store'
import router from './router'
import axios from 'axios'

// 导入bootstrap
import 'bootstrap337/dist/css/bootstrap.min.css'
import 'bootstrap337/dist/js/bootstrap.min.js'
import '@/assets/style/main.css'
import '@/assets/style/service.css'
import '@/assets/style/font-awesome.min.css'

// 导入jquery
import $ from 'jquery'

Vue.config.productionTip = false
Vue.prototype.$http = axios

new Vue({
  // store,
  router,
  render: h => h(App)
}).$mount('#app')
