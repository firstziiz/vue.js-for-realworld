<template>
  <div>
    <div class="row">
      <div class="col s12">
        <div class="card">
          <div class="card-content red-text">
            <div class="center-align"><span class="card-title">Profile Edit</span></div>
          </div>
          <div class="card-action">
            <profile-form v-model="profile" @saveTrigger="save" @cancel="back"></profile-form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ProfileForm from './ProfileForm.vue'
import { Me } from '../services'
export default {
  components: {
    ProfileForm
  },
  methods: {
    save (data) {
      Me.set(this.profile).then(() => {
        this.back()
      })
    },
    back () {
      this.$router.push('/profile')
    }
  },
  data () {
    return {
      profile: {
        name: '',
        description: '',
        photo: ''
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
