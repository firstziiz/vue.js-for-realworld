<template>
  <div id="app">
    <div class="navbar-fixed">
      <nav>
        <div class="nav-wrapper">
          <router-link to="/" class="brand-logo">Vue Fire!</router-link>
          <nav-menu></nav-menu>
        </div>
      </nav>
    </div>

    <div class="container" style="margin-top: 50px;">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  import NavMenu from './components/NavMenu'
  export default {
    components: {
      NavMenu
    }
  }
</script>
