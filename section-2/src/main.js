import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'

import Home from './components/Home'
import Profile from './components/Profile'

/* eslint-disable no-new */

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    { path: '/', component: Home },
    { path: '/profile', component: Profile },
    { path: '/*', redirect: '/' }
  ],
  linkActiveClass: 'active'
})

new Vue({
  router,
  el: '#app',
  template: '<App/>',
  components: { App }
})
