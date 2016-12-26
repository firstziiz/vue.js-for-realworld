<template>
  <div>
    <div class="row">
      <div class="col l6 offset-l3 m8 offset-m2 s12">
        <div class="card">
          <div class="card-content red-text">
            <span class="card-title"><div class="center-align">Login</div></span>
            <div class="card-action">
              <div class="input-field">
                <input id="last_name" type="text" class="validate">
                <label for="last_name">Email-Address</label>
              </div>
              <div class="input-field">
                <input id="password" type="text" class="validate">
                <label for="password">Password</label>
              </div>
              <div class="center-align">
                <div @click="signIn" class="waves-effect waves-light btn">Sign In with Google+</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Auth } from '../services'
export default {
  beforeRouteEnter (to, from, next) {
    Auth.requireUser().then((user) => {
      next(to.query.redirect || '/')
      return
    }, () => {
      next()
    })
  },
  methods: {
    signIn () {
      Auth.google().then((res) => {
        if (this.$route.query.redirect) {
          this.$router.replace(this.$route.query.redirect)
        } else {
          this.$router.replace('/')
        }
      })
      console.log('signin')
    }
  }
}
</script>
