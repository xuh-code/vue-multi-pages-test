import Vue from 'vue'
import App from './index.vue'
// import store from './store'
import router from './router'
import BootstrapVue from 'bootstrap-vue'

Vue.use(BootstrapVue);
Vue.config.productionTip = false

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import '@/assets/style/main.css'

new Vue({
  // store,
  router,
  render: h => h(App)
}).$mount('#app')
