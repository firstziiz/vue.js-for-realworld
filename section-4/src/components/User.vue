<template>
  <div>
    <div class="collection">
      <div class="collection-item">
        User ID : {{ $route.params.id }}
      </div>
      <div class="collection-item">
        <profile-detail v-if="data" :profile="data"></profile-detail>
      </div>
    </div>
  </div>
</template>

<script>
  import ProfileDetail from './ProfileDetail'
  import { User } from '../services'
  export default {
    components: {
      ProfileDetail
    },
    data () {
      return {
        data: null
      }
    },
    created () {
      this.reUpdate()
    },
    watch: {
      $route: 'reUpdate'
    },
    methods: {
      reUpdate () {
        User.getRealtime(this.$route.params.id, (data) => {
          this.data = data
        })
      }
    }
  }
</script>
