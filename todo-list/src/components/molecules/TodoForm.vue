<template>
  <div class="todo-form">
      <input type="text" name="" id="">
      <button class="btn btn-success"> Ajouter !! </button>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class TodoForm extends Vue {
 
}
</script>

<style lang="scss" scoped>
 @import "@/components/config/scss/_variables.scss";
 .todo-form {

 }
</style>