import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './components/Home'
import Profile from './components/Profile.vue'
import User from './components/User.vue'
import SignIn from './components/SignIn.vue'
import ProfileEdit from './components/ProfileEdit.vue'
import { Auth } from './services'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', component: Home },
    { path: '/profile', component: Profile, meta: { requireAuth: true } },
    { path: '/profile/edit', component: ProfileEdit, meta: { requireAuth: true } },
    { path: '/user/:id', component: User },
    { path: '/signin', component: SignIn }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.matched.some((y) => y.meta.requireAuth)) {
    Auth.requireUser().then((user) => {
      next()
    }, () => {
      next({ path: '/signin', query: { redirect: to.fullPath } })
    })
    return
  }
  next()
})

export default router
