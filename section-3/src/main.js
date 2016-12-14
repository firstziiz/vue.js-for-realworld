// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import firebase from 'firebase';
import 'bootstrap/dist/css/bootstrap.min.css';

import App from './App';

import router from './router';

firebase.initializeApp({
  apiKey: 'AIzaSyBLXOUP3w1jtPmPsBZLimzFgN4dmzlLJ80',
  authDomain: 'vuefire-bf631.firebaseapp.com',
  databaseURL: 'https://vuefire-bf631.firebaseio.com',
  storageBucket: 'vuefire-bf631.appspot.com',
  messagingSenderId: '975903474599',
});

/* eslint-disable no-new */
new Vue({
  router,
  el: '#app',
  template: '<App/>',
  components: { App },
});
