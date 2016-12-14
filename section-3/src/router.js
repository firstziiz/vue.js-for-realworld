import Vue from 'vue';
import VueRouter from 'vue-router';

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
});

export default router;
