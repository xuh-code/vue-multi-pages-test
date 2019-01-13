import Vue from 'vue'
import App from './content.vue'
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
// import BaiduMap from 'vue-baidu-map'
// Vue.use(BaiduMap, {
//   ak: 'aQbLP6y3AFLt4xXWqS45q16G0I2kSjA0'    //这个地方是官方提供的ak密钥
// })

new Vue({
  // store,
  router,
  render: h => h(App)
}).$mount('#app')
