<template>
  <div id="app">
    <Manu></Manu>
    <div class="container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Manu from './components/Manu';

export default {
  components: { Manu },
  mounted: () => {
    // console.log($('h1').text());
  },
};
</script>

<style>
</style>
