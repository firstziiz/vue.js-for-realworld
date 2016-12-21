<template lang="html">
  <div class="panel panel-default">
    <div class="panel-heading">
      Sign In
    </div>
    <div class="panel-body">
      <button @click="signIn" class="btn btn-danger">Sign in with Google </button>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase';

export default {
  methods: {
    signIn() {
      firebase.auth().signInWithPopup(new firebase.auth.GoogleAuthProvider())
      .then(() => {
        this.$router.replace(this.$route.query.redirect || '/');
      });
    },
  },
};
</script>

<style lang="css">
</style>
