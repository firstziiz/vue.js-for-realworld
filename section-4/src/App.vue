<template>
  <div id="app">
    <div class="navbar-fixed">
      <nav>
        <div class="nav-wrapper">
          <router-link to="/" class="brand-logo" style="margin-left:0.4em">TwitMe!</router-link>
          <nav-menu></nav-menu>
        </div>
      </nav>
    </div>

    <div class="container is-fluid" style="margin-top:2em">
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
