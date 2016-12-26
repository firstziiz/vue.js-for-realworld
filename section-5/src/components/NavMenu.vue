<template>
  <ul id="nav-mobile" class="right hide-on-med-and-down">
    <router-link tag="li" to="/profile" active-class="active">
      <a>Profile</a>
    </router-link>
    <router-link v-if="currentUser == null" tag="li" to="/signin" active-class="active">
      <a>SignIn</a>
    </router-link>
    <li @click="signOut" v-if="currentUser">
      <a>SignOut</a>
    </li>
  </ul>
</template>

<script>
import { Auth, Me } from '../services'
export default {
  data () {
    return {
      currentUser: null
    }
  },
  created () {
    Auth.auth().onAuthStateChanged((user) => {
      this.currentUser = user
    })
  },
  methods: {
    signOut () {
      Me.logout()
      this.$router.replace('/')
    }
  }
}
</script>
