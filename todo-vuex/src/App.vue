<template>
  <div id="app" class="container">
    <div id="nav">
      <router-link to="/">Home</router-link> |
    </div>
     <span> NB : to lunch this app : </span>
     <code>
       yarn serve --port 5051
     </code>
    <router-view />
  </div>
</template>

<style lang="scss">
@import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
@import "~@/assets/scss/_variables.scss"; // components/config/scss/_variables.scss
section.test {
  padding: $gutter-half;
  margin-bottom: $gutter-half;
  border: $border-default;
}
</style>
