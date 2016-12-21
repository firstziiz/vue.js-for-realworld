<template lang="html">
  <nav class="navbar navbar-default">
    <div class="container-fluid">
      <div class="navbar-header">
        <a class="navbar-brand" href="#">Vue Twitter</a>
      </div>
      <div id="navbar" class="">
        <ul class="nav navbar-nav">
          <router-link to="/" tag="li" exact>
            <a>Home</a>
          </router-link>
          <router-link to="/profile" tag="li"  v-if="currentUser">
            <a>Profile</a>
          </router-link>
          <router-link to="/user/1" tag="li">
            <a>User</a>
          </router-link>
          <li v-if="currentUser">
            <a href="#" @click="signOut">SignOut</a>
          </li>
          <router-link v-else to="/signin" tag="li">
            <a>SignIn</a>
          </router-link>
        </ul>
      </div><!--/.nav-collapse -->
    </div><!--/.container-fluid -->
  </nav>
</template>

<script>
import firebase from 'firebase';

export default {
  data: () => ({
    currentUser: null,
  }),
  created() {
    const auth = firebase.auth();
    console.log(auth);

    auth.onAuthStateChanged((user) => {
      console.log(`current user: ${user}`);
      this.currentUser = user;
    });
  },
  methods: {
    signOut() {
      firebase.auth().signOut();
      this.$router.replace('/');
    },
  },
};
</script>

<style lang="css">
</style>
