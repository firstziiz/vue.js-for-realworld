<template>
  <div>
    <div class="row">
      <div class="col s12">
        <div class="card">
          <div class="card-content red-text">
            <div class="center-align"><span class="card-title">Profile</span></div>
          </div>
          <div class="card-action">
            <profile-detail :profile="profile"></profile-detail>
            <router-link to="/profile/edit" class="waves-effect waves-light btn">Edit</router-link>
            <router-link to="edit" append class="waves-effect waves-light btn">Edit</router-link>
            <!-- Append คือการเติมเข้าไปด้านหลัง -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Me } from '../services'
import ProfileDetail from './ProfileDetail'
export default {
  components: {
    ProfileDetail
  },
  data () {
    return {
      profile: {
        name: '',
        description: ''
      }
    }
  },
  created () {
    Me.get()
    .then((data) => {
      this.profile = data
    })
  }
}
</script>
