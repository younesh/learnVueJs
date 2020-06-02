<template>
  <div id="app" class="container">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/tests">Tests</router-link> |
      <router-link to="/TestsAlgo">Tests Algo</router-link>
    </div>
    <router-view />
  </div>
</template>

<style lang="scss">
  // variables 
  $gutter-base : 30px;
  $gutter-half :  $gutter-base / 2 ;
  $border-default : 1px solid #CCC;
  @import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

  section.test {
    padding: $gutter-half;
    margin-bottom: $gutter-half;
    border: $border-default; 
  }
</style>
