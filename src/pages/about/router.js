import Vue from 'vue'
import Router from 'vue-router'
import AboutUs from './views/About.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/us',
      name: 'AboutUs',
      component: AboutUs
    },
    // {
    //   path: '/list',
    //   name: 'list',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () =>
    //     import(/* webpackChunkName: "about" */ './views/list.vue')
    // }
  ]
})
