<template>
  <div id="app">
    <nav class="navbar navbar-default">
      <div class="container-fluid">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand" href="#">Vue Twitter</a>
        </div>
        <div id="navbar" class="navbar-collapse collapse">
          <ul class="nav navbar-nav">
            <router-link to="/" tag="li" exact>
              <a>Home</a>
            </router-link>
            <router-link to="/profile" tag="li">
              <a>Profile</a>
            </router-link>
            <router-link to="/user/1" tag="li">
              <a>User</a>
            </router-link>
            <router-link to="/signin" tag="li">
              <a>SignIn</a>
            </router-link>
          </ul>
        </div><!--/.nav-collapse -->
      </div><!--/.container-fluid -->
    </nav>
    <div class="container">
      <h1>Section 3 : Vue for real world</h1>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  mounted: () => {
    // console.log($('h1').text());
  },
};
</script>

<style>
</style>
