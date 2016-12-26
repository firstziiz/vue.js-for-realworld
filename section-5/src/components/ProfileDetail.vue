<template>
  <div>
    <div class="row">
      <div class="col s4 offset-s4">
        <img v-if="profile.photo" :src="profile.photo" class="circle responsive-img">
      </div>
    </div>
    <h4>Name : </h4> {{ profile.name | upper }}
    <h4>Description : </h4> {{ profile.description }}
  </div>
</template>

<script>
export default {
  props: ['profile']
}
</script>
