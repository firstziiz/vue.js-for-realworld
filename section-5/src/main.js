import Vue from 'vue'
import '!style!css!materialize-css/dist/css/materialize.min.css'
import '!script!jquery/dist/jquery.min.js'
import '!script!materialize-css/dist/js/materialize.min.js'
import router from './router'
import firebase from 'firebase'
import App from './App'
import moment from 'moment'

// Initialize Firebase
firebase.initializeApp({
  apiKey: 'AIzaSyBBgKW2JtYCO9a86AhZepaAf09s3Rr2AkU',
  authDomain: 'vuejs-realworld.firebaseapp.com',
  databaseURL: 'https://vuejs-realworld.firebaseio.com',
  storageBucket: 'vuejs-realworld.appspot.com',
  messagingSenderId: '651655974903'
})

Vue.filter('upper', (value) => {
  if (typeof value === 'string') {
    return value.toUpperCase()
  } else {
    return value
  }
})

const ticker = new Vue({
  data () {
    return {
      tick: 0
    }
  },
  created () {
    setInterval(() => {
      this.tick = Date.now()
    }, 10000)
  }
})

Vue.filter('fromNow', (value) => {
  ticker.tick
  console.log(Date.now())
  return moment(value).fromNow()
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
