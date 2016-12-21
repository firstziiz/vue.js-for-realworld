import Vue from 'vue';
import VueRouter from 'vue-router';
import firebase from 'firebase';

import Home from './components/Home';
import Profile from './components/Profile';
import SignIn from './components/SignIn';
import User from './components/User';

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', component: Home },
    { path: '/profile', component: Profile, meta: { requiresAuth: true } },
    { path: '/signin', component: SignIn },
    { path: '/user/:id', component: User },
  ],
  linkActiveClass: 'active',
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(x => x.meta.requiresAuth)) {
    const cb = firebase.auth().onAuthStateChanged((user) => {
      cb();
      if (user) {
        next();
        return;
      }
      next({
        path: '/signin',
        query: { redirect: to.fullPath },
      });
    });
    return;
  }

  next();
});

export default router;
