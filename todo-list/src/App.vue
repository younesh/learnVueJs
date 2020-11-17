<template>
  <div id="app" class="container">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/todo">Todo list </router-link> |
      <router-link to="/TodoVuex">Todo Vuex test </router-link> |
      <router-link to="/about">About</router-link>
    </div>
     <span> NB : to lunch this app : </span>
     <code>
       yarn serve --port 5051
     </code>
    <router-view />
  </div>
</template>

<style lang="scss">
  @import "./components/config/scss/_variables.scss";
  @import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

  section.test {
    padding: $gutter-half;
    margin-bottom: $gutter-half;
    border: $border-default; 
  }

</style>
